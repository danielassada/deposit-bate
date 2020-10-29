$( document )
  .ready( function () {
    $( ".popuptext" )
      .hide();
    var x66f2 = $( '<p>曲がる<br> まがる</p>' );
    $( '#x66f2' )
      .mouseenter( function () {
        $( '.popuptext' )
          .append( x66f2 );
        $( '.popuptext' )
          .show( 500 );
      } );
    $( '#x66f2' )
      .mouseleave( function () {
        $( x66f2 )
          .remove();
        $( '.popuptext' )
          .hide();
      } );




  } );
