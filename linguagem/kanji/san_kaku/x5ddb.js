$( document )
  .ready( function () {
    $( ".popuptext" )
      .hide();

    var x5ddd = $( '<p>かわ<br> rio</p>' );
    $( '#x5ddd' )
      .mouseenter( function () {
        $( '.popuptext' )
          .append( x5ddd );
        $( '.popuptext' )
          .show( 500 );
      } );
    $( '#x5ddd' )
      .mouseleave( function () {
        $( x5ddd )
          .remove();
        $( '.popuptext' )
          .hide();
      } );


  } );
