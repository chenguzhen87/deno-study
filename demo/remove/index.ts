// Removes the named file or directory.

await Deno.remove("file.txt");
await Deno.remove("file/data.json", { recursive: true });