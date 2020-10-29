// $( document )
//     .ready( function () {
//         $( ".popuptext" )
//             .hide();
//         var id0 = $( "<p>trakt<br>nota:9<br>usado pelo kodi para criar perfil PAGO.</p>" );
//
//
//         var nomes = [ "Banana", "Maçã", "Pera", "Manga", "Cajú", "Acerola", "Maracujá", "Melância", "Melão", "Jabuticaba", "Pitanga", "Kiwi", "Goiaba", "Tamarindo" ];
//
//         function sorteio() {
//             var c = document.getElementById( 'popuptext' );
//             var i = 0;
//             var velocidade = document.getElementById( 'speed' )
//                 .value;
//             var tempo = document.getElementById( 'time' )
//                 .value;
//             var intervalo = window.setInterval( function () {
//                 if ( i >= nomes.length )
//                     i = 0;
//                 c.value = nomes[ i++ ];
//                 c.append( nomes );
//             }, 5000 );
//             window.setTimeout( function () {
//                 clearInterval( intervalo );
//                 var n = Math.floor( Math.random() * nomes.length );
//                 c.value = nomes[ n ];
//             }, 25000 );
//         }
//
//
//     } );
