$( document )
  .ready( function () {
    $( ".popuptext" )
      .hide();
    var x9ea6 = $( '<p>むぎ trigo<br> nome proprio: mugi</p>' );
    $( '#x9ea6' )
      .mouseenter( function () {
        $( '.popuptext' )
          .append( x9ea6 );
        $( '.popuptext' )
          .show( 500 );
      } );
    $( '#x9ea6' )
      .mouseleave( function () {
        $( x9ea6 )
          .remove();
        $( '.popuptext' )
          .hide();
      } );
  } );
