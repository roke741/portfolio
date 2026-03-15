import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const CONTACT_TO_EMAIL = import.meta.env.CONTACT_TO_EMAIL;
const CONTACT_FROM_EMAIL =
  import.meta.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export const POST: APIRoute = async ({ request }) => {
  if (!import.meta.env.RESEND_API_KEY || !CONTACT_TO_EMAIL) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Falta configurar RESEND_API_KEY o CONTACT_TO_EMAIL.",
      }),
      { status: 500 },
    );
  }

  let payload: { name?: unknown; email?: unknown; message?: unknown };

  try {
    payload = await request.json();
  } catch {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Solicitud inválida.",
      }),
      { status: 400 },
    );
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Completa todos los campos.",
      }),
      { status: 400 },
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Ingresa un email válido.",
      }),
      { status: 400 },
    );
  }

  try {
    await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      subject: `Nuevo mensaje de ${name}`,
      replyTo: email,
      html: `
        <h2>Nuevo mensaje desde tu portfolio</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch {
    return new Response(
      JSON.stringify({
        success: false,
        message: "No se pudo enviar el mensaje. Intenta de nuevo.",
      }),
      { status: 500 },
    );
  }
};