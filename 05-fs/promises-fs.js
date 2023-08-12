const fs = require("fs/promises");

fs.writeFile("./first.txt", "First file text")
	.then(() => console.log("file first.txt was written"))
	.then(() => fs.appendFile("./first.txt", "\nOne more Line"))
	.then(() => console.log("appended text to the first.txt file"))
	.then(() => fs.rename("./first.txt", "./renamed-first.txt"))
	.then(() => console.log("file was renamed"))
	.catch((err) => console.log(err));
