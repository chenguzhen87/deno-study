// Resolves to the full path destination of the named symbolic link.
// Throws TypeError if called with a hard link
// Requires allow-read permission.
// deno run index.ts --allow-read
await Deno.symlink("./test.txt", "./test_link.txt");
const target = await Deno.readLink("./test_link.txt"); // full path of ./test.txt
