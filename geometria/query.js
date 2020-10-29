$( document )
    .ready( function () {
        $( document )
            .mousemove( function ( event ) {
                $( "span" )
                    .text( "X: " + event.pageX + ", Y: " + event.pageY );
            } );
    } );

var char
char.crashWith = function ( otherobj ) {
    var myleft = char.x;
    var myright = char.x + ( char.width );
    var mytop = char.y;
    var mybottom = char.y + ( char.height );
    var otherleft = otherobj.x;
    var otherright = otherobj.x + ( otherobj.width );
    var othertop = otherobj.y;
    var otherbottom = otherobj.y + ( otherobj.height );
    var crash = true;
    if ( ( mybottom < othertop ) || ( mytop > otherbottom ) || ( myright < otherleft ) || ( myleft > otherright ) ) {
        crash = false;
    }
    return crash;
}


function updateGameArea() {
    if ( char.crashWith( sapphire ) ) {
        cnv.stop();
        voltar();
    }
}
