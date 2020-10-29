function myFunction() {
    var x = document.getElementById( "lol" );
    var text = "";
    var i;
    for ( i = 0; i < x.length; i++ ) {
        text += x.elements[ i ].value;
    }
    console.log( text );
    var x = /\x7Bnumero\x2Ci/;
    var a = text.search( x );

    if ( a > 0 ) {
        var text2 = text.slice( a + 1 );
        var b = 0
        b++
        console.log( a )
        console.log( text2 )
    }
    // var texto = "\[\"" + a1 + "\",\""+a2+"\",\""+a3+"\",\""+a4+"\",\""+a5+"\",\""+a6+"\"\]"
    // document.getElementById( "resultado" )
    //     .append( texto );



};
document.onkeydown = function () {
    if ( window.event.keyCode == '13' ) {
        myFunction();
    }
}
eydown = function () {
    if ( window.event.keyCode == '13' ) {
        myFunction();
    }
}
