let i = 0
while (i < 3){ 
    try{
        console.log('starting calculator')
        let input = 0
        if(input === 0){
            throw 'value denied'
        }
        let res = 5 / input
    }catch(error){
        i++
    }finally{
        console.log('finishing calculator\n')
    }
}