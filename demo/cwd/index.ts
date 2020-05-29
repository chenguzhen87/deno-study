// Return a string representing the current working directory.

// If the current directory can be reached via multiple paths (due to symbolic links), cwd() may return any one of them.
// Throws Deno.errors.NotFound if directory not available.

// Requires --allow-read
// deno run --allow-read index.ts
const currentWorkingDirectory = Deno.cwd(); // E:\github-repo\deno-study\demo\cwd

console.log(currentWorkingDirectory);
