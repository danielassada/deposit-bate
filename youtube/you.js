document.onkeydown = function () {
  if ( window.event.keyCode == '27' ) {
    $( "#hide" )
      .empty()
      .hide();
    $( ".close" )
      .hide();
  }
}
$( document )
  .ready( function () {
    $( "#hide" )
      .hide();
    $( ".close" )
      .hide();




    $( "#principal" )
      .click( function () {
        $( "#player" )
          .toggleClass( "fullScreen" );
        $( "#player" )
          .toggleClass( "padrao" );
$( "#jquery_jplayer_N" ).toggleClass( "hide" );
$( "#volume" ).toggleClass( "hide" );
$( "#playlist" ).toggleClass( "hide" );
$( "#player" ).toggleClass( "absolu" );
      } );


    $( "#resize_italiano" )
      .click( function () {
        $( "#italiano" )
          .toggleClass( "fullScreen" );
        $( "#italiano" )
          .toggleClass( "padrao" );
      } );
    $( "#resize_mpb" )
      .click( function () {
        $( "#mpb" )
          .toggleClass( "fullScreen" );
        $( "#mpb" )
          .toggleClass( "padrao" );
      } );
    $( "#resize_danca" )
      .click( function () {
        $( "#danca" )
          .toggleClass( "fullScreen" );
        $( "#danca" )
          .toggleClass( "padrao" );
      } );
    $( "#resize_playhard" )
      .click( function () {
        $( "#playhard" )
          .toggleClass( "fullScreen" );
        $( "#playhard" )
          .toggleClass( "padrao" );
      } );
    $( "#resize_letraa" )
      .click( function () {
        $( "#letraa" )
          .toggleClass( "fullScreen" );
        $( "#letraa" )
          .toggleClass( "padrao" );
      } );
    $( "#resize_flor" )
      .click( function () {
        $( "#flor" )
          .toggleClass( "fullScreen" );
        $( "#flor" )
          .toggleClass( "padrao" );
      } );
    $( "#resize_eletronica" )
      .click( function () {
        $( "#eletronica" )
          .toggleClass( "fullScreen" );
        $( "#eletronica" )
          .toggleClass( "padrao" );
      } );
    $( "#resize_criolo" )
      .click( function () {
        $( "#criolo" )
          .toggleClass( "fullScreen" );
        $( "#criolo" )
          .toggleClass( "padrao" );
      } );
    $( "#resize_lorde" )
      .click( function () {
        $( "#lorde" )
          .toggleClass( "fullScreen" );
        $( "#lorde" )
          .toggleClass( "padrao" );
      } );
    $( "#resize_morna" )
      .click( function () {
        $( "#morna" )
          .toggleClass( "fullScreen" );
        $( "#morna" )
          .toggleClass( "padrao" );
      } );

    ///info
    $( "#info_italiano" )
      .click( function () {
        $( "#inf_italiano" )
          .toggleClass( "descShow" );
        $( "#inf_italiano" )
          .toggleClass( "desc" );
        $( ".close" )
          .show();
      } );
    $( "#info_mpb" )
      .click( function () {
        $( "#inf_mpb" )
          .toggleClass( "descShow" );
        $( "#inf_mpb" )
          .toggleClass( "desc" );
        $( ".close" )
          .show();
      } );
    $( "#info_playhard" )
      .click( function () {
        $( "#inf_playhard" )
          .toggleClass( "descShow" );
        $( "#inf_playhard" )
          .toggleClass( "desc" );
        $( ".close" )
          .show();
      } );
    $( "#info_letraa" )
      .click( function () {
        $( "#inf_letraa" )
          .toggleClass( "descShow" );
        $( "#inf_letraa" )
          .toggleClass( "desc" );
        $( ".close" )
          .show();
      } );
    $( "#info_lorde" )
      .click( function () {
        $( "#inf_lorde" )
          .toggleClass( "descShow" );
        $( "#inf_lorde" )
          .toggleClass( "desc" );
        $( ".close" )
          .show();
      } );
    $( "#info_morna" )
      .click( function () {
        $( "#inf_morna" )
          .toggleClass( "descShow" );
        $( "#inf_morna" )
          .toggleClass( "desc" );
        $( ".close" )
          .show();
      } );

    //botão de limpar descrição #informação
    $( ".close" )
      .click( function () {
        $( "#hide" )
          .empty()
          .hide();
        $( ".close" )
          .hide();
        if ( $( "#inf_lorde" )
          .hasClass( "descShow" ) ) {
          $( "#inf_lorde" )
            .toggleClass( "descShow" );
          $( "#inf_lorde" )
            .toggleClass( "desc" );
        }
        if ( $( "#inf_letraa" )
          .hasClass( "descShow" ) ) {
          $( "#inf_letraa" )
            .toggleClass( "descShow" );
          $( "#inf_letraa" )
            .toggleClass( "desc" );
        }
        if ( $( "#inf_playhard" )
          .hasClass( "descShow" ) ) {
          $( "#inf_playhard" )
            .toggleClass( "descShow" );
          $( "#inf_playhard" )
            .toggleClass( "desc" );
        }
        if ( $( "#inf_mpb" )
          .hasClass( "descShow" ) ) {
          $( "#inf_mpb" )
            .toggleClass( "descShow" );
          $( "#inf_mpb" )
            .toggleClass( "desc" );
        }
        if ( $( "#inf_italiano" )
          .hasClass( "descShow" ) ) {
          $( "#inf_italiano" )
            .toggleClass( "descShow" );
          $( "#inf_italiano" )
            .toggleClass( "desc" );
        }
        if ( $( "#inf_morna" )
          .hasClass( "descShow" ) ) {
          $( "#inf_morna" )
            .toggleClass( "descShow" );
          $( "#inf_morna" )
            .toggleClass( "desc" );
        }

      } );
  } );
