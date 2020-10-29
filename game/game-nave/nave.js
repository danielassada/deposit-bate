function explicacao() {
    alert( "acerte 3 de 10" )
}

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
            var sameX = ( bullet.offsetTop >= 36 ) && ( bullet.offsetTop <= 70 );
            var sameY = ( target.offsetLeft >= 475 ) && ( target.offsetLeft <= 525 );
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
        document.getElementById( "hits" )
            .innerHTML = "Hits: " + hits;
        document.getElementById( "missed" )
            .innerHTML = "Missed: " + missed;
        if ( hits > 1 && missed < 10 ) {
            var play2 = "teste";
            var abc = document.createElement( 'a' ); //player1
            abc.innerHTML = play2;
            abc.setAttribute( 'title', 'proxima' );
            abc.setAttribute( 'href', ( "#" ) );
            abc.setAttribute( 'target', '_blank' );
            abc.setAttribute( 'class', 'teste' );
            document.getElementById( "score" )
                .appendChild( abc );
        }


    }
};
