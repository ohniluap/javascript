let errorFound = null
try{
    let obj = undefined
    console.log(obj)
    console.log(obj.property)
    console.log('Hello, world!')
    errorFound = false
}catch(error){
    console.log('[Error!]')
    console.log(error)
    errorFound = true
}finally{
    errorFound = null
    console.log('finalize software')
}

console.log(errorFound)