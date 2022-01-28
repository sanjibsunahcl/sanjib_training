function usePromise() {
    
    const makingCoffee = new Promise((resolve, reject) => {
        
        console.log('making coffee is started');
        let makingDone = true; 
        if(makingDone) {
            resolve('making is done');
        }
        else {
            reject('making canceled');
        }

    });
    console.log(makingCoffee);
    return makingCoffee;
}

usePromise()
    .then(
        (status) => {
            console.log(status);
            console.log('serve the Coffee');
        })
    .catch((status) => console.log(status));


