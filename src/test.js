const myPromise = new Promise((resolve, reject) => {
    if (true) {
        setTimeout(()=> {
            resolve('I have succeeded');
        }, 1000)
    } else {
        reject('I have failed');
    }
    
});

myPromise
.then(value => value + '!!!!')
.then(val => val + '!?')
.then(newValue => console.log(newValue))
.catch(err => console.log(err))
