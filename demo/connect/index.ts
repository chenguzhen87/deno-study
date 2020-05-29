// deno run --allow-net index.ts
// Connects to the hostname (default is "127.0.0.1") and port on the named transport (default is "tcp"), and resolves to the connection (Conn).
// https://deno.js.cn/t/topic/107
const conn1 = await Deno.connect({ port: 80 });
console.log(conn1);
// {
//     rid: 3,
//     remoteAddr: { hostname: "127.0.0.1", port: 80, transport: "tcp" },
//     localAddr: { hostname: "127.0.0.1", port: 60669, transport: "tcp" }
//   }
// const conn2 = await Deno.connect({ hostname: "192.0.2.1", port: 80 });
// const conn3 = await Deno.connect({ hostname: "[2001:db8::1]", port: 80 });
// const conn4 = await Deno.connect(
//   { hostname: "golang.org", port: 80, transport: "tcp" },
// );
// const conn5 = await Deno.connect({ path: "/foo/bar.sock", transport: "unix" });

// Requires allow-net permission for "tcp" and allow-read for unix.
