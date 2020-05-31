// Creates a new temporary file in the default directory for temporary files (see also Deno.dir("temp")), unless dir is specified. Other optional options include prefixing and suffixing the directory name with prefix and suffix respectively.

// This call resolves to the full path to the newly created file.

// Multiple programs calling this function simultaneously will create different files. It is the caller's responsibility to remove the file when no longer needed.
// Requires allow-write permission.
// deno run --allow-write index.ts
const tmpFileName0  = await Deno.makeTempFile();  // C:\Users\54636\AppData\Local\Temp\65954976
console.log(tmpFileName0);
const tmpFileName1  = await Deno.makeTempFile({ prefix: 'my_temp' }); // C:\Users\54636\AppData\Local\Temp\my_tempb4619680
console.log(tmpFileName1);