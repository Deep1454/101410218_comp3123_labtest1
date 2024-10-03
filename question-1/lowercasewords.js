function lowerCaseWords(mixedArray) {
    return new Promise(function(resolve, reject) {
        if (!Array.isArray(mixedArray)) {
            reject("Input is not an array");
        } else {
            let result = [];
            let i = 0;
            while (i < mixedArray.length) {
                if (typeof mixedArray[i] === 'string') {
                    result.push(mixedArray[i].toLowerCase());
                }
                i++;
            }
            resolve(result);
        }
    });
}

const mixedArray = ['PIZZA', true, 50, false, 'PASTA'];
lowerCaseWords(mixedArray)
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.error(error);
    });