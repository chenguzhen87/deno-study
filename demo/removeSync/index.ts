// Synchronously removes the named file or directory.
// Throws error if permission denied, path not found, or path is a non-empty directory and the recursive option isn't set to true.
// Requires allow-write permission.
// deno run --allow-write index.ts

Deno.removeSync("file.txt");
Deno.removeSync("file/data.json", { recursive: true });