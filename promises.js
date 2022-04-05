const getAllStudents = ()=>{
    return ["one", "two", "three", "siz", "seven"]
}

const countStudents = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(getAllStudents().length)
            reject("Some error")
        }, 2000)
    })
}


countStudents()
.then((response)=>{
    console.log(response)
})
.catch((err)=>{
    console.log(err)
})
