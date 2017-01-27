 $(document).ready(function(){
  $(".popuptext").hide();
      var id0 = $("<p>trakt<br>nota:9<br>usado pelo kodi para criar perfil PAGO.</p>");
      var id1 = $("<p>adoro cinema<br>nota:9<br>Sem popup<br>conteúdo:informações sobre filmes e series com alguns filmes online.</p>");
      var id2 = $("<p>seris online hd<br>nota:7<br>Com popup<br>nota:7<br>conteúdo:series online mainstream.</p>");
      var id3 = $("<p>mega filmes online<br>nota:5<br>conteúdo:filmes online ,grande coleção.</p>");
      var id4 = $("<p>filmes series online<br>nota:5<br>conteúdo:filmes e seris online,grande coleção.</p>");
      var id5 = $("<p>netcine<br>nota:8<br>conteúdo:series online,pequena coleção.</p>");
      var id6 = $("<p>filmes onlinex<br>nota:9<br>conteúdo:filmes online,grande coleção.</p>");
      var id7 = $("<p>super animes<br>nota:8<br>pouco popup<br>conteúdo:animes e doramas online ,media coleção.</p>");
      var id8 = $("<p>animes telecine<br>nota:8<br>sem popup<br>conteúdo:animes online,media coleção.</p>");
      var id9 = $("<p>saiko animes<br>nota:5<br>muito popup<br>conteúdo:animes online.</p>");
      var id10 = $("<p>noitos fera<br>nota:9<br>Sem popup<br>conteúdo:desenhos ocidentais online.</p>");
      var id11 = $("<p>expressp filmes<br>OFFline.");
      var id12 = $("<p>torrents gratis<br>nota:7<br>Com popup<br>conteúdo:torrents filmes.</p>");
      var id13 = $("<p>baixar-filme<br>nota:5<br>muito popup<br>conteúdo:filmes download e online.</p>");
      var id14 = $("<p>comando filmes<br>nota:6<br>muito popup<br>conteúdo:filmes</p>");
      var id15 = $("<p>filmes epicos<br>nota:8<br>pouco popup<br>conteúdo:filmes classicos.</p>");
      var id16 = $("<p>filmes cult<br>nota:9.5<br>pouco popup<br>conteúdo:filmes indie, classicos e alternativos.</p>");
      
      
  //var id0
  $("#trakt").mouseenter(function(){
    $(".popuptext").append(id0);
    $(".popuptext").show(1000);
    });
  $("#trakt").mouseleave(function() {
    $(id0).remove();
    $(".popuptext").hide();
    });
  //var id1
  $("#adoroc").mouseenter(function(){
    $(".popuptext").append(id1);
    $(".popuptext").show(1000);
    });
  $("#adoroc").mouseleave(function() {
    $(id1).remove();
    $(".popuptext").hide();
    });
  //var id2
  $("#series").mouseenter(function(){
    $(".popuptext").append(id2);
    $(".popuptext").show(1000);
    });
  $("#series").mouseleave(function() {
    $(id2).remove();
    $(".popuptext").hide();
    });
  //var id3
  $("#mega").mouseenter(function(){
    $(".popuptext").append(id3);
    $(".popuptext").show(1000);
    });
  $("#mega").mouseleave(function() {
    $(id3).remove();
    $(".popuptext").hide();
    });
  //var id4
  $("#film").mouseenter(function(){
    $(".popuptext").append(id4);
    $(".popuptext").show(1000);
    });
  $("#film").mouseleave(function() {
    $(id4).remove();
    $(".popuptext").hide();
    });
  //var id5
  $("#netcine").mouseenter(function(){
    $(".popuptext").append(id5);
    $(".popuptext").show(500);
    });
  $("#netcine").mouseleave(function() {
    $(id5).remove();
    $(".popuptext").hide();
    });
  //var id6
  $("#filmo").mouseenter(function(){
    $(".popuptext").append(id6);
    $(".popuptext").show(500);
    });
  $("#filmo").mouseleave(function() {
    $(id6).remove();
    $(".popuptext").hide();
    });
  //var id7
  $("#supera").mouseenter(function(){
    $(".popuptext").append(id7);
    $(".popuptext").show(500);
    });
  $("#supera").mouseleave(function() {
    $(id7).remove();
    $(".popuptext").hide();
    });
  //var id8
  $("#atele").mouseenter(function(){
    $(".popuptext").append(id8);
    $(".popuptext").show(500);
    });
  $("#atele").mouseleave(function() {
    $(id8).remove();
    $(".popuptext").hide();
    });
  //var id9
  $("#saiko").mouseenter(function(){
    $(".popuptext").append(id9);
    $(".popuptext").show(500);
    });
  $("#saiko").mouseleave(function() {
    $(id9).remove();
    $(".popuptext").hide();
    });
  //var id10
  $("#noitos").mouseenter(function(){
    $(".popuptext").append(id10);
    $(".popuptext").show(500);
    });
  $("#noitos").mouseleave(function() {
    $(id10).remove();
    $(".popuptext").hide();
    });
  //var id11
  $("#expres").mouseenter(function(){
    $(".popuptext").append(id11);
    $(".popuptext").show(500);
    });
  $("#expres").mouseleave(function() {
    $(id11).remove();
    $(".popuptext").hide();
    });
  //var id12
  $("#torrent").mouseenter(function(){
    $(".popuptext").append(id12);
    $(".popuptext").show(500);
    });
  $("#torrent").mouseleave(function() {
    $(id12).remove();
    $(".popuptext").hide();
    });
  //var id13
  $("#baixar").mouseenter(function(){
    $(".popuptext").append(id13);
    $(".popuptext").show(500);
    });
  $("#baixar").mouseleave(function() {
    $(id13).remove();
    $(".popuptext").hide();
    });
  //var id14
  $("#comando").mouseenter(function(){
    $(".popuptext").append(id14);
    $(".popuptext").show(500);
    });
  $("#comando").mouseleave(function() {
    $(id14).remove();
    $(".popuptext").hide();
    });
  //var id15
  $("#epicos").mouseenter(function(){
    $(".popuptext").append(id15);
    $(".popuptext").show(500);
    });
  $("#epicos").mouseleave(function() {
    $(id15).remove();
    $(".popuptext").hide();
    });
  //var id16
  $("#cult").mouseenter(function(){
    $(".popuptext").append(id16);
    $(".popuptext").show(500);
    });
  $("#cult").mouseleave(function() {
    $(id16).remove();
    $(".popuptext").hide();
    });
  
}); 