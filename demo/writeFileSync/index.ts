// deno run --allow-read --allow-write index.ts
const encoder = new TextEncoder();
const data = encoder.encode("Hello world\n");
Deno.writeFileSync("hello1.txt", data); // overwrite "hello1.txt" or create it
Deno.writeFileSync("hello2.txt", data, { create: false }); // only works if "hello2.txt" exists
Deno.writeFileSync("hello3.txt", data, { mode: 0o777 }); // set permissions on new file
Deno.writeFileSync("hello4.txt", data, { append: true }); // add data to the end of the file

export {}; // 等待官方修复vscode-deno插件
