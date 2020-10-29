
<!doctype html>
<html>
<head><title>Home</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script type="text/javascript">
  $(document).ready(function(){
    $("input[name=busca]").bind('input',function(){
      var busca = $(this.val();
      var conta = $(this).val().length;

      if(conta >= 1){
        $.post('pesquisa.php',{busca_post:busca}, function(retorna){
        $("#results").text(retorna);
      });
      }else{
        $("#results").text('pesquise algo');
      }
});
$("#pesquisa").submit(function(){

});
});
</script>
</head>
<body>

 <form id="pesquisa" action="" method="post" enctype="multipart/form-data" >
 <input type="text" name="busca" size="30" >
 <input type="submit">
 <div id="results">

   <form  action="http://www.externalsite.com" target="_blank">
   <input type=text name=q value="">
   <input type=submit value="lets go">
   </form>

  </div>
 </form>
</body>
</html>
