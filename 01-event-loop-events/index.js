const fs = require("fs");
const dns = require("dns");

function info(text) {
	console.log(text, performance.now().toFixed(2));
}

console.log("Program start");

//close events
fs.writeFile("./test.txt", "Hello NOde.js", () => {
	info("File written");
});

//promises
Promise.resolve().then(() => info("Promise 1"));

//nexttick
process.nextTick(() => info("Next tick 1"));

//setImmediate (check)
setImmediate(() => info("Immediate 1"));

//timeouts
setTimeout(() => {
	info("TimeOut 1");
}, 0);

setTimeout(() => {
	process.nextTick(() => console.log(info("Next tick2")));
	info("TimeOut 2");
}, 100);

//intervals
let intervalCount = 0;
const inetvalId = setInterval(() => {
	info(`Interval ${(intervalCount += 1)}`);
	if (intervalCount === 2) clearInterval(inetvalId);
}, 50);

//I/O events
dns.lookup("localhost", (err, address, family) => {
	info("DNS 1 localhost");
	Promise.resolve().then(() => info("Promise 2"));
	process.nextTick(() => info("Next tick 3"));
});

console.log("Program end");
