// Listen announces on the local transport address over TLS (transport layer security).
// Requires allow-net permission.
// 因为没有证书，所以报错 Uncaught Error: No certificates found in cert file
// deno run --allow-net --allow-read index.ts
const lstnr = Deno.listenTls({ port: 443, certFile: "./server.crt", keyFile: "./server.key" });
