// Synchronously reads and returns the entire contents of a file as an array of bytes. TextDecoder can be used to transform the bytes to string if required. Reading a directory returns an empty data array.
// Requires allow-read permission.
// deno run --allow-read index.ts
const decoder = new TextDecoder("utf-8");
const data = Deno.readFileSync("hello.txt");
console.log(decoder.decode(data)); // chenzhen
