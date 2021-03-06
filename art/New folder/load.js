var bubbles = [];
var img;

function preload() {
    img = loadImage( 'http://localhost/img/bolas/bola0.png' );
}

function setup() {
    createCanvas( 600, 400 );

}

function mousePressed() {
    var b = new Bubble( mouseX, mouseY );
    bubbles.push( b );

}

function draw() {
    background( 0 );
    for ( var i = 0; i < bubbles.length; i++ ) {
        bubbles[ i ].update();
        bubbles[ i ].display();
        for ( var j = 0; j < bubbles.length; j++ ) {
            if ( i != j && bubbles[ i ].intersects( bubbles[ j ] ) ) {
                bubbles[ i ].changeColor();
                bubbles[ j ].changeColor();
            }
        }
    }

}
