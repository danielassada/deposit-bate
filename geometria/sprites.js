var Sprite = function ( psX, psY, width, height, color ) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.heiht = height;
    this.color = color;
    this.visible = true;
    this.crashWith = function ( sapphire ) {
        var myleft = this.x;
        var myright = this.x + ( this.width );
        var mytop = this.y;
        var mybottom = this.y + ( this.height );
        var otherleft = sapphire.x;
        var otherright = sapphire.x + ( sapphire.width );
        var othertop = sapphire.y;
        var otherbottom = sapphire.y + ( sapphire.height );
        var crash = true;
        if ( ( mybottom < othertop ) || ( mytop > otherbottom ) || ( myright < otherleft ) || ( myleft > otherright ) ) {
            crash = false;
        }
        return crash;
    }
}


var blocks = function ( posX, posY, width, height, color ) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.color = color;
    this.visible = true;
}
//Retorna a metade da largura
Sprite.prototype.halfWidth = function () {
    return this.width / 2;
}
//Retorna a metade da altura
Sprite.prototype.halfHeight = function () {
    return this.height / 2;
}
//Retorna a posição do centro do objeto no eixo X
Sprite.prototype.centerX = function () {
    return this.posX + this.halfWidth();
}

function blockRect( r1, r2 ) {
    //r1 -> bloqueado
    //r2 -> parede
    //catetos; armazenam a distância entre os retângulos
    var catX = r1.centerX() - r2.centerX();
    var catY = r1.centerY() - r2.centerY();

    //soma das metades
    var sumHalfWidth = r1.halfWidth() + r2.halfWidth();
    var sumHalfHeight = r1.halfHeight() + r2.halfHeight();

    if ( Math.abs( catX ) < sumHalfWidth && Math.abs( catY ) < sumHalfHeight ) {
        //r2.visible = false;
        //setTimeout(function(){
        //	r2.visible = true;
        //},1000);
        var overlapX = sumHalfWidth - Math.abs( catX );
        var overlapY = sumHalfHeight - Math.abs( catY );

        if ( overlapX >= overlapY ) { //colisão por cima ou por baixo
            if ( catY > 0 ) { //por cima
                r1.posY += overlapY;
            }
            else {
                r1.posY -= overlapY;
            }
        }
        else { //colisão pela esquerda ou direita
            if ( catX > 0 ) { //colisão pela esquerda
                r1.posX += overlapX;
            }
            else {
                r1.posX -= overlapX;
            }
        }
    }
}

//Retorna a posição do centro do objeto no eixo Y
Sprite.prototype.centerY = function () {
    return this.posY + this.halfHeight();
}
