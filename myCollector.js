const myFirst = require("./myFirst");
const mysecond = require("./mySecond");
var fs = require("fs");

var mod1 = myFirst.myMultipler(14);

fs.appendFile("result.txt", String(mod1) + "\n", function (err) {
  if (err) throw err;
  console.log("Saved!");
});

var mod2 = mysecond.myMultipler(14);
fs.appendFile("result.txt", String(mod2) + "\n", function (err) {
  if (err) throw err;
  console.log("Saved!");
});


