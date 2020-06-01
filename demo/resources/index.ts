// Returns a map of open resource ids (rid) along with their string representations. This is an internal API and as such resource representation has any type; that means it can change any time.
// deno run --allow-read index.ts
console.log(Deno.resources());
// { 0: "stdin", 1: "stdout", 2: "stderr" }
Deno.openSync("./test.file");
console.log(Deno.resources());
// { 0: "stdin", 1: "stdout", 2: "stderr", 3: "fsFile" }
