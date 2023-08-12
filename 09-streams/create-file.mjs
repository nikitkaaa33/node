import fs from "fs";
import path from "path";

if (!process.argv[2] || !process.argv[3]) {
	console.log("Filename and lines must be supplied as arguments");
	process.exit(0);
}

const fileName = process.argv[2];
const linesQty = parseInt(process.argv[3]);
if (isNaN(linesQty)) {
	console.log("lines must be a number");
	process.exit(0);
}

const writeStream = fs.createWriteStream(path.join("./files", fileName));

for (let i = 1; i <= linesQty; i++) {
	writeStream.write(
		`This is a line number ${i} in the automaticaly generated file ${fileName}\n`
	);
}

writeStream.end(() => {
	console.log("Automaticaly generated file");
});
