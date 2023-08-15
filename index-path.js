const path = require("path");

const filePath = "C:\\Users\\deniz\\OneDrive\\Masaüstü\\nodejs-tutorial\\files\\sample.txt";

// //dirname
// console.log(path.dirname(filePath));
// console.log(__dirname);
// //basename
// console.log(path.basename(filePath));
// console.log(__filename);
// //extension
// console.log(path.extname(filePath));

// const sampleFile = "sample.txt";

// console.log(path.join(path.dirname(filePath), sampleFile));

const fs = require("fs");
// console.log(fs);
// Reading from a file - Async
fs.readFile(filePath,"utf-8",(err, data) => {
    if(err) throw new Error("Something went wrong!");
    console.log(data);
});

try {
    const data = fs.readFileSync(path.join(__dirname, "files", "sample.txt"), "utf-8")
    console.log(data);
}catch (err) {
    console.log(err);
}

