// Creates a new directory with the specified path.
// Defaults to throwing error if the directory already exists.
// Requires allow-write permission.

await Deno.mkdir("new_dir");
await Deno.mkdir("nested/directories", { recursive: true }); // 递归创建
await Deno.mkdir("restricted_access_dir", { mode: 0o700 });