$(document).ready(function(){


        
          var myPlaylist = new jPlayerPlaylist({
            jPlayer: "#jquery_jplayer_N",
            cssSelectorAncestor: "#jp_container_N"
          }, [
            {
              title:"Cornerstone",
              artist:"Artic monkeys",
              mp3:"../audio/Cornerstone.mp3",
              oga:"../audio/Cornerstone.mp3",
              poster: "../img/1.png"
            }
          ], {
            playlistOptions: {
              enableRemoveControls: true
            },
            swfPath: "jplayer",
            supplied: "webmv, ogv, m4v, oga, mp3",
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            keyEnabled: true,
            audioFullScreen: true
          });
  

	// Click handlers for jPlayerPlaylist method demo

	// Audio mix playlist

	$("#playlist-arctic").click(function() {
		myPlaylist.setPlaylist([
			{
				title:"505",
				artist:"arctic monkeys",
				mp3:"../../audio/505.mp3",
				oga:"../audio/arctic/505.mp3",
				poster: "../img/Whatever People Say I Am, Thats What Im Not.jpg"
			},
			{
				title:"A Certain Romance",
				artist:"arctic monkeys",
				mp3:"../../audio/arctic/A Certain Romance.mp3",
				oga:"../audio/arctic/A Certain Romance.mp3",
				poster: "../img/Whatever People Say I Am, Thats What Im Not.jpg"
			},
			{
				title:"Brianstorm",
				artist:"Annalisa",
				mp3:"../../audio/arctic/Brianstorm.mp3",
				oga:"../audio/arctic/Brianstorm.mp3",
				poster: "../img/Whatever People Say I Am, Thats What Im Not.jpg"
			},
			{
				title:"Cigarette Smoke",
				artist:"arctic monkeys",
				mp3:"../../audio/arctic/Cigarette Smoke.mp3",
				oga:"../audio/arctic/Cigarette Smoke.mp3",
				poster: "../img/Whatever People Say I Am, Thats What Im Not.jpg"
			},
			{
				title:"Crying Lightning",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/Crying Lightning.mp3",
				oga:"../audio/arctic/Crying Lightning.mp3",
				poster: "../img/Whatever People Say I Am, Thats What Im Not.jpg"
			},
            {
				title:"Curtains Closed",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/Curtains Closed.mp3",
				oga:"../audio/arctic/Curtains Closed.mp3",
				poster: "../img/Whatever People Say I Am, Thats What Im Not.jpg"
			},
            {
				title:"D Is For Dangerous",
				artist:"arctic monkeys",
				mp3:"../../audio/arctic/505.mp3",
				oga:"../audio/arctic/D Is For Dangerous.mp3",
				poster: "../img/Whatever People Say I Am, Thats What Im Not.jpg"
			},
            {
				title:"Da Frame 2R",
				artist:"arctic monkeys",
				mp3:"../../audio/arctic/505.mp3",
				oga:"../audio/arctic/Da Frame 2R.mp3",
				poster: "../img/Whatever People Say I Am, Thats What Im Not.jpg"
			},
            {
				title:"Do Me A Favour",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/Do Me A Favour.mp3",
				poster: "../img/Whatever People Say I Am, Thats What Im Not.jpg"
			},
            {
				title:"Fake Tales Of San Francisco",
				artist:"arctic monkeys",
				mp3:"../../audio/arctic/505.mp3",
				oga:"../audio/arctic/Fake Tales Of San Francisco.mp3",
				poster: "../img/Whatever People Say I Am, Thats What Im Not.jpg"
			},
            {
				title:"Fluorescent Adolescent",
				artist:"arctic monkeys",
				mp3:"../../audio/arctic/505.mp3",
				oga:"../audio/arctic/Fluorescent Adolescent.mp3",
				poster: "../img/Whatever People Say I Am, Thats What Im Not.jpg"
			},
            {
				title:"From The Ritz To The Rubble",
				artist:"arctic monkeys",
				mp3:"../../audio/arctic/505.mp3",
				oga:"../audio/arctic/From The Ritz To The Rubble.mp3",
				poster: "../img/Whatever People Say I Am, Thats What Im Not.jpg"
			},
            {
				title:"I Bet You Look Good On The Dancefloor",
				artist:"arctic monkeys",
				mp3:"../../audio/arctic/505.mp3",
				oga:"../audio/arctic/I Bet You Look Good On The Dancefloor.mp3",
				poster: "../img/Whatever People Say I Am, Thats What Im Not.jpg"
			},
            {
				title:"If You Were There, Beware",
				artist:"arctic monkeys",
				mp3:"../../audio/arctic/505.mp3",
				oga:"../audio/arctic/If You Were There, Beware.mp3",
				poster: "../img/Whatever People Say I Am, Thats What Im Not.jpg"
			},
            {
				title:"Matador",
				artist:"arctic monkeys",
				mp3:"../../audio/arctic/505.mp3",
				oga:"../audio/arctic/Matador.mp3",
				poster: "../img/Whatever People Say I Am, Thats What Im Not.jpg"
			},
            {
				title:"Old Yellow Bricks",
				artist:"arctic monkeys",
				mp3:"../../audio/arctic/505.mp3",
				oga:"../audio/arctic/Old Yellow Bricks.mp3",
				poster: "../img/Whatever People Say I Am, Thats What Im Not.jpg"
			},
            {
				title:"Only Ones Who Know",
				artist:"arctic monkeys",
				mp3:"../../audio/arctic/505.mp3",
				oga:"../audio/arctic/Only Ones Who Know.mp3",
				poster: "../img/Whatever People Say I Am, Thats What Im Not.jpg"
			},
            {
				title:"Perhaps Vampires Is a Bit Strong But",
				artist:"arctic monkeys",
				mp3:"../../audio/arctic/505.mp3",
				oga:"../audio/arctic/Perhaps Vampires Is a Bit Strong But.mp3",
				poster: "../img/Whatever People Say I Am, Thats What Im Not.jpg"
			},
            {
				title:"Scummy (Aka When The Sun Goes Down)",
				artist:"arctic monkeys",
				mp3:"../../audio/arctic/505.mp3",
				oga:"../audio/arctic/Scummy (Aka When The Sun Goes Down).mp3",
				poster: "../img/Whatever People Say I Am, Thats What Im Not.jpg"
			},
            {
				title:"Suck It And See",
				artist:"arctic monkeys",
				mp3:"../../audio/arctic/505.mp3",
				oga:"../audio/arctic/Suck It And See.mp3",
				poster: "../img/Whatever People Say I Am, Thats What Im Not.jpg"
			},
            {
				title:"Teddy Picker",
				artist:"arctic monkeys",
				mp3:"../../audio/arctic/505.mp3",
				oga:"../audio/arctic/Teddy Picker.mp3",
				poster: "../img/Whatever People Say I Am, Thats What Im Not.jpg"
			},
            {
				title:"The Bad Thing",
				artist:"arctic monkeys",
				mp3:"../../audio/arctic/505.mp3",
				oga:"../audio/arctic/The Bad Thing.mp3",
				poster: "../img/Whatever People Say I Am, Thats What Im Not.jpg"
			},
            {
				title:"The View from the Afternoon",
				artist:"arctic monkeys",
				mp3:"../../audio/arctic/505.mp3",
				oga:"../audio/arctic/The View from the Afternoon.mp3",
				poster: "../img/Whatever People Say I Am, Thats What Im Not.jpg"
			},
            {
				title:"This House Is A Circus",
				artist:"arctic monkeys",
				mp3:"../../audio/arctic/505.mp3",
				oga:"../audio/arctic/This House Is A Circus.mp3",
				poster: "../img/Whatever People Say I Am, Thats What Im Not.jpg"
			},
            {
				title:"When the Sun Goes Down",
				artist:"arctic monkeys",
				mp3:"../../audio/arctic/505.mp3",
				oga:"../audio/arctic/When the Sun Goes Down.mp3",
				poster: "../img/Whatever People Say I Am, Thats What Im Not.jpg"
			}

		]);

	});

	// Video mix playlist
    $("#playlist-uta").click(function() {
		myPlaylist.setPlaylist([
{
      title:"warabe no uta",
      artist:"Kazumi Nikaido",
      mp3:"../audio/Warabe_Uta.mp3",
      oga:"../audio/Warabe_Uta.mp3",
      poster: "../img/1.png"
    },
    {
      title:"川の流れのように",
      artist:"teresa teng",
      mp3:"../audio/Kawa_no_nagare_no_youni.mp3",
      oga:"../audio/Kawa_no_nagare_no_youni.mp3",
      poster: "../img/1.png"
    },
    {
      title:"たましい の ルフラン",
      artist:"yoko takahashi",
      mp3:"../audio/tamashi_no_rufuran.mp3",
      oga:"../audio/tamashi_no_rufuran.mp3",
      poster: "../img/1.png"
    },
    {
      title:"涙そうそう",
      artist:"Ryoko Moriyama",
      mp3:"../audio/namida_sou_sou.mp3",
      oga:"../audio/namida_sou_sou.mp3",
      poster: "../img/1.png"
    },
    {
      title:"酒よ",
      artist:"Yoshi Ikuzo ",
      mp3:"../audio/Sakeyo.mp3",
      oga:"../audio/Sakeyo.mp3",
      poster: "../img/1.png"
    },
    {
      title:"たましい の ルフラン",
      artist:"yoko takahashi",
      mp3:"../audio/tamashi_no_rufuran.mp3",
      oga:"../audio/tamashi_no_rufuran.mp3",
      poster: "../img/1.png"
    },
    {
      title:"tooi sakebi",
      artist:"Nakaido Reichi",
      mp3:"../audio/_toi_sakebi_.mp3",
      oga:"../audio/_toi_sakebi_.mp3",
      poster: "../img/1.png"
    },
    {
      title:"chigiri",
      artist:"Itsuki hiroshi",
      mp3:"../audio/Chigiri.mp3",
      oga:"../audio/Chigiri.mp3",
      poster: "../img/1.png"
    }
            
		]);

	});
	$( "#playlist-musica" )
            .click( function () {
                myPlaylist.setPlaylist( [
                    {
                        title: "Where is my mind",
                        artist: "THE PIXIES ",
                        mp3: "../audio/505.mp3",
                        oga: "../audio/lista/Where Is My Mind.mp3",
                        poster: "../img/tom2.jpg"
			},
                    {
                        title: "Mad World.mp3",
                        artist: "Rem",
                        mp3: "../audio/lista/Mad World.mp3",
                        oga: "../audio/lista/Mad World.mp3",
                        poster: "../img/tom2.jpg"
			},
                    {
                        title: "Roses",
                        artist: "The Chainsmokers",
                        mp3: "../audio/lista/Roses.mp3",
                        oga: "../audio/lista/Roses.mp3",
                        poster: "../img/tom2.jpg"
			},
                    {
                        title: "Counting Stars",
                        artist: "OneRepublic",
                        mp3: "../audio/lista/Counting Stars.mp3",
                        oga: "../audio/lista/Counting Stars.mp3",
                        poster: "../img/tom2.jpg"
			},
                    {
                        title: "Only When I Sleep.mp3",
                        artist: "The Corrs",
                        mp3: "audio/lista/Only When I Sleep.mp3",
                        oga: "../audio/lista/Only When I Sleep.mp3",
                        poster: "../img/tom2.jpg"
			},
                    {
                        title: "La la la",
                        artist: "Naughty Boy ft. Sam Smith",
                        mp3: "audio/lista/La La La(cover).wma",
                        oga: "../audio/lista/La La La(cover).wma",
                        poster: "../img/tom2.jpg"
			},
                    {
                        title: "Ain't Nobody",
                        artist: "Felix Jaehn & Jasmine Thompson",
                        mp3: "../audio/lista/Ain't Nobody.mp3",
                        oga: "../audio/lista/Ain't Nobody.mp3",
                        poster: "../img/tom2.jpg"
			},
                    {
                        title: "Riders On The Storm",
                        artist: "The Doors",
                        mp3: "../audio/lista/Riders On The Storm.mp3",
                        oga: "../audio/lista/Riders On The Storm.mp3",
                        poster: "../img/tom2.jpg"
}, {
                        title: "Skater Boy",
                        artist: "Avril Lavigne",
                        mp3: "../audio/lista/Skater Boy.wma",
                        oga: "../audio/lista/Skater Boy.wma",
                        poster: "../img/tom2.jpg"
},
                    {
                        title: "L.E.J mix 2016",
                        artist: "L.E.J",
                        mp3: "audio/lista/Summer 2016.mp3",
                        oga: "../audio/lista/Summer 2016.mp3",
                        poster: "../img/tom2.jpg"
			},
                    {
                        title: "Meds",
                        artist: "Placebo",
                        mp3: "../audio/lista/Meds.mp3",
                        oga: "../audio/lista/Meds.mp3",
                        poster: "../img/tom2.jpg"
			},
                    {
                        title: "The Moth Amp The Flame",
                        artist: "les Deux Love Orchestra",
                        mp3: "../audio/lista/The Moth Amp The Flame.mp3",
                        oga: "../audio/lista/The Moth Amp The Flame.mp3",
                        poster: "../img/tom2.jpg"
			},
                    {
                        title: "Love You Like A Love Song",
                        artist: "Selena Gomez",
                        mp3: "../audio/lista/Love You Like A Love Song (cover).mp3",
                        oga: "../audio/lista/Love You Like A Love Song (cover).mp3",
                        poster: "../img/tom2.jpg"
			},
                    {
                        title: "Pompeii",
                        artist: "Bastille",
                        mp3: "../audio/lista/Pompeii.mp3",
                        oga: "../audio/lista/Pompeii.mp3",
                        poster: "../img/tom2.jpg"
			},
                    {
                        title: "My Songs Know What You Did In the Dark",
                        artist: "Fall out boys",
                        mp3: "../audio/lista/My Songs Know What You Did In the Dark.mp3",
                        oga: "../audio/lista/My Songs Know What You Did In the Dark.mp3",
                        poster: "../img/tom2.jpg"
			},
                    {
                        title: "Young Volcanoes",
                        artist: "Fall out boys",
                        mp3: "../audio/lista/Young Volcanoes.mp3",
                        oga: "../audio/lista/Young Volcanoes.mp3",
                        poster: "???.jpg"
}, {
                        title: "Numb",
                        artist: "Linkin park",
                        mp3: "../audio/lista/Numb.mp3",
                        oga: "../audio/lista/Numb.mp3",
                        poster: "???.jpg"
}, {
                        title: "In The End",
                        artist: "Linkin park",
                        mp3: "../audio/lista/In The End.mp3",
                        oga: "../audio/lista/In The End.mp3",
                        poster: "???.jpg"
},
                    {
                        title: "Enter Sandman",
                        artist: "Metallica",
                        mp3: "../audio/lista/Enter Sandman.mp3",
                        oga: "../audio/lista/Enter Sandman.mp3",
                        poster: "../img/tom2.jpg"
			},
                    {
                        title: "Pretty Fly",
                        artist: "The Offspring",
                        mp3: "../audio/lista/Pretty Fly.mp3",
                        oga: "../audio/lista/Pretty Fly.mp3",
                        poster: "../img/tom2.jpg"
			},
                    {
                        title: "Can’t Feel My Face",
                        artist: "The Weeknd",
                        mp3: "../audio/lista/Can’t Feel My Face.mp3",
                        oga: "../audio/lista/Can’t Feel My Face.mp3",
                        poster: "../img/tom2.jpg"
			},
                    {
                        title: "another brick in the wall",
                        artist: "Pink floyd",
                        mp3: "../audio/lista/another_brick_in_the_wall.mp3",
                        oga: "../audio/lista/another_brick_in_the_wall.mp3",
                        poster: "../img/tom2.jpg"
			},
                    {
                        title: "Your Possible Pasts",
                        artist: "Pink floyd",
                        mp3: "../audio/lista/Your Possible Pasts.mp3",
                        oga: "../audio/lista/Your Possible Pasts.mp3",
                        poster: "../img/tom2.jpg"
},
                    {
                        title: "see emily play",
                        artist: "Pink floyd",
                        mp3: "../audio/lista/see_emily_play.mp3",
                        oga: "../audio/lista/see_emily_play.mp3",
                        poster: "../img/tom2.jpg"
			},
                    {
                        title: "Love Will Tear Us Apart",
                        artist: "Joy Division",
                        mp3: "../audio/lista/Love Will Tear Us Apart.mp3",
                        oga: "../audio/lista/Love Will Tear Us Apart.mp3",
                        poster: "../img/tom2.jpg"
			},
                    {
                        title: "Love Is A Losing Game",
                        artist: "Amy Winehouse",
                        mp3: "../audio/lista/Love Is A Losing Game.mp3",
                        oga: "../audio/lista/Love Is A Losing Game.mp3",
                        poster: "../img/tom2.jpg"
			},

                    {
                        title: "Garoto De Aluguel",
                        artist: "Belchior E Zé Ramalho Duetos",
                        mp3: "../audio/lista/Garoto De Aluguel.mp3",
                        oga: "../audio/lista/Garoto De Aluguel.mp3",
                        poster: "../img/tom2.jpg"
			},
                    {
                        title: "O Atirador",
                        artist: "Lenine",
                        mp3: "../audio/lista/O Atirador.mp3",
                        oga: "../audio/lista/O Atirador.mp3",
                        poster: "../img/tom2.jpg"
}, {
                        title: "O Último Pôr do Sol",
                        artist: "Lenine",
                        mp3: "../audio/lista/O Último Pôr do Sol.mp3",
                        oga: "../audio/lista/O Último Pôr do Sol.mp3",
                        poster: "../img/tom2.jpg"
}, {
                        title: "Paciência",
                        artist: "Lenine",
                        mp3: "../audio/lista/Paciência.mp3",
                        oga: "../audio/lista/Paciência.mp3",
                        poster: "../img/tom2.jpg"
}, {
                        title: "O Atirador",
                        artist: "Lenine",
                        mp3: "../audio/lista/O Atirador.mp3",
                        oga: "../audio/lista/O Atirador.mp3",
                        poster: "../img/tom2.jpg"
}, {
                        title: "Santana",
                        artist: "Lenine",
                        mp3: "../audio/lista/Santana.mp3",
                        oga: "../audio/lista/Santana.mp3",
                        poster: "../img/tom2.jpg"
}, {
                        title: "A Ponte",
                        artist: "Lenine",
                        mp3: "../audio/lista/A Ponte.mp3",
                        oga: "../audio/lista/A Ponte.mp3",
                        poster: "../img/tom2.jpg"
}, {
                        title: "Dois Olhos Negros",
                        artist: "Lenine",
                        mp3: "../audio/lista/Dois Olhos Negros.mp3",
                        oga: "../audio/lista/Dois Olhos Negros.mp3",
                        poster: "../img/tom2.jpg"
}, {
                        title: "Faz Parte Do Meu Show",
                        artist: "Cazuza",
                        mp3: "../audio/lista/Faz Parte Do Meu Show.mp3",
                        oga: "../audio/lista/Faz Parte Do Meu Show.mp3",
                        poster: "../img/tom2.jpg"
}, {
                        title: "Refrão de bolero",
                        artist: "Engenheiros do Hawaii",
                        mp3: "../audio/lista/Refrão de bolero.mp3",
                        oga: "../audio/lista/Refrão de bolero.mp3",
                        poster: "../img/tom2.jpg"
}, {
                        title: "Somos quem podemos ser",
                        artist: "Engenheiros do Hawaii",
                        mp3: "../audio/lista/Somos quem podemos ser.mp3",
                        oga: "../audio/lista/Somos quem podemos ser.mp3",
                        poster: "../img/tom2.jpg"
}, {
                        title: "Outras frequências",
                        artist: "Engenheiros do Hawaii",
                        mp3: "../audio/lista/Outras frequências.mp3",
                        oga: "../audio/lista/Outras frequências.mp3",
                        poster: "../img/tom2.jpg"
}, {
                        title: "pra não dizer que não falei das flores",
                        artist: "Geraldo vandré",
                        mp3: "../audio/lista/pra não dizer que não falei das flores.mp3",
                        oga: "../audio/lista/pra não dizer que não falei das flores.mp3",
                        poster: "../img/tom2.jpg"
}, {
                        title: "na janela lateral",
                        artist: "Ratto",
                        mp3: "../audio/lista/na janela lateral.mp33",
                        oga: "../audio/lista/na janela lateral.mp3",
                        poster: "../img/tom2.jpg"
}, {
                        title: "máscara",
                        artist: "Pitty",
                        mp3: "../audio/lista/máscara.mp3",
                        oga: "../audio/lista/máscara.mp3",
                        poster: "../img/tom2.jpg"
}, {
                        title: "O Chamado do Bar",
                        artist: "Matanza",
                        mp3: "../audio/lista/O Chamado do Bar.mp3",
                        oga: "../audio/lista/O Chamado do Bar.mp3",
                        poster: "../img/tom2.jpg"
}, {
                        title: "Eu Não Gosto de Ninguém",
                        artist: "Matanza",
                        mp3: "../audio/lista/Eu Não Gosto de Ninguém.mp3",
                        oga: "../audio/lista/Eu Não Gosto de Ninguém.mp3",
                        poster: "../img/tom2.jpg"
}, {
                        title: "Remédios Demais",
                        artist: "Matanza",
                        mp3: "../audio/lista/Remédios Demais.mp3",
                        oga: "../audio/lista/Remédios Demais.mp3",
                        poster: "../img/tom2.jpg"
}, {
                        title: "want me want me",
                        artist: "Namie amuro",
                        mp3: "../audio/lista/want me want me.mp3",
                        oga: "../audio/lista/want me want me.mp3",
                        poster: "../img/tom2.jpg"
}, {
                        title: "Basket Case",
                        artist: "Green Day",
                        mp3: "../audio/lista/Basket Case.mp3",
                        oga: "../audio/lista/Basket Case.mp3",
                        poster: "../img/tom2.jpg"
}, {
                        title: "One Day",
                        artist: "Infected Mushroom & Matisyahu",
                        mp3: "../audio/lista/One Day.mp3",
                        oga: "../audio/lista/One Day.mp3",
                        poster: "../img/tom2.jpg"
}, {
                        title: "youth",
                        artist: "Matisyahu",
                        mp3: "../audio/lista/youth.mp3.mp3",
                        oga: "../audio/lista/youth.mp3.mp3",
                        poster: "../img/tom2.jpg"
}, {
                        title: "Basket Case",
                        artist: "Green Day",
                        mp3: "../audio/lista/Basket Case.mp3",
                        oga: "../audio/lista/Basket Case.mp3",
                        poster: "../img/tom2.jpg"
}, {
                        title: "My kind of girl",
                        artist: "Nat King",
                        mp3: "../audio/lista/My kind of girl.mp3",
                        oga: "../audio/lista/My kind of girl.mp3",
                        poster: "../img/tom2.jpg"
}, {
                        title: "Thanks to you",
                        artist: "Nat King",
                        mp3: "../audio/lista/Thanks to you.mp3",
                        oga: "../audio/lista/Thanks to you.mp3",
                        poster: "../img/tom2.jpg"
}, {
                        title: "The girl from Ipanema",
                        artist: "Nat King",
                        mp3: "../audio/lista/The girl from Ipanema.mp3",
                        oga: "../audio/lista/The girl from Ipanema.mp3",
                        poster: "../img/tom2.jpg"
}, {
                        title: "Requiem",
                        artist: "Mozart",
                        mp3: "../audio/lista/Requiem.mp3",
                        oga: "../audio/lista/Requiem.mp3",
                        poster: "../img/tom2.jpg"
}
		] );
});
	$("#playlist-avoid-1").click(function() {
		myPlaylist.remove(2); // Removes the 3rd item
		myPlaylist.remove(3); // Ignored unless removeTime=0: Where it removes the 4th item, which was originally the 5th item.
	});


});
//]]>