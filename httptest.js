const http = require("http")



const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.write("Welcome to the homepage made completely by yourself!")
        res.end()
    } else if(req.url==="/about"){
        res.write("Here you can read some details about us!")
        res.end()
    } else{
        res.write(`
        <h1> Ooopsie daisy, you suck a cock </h1>
        <p> Website you are looking for does not exist! </p>
        <a href="/"> Go back </a>
        `)
        res.end()
    }
        
    
})  




server.listen(5000);