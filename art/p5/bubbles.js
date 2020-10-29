var bubbles = [];

function setup() {
    createCanvas( 600, 400 );
    for ( var i = 0; i < 7; i++ ) {
        bubbles[ i ] = new bubble( random( width ), random( height ) );
    }
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

// var d = dist( b1.x, b1.y, b2.x, b2.y );
// if ( d < b1.r + b2.r ) {
//     b1.changeColor();
//     b2.changeColor();
// }
// var bubbles = [];
// var flower = [];
//
// function proload() {
//     flower = loadImage( 'caminho' );
// }
//

// function mousePressed() {
//     var b = new Bubble( mouseX, mouseY, flower );
//     bubbles.push( b );
// }
