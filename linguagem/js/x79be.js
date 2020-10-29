var x79c1 = $( '<p>わたし<br> eu , pronome pessoal da primeira pessoa<br> ultilizados da maior parte das situações</p>' );
$( '#x79c1' )
  .mouseenter( function () {
    $( '.popuptext' )
      .append( x79c1 );
    $( '.popuptext' )
      .show( 500 );
  } );
$( '#x79c1' )
  .mouseleave( function () {
    $( x79c1 )
      .remove();
    $( '.popuptext' )
      .hide();
  } );
