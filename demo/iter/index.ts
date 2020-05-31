// Turns a Reader, r, into an async iterator.
// deno run --allow-read index.ts
let f = await Deno.open("test.txt");
for await (const chunk of Deno.iter(f)) {
  console.log(chunk);
}
f.close();

// Uint8Array(8) [
//     99, 104, 101,
//     110, 122, 104,
//     101, 110
//   ]
