
// Returns the full path destination of the named symbolic link.
// deno run index.ts --allow-read
// Throws TypeError if called with a hard link
// Requires allow-read permission.

Deno.symlinkSync("./test.txt", "./test_link.txt");
const target = Deno.readLinkSync("./test_link.txt"); // full path of ./test.txt