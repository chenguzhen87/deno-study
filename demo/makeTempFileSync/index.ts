// Synchronously creates a new temporary file in the default directory for temporary files (see also Deno.dir("temp")), unless dir is specified. Other optional options include prefixing and suffixing the directory name with prefix and suffix respectively.

// The full path to the newly created file is returned.

// Multiple programs calling this function simultaneously will create different files. It is the caller's responsibility to remove the file when no longer needed.
// Requires allow-write permission.
// deno run --allow-write index.ts
const tmpFileName0  = Deno.makeTempFileSync();  // C:\Users\54636\AppData\Local\Temp\65954976
console.log(tmpFileName0);
const tmpFileName1  = Deno.makeTempFileSync({ prefix: 'my_temp' }); // C:\Users\54636\AppData\Local\Temp\my_tempb4619680
console.log(tmpFileName1);