// Returns absolute normalized path, with symbolic links resolved.
// deno run --allow-read index.ts
// Requires allow-read permission for the target path. Also requires allow-read permission for the CWD if the target path is relative.
Deno.symlinkSync("file.txt", "symlink_file.txt");
const realPath = Deno.realPathSync("./file.txt");
const realSymLinkPath = Deno.realPathSync("./symlink_file.txt");
console.log(realPath);
console.log(realSymLinkPath);