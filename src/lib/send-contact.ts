export const CONTACT_EMAIL = "yanovix.com@gmail.com";
export const CONTACT_WHATSAPP = "923000396116";
export const CONTACT_WHATSAPP_URL = `https://wa.me/${CONTACT_WHATSAPP}`;
/** Set to your company LinkedIn URL when ready; empty hides the icon. */
export const CONTACT_LINKEDIN_URL = "https://www.linkedin.com/in/muhammad-yahya-ahsan-576102328/";
/** Opens Gmail compose in the browser (more reliable than mailto when no desktop app is set). */
export const CONTACT_MAIL_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}&su=${encodeURIComponent("YANOVIX inquiry")}`;
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("YANOVIX inquiry")}`;
export const CONTACT_LOCATION = "Johar Town Phase 2, Lahore, Pakistan";
export const CONTACT_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_LOCATION)}`;
export const CONTACT_MAPS_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(CONTACT_LOCATION)}&z=15&output=embed`;

export function mailUrl(subject: string) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}&su=${encodeURIComponent(subject)}`;
}

export const CONTACT_SERVICES = [
  "AI Agents",
  "Voice AI",
  "Custom SaaS",
  "Enterprise Automation",
  "WhatsApp / CRM Automation",
  "Other / Not sure",
] as const;

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
  botcheck?: string;
};

/** Sends directly via Web3Forms (no FormSubmit activation). */
export async function sendContactEmail(data: ContactPayload) {
  if (data.botcheck) return { ok: true as const };

  const name = data.name.trim();
  const email = data.email.trim();
  const message = data.message.trim();
  const company = (data.company || "").trim();
  const service = (data.service || "").trim();

  if (name.length < 2) throw new Error("Please enter your name");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Please enter a valid email");
  if (message.length < 10) throw new Error("Please share a bit more detail");

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;
  if (!accessKey) {
    throw new Error("Contact form is not configured. Add VITE_WEB3FORMS_ACCESS_KEY to .env");
  }

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `YANOVIX inquiry - ${name}${company ? ` (${company})` : ""}`,
      from_name: "YANOVIX Website",
      name,
      email,
      company: company || "—",
      service: service || "—",
      message,
    }),
  });

  const json = (await res.json().catch(() => ({}))) as {
    success?: boolean;
    message?: string;
  };

  if (!json.success) {
    throw new Error(json.message || `Could not send. Please email ${CONTACT_EMAIL}`);
  }

  return { ok: true as const };
}

export function isContactConfigured() {
  return Boolean(import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
}
