// console.log(process.argv.slice(2)[0]);

process.argv.forEach((val, index) => {
    console.log(`${index}:${val}`);
})