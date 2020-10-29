<?php
include "lista.php";
 ?>
  <!doctype html>
   <html lang="pt-br">
    <head>
    <meta charset="utf-8">
    <title>depositOFwords</title>
    <link href="https://fonts.googleapis.com/css?family=Bitter" rel="stylesheet">
    <link rel="shortcut icon" href="img/logo.png" type="image/x-png"/>

  <link rel="stylesheet" href="dodge.css"
    type="text/css" href="img/logo.png">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>


<script src="js/main.js"></script>
<script src="js/todos.js"></script>
   </head>
<body>


<a href="catalogo.html">
 <div id="dois" class="btn"
  ><h2>catalogo
</h2>
 </div></a>
<a href="index.html">
 <div id="tres" class="btn"
  ><h2>menu
</h2>
 </div></a>
<div id="wrapper">
    <h1>pesquisa</h1>



    </div>

    <div id="form">

        <div id="text-header"> cole abaixo o lobby de entrada
            <div class="shadow"></div>
        </div>

        <div id="text-block">
        <form action="" id="lol">
            <textarea class="form-control" rows="10" cols="91" id="comment"></textarea>
            </form>
        </div>

        <div id="text-footer">
            <div id="buttons">
                <div id="start-button" onclick="myFunction()">
                    <div class="action-button">pronto</div>
                    <div id="start-button-progress" style="display: none;"></div>
                </div>
                <div id="clear-button">
                    <div class="action-button" >limpar</div>
                </div>
                <div class="clear"></div>
            </div>
        </div>

    </div>

    <div id="boto">
<p id="nome">firstname:</p>   <p id="sobrenome">lastname:</p>

</div>
<div class="lista">:></div>




    <script>
     $('#text').keypress(function(){
       var palavra = $('text').val();

       $.post('lista.php', {
           firstname:palavra
         },function(pesquisa){
           $('.lista').html(pesquisa);
         })
       })
    </script>
  </td>
    </tr>



</table>
</div>





  </footer>
</body>
</html>
