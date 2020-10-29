$( document )
  .ready( function () {
    $( ".popuptext" )
      .hide();
    var x7a7a = $( '<p>そら<br>céu , vazio</p>' );
    $( '#x7a7a' )
      .mouseenter( function () {
        $( '.popuptext' )
          .append( x7a7a );
        $( '.popuptext' )
          .show( 500 );
      } );
    $( '#x7a7a' )
      .mouseleave( function () {
        $( x7a7a )
          .remove();
        $( '.popuptext' )
          .hide();
      } );
  } );
