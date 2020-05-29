// deno run --allow-read index.ts

const decoder = new TextDecoder();
const data = await Deno.readFile("./data.json"); // Uint8Array
console.log(decoder.decode(data));
export {}; // 等待官方修复vscode-deno插件
