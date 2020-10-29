$(document).ready(function(){

	var myPlaylist = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_N",
		cssSelectorAncestor: "#jp_container_N"
	}, [
		{
			title:"505",
			artist:"arctic monkeys",
			mp3:"../audio/505.mp3",
			oga:"../audio/arctic/505.mp3",
			poster: "Favourite Worst Nightmare.jpg"
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
				mp3:"../audio/505.mp3",
				oga:"../audio/arctic/505.mp3",
				poster: "Favourite Worst Nightmare.jpg"
			},
			{
				title:"A Certain Romance",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/A Certain Romance.mp3",
				oga:"../audio/arctic/A Certain Romance.mp3",
				poster: "beneath.jpg"
			},
			{
				title:"Balaclava",
				artist:"arctic monkeys",
				free: true,
				mp3:"../audio/arctic/Balaclava.mp3",
				oga:"../audio/arctic/Balaclava.mp3",
				poster: "Favourite Worst Nightmare.jpg"
			},
			{
				title:"Brianstorm",
				artist:"Annalisa",
				mp3:"../audio/arctic/Brianstorm.mp3",
				oga:"../audio/arctic/Brianstorm.mp3",
				poster: "Favourite Worst Nightmare.jpg"
			},
			{
				title:"Cigarette Smoke",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/Cigarette Smoke.mp3",
				oga:"../audio/arctic/Cigarette Smoke.mp3",
				poster: "beneath.jpg"
			},
			{
				title:"Crying Lightning",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/Crying Lightning.mp3",
				oga:"../audio/arctic/Crying Lightning.mp3",
				poster: "Humbug.jpg"
			},
            {
				title:"Curtains Closed",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/Curtains Closed.mp3",
				oga:"../audio/arctic/Curtains Closed.mp3",
				poster: "beneath.jpg"
			},
            {
				title:"D Is For Dangerous",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/D Is For Dangerous.mp3",
				poster: "beneath.jpg"
			},
            {
				title:"Da Frame 2R",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/Da Frame 2R.mp3",
				poster: "Favourite Worst Nightmare.jpg"
			},
            {
				title:"Do Me A Favour",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/Do Me A Favour.mp3",
				poster: "beneath.jpg"
			},
            {
				title:"Fake Tales Of San Francisco",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/Fake Tales Of San Francisco.mp3",
				poster: "beneath.jpg"
			},
            {
				title:"Fluorescent Adolescent",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/Fluorescent Adolescent.mp3",
				poster: "beneath.jpg"
			},
            {
				title:"From The Ritz To The Rubble",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/From The Ritz To The Rubble.mp3",
				poster: "beneath.jpg"
			},
            {
				title:"I Bet You Look Good On The Dancefloor",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/I Bet You Look Good On The Dancefloor.mp3",
				poster: "Whatever People Say I Am, Thats What Im Not.jpg"
			},
            {
				title:"If You Were There, Beware",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/If You Were There, Beware.mp3",
				poster: "Favourite Worst Nightmare.jpg"
			},
            {
				title:"Matador",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/Matador.mp3",
				poster: "Favourite Worst Nightmare.jpg"
			},
            {
				title:"Old Yellow Bricks",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/Old Yellow Bricks.mp3",
				poster: "Favourite Worst Nightmare.jpg"
			},
            {
				title:"Only Ones Who Know",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/Only Ones Who Know.mp3",
				poster: "Favourite Worst Nightmare.jpg"
			},
            {
				title:"Perhaps Vampires Is a Bit Strong But",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/Perhaps Vampires Is a Bit Strong But.mp3",
				poster: "Whatever People Say I Am, Thats What Im Not.jpg"
			},
            {
				title:"Scummy (Aka When The Sun Goes Down)",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/Scummy (Aka When The Sun Goes Down).mp3",
				poster: "beneath.jpg"
			},
            {
				title:"Suck It And See",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/Suck It And See.mp3",
				poster: "Suck It And See"
			},
            {
				title:"Teddy Picker",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/Teddy Picker.mp3",
				poster: "beneath.jpg"
			},
            {
				title:"The Bad Thing",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/The Bad Thing.mp3",
				poster: "Favourite Worst Nightmare.jpg"
			},
            {
				title:"The View from the Afternoon",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/The View from the Afternoon.mp3",
				poster: "Whatever People Say I Am, Thats What Im Not.jpg"
			},
            {
				title:"This House Is A Circus",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/This House Is A Circus.mp3",
				poster: "Favourite Worst Nightmare.jpg"
			},
            {
				title:"When the Sun Goes Down",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/When the Sun Goes Down.mp3",
				poster: "Whatever People Say I Am, Thats What Im Not.jpg"
			}

		]);

	});

	// Video mix playlist
    $("#playlist-beneath").click(function() {
		myPlaylist.setPlaylist([
			{
				title:"505",
				artist:"arctic monkeys",
				mp3:"../audio/505.mp3",
				oga:"../audio/arctic/505.mp3",
				poster: "Favourite Worst Nightmare.jpg"
			},
            {
				title:"A Certain Romance",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/A Certain Romance.mp3",
				oga:"../audio/arctic/A Certain Romance.mp3",
				poster: "beneath.jpg"
			},
			{
				title:"Cigarette Smoke",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/Cigarette Smoke.mp3",
				oga:"../audio/arctic/Cigarette Smoke.mp3",
				poster: "beneath.jpg"
			},
			{
				title:"Curtains Closed",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/Curtains Closed.mp3",
				oga:"../audio/arctic/Curtains Closed.mp3",
				poster: "beneath.jpg"
			},
			{
				title:"D Is For Dangerous",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/D Is For Dangerous.mp3",
				poster: "beneath.jpg"
			},
			{
				title:"Do Me A Favour",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/Do Me A Favour.mp3",
				poster: "beneath.jpg"
			},
			{
				title:"Fake Tales Of San Francisco",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/Fake Tales Of San Francisco.mp3",
				poster: "beneath.jpg"
			},
			{
				title:"Fluorescent Adolescent",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/Fluorescent Adolescent.mp3",
				poster: "beneath.jpg"
			},
            {
				title:"From The Ritz To The Rubble",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/From The Ritz To The Rubble.mp3",
				poster: "beneath.jpg"
			},
			{
				title:"Scummy (Aka When The Sun Goes Down)",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/Scummy (Aka When The Sun Goes Down).mp3",
				poster: "beneath.jpg"
			},
			{
				title:"Teddy Picker",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/Teddy Picker.mp3",
				poster: "beneath.jpg"
			}
		]);

	});
    $("#playlist-Whatever-People").click(function() {
		myPlaylist.setPlaylist([
			{
				title:"I Bet You Look Good On The Dancefloor",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/I Bet You Look Good On The Dancefloor.mp3",
				poster: "Whatever People Say I Am, Thats What Im Not.jpg"
			},
			{
				title:"Perhaps Vampires Is a Bit Strong But",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/Perhaps Vampires Is a Bit Strong But.mp3",
				poster: "Whatever People Say I Am, Thats What Im Not.jpg"
			},
			{
				title:"The View from the Afternoon",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/The View from the Afternoon.mp3",
				poster: "Whatever People Say I Am, Thats What Im Not.jpg"
			},
			{
				title:"When the Sun Goes Down",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/When the Sun Goes Down.mp3",
				poster: "Whatever People Say I Am, Thats What Im Not.jpg"
			}
		]);

	});
	$("#playlist-favourite-worst").click(function() {
		myPlaylist.setPlaylist([
			{
				title:"505",
				artist:"arctic monkeys",
				mp3:"../audio/505.mp3",
				oga:"../audio/arctic/505.mp3",
				poster: "Favourite Worst Nightmare.jpg"
			},
			{
				title:"Balaclava",
				artist:"arctic monkeys",
				free: true,
				mp3:"../audio/arctic/Balaclava.mp3",
				oga:"../audio/arctic/Balaclava.mp3",
				poster: "Favourite Worst Nightmare.jpg"
			},
			{
				title:"Brianstorm",
				artist:"Annalisa",
				mp3:"../audio/arctic/Brianstorm.mp3",
				oga:"../audio/arctic/Brianstorm.mp3",
				poster: "Favourite Worst Nightmare.jpg"
			},
			{
				title:"Da Frame 2R",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/Da Frame 2R.mp3",
				poster: "Favourite Worst Nightmare.jpg"
			},
			{
				title:"If You Were There, Beware",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/If You Were There, Beware.mp3",
				poster: "Favourite Worst Nightmare.jpg"
			},
            {
				title:"Matador",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/Matador.mp3",
				poster: "Favourite Worst Nightmare.jpg"
			},
			{
				title:"Old Yellow Bricks",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/Old Yellow Bricks.mp3",
				poster: "Favourite Worst Nightmare.jpg"
			},
            {
				title:"Only Ones Who Know",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/Only Ones Who Know.mp3",
				poster: "Favourite Worst Nightmare.jpg"
			},
			{
				title:"The Bad Thing",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/The Bad Thing.mp3",
				poster: "Favourite Worst Nightmare.jpg"
			},
			{
				title:"This House Is A Circus",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/This House Is A Circus.mp3",
				poster: "Favourite Worst Nightmare.jpg"
			}
		]);

	});
	$("#playlist-humbug").click(function() {
		myPlaylist.setPlaylist([
			{
				title:"cornerstone",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/cornerstone.mp3",
				oga:"../audio/arctic/cornerstone.mp3",
				poster: "Humbug.jpg"
			},
			{
				title:"Crying Lightning",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/Crying Lightning.mp3",
				oga:"../audio/arctic/Crying Lightning.mp3",
				poster: "Humbug.jpg"
			}
		]);

	});
	$("#playlist-suck").click(function() {
		myPlaylist.setPlaylist([
			{
				title:"Suck It And See",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"../audio/arctic/Suck It And See.mp3",
				poster: "Suck It And See"
			},
		]);

	});
	$("#playlist-setPlaylist-video-mix").click(function() {
		myPlaylist.setPlaylist([
			{
				title:"Laura non c'è",
				artist:"Blender Foundation",
				m4v:"https://www.youtube.com/watch?v=LIQz6zZi7R0",
				ogv:"https://www.youtube.com/watch?v=LIQz6zZi7R0",
				webmv: "http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm",
				poster:"http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
			},
			{
				title:"Kruche vsekh",
				artist:"Pixar",
				m4v: "http://www.jplayer.org/video/m4v/Finding_Nemo_Teaser.m4v",
				ogv: "http://www.jplayer.org/video/ogv/Finding_Nemo_Teaser.ogv",
				webmv: "http://www.jplayer.org/video/webm/Finding_Nemo_Teaser.webm",
				poster: "http://www.jplayer.org/video/poster/Finding_Nemo_Teaser_640x352.png"
			},
			{
				title:"Arregaçada",
				artist:"Pixar",
				m4v: "http://www.jplayer.org/video/m4v/Incredibles_Teaser.m4v",
				ogv: "http://www.jplayer.org/video/ogv/Incredibles_Teaser.ogv",
				webmv: "http://www.jplayer.org/video/webm/Incredibles_Teaser.webm",
				poster: "http://www.jplayer.org/video/poster/Incredibles_Teaser_640x272.png"
			}
		]);
	});

	// Media mix playlist

	$("#playlist-setPlaylist-media-mix").click(function() {
		myPlaylist.setPlaylist([
			{
				title:"Alice e il blu",
				artist:"Annalisa",
				mp3:"../audio/Alice e il blu.mp3",
				oga:"../audio/Alice e il blu.mp3",
				poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
			},
			{
				title:"Laura non c'è",
				artist:"Annalisa",
				mp3:"../audio/Nek Laura Non C è Dj Antoine Vs Mad Mark 2k15 Holiday Radio Edit [Songsx.Pk].mp3",
				oga:"../audio/Nek Laura Non C è Dj Antoine Vs Mad Mark 2k15 Holiday Radio Edit [Songsx.Pk].mp3",
				poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
			},
			{
				title:"Pill in ibiza",
				artist:"arctic monkeys",
				free: true,
				mp3:"../audio/I Took a Pill In Ibiza (Seeb Remix).mp3",
				oga:"../audio/I Took a Pill In Ibiza (Seeb Remix).mp3",
				poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
			},
			{
				title:"Laura non c'è",
				artist:"Blender Foundation",
				m4v:"../audio/Nek Laura Non C è Dj Antoine Vs Mad Mark 2k15 Holiday Radio Edit [Songsx.Pk].mp3",
				ogv:"../audio/Nek Laura Non C è Dj Antoine Vs Mad Mark 2k15 Holiday Radio Edit [Songsx.Pk].mp3",
				webmv: "http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm",
				poster:"http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
			},
			{
				title:"Kruche vsekh",
				artist:"Pixar",
				m4v: "../audio/quest-pistols-show-feat.-open-kids-kruche-vsekh-(best-muzon.me).mp3",
				ogv: "../audio/quest-pistols-show-feat.-open-kids-kruche-vsekh-(best-muzon.me).mp3",
				webmv: "http://www.jplayer.org/video/webm/Finding_Nemo_Teaser.webm",
				poster: "http://www.jplayer.org/video/poster/Finding_Nemo_Teaser_640x352.png"
			},
			{
				title:"The haunting",
				artist:"Annalisa",
				mp3:"../audio/Nightcore - The Haunting (Set It Off) (mp3goo.com).mp3",
				oga:"../audio/Nightcore - The Haunting (Set It Off) (mp3goo.com).mp3",
				poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
			},
			{
				title:"Arregaçada",
				artist:"Pixar",
				m4v: "../audio/Arregaçada.mp3",
				ogv: "../audio/Arregaçada.mp3",
				webmv: "http://www.jplayer.org/video/webm/Incredibles_Teaser.webm",
				poster: "http://www.jplayer.org/video/poster/Incredibles_Teaser_640x272.png"
			},
			{
				title:"Run",
				artist:"arctic monkeys",
				mp3:"../audio/AWOLNATION - Run (Audio).mp3",
				oga:"../audio/AWOLNATION - Run (Audio).mp3",
				poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
			},
			{
				title:"Alors on danse",
				artist:"arctic monkeys",
				mp3:"../audio/Stromae - Alors On Danse.mp3",
				oga:"../audio/Stromae - Alors On Danse.mp3",
				poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
			}
		
		]);
	});

	// arctic monkeys tracks

	$("#playlist-add-cornerstone").click(function() {
		myPlaylist.add({
			title:"cornerstone",
			artist:"Arctic monkey",
			free:true,
			mp3:"../audio/cornerstone.mp3",
			oga:"../audio/cornerstone.mp3",
			poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
		});
	});

	$("#playlist-add-Pill").click(function() {
		myPlaylist.add({
			title:"Pill in ibiza",
			artist:"arctic monkeys",
			free: true,
			mp3:"../audio/I Took a Pill In Ibiza (Seeb Remix).mp3",
			oga:"../audio/I Took a Pill In Ibiza (Seeb Remix).mp3",
			poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
		});
	});

	$("#playlist-add-tempered-song").click(function() {
		myPlaylist.add({
			title:"Run",
			artist:"arctic monkeys",
			mp3:"../audio/AWOLNATION - Run (Audio).mp3",
			oga:"../audio/AWOLNATION - Run (Audio).mp3",
			poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
		});
	});

	$("#playlist-add-Supershooter").click(function() {
		myPlaylist.add({
			title:"Super shooter",
			artist:"arctic monkeys",
			mp3:"../audio/Copia de [GANTZ] RIP SLYME - Super Shooter (op).mp3",
			oga:"../audio/Copia de [GANTZ] RIP SLYME - Super Shooter (op).mp3",
			poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
		});
	});

	// Annalisa tracks

	$("#playlist-add-alice-e-il-blu").click(function() {
		myPlaylist.add({
			title:"Alice e il blu",
			artist:"Annalisa",
			mp3:"../audio/Annalisa - Alice e il blu (Audio).mp3",
			oga:"../audio/Annalisa - Alice e il blu (Audio).mp3",
			poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
		});
	});

	$("#playlist-laura").click(function() {
		myPlaylist.add({
			title:"Laura non c'è",
			artist:"Annalisa",
			mp3:"../audio/Nek Laura Non C è Dj Antoine Vs Mad Mark 2k15 Holiday Radio Edit [Songsx.Pk].mp3",
			oga:"../audio/Nek Laura Non C è Dj Antoine Vs Mad Mark 2k15 Holiday Radio Edit [Songsx.Pk].mp3",
			poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
		});
	});

	$("#playlist-add-moth").click(function() {
		myPlaylist.add({
			title:"moth",
			artist:"les deux",
			mp3:"../audio/The Moth &amp; The Flame - Les Deux Love Orchestra - Mr. Robot S02E12 (320  kbps).mp3",
			oga:"../audio/The Moth &amp; The Flame - Les Deux Love Orchestra - Mr. Robot S02E12 (320  kbps).mp3",
			poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
		});
	});

	// Videos

	$("#playlist-add-big-buck-bunny").click(function() {
		myPlaylist.add({
			title:"Laura non c'è",
			artist:"Blender Foundation",
			m4v:"http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v",
			ogv:"http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv",
			webmv: "http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm",
			poster:"http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
		});
	});

	$("#playlist-add-finding-nemo").click(function() {
		myPlaylist.add({
			title:"Kruche vsekh",
			artist:"Pixar",
			m4v: "http://www.jplayer.org/video/m4v/Finding_Nemo_Teaser.m4v",
			ogv: "http://www.jplayer.org/video/ogv/Finding_Nemo_Teaser.ogv",
			webmv: "http://www.jplayer.org/video/webm/Finding_Nemo_Teaser.webm",
			poster: "http://www.jplayer.org/video/poster/Finding_Nemo_Teaser_640x352.png"
		});
	});

	$("#playlist-add-incredibles").click(function() {
		myPlaylist.add({
			title:"Arregaçada",
			artist:"Pixar",
			m4v: "http://www.jplayer.org/video/m4v/Incredibles_Teaser.m4v",
			ogv: "http://www.jplayer.org/video/ogv/Incredibles_Teaser.ogv",
			webmv: "http://www.jplayer.org/video/webm/Incredibles_Teaser.webm",
			poster: "http://www.jplayer.org/video/poster/Incredibles_Teaser_640x272.png"
		});
	});

	// The remove commands

	$("#playlist-remove").click(function() {
		myPlaylist.remove();
	});

	$("#playlist-remove--2").click(function() {
		myPlaylist.remove(-2);
	});
	$("#playlist-remove--1").click(function() {
		myPlaylist.remove(-1);
	});
	$("#playlist-remove-0").click(function() {
		myPlaylist.remove(0);
	});
	$("#playlist-remove-1").click(function() {
		myPlaylist.remove(1);
	});
	$("#playlist-remove-2").click(function() {
		myPlaylist.remove(2);
	});

	// The shuffle commands

	$("#playlist-shuffle").click(function() {
		myPlaylist.shuffle();
	});

	$("#playlist-shuffle-false").click(function() {
		myPlaylist.shuffle(false);
	});
	$("#playlist-shuffle-true").click(function() {
		myPlaylist.shuffle(true);
	});

	// The select commands

	$("#playlist-select--2").click(function() {
		myPlaylist.select(-2);
	});
	$("#playlist-select--1").click(function() {
		myPlaylist.select(-1);
	});
	$("#playlist-select-0").click(function() {
		myPlaylist.select(0);
	});
	$("#playlist-select-1").click(function() {
		myPlaylist.select(1);
	});
	$("#playlist-select-2").click(function() {
		myPlaylist.select(2);
	});

	// The next/previous commands

	$("#playlist-next").click(function() {
		myPlaylist.next();
	});
	$("#playlist-previous").click(function() {
		myPlaylist.previous();
	});

	// The play commands

	$("#playlist-play").click(function() {
		myPlaylist.play();
	});

	$("#playlist-play--2").click(function() {
		myPlaylist.play(-2);
	});
	$("#playlist-play--1").click(function() {
		myPlaylist.play(-1);
	});
	$("#playlist-play-0").click(function() {
		myPlaylist.play(0);
	});
	$("#playlist-play-1").click(function() {
		myPlaylist.play(1);
	});
	$("#playlist-play-2").click(function() {
		myPlaylist.play(2);
	});

	// The pause command

	$("#playlist-pause").click(function() {
		myPlaylist.pause();
	});

	// Changing the playlist options

	// Option: autoPlay

	$("#playlist-option-autoPlay-true").click(function() {
		myPlaylist.option("autoPlay", true);
	});
	$("#playlist-option-autoPlay-false").click(function() {
		myPlaylist.option("autoPlay", false);
	});

	// Option: enableRemoveControls

	$("#playlist-option-enableRemoveControls-true").click(function() {
		myPlaylist.option("enableRemoveControls", true);
	});
	$("#playlist-option-enableRemoveControls-false").click(function() {
		myPlaylist.option("enableRemoveControls", false);
	});

	// Option: displayTime

	$("#playlist-option-displayTime-0").click(function() {
		myPlaylist.option("displayTime", 0);
	});
	$("#playlist-option-displayTime-fast").click(function() {
		myPlaylist.option("displayTime", "fast");
	});
	$("#playlist-option-displayTime-slow").click(function() {
		myPlaylist.option("displayTime", "slow");
	});
	$("#playlist-option-displayTime-2000").click(function() {
		myPlaylist.option("displayTime", 2000);
	});

	// Option: addTime

	$("#playlist-option-addTime-0").click(function() {
		myPlaylist.option("addTime", 0);
	});
	$("#playlist-option-addTime-fast").click(function() {
		myPlaylist.option("addTime", "fast");
	});
	$("#playlist-option-addTime-slow").click(function() {
		myPlaylist.option("addTime", "slow");
	});
	$("#playlist-option-addTime-2000").click(function() {
		myPlaylist.option("addTime", 2000);
	});

	// Option: removeTime

	$("#playlist-option-removeTime-0").click(function() {
		myPlaylist.option("removeTime", 0);
	});
	$("#playlist-option-removeTime-fast").click(function() {
		myPlaylist.option("removeTime", "fast");
	});
	$("#playlist-option-removeTime-slow").click(function() {
		myPlaylist.option("removeTime", "slow");
	});
	$("#playlist-option-removeTime-2000").click(function() {
		myPlaylist.option("removeTime", 2000);
	});

	// Option: shuffleTime

	$("#playlist-option-shuffleTime-0").click(function() {
		myPlaylist.option("shuffleTime", 0);
	});
	$("#playlist-option-shuffleTime-fast").click(function() {
		myPlaylist.option("shuffleTime", "fast");
	});
	$("#playlist-option-shuffleTime-slow").click(function() {
		myPlaylist.option("shuffleTime", "slow");
	});
	$("#playlist-option-shuffleTime-2000").click(function() {
		myPlaylist.option("shuffleTime", 2000);
	});

	// Equivalent commands

	$("#playlist-equivalent-1-a").click(function() {
		myPlaylist.add({
			title:"Laura non c'è",
			artist:"Annalisa",
			mp3:"../audio/Nek Laura Non C è Dj Antoine Vs Mad Mark 2k15 Holiday Radio Edit [Songsx.Pk].mp3",
			oga:"../audio/Nek Laura Non C è Dj Antoine Vs Mad Mark 2k15 Holiday Radio Edit [Songsx.Pk].mp3",
			poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
		}, true);
	});

	$("#playlist-equivalent-1-b").click(function() {
		myPlaylist.add({
			title:"1",
			artist:"Annalisa",
			mp3:"http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
			oga:"http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg",
			poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
		});
		myPlaylist.play(-1);
	});

	// AVOID COMMANDS

	$("#playlist-avoid-1").click(function() {
		myPlaylist.remove(2); // Removes the 3rd item
		myPlaylist.remove(3); // Ignored unless removeTime=0: Where it removes the 4th item, which was originally the 5th item.
	});


});
//]]>