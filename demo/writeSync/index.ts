// deno run --allow-write index.ts
const encoder = new TextEncoder();
const data = encoder.encode("Hello world");
const file = Deno.openSync("bar.txt", { write: true });
const bytesWritten = Deno.writeSync(file.rid, data); // 11
Deno.close(file.rid);
export {}; // 等待官方修复vscode-deno插件
