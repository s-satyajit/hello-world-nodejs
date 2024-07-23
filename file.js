const fs = require("fs")

//Sync...
// fs.writeFileSync("./test.txt", "Hey There");

//Async...
// fs.writeFile("./test.txt", "Hello World Async", (err) => {})

// const result = fs.readFileSync("contacts.txt", "utf-8");
// console.log(result)

// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//     if(err) {
//         console.log('error', err)
//     } else {
//         console.log(result)
//     }
// })

// fs.appendFileSync("./contacts.txt", new Date().getDate().toLocaleString());
fs.appendFileSync("./test.txt", `${Date.now()} Hey There\n`)

// fs.cpSync("./test.txt", "./copy.txt");

// fs.unlinkSync("./copy.txt");
console.log(fs.statSync("test.txt"))

// fs.mkdirSync("my-docss/a/b", {recursive: true})

// fs.unlinkSync(my-docs)