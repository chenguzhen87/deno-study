// Listen announces on the local transport address.
// Requires allow-net permission.
// deno run --allow-net index.ts

const listener1 = Deno.listen({ port: 80 });
// const listener2 = Deno.listen({ hostname: "192.0.2.1", port: 80 });
// const listener3 = Deno.listen({ hostname: "[2001:db8::1]", port: 80 });
// const listener4 = Deno.listen(
//   { hostname: "golang.org", port: 80, transport: "tcp" },
// );
