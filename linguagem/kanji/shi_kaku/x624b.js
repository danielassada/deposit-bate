$( document )
  .ready( function () {
    $( ".popuptext" )
      .hide();
    var x632f = $( '<p>振り返る<br> ふりかえれば : olhar para trás<br>　振込み<br>　ふりこみ : transferência</p>' );
    $( '#x632f' )
      .mouseenter( function () {
        $( '.popuptext' )
          .append( x632f );
        $( '.popuptext' )
          .show( 500 );
      } );
    $( '#x632f' )
      .mouseleave( function () {
        $( x632f )
          .remove();
        $( '.popuptext' )
          .hide();
      } );




  } );
