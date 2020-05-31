// Synchronously read from a resource ID (rid) into an array buffer (buffer).

// Returns either the number of bytes read during the operation or EOF (null) if there was nothing more to read.

// It is possible for a read to successfully return with 0 bytes. This does not indicate EOF.

// This function is one of the lowest level APIs and most users should not work with this directly, but rather use Deno.readAllSync() instead.

// It is not guaranteed that the full buffer will be read in a single call.

// if "bar.txt" contains the text "546369005@qq.com":
// deno run --allow-read index.ts 
const file = Deno.openSync("bar.txt");
const buf = new Uint8Array(100);
const numberOfBytesRead = Deno.readSync(file.rid, buf);
const text = new TextDecoder().decode(buf);  // "546369005@qq.com"
console.log(text);
Deno.close(file.rid);