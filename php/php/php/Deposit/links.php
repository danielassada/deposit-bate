<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="css/estilo.css" type="text/css">
    <script>
function pesquisa(){
  window.open("pesquisasLink.php", "_self", "");
}
function link(){
  window.open("intro.php", "_self", "");
}
    </script>
  </head>
  <body>

    <?php
        include 'nav.php';
    ?>





 <div id="dois" onclick="pesquisa()" class="btn"
  ><h2>Pesquisa classes
</h2>
 </div>
 <div id="tres" onclick="link()" class="btn"
  ><h2> Artigos
</h2>
 </div></a>





<table align="left" border="0" cellpadding="0" cellspacing="0" topmargin="0" >
<tr valign="top" id="columns">

<td width="385">
<table class="column" cellspacing="0" cellpadding="0">
<!-- TODO:  DAF Connect? -->


<tr class="item">
  <td class="itemcontent">

    <form method="post" action="postLink.php">
    <table width="600" border="0" cellspacing="1" cellpadding="2">
    <tr>
    <td width="250">titulo</td>
    <td>
    <input name="titulo" type="text" id="titulo">
    </td>
    </tr>
    <tr>
    <td width="250">Tipo</td>
    <td>
    <textarea name="tipo" class="form-control" rows="2" cols="91" id="tipo"></textarea>
    </td>
    </tr>
    <tr>
    <td width="250">descricao</td>
    <td>
    <textarea name="descricao" class="form-control" rows="10" cols="91" type="text" id="descricao">
      </textarea>
    </td>
    </tr>
    <tr>
    <td width="550">observacao</td>
    <td>
    <input name="observacao" type="text" id="observacao">
    </td>
    </tr>
    <tr>
    <td width="550">Link</td>
    <td>
    <input name="link" type="text" id="link">
    </td>
    </tr>
    <tr>
    <td width="250"></td>
    <td>
    <input name="add" type="submit" id="add" value="Add">
    </td>
    </tr>
    </table>
    </form>
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
