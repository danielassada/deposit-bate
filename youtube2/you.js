document.onkeydown = function () {
  if ( window.event.keyCode == '27' ) {
    $( "#hide" )
      .empty()
      .hide();
    $( ".close" )
      .hide();
  }
}

const divproto = {
  init: function(){
    this.nome = nome

  },
  resize: function() {
    this.elemento = document.getElementById(this.nome);
    this.resize =  this.elemento.getElementsByClassName("resize");
    $( this.resize ).click( function () {
      var pai = this.parentNode;
        console.log(pai);
        $( pai )
          .toggleClass( "fullScreen" );
        $( pai )
          .toggleClass( "padrao" );
    });
  },
  inf: function() {
    this.elemento = document.getElementById(this.nome);
    this.inf = this.elemento.getElementsByClassName("inf");
    this.desc = this.elemento.getElementsByClassName("descricao");
    $( this.inf )
      .click( function () {
      var primogenito = this.firstChild;
        console.log(primogenito)
        $( primogenito )
          .toggleClass( "hide" );
    });
  }    
}

    



$( document )
  .ready( function () {

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
// $( "#resize_italiano" )
//       .click( function () {
//         $( "#italiano" )
//           .toggleClass( "fullScreen" );
//         $( "#italiano" )
//           .toggleClass( "padrao" );
//       } );

// const player = Object.create(divproto)
// player.nome = "player"
// player.resize()

const letraa = Object.create(divproto)
letraa.nome = "letraa"
letraa.resize()
letraa.inf()

const flor = Object.create(divproto)
flor.nome = "flor"
flor.resize()
flor.inf()

const eletronica = Object.create(divproto)
eletronica.nome = "eletronica"
eletronica.resize()
eletronica.inf()

const morna = Object.create(divproto)
morna.nome = "morna"
morna.resize()
morna.inf()

const italiano = Object.create(divproto)
italiano.nome = "italiano"
italiano.resize()
italiano.inf()

const mpb = Object.create(divproto)
mpb.nome = "mpb"
mpb.resize()
mpb.inf()

const danca = Object.create(divproto)
danca.nome = "danca"
danca.resize()
danca.inf()

const playhard = Object.create(divproto)
playhard.nome = "playhard"
playhard.resize()
playhard.inf()

const criolo = Object.create(divproto)
criolo.nome = "criolo"
criolo.resize()
criolo.inf()

const lorde = Object.create(divproto)
lorde.nome = "lorde"
lorde.resize()
lorde.inf()



    //botão de limpar descrição #informação
    // $( ".close" )
    //   .click( function () {
    //     $( "#hide" )
    //       .empty()
    //       .hide();
    //     $( ".close" )
    //       .hide();
    //     if ( $( "#inf_lorde" )
    //       .hasClass( "descShow" ) ) {
    //       $( "#inf_lorde" )
    //         .toggleClass( "descShow" );
    //       $( "#inf_lorde" )
    //         .toggleClass( "desc" );
    //     }

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
