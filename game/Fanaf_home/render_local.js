function casa() {
  var cnv = document.getElementById( 'local' );
  var ctx = cnv.getContext( '2d' );

  var WIDTH = cnv.width,
    HEIGHT = cnv.height;


  var mvLeft = mvUp = mvRight = mvDown = false;
  var tileSize = 50;
  var tileSrcSize = 0;
  //recursos
  var background = new Image();
  background.src = "house.jpg";

  var fanaf = new Image();
  fanaf.src = "animacao.png";

  var sapphire = new Image();
  sapphire.src = "sapphire.png";

  var puff = new Image();
  puff.src = "puff.png";

  var wall = new Image();
  wall.src = "wall.png";


  //arrays
  var sprites = [];
  var blocks = [];
  var walls = [];

  var maze = [
  [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
  [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1 ],
  [ 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1 ],
  [ 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1 ],
  [ 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
  [ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ]
];

  var T_WIDTH = maze[ 0 ].length * 50,
    T_HEIGHT = maze.length * 50;

  for ( var row in maze ) {
    for ( var column in maze[ row ] ) {
      var tile = maze[ row ][ column ];
      if ( tile === 1 ) {
        var wall = {
          x: 50 * column,
          y: 50 * row,
          srcX: 0,
          srcY: 0,
          width: 50,
          height: 50
        };
        //sprites.push( wall );
        blocks.push( wall );
      }
    }
  }

  var World = {
    img: background,
    x: 0,
    y: 0,
    srcX: 0,
    srcY: 0,
    width: 1284,
    height: 676
  };
  sprites.push( World );



  var char = {
    img: fanaf,
    x: tileSize + 2,
    y: tileSize + 2,
    width: 28,
    height: 60,
    //animação
    srcX: 0,
    srcY: tileSrcSize,
    countAnim: 0
  };
  sprites.push( char );
  //centralizar O char

  var sapphire = {
    img: sapphire,
    x: 750,
    y: 250,
    srcX: 0,
    srcY: 0,
    width: 175,
    height: 175

  };
  sprites.push( sapphire );
  blocks.push( sapphire );




  var puff = {
    img: puff,
    x: 60,
    y: 65,
    srcX: 0,
    srcY: 0,
    width: 75,
    height: 70

  };
  sprites.push( puff );
  blocks.push( puff );


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

  //lugar onde o char vai começar
  char.x = 645;
  char.y = 650;
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
      char.srcY = tileSrcSize + char.height * 1;
    }
    if ( mvRight && !mvLeft ) {
      char.x += 3;
      char.srcY = tileSrcSize + char.height * 3;
    }
    if ( mvUp && !mvDown ) {
      char.y -= 3;
      char.srcY = tileSrcSize + char.height * 2;
    }
    if ( mvDown && !mvUp ) {
      char.y += 3;
      char.srcY = tileSrcSize + char.height * 0;
    }
    //processo de animação
    if ( mvLeft || mvRight || mvUp || mvDown ) {
      char.countAnim++;

      if ( char.countAnim >= 40 ) {
        char.countAnim = 0;
      }

      char.srcX = Math.floor( char.countAnim / 5 ) * char.width;
    }
    else {
      char.srcX = 0;
      char.countAnim = 0;
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
    for ( var i in blocks ) {
      var blk = blocks[ i ];
      if ( blk.visible ) {
        blockRect( blk, character );
      }
    }



    function goBack() {
      char.x = 575;
      char.y = 257;
      mvLeft = false;
      mvRight = false;
      mvUp = false;
      mvDown = false;

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
    // escolher a direção de movimento

    function blockMove( objA, objB ) {
      var distX = ( objA.x + objA.width / 2 ) - ( objB.x + objB.width / 2 );
      var distY = ( objA.y + objA.height / 2 ) - ( objB.y + objB.height / 2 );

      var sumWidth = ( objA.width + objB.width ) / 2;
      var sumHeight = ( objA.height + objB.height ) / 2;

      //esquerda direita
      var ladoH = objB.x - objA.x;
      var ladoV = objB.y - objA.y;

      if ( Math.abs( distX ) < sumWidth && Math.abs( distY ) < sumHeight ) {
        var overlapX = sumWidth - Math.abs( distX );
        var overlapY = sumHeight - Math.abs( distY );



        if ( overlapX >= overlapY ) { //colisão por cima ou por baixo
          if ( ladoV > 0 ) { //por cima
            objB.y += overlapY;
          }
          else if ( ladoV < 0 ) {
            objB.y -= overlapY;
          }
        }
        else { //colisão pela esquerda ou direita
          if ( ladoH > 0 ) { //colisão pela esquerda
            objB.x += overlapX;
          }
          else if ( ladoH < 0 ) {
            objB.x -= overlapX;
          }
        }
      }
    }

    function blockRectangle( objA, objB ) {
      var distX = ( objA.x + objA.width / 2 ) - ( objB.x + objB.width / 2 );
      var distY = ( objA.y + objA.height / 2 ) - ( objB.y + objB.height / 2 );

      var sumWidth = ( objA.width + objB.width ) / 2;
      var sumHeight = ( objA.height + objB.height ) / 2;

      if ( Math.abs( distX ) < sumWidth && Math.abs( distY ) < sumHeight ) {
        var overlapX = sumWidth - Math.abs( distX );
        var overlapY = sumHeight - Math.abs( distY );

        if ( overlapX > overlapY ) {
          objA.y = distY > 0 ? objA.y + overlapY : objA.y - overlapY;
        }
        else {
          objA.x = distX > 0 ? objA.x + overlapX : objA.x - overlapX;
        }

      }
    }


    if ( char.crashWith( sapphire ) ) {

      blockMove( char, sapphire );

    }

    else if ( char.crashWith( puff ) ) {
      puff.srcX = 75;
      //mudar a srx para um numero que nao exite para o personagem sumir
      char.srcX = 999;
    }
    if ( char.crashWith( puff ) == false ) {
      puff.srcX = 0;
    }
  }

  function teste() {
    alert( myleft )
  }



  function render() {
    ctx.save();
    ctx.translate( -cam.x, -cam.y );
    for ( var row in maze ) {
      for ( var column in maze[ row ] ) {
        var tile = maze[ row ][ column ];
        var x = column * 50;
        var y = row * 50;

        ctx.drawImage(
          blocks.img,
          blocks.srcX, blocks.srcY, blocks.width, blocks.height,
          blocks.x, blocks.y, blocks.width, blocks.height
        );

      }
    }
    for ( var i in sprites ) {
      var spr = sprites[ i ];
      ctx.drawImage( spr.img, spr.srcX, spr.srcY, spr.width, spr.height,
        spr.x, spr.y, spr.width, spr.height );
    }
    ctx.restore();
    // ctx.font = "bold 25px Arial";
    // ctx.fillText( "ninja", 10, 30 );

  }
  loop();
}
