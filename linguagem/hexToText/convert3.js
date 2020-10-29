function numerico() {
  var x = document.getElementById( "hexdecimal" );
  var content = [];
  var text = "";
  var i;
  for ( i = 0; i < x.length; i++ ) {
    text += x.elements[ i ].value;
  }
  var y = document.getElementById( "descricao" );
  var content = [];
  var text2 = "";
  var j;
  for ( j = 0; j < y.length; j++ ) {
    text2 += y.elements[ j ].value;
  }
  //console.log( parseInt( text, 16 ) );
  //console.log( parseInt( text2, 16 ) );

  var i = parseInt( text, 16 );
  var j = parseInt( text2, 16 );

  while ( i < j ) {

    var parte1 = "<div class='row'><div class=' col-md-8'>unicode " + i.toString( 16 );
    var parte9 = "<div class='row'><div class='col-md-8'><ul class='conteudo '><br><li id='x" + i.toString( 16 ) + "' class='kanji'>" + String.fromCharCode( i );
    i++;
    var parte2 = "</div><div class=' col-md-8'>unicode " + i.toString( 16 );
    var parte10 = "</li></ul></div><div class='col-md-8'><ul class='conteudo '><br><li id='x" + i.toString( 16 ) + "' class='kanji'>" + String.fromCharCode( i );
    i++;
    var parte3 = "</div><div class=' col-md-8'>unicode " + i.toString( 16 );
    var parte11 = "</li></ul></div><div class='col-md-8'><ul class='conteudo '><br><li id='x" + i.toString( 16 ) + "' class='kanji'>" + String.fromCharCode( i );
    i++;
    var parte4 = "</div><div class=' col-md-8'>unicode " + i.toString( 16 );
    var parte12 = "</li></ul></div><div class='col-md-8'><ul class='conteudo '><br><li id='x" + i.toString( 16 ) + "' class='kanji'>" + String.fromCharCode( i );
    i++;
    var parte5 = "</div><div class=' col-md-8'>unicode " + i.toString( 16 );
    var parte13 = "</li></ul></div><div class='col-md-8'><ul class='conteudo '><br><li id='x" + i.toString( 16 ) + "' class='kanji'>" + String.fromCharCode( i );
    i++;
    var parte6 = "</div><div class=' col-md-8'>unicode " + i.toString( 16 );
    var parte14 = "</li></ul></div><div class='col-md-8'><ul class='conteudo '><br><li id='x" + i.toString( 16 ) + "' class='kanji'>" + String.fromCharCode( i );
    i++;
    var parte7 = "</div><div class=' col-md-8'>unicode " + i.toString( 16 );
    var parte15 = "</li></ul></div><div class='col-md-8'><ul class='conteudo '><br><li id='x" + i.toString( 16 ) + "' class='kanji'>" + String.fromCharCode( i );
    i++;
    var parte8 = "</div><div class=' col-md-8'>unicode " + i.toString( 16 ) + "</div></div>";
    var parte16 = "</li></ul></div><div class='col-md-8'><ul class='conteudo '><br><li id='x" + i.toString( 16 ) + "' class='kanji'>" + String.fromCharCode( i ) + "</li></ul></div></div>";


    // console.log( parte1 + parte2 + parte3 + parte4 + parte5 + parte6 + parte7 + parte8 + parte9 + parte10 + parte11 + parte12 + parte13 + parte14 + parte15 + parte16 );
    //'


    var node = document.createTextNode( parte1 + parte2 + parte3 + parte4 + parte5 + parte6 + parte7 + parte8 + parte9 + parte10 + parte11 + parte12 + parte13 + parte14 + parte15 + parte16 );
    document.getElementById( "resultado" )
      .appendChild( node );
  }


}

