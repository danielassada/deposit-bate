<?php
$servername = "localhost:3306";
$username = "root";
$password = "roses25violet";
$dbname = "Deposit";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "INSERT INTO artigos (title, body, born, note)
    VALUES ('Stairway To Heaven', 'There s a lady whos sure all that glitters
    is gold
    And shes buying a stairway to heaven
    And when she gets there she knows if the stores are all close
    With a word she can get what she came for

    Oh, and shes buying a stairway to heaven

    Theres a sign on the wall but she wants to be sure
    Cause you know sometimes words have two meanings
    In a tree by the brook theres a songbird who sings
    Sometimes all of our thoughts are misgiving

    Oh, it makes me wonder
    Oh, it makes me wonder

    Theres a feeling I get when I look to the west
    And my spirit is crying for leaving
    In my thoughts I have seen rings of smoke through the trees
    And the voices of those who stand looking

    Oh, it makes me wonder
    Oh, and it makes me wonder

    And its whispered that soon, if we all called the tune
    Then the piper will lead us to reason
    And a new day will dawn for those who stand long
    And the forest will echo with laughter

    Woe, oh
    If theres a bustle in your hedgerow
    Dont be alarmed now
    Its just a spring clean for the May Queen

    Yes, there are two paths you can go by
    But in the long run
    Theres still time to change the road youre on

    And it makes me wonder

    Oh

    Your head is humming and it wont go, in case you dont know
    The pipers calling you to join him
    Dear lady, can you hear the wind blow? And did you know?
    Your stairway lies on the whispering wind

    And as we wind on down the road
    Our shadows taller than our souls
    There walks a lady we all know
    Who shines white light and wants to show

    How everything still turns to gold
    And if you listen very hard
    The tune will come to you at last
    When all are one and one is all, yeah

    To be a rock and not to roll

    Oh

    And shes buying a stairway to heaven
    Escada Para o Paraíso

    Há uma dama que acredita que tudo o que brilha é ouro
    E ela está comprando uma escada para o paraíso
    E quando chega lá ela percebe que, se as lojas são próximas
    Com uma palavra ela consegue o que veio buscar

    Oh, e ela está comprando uma escada para o paraíso

    Há um cartaz na parede mas ela quer ter certeza
    Porque você sabe que às vezes as palavras têm duplo sentido
    Em uma árvore à beira do riacho há um pássaro que canta
    Às vezes todos os nossos pensamentos são inquietantes

    Oh, isto me faz pensar
    Oh, isto me faz pensar

    Há algo que sinto quando olho para o ocidente
    E meu espírito está chorando para partir
    Em meus pensamentos tenho visto anéis de fumaça através das árvores
    E as vozes daqueles que ficam parados olhando

    Oh, isto me faz pensar
    Oh, isto realmente me faz pensar

    E um sussurro avisa que em breve, se todos entoarmos a canção
    Então o flautista nos levará à razão
    E um novo dia irá nascer para aqueles que suportarem
    E a floresta irá ecoar gargalhadas

    Woe, oh
    Se há um alvoroço em sua horta
    Não fique assustada
    É apenas uma limpeza de primavera para a Rainha de Maio

    Sim, há dois caminhos que você pode seguir
    Mas na longa estrada
    Há sempre tempo de mudar o caminho que você segue

    E isso me faz pensar

    Oh

    Sua cabeça lateja e não vai parar, caso você não saiba
    O flautista te chama para se juntar a ele
    Querida dama, pode ouvir o vento soprar? E você sabia?
    Sua escada repousa no vento sussurrante

    E enquanto corremos soltos pela estrada
    Nossas sombras mais altas que nossas almas
    Lá caminha uma dama que todos conhecemos
    Que brilha luz branca e quer mostrar

    Como tudo ainda vira ouro
    E se você ouvir com atenção
    A canção irá chegar a você finalmente
    Quando todos são um e um é o todo

    Ser uma rocha e não rolar (trocadilho com )

    Oh

    E ela está comprando uma escada para o paraíso', '1971', 'algumas palavras
    foram interpretadas pelo editor de texto como linguagem php')";
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
