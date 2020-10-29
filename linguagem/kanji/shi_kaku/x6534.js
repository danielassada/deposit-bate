$( document )
  .ready( function () {
    $( ".popuptext" )
      .hide();
    var x6545 = $( '<p>故郷<br> ふるさと　　: cidade natal</p>' );
    $( '#x6545' )
      .mouseenter( function () {
        $( '.popuptext' )
          .append( x6545 );
        $( '.popuptext' )
          .show( 500 );
      } );
    $( '#x6545' )
      .mouseleave( function () {
        $( x6545 )
          .remove();
        $( '.popuptext' )
          .hide();
      } );




  } );
