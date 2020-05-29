// deno run --allow-read index.ts
// Close the given resource ID (rid) which has been previously opened, such as via opening or creating a file. Closing a file when you are finished with it is important to avoid leaking resources.
const file = await Deno.open("my_file.txt");
// do work with "file" object
Deno.close(file.rid);
