console.log('server starting...')

var express = require('express')
var app = express();
var server = app.listen(3000,listening);

function listening (){
    console.log('listening.');
}

app.use(express.static('website'));
//https://www.youtube.com/watch?v=e4qKBkwwkNg&list=PLRqwX-V7Uu6Yyn-fBtGHfN0_xCtBwUkBp&index=3&ab_channel=TheCodingTrain