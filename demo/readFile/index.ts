// Reads and resolves to the entire contents of a file as an array of bytes. TextDecoder can be used to transform the bytes to string if required. Reading a directory returns an empty data array.
// deno run --allow-read index.ts

const decoder = new TextDecoder();
const data = await Deno.readFile("./data.json"); // Uint8Array
console.log(decoder.decode(data));
export { }; // 等待官方修复vscode-deno插件

