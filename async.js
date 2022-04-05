const getAllStudents = ()=>{
    return ["one", "two", "three", "siz", "seven"]
}

const countStudents = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(getAllStudents().length)
            // reject(new Error("Some error"))
        }, 2000)
    })
}


// countStudents()
// .then((response)=>{
//     console.log(response)
// })
// .catch((err)=>{
//     console.log(err)
// })


async function displayNumberOfStudents(){
    try{
        let numberOfStudents = await countStudents()
        console.log(numberOfStudents)
    }
    catch(e){
        console.log(e)
    }
}

displayNumberOfStudents()

