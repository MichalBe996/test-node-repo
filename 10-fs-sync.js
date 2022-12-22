/// file module (sync version)

// importing sync file methods
const {readFileSync, writeFileSync} = require("fs");
console.log("START")



/// first argument is path to the file and the second one is the type of encoding, utf-8 is default, but provide it
/// if you want to be specific
const first = readFileSync("./content/first.txt", "utf-8")
const second = readFileSync("./content/second.txt", "utf-8")
//console.log(first)
//console.log(second)


/// creating new file
writeFileSync("./content/result-sync.txt", `Here is the result: ${first, second}`)
console.log("Done with this task")
console.log("Starting the next one")
