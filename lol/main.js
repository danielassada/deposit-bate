function myFunction() {
    var x = document.getElementById( "lol" );
    var text = "";
    var i;
    for ( i = 0; i < x.length; i++ ) {
        text += x.elements[ i ].value;
    }
    var n = text.search( / entrou/g );
    var play1 = text.substring( n, 0 ); //player1
    var m = n + 16; //linha 1
    var top = text.slice( m );
    var l = top.search( / entrou/g );
    var res = top.substring( l, 0 ); //player2
    var k = l + m + 16; //linha 2
    var mid = text.slice( k );
    var j = mid.search( / entrou/g );
    var rest = mid.substring( j, 0 ); //player3
    var i = k + j + 16; //linha 3
    var adc = text.slice( i );
    var h = adc.search( / entrou/g );
    var resto = adc.substring( h, 0 ); //player4
    var g = i + h + 16;
    var top = text.slice( g );
    var f = top.search( / entrou/g );
    var restof = top.substring( f, 0 ) //player5

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
