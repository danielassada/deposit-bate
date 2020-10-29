$( document )
  .ready( function () {
    $( ".popuptext" )
      .hide();
    var x5973 = $( "<p>おんな<br>On'na <br> mulher<br><br> </p>" );
    $( '#x5973' )
      .mouseenter( function () {
        $( '.popuptext' )
          .append( x5973 );
        $( '.popuptext' )
          .show( 500 );
      } );
    $( '#x5973' )
      .mouseleave( function () {
        $( x5973 )
          .remove();
        $( '.popuptext' )
          .hide();
      } );

    var x597d = $( '<p>好<br>bom<br><br>好き : すき<br>Gostar<br><br>好きです　　:　すきです　　<br>eu gosto de você<br><br>好きな  :   すきな<br>favorito<br><br>好み    : このみ<br>preferência<br></p>' );
    $( '#x597d' )
      .mouseenter( function () {
        $( '.popuptext' )
          .append( x597d );
        $( '.popuptext' )
          .show( 500 );
      } );
    $( '#x597d' )
      .mouseleave( function () {
        $( x597d )
          .remove();
        $( '.popuptext' )
          .hide();
      } );
  } );
