 $(document).ready(function(){
  $(".popuptext").hide();
      var id0 = $("<p>ragazza<br>1-alice e il blu<br>nessun grado di separazione<br>scintille<br>tra due minuti e primavera<br>l'amore esiste</p>");
      var id1 = $("<p>Se deja llevar<br>Unici<br>La Cosa Mas Bella<br>G come Giungla<br>In the Rain<br>Estate<br>54545<br>Il ricordo che lascio<br>La mia stanza<br>Inevitabile<br>L'amore è un gioco<br>Sincerità<br>Arriverà L'Amore<br>Nessun grado di separazione<br>Through This Noise<br>fedez<br>Laura Non C'è</p>");
      var id2 = $("<p>Construção<br>Metal contra as nuvens<br>Monte Castelo<br>Giz<br>O teatro dos vampiros<br>Auto-Reverse<br>O Que Sobrou do Céu<br>Senhor Do TempoVícios e Virtudes<br>The next to last song<br>ÚLTIMO DESEJO</p>");
      var id3 = $("<p>Volevo te<br>Bate Pesadão<br>Waves<br>A Girl Like You<br>Bruises and Bitemarks<br>Like A Robot<br>The Haunting<br>Thousand Foot Krutch<br>Dangerous<br>Zombie<br>Dangerous<br>Habits<br>Alors on danse<br>AWOLNATION<br>Where is my Mind<br>Glad You Came<br>Imagine Dragons<br>Fast Car<br>Pompeii<br>Titanium<br>Wrecking Ball<br>Take Me To Church</p>");
      var id4 = $("<p>Team<br>Royals<br>Ribs<br>Buzzcut</p>")
      
  //var id0
  $("#ragazza").mouseenter(function(){
    $(".popuptext").append(id0);
    $(".popuptext").show(1000);
    });
  $("#ragazza").mouseleave(function() {
    $(id0).remove();
    $(".popuptext").hide();
    });
  //var id1
  $("#italiano").mouseenter(function(){
    $(".popuptext").append(id1);
    $(".popuptext").show(1000);
    });
  $("#italiano").mouseleave(function() {
    $(id1).remove();
    $(".popuptext").hide();
    });
  //var id2
  $("#mpb").mouseenter(function(){
    $(".popuptext").append(id2);
    $(".popuptext").show(1000);
    });
  $("#mpb").mouseleave(function() {
    $(id2).remove();
    $(".popuptext").hide();
    });
  //var id3
  $("#playhard").mouseenter(function(){
    $(".popuptext").append(id3);
    $(".popuptext").show(1000);
    });
  $("#playhard").mouseleave(function() {
    $(id3).remove();
    $(".popuptext").hide();
    });
   //var id4
  $("#lorde").mouseenter(function(){
    $(".popuptext").append(id4);
    $(".popuptext").show(1000);
    });
  $("#lorde").mouseleave(function() {
    $(id4).remove();
    $(".popuptext").hide();
    });
}); 