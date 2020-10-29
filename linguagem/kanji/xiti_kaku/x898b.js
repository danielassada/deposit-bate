$( document )
  .ready( function () {
    $( ".popuptext" )
      .hide();
    var x898b = $( '<p>見える<br> みえる　　: olhar <br> 見て<br> みて : parecer</p>' );
    $( '#x898b' )
      .mouseenter( function () {
        $( '.popuptext' )
          .append( x898b );
        $( '.popuptext' )
          .show( 500 );
      } );
    $( '#x898b' )
      .mouseleave( function () {
        $( x898b )
          .remove();
        $( '.popuptext' )
          .hide();
      } );




  } );
