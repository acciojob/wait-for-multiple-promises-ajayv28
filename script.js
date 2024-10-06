//your JS code here. If required.

function createRandomPromise(name) {
    return new Promise((resolve) => {
        const timeToResolve = Math.random() * 2 + 1; 
        setTimeout(() => {
            resolve({ name, timeToResolve });
        }, timeToResolve * 1000);
    });
}


const promises = [
    createRandomPromise("Promise 1"),
    createRandomPromise("Promise 2"),
    createRandomPromise("Promise 3"),
];


const output = document.getElementById("output");


Promise.all(promises)
    .then((results) => {

        let totalTime = 0;
        results.forEach((result) => {
            const row = document.createElement('tr');
            const timeInSeconds = result.timeToResolve.toFixed(3); 
            totalTime += result.timeToResolve;

            row.innerHTML = `<td>${result.name}</td><td>${timeInSeconds}</td>`;
            output.appendChild(row);
        });

   
        const totalRow = document.createElement('tr');
        totalRow.innerHTML = `<td><strong>Total</strong></td><td>${totalTime.toFixed(3)}</td>`;
        output.appendChild(totalRow);
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
