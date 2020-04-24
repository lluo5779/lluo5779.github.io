const imagemin = require("imagemin");
const imageminJpegtran = require("imagemin-jpegtran");
const sharp = require("sharp");

const inputFilePath = "./../src/img/";

const path = require("path");
const fs = require("fs");
//joining path of directory
const directoryPath = path.join(__dirname, inputFilePath);
console.log(directoryPath);
//passsing directoryPath and callback function
fs.readdir(directoryPath, function(err, files) {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  //listing all files using forEach
  files.forEach(function(file) {
    console.log(file);
    // Do whatever you want to do with the file

    sharp(path.join(directoryPath, file))
      .jpeg({ progressive: true, force: false })
      .png({ progressive: true, force: false })
      .resize(2500)
      .webp()

      .toFile(file)
      .then(function(newFileInfo) {
        console.log("Image Resized");
      })
      .catch(function(err) {
        console.log(err);
      });
  });
});

// (async () => {
//   const files = await imagemin(["./../src/img/gallery/*.jpg"], {
//     destination: "./../src/img",
//     plugins: [imageminJpegtran()]
//   });

//   console.log(files);
//   //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
// })();
