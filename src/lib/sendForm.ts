import { site } from "./site";

export type FormPayload = {
  source: string;
  name: string;
  email: string;
  phone: string;
  service?: string;
  message?: string;
};

export async function sendForm(payload: FormPayload): Promise<void> {
  const body = {
    _subject: `[Plus Facilities] New ${payload.source} from ${payload.name}`,
    _template: "table",
    _captcha: "false",
    Source: payload.source,
    Name: payload.name,
    Email: payload.email,
    Phone: payload.phone,
    Service: payload.service ?? "—",
    Message: payload.message ?? "—",
    "Submitted At": new Date().toLocaleString(),
  };
  const res = await fetch(site.formEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error("Failed to send");
}
