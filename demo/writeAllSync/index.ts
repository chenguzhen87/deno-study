// Example writing to stdout
const contentBytes = new TextEncoder().encode("Hello World");
Deno.writeAllSync(Deno.stdout, contentBytes);
// Example writing to file
// const contentBytes = new TextEncoder().encode("Hello World");
// const file = Deno.openSync('test.file', {write: true});
// Deno.writeAllSync(file, contentBytes);
// Deno.close(file.rid);

// Example writing to buffer
// const contentBytes = new TextEncoder().encode("Hello World");
// const writer = new Deno.Buffer();
// Deno.writeAllSync(writer, contentBytes);
// console.log(writer.bytes().length);  // 11

export {}; // 等待官方修复vscode-deno插件
