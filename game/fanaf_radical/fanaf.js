setInterval( explicacao, 4000 );

function explicacao() {
    document.getElementById( "score" )
    var element = document.getElementById( 'Lvl 2' );
    if ( typeof ( 'a' ) != 'undefined' && element != null ) {

        alert( "click no link na parte inferior da esquerda escrito Lvl 2, tá bem grandão demoro já" )
    }

    else if ( hits >= 5 && missed < 10 ) {
        var play2 = "Lvl 2";
        var abc = document.createElement( 'a' ); //player1
        abc.innerHTML = play2;
        abc.setAttribute( 'title', 'proxima' );
        abc.setAttribute( 'href', ( "#" ) );
        abc.setAttribute( 'target', '_blank' );
        abc.setAttribute( 'id', 'Lvl 2' );
        document.getElementById( "score" )
            .appendChild( abc );
        var sucesso = 'Supimpa pra dedéu! você viu como eu sou do barulho, agora proximo level.'
        document.getElementById( "popuptext" )
            .innerHTML = "Fanaf: " + sucesso;
    }

    else {
        var text = "acerte 5, erre menos que  10";
        document.getElementById( "popuptext" )
            .innerHTML = "Fanaf: " + text;
    }
}
window.setInterval( 'explicação()', 5000 );
var hits = 0;
var missed = 0;


function Shoot() {
    var bullet = document.getElementById( "bullet" );
    bullet.offsetTop = 330;
    var target = document.getElementById( "target" );
    bullet.style.display = "inherit";
    var bPos = 331;
    var t = setInterval( moveBullet, 5 );

    function moveBullet() {
        if ( bPos < 30 ) {
            clearInterval( t );
            bullet.style.display = "none";
            missed++;


        }
        else {
            var sameX = ( bullet.offsetTop >= 55 ) && ( bullet.offsetTop <= 90 );
            var sameY = ( target.offsetLeft >= 500 ) && ( target.offsetLeft <= 550 );
            document.getElementById( "Balax" )
                .innerHTML = "x: " + sameX;
            document.getElementById( "Balay" )
                .innerHTML = "y: " + sameY;
            if ( !( sameX && sameY ) ) {
                bPos -= 3;
                bullet.style.top = bPos + "px";
                var yb = bPos + "px";
            }


            else {
                clearInterval( t );
                bullet.style.display = "none";
                hits++;
                document.getElementById( "explode" )
                    .style.visibility = "inherit";
                setTimeout( function () {
                    document.getElementById( "explode" )
                        .style.visibility = "hidden";
                }, 800 )

            }

        }

        var x = 0;
        var y = 0;
        document.getElementById( "hits" )
            .innerHTML = "Hits: " + hits;
        document.getElementById( "missed" )
            .innerHTML = "Missed: " + missed;




    }
};
document.onkeydown = function () {
    if ( window.event.keyCode == '67' ) {
        Shoot();
    }
}
