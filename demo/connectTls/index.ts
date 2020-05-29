// Establishes a secure connection over TLS (transport layer security) using an optional cert file, hostname (default is "127.0.0.1") and port. The cert file is optional and if not included Mozilla's root certificates will be used (see also https://github.com/ctz/webpki-roots for specifics)
const conn1 = await Deno.connectTls({ port: 80 });
// const conn2 = await Deno.connectTls({ certFile: "./certs/my_custom_root_CA.pem", hostname: "192.0.2.1", port: 80 });
// const conn3 = await Deno.connectTls({ hostname: "[2001:db8::1]", port: 80 });
// const conn4 = await Deno.connectTls({ certFile: "./certs/my_custom_root_CA.pem", hostname: "golang.org", port: 80});

// Requires allow-net permission.
