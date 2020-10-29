document.onkeydown = function () {
    if ( window.event.keyCode == '38' ) {
        moveup();
    }
    else if ( window.event.keyCode == '39' ) {
        moveright();
    }
    else if ( window.event.keyCode == '40' ) {
        movedown();
    }
    else if ( window.event.keyCode == '37' ) {
        moveleft();
    }
}

document.onkeyup = function () {
    if ( window.event.keyCode == '13' ) {

    }
    else {
        clearmove();
    }
}

function voltar() {
    window.open( "sapphire.html", "_self", "" );
}
