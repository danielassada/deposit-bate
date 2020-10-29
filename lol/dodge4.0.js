function myFunction() {
    var x = document.getElementById( "lol" );
    var text = "";
    var i;
    for ( i = 0; i < x.length; i++ ) {
        text += x.elements[ i ].value;
    }
    var a = text.search( / entrou/g );
    var b = text.search( /\x3A/g ); // \X3A = DOIS PONTOS
    var c = text.search( / deixou/g );

    if ( a > 0 && a < 25 ) {
        var play1 = text.substring( a, 0 ); //player1
    }
    else if ( b > 0 && b < 25 ) {
        var play1 = text.substring( b, 0 );
    }
    else {
        var play1 = text.substring( c, 0 );
    }
    var d = text.search( /\n/g ) + 1; // \x2E = ponto final
    var top = text.slice( d );
    var e = top.substring( top, 0 );
    var f = top.search( / entrou/g );
    var g = top.search( /\x3A/g );
    var h = top.search( / deixou/g );
    if ( f > 0 && f < 25 ) {
        var play2 = top.substring( f, 0 ); //player2
    }
    else if ( g > 0 && g < 25 ) {
        var play2 = top.substring( g, 0 ); //player2
    }
    else {
        var play2 = top.substring( g, 0 ); //player2
    }
    var i2 = top.search( /\n/g ) + 1; /// \x2E =  ponto final
    var mid = top.slice( i2 );
    var j = mid.search( / entrou/g );
    var k = mid.search( /\x3A/g );
    var l = mid.search( / deixou/g );
    if ( j > 0 && j < 25 ) {
        var play3 = mid.substring( j, 0 ); //player3
    }
    else if ( k > 0 && k < 25 ) {
        var play3 = mid.substring( k, 0 ); //player3
    }
    else {
        var play3 = mid.substring( l, 0 ); //player3
    }
    var m = mid.search( /\n/g ) + 1; /// \x2E =  ponto final
    var adc = mid.slice( m );
    var n = adc.search( / entrou/g );
    var o = adc.search( /\x3A/g );
    var p = adc.search( / deixou/g );
    if ( n > 0 && n < 25 ) {
        var play4 = adc.substring( n, 0 ); //player4
    }
    else if ( m > 0 && m < 25 ) {
        var play4 = adc.substring( o, 0 ); //player4
    }
    else {
        var play4 = adc.substring( p, 0 ); //player4
    }
    var q = adc.search( /\n/g ) + 1; /// \x2E =  ponto final
    var sup = adc.slice( q );
    var r = sup.search( / entrou/g );
    var s = sup.search( /\x3A/g );
    var t = sup.search( / deixou/g );
    if ( r > 0 && r < 25 ) {
        var play5 = sup.substring( r, 0 ); //player5
    }
    else if ( s > 0 && s < 25 ) {
        var play5 = sup.substring( s, 0 ); //player5
    }
    else {
        var play5 = sup.substring( t, 0 ); //player5
    }
    // CASO  de repetição
    var u = sup.search( /\n/g ) + 1;
    var sup1 = sup.slice( u );
    var v = sup1.search( / entrou/g );
    var w = sup1.search( /\x3A/g );
    var x = sup1.search( / deixou/g );
    if ( v > 0 && v < 25 ) {
        var play6 = sup1.substring( v, 0 );
    }
    else if ( w > 0 && w < 25 ) {
        var play6 = sup1.substring( w, 0 );
    }
    else {
        var play6 = sup1.substring( x, 0 );
    }

    if ( play1 == play2 || play1 == play3 || play1 == play4 || play1 == play5 || play1 == play6 || play1 == play8 || play1 == play9 || play1 == play10 ) {
        var play1 = play1.replace( play1, play6 );
    }
    else {}
    var y = sup1.search( /\n/g ) + 1;
    var sup2 = sup1.slice( y );
    var z = sup2.search( / entrou/g );
    var a1 = sup2.search( /\x3A/g );
    var a2 = sup2.search( / deixou/g );
    if ( z > 0 && z < 25 ) {
        var play7 = sup2.substring( z, 0 );
    }
    else if ( a1 > 0 && a1 < 25 ) {
        var play7 = sup2.substring( a1, 0 );
    }
    else {
        var play7 = sup2.substring( a2, 0 );
    }
    if ( play2 == play3 || play2 == play4 || play2 == play5 ) {
        var play2 = play2.replace( play2, play7 );
    }
    else {
        var play2 = play2
    }
    console.log( play5, play1, play2, play3, play4, play5, play6 )
    var a3 = sup2.search( /\n/g ) + 1;
    var sup3 = sup2.slice( a3 );
    var a4 = sup3.search( / entrou/g );
    var a5 = sup3.search( /\x3A/g );
    var a6 = sup3.search( / deixou/g );
    if ( a4 > 0 && a4 < 25 ) {
        var play8 = sup3.substring( a4, 0 );
    }
    else if ( a5 > 0 && a5 < 25 ) {
        var play8 = sup3.substring( a5, 0 );
    }
    else {
        var play8 = sup3.substring( a6, 0 );
    }
    if ( play3 == play2 || play3 == play4 || play3 == play5 ) {
        var play3 = play3.replace( play3, play8 );
    }
    else {}
    var a7 = sup3.search( /\n/g ) + 1;
    var sup4 = sup3.slice( a7 );
    var a8 = sup4.search( / entrou/g );
    var a9 = sup4.search( /\x3A/g );
    var a10 = sup4.search( / deixou/g );
    if ( a8 > 0 && a8 < 25 ) {
        var play9 = sup4.substring( a8, 0 );
    }
    else if ( a9 > 0 && a9 < 25 ) {
        var play9 = sup4.substring( a9, 0 );
    }
    else {
        var play9 = sup4.substring( a10, 0 );
    }
    if ( play4 == play2 || play4 == play3 || play4 == play5 ) {
        var play4 = play1.replace( play1, play9 );
    }
    else {}
    var a11 = sup4.search( /\n/g ) + 1;
    var sup5 = sup4.slice( a11 );
    var a11 = sup5.search( / entrou/g );
    var a12 = sup5.search( /\x3A/g );
    var a13 = sup5.search( / deixou/g );
    if ( a11 > 0 && a11 < 25 ) {
        var play10 = sup5.substring( a11, 0 );
    }
    else if ( a12 > 0 && a12 < 25 ) {
        var play10 = sup5.substring( a12, 0 );
    }
    else {
        var play10 = sup5.substring( a13, 0 );
    }
    if ( play5 == play2 || play5 == play3 || play5 == play4 ) {
        var play5 = play5.replace( play5, play10 );
    }
    else {}
    abc = document.createElement( 'a' ); //player1
    abc.innerHTML = play1;
    abc.setAttribute( 'title', 'Google' );
    abc.setAttribute( 'href', ( "http://www.leagueofgraphs.com/pt/search/" + play1 ) );
    abc.setAttribute( 'target', '_blank' );
    document.getElementById( "demo" )
        .appendChild( abc );
    abbc = document.createElement( 'a' ); //player2
    abbc.innerHTML = play2;
    abbc.setAttribute( 'title', 'Google' );
    abbc.setAttribute( 'href', ( "http://www.leagueofgraphs.com/pt/search/" + play2 ) );
    abbc.setAttribute( 'target', '_blank' );
    document.getElementById( "play" )
        .appendChild( abbc );
    miid = document.createElement( 'a' ); //player3
    miid.innerHTML = play3;
    miid.setAttribute( 'title', 'Google' );
    miid.setAttribute( 'href', ( "http://www.leagueofgraphs.com/pt/search/" + play3 ) );
    miid.setAttribute( 'target', '_blank' );
    document.getElementById( "mid" )
        .appendChild( miid );
    addc = document.createElement( 'a' );
    addc.innerHTML = play4;
    addc.setAttribute( 'title', 'Google' );
    addc.setAttribute( 'href', ( "http://www.leagueofgraphs.com/pt/search/" + play4 ) );
    addc.setAttribute( 'target', '_blank' );
    document.getElementById( "adc" )
        .appendChild( addc );
    toop = document.createElement( 'a' );
    toop.innerHTML = play5;
    toop.setAttribute( 'title', 'Google' );
    toop.setAttribute( 'href', ( "http://www.leagueofgraphs.com/pt/search/" + play5 ) );
    toop.setAttribute( 'target', '_blank' );
    document.getElementById( "top" )
        .appendChild( toop );


};
document.onkeydown = function () {
    if ( window.event.keyCode == '13' ) {
        myFunction();
    }
}
