// Synchronous
console.log("Inning before strategic timeout");

function resumeTheGame() {
    console.log("Game resuming after 3 seconds");
}

console.log("Innings after strategic timeout");

// Asynchronous
console.log("Inning before strategic timeout");

setTimeout(() => {
    console.log("Game resuming after 3 seconds");
}, 3000);

console.log("Innings after strategic timeout");
