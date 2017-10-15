var http = require('http');
var dt = require('./dateModule');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {

    fs.readFile('index.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        
            var q = url.parse(req.url, true).query;
            var txt = q.year + " " + q.month;

            res.write(data);
            
            res.write(req.url + "\n\n");
            res.write('Hello World!\nDate & Time: ' + dt.myDateTime());
        
            res.write("\n\n" + txt);
        
            res.end();
        
    });

}).listen(8080);

console.log('Server running on port 8080.');