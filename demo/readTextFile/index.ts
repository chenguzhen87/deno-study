// Asynchronously reads and returns the entire contents of a file as a utf8 encoded string. Reading a directory returns an empty data array.
// Requires allow-read permission.
// deno run --allow-read index.ts
const data = await Deno.readTextFile("hello.txt");
console.log(data);