var gapikey = 'AIzaSyCKMpw2nmPnon_gkh4EIXnbiAmrZNw-v4M';

var algumacoisa = [];
var numeroId = -1;

function detalhe( numeroId ) {
  $.getJSON( "https://www.googleapis.com/youtube/v3/videos", {
    key: "AIzaSyAQ26GN-L4JyAcuwOdWRgLLvGNG1uh5g6k",
    part: "snippet, statistics",
    type: 'video',
    id: algumacoisa[ numeroId ]
  }, function ( data ) {
    $( "#hide" )
      .show();

    $( ".close" )
      .show();

    console.log( data );

    var node = "<p class='white'>" +
      data.items[ 0 ].id.toString() + "</p><br><br><p class='white'>" +
      data.items[ 0 ].snippet.tags.toString() + "</p><br><br><p class='white'><span>Categoria:</span>" +
      data.items[ 0 ].snippet.categoryId.toString() + "</p><br><br><p class='white'><span>Titulo:</span>" +
      data.items[ 0 ].snippet.localized.title.toString() + "</p><br><br><p class='white'><span>Descrição:</span>" +
      data.items[ 0 ].snippet.localized.description.toString() + '</p><br><br>' + "<br><br><p class='white'>" +
      data.items[ 0 ].statistics.commentCount.toString() + '­­──══► <img src="youtubecomment.png" alt=""><br><br>' +
      data.items[ 0 ].statistics.dislikeCount.toString() + '­­──══► <img src="youtubedislike.png" alt=""><br><br>' +
      data.items[ 0 ].statistics.likeCount.toString() + '­­──══► <img src="youtubelike.png" alt=""><br><br>' +
      data.items[ 0 ].statistics.favoriteCount.toString() + '­­──­­──­­──════► <img src="youtubefavorite.png" alt=""><br><br>' +
      data.items[ 0 ].statistics.viewCount.toString() + "­­──══► <img src='youtubeviewer.png' alt=''></p>";

    $( '#hide' )
      .append( node );

  } );

}
$( function () {

  var searchField = $( '#query' );
  var icon = $( '#search-btn' );

  $( searchField )
    .on( 'focus', function () {
      $( this )
        .animate( {
          width: '90%'
        }, 400 );
      $( icon )
        .animate( {
          right: '21px'
        }, 400 );
    } );

  $( searchField )
    .on( 'blur', function () {
      if ( searchField.val() == '' ) {
        $( searchField )
          .animate( {
            width: '45%'
          }, 400, function () {} );
        $( icon )
          .animate( {
            right: '304px'
          }, 400, function () {} );
      }
    } );

  $( '#search-form' )
    .submit( function ( e ) {
      e.preventDefault();
    } );
} );

