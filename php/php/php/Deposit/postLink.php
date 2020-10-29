
<?php

$servername = "localhost";
$username = "id2091427_makoto";
$password = "1234567";
$dbname = "id2091427_nowhere";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    if(! get_magic_quotes_gpc() )
    {
       $titulo = addslashes ($_POST['titulo']);
       $tipo = addslashes ($_POST['tipo']);
       $descricao = addslashes ($_POST['descricao']);
       $observacao = addslashes ($_POST['observacao']);
       $link = addslashes ($_POST['link']);
    }
    else
    {
      $titulo = ($_POST['titulo']);
      $tipo = ($_POST['tipo']);
      $descricao = ($_POST['descricao']);
      $observacao = ($_POST['observacao']);
      $link = ($_POST['link']);
    }
    $sql = "INSERT INTO links (titulo,tipo,descricao,observacao,link)
    VALUES ('".$_POST['titulo']."','".$_POST['tipo']."','".$_POST['descricao']."','".$_POST['observacao']."','".$_POST['link']."')";
    // use exec() because no results are returned
    $conn->exec($sql);
    echo "New record created successfully";
    }
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;
?>
<a href="links.php">Voltar</a>
