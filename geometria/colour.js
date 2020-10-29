var x1 = 24;
var x2 = 24;
var x3 = 65;
var x4 = 111;
var x5 = 111;
var x6 = 65;

var y1 = 69;
var y2 = 119;
var y3 = 144;
var y4 = 119;
var y5 = 69;
var y6 = 44;

var cem = 101;
while ( cem < 102 ) {
    var a1 = x1 + cem;
    var a2 = x2 + cem;
    var a3 = x3 + cem;
    var a4 = x4 + cem;
    var a5 = x5 + cem;
    var a6 = x6 + cem;
    var c = document.getElementById( "myCanvas" );
    var ctx = c.getContext( "2d" );
    ctx.fillStyle = '#990000';
    ctx.beginPath( 100, 50 );
    ctx.moveTo( a1, y1 );
    ctx.lineTo( a2, y2 );
    ctx.lineTo( a3, y3 );
    ctx.lineTo( a4, y4 );
    ctx.lineTo( a5, y5 );
    ctx.lineTo( a6, y6 );
    ctx.closePath();
    ctx.fill();
    cem + 101;
}
var c = document.getElementById( "myCanvas" );
var ctx = c.getContext( "2d" );
ctx.fillStyle = '#990000';
ctx.beginPath( 100, 50 );
ctx.moveTo( x1, y1 );
ctx.lineTo( x2, y2 );
ctx.lineTo( x3, y3 );
ctx.lineTo( x4, y4 );
ctx.lineTo( x5, y5 );
ctx.lineTo( x6, y6 );
ctx.closePath();
ctx.fill();
