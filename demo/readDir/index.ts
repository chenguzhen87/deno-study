// Reads the directory given by path and returns an async iterable of Deno.DirEntry.
// deno run --allow-read index.ts
for await (const dirEntry of Deno.readDir("../")) {
    console.log(dirEntry);
    console.log(dirEntry.name);
  }