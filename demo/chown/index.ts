// 更改常规文件或目录的所有者
// Requires allow-write permission.
// Throws Error (not implemented) if executed on Windows
// param path path to the file
// param uid user id (UID) of the new owner
// param gid group id (GID) of the new owner
await Deno.chown("myFile.txt", 1000, 1002);
