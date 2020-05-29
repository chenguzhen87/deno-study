// Synchronously change owner of a regular file or directory. This functionality is not available on Windows.
// Requires allow-write permission.
// Throws Error (not implemented) if executed on Windows
// param path path to the file
// param uid user id (UID) of the new owner
// param gid group id (GID) of the new owner
Deno.chownSync("myFile.txt", 1000, 1002);
