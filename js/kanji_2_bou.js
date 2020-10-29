$( document )
    .ready( function () {
        $( ".popuptext" )
            .hide();
        var x4e28 = $( "<p>[ぼう、たてぼう]<br><strong>bou</strong></p>" );
        var x4e2d = $( "<p>[チュウ ・ なか ・ うち ・ あた.る]<strong>naka</strong><br><br>JLPT N5 Kanji<br>Jōyō Kanji Grade 1<br><br>Centro, Meio, Dentro e medio.<br></br>Radical:丨 x4e28</p>" );
        var x4e2f = $( "<p><strong>jie</strong><br><br>radical do katakana キ</br>Radical:丨 x4e28</p>" );
        var x4e32 = $( "<p>[カン ・ ケン ・ セン ・ くし ・ つらぬく]<br><strong>kushi</strong><br><br>Jinmeiyō Kanji<br><br>Espeto.<br></br>Radical:丨 x4e28</p>" );


        //var id0
        $( "#bou" )
            .mouseenter( function () {
                $( ".popuptext" )
                    .append( x4e28 )
                $( ".popuptext" )
                    .show( 1000 );
            } );
        $( "#bou" )
            .mouseleave( function () {
                $( x4e28 )
                    .remove();
                $( ".popuptext" )
                    .hide();
            } );

        $( "#naka" )
            .mouseenter( function () {
                $( ".popuptext" )
                    .append( x4e2d );
                $( ".popuptext" )
                    .show( 500 );
            } );

        $( "#naka" )
            .mouseleave( function () {
                $( x4e2d )
                    .remove();
                $( ".popuptext" )
                    .hide();
            } );
        $( "#kushi" )
            .mouseenter( function () {
                $( ".popuptext" )
                    .append( x4e32 );
                $( ".popuptext" )
                    .show( 500 );
            } );

        $( "#kushi" )
            .mouseleave( function () {
                $( x4e32 )
                    .remove();
                $( ".popuptext" )
                    .hide();
            } );


    } );
