<?php
$pdo = new PDO('mysql:host=localhost;dbname=pessoas','root','');

@$buscar = $_POST['firstname'];
$listar = $pdo->prepare('SELECT * FROM pessoas WHERE firstname LIKE "%'.$buscar.'%"');

while ($ver = $listar ->fetch()){
$firstname = $ver ['firstname'];
echo '<div class="lista-nome">'.$firstname.'</div>';
}
?>
