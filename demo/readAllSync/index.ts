// Synchronously reads Reader r until EOF (null) and returns the content as Uint8Array.
// Example from stdin
// deno run --allow-read index.ts
const stdinContent = Deno.readAllSync(Deno.stdin);

// Example from file
const file = Deno.openSync("my_file.txt", {read: true});
const myFileContent = Deno.readAllSync(file);
Deno.close(file.rid);

// Example from buffer
const myData = new Uint8Array(100);
// ... fill myData array with data
const reader = new Deno.Buffer(myData.buffer as ArrayBuffer);
const bufferContent = Deno.readAllSync(reader);