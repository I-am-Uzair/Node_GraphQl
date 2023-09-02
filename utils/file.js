const path = require("path")
const fs = require('fs');

const clearImage = (filePath) => {
    const myPath = path.join(__dirname, "..", filePath);
    fs.unlink(myPath, (err) => console.log("error while deleting a file", err));
  };
  

exports.clearImage = clearImage;