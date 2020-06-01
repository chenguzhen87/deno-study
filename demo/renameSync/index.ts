// Synchronously renames (moves) oldpath to newpath. Paths may be files or directories. If newpath already exists and is not a directory, renameSync() replaces it. OS-specific restrictions may apply when oldpath and newpath are in different directories.
// On Unix, this operation does not follow symlinks at either path.
// It varies between platforms when the operation throws errors, and if so what they are. It's always an error to rename anything to a non-empty directory.
// Requires allow-read and allow-write permissions.
// deno run --allow-read --allow-write index.ts

Deno.renameSync("old/path", "new/path");
