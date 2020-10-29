var x56db = $( '<p>よ<br>numereral : 4</p>' );
$( '#x56db' )
  .mouseenter( function () {
    $( '.popuptext' )
      .append( x56db );
    $( '.popuptext' )
      .show( 500 );
  } );
$( '#x56db' )
  .mouseleave( function () {
    $( x56db )
      .remove();
    $( '.popuptext' )
      .hide();
  } );
