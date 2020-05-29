// Creates a file if none exists or truncates an existing file and resolves to an instance of Deno.File.
// Requires allow-read and allow-write permissions.
// deno run --allow-read --allow-write index.ts

const file = await Deno.create("bar.txt");
console.log(file); // File { rid: 3 }
