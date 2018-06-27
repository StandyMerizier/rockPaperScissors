const http = require('http');//network access
const fs = require('fs');//file system access
http.createServer(function (req, res) {//simple noder server that is running on port 8000
  fs.readFile('index.html', function(err, data) {//server is going to read the file call demofile.html and write with it(callback function)
    res.writeHead(200, {'Content-Type': 'text/html'});//responding back with a 200 response
    res.write(data);//take request and send the data it recieves
    res.end();//end the request
  });
}).listen(8000);
