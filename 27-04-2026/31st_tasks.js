// ------------------ CALLBACK PART ------------------

function Add(a, b, callback) {
    let result = a + b;
    console.log("Addition:", result);
    callback(result);
}

function Multiply(value) {
    console.log("Multiplication:", value * 5);
}

Add(1, 2, Multiply);


// ------------------ PROMISE PART ------------------

function myPromiseFunction(a, b) {
    return new Promise(function(resolve, reject) {
        let result = a + b;

        if (result > 0) {
            resolve(result);
        } else {
            reject("Error: Result is not valid");
        }
    });
}


// ------------------ THEN PART ------------------

myPromiseFunction(1, 2)
.then(function(result) {
    console.log("After Multiply:", result * 5);
})


// ------------------ CATCH PART ------------------

myPromiseFunction(-1, -2)
.then(function(result) {
    console.log("After Multiply:", result * 5);
})
.catch(function(error) {
    console.log(error);
});