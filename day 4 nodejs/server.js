const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/hello") {
    res.end("hello from server.");
  } else {
    res.end("wrong url");
  }
});

server.listen(5000, () => {
  console.log("server is running at port 5000");
});
