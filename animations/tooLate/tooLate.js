$(function() {
  $(".circular").each(function(index, el){ 
    var $el = $(el);
    $el.html($el.text().replace(/(.{1})/g, '<span>$1</span>'));
    $el.find("span").each(function(index2, el2) {
      $(el2).css("transform", "rotate(" + ($el.hasClass("circular-top") ? 8 : -10) * index2 + "deg)");
    });
  });
   $("#center").mouseenter(function(){
      $(".container2").toggleClass("hide");
      $(".container").toggleClass("hide");
      console.log("var");
   });
   $("#center").mouseout(function(){
      $(".container").toggleClass("hide");
      $(".container2").toggleClass("hide");
      console.log("var2");
   });
});

