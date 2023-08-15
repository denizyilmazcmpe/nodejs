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
const fsPromise = require("fs").promises;
// console.log(fs);
// Reading from a file - Async
// fs.readFile(filePath,"utf-8",(err, data) => {
//     if(err) throw new Error("Something went wrong!");
//     console.log(data);
// });

// try {
//     const data = fs.readFileSync(path.join(__dirname, "files", "sample.txt"), "utf-8")
//     console.log(data);
// }catch (err) {
//     console.log(err);
// }

const filereading = async() => {
    try{
    const data = await fsPromise.readFile(filePath, {encoding: "utf-8"});
    console.log("FS PROMİSES: ", data);
    } catch (err) {
    console.log(err);
    }
};

filereading();

//Writing into file
const txtFile = path.join(__dirname, "files", "text.txt");
const content = "I love NodeJS";
// fs.writeFile(txtFile, content, (err) => {
//     if(err) throw new Error("Something went wrong!");
//     console.log("Write Operation is Successfully");
//     fs.readFile(txtFile, "utf-8", (err, data) => {
//         if(err) throw new Error(err);
//         console.log(data);
//     })
//  });

 const writingInFile = async () => {
        try {
        await fsPromise.writeFile(txtFile, "\n We have given new name to the file", {
            flag : "a+",
        });
        // await fsPromise.appendFile(txtFile, "\n this is file appender");
        await fs.promises.rename(txtFile, path.join(__dirname, "files", "newtxt.txt"));
        const data = await fsPromise.readFile(path.join(__dirname, "files", "newtxt.txt"));
        console.log(data.toString());
        } catch (err) {
            console.log(err);
        }
    
 };

 writingInFile();
