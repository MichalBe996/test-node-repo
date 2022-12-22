const { readFile, writeFile } = require("fs");

/// async read file, first argument is path to file, second 
// is encoding (typically utf8) third is callback function that takes error and result as an argument
// ASYNC FUNCTION!!!

console.log("START")
/// IMPORTANT
/// what you see below is thing called callback hell and you want to avoid having your code look like that at any time 
readFile("./content/first.txt", "utf8", (err, result)=>{
    if(err){
        console.log(err)
        return;
    }
    const first = result;
    readFile("./content/second.txt", "utf8", (err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile("./content/result-async.txt",
        `Here is the result of async write: ${first} and ${second}`,
        (err, result)=>{
            if(err){
                console.log(err)
                return;
            }
            console.log("done with this task")
        })
        
    })
    
})


console.log("Starting next task")