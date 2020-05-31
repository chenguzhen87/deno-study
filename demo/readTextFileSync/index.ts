// Synchronously reads and returns the entire contents of a file as utf8 encoded string encoded string. Reading a directory returns an empty string.
// Requires allow-read permission.
// deno run --allow-read index.ts
const data = Deno.readTextFileSync("hello.txt");
console.log(data)