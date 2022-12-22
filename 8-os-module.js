const os = require("os");



// info about current user
const user = os.userInfo();
console.log(user)

// uptime of the system (how long the computer has been running)

console.log(`The system uptime is ${os.uptime()} seconds`)



const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()


}


console.log(`The name is ${currentOS.name}`)
console.log(`The release version is ${currentOS.release}`)
console.log(`Total memory of your computer is ${currentOS.totalMem}`)
console.log(`Free memory of your computer is ${currentOS.freeMem}`)