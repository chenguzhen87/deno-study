
//deno run --allow-write --allow-read index.ts
const encoder = new TextEncoder();
const data = encoder.encode("Hello world");
const file = await Deno.open("write.txt",{ read: true, write: true });
const bytesWritten = await Deno.write(file.rid, data); // 11
Deno.close(file.rid);