let count = 0;
let intervalId = setInterval(() => {
    count++;
    console.log(count);
    
    if (count > 10) {
        clearInterval(intervalId);
    }
}, 1000);
