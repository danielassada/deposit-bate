<?php
$conexao  = @mysql_connect("localhost","root","") or die ("Erro");
mysql_select_db('pessoas');
$word = $_POST['busca_post']
$getresults = musql_query("SELECT * FROM pesquisa WHERE FirstName LIKE'%word%")
if(@mysql_num_rows($getResults) <= 0){
  echo '<h2>nada encontrado</h2>'
}else{
  echo '<h2>resuldados('.@mysql_num_rows($getResults).')</h2>';
while ($res = mysql_fetch_array($getResults)) {
echo $res['FirstName'].'<br>';
}
}
?>
