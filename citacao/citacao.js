
 var myArray = [
    {
     "cabeca": "Latin Proverb:",
     "corpo": "Mors omni aetate communis est...",
     "complemento": "'Death spares no one.'"
    },
    {
     "cabeca": "Latin Proverb:",
     "corpo": "Omnia cinis aequat...",
     "complemento": "'Death all equals.'"
    },
    {
     "cabeca": "",
     "corpo": "Jesse: People always talk about how great technology is, how it saves all this time. But what good is saved time if nobody uses it? It just turns into more busy work.",
     "complemento": " movie:Before Sunrise (1995)"
    },
    {
     "cabeca": "",
     "corpo": "Celine:But isn’t everything we do in life a way to be loved a little more?",
     "complemento": " movie:Before Sunrise (1995)"
    },
    {
     "cabeca": "Latin Proverb:",
     "corpo": "I remember when your head caught flame It kissed your scalp and caressed your brain",
     "complemento": " -by:Lorde"
    },
    {
     "cabeca": "Latin Proverb:",
     "corpo": "Cada obra pertence a seu tempo",
     "complemento": "-Machado de assis: Helena"
    }
 ];


$( document )
    .ready( function () {
        $( "#start-button" )
            .on( "click", function () {
                var rand = myArray[ Math.floor( Math.random() * myArray.length ) ];
                var conteudo = "<h1>" + rand.cabeca + "<h1><br><h3>" + rand.corpo + "</h3><i>" + rand.complemento + "</i>";
                $( "#text-block" )
                    .html( conteudo );
                console.log( rand );
                //'
            } );
        $( "#twitter-button" )
            .on( "click", function () {
                var quote = $( "#text-block" )
                    .text();
                var link = 'https://twitter.com/home/?status=' + quote + ' via @carcara';
                window.open( link, "_blank", "" );

            } );
    } );



































