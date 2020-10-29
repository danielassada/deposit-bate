$( document )
  .ready( function () {
    $( ".popuptext" )
      .hide();
    var x9577 = $( '<p>長い<br>　ながい　: longo(a)</p>' );
    $( '#x9577' )
      .mouseenter( function () {
        $( '.popuptext' )
          .append( x9577 );
        $( '.popuptext' )
          .show( 500 );
      } );
    $( '#x9577' )
      .mouseleave( function () {
        $( x9577 )
          .remove();
        $( '.popuptext' )
          .hide();
      } );




  } );
