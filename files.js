// const fs = require("fs");
// const quote = "where there is a will, there is a way";
// fs.writeFile("cool.txt", quote, (err) => {
//   console.log("completed writing");
// });
// const fs = require("fs");
// const quote2 = "Stay hungry , Stay Foolish";

// const createFile = (num) => {
//   const MAX_NO_FILES = 15;
//   if (num > MAX_NO_FILES) {
//     console.log("your pc was saved");
//     return;
//   }

//   for (let i = 1; i <= num; i++) {
//     fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//       console.log(`Completed successfully`);
//     });
//   }
// };
// const [, , Nooffiles] = process.argv;
// createFile(Nooffiles);

// const fs = require("fs");
// fs.readFile("./fun.html", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Oops", err);
//   } else {
//     console.log(data);
//   }
// });

// const fs = require("fs");
// fs.appendFile("./fun.html", "\ngood morning", (err, data) => {
//   if (err) {
//     console.log("oops", err);
//   } else {
//     console.log(data);
//   }
// });

const fs = require("fs");
fs.readFile("./fun.html", "UTF-8", currentcontent, (err) => {
  console.log(currentcontent);
  fs.writeFile("./fun.html", "\ngood morning", currentcontent, (err) => {
    console.log("written ");
  });
});

//remove file
fs.unlink("fun.html", (err) => {
  console.log("delete successfully");
});

//read dir
fs.readdir("./backup", (err, files) => {
  if (err) {
    console.log(err);
  }
  console.log(files);
});
