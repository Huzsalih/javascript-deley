// Delay function that returns a Promise
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function that uses the delay
async function delayedHelloWorld() {
    console.log("Hello");
    await delay(2000); // Wait for 2 seconds
    console.log("World");
}

// Call the async function
delayedHelloWorld();
