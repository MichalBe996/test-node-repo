const path = require("path");



/// returns path separator 
console.log(path.sep)

///returns path to specific folder or file
const filePath = path.join("content", "subfolder", "test.txt")
console.log(filePath)



const base = path.basename(filePath)
console.log(base)


/// provides absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt")
console.log(absolute)