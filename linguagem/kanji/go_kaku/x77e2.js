$( document )
  .ready( function () {
    $( ".popuptext" )
      .hide();
    var x77e5 = $( '<p>知る<br>　しる :　saber<br> 知識<br> ちしき : conhecimento<br> 知らず知らずのうちに<br>　:involuntariamente</p>' );
    $( '#x77e5' )
      .mouseenter( function () {
        $( '.popuptext' )
          .append( x77e5 );
        $( '.popuptext' )
          .show( 500 );
      } );
    $( '#x77e5' )
      .mouseleave( function () {
        $( x77e5 )
          .remove();
        $( '.popuptext' )
          .hide();
      } );




  } );
