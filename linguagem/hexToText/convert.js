function myFunction() {
    var x = document.getElementById( "lol" );
    var content = [];
    var text = "";
    var i;
    for ( i = 0; i < x.length; i++ ) {
        text += x.elements[ i ].value;
    }

    var li0 = text + "0";
    var li1 = text + "1";
    var li2 = text + "2";
    var li3 = text + "3";
    var li4 = text + "4";
    var li5 = text + "5";
    var li6 = text + "6";
    var li7 = text + "7";
    var li8 = text + "8";
    var li9 = text + "9";
    var lia = text + "a";
    var lib = text + "b";
    var lic = text + "c";
    var lid = text + "d";
    var lie = text + "e";
    var lif = text + "f";
    var parte1 = "<div class='row'><div class=' col-md-8'>unicode " + li0 + "</div><div class=' col-md-8'>unicode " + li1 + "</div><div class=' col-md-8'>unicode " + li2 + "</div><div class=' col-md-8'>unicode " + li3 + "</div><div class=' col-md-8'>unicode " + li4 + "</div><div class=' col-md-8'>unicode " + li5 + "</div><div class=' col-md-8'>unicode " + li6 + "</div><div class=' col-md-8'>unicode " + li7 + "</div></div>";
    var parte3 = "<div class='row'><div class=' col-md-8'>unicode " + li8 + "</div><div class=' col-md-8'>unicode " + li9 + "</div><div class=' col-md-8'>unicode " + lia + "</div><div class=' col-md-8'>unicode " + lib + "</div><div class=' col-md-8'>unicode " + lic + "</div><div class=' col-md-8'>unicode " + lid + "</div><div class=' col-md-8'>unicode " + lie + "</div><div class=' col-md-8'>unicode " + lif + "</div></div>";

    function hexToDec( hex ) {
        return hex.toLowerCase()
            .split( '' )
            .reduce( ( result, ch ) =>
                result * 16 + '0123456789abcdefgh'.indexOf( ch ), 0 );
    }
    var kanji0 = String.fromCharCode( hexToDec( li0 ) );
    var kanji1 = String.fromCharCode( hexToDec( li1 ) );
    var kanji2 = String.fromCharCode( hexToDec( li2 ) );
    var kanji3 = String.fromCharCode( hexToDec( li3 ) );
    var kanji4 = String.fromCharCode( hexToDec( li4 ) );
    var kanji5 = String.fromCharCode( hexToDec( li5 ) );
    var kanji6 = String.fromCharCode( hexToDec( li6 ) );
    var kanji7 = String.fromCharCode( hexToDec( li7 ) );
    var kanji8 = String.fromCharCode( hexToDec( li8 ) );
    var kanji9 = String.fromCharCode( hexToDec( li9 ) );
    var kanjia = String.fromCharCode( hexToDec( lia ) );
    var kanjib = String.fromCharCode( hexToDec( lib ) );
    var kanjic = String.fromCharCode( hexToDec( lic ) );
    var kanjid = String.fromCharCode( hexToDec( lid ) );
    var kanjie = String.fromCharCode( hexToDec( lie ) );
    var kanjif = String.fromCharCode( hexToDec( lif ) );

    var parte2 = "<div class='row'><div class='col-md-8'><ul class='conteudo '><br><li class='kanji'>" + kanji0 + "</li></ul></div><div class='col-md-8'><ul class='conteudo '><br><li class='kanji'>" + kanji1 + "</li></ul></div><div class='col-md-8'><ul class='conteudo '><br><li class='kanji'>" + kanji2 + "</li></ul></div><div class='col-md-8'><ul class='conteudo '><br><li class='kanji'>" + kanji3 + "</li></ul></div><div class='col-md-8'><ul class='conteudo '><br><li class='kanji'>" + kanji4 + "</li></ul></div><div class='col-md-8'><ul class='conteudo '><br><li class='kanji'>" + kanji5 + "</li></ul></div><div class='col-md-8'><ul class='conteudo '><br><li class='kanji'>" + kanji6 + "</li></ul></div><div class='col-md-8'><ul class='conteudo '><br><li class='kanji'>" + kanji7 + "</li></ul></div></div>";

    var parte4 = "<div class='row'><div class='col-md-8'><ul class='conteudo '><br><li class='kanji'>" + kanji8 + "</li></ul></div><div class='col-md-8'><ul class='conteudo '><br><li class='kanji'>" + kanji9 + "</li></ul></div><div class='col-md-8'><ul class='conteudo '><br><li class='kanji'>" + kanjia + "</li></ul></div><div class='col-md-8'><ul class='conteudo '><br><li class='kanji'>" + kanjib + "</li></ul></div><div class='col-md-8'><ul class='conteudo '><br><li class='kanji'>" + kanjic + "</li></ul></div><div class='col-md-8'><ul class='conteudo '><br><li class='kanji'>" + kanjid + "</li></ul></div><div class='col-md-8'><ul class='conteudo '><br><li class='kanji'>" + kanjie + "</li></ul></div><div class='col-md-8'><ul class='conteudo '><br><li class='kanji'>" + kanjif + "</li></ul></div></div>";
    var x = String.fromCharCode( hexToDec( text ) );
    var node = document.createTextNode( parte1 + parte2 + parte3 + parte4 );
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
