$(document).ready(function(){

	var myPlaylist = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_N",
		cssSelectorAncestor: "#jp_container_N"
	}, [
		{
			title:"Alice e il blu",
			artist:"Annalisa",
			mp3:"../audio/505.mp3",
			oga:"audio/Annalisa - Alice e il blu (Audio).mp3",
			poster: "img/Favourite Worst Nightmare.jpg"
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

	$("#playlist-italiano").click(function() {
		myPlaylist.setPlaylist([
			{
				title:"Alice e il blu",
				artist:"Annalisa",
				mp3:"../audio/505.mp3",
				oga:"audio/Annalisa - Alice e il blu (Audio).mp3",
				poster: "img/Favourite Worst Nightmare.jpg"
			},
			{
				title:"Laura non c'è",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/A Certain Romance.mp3",
				oga:"audio/Nek Laura Non C è Dj Antoine Vs Mad Mark 2k15 Holiday Radio Edit [Songsx.Pk].mp3",
				poster: "img/beneath.jpg"
			}
		]);

	});

	// Video mix playlist
    $("#playlist-russa").click(function() {
		myPlaylist.setPlaylist([
			{
				title:"kruche vsekh",
				artist:"quest-pistols",
				mp3:"../audio/505.mp3",
				oga:"audio/quest-pistols-show-feat.-open-kids-kruche-vsekh-(best-muzon.me).mp3",
				poster: "img/Favourite Worst Nightmare.jpg"
			},
            {
				title:"Мы Пьяные",
				artist:"-----",
				mp3:"../audio/arctic/A Certain Romance.mp3",
				oga:"audio/gazon_Мы Пьяные.mp3",
				poster: "img/beneath.jpg"
			}
		]);

	});
    $("#playlist-frances").click(function() {
		myPlaylist.setPlaylist([
			{
				title:"Alors On Danse",
				artist:"Stromae",
				mp3:"../audio/arctic/505.mp3",
				oga:"audio/Stromae - Alors On Danse.mp3",
				poster: "img/Whatever People Say I Am, Thats What Im Not.jpg"
			}
		]);

	});
	$("#playlist-japones").click(function() {
		myPlaylist.setPlaylist([
			{
				title:"Super Shooter",
				artist:"RIP SLYME",
				mp3:"../audio/505.mp3",
				oga:"audio/Copia de [GANTZ] RIP SLYME - Super Shooter (op).mp3",
				poster: "img/Favourite Worst Nightmare.jpg"
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

	$("#playlist-add-505").click(function() {
		myPlaylist.add(
		{
				title:"505",
				artist:"arctic monkeys",
				mp3:"../audio/505.mp3",
				oga:"audio/arctic/505.mp3",
				poster: "img/Favourite Worst Nightmare.jpg"
		});
	});

	$("#playlist-add-cigarette").click(function() {
		myPlaylist.add({
			title:"Cigarette Smoke",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/Cigarette Smoke.mp3",
				oga:"audio/arctic/Cigarette Smoke.mp3",
				poster: "img/beneath.jpg"
		});
	});

	$("#playlist-add-curtains").click(function() {
		myPlaylist.add({
			title:"Curtains Closed",
				artist:"arctic monkeys",
				mp3:"audio/arctic/Curtains Closed.mp3",
				oga:"audio/arctic/Curtains Closed.mp3",
				poster: "img/beneath.jpg"
		});
	});

	// Annalisa tracks

	$("#playlist-add-d-is").click(function() {
		myPlaylist.add({
			title:"D Is For Dangerous",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"audio/arctic/D Is For Dangerous.mp3",
				poster: "img/beneath.jpg"
		});
	});

	$("#playlist-do-me").click(function() {
		myPlaylist.add({
			title:"Do Me A Favour",
				artist:"arctic monkeys",
				mp3:"audio/arctic/505.mp3",
				oga:"audio/arctic/Do Me A Favour.mp3",
				poster: "img/beneath.jpg"
		});
	});

	$("#playlist-add-fake").click(function() {
		myPlaylist.add({
			title:"Fake Tales Of San Francisco",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"audio/arctic/Fake Tales Of San Francisco.mp3",
				poster: "img/beneath.jpg"
		});
	});

	// Videos

	$("#playlist-add-fluorescent").click(function() {
		myPlaylist.add({
			title:"Fluorescent Adolescent",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"audio/arctic/Fluorescent Adolescent.mp3",
				poster: "img/beneath.jpg"
		});
	});

	$("#playlist-add-from-the").click(function() {
		myPlaylist.add({
			title:"From The Ritz To The Rubble",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"audio/arctic/From The Ritz To The Rubble.mp3",
				poster: "img/beneath.jpg"
		});
	});

	$("#playlist-add-scummy").click(function() {
		myPlaylist.add({
			title:"Scummy (Aka When The Sun Goes Down)",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"audio/arctic/Scummy (Aka When The Sun Goes Down).mp3",
				poster: "img/beneath.jpg"
		});
	});
    $("#playlist-add-teddy").click(function() {
		myPlaylist.add({
			title:"Teddy Picker",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"audio/arctic/Teddy Picker.mp3",
				poster: "img/beneath.jpg"
		});
	});
	$("#playlist-add-i-bet").click(function() {
		myPlaylist.add({
			title:"I Bet You Look Good On The Dancefloor",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"audio/arctic/I Bet You Look Good On The Dancefloor.mp3",
				poster: "img/Whatever People Say I Am, Thats What Im Not.jpg"
		});
	});
	$("#playlist-add-perharps").click(function() {
		myPlaylist.add({
			title:"Perhaps Vampires Is a Bit Strong But",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"audio/arctic/Perhaps Vampires Is a Bit Strong But.mp3",
				poster: "img/Whatever People Say I Am, Thats What Im Not.jpg"
		});
	});
	$("#playlist-add-the-view").click(function() {
		myPlaylist.add({
			title:"The View from the Afternoon",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"audio/arctic/The View from the Afternoon.mp3",
				poster: "img/Whatever People Say I Am, Thats What Im Not.jpg"
		});
	});
	$("#playlist-add-when-the").click(function() {
		myPlaylist.add({
			title:"When the Sun Goes Down",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"audio/arctic/When the Sun Goes Down.mp3",
				poster: "img/Whatever People Say I Am, Thats What Im Not.jpg"
		});
	});
	$("#playlist-add-Balaclava").click(function() {
		myPlaylist.add({
			title:"Balaclava",
				artist:"arctic monkeys",
				free: true,
				mp3:"../audio/arctic/Balaclava.mp3",
				oga:"audio/arctic/Balaclava.mp3",
				poster: "img/Favourite Worst Nightmare.jpg"
		});
	});
	$("#playlist-add-Brianstorm").click(function() {
		myPlaylist.add({
			title:"Brianstorm",
				artist:"Arctic monkeys",
				mp3:"../audio/arctic/Brianstorm.mp3",
				oga:"audio/arctic/Brianstorm.mp3",
				poster: "img/Favourite Worst Nightmare.jpg"
		});
	});
	$("#playlist-add-da-frame").click(function() {
		myPlaylist.add({
			title:"Da Frame 2R",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"audio/arctic/Da Frame 2R.mp3",
				poster: "img/Favourite Worst Nightmare.jpg"
		});
	});
	$("#playlist-add-if-you").click(function() {
		myPlaylist.add({
			title:"If You Were There, Beware",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"audio/arctic/If You Were There, Beware.mp3",
				poster: "img/Favourite Worst Nightmare.jpg"
		});
	});
	$("#playlist-add-matador").click(function() {
		myPlaylist.add({
			title:"Matador",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"audio/arctic/Matador.mp3",
				poster: "img/Favourite Worst Nightmare.jpg"
		});
	});
	$("#playlist-add-old").click(function() {
		myPlaylist.add({
			title:"Old Yellow Bricks",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"audio/arctic/Old Yellow Bricks.mp3",
				poster: "Favourite Worst Nightmare.jpg"
		});
	});
	$("#playlist-add-only").click(function() {
		myPlaylist.add({
			title:"Only Ones Who Know",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"audio/arctic/Only Ones Who Know.mp3",
				poster: "img/Favourite Worst Nightmare.jpg"
		});
	});
	$("#playlist-add-the-bad").click(function() {
		myPlaylist.add({
			title:"The Bad Thing",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"audio/arctic/The Bad Thing.mp3",
				poster: "img/Favourite Worst Nightmare.jpg"
		});
	});
	$("#playlist-add-this-house").click(function() {
		myPlaylist.add({
			title:"This House Is A Circus",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"audio/arctic/This House Is A Circus.mp3",
				poster: "img/Favourite Worst Nightmare.jpg"
		});
	});
	$("#playlist-add-cornerstone").click(function() {
		myPlaylist.add({
			title:"cornerstone",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"audio/arctic/cornerstone.mp3",
				poster: "img/Humbug.jpg"
		});
	});
	$("#playlist-add-crying").click(function() {
		myPlaylist.add({
			title:"Crying Lightning",
				artist:"arctic monkeys",
				mp3:"audio/arctic/Crying Lightning.mp3",
				oga:"audio/arctic/Crying Lightning.mp3",
				poster: "img/Humbug.jpg"
		});
	});
	$("#playlist-add-suck").click(function() {
		myPlaylist.add({
			title:"Suck It And See",
				artist:"arctic monkeys",
				mp3:"../audio/arctic/505.mp3",
				oga:"audio/arctic/Suck It And See.mp3",
				poster: "img/Suck It And See.jpg"
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