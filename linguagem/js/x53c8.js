$( document )
  .ready( function () {
    $( ".popuptext" )
      .hide();


    var x53d7 = $( '<p>受付<br>うけつけ　:aceitação<br>受ける<br>うける　:receber</p>' );
    $( '#x53d7' )
      .mouseenter( function () {
        $( '.popuptext' )
          .append( x53d7 );
        $( '.popuptext' )
          .show( 500 );
      } );
    $( '#x53d7' )
      .mouseleave( function () {
        $( x53d7 )
          .remove();
        $( '.popuptext' )
          .hide();
      } );
  } );
