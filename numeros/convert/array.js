function myFunction() {
    var x = document.getElementById( "lol" );
    var text = "";
    var i;
    for ( i = 0; i < x.length; i++ ) {
        text += x.elements[ i ].value;
    }
    console.log(text);

    if ( true == true) {
        var a1 = text.substring( 2, 0 ); //aer1
        var a2 = text.substring( 4, 2 ); //aer1
        var a3 = text.substring( 6, 4 ); //aer1
        var a4 = text.substring( 8, 6 ); //aer1
        var a5 = text.substring( 10, 8 ); //aer1
        var a6 = text.substring( 12, 10 ); //aer1
    }
    var texto = "\[\"" + a1 + "\",\""+a2+"\",\""+a3+"\",\""+a4+"\",\""+a5+"\",\""+a6+"\"\]"
    document.getElementById( "resultado" )
        .append( texto );



};
document.onkeydown = function () {
    if ( window.event.keyCode == '13' ) {
        myFunction();
    }
}
