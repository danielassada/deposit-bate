function myFunction() {

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
  var y1 = document.getElementById( "ep" );
  var ep = "";
  var j1;
  for ( j1 = 0; j1 < y1.length; j1++ ) {
    ep += y1.elements[ j1 ].value;
  }
  var y2 = document.getElementById( "link" );
  var link = "";
  var j2;
  for ( j2 = 0; j2 < y2.length; j2++ ) {
    link += y2.elements[ j2 ].value;
  }
  var y3 = document.getElementById( "tags" );
  var content = [];
  var tags = "";
  var j3;
  for ( j3 = 0; j3 < y3.length; j3++ ) {
    tags += y3.elements[ j3 ].value;
  }

  for ( x = 0; x < 8; x++ ) {
    var divId = text.replace( / /gi, "" )
      .toLowerCase();
  }

  var imagenUrl = text2;
  var link;
  var nome = text;

  var tagsp = "";

  var regex = /(\x20)/gi;
  var tags = tags.split( regex );
  for ( var l = 0; l < tags.length; l++ ) {
    if ( tags[ l ].search( regex ) < 0 && tags[ l ] !== "" ) {
      content.push( tags[ l ] );
    }
  }
  for ( j = 0; j < content.length; j++ ) {

    tagsp += "<a href='" + content[ j ] + ".php'>" + content[ j ] + "</a>";
  }




  var parte1 = "<li id='" + divId + "'>";
  var parte2 = "<div id='project' class='anime'><div class='thumbnail'><img id='cover' src='" + imagenUrl + "'/>";
  var parte3 = "<div class='captionsumi00'><div class='captionsumi01'><div class='caption-pag'><h2 id='name'><a href='" + link + "'>" + text;
  var parte4 = "</a></h2><strong>Episódios:</strong>" + ep
  var parte5 = "<strong>Gêneros:</strong>" + tagsp;
  var parte6 = "<span class='year'>lançamento</span></div></div></div></div><div class='nomeanime'><a href='" + link + "'>";
  var parte7 = nome + "</a></div></div></li>";

  var pull = document.createElement( "BR" );

  var node = document.createTextNode( parte1 );
  var node2 = document.createTextNode( parte2 );
  var node3 = document.createTextNode( parte3 );
  var node4 = document.createTextNode( parte4 );
  var node5 = document.createTextNode( parte5 );
  var node6 = document.createTextNode( parte6 );
  var node7 = document.createTextNode( parte7 );
  document.getElementById( "resultado" )
    .appendChild( node );
  document.getElementById( "resultado" )
    .appendChild( pull );
  document.getElementById( "resultado" )
    .appendChild( node2 );
  document.getElementById( "resultado" )
    .appendChild( pull );
  document.getElementById( "resultado" )
    .appendChild( node3 );
  document.getElementById( "resultado" )
    .appendChild( pull );
  document.getElementById( "resultado" )
    .appendChild( node4 );
  document.getElementById( "resultado" )
    .appendChild( pull );
  document.getElementById( "resultado" )
    .appendChild( node5 );
  document.getElementById( "resultado" )
    .appendChild( pull );
  document.getElementById( "resultado" )
    .appendChild( node6 );
  document.getElementById( "resultado" )
    .appendChild( pull );
  document.getElementById( "resultado" )
    .appendChild( node7 );


}
document.onkeydown = function () {
  if ( window.event.keyCode == '13' ) {
    myFunction();
  }
}
$( document )
  .ready( function () {
    $( "#clear-button" )
      .click( function () {
        $( "form" )[ 0 ].reset();
        $( "#resultado" )
          .empty();
      } );
  } );
