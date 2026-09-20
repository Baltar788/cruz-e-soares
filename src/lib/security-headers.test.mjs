import { test } from "node:test";
import assert from "node:assert/strict";
import { secureResponse } from "./security-headers.ts";

test("protects HTML without changing the body or content type", async () => {
  const result = secureResponse(
    new Response("<h1>Site</h1>", {
      headers: { "Content-Type": "text/html", "X-Powered-By": "framework" },
    }),
    new Request("https://example.com/"),
  );
  assert.equal(await result.text(), "<h1>Site</h1>");
  assert.equal(result.headers.get("Content-Type"), "text/html");
  assert.equal(result.headers.get("X-Content-Type-Options"), "nosniff");
  assert.equal(result.headers.get("X-Powered-By"), null);
  assert.match(result.headers.get("Strict-Transport-Security"), /max-age=31536000/);
  assert.match(result.headers.get("Content-Security-Policy"), /form-action 'none'/);
  assert.match(result.headers.get("Permissions-Policy"), /camera=\(\)/);
});

test("preserves redirects and upstream CSP", () => {
  const result = secureResponse(
    new Response(null, {
      status: 302,
      headers: {
        Location: "/contato",
        "Content-Security-Policy": "script-src 'self'",
      },
    }),
    new Request("https://example.com/"),
  );
  assert.equal(result.status, 302);
  assert.equal(result.headers.get("Location"), "/contato");
  assert.match(result.headers.get("Content-Security-Policy"), /script-src 'self'/);
  assert.match(result.headers.get("Content-Security-Policy"), /base-uri 'none'/);
});

test("does not trust forwarded HTTPS on local HTTP and does not cache errors", () => {
  const result = secureResponse(
    new Response("Error", { status: 500 }),
    new Request("http://localhost/", { headers: { "X-Forwarded-Proto": "https" } }),
  );
  assert.equal(result.headers.get("Strict-Transport-Security"), null);
  assert.equal(result.headers.get("Cache-Control"), "no-store");
});
