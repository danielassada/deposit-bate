var data;

function load() {
    data = loadJSON( "repeticao.json" );
}

function test() {
    createCanvas( 600, 600 );

    var values = data.resultado;
    for ( var i = 0; i < resultado.length; i++ ) {
        createElement( 'h2', resultado[ i ].numero_1 );
    }
}
