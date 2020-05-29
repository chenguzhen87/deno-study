// Creates a file if none exists or truncates an existing file and returns an instance of Deno.File.
// deno run --allow-read --allow-write index.ts

const file = Deno.createSync("bar.txt");
