$( document )
  .ready( function () {
    $( ".popuptext" )
      .hide();
    var x96e8 = $( '<p>あめ<br> chuva</p>' );
    $( '#x96e8' )
      .mouseenter( function () {
        $( '.popuptext' )
          .append( x96e8 );
        $( '.popuptext' )
          .show( 500 );
      } );
    $( '#x96e8' )
      .mouseleave( function () {
        $( x96e8 )
          .remove();
        $( '.popuptext' )
          .hide();
      } );
    var x96ea = $( '<p>ゆき<br>neve</p>' );
    $( '#x96ea' )
      .mouseenter( function () {
        $( '.popuptext' )
          .append( x96ea );
        $( '.popuptext' )
          .show( 500 );
      } );
    $( '#x96ea' )
      .mouseleave( function () {
        $( x96ea )
          .remove();
        $( '.popuptext' )
          .hide();
      } );
  } );
