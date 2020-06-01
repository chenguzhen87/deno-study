// Removes the named file or directory.
// deno run --allow-write index.ts
// Throws error if permission denied, path not found, or path is a non-empty directory and the recursive option isn't set to true.
// Requires allow-write permission.
await Deno.remove("file.txt");
await Deno.remove("file/data.json", { recursive: true });