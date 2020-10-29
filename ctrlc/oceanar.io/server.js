var http= require("http");
console.log("starting");
var server= http.createserver(function(request,response){
	console.writeead(200,{"content-type":"text/plain"});
	response.end("hello world!");
});
server.listen(port,host,function(){
	console.log("listeng"+host+":"+port);
}
{
  "cmd": ["node-dev", "$file"],
  "selector" : "source.js",
  "path" : "/usr/local/bin"
}