
// Resolves to the absolute normalized path, with symbolic links resolved.
// deno run --allow-read index.ts
await Deno.symlink("file.txt", "symlink_file.txt");
const realPath = await Deno.realPath("./file.txt");
const realSymLinkPath = await Deno.realPath("./symlink_file.txt");
console.log(realPath); 
console.log(realSymLinkPath);  