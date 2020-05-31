// Synchronously returns a Deno.FileInfo for the specified path. If path is a symlink, information for the symlink will be returned instead of what it points to..// Requires allow-read permission.
// deno run --allow-read index.ts
const fileInfo = Deno.lstatSync("hello.txt");
console.log(fileInfo.isFile); // true
console.assert(fileInfo.isFile);
 