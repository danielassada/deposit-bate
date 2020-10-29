$( document )
  .ready( function () {
    $( ".popuptext" )
      .hide();
    var x5730 = $( '<p>地図<br>　ちず　　: mapa<br> 地域 <br> ちいき região</p>' );
    $( '#x5730' )
      .mouseenter( function () {
        $( '.popuptext' )
          .append( x5730 );
        $( '.popuptext' )
          .show( 500 );
      } );
    $( '#x5730' )
      .mouseleave( function () {
        $( x5730 )
          .remove();
        $( '.popuptext' )
          .hide();
      } );




  } );
