function numerico() {
  var x = document.getElementById("hexdecimal");
  var content = [];
  var text = "";
  var i;
  for (i = 0; i < x.length; i++) {
    text += x.elements[i].value;
  }
  var y = document.getElementById("descricao");
  var content = [];
  var text2 = "";
  var j;
  for (j = 0; j < y.length; j++) {
    text2 += y.elements[j].value;
  }




  // range 32- 97 - 122
  //
  //     1024   9409 14884
  //+21 22024        35884
  // 2.5 2.5
  // range2 25000 - 35000
  // range3 19968 40864

  for (var ii = 0; ii < text2.length; ii++) {
    var char2 = text2.charCodeAt(ii);
    var jj = ii;
    while (jj > text.length - 1) {
      jj = jj - (text.length);
    }
    var char1 = text.charCodeAt(jj);
    var crip = (char1 * char2) + 21000;

    // var node = document.createTextNode( char2 + " :" + String.fromCharCode( text2.charCodeAt( ii ) ) + "    " + String.fromCharCode( char1 ) + '///////' );
    var node = document.createTextNode(String.fromCharCode(crip));
    console.log(jj, text.length, char1);
    document.getElementById("resultado")
      .appendChild(node);
  }


}

function numerico2() {
  var x = document.getElementById("hexdecimal");
  var content = [];
  var text = "";
  var i;
  for (i = 0; i < x.length; i++) {
    text += x.elements[i].value;
  }
  var y = document.getElementById("descricao");
  var content = [];
  var text2 = "";
  var j;
  for (j = 0; j < y.length; j++) {
    text2 += y.elements[j].value;
  }


  // range 32- 97 - 122
  //
  //     1024   9409 14884
  //+21 22024        35884
  // 2.5 2.5
  // range2 25000 - 35000
  // range3 19968 40864

  for (var ii = 0; ii < text2.length; ii++) {
    var char2 = text2.charCodeAt(ii);
    var jj = ii;
    var chaA = 0;

    while (jj > text.length - 1) {
      jj = jj - (text.length);
    }
    var char1 = text.charCodeAt(jj);
    if (jj < 1) {
      var charA = text.charCodeAt(jj + 1);
    } else {
      var charA = text.charCodeAt(jj - 1);
    }
    var crip = (char1 * char2) + 21000 + charA;

    // var node = document.createTextNode( char2 + " :" + String.fromCharCode( text2.charCodeAt( ii ) ) + "    " + String.fromCharCode( char1 ) + '///////' );
    var node = document.createTextNode(String.fromCharCode(crip));
    console.log(crip, charA);
    document.getElementById("resultado")
      .appendChild(node);
  }


}

function make() {
  var x = document.getElementById("hexdecimal");
  var content = [];
  var text = "";
  var i;
  for (i = 0; i < x.length; i++) {
    text += x.elements[i].value;
  }
  var y = document.getElementById("descricao");
  var content = [];
  var text2 = "";
  var j;
  for (j = 0; j < y.length; j++) {
    text2 += y.elements[j].value;
  }

  for (var ii = 0; ii < text2.length; ii++) {
    var char2 = text2.charCodeAt(ii);
    var jj = ii;
    while (jj > text.length - 1) {
      jj = jj - (text.length);
    }
    var char1 = text.charCodeAt(jj);
    var crip = (char2 - 21000) / char1;

    // var node = document.createTextNode( char2 + " :" + String.fromCharCode( text2.charCodeAt( ii ) ) + "    " + String.fromCharCode( char1 ) + '///////' );
    var node = document.createTextNode(String.fromCharCode(crip));
    console.log(jj, text.length, char1);
    document.getElementById("resultado")
      .appendChild(node);
  }

}

function make2() {
  var x = document.getElementById("hexdecimal");
  var content = [];
  var text = "";
  var i;
  for (i = 0; i < x.length; i++) {
    text += x.elements[i].value;
  }
  var y = document.getElementById("descricao");
  var content = [];
  var text2 = "";
  var j;
  for (j = 0; j < y.length; j++) {
    text2 += y.elements[j].value;
  }
  var charA = 0;
  for (var ii = 0; ii < text2.length; ii++) {
    var char2 = text2.charCodeAt(ii);
    console.log(char2);
    //'
    var jj = ii;
    var chaA = 0;

    while (jj > text.length - 1) {
      jj = jj - (text.length);
    }
    if (jj < 1) {
      var charA = text.charCodeAt(jj + 1);
    } else {
      var charA = text.charCodeAt(jj - 1);
    }
    var char1 = text.charCodeAt(jj);
    console.log(char1);
    //'
    var crip = (char2 - 21000 - charA) / char1;
    console.log(crip);
    //'
    var crip2 = crip - charA;
    console.log(crip2);
    //   var crip = ( char1 * char2 ) + 21000 + charA;
    //
    // 61*62=3782
    // 2882
    //
    // 2882-21000=3782
    //
    // 33959
    // 33732

    // var node = document.createTextNode( char2 + " :" + String.fromCharCode( text2.charCodeAt( ii ) ) + "    " + String.fromCharCode( char1 ) + '///////' );
    var node = document.createTextNode(String.fromCharCode(crip));
    //    console.log( jj, text.length, char1 );

    document.getElementById("resultado")
      .appendChild(node);
  }

}


function random(max) {
  i = 0;
  while (i < max) {
    var x = Math.round(Math.random() * 30) + 90;
    // var alphade = String.fromCharCode( x );
    // return alphade;



    var node = document.createTextNode(String.fromCharCode(x));
    document.getElementById("resultado")
      .appendChild(node);


    i++
  }
}


function fatorial(n) {
  //var para carregar o resultado
  var result = 0;
  // variavel temporaria para multiplicar
  var temp = 1;
  var i = 1;
  while (n >= i) {
    var temp = n - 1;

    var result = result * i;
    i += 1;

  }
  alert(result);
}