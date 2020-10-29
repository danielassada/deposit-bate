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
    console.log( b );
    var d = text.search( /\x2E/g ) + 1; // \x2E = ponto final
    var top = text.slice( d );
    var z = top.substring( top, 0 );
    var e = top.search( / entrou/g );
    var f = top.search( /\x3A/g );
    var g = top.search( / deixou/g );
    if ( e > 0 && e < 25 ) {
        var res = top.substring( e, 0 ); //player2
    }
    else if ( f > 0 && f < 25 ) {
        var res = top.substring( f, 0 ); //player2
    }
    else {
        var res = top.substring( g, 0 ); //player2
    }
    var h = top.search( /\x2E/g ) + 1; /// \x2E =  ponto final
    var mid = top.slice( h );
    var i = mid.search( / entrou/g );
    var j = mid.search( /\x3A/g );
    var k = mid.search( / deixou/g );
    if ( i > 0 && i < 25 ) {
        var rest = mid.substring( i, 0 ); //player3
    }
    else if ( j > 0 && j < 25 ) {
        var rest = mid.substring( j, 0 ); //player3
    }
    else {
        var rest = mid.substring( k, 0 ); //player3
    }
    var l = mid.search( /\x2E/g ) + 1; /// \x2E =  ponto final
    var adc = mid.slice( l );
    var m = adc.search( / entrou/g );
    var n = adc.search( /\x3A/g );
    var o = adc.search( / deixou/g );
    if ( m > 0 && m < 25 ) {
        var resto = adc.substring( m, 0 ); //player4
    }
    else if ( n > 0 && n < 25 ) {
        var resto = adc.substring( n, 0 ); //player4
    }
    else {
        var resto = adc.substring( o, 0 ); //player4
    }
    var p = adc.search( /\x2E/g ) + 1; /// \x2E =  ponto final
    var sup = adc.slice( p );
    var q = sup.search( / entrou/g );
    var r = sup.search( /\x3A/g );
    var s = sup.search( / deixou/g );
    if ( q > 0 && q < 25 ) {
        var restof = sup.substring( q, 0 ); //player5
    }
    else if ( r > 0 && r < 25 ) {
        var restof = sup.substring( r, 0 ); //player5
    }
    else {
        var restof = sup.substring( s, 0 ); //player5
    }

    abc = document.createElement( 'a' ); //player1
    abc.innerHTML = 'player 1';
    abc.setAttribute( 'title', 'Google' );
    abc.setAttribute( 'href', ( "http://www.leagueofgraphs.com/pt/search/" + play1 ) );
    abc.setAttribute( 'target', '_blank' );
    document.getElementById( "demo" )
        .appendChild( abc );
    abbc = document.createElement( 'a' ); //player2
    abbc.innerHTML = 'player 2';
    abbc.setAttribute( 'title', 'Google' );
    abbc.setAttribute( 'href', ( "http://www.leagueofgraphs.com/pt/search/" + res ) );
    abbc.setAttribute( 'target', '_blank' );
    document.getElementById( "play" )
        .appendChild( abbc );
    miid = document.createElement( 'a' ); //player3
    miid.innerHTML = 'player 3';
    miid.setAttribute( 'title', 'Google' );
    miid.setAttribute( 'href', ( "http://www.leagueofgraphs.com/pt/search/" + rest ) );
    miid.setAttribute( 'target', '_blank' );
    document.getElementById( "mid" )
        .appendChild( miid );
    addc = document.createElement( 'a' );
    addc.innerHTML = 'player 4';
    addc.setAttribute( 'title', 'Google' );
    addc.setAttribute( 'href', ( "http://www.leagueofgraphs.com/pt/search/" + resto ) );
    addc.setAttribute( 'target', '_blank' );
    document.getElementById( "adc" )
        .appendChild( addc );
    toop = document.createElement( 'a' );
    toop.innerHTML = 'player 5';
    toop.setAttribute( 'title', 'Google' );
    toop.setAttribute( 'href', ( "http://www.leagueofgraphs.com/pt/search/" + restof ) );
    toop.setAttribute( 'target', '_blank' );
    document.getElementById( "top" )
        .appendChild( toop );


}

// $(document).ready(function(){
//     $("#todos").click(function(){
// alert(funfa);
//       //  $("a[target='_blank']").trigger("click");
//     });
// });

//
// // $('a.yourlink').click(function() {
// //     window.open('http://yoururl1.com');
// //     window.open('http://yoururl2.com');
// //     window.open('http://yoururl2.com');
// //     window.open('http://yoururl2.com');
// //     window.open('http://yoururl2.com');
// // });
// $(function() { // On DOM content ready...
//     var urls = [];
//
//     $('.yourlinks a').each(function() {
//         urls.push(this.href); // Store the URLs from the links...
//     });
//
//     var multilink = $('<a href="#">Click here</a>'); // Create a new link...
//     multilink.click(function() {
//         for (var i in urls) {
//             window.open('http://yoururl1.com'[i]); // ...that opens each stored link in its own window when clicked...
//
//         }
//     });
//
//     $('.yourlinks').replaceWith(multilink); // ...and replace the original HTML links with the new link.
// });
;
document.onkeydown = function () {
    if ( window.event.keyCode == '13' ) {
        myFunction();
    }
}
