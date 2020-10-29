$( document )
  .ready( function () {
    $( ".popuptext" )
      .hide();
    var x9ec4 = $( '<p>黄昏<br> たそがれ : crepúsculo</p>' );
    $( '#x9ec4' )
      .mouseenter( function () {
        $( '.popuptext' )
          .append( x9ec4 );
        $( '.popuptext' )
          .show( 500 );
      } );
    $( '#x9ec4' )
      .mouseleave( function () {
        $( x9ec4 )
          .remove();
        $( '.popuptext' )
          .hide();
      } );




  } );
