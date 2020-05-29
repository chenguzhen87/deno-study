// deno run --allow-read --allow-write index.ts
// Copies the contents and permissions of one file to another specified path, by default creating a new file if needed, else overwriting. Fails if target path is a directory or is unwritable.
await Deno.copyFile("from.txt", "to.txt");
// Requires allow-read permission on fromPath. Requires allow-write permission on toPath.
