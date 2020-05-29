// Synchronously copies the contents and permissions of one file to another specified path, by default creating a new file if needed, else overwriting. Fails if target path is a directory or is unwritable.
// deno run --allow-read --allow-write index.ts
Deno.copyFileSync("from.txt", "to.txt");
