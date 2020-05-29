// deno run --allow-read index.ts
// Copies from src to dst until either EOF (null) is read from src or an error occurs. It resolves to the number of bytes copied or rejects with the first error encountered while copying.
const source = await Deno.open("my_file.txt");
const buffer = new Deno.Buffer();
const bytesCopied1 = await Deno.copy(source, Deno.stdout);
const bytesCopied2 = await Deno.copy(source, buffer);

// param src The source to copy from

// param dst The destination to copy to

// param options Can be used to tune size of the buffer. Default size is 32kB
