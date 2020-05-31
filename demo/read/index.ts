
// Read from a resource ID (rid) into an array buffer (buffer).

// Resolves to either the number of bytes read during the operation or EOF (null) if there was nothing more to read.

// It is possible for a read to successfully return with 0 bytes. This does not indicate EOF.

// This function is one of the lowest level APIs and most users should not work with this directly, but rather use Deno.readAll() instead.

// It is not guaranteed that the full buffer will be read in a single call.

// if "bar.txt" contains the text "hello world":
// deno run --allow-read index.ts

const file = await Deno.open("bar.txt");
const buf = new Uint8Array(100);
const numberOfBytesRead = await Deno.read(file.rid, buf); // 11 bytes
const text = new TextDecoder().decode(buf);  // "hello world"
console.log(text);
Deno.close(file.rid);