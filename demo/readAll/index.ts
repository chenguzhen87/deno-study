// Read Reader r until EOF (null) and resolve to the content as Uint8Array`.
// Example from stdin
// deno run --allow-read index.ts
const stdinContent = await Deno.readAll(Deno.stdin);
console.log(stdinContent);

// Example from file
const file = await Deno.open("my_file.txt", {read: true});
const myFileContent = await Deno.readAll(file);
console.log(myFileContent);
Deno.close(file.rid);

// Example from buffer
const myData = new Uint8Array(100);
// ... fill myData array with data
const reader = new Deno.Buffer(myData.buffer as ArrayBuffer);
const bufferContent = await Deno.readAll(reader);
console.log(bufferContent);