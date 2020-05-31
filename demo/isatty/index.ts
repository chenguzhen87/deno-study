// Check if a given resource id (rid) is a TTY.
// deno run --allow-read index.ts (in linux)
// This example is system and context specific
const nonTTYRid = Deno.openSync("my_file.txt").rid;
const ttyRid = Deno.openSync("/dev/tty6").rid; // 表示控制终端
console.log(Deno.isatty(nonTTYRid)); // false
console.log(Deno.isatty(ttyRid)); // true
Deno.close(nonTTYRid);
Deno.close(ttyRid);
