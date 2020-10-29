<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="estilo.css" type="text/css">
    <script>
function pesquisa(){
  window.open("pesquisas.php", "_self", "");
}
    </script>
  </head>
  <body>

    <div id="nav">
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

      <ul class="nav navbar-nav">
        <li class="active"><a href="https://10.0.0.10">home <span class="sr-only">(abyss)</span></a></li>
        <li><a href="index.html">home</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Desenvolvedor <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="https://www.similarweb.com/">similares</a></li>
            <li><a href="https://www.woorank.com/pt">analise de webpag</a></li>
            <li><a href="http://www.seoworkers.com/sitemap.html">mapa de pagina</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="http://www.w3schools.com/">intruções de web desen</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="http://getbootstrap.com/">bootstrap</a></li>
          </ul>
        </li>
      </ul>

      <ul class="nav navbar-nav navbar-right">
        <li><a href="pg1.html">blog</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">musicas <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="youtube.html">youtube</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="playlist/phard.html">play list hard</a></li>

          </ul>
        </li>

      </ul>

    </div><!-- /.navbar-collapse -->

  </div><!-- /.container-fluid -->






 <div id="dois" onclick="pesquisa()" class="btn"
  ><h2>Pesquisa
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
    <?php
    echo "<h4>Alpha</h4>";
    include 'post.php';
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
