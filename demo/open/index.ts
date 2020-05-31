// Open a file and resolve to an instance of Deno.File. The file does not need to previously exist if using the create or createNew open options. It is the callers responsibility to close the file when finished with it.
// deno run --allow-write --allow-read index.ts
const file = await Deno.open("bar.txt", { read: true, write: true });
// Do work with file
Deno.close(file.rid);