function make() {


  var i = 19968;

  while ( i < 40892 ) {

    var parte1 = i.toString( 16 ) + "<spam id='" + i.toString( 16 ) + "'>" + String.fromCharCode( i ) + "</spam>"
    i++;
    var parte2 = "<spam id='" + i.toString( 16 ) + "'>" + String.fromCharCode( i ) + "</spam>"
    i++;
    var parte3 = "<spam id='" + i.toString( 16 ) + "'>" + String.fromCharCode( i ) + "</spam>"
    i++;
    var parte4 = "<spam id='" + i.toString( 16 ) + "'>" + String.fromCharCode( i ) + "</spam>"
    i++;
    var parte5 = "<spam id='" + i.toString( 16 ) + "'>" + String.fromCharCode( i ) + "</spam>"
    i++;
    var parte6 = "<spam id='" + i.toString( 16 ) + "'>" + String.fromCharCode( i ) + "</spam>"
    i++;
    var parte7 = "<spam id='" + i.toString( 16 ) + "'>" + String.fromCharCode( i ) + "</spam>"
    i++;
    var parte8 = "<spam id='" + i.toString( 16 ) + "'>" + String.fromCharCode( i ) + "</spam>"
    i++;
    var parte9 = "<spam id='" + i.toString( 16 ) + "'>" + String.fromCharCode( i ) + "</spam>"
    i++;
    var parte10 = "<spam id='" + i.toString( 16 ) + "'>" + String.fromCharCode( i ) + "</spam>"
    i++;
    var parte11 = "<spam id='" + i.toString( 16 ) + "'>" + String.fromCharCode( i ) + "</spam>"
    i++;
    var parte12 = "<spam id='" + i.toString( 16 ) + "'>" + String.fromCharCode( i ) + "</spam>"
    i++;
    var parte13 = "<spam id='" + i.toString( 16 ) + "'>" + String.fromCharCode( i ) + "</spam>"
    i++;
    var parte14 = "<spam id='" + i.toString( 16 ) + "'>" + String.fromCharCode( i ) + "</spam>"
    i++;
    var parte15 = "<spam id='" + i.toString( 16 ) + "'>" + String.fromCharCode( i ) + "</spam>"
    i++;
    var parte16 = "<spam id='" + i.toString( 16 ) + "'>" + String.fromCharCode( i ) + "</spam>"
    i++;
    var parte17 = "<spam id='" + i.toString( 16 ) + "'>" + String.fromCharCode( i ) + "</spam>"
    i++;
    var parte18 = "<spam id='" + i.toString( 16 ) + "'>" + String.fromCharCode( i ) + "</spam>"
    i++;
    var parte19 = "<spam id='" + i.toString( 16 ) + "'>" + String.fromCharCode( i ) + "</spam>"
    i++;
    var parte20 = "<spam id='" + i.toString( 16 ) + "'>" + String.fromCharCode( i ) + "</spam>"
    i++;
    var parte21 = "<spam id='" + i.toString( 16 ) + "'>" + String.fromCharCode( i ) + "</spam>"
    i++;
    var parte22 = "<spam id='" + i.toString( 16 ) + "'>" + String.fromCharCode( i ) + "</spam>"
    i++;
    var parte23 = "<spam id='" + i.toString( 16 ) + "'>" + String.fromCharCode( i ) + "</spam>"
    i++;
    var parte24 = "<spam id='" + i.toString( 16 ) + "'>" + String.fromCharCode( i ) + "</spam>"
    i++;
    var parte25 = "<spam id='" + i.toString( 16 ) + "'>" + String.fromCharCode( i ) + "</spam>"
    i++;
    var parte26 = "<spam id='" + i.toString( 16 ) + "'>" + String.fromCharCode( i ) + "</spam>"
    i++;
    var parte27 = "<spam id='" + i.toString( 16 ) + "'>" + String.fromCharCode( i ) + "</spam>"
    i++;
    var parte28 = "<spam id='" + i.toString( 16 ) + "'>" + String.fromCharCode( i ) + "</spam>"
    i++;
    var parte29 = "<spam id='" + i.toString( 16 ) + "'>" + String.fromCharCode( i ) + "</spam>"
    i++;
    var parte30 = "<spam id='" + i.toString( 16 ) + "'>" + String.fromCharCode( i ) + "</spam>"
    i++;
    var parte31 = "<spam id='" + i.toString( 16 ) + "'>" + String.fromCharCode( i ) + "</spam>"
    i++;
    var parte32 = "<spam id='" + i.toString( 16 ) + "'>" + String.fromCharCode( i ) + "</spam><br>"
    i++;
    var node = document.createTextNode( parte1 + parte2 + parte3 + parte4 + parte5 + parte6 + parte7 + parte8 + parte9 + parte10 + parte11 + parte12 + parte13 + parte14 + parte15 + parte16 + parte17 + parte18 + parte19 + parte20 + parte21 + parte22 + parte23 + parte24 + parte25 + parte26 + parte27 + parte28 + parte29 + parte30 + parte31 + parte32 );
    document.getElementById( "resultado" )
      .appendChild( node );
  }
}
