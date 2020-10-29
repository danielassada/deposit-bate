var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	console.log(req.url);
	res.writeHead(200, {'Content-Type': 'text/html'});
	// var leitor = "fs.createReadStream( __dirname + '/index.html', 'utf-8');";
    var leitor = fs.createReadStream( __dirname + '/citacao.html', 'utf-8');

	leitor.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log("req.url");
