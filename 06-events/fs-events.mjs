import EventEmitter from "events";
import fs from "fs";

const fileEmitter = new EventEmitter();

const filePath = "./first.txt";

fileEmitter.on("writeComplete", () => {
	console.log(`file ${filePath} was written`);
	fs.appendFile(filePath, "\nOne more Line", () => {
		fileEmitter.emit("appendComplete");
	});
});

fileEmitter.on("appendComplete", () => {
	console.log(`appended text to the ${filePath} file`);
	fs.rename(filePath, "./renamed-first.txt", () => {
		fileEmitter.emit("renameComplete");
	});
});

fileEmitter.on("renameComplete", () => {
	console.log("file was renamed");
});

fs.writeFile(filePath, "First file text", () => {
	fileEmitter.emit("writeComplete");
});
