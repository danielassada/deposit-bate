$( document )
    .ready( function () {
        $( ".popuptext" )
            .hide();
        var x4e36 = $( "<p>[てん]<br><strong>ten</strong></p>" );
        var x4e38 = $( "<p>[ガン ・ まる ・ まる.める ・ まる.い]<strong>maru</strong><br><br>JLPT N2 Kanji <br>Jōyō Kanji Grade 2<br><br>Circulo<br></br>Radicais:丶x4e36 一 x4e00</p>" );
        var x4e39 = $( "<p>[タン ・ に ・ あか]<br><strong>tan</strong><br><br>JLPT N1 Kanji</br>Jōyō Kanji Junior High-school</br>vermelho<br>Radical:丶　x4e36</p>" );
        var x4e3b = $( "<p>[シュ ・ ス ・ シュウ ・ ぬし ・ おも ・ あるじ]<br><strong>omo</strong><br><br>JLPT N4 Kanji<br>Jōyō Kanji Grade 3<br><br>Principal e mestre<br></br>Radical:丶　x4e36</p>" );
        var x4e3c = $( "<p>[トン ・ どんぶり]<br><strong>donburi</strong><br><br>Tigela chinesa<br>Radical:丶　x4e36</p>" );


        //var id0
        $( "#ten" )
            .mouseenter( function () {
                $( ".popuptext" )
                    .append( x4e36 )
                $( ".popuptext" )
                    .show( 1000 );
            } );
        $( "#ten" )
            .mouseleave( function () {
                $( x4e36 )
                    .remove();
                $( ".popuptext" )
                    .hide();
            } );

        $( "#maru" )
            .mouseenter( function () {
                $( ".popuptext" )
                    .append( x4e38 );
                $( ".popuptext" )
                    .show( 500 );
            } );

        $( "#maru" )
            .mouseleave( function () {
                $( x4e38 )
                    .remove();
                $( ".popuptext" )
                    .hide();
            } );
        $( "#tan" )
            .mouseenter( function () {
                $( ".popuptext" )
                    .append( x4e39 );
                $( ".popuptext" )
                    .show( 500 );
            } );

        $( "#tan" )
            .mouseleave( function () {
                $( x4e39 )
                    .remove();
                $( ".popuptext" )
                    .hide();
            } );
        $( "#omo" )
            .mouseenter( function () {
                $( ".popuptext" )
                    .append( x4e3b );
                $( ".popuptext" )
                    .show( 500 );
            } );

        $( "#omo" )
            .mouseleave( function () {
                $( x4e3b )
                    .remove();
                $( ".popuptext" )
                    .hide();
            } );
        $( "#donburi" )
            .mouseenter( function () {
                $( ".popuptext" )
                    .append( x4e3c );
                $( ".popuptext" )
                    .show( 500 );
            } );

        $( "#donburi" )
            .mouseleave( function () {
                $( x4e3c )
                    .remove();
                $( ".popuptext" )
                    .hide();
            } );


    } );
