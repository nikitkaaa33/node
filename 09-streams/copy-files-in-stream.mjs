import fs from "fs";

const fileName = "./files/first.txt";
const copiedFileName = "./files/first-copy.txt";

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(copiedFileName);

readStream.pipe(writeStream);

readStream.on("end", () => console.log("Read stream ended"));
writeStream.on("close", () => console.log("Write stream ended"));
writeStream.on("finish", () => console.log("file was copied"));
