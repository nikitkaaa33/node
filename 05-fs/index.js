const fs = require("fs");

fs.writeFile("./first.txt", "First file text", (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("file first.txt was written");
		fs.appendFile("./first.txt", "\nOne more Line", (err) => {
			if (err) console.log(err);
			else {
				console.log("appended text to the first.txt file");
				fs.rename("./first.txt", "./renamed-first.txt", (err) => {
					if (err) console.log(err);
					else console.log("file was renamed");
				});
			}
		});
	}
});
