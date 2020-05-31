// Converts the input into a string that has the same format as printed by console.log().
// deno run index.ts
interface obj {
  [key: string]: any;
}

const obj: obj = {};
obj.propA = 10;
obj.propB = "hello";
const objAsString = Deno.inspect(obj); // { propA: 10, propB: "hello" }
console.log(typeof objAsString); // string
console.log(obj); // prints same value as objAsString, e.g. { propA: 10, propB: "hello" }

// You can also register custom inspect functions, via the customInspect Deno symbol on objects, to control and customize the output.
class A {
  x = 10;
  y = "hello";
  [Deno.customInspect](): string {
    return "x=" + this.x + ", y=" + this.y;
  }
}

const inStringFormat = Deno.inspect(new A()); // "x=10, y=hello"
console.log(inStringFormat); // prints "x=10
