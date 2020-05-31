// Synchronously creates a new directory with the specified path.
// Defaults to throwing error if the directory already exists.
// Requires allow-write permission.
// deno run --allow-write index.ts
Deno.mkdirSync("new_dir");
Deno.mkdirSync("nested/directories", { recursive: true });
Deno.mkdirSync("restricted_access_dir", { mode: 0o700 });