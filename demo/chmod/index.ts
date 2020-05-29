// deno run --allow-write index.ts
// This API currently throws on Windows, Uncaught Error: not implemented
await Deno.chmod("./permission.txt", 0o666);
