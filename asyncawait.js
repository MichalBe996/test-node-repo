

function first(){
    return new Promise((resolve, reject)=>{
        resolve(setTimeout(()=>{
            console.log("FIRST")
        }), 3000)
    })
}


function second(){
    return new Promise((resolve, reject) => {
        resolve(setTimeout(()=>{
            console.log("SECOND")
        }), 1000)
    })
}


first().
then(second)