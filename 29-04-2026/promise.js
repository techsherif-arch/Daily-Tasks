function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received successfully");
        }, 2000);
    });
}

async function fetchData() {
    try {
        let result = await getData();
        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    }
}

fetchData();
