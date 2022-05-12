const request = require('request');
const args = process.argv.slice(2);
const fs = require('fs');
let byteCount;


const getHTTP = () => {

request(args[0], (error, response, body) => {

  if(error) {
    console.log('error:', error);
    return;
  } 
  if(error === '404') {
    console.log("URL IS INVALID")
    return;
  }

  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  byteCount = body.length;
  writeFile(body);
  console.log(`Download and saved ${args[1]} to ${byteCount}`);
});

}

const writeFile = (content) => {
  
  fs.writeFile(`${args[1]}`, content, err => {
    if (err) {
      console.error(err);
    }
  });  
}

getHTTP();