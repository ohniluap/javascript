//--> Promise statement

const promiseDemo = new Promise((resolve, reject) => {
    setTimeout (() => {
        console.log('Promise demo');
        resolve(10);
    }, 1 * 1000);

});

const promiseDemo2 = new Promise((resolve, reject) => {
    setTimeout (() => {
        console.log('Promise demo 2');
        resolve(20);
    }, 1 * 1000);

});

promiseDemo.then(res => {
    //throw new Error('Forced error');
    console.log(res)
    return Promise.resolve(res + 50)
}).then(res => {
    //throw new Error('Forced error');
    console.log('Two promise', res)
    return Promise.resolve(res)
}).catch(error => {
    console.log('Failed!!!', error)
    
})

// Promise RACE

Promise.race([promiseDemo, promiseDemo2])
.then(value => console.log(`Resolved: ${value}`))
.catch(reason => console.log(`Rejected: ${reason}`));

// Promise ALL

Promise.all([promiseDemo, promiseDemo2])
.then(nums => console.log("OK!", nums))
.catch(e => console.log("ERROR!", e.message))