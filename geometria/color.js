// vetor = var V = Vx + Vy (angulo interno do hexagono 180 angulo em relaxa ao plano 30)
// V2 = (raiz|Vy + Vx|)
// V*sen@ = Vy
// V*cos@ = Vx
// x = 0 y = 25
// x = 0 y = 75
// x = 43, 301 y = 100
// x = 86, 602 y = 75
// x = 86, 602 y = 25
// x = 43, 301 y = 0





//Hexagono preenchido, fechamento de caminho explícito com closePath
var c = document.getElementById( "myCanvas" );
var ctx = c.getContext( "2d" );
ctx.fillStyle = '#990000';
ctx.beginPath( 100, 50 );
ctx.moveTo( 125, 69 ); //  x=0   y=31
ctx.lineTo( 125, 119 ); // x=0   y=93
ctx.lineTo( 168, 144 ); //x=54  y=154
ctx.lineTo( 212, 119 ); //x=108   y=93
ctx.lineTo( 212, 69 ); // x=108   y=31
ctx.lineTo( 168, 44 ); // x=54    y=0
ctx.closePath();
ctx.fill();


var ctx1 = c.getContext( "2d" );
ctx.fillStyle = '#00FF00';
ctx.beginPath( 100, 50 );
ctx.moveTo( 24, 69 );
ctx.lineTo( 24, 119 );
ctx.lineTo( 65, 144 );
ctx.lineTo( 111, 119 );
ctx.lineTo( 111, 69 );
ctx.lineTo( 65, 44 );
ctx.closePath();
ctx.fill();

var ctx2 = c.getContext( "2d" );
ctx.fillStyle = '#0000ff';
ctx.beginPath( 100, 150 );
ctx.moveTo( 77, 158 );
ctx.lineTo( 77, 208 );
ctx.lineTo( 118, 233 );
ctx.lineTo( 164, 208 );
ctx.lineTo( 164, 158 );
ctx.lineTo( 118, 133 );
ctx.closePath();
ctx.fill();
