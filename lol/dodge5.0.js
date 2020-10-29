// Black list
// LucasM9,KLx11
function myFunction() {
    var a = document.getElementById("log").checked;
    var b = document.getElementById("teemo").checked;
    var c = document.getElementById("lolkong").checked;
    var pagina = "";
    var button_string = []; 
   
// Criar um div para cada partida


        div = document.createElement( 'div' ); //row
        div.setAttribute( 'class', 'row' );
        document.getElementById( "botao" ).appendChild( div );




    if(a){     pagina ="https://www.leagueofgraphs.com/pt/summoner/br/";}
    else if(b){pagina ="https://teemo.gg/player/resume/br/";}
    else if(c){
        var x = document.getElementById("lol");
        var content = [];
        var text = "";
        var i;
        for (i = 0; i < x.length; i++) {
            text += x.elements[i].value;
        }
        var regex = /( entrou no saguão|\n| entrou na sala|\u002e|がロビーに参加しました| joined the lobby)/g;
        var texto = text.split(regex);
        var r = texto[2].search(regex);
        for (var l = 0; l < texto.length; l++) {
            if (texto[l].search(regex) < 0 && texto[l] !== "") {
                content.push(texto[l]);
            }
        }

        for (j = 0; j < content.length; j++) {
            var linha = '<button class="btn" data-clipboard-text="' + content[j] + '">' + content[j] + '</button>';
            button_string.push(linha);
            console.log(button_string.toString());
            document.getElementById("botao2").innerHTML = button_string.toString();
        }
        var clipboard = new Clipboard('.btn');
        clipboard.on('success', function (e) {
            console.info('Action:', e.action);
            console.info('Text:', e.text);
            console.info('Trigger:', e.trigger);

            e.clearSelection();
            window.open(" http://www.lolking.net/summoner/br/");
        });

        clipboard.on('error', function (e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
        });
        // document.getElementsByTagName("button").onclick= 



        // console.log(trigger_pag);    
        return;

    }
    else{      pagina ="https://www.leagueofgraphs.com/pt/summoner/br/";}    

    var x = document.getElementById( "lol" );
    var content = [];
    var text = "";
    var i;
    for ( i = 0; i < x.length; i++ ) {
        text += x.elements[ i ].value;
    }
    var regex = /( entrou no saguão|\n| entrou na sala|\u002e|がロビーに参加しました| joined the lobby)/g;
    var texto = text.split( regex );
    var r = texto[ 2 ].search( regex );
    for ( var l = 0; l < texto.length; l++ ) {
        if ( texto[ l ].search( regex ) < 0 && texto[ l ] !== "" ) {
            content.push( texto[ l ] );
        }
    }

    for ( j = 0; j < content.length; j++ ) {
        abc = document.createElement( 'a' ); //player1
        abc.innerHTML = content[ j ];
        abc.setAttribute( 'title', 'Google' );
        abc.setAttribute( 'href', ( pagina + content[ j ] ) );
        abc.setAttribute( 'target', '_blank' );
        div.appendChild( abc );

    }

// check box e uma area para escrever
        espaco = document.createElement( 'input' ); //row
        espaco.setAttribute( 'type', 'radius' );
        espaco.setAttribute( 'class', 'px25' );
        div.appendChild( espaco );

        check = document.createElement( 'input' ); //row
        check.setAttribute( 'type', 'checkbox' );
        div.appendChild( check );

        espaco2 = document.createElement( 'input' ); //row
        espaco2.setAttribute( 'type', 'radius' );
        espaco2.setAttribute( 'class', 'px25' );
        div.appendChild( espaco2 );

        check2 = document.createElement( 'input' ); //row
        check2.setAttribute( 'type', 'checkbox' );
        div.appendChild( check2 );





}
document.onkeydown = function () {
    if ( window.event.keyCode == '13' ) {
        myFunction();
    }
}
$(document).ready(function(){
        $("#clear-button").click(function(){
            $("form")[2].reset();
           document.getElementById( "botao" ).innerHTML = "";

  });
  });

        // function lolking(){
        //     window.open(" http://www.lolking.net/summoner/br/");
        // }




function build(){
    var x = document.getElementById( "google" );
        var content = [];
        var text = "";
        var i;
        for ( i = 0; i < x.length; i++ ) {
            text += x.elements[ i ].value;
        }
    
    window.open("http://google.com/search?q="+ text +" build");
}
function personagem(){
    var x = document.getElementById( "personagem" );
        var content = [];
        var text = "";
        var i;
        for ( i = 0; i < x.length; i++ ) {
            text += x.elements[ i ].value;
        }
    
    window.open("http://google.com/search?q="+ text + " site:https://www.leagueofgraphs.com");
}

function letalidade(){
    var letalidade = 60;
    var lvl = 12;
    var penetracao;

    penetracao = ((0.6*letalidade*lvl)/18)+letalidade*0.4;


    return penetracao;

}
