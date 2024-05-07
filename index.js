// Question _________________________ 148
// Define a function to be executed after a delay
function delayedFunction() {
    console.log("Delayed function executed after 2 seconds.");
}
// Use setTimeout() to schedule the function after a delay of 2000 milliseconds (2 seconds)
setTimeout(delayedFunction, 2000);
// Question ___________________________ 149
console.log("Start");
// Asynchronous operation using setTimeout
setTimeout(() => {
    console.log("Async operation completed after 2 seconds");
}, 2000);
console.log("End");
/* Output:
Start
End
Async operation completed after 2 seconds
*/
// Question ___________________________ 150
// Simulating an asynchronous operation (e.g., fetching data from an API)
function fetchData(callback) {
    setTimeout(() => {
        const data = "Async data fetched";
        callback(data);
    }, 2000); // Simulating a delay of 2 seconds
}
console.log("Start");
// Calling the fetchData function with an asynchronous callback
fetchData((data) => {
    console.log(data); // Logs "Async data fetched" after 2 seconds
});
console.log("End");
/* Output:
Start
End
Async data fetched (after 2 seconds)
*/
console.log("Start");
// Simulating a synchronous operation (loop with a delay)
for (let i = 0; i < 5; i++) {
    console.log(`Synchronous operation ${i + 1}`);
    // Simulating a delay of 1 second in each iteration
    const start = Date.now();
    while (Date.now() - start < 1000) { }
}
console.log("End");
export {};
/* Output:
Start
Synchronous operation 1
Synchronous operation 2
Synchronous operation 3
Synchronous operation 4
Synchronous operation 5
End
*/ 
