import fs from "fs";
import path from "path";

const sourceDir = "./files";
const destinationDir = "./copied-files";

if (!fs.existsSync(sourceDir)) {
	console.warn(`Source dir ${sourceDir} does not exist`);
	console.log("exiting");
	process.exit(0);
}
if (fs.existsSync(destinationDir)) {
	fs.rmSync(destinationDir, { recursive: true });
	console.log("Dest dir removed");
}

fs.mkdirSync(destinationDir);

fs.readdir(sourceDir, (err, fileNames) => {
	if (err) {
		console.log("Error");
		process.exit(1);
	}
	fileNames.forEach((fileName, index) => {
		const sourceFilePath = path.join(sourceDir, fileName);
		const destinationFilePath = path.join(
			destinationDir,
			`${index + 1}. ${fileName}`
		);

		const readFileStream = fs.createReadStream(sourceFilePath);
		const writeFileStream = fs.createWriteStream(destinationFilePath);
		readFileStream.pipe(writeFileStream);

		writeFileStream.on("finish", () => {
			console.log(`file ${fileName} was copied`);
		});
	});
});
