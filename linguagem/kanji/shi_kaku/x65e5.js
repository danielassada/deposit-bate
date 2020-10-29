$( document )
  .ready( function () {
    $( ".popuptext" )
      .hide();

    var x6642 = $( '<p>時計<br>　　とけい : assistir<br> 時代<br>　　じだい : era <br>時期<br> じき tempo</p>' );
    $( '#x6642' )
      .mouseenter( function () {
        $( '.popuptext' )
          .append( x6642 );
        $( '.popuptext' )
          .show( 500 );
      } );
    $( '#x6642' )
      .mouseleave( function () {
        $( x6642 )
          .remove();
        $( '.popuptext' )
          .hide();
      } );



  } );
