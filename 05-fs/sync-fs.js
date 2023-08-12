const fs = require("fs");

//avoid using sync version - blocked event loop
try {
	fs.writeFileSync("./first.txt", "First file text");
	console.log("file first.txt was written");
	fs.appendFileSync("./first.txt", "\nOne more Line");
	console.log("appended text to the first.txt file");
	fs.renameSync("./first.txt", "./renamed-first.txt");
	console.log("file was renamed");
} catch (error) {
	console.log(err);
}
