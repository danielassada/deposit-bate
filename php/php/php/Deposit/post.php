
<?php
if(isset($_POST['add']))
{
$dbhost = "mysql8.000webhost.com";
$dbuser = "id2091427_carcara";
$dbpass  = "%cdp@t2l9g3mX";
$dbname = "id2091427_somewhere";
$conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
if(! $conn )
{
  die('Could not connect: ' . mysql_error());
}


if(! get_magic_quotes_gpc() )
{
   $title = addslashes ($_POST['title']);
   $body = addslashes ($_POST['body']);
   $ano = addslashes ($_POST['ano']);
   $note = addslashes ($_POST['note']);
   $author = addslashes ($_POST['author']);
}
else
{
  $title = ($_POST['title']);
  $body = ($_POST['body']);
  $ano = ($_POST['ano']);
  $note = ($_POST['note']);
  $author = ($_POST['author']);
}
$sql = "INSERT INTO artigos ".
       "(title,author,body,born,note) ".
       "VALUES ".
       "('$title','$author','$body','$ano','$note')";
$retval = mysqli_query( $conn,$sql );
if(! $retval )
{
  die('Could not enter data: ');
}
echo "Entered data successfully\n";
mysqli_close($conn);
}
else
{
?>
<form method="post" action="<?php $_PHP_SELF ?>">
<table width="600" border="0" cellspacing="1" cellpadding="2">
<tr>
<td width="250">Título</td>
<td>
<input name="title" type="text" id="title">
</td>
</tr>
<tr>
<td width="250">artigo</td>
<td>
<textarea name="body" class="form-control" rows="10" cols="91" id="body"></textarea>
</td>
</tr>
<tr>
<td width="250">ano</td>
<td>
<input name="ano" type="text" id="ano">
</td>
</tr>
<tr>
<td width="250">noteervação</td>
<td>
<input name="note" type="text" id="note">
</td>
</tr>
<tr>
<td width="250">author</td>
<td>
<input name="author" type="text" id="author">
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
<?php
}
?>