function search() {
  $( '#results' )
    .html( '' );
  $( '#buttons' )
    .html( '' );

  q = $( '#query' )
    .val();

  $.get(
    "https://www.googleapis.com/youtube/v3/search", {
      part: 'snippet, id',
      q: q,
      type: 'video',
      key: gapikey
    },
    function ( data ) {
      var nextPageToken = data.nextPageToken;
      var prevPageToken = data.prevPageToken;

      // console.log( data );

      $.each( data.items, function ( i, item ) {
        var videoID = item.id.videoId;

        algumacoisa.push( videoID );


        var output = getOutput( item );

        $( '#results' )
          .append( output );
      } );

      var buttons = getButtons( prevPageToken, nextPageToken );

      $( '#buttons' )
        .append( buttons );
    } );
}

function nextPage() {
  var token = $( '#next-button' )
    .data( 'token' );
  var q = $( '#next-button' )
    .data( 'query' );


  $( '#results' )
    .html( '' );
  $( '#buttons' )
    .html( '' );

  q = $( '#query' )
    .val();

  $.get(
    "https://www.googleapis.com/youtube/v3/search", {
      part: 'snippet, id',
      q: q,
      pageToken: token,
      type: 'video',
      key: gapikey
    },
    function ( data ) {

      var nextPageToken = data.nextPageToken;
      var prevPageToken = data.prevPageToken;

      console.log( data );

      $.each( data.items, function ( i, item ) {

        var output = getOutput( item );
        $( '#results' )
          .append( output );
      } );

      var buttons = getButtons( prevPageToken, nextPageToken );

      $( '#buttons' )
        .append( buttons );
    } );
}

function prevPage() {
  var token = $( '#prev-button' )
    .data( 'token' );
  var q = $( '#prev-button' )
    .data( 'query' );


  $( '#results' )
    .html( '' );
  $( '#buttons' )
    .html( '' );

  q = $( '#query' )
    .val();

  $.get(
    "https://www.googleapis.com/youtube/v3/search", {
      part: 'snippet, id',
      q: q,
      pageToken: token,
      type: 'video',
      key: gapikey
    },
    function ( data ) {

      var nextPageToken = data.nextPageToken;
      var prevPageToken = data.prevPageToken;

      // console.log( data );

      $.each( data.items, function ( i, item ) {

        var output = getOutput( item );

        $( '#results' )
          .append( output );
      } );

      var buttons = getButtons( prevPageToken, nextPageToken );

      $( '#buttons' )
        .append( buttons );
    } );
}

function getOutput( item ) {
  var videoID = item.id.videoId;
  var title = item.snippet.title;
  var description = item.snippet.description;
  var thumb = item.snippet.thumbnails.high.url;
  var channelTitle = item.snippet.channelTitle;
  var videoDate = item.snippet.publishedAt;
  numeroId += 1;
  item.numeroId = numeroId;

  var output = '<li>' +
    '<div class="list-left">' +
    '<img src="' + thumb + '">' +
    '</div>' +
    '<div class="list-right">' +
    '<h3><a data-fancybox-type="iframe" class="fancyboxIframe" href="https://youtube.com/embed/' + videoID + '?rel=0">' + title + '</a></h3>' +
    '<small>By <span class="cTitle">' + channelTitle + '</span> on ' + videoDate + '</small>' +
    '<p>' + description + '<button onclick="detalhe(' + numeroId + ')">' + "Descrição" + '</button></p>' +
    '</div>' +
    '</li>' +
    '<div class="clearfix"></div>' +
    '';
  console.log( numeroId );
  //'

  return output;
}



function getButtons( prevPageToken, nextPageToken ) {
  if ( !prevPageToken ) {
    var btnoutput = '<div class="button-container">' +
      '<button id="next-button" class="paging-button" data-token="' + nextPageToken + '" data-query="' + q + '"' +
      'onclick = "nextPage();">Next Page</button>' +
      '</div>';
  }
  else {
    var btnoutput = '<div class="button-container">' +
      '<button id="prev-button" class="paging-button" data-token="' + prevPageToken + '" data-query="' + q + '"' +
      'onclick = "prevPage();">Prev Page</button>' +
      '<button id="next-button" class="paging-button" data-token="' + nextPageToken + '" data-query="' + q + '"' +
      'onclick = "nextPage();">Next Page</button>' +
      '</div>';
  }

  return btnoutput;
}
