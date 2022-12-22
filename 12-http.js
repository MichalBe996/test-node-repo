

const http = require("http");
// to create web server using node you must first import http module and assign it to variable
// then you assign server to variable using built-in http method which is "createServer"
/// createServer method takes callback as a parameter, which then takes two objects as parameters, typically
/// names req (request) and res(response)


/// last step is defining on which port the server should be running, using method server.listen
const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.write("Welcome to the fucking server!")
        res.end()
        
    } 
    else if(req.url === "/about"){
        res.write("This is our short history")
        res.end();
        
    }
    else {
        res.write(`
        <h1>Oooopsie, something's fucky!</h1>
        <p>The page you want to find does not seem to exist : ( </p>
         <a href="/"> Turn back stranger </a>
    `)
    res.end()
    }
    

})
server.listen(5000);