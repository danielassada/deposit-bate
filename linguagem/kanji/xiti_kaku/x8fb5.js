$( document )
  .ready( function () {
    $( ".popuptext" )
      .hide();
    var x8fd4 = $( '<p>返信<br> へんしん : responder<br>返事<br> へんじ : responder</p>' );
    $( '#x8fd4' )
      .mouseenter( function () {
        $( '.popuptext' )
          .append( x8fd4 );
        $( '.popuptext' )
          .show( 500 );
      } );
    $( '#x8fd4' )
      .mouseleave( function () {
        $( x8fd4 )
          .remove();
        $( '.popuptext' )
          .hide();
      } );
    var x9060 = $( '<p>遠く<br>　とおく : longe<br></p>' );
    $( '#x9060' )
      .mouseenter( function () {
        $( '.popuptext' )
          .append( x9060 );
        $( '.popuptext' )
          .show( 500 );
      } );
    $( '#x9060' )
      .mouseleave( function () {
        $( x9060 )
          .remove();
        $( '.popuptext' )
          .hide();
      } );

    var x904e = $( '<p>過ぎている<br> すぎている : passaram</p>' );
    $( '#x904e' )
      .mouseenter( function () {
        $( '.popuptext' )
          .append( x904e );
        $( '.popuptext' )
          .show( 500 );
      } );
    $( '#x904e' )
      .mouseleave( function () {
        $( x904e )
          .remove();
        $( '.popuptext' )
          .hide();
      } );
    var x9053 = $( '<p>道<br>　みち　: estrada ,rua</p>' );
    $( '#x9053' )
      .mouseenter( function () {
        $( '.popuptext' )
          .append( x9053 );
        $( '.popuptext' )
          .show( 500 );
      } );
    $( '#x9053' )
      .mouseleave( function () {
        $( x9053 )
          .remove();
        $( '.popuptext' )
          .hide();
      } );
    var x9065 = $( '<p>遥か<br> はるか : longe <br> 遥か遠く<br> はるかとおく : muito longe</p>' );
    $( '#x9065' )
      .mouseenter( function () {
        $( '.popuptext' )
          .append( x9065 );
        $( '.popuptext' )
          .show( 500 );
      } );
    $( '#x9065' )
      .mouseleave( function () {
        $( x9065 )
          .remove();
        $( '.popuptext' )
          .hide();
      } );




  } );
