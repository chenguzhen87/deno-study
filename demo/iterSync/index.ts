// Turns a Reader, r, into an async iterator.
// deno run --allow-read index.ts
let f = await Deno.open("test.txt");
for (const chunk of Deno.iterSync(f)) {
  console.log(chunk);
}
f.close();

// Uint8Array(8) [
//     99, 104, 101,
//     110, 122, 104,
//     101, 110
//   ]

// Second argument can be used to tune size of a buffer. Default size of the buffer is 32kB.

let file = await Deno.open("test.txt");
const iter = Deno.iter(file, {
  bufSize: 1024 * 1024,
});
for await (const chunk of iter) {
  console.log(chunk);
}
file.close();
