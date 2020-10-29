$( document )
    .ready( function () {
        $( ".popuptext" )
            .hide();
        var x4e3f = $( "<p>[へつぶ]<br><strong>etsubu</strong></p>" );
        var x4e45 = $( "<p>[キュウ ・ ク ・ ひさ.しい]<strong>hisa</strong><br><br>JLPT N2 Kanji <br>Jōyō Kanji Grade 5<br><br>Antigo e velha história<br></br>Radical: 丿 x4e3f</p>" );
        var zx4e4d = $( "<p>[シ ・ の ・ これ ・ おいて ・ ゆく ・ この]<strong>yuki</strong><br><br>Jinmeiyō Kanji<br>JLPT N1 Kanji</br>Este'pronome demonstrativo'<br>Radical:丶　x4e36</p>" );
        var x4e39 = $( "<p>[コ ・ オ ・ か ・ ああ ・ かな ・ や ・ よ ・ を]<strong>ka</strong><br><br>Jinmeiyō Kanji</br>?</br>Radicais:丶　x4e36 丿 x4e3f</p>" );
        var x4e3b = $( "<p>[ボウ ・ とぼ.しい ・ とも.しい]<br><strong>tomo</strong><br><br>JLPT N1 Kanji<br>Jōyō Kanji Junior High-school<br><br>Principal e mestre<br></br>Radical:丿 x4e3f</p>" );
        var x4e3c = $( "<p>[そむ・く ・ カイ]<br><strong>kai</strong><br><br>Tigela chinesa<br>Radical:丶　x4e36</p>" );


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
