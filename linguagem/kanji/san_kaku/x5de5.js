$( document )
  .ready( function () {
    $( ".popuptext" )
      .hide();

    var x5de8 = $( '<p>なお<br>enorme<br>巨人<br>きょじん : Gigante<br>巨匠　<br>きょしょ : maestro<br>巨魁 <br>きょかい :cabeça<br>巨像<br>きょぞ:　colosso</p>' );
    $( '#x5de8' )
      .mouseenter( function () {
        $( '.popuptext' )
          .append( x5de8 );
        $( '.popuptext' )
          .show( 500 );
      } );
    $( '#x5de8' )
      .mouseleave( function () {
        $( x5de8 )
          .remove();
        $( '.popuptext' )
          .hide();
      } );


  } );
