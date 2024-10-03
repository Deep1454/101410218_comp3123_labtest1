function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Promise.resolve({ message: 'delayed success!' }));
        }, 500);
    });
}


function rejectedPromise() {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error('delayed exception!'));
        }, 500);
    });
}

resolvedPromise().then(function(result) {
    console.log(result);
});

rejectedPromise().catch(function(error) {
    console.error({ error: error.message }); 
});
