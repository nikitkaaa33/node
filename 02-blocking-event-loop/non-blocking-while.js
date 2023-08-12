const fs = require("fs");
let isRunning = true;

setTimeout(() => (isRunning = false), 100);
process.nextTick(() => console.log("nextTick"));

function setImmediatePromise() {
	return new Promise((resolve, reject) => {
		setImmediate(() => resolve());
		// resolve();
	});
}
async function whileLoop() {
	while (isRunning) {
		console.log("While loop is running");
		await setImmediatePromise();
	}
}

whileLoop().then(() => console.log("while loop ended"));
