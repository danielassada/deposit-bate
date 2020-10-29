function myFunction() {
    var x = document.getElementById( "hexdecimal" );
    var content = [];
    var text = "";
    var i;
    for ( i = 0; i < x.length; i++ ) {
        text += x.elements[ i ].value;
    }
    var y = document.getElementById( "descricao" );
    var content = [];
    var text2 = "";
    var j;
    for ( j = 0; j < y.length; j++ ) {
        text2 += y.elements[ j ].value;
    }
    var hex = text;
    var desc = text2
    var lif = text + "f";
    var part1 = "var x" + hex + " = $('<p>" + desc + "</p>');";
    var part2 = "$( '#x" + hex + "' ).mouseenter( function () {$('.popuptext' ).append( x" + hex + " );$( '.popuptext' ).show( 500 );} );";
    var part3 = "$('#x" + hex + "').mouseleave(function(){$( x" + hex + " ).remove();$('.popuptext').hide();});";

    var node = document.createTextNode( part1 + part2 + part3 );


    document.getElementById( "resultado" )
        .appendChild( node );
    // .innerHTML = node;


}
document.onkeydown = function () {
    if ( window.event.keyCode == '13' ) {
        myFunction();
    }
}
$( document )
    .ready( function () {
        $( "#clear-button" )
            .click( function () {
                $( "form" )[ 0 ].reset();
                $( "#resultado" )
                    .empty();
            } );
    } );

function decToHex( hex ) {
    console.log( hex.toString( 16 ) );
}

function verificarHex() {

    var x = document.getElementById( "hexdecimal" );
    var content = [];
    var text = "";
    var i;
    for ( i = 0; i < x.length; i++ ) {
        text += x.elements[ i ].value;
    }


    var n = text.charCodeAt( 0 );
    var h = n.toString( 16 );
    var node = document.createTextNode( "unicode decimal :" +
        n + ", unicode hexdecimal :" + h );


    document.getElementById( "resultado" )
        .appendChild( node );
}
