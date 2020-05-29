// deno run --allow-write index.ts
await Deno.writeTextFileSync("hello1.txt", "Hello world\n"); // overwrite "hello1.txt" or create it
