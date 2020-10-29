$(document).ready(function(){

	var myPlaylist = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_N",
		cssSelectorAncestor: "#jp_container_N"
	}, [
		{
			title:"21 guns",
			artist:"The Stark Palace",
			mp3:"../audio/Annalisa - Alice e il blu (Audio).mp3",
			oga:"../audio/Annalisa - Alice e il blu (Audio).mp3",
			poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
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

	$("#playlist-setPlaylist-audio-mix").click(function() {
		myPlaylist.setPlaylist([
			{
				title:"21 Guns",
				artist:"green day",
				mp3:"../audio/Annalisa - Alice e il blu (Audio).mp3",
				oga:"../audio/Annalisa - Alice e il blu (Audio).mp3",
				poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
			},
			{
				title:"Bruises and Bitemarks",
				artist:"The Stark Palace",
				mp3:"../audio/Nightcore - Bruises And Bitemarks (320  kbps).mp3",
				oga:"../audio/Nightcore - Bruises And Bitemarks (320  kbps).mp3",
				poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
			},
			{
				title:"Pill in ibiza",
				artist:"Miaow",
				free: true,
				mp3:"../audio/I Took a Pill In Ibiza (Seeb Remix).mp3",
				oga:"../audio/I Took a Pill In Ibiza (Seeb Remix).mp3",
				poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
			},
			{
				title:"The haunting",
				artist:"The Stark Palace",
				mp3:"../audio/Nightcore - The Haunting (Set It Off) (mp3goo.com).mp3",
				oga:"../audio/Nightcore - The Haunting (Set It Off) (mp3goo.com).mp3",
				poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
			},
			{
				title:"Run",
				artist:"Miaow",
				mp3:"../audio/AWOLNATION - Run (Audio).mp3",
				oga:"../audio/AWOLNATION - Run (Audio).mp3",
				poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
			},
			{
				title:"Super shooter",
				artist:"Miaow",
				mp3:"../audio/Copia de [GANTZ] RIP SLYME - Super Shooter (op).mp3",
				oga:"../audio/Copia de [GANTZ] RIP SLYME - Super Shooter (op).mp3",
				poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
			}
		]);
	});

	// Video mix playlist

	$("#playlist-setPlaylist-video-mix").click(function() {
		myPlaylist.setPlaylist([
			{
				title:"Laura non c'è",
				artist:"Blender Foundation",
				m4v:"http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v",
				ogv:"http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv",
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
				title:"21 Guns",
				artist:"The Stark Palace",
				mp3:"../audio/Annalisa - Alice e il blu (Audio).mp3",
				oga:"../audio/Annalisa - Alice e il blu (Audio).mp3",
				poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
			},
			{
				title:"Bruises and Bitemarks",
				artist:"The Stark Palace",
				mp3:"../audio/Nightcore - Bruises And Bitemarks (320  kbps).mp3",
				oga:"../audio/Nightcore - Bruises And Bitemarks (320  kbps).mp3",
				poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
			},
			{
				title:"Pill in ibiza",
				artist:"Miaow",
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
				artist:"The Stark Palace",
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
				artist:"Miaow",
				mp3:"../audio/AWOLNATION - Run (Audio).mp3",
				oga:"../audio/AWOLNATION - Run (Audio).mp3",
				poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
			},
			{
				title:"Alors on danse",
				artist:"Miaow",
				mp3:"../audio/Stromae - Alors On Danse.mp3",
				oga:"../audio/Stromae - Alors On Danse.mp3",
				poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
			}
		
		]);
	});

	// Miaow tracks

	$("#playlist-add-bubble").click(function() {
		myPlaylist.add({
			title:"Bubble",
			artist:"Miaow",
			free:true,
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg",
			poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
		});
	});

	$("#playlist-add-Pill").click(function() {
		myPlaylist.add({
			title:"Pill in ibiza",
			artist:"Miaow",
			free: true,
			mp3:"../audio/I Took a Pill In Ibiza (Seeb Remix).mp3",
			oga:"../audio/I Took a Pill In Ibiza (Seeb Remix).mp3",
			poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
		});
	});

	$("#playlist-add-tempered-song").click(function() {
		myPlaylist.add({
			title:"Run",
			artist:"Miaow",
			mp3:"../audio/AWOLNATION - Run (Audio).mp3",
			oga:"../audio/AWOLNATION - Run (Audio).mp3",
			poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
		});
	});

	$("#playlist-add-Supershooter").click(function() {
		myPlaylist.add({
			title:"Super shooter",
			artist:"Miaow",
			mp3:"../audio/Copia de [GANTZ] RIP SLYME - Super Shooter (op).mp3",
			oga:"../audio/Copia de [GANTZ] RIP SLYME - Super Shooter (op).mp3",
			poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
		});
	});

	// The Stark Palace tracks

	$("#playlist-add-cro-magnon-man").click(function() {
		myPlaylist.add({
			title:"21 Guns",
			artist:"The Stark Palace",
			mp3:"../audio/21 Guns.mp3",
			oga:"../audio/21 Guns.mp3",
			poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
		});
	});

	$("#playlist-add-your-face").click(function() {
		myPlaylist.add({
			title:"Bruises and Bitemarks",
			artist:"The Stark Palace",
			mp3:"../audio/Nightcore - Bruises And Bitemarks (320  kbps).mp3",
			oga:"../audio/Nightcore - Bruises And Bitemarks (320  kbps).mp3",
			poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
		});
	});

	$("#playlist-add-cyber-sonnet").click(function() {
		myPlaylist.add({
			title:"The haunting",
			artist:"The Stark Palace",
			mp3:"../audio/Nightcore - The Haunting (Set It Off) (mp3goo.com).mp3",
			oga:"../audio/Nightcore - The Haunting (Set It Off) (mp3goo.com).mp3",
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
			title:"Bruises and Bitemarks",
			artist:"The Stark Palace",
			mp3:"../audio/Nightcore - Bruises And Bitemarks (320  kbps).mp3",
			oga:"../audio/Nightcore - Bruises And Bitemarks (320  kbps).mp3",
			poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
		}, true);
	});

	$("#playlist-equivalent-1-b").click(function() {
		myPlaylist.add({
			title:"1",
			artist:"The Stark Palace",
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