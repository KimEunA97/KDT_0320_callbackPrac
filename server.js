import http from 'http';
console.dir(http);

//콜백원리와 같다.
const server = http.createServer(function (request, response) {

  //만들어줘야 됨 
  //비즈니스 로직
  let body = "";
  body += "<!DOCTYPE html>";
  body += "<html>";
  body += "<head>";
  body += "<title>Node.js</title>";
  body += "</head>";
  body += "<body>";
  body += "<h1>Hello World</h1>";
  body += "</body>";
  body += "</html>";

  
  //맞춰줘야 됨
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('hellow world');

});