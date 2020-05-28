// deno run --allow-write index.ts
const encoder = new TextEncoder();
console.log(encoder.encoding) // utf-8
const data = encoder.encode('chenzhen');
await Deno.writeFile("test.txt",data); // Uint8Array