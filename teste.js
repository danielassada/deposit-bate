var x = "var fs = require('fs');fs.writeFile('/arquivosprogramas/internet/area403/Novo.js', 'something', function(err) {if(err) {return console.log(err);}console.log('The file was saved!');});" 


var fs = require('fs');
fs.writeFile('/arquivosprogramas/internet/area403/Novo.js', x, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log('The file was saved!');
}); 