// deno run --allow-write index.ts
// This API currently throws on Windows
await Deno.chmod("./permission.txt", 0o666);
