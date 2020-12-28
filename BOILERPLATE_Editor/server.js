
var fs = require('fs');
var data = fs.readFileSync('musics.json');
var musics = JSON.parse(data);

console.log(musics);

var express = require('express');
const { log } = require('console');
var app = express();
var server = app.listen(3000,listening);

function listening (){
    console.log('listening.');
}

app.use(express.static('website'));
app.get('/musics', music_json);

function music_json(req,res){
    res.send(musics);
}

app.post('/addMusic',function name(req,res) {
    
   return res.redirect('/musics');
});

//https://www.youtube.com/watch?v=e4qKBkwwkNg&list=PLRqwX-V7Uu6Yyn-fBtGHfN0_xCtBwUkBp&index=3&ab_channel=TheCodingTrain