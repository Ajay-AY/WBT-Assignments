const http = require("http");
const url = require("url");
http
  .createServer((req, res) => {
    let rad = url.parse(req.url, true).query;
    console.log("Circle");
    let msg = rad.radius * rad.radius * 3.14;
    res.write("Area of Circle is " + msg);

    res.end();
  })
  .listen(800);
