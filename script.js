function createRandomPromise(name) {
    return new Promise((resolve) => {
        const timeToResolve = Math.random() * 2 + 1; // Random time between 1 and 3 seconds
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
const loadingRow = document.getElementById("loading");

Promise.all(promises)
    .then((results) => {
        let totalTime = 0;

        // Clear loading row
        loadingRow.remove();

        // Populate results
        results.forEach((result) => {
            const row = document.createElement('tr');
            const timeInSeconds = result.timeToResolve.toFixed(3);
            totalTime += result.timeToResolve;

            row.innerHTML = `<td>${result.name}</td><td>${timeInSeconds}</td>`;
            output.appendChild(row);
        });

        // Add total row
        const totalRow = docum
