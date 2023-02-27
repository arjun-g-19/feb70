var http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Hello World</h1>');
  var string = req.url;
  string.split("/");
  console.log(string);
  res.write(string);
  res.end();
}).listen(8765);