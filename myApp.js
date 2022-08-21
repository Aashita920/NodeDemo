// console.log("Sandwiches");
// var fs = require('fs');
// fs.writeFileSync("myText.txt","I love sandwiches");

const http = require('http');
var colors = require('colors');
const displayContent = require("./routes");

// const server = http.createServer((req,res)=> {
const server = http.createServer(displayContent);
    // console.log("Joined");

    // const url = req.url;

    // if(url =="/profile"){
    //     res.setHeader('Content-Type','text/html');
    //     res.write("<p>This is the profile page</p>");
    //     return res.end();
    // }
    // else if(url =="/"){
    // res.setHeader('Content-Type','text/html');
    // res.write("<p>cheeseburgers</p>");
    // return res.end();
    // }
    // res.setHeader('Content-Type','text/html');
    // res.write("<p>Page not found</p>");
    //  res.end();
// })

server.listen(3001);

console.log('hello'.green);

// Top stop this, just click anywhere inside the terminal/cmd window and press CTRL + C

