import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const CONTACT_EMAIL = "yanovix.com@gmail.com";

export const CONTACT_SERVICES = [
  "AI Agents",
  "Voice AI",
  "Custom SaaS",
  "Enterprise Automation",
  "WhatsApp / CRM Automation",
  "Other / Not sure",
] as const;

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  email: z.string().trim().email("Please enter a valid email"),
  company: z.string().trim().max(160).optional().default(""),
  service: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().min(10, "Please share a bit more detail"),
  botcheck: z.string().optional().default(""),
});

function env(key: string) {
  return (process.env[key] || "").trim();
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/** True when at least one email provider is configured on the server. */
export const getContactConfigured = createServerFn({ method: "GET" }).handler(async () => {
  return {
    configured: Boolean(env("GMAIL_APP_PASSWORD") || env("WEB3FORMS_ACCESS_KEY") || env("RESEND_API_KEY")),
    to: CONTACT_EMAIL,
  };
});

export const submitContact = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      throw new Error(parsed.error.issues[0]?.message || "Invalid form data");
    }
    return parsed.data;
  })
  .handler(async ({ data }) => {
    // Honeypot
    if (data.botcheck) {
      return { ok: true as const };
    }

    const subject = `YANOVIX inquiry - ${data.name}${data.company ? ` (${data.company})` : ""}`;
    const text = [
      "New inquiry from the YANOVIX website",
      "",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${data.company || "—"}`,
      `Service interest: ${data.service || "—"}`,
      "",
      "Message:",
      data.message,
    ].join("\n");

    // 1) Gmail SMTP (most reliable for yanovix.com@gmail.com)
    const gmailPass = env("GMAIL_APP_PASSWORD");
    if (gmailPass) {
      const nodemailer = await import("nodemailer");
      const user = env("GMAIL_USER") || CONTACT_EMAIL;
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user, pass: gmailPass },
      });
      await transporter.sendMail({
        from: `"YANOVIX Website" <${user}>`,
        to: CONTACT_EMAIL,
        replyTo: data.email,
        subject,
        text,
        html: `
          <div style="font-family:system-ui,sans-serif;line-height:1.5;color:#111">
            <h2>New YANOVIX website inquiry</h2>
            <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
            <p><strong>Company:</strong> ${escapeHtml(data.company || "—")}</p>
            <p><strong>Service:</strong> ${escapeHtml(data.service || "—")}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
          </div>
        `,
      });
      return { ok: true as const, via: "gmail" as const };
    }

    // 2) Web3Forms (server-side — no FormSubmit activation)
    const web3Key = env("WEB3FORMS_ACCESS_KEY");
    if (web3Key) {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: web3Key,
          subject,
          from_name: "YANOVIX Website",
          name: data.name,
          email: data.email,
          company: data.company || "—",
          service: data.service || "—",
          message: data.message,
        }),
      });
      const json = (await res.json()) as { success?: boolean; message?: string };
      if (!json.success) {
        throw new Error(json.message || "Unable to send your message. Please try again.");
      }
      return { ok: true as const, via: "web3forms" as const };
    }

    // 3) Resend
    const resendKey = env("RESEND_API_KEY");
    if (resendKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: env("RESEND_FROM") || "YANOVIX <onboarding@resend.dev>",
          to: [CONTACT_EMAIL],
          reply_to: data.email,
          subject,
          text,
        }),
      });
      if (!res.ok) {
        throw new Error("Unable to send your message. Please try again.");
      }
      return { ok: true as const, via: "resend" as const };
    }

    throw new Error(
      "Contact email is not set up yet. Add WEB3FORMS_ACCESS_KEY or GMAIL_APP_PASSWORD to .env (see .env.example).",
    );
  });
