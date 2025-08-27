import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { token } = req.body;

    if (!token) return res.status(400).json({ success: false, error: "Missing token" });

    const secret = process.env.TURNSTILE_SECRET; // ta clé secrète ici
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secret}&response=${token}`
    });
    const data = await response.json();
    res.status(200).json(data);
  } else {
    res.status(405).json({ success: false, error: "Method not allowed" });
  }
}
