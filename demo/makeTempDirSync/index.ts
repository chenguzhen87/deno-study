// Synchronously creates a new temporary directory in the default directory for temporary files (see also Deno.dir("temp")), unless dir is specified. Other optional options include prefixing and suffixing the directory name with prefix and suffix respectively.

// The full path to the newly created directory is returned.

// Multiple programs calling this function simultaneously will create different directories. It is the caller's responsibility to remove the directory when no longer needed.
// Requires allow-write permission.
// deno run --allow-write index.ts
const tempDirName0 = Deno.makeTempDirSync();  // C:\Users\54636\AppData\Local\Temp\10978a91
console.log(tempDirName0);
const tempDirName1 = Deno.makeTempDirSync({ prefix: 'my_temp' }); // C:\Users\54636\AppData\Local\Temp\my_tempfdff9ff5
console.log(tempDirName1);