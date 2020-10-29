<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  <link rel="stylesheet" type="text/css" href="css/estilo.css" />
<script>
function voltar(){
  window.open("index.php", "_self", "");
}   function a4(){
  window.open("a4.html", "_blank", "");
}
    </script>
  </head>
  <body>


    <?php
        include 'nav.php';
    ?>





 <div id="dois" onclick="voltar()" class="btn"
  ><h2>voltar
</h2>
 </div>
 <div id="tres" onclick="a4()" class="btn"
  ><h2>folha sulfite
</h2>
 </div>




<table align="left" border="0" cellpadding="0" cellspacing="0" topmargin="0" >
<tr valign="top" id="columns">

<td width="385">
<table class="column" cellspacing="0" cellpadding="0">
<!-- TODO:  DAF Connect? -->


<tr class="item">
  <td class="itemcontent">
    <div class="margintop"><b>pesquisa por primeiro nome</b></div>
<form  action="searchlink.php" method="POST">
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
