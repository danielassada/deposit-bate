function myFunction() {
    var x = document.getElementById( "lol" );
    var content = [];
    var text = "";
    var i;
    for ( i = 0; i < x.length; i++ ) {
        text += x.elements[ i ].value;
    }
    var regex = /( entrou no saguão|\n)/g;
    var texto = text.split( regex );
    var r = texto[ 1 ].search( regex );
    for ( var l = 0; l < texto.length; l++ ) {
        if ( texto[ l ].search( regex ) !== 0 && texto[ l ] !== "" ) {
            content.push( texto[ l ] );
        }
    }
    // Origin: "https://developer.riotgames.com",
    // "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    // "Accept-Language": "pt-BR,pt;q=0.8,en-US;q=0.6,en;q=0.4",
    // User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36
    // for ( var i = 0; i < content.length; i++ ) {
    var api = 'https://br.api.riotgames.com/api/lol/BR/v1.4/summoner/by-name/' + content[ 0 ] + '?api_key=RGAPI-3c84b89b-104e-43a6-ba8f-72d10d273143';
    $.getJSON( api, function ( data ) {
        console.log( data );
        var id = data.id;
        $( "#dois" )
            .html.append( "id" + id + "<br>" );
    } );
    // }
    //     console.log( id );
    // };
    // for ( var j = 0; j < id.length; j++ ) {
    //     var api = 'https://br.api.riotgames.com/api/lol/BR/v1.3/stats/by-summoner/' + id[ j ] + '/ranked?season=' + 'SEASON2017' + '&api_key=RGAPI-3c84b89b-104e-43a6-ba8f-72d10d273143';
    //     $.getJSON( api, function ( data ) {
    //         console.log( data );
    //         for ( var i = 0; i < data.champions.length; i++ ) {
    //             var id3 = data.champions[ i ].id;
    //             var partidas = data.champions[ i ].stats.totalSessionsPlayed;
    //             var vitorias = data.champions[ i ].stats.totalSessionsWon;
    //             var porcen = Math.round( ( vitorias / partidas ) * 100 );
    //             content += porcen;
    //             var name = tr( id3 );
    //             $( ".tfull" )
    //                 .prepend( "<td><h1>" + name + "</h1><br>jogos R: " + partidas + "   Vitorias:" + vitorias + "<br><h3>" + porcen + "%</h3></td>" );
    //             console.log( id3 );
    //         }
    //
    //     } );
    //     $( "tres" )
    //         .prepend( content / j );
}
document.onkeydown = function () {
    if ( window.event.keyCode == '13' ) {
        myFunction();
    }
}
