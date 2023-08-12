import EventEmitter from "events";

const myEmitter = new EventEmitter();

const timeOutListenerFn = (secondsQty) => {
	console.log(`timeout event in ${secondsQty}`);
};

myEmitter.on("timeout", timeOutListenerFn);

setTimeout(() => myEmitter.emit("timeout", 1), 1000);
setTimeout(() => myEmitter.emit("timeout", 2), 2000);

myEmitter.once("single event", () => {
	console.log("single event");
});

//listener will be called once
setTimeout(() => myEmitter.emit("single event"), 500);
setTimeout(() => myEmitter.emit("single event"), 1500);

setTimeout(() => myEmitter.off("timeout", timeOutListenerFn), 3000);
setTimeout(() => myEmitter.emit("timeout", 4), 3000);
