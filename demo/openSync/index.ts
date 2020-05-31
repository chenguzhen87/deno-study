// Synchronously open a file and return an instance of Deno.File. The file does not need to previously exist if using the create or createNew open options. It is the callers responsibility to close the file when finished with it.
// Requires allow-read and/or allow-write permissions depending on options.
// deno run --allow-write --allow-read index.ts
const file = Deno.openSync("bar.txt", { read: true, write: true });
// Do work with file
Deno.close(file.rid);