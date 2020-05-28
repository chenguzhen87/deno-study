const contentBytes = new TextEncoder().encode("Hello World");
await Deno.writeAll(Deno.stdout, contentBytes);

// Example writing to file
// const contentBytes = new TextEncoder().encode("Hello World");
// const file = await Deno.open('test.txt', {write: true});
// await Deno.writeAll(file, contentBytes);
// Deno.close(file.rid);

// Example writing to buffer
// const contentBytes = new TextEncoder().encode("Hello World");
// const writer = new Deno.Buffer();
// await Deno.writeAll(writer, contentBytes);
// console.log(writer.bytes().length);  // 11