export const securityHeaders: Record<string, string> = {
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  "Content-Security-Policy": [
    "base-uri 'none'",
    "object-src 'none'",
    "form-action 'none'",
    "frame-ancestors 'self' https://chatgpt.com",
  ].join("; "),
};

export function secureResponse(response: Response, request: Request): Response {
  const headers = new Headers(response.headers);
  for (const [name, value] of Object.entries(securityHeaders)) {
    // Preserve upstream policies; multiple CSP policies are enforced together.
    if (name === "Content-Security-Policy" && headers.has(name)) {
      headers.append(name, value);
    } else {
      headers.set(name, value);
    }
  }
  // Do not trust client-provided forwarding headers or force HTTPS on localhost.
  if (new URL(request.url).protocol === "https:") {
    headers.set("Strict-Transport-Security", "max-age=31536000");
  }
  if (response.status >= 500) headers.set("Cache-Control", "no-store");
  headers.delete("X-Powered-By");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
