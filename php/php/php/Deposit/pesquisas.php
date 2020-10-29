<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="estilo.css" type="text/css">
    <script>
function voltar(){
  window.open("index.php", "_self", "");
}
    </script>
  </head>
  <body>
<div id="nav">

  <?php
      include 'nav.php';
  ?>





 <div id="dois" onclick="voltar()" class="btn"
  ><h2>voltar
</h2>
 </div>
 <div id="tres" class="btn"
  ><h2>
</h2>
 </div></a>
 <div id="quatro" class="btn"
  ><h2>
</h2>
 </div></a>




<table align="left" border="0" cellpadding="0" cellspacing="0" topmargin="0" >
<tr valign="top" id="columns">

<td width="385">
<table class="column" cellspacing="0" cellpadding="0">
<!-- TODO:  DAF Connect? -->


<tr class="item">
  <td class="itemcontent">
    <div class="margintop"><b>pesquisa palavra dentro do artigo</b></div>
<form  action="search.php" method="POST">
  <input type="text" name="nome" value="">
  <input type="submit" name="" value="submit">
</form>

    <?php
    echo "<h4>Alpha</h4>";
    ?>

  </td>
</tr>

</table>

<!-- <div id="content">
<table align="left" border="0" cellpadding="0" cellspacing="0" topmargin="0" >
<tr valign="top" id="columns">
   <a href="busca.0.1.php">busca0.1</a>
   <a href="phpinfo.php">info</a>
   <a href="busca.php">busca</a>
</tr>
</table>
</div> -->
  </body>
</html>
