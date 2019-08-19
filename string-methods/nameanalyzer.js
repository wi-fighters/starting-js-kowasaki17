const name = "Winston Churchill";
const fun ="schmoo";
let spaceCount = (name.split(" ").length - 1);
console.log(`Hello ${name}.
Your name is ${name.length - spaceCount} letters long.
The first letter of your name is ${name [0]}, the last is ${name [6]}.
If I wanted to be funny, I would call you ${name.substring(0, 3)}${fun}.`)
