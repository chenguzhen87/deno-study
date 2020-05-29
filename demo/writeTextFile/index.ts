// 将字符串数据异步写入给定路径，如果需要，默认情况下创建新文件，否则将覆盖。
await Deno.writeTextFile("hello1.txt", "Hello world\n"); // overwrite "hello1.txt" or create it
