( function () {
    var cnv = document.querySelector( 'canvas' );
    var ctx = cnv.getContext( '2d' );

    var mvLeft = mvUp = mvRight = mvDown = false;

    //recursos
    var background = new Image();
    background.src = "matrix.jpg";

    var fanaf = new Image();
    fanaf.src = "fanaf.png";

    var sapphire = new Image();
    sapphire.src = "sapphire.png"

    var arctic = new Image();
    arctic.src = "505.png"

    var musica = new Image();
    musica.src = "musica.png"

    var sonata = new Image();
    sonata.src = "sonata.png"

    var gameAtirador = new Image();
    gameAtirador.src = "fanaf_soldado_armado.png"

    //arrays
    var sprites = [];
    var blocks = [];


    var World = {
        img: background,
        x: 0,
        y: 0,
        width: 1300,
        height: 600
    };
    sprites.push( World );



    var char = {
        img: fanaf,
        x: 0,
        y: 0,
        width: 64,
        height: 64
    };
    sprites.push( char );
    //centralizar O char


    var sapphire = {
        img: sapphire,
        x: 750,
        y: 250,
        width: 175,
        height: 175

    };
    sprites.push( sapphire );
    blocks.push( sapphire );

    var arctic = {
        img: arctic,
        x: 1000,
        y: 650,
        width: 100,
        height: 100

    };
    sprites.push( arctic );
    blocks.push( arctic );

    var musica = {
        img: musica,
        x: 1100,
        y: 250,
        width: 110,
        height: 110

    };
    sprites.push( musica );
    blocks.push( musica );

    var sonata = {
        img: sonata,
        x: 1100,
        y: 450,
        width: 100,
        height: 100

    };
    sprites.push( sonata );
    blocks.push( sonata );

    var gameAtirador = {
        img: gameAtirador,
        x: 50,
        y: 50,
        width: 250,
        height: 250

    };
    sprites.push( gameAtirador );
    blocks.push( gameAtirador );


    var cam = {
        x: 0,
        y: 0,
        width: cnv.width,
        height: cnv.height,
        leftEdge: function () {
            return this.x + ( this.width * 0.25 );
        },
        rightEdge: function () {
            return this.x + ( this.width * 0.75 );
        },
        topEdge: function () {
            return this.y + ( this.height * 0.25 );
        },
        bottomEdge: function () {
            return this.y + ( this.height * 0.75 );
        }
    };
    char.x = ( World.width - char.width ) / 2;
    char.y = ( World.height - char.height ) / 2;

    //centralizar a câmera
    cam.x = ( World.width - cam.width ) / 2;
    cam.y = ( World.height - cam.height ) / 2;

    //teclas
    var LEFT = 37,
        UP = 38,
        RIGHT = 39,
        DOWN = 40;

    //MOVIMENTO

    window.addEventListener( 'keydown', function ( e ) {
        var key = e.keyCode;
        switch ( key ) {
        case LEFT:
            mvLeft = true;
            break;
        case RIGHT:
            mvRight = true;
            break;
        case UP:
            mvUp = true;
            break;
        case DOWN:
            mvDown = true;
            break;
        }
    }, false );
    window.addEventListener( 'keyup', function ( e ) {
        var key = e.keyCode;
        switch ( key ) {
        case 37:
            mvLeft = false;
            break;
        case 39:
            mvRight = false;
            break;
        case 38:
            mvUp = false;
            break;
        case 40:
            mvDown = false;
            break;
        }
    }, false );

    //funções
    function loop() {
        window.requestAnimationFrame( loop, cnv );
        update();
        render();
    }

    function update() {
        if ( mvLeft && !mvRight ) {
            char.x -= 3;
        }
        if ( mvRight && !mvLeft ) {
            char.x += 3;
        }
        if ( mvUp && !mvDown ) {
            char.y -= 3;
        }
        if ( mvDown && !mvUp ) {
            char.y += 3;
        }

        //limite do char
        if ( char.x < 0 ) {
            char.x = 0;
        }
        if ( char.x + char.width > World.width ) {
            char.x = World.width - char.width;
        }
        if ( char.y < 0 ) {
            char.y = 0;
        }
        if ( char.y + char.height > World.height ) {
            char.y = World.height - char.height;
        }

        //atualizar a posição da câmera em função do char
        if ( char.x < cam.leftEdge() ) {
            cam.x = char.x - ( cam.width * 0.25 );
        }
        if ( char.x + char.width > cam.rightEdge() ) {
            cam.x = char.x + char.width - ( cam.width * 0.75 );
        }
        if ( char.y < cam.topEdge() ) {
            cam.y = char.y - ( cam.height * 0.25 );
        }
        if ( char.y + char.height > cam.bottomEdge() ) {
            cam.y = char.y + char.height - ( cam.height * 0.75 );
        }

        //limite da câmera
        if ( cam.x < 0 ) {
            cam.x = 0;
        }
        if ( cam.x + cam.width > World.width ) {
            cam.x = World.width - cam.width;
        }
        if ( cam.y < 0 ) {
            cam.y = 0;
        }
        if ( cam.y + cam.height > World.height ) {
            cam.y = World.height - cam.height;
        }
        //colisões
        char.crashWith = function ( otherobj ) {
            var myleft = this.x;
            var myright = this.x + ( this.width );
            var mytop = this.y;
            var mybottom = this.y + ( this.height );
            var otherleft = otherobj.x;
            var otherright = otherobj.x + ( otherobj.width );
            var othertop = otherobj.y;
            var otherbottom = otherobj.y + ( otherobj.height );
            var crash = true;
            if ( ( mybottom < othertop ) || ( mytop > otherbottom ) || ( myright < otherleft ) || ( myleft > otherright ) ) {
                crash = false;
            }
            return crash;
        }
        // char.x + (char.width/2)
        // char.y + (char.heigt/2)


        // char.crashWithUp = function ( otherobj ) {
        //     var myleft = this.x;
        //     var myright = this.x + ( this.width );
        //     var mytop = this.y;
        //     var mybottom = this.y + ( this.height );
        //     var otherleft = otherobj.x;
        //     var otherright = otherobj.x + ( otherobj.width );
        //     var othertop = otherobj.y;
        //     var otherbottom = otherobj.y + ( otherobj.height );
        //     // console.log( myleft, myright, mytop, otherleft, otherright, othertop, otherbottom,
        //     //     crashUp );
        //     var crashUp = true;
        //     if ( ( mybottom < othertop ) && ( otherleft != myright ) ) {
        //         crashUp = false;
        //     }
        //     return crashUp;
        // }
        var myleft = char.x;
        var myright = char.x + ( char.width );
        var mytop = char.y;
        var mybottom = char.y + ( char.height );
        var otherleft = sapphire.x;
        var otherright = sapphire.x + ( sapphire.width );
        var othertop = sapphire.y;
        var otherbottom = sapphire.y + ( sapphire.height );
        if ( char.crashWith( sapphire ) && ( mybottom <= othertop ) ) {
            sapphire.y -= 3;
        }
        else if ( char.crashWith( sapphire ) && ( mytop >= otherbottom ) ) {
            sapphire.y += 3;
        }

        else if ( char.crashWith( arctic ) ) {
            window.open( "../../Abyss%20Web%20Server/htdocs/arctic.html", "_self", "" );
        }
        else if ( char.crashWith( musica ) ) {
            window.open( "../../Abyss%20Web%20Server/htdocs/musica.html", "_self", "" );
        }
        else if ( char.crashWith( sonata ) ) {
            window.open( "../../Abyss%20Web%20Server/htdocs/sonata.html", "_self", "" );
        }
        else if ( char.crashWith( gameAtirador ) ) {
            alert( "Ainda bem que tinham essa boina Extra Grande" )
            window.open( "../game/fanaf_radical/fanaf_atirador.html", "_self", "" );
        }
    }

    function teste() {
        alert( myleft )
    }

    function render() {
        ctx.save();
        ctx.translate( -cam.x, -cam.y );
        for ( var i in sprites ) {
            var spr = sprites[ i ];
            ctx.drawImage( spr.img, 0, 0, spr.width, spr.height, spr.x, spr.y, spr.width, spr.height );
        }
        ctx.restore();
        ctx.font = "bold 25px Arial";
        ctx.fillText( "ninja", 10, 30 );

    }
    loop();
}() );
