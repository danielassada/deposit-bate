$( document )
  .ready( function () {
    $( ".popuptext" )
      .hide();
    var x6b69 = $( '<p>歩く<br> あるく : caminhada > objeto<br> 歩いて<br>　あるて　: caminhando > verbo <br> 歩道 ほど : calçada</p>' );
    .mouseenter( function () {
      $( '.popuptext' )
        .append( x6b69 );
      $( '.popuptext' )
        .show( 500 );
    } );
    $( '#x6b69' )
      .mouseleave( function () {
        $( x6b69 )
          .remove();
        $( '.popuptext' )
          .hide();
      } );



  } );
