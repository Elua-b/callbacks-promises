const getAllStudents = ()=>{
    return ["one", "two", "three", "siz", "seven"]
}

const countStudents = (callback)=>{
    setTimeout(()=>{
        callback(getAllStudents().length)
    }, 2000)
}

countStudents((num)=>{
    console.log(num)
})

