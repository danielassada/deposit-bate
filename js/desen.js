 $(document).ready(function(){
  $(".popuptext").hide();
      var id0 = $("<p>trakt<br>nota:9<br>usado pelo kodi para criar perfil PAGO.</p>");
      var id1_1 = $("<p>similar web<br>Sem popup<br>conteúdo:analisa webpage e acha paginas similares,funciona com app.</p>");
      var id1_2 = $("<p>wook tank<br>Sem popup<br>analisa webpage com detalhes.</p>");
      var id1_3 = $("<p>seo work<br>conteúdo:analisa webpage com detalhes.</p>");
      var id1_4 = $("<p>fc2<br>conteúdo:Variedade de tutorias e conteudos de web desenvolvimento.</p>");
      var id2_1 = $("<p>w3 schools<br>conteúdo:biclioteca de tags, tutorias de html,css,js e jquery.A pag é desenvolvida pelo propria jquery e segui a mesma filosofia.</p>");
      var id2_2 = $("<p>bootstrap<br>conteúdo:Ferramenta que desenvolve de forma automatica uma pag.Criado por uma dupla de desenvolvedores do twitter.</p>");
      var id2_3 = $("<p>hex convert to rgb<br>conteúdo:ferramenta para converte cores hexdecimais em RGB.</p>");
      var id2_4 = $("<p>decodifyer<br>conteúdo:tradutor de codigos para UNICODE.</p>");
      
  //var id0
  $("#trakt").mouseenter(function(){
    $(".popuptext").append(id0);
    $(".popuptext").show(1000);
    });
  $("#trakt").mouseleave(function() {
    $(id0).remove();
    $(".popuptext").hide();
    });
  //var id1_1
  $("#similarweb").mouseenter(function(){
    $(".popuptext").append(id1_1);
    $(".popuptext").show(1000);
    });
  $("#similarweb").mouseleave(function() {
    $(id1_1).remove();
    $(".popuptext").hide();
    });
  //var id1_2
  $("#wook").mouseenter(function(){
    $(".popuptext").append(id1_2);
    $(".popuptext").show(1000);
    });
  $("#wook").mouseleave(function() {
    $(id1_2).remove();
    $(".popuptext").hide();
    });
  //var id1_3
  $("#seowork").mouseenter(function(){
    $(".popuptext").append(id1_3);
    $(".popuptext").show(1000);
    });
  $("#seowork").mouseleave(function() {
    $(id1_3).remove();
    $(".popuptext").hide();
    });
  //var id1_4
  $("#fc2").mouseenter(function(){
    $(".popuptext").append(id1_4);
    $(".popuptext").show(1000);
    });
  $("#fc2").mouseleave(function() {
    $(id1_4).remove();
    $(".popuptext").hide();
    });
  //var id2_1
  $("#w3s").mouseenter(function(){
    $(".popuptext").append(id2_1);
    $(".popuptext").show(500);
    });
  $("#w3s").mouseleave(function() {
    $(id2_1).remove();
    $(".popuptext").hide();
    });
  //var id2_2
  $("#bootst").mouseenter(function(){
    $(".popuptext").append(id2_2);
    $(".popuptext").show(500);
    });
  $("#bootst").mouseleave(function() {
    $(id2_2).remove();
    $(".popuptext").hide();
    });
  //var id2_3
  $("#hexto").mouseenter(function(){
    $(".popuptext").append(id2_3);
    $(".popuptext").show(500);
    });
  $("#hexto").mouseleave(function() {
    $(id2_3).remove();
    $(".popuptext").hide();
    });
  //var id2_4
  $("#decode").mouseenter(function(){
    $(".popuptext").append(id2_4);
    $(".popuptext").show(500);
    });
  $("#decode").mouseleave(function() {
    $(id2_4).remove();
    $(".popuptext").hide();
    });
  

  
}); 