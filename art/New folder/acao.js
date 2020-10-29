function bubble( x, y ) {
    this.x = x;
    this.y = y;
    //
    // this.changeColor = function () {
    // this.col = color( random( 255 ), random( 255 ), random( 255 ) )
    // }
    // this.intersects = function ( other ) {
    // var d = dist( this.x, this.y, other.x, other.y );
    // if ( d < this.r + other.r ) {
    // return true;
    // }
    // else {
    // return false;
    // }
    // }
    //
    this.display = function () {

        image( img, this.x, this.y );
    }
    this.update = function () {
        this.x = this.x + random( -1, 1 );
        this.y = this.y + random( -1, 1 );
    }
}
