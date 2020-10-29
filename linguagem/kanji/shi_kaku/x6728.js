$( document )
  .ready( function () {
    $( ".popuptext" )
      .hide();
    var x67d3 = $( '<p>染み<br> しみ mancha <br> 染める<br> そめる : corante <br>染色<br> せんしょく : coloração</p>' );
    $( '#x67d3' )
      .mouseenter( function () {
        $( '.popuptext' )
          .append( x67d3 );
        $( '.popuptext' )
          .show( 500 );
      } );
    $( '#x67d3' )
      .mouseleave( function () {
        $( x67d3 )
          .remove();
        $( '.popuptext' )
          .hide();
      } );




  } );
