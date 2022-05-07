(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"animation_HTML5_atlas_1", frames: [[966,141,602,111],[0,282,568,111],[0,747,668,17],[0,707,804,38],[1456,733,438,30],[806,733,648,26],[1142,478,760,79],[1570,141,320,79],[1570,222,296,57],[0,0,481,139],[483,0,481,139],[966,0,481,139],[1449,0,481,139],[0,141,481,139],[483,141,481,139],[966,254,572,113],[1131,661,533,70],[0,395,566,105],[1135,559,563,100],[0,502,564,101],[566,586,563,100],[1142,369,568,107],[568,481,565,103],[0,605,563,100],[570,369,570,110],[1540,281,275,60],[570,282,275,60],[1712,343,275,60]]},
		{name:"animation_HTML5_atlas_2", frames: [[994,725,637,111],[980,1393,481,139],[501,580,495,143],[497,870,481,142],[1463,1393,481,139],[980,1534,481,139],[998,580,495,143],[980,961,481,142],[980,1675,481,139],[1495,580,495,143],[497,1014,481,142],[1073,1816,481,139],[0,725,495,143],[1463,961,481,142],[1556,1534,481,139],[0,870,495,143],[980,1105,481,142],[0,0,499,143],[501,0,499,143],[1463,1675,481,139],[0,1015,495,143],[497,1158,481,142],[1002,0,499,143],[1503,0,499,143],[1556,1816,481,139],[0,1160,495,143],[1463,1105,481,142],[0,145,499,143],[501,145,499,143],[0,1305,495,143],[980,1249,481,142],[1002,145,499,143],[1503,145,499,143],[0,1450,495,143],[497,1302,481,142],[0,290,499,143],[501,290,499,143],[0,1595,495,143],[1463,1249,481,142],[1002,290,499,143],[1503,290,499,143],[0,1740,495,143],[497,1446,481,142],[0,435,499,143],[501,435,499,143],[0,1885,495,143],[497,1590,481,142],[1002,435,499,143],[1503,435,499,143],[497,725,495,143],[497,1734,481,142],[0,580,499,143],[497,1878,574,117],[994,838,576,121]]},
		{name:"animation_HTML5_atlas_3", frames: [[623,142,774,111],[602,255,738,111],[619,1039,704,111],[1325,1041,670,111],[1229,1282,499,143],[1229,1427,499,143],[1228,1572,499,143],[1224,1717,499,143],[1224,1862,499,143],[0,1834,599,135],[1246,0,620,140],[0,864,618,137],[616,1672,603,127],[623,0,621,140],[0,1560,599,137],[616,1801,606,126],[621,368,613,131],[1236,403,604,126],[0,143,600,145],[0,1140,585,142],[0,439,619,139],[620,636,583,136],[0,0,621,141],[1325,914,606,125],[1221,531,604,126],[1234,787,607,125],[1222,659,603,126],[621,501,598,133],[0,290,588,147],[617,1415,610,127],[587,1152,601,130],[1399,142,605,126],[0,580,618,138],[601,1284,602,129],[1190,1154,578,126],[620,774,600,132],[617,1544,609,126],[0,1003,617,135],[0,1699,614,133],[620,908,612,129],[0,1424,615,134],[1342,270,581,131],[0,1284,599,138],[0,720,599,142]]},
		{name:"animation_HTML5_atlas_4", frames: [[601,180,960,110],[598,652,923,110],[602,1099,885,110],[1197,1211,848,110],[0,1899,811,110],[1200,292,572,183],[602,1582,623,143],[602,1727,622,143],[1199,764,600,165],[1199,931,594,166],[0,1748,600,149],[1226,1727,622,142],[0,536,596,173],[595,1268,600,157],[0,0,599,179],[0,935,600,167],[601,0,599,178],[1227,1480,622,142],[0,1432,600,160],[1202,0,597,178],[0,1268,593,162],[0,1594,600,152],[602,764,595,170],[813,1872,622,143],[602,1427,590,153],[0,359,599,175],[1203,477,600,171],[601,292,597,176],[0,181,599,176],[601,477,600,173],[0,1104,600,162],[1197,1323,600,155],[0,764,600,169],[602,936,591,158]]},
		{name:"animation_HTML5_atlas_5", frames: [[0,831,1183,111],[0,944,1146,111],[0,1057,1109,111],[0,1170,1072,110],[0,1282,1034,110],[0,1679,997,110],[0,722,1430,107],[1185,935,599,184],[1432,0,599,185],[0,1791,599,182],[1201,1859,599,180],[1201,1676,598,181],[1432,187,599,185],[1111,1121,599,184],[0,1493,598,184],[1432,374,599,185],[1201,1493,599,181],[1432,561,599,185],[1432,748,599,185],[1036,1307,599,184],[600,1493,599,183],[601,1791,598,182],[0,0,1280,720]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.currentSoundStreamInMovieclip;
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		var pos = this.timeline.resolve(positionOrLabel);
		if (pos != null) { this.startStreamSoundsForTargetedFrame(pos); }
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		this.soundStreamDuration.forEach(function(value,key){
			key.instance.stop();
		});
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var _this = this;
			this.soundStreamDuration.forEach(function(value,key,arr){
				if((value.end) == currentFrame){
					key.instance.stop();
					if(_this.currentSoundStreamInMovieclip == key) { _this.currentSoundStreamInMovieclip = undefined; }
					arr.delete(key);
				}
			});
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			var _this = this;
			if(this.soundStreamDuration.size > 0){
				var maxDuration = 0;
				this.soundStreamDuration.forEach(function(value,key){
					if(value.end > maxDuration){
						maxDuration = value.end;
						_this.currentSoundStreamInMovieclip = key;
					}
				});
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if((deltaFrame >= 0) && this.ignorePause){
					cjs.MovieClip.prototype.play.call(this);
					this.ignorePause = false;
				}
				else if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
				else if(deltaFrame <= -2){
					cjs.MovieClip.prototype.stop.call(this);
					this.ignorePause = true;
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_91 = function() {
	this.initialize(ss["animation_HTML5_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_90 = function() {
	this.initialize(ss["animation_HTML5_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_89 = function() {
	this.initialize(ss["animation_HTML5_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_88 = function() {
	this.initialize(ss["animation_HTML5_atlas_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_87 = function() {
	this.initialize(ss["animation_HTML5_atlas_5"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_86 = function() {
	this.initialize(ss["animation_HTML5_atlas_5"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_85 = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_84 = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_83 = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_82 = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_81 = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_80 = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_79 = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_78 = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_77 = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_76 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_75 = function() {
	this.initialize(ss["animation_HTML5_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_74 = function() {
	this.initialize(ss["animation_HTML5_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_73 = function() {
	this.initialize(ss["animation_HTML5_atlas_5"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_72 = function() {
	this.initialize(ss["animation_HTML5_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_71 = function() {
	this.initialize(ss["animation_HTML5_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_70 = function() {
	this.initialize(ss["animation_HTML5_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_69 = function() {
	this.initialize(ss["animation_HTML5_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_68 = function() {
	this.initialize(ss["animation_HTML5_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_67 = function() {
	this.initialize(ss["animation_HTML5_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_66 = function() {
	this.initialize(ss["animation_HTML5_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_65 = function() {
	this.initialize(img.CachedBmp_65);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2378,793);


(lib.CachedBmp_64 = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_63 = function() {
	this.initialize(img.CachedBmp_63);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2360,319);


(lib.CachedBmp_62 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_61 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_60 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_59 = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_58 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_57 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_56 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_55 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_54 = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_53 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_52 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_51 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_50 = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_49 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_48 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_47 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_46 = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_43 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["animation_HTML5_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["animation_HTML5_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["animation_HTML5_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["animation_HTML5_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["animation_HTML5_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["animation_HTML5_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.BMP_6f67d743_db9c_41be_be57_6d39eac47331 = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.BMP_015c2447_2b06_4483_b57c_9f398fe9d5f3 = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.BMP_037c8a71_244e_4b49_8b9d_b90daf9e0fef = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.BMP_06bb2d09_75fc_440e_890a_84eae47d08e6 = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.BMP_0976ce78_ad27_4b20_a2f3_b433f740d673 = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.BMP_09ed5400_d29a_477e_a532_ed9f8ad000d1 = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.BMP_0b991ed3_1cd1_494c_9b0e_28129b2fcff7 = function() {
	this.initialize(ss["animation_HTML5_atlas_5"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.BMP_0c4babce_1d0d_4e78_8ece_8d5dd0084baa = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.BMP_0cc0fc4b_3b33_4ce6_af8a_051718a2fddc = function() {
	this.initialize(ss["animation_HTML5_atlas_2"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.BMP_0d4d9633_f3f9_4b0f_8064_ff23797c453e = function() {
	this.initialize(ss["animation_HTML5_atlas_5"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.BMP_0e70bdff_7fce_4042_962a_c56acae092e4 = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.BMP_149da65d_79ab_4f36_983d_d1b24ccca10b = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.BMP_15b8d0fa_5628_4f59_8380_0b0612e96ee2 = function() {
	this.initialize(ss["animation_HTML5_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.BMP_1805c3c4_8349_44b6_8e0c_504d037ac302 = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.BMP_22c5dfb8_e5e1_4bbd_8034_ded4a67a863f = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.BMP_24f3cfd2_b296_4630_9729_29088ef5f25c = function() {
	this.initialize(ss["animation_HTML5_atlas_5"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.BMP_2bcf5801_1fad_42ca_94f7_982351c7e3a6 = function() {
	this.initialize(ss["animation_HTML5_atlas_5"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.BMP_3453eb44_4dd4_4f28_bddc_00623332dc40 = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.BMP_3502986e_9d03_4079_bf6e_03942615d6f3 = function() {
	this.initialize(ss["animation_HTML5_atlas_5"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.BMP_356d398d_a133_429a_86d2_2b7259629666 = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.BMP_36163b2c_c81e_4fa5_aedf_a87c4286a063 = function() {
	this.initialize(ss["animation_HTML5_atlas_5"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.BMP_3af5021e_c9e7_48ea_8d1b_4003dfa521b1 = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.BMP_4169ff20_fb2e_4263_8e80_803e754c1ff2 = function() {
	this.initialize(ss["animation_HTML5_atlas_5"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.BMP_499e1bc0_117d_4994_b1d5_16bf56cc04ca = function() {
	this.initialize(ss["animation_HTML5_atlas_5"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.BMP_4a16508f_77db_466b_a922_ee53246d7c43 = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.BMP_4bb6f29b_9555_4b0b_8259_8c413b2d67d5 = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.BMP_4e38dac6_dfb6_4b8e_9f8c_38cfa5772ccf = function() {
	this.initialize(ss["animation_HTML5_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.BMP_551abb52_35e8_40d0_81e9_aeb5fbd79e12 = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.BMP_55865c66_86ce_44f4_a64a_070b9aac9fe2 = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.BMP_568a2ab8_28b5_4397_b24c_ea619926a8b6 = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.BMP_5864ed2e_a7fa_44ac_8184_0dc783f8508f = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.BMP_59be8ba5_8b5b_4dcb_b5c9_338525351a59 = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.BMP_5a7a9bb9_86a7_4ce2_8e37_a98be57727d8 = function() {
	this.initialize(ss["animation_HTML5_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.BMP_5dec786d_ddeb_46b9_8b6a_983f23a19f22 = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.BMP_61e00e6f_caf9_45bc_9f9a_a391dba72de6 = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.BMP_639cb577_1fdc_4889_872e_a49c5b9eaafb = function() {
	this.initialize(ss["animation_HTML5_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.BMP_65075cc2_cfc7_447f_b795_5be2f48bdc64 = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.BMP_6ccb5b57_0e97_4bb7_a8f7_5dba09f6cc4e = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.BMP_6f2fc8d7_8d9c_475d_b42b_cb1803323dc6 = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.BMP_6f623bfe_d77e_4c9e_967d_c70488b33f2f = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.BMP_706f6ce8_7f53_4825_b159_3e11ec053e65 = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.BMP_716a5461_692d_4bca_9d4c_57adc26c8e3d = function() {
	this.initialize(ss["animation_HTML5_atlas_5"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.BMP_7275932c_5f60_4d16_9dc1_081cf7c130ca = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.BMP_72922261_3f4f_4613_8ff4_0277cf5c0d84 = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.BMP_74ba586e_316e_4741_9029_9552f66954cb = function() {
	this.initialize(ss["animation_HTML5_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.BMP_7921bf48_bade_4b93_83ec_2132e662b8aa = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.BMP_7c0e52cc_5db7_4d88_96cd_5f2e5693c8f7 = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.BMP_7f726ff1_eb1b_453d_9b73_ae9c06fdbd5c = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.BMP_83785358_e7d9_4fa9_b571_27e47a16490e = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.BMP_878414a4_93c7_4256_8c14_a3d63db6e02f = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.BMP_87c0b2fd_ccb4_4efc_a8ee_c60553b2724b = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.BMP_8a96df35_950c_4ec5_9908_34315e4d9340 = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.BMP_8c453466_93db_468c_a1e8_bcace640d540 = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.BMP_8c7900c0_5235_4643_be8a_dae67074bd7e = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.BMP_92cfe24c_4d79_40d8_981e_3f025726c890 = function() {
	this.initialize(ss["animation_HTML5_atlas_5"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.BMP_95c185e9_bdc7_4923_82cd_69dfbe115395 = function() {
	this.initialize(ss["animation_HTML5_atlas_5"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.BMP_98f504f7_e92c_4721_b9b2_b0b72566044d = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.BMP_9ab02a1f_84ba_4e0e_a325_149ba0ebc2cc = function() {
	this.initialize(ss["animation_HTML5_atlas_5"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.BMP_9bfca5c8_627b_4213_a496_1de6ae86015d = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.BMP_9fd77115_6091_43bc_aee7_0a5a9ed777f3 = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.BMP_a1f427d7_90bc_419c_b54b_0ea35cc00e4e = function() {
	this.initialize(ss["animation_HTML5_atlas_5"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.BMP_ab87b4f9_4329_4f9a_b119_94a7dcba0cfb = function() {
	this.initialize(ss["animation_HTML5_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.BMP_abb2a406_d363_4687_963b_8b24f40b46c9 = function() {
	this.initialize(ss["animation_HTML5_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.BMP_b2524821_1e97_4cd5_ad4e_b5e3e3d5ba37 = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.BMP_b41006aa_9220_477d_87a5_77f25a998214 = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.BMP_b4dd5a80_48ea_45f9_be13_0af491bc3592 = function() {
	this.initialize(ss["animation_HTML5_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.BMP_ba647800_9f58_4ac9_a6eb_73eacba6fc54 = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.BMP_ba713ed9_669b_431d_b0c3_937aa58107f8 = function() {
	this.initialize(ss["animation_HTML5_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.BMP_bafcea77_4087_43bf_8563_cd9dd8b32253 = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.BMP_c1144105_6f50_440c_994e_05c3eb44c928 = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.BMP_c400b9de_fbd9_45c5_b34d_6fab5bfbd714 = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.BMP_c7dbd50f_6c07_40f0_b4dc_6f49d7092f98 = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.BMP_c9419a74_9a2b_43d2_a4c9_f3f6e2350fd8 = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.BMP_c9481e22_df12_41f7_842c_2ae77c2b13d1 = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.BMP_cb2801a1_6a81_4074_95dd_de3c7436a484 = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.BMP_cb5b5b9d_6217_4d7a_b61b_5596c4676795 = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.BMP_cdafd4be_e221_49a7_97ac_34fc964ae7bc = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.BMP_ce0cbec0_fceb_4d51_92f5_6a78bd98a1b2 = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.BMP_d36ab845_951b_445d_a65f_49e00f84e825 = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.BMP_df01adc9_75a8_458e_b3a7_b3ce22cad56b = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.BMP_e7a9d657_52c1_4e00_b86b_3dc57662b489 = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.BMP_efa64642_7e6e_4294_96e3_e73693945ece = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.BMP_f4607a4b_f34f_45cf_a8bc_dab771e406ca = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.BMP_f534c50b_fbf2_40a7_be13_72f104e8e616 = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.BMP_f563d470_1c48_48b1_b19f_c3a22c6874af = function() {
	this.initialize(ss["animation_HTML5_atlas_5"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.BMP_f7cd3264_f6d6_4362_ac18_c955dcc7cd1c = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.BMP_fa4cbb09_0f7f_4513_bb87_c52e3b4dc803 = function() {
	this.initialize(ss["animation_HTML5_atlas_5"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.BMP_fa661b7c_73dd_4724_8186_f2d6e5c481e3 = function() {
	this.initialize(ss["animation_HTML5_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.BMP_faa4fb1e_9ec7_4ce9_a1f4_ebbe7f9851c6 = function() {
	this.initialize(ss["animation_HTML5_atlas_4"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.BMP_ff82c4fb_5247_40f8_8d14_621c2a1c2e5f = function() {
	this.initialize(ss["animation_HTML5_atlas_3"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.Chrome = function() {
	this.initialize(ss["animation_HTML5_atlas_5"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.HoverButton = function() {
	this.initialize(ss["animation_HTML5_atlas_1"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.PressedButton = function() {
	this.initialize(ss["animation_HTML5_atlas_1"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.RestButton = function() {
	this.initialize(ss["animation_HTML5_atlas_1"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.WarpedAsset_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BMP_4e38dac6_dfb6_4b8e_9f8c_38cfa5772ccf();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,533,70);


(lib.StartBTN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		playSound("hover");
	}
	this.frame_2 = function() {
		playSound("press");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(2));

	// label
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AG3CEIAAg5IA5AAIAAA5gAEHCEIAAhnIhgigIBBAAIA+BoIA9hoIBBAAIhiChIAABmgACLCEIgUg7IhjAAIgUA7Ig5AAIBikHIA7AAIBjEHgAAjAeIBFAAIghhgIgBAAgAj5CEIAAkHIA6AAIAADWICBAAIAAAxgAnwCEIAAkHIB3AAQAZAAASAHQARAHALAMQALAMAFAPQAFAQAAAQQAAAQgFAPQgFAPgLALQgKAMgSAHQgSAHgZAAIg9AAIAABfgAm2gHIBBgCQAJgBAHgEQAHgEAFgIQAEgIAAgMQAAgNgEgIQgFgHgHgFQgHgEgJgBIhBgCgAHGA1IgOhxIAAhHIA3AAIAABHIgOBxg");
	this.shape.setTransform(144.6,28.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// skins
	this.instance = new lib.RestButton();

	this.instance_1 = new lib.HoverButton();

	this.instance_2 = new lib.PressedButton();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,275,60);


(lib.Scene_1_sun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sun
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC66").s().p("Au5O7QmMmMAAovQAAouGMmLQGLmMIuAAQIwAAGLGMQGLGLAAIuQAAIvmLGMQmLGLowAAQouAAmLmLg");
	this.shape.setTransform(1047,219);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC66").s().p("Au6O7QmLmMAAovQAAouGLmMQGMmLIuAAQIvAAGLGLQGMGMAAIuQAAIvmMGMQmLGLovAAQouAAmMmLg");
	this.shape_1.setTransform(1046.95,219.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC66").s().p("Au6O6QmLmLAAovQAAouGLmLQGMmMIuAAQIvAAGLGMQGMGLAAIuQAAIvmMGLQmLGMovAAQouAAmMmMg");
	this.shape_2.setTransform(1046.85,219.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC66").s().p("Au6O7QmLmMAAovQAAouGLmLQGMmMIuAAQIvAAGLGMQGMGLAAIuQAAIvmMGMQmLGLovAAQouAAmMmLg");
	this.shape_3.setTransform(1046.625,219.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC66").s().p("Au6O6QmLmLAAovQAAouGLmMQGMmLIuAAQIwAAGLGLQGLGMAAIuQAAIvmLGLQmLGMowAAQouAAmMmMg");
	this.shape_4.setTransform(1045.925,219.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC66").s().p("Au6O7QmLmMAAovQAAouGLmMQGMmLIuAAQIvAAGMGLQGLGMABIuQgBIvmLGMQmMGLovAAQouAAmMmLg");
	this.shape_5.setTransform(1045.45,220.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC66").s().p("Au6O6QmLmLgBovQABovGLmLQGMmMIuAAQIvAAGLGMQGMGLAAIvQAAIvmMGLQmLGNovgBQouABmMmNg");
	this.shape_6.setTransform(1044.9,220.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC66").s().p("Au6O7QmMmLAAowQAAouGMmMQGMmLIuAAQIwAAGLGLQGMGMAAIuQAAIwmMGLQmLGMowAAQouAAmMmMg");
	this.shape_7.setTransform(1044.225,220.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCB66").s().p("Au6O7QmMmMAAovQAAouGMmMQGMmMIuAAQIwAAGLGMQGMGMAAIuQAAIvmMGMQmLGMowAAQouAAmMmMg");
	this.shape_8.setTransform(1043.5,221.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCB66").s().p("Au7O7QmLmMAAovQAAovGLmMQGMmLIvAAQIwAAGLGLQGMGMAAIvQAAIvmMGMQmLGMowAAQovAAmMmMg");
	this.shape_9.setTransform(1041.775,222.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCB66").s().p("Au7O8QmLmMgBowQABouGLmMQGNmNIuABQIwgBGMGNQGMGMAAIuQAAIwmMGMQmMGLowAAQouAAmNmLg");
	this.shape_10.setTransform(1040.75,223.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCB66").s().p("Au7O8QmMmMAAowQAAovGMmMQGMmMIvAAQIwAAGMGMQGMGMAAIvQAAIwmMGMQmMGMowAAQovAAmMmMg");
	this.shape_11.setTransform(1039.675,223.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCB66").s().p("Au7O8QmMmNAAovQAAovGMmMQGMmMIvAAQIwAAGMGMQGMGMAAIvQAAIvmMGNQmMGMowAAQovAAmMmMg");
	this.shape_12.setTransform(1038.5,224.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCA66").s().p("Au7O8QmNmMAAowQAAovGNmMQGMmNIvAAQIxAAGLGNQGNGMAAIvQAAIwmNGMQmLGMoxABQovgBmMmMg");
	this.shape_13.setTransform(1037.25,225.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCA66").s().p("Au8O8QmMmMAAowQAAovGMmMQGNmNIvAAQIwAAGMGNQGNGMAAIvQAAIwmNGMQmMGNowAAQovAAmNmNg");
	this.shape_14.setTransform(1035.925,226.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCA66").s().p("Au8O9QmMmNAAowQAAovGMmNQGNmMIvAAQIxAAGMGMQGMGNAAIvQAAIwmMGNQmMGMoxAAQovAAmNmMg");
	this.shape_15.setTransform(1034.475,227.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFCA66").s().p("Au8O9QmNmMAAoxQAAowGNmMQGNmNIvAAQIxAAGMGNQGMGMAAIwQAAIxmMGMQmMGNoxAAQovAAmNmNg");
	this.shape_16.setTransform(1032.95,228.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFC966").s().p("Au8O9QmNmMAAoxQAAowGNmMQGMmNIwAAQIxAAGMGNQGNGMAAIwQAAIxmNGMQmMGNoxAAQowAAmMmNg");
	this.shape_17.setTransform(1031.35,229.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFC965").s().p("Au9O+QmMmNAAoxQAAowGMmMQGNmNIwAAQIxAAGMGNQGNGMAAIwQAAIxmNGNQmMGMoxAAQowAAmNmMg");
	this.shape_18.setTransform(1029.675,230.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFC965").s().p("Au9O+QmNmNAAoxQAAowGNmNQGNmMIwAAQIyAAGMGMQGNGNAAIwQAAIxmNGNQmMGMoyABQowgBmNmMg");
	this.shape_19.setTransform(1027.875,231.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFC865").s().p("Au9O+QmNmNAAoxQAAowGNmNQGNmNIwAAQIyAAGMGNQGNGNAAIwQAAIxmNGNQmMGNoyAAQowAAmNmNg");
	this.shape_20.setTransform(1026.025,232.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFC865").s().p("Au+O+QmNmNAAoxQAAowGNmOQGOmNIwAAQIyAAGMGNQGOGOAAIwQAAIxmOGNQmMGOoyAAQowAAmOmOg");
	this.shape_21.setTransform(1024.075,233.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFC865").s().p("Au+O/QmNmOAAoxQAAoxGNmNQGOmNIwAAQIyAAGNGNQGNGNAAIxQAAIxmNGOQmNGNoyAAQowAAmOmNg");
	this.shape_22.setTransform(1022.025,235.275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFC765").s().p("Au+O/QmOmNABoyQgBoxGOmNQGOmOIwAAQIyAAGNGOQGNGNAAIxQAAIymNGNQmNGNoyABQowgBmOmNg");
	this.shape_23.setTransform(1019.9,236.65);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFC765").s().p("Au+PAQmOmOAAoyQAAoxGOmOQGNmNIxAAQIyAAGOGNQGNGOAAIxQAAIymNGOQmOGNoyAAQoxAAmNmNg");
	this.shape_24.setTransform(1017.7,238.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFC765").s().p("Au/PAQmOmOABoyQgBoxGOmOQGOmOIxAAQIyAAGOGOQGNGOABIxQgBIymNGOQmOGOoyAAQoxAAmOmOg");
	this.shape_25.setTransform(1015.4,239.575);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFC665").s().p("AvAPBQmNmOAAozQAAoxGNmOQGOmOIyAAQIzAAGNGOQGOGOAAIxQAAIzmOGOQmNGNozAAQoyAAmOmNg");
	this.shape_26.setTransform(1013.025,241.125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFC665").s().p("AvAPBQmOmPAAoyQAAoxGOmPQGOmOIyAAQIzAAGNGOQGPGPAAIxQAAIymPGPQmNGOozAAQoyAAmOmOg");
	this.shape_27.setTransform(1010.55,242.75);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFC565").s().p("AvAPCQmPmPAAozQAAoyGPmOQGOmPIyAAQIzAAGOGPQGOGOAAIyQAAIzmOGPQmOGNozAAQoyAAmOmNg");
	this.shape_28.setTransform(1008,244.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFC565").s().p("AvBPCQmOmPAAozQAAoyGOmPQGPmOIyAAQI0AAGOGOQGOGPAAIyQAAIzmOGPQmOGOo0AAQoyAAmPmOg");
	this.shape_29.setTransform(1005.325,246.125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFC465").s().p("AvBPCQmPmPAAozQAAozGPmOQGOmPIzAAQI0AAGOGPQGPGOAAIzQAAIzmPGPQmOGPo0AAQozAAmOmPg");
	this.shape_30.setTransform(1002.625,247.925);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFC465").s().p("AvCPCQmOmOgBo0QABozGOmOQGPmQIzAAQI0AAGOGQQGQGOAAIzQAAI0mQGOQmOGQo0AAQozAAmPmQg");
	this.shape_31.setTransform(999.8,249.75);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFC465").s().p("AvCPDQmPmPAAo0QAAozGPmPQGPmPIzAAQI1AAGOGPQGPGPAAIzQAAI0mPGPQmOGPo1AAQozAAmPmPg");
	this.shape_32.setTransform(996.875,251.625);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFC364").s().p("AvDPDQmPmOAAo1QAAozGPmQQGPmPI0AAQI0AAGQGPQGPGQAAIzQAAI1mPGOQmQGQo0AAQo0AAmPmQg");
	this.shape_33.setTransform(993.9,253.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFC264").s().p("AvDPEQmQmQAAo0QAAo0GQmPQGPmQI0AAQI1AAGPGQQGQGPAAI0QAAI0mQGQQmPGQo1AAQo0AAmPmQg");
	this.shape_34.setTransform(990.825,255.625);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFC264").s().p("AvEPFQmQmQABo1QgBo0GQmQQGQmQI0ABQI2gBGOGQQGQGQAAI0QAAI1mQGQQmOGQo2AAQo0AAmQmQg");
	this.shape_35.setTransform(987.65,257.65);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFC164").s().p("AvFPFQmQmQABo1QgBo0GQmQQGRmQI0AAQI2AAGPGQQGQGQAAI0QAAI1mQGQQmPGQo2AAQo0AAmRmQg");
	this.shape_36.setTransform(984.4,259.775);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFC164").s().p("AvFPGQmQmQAAo2QAAo0GQmRQGRmQI0AAQI2AAGQGQQGQGRAAI0QAAI2mQGQQmQGQo2AAQo0AAmRmQg");
	this.shape_37.setTransform(981.05,261.95);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFC064").s().p("AvFPGQmRmQAAo2QAAo1GRmQQGQmRI1AAQI3AAGQGRQGQGQAAI1QAAI2mQGQQmQGRo3AAQo1AAmQmRg");
	this.shape_38.setTransform(977.65,264.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFC064").s().p("AvGPHQmRmRAAo2QAAo1GRmRQGRmRI1AAQI3AAGQGRQGRGRAAI1QAAI2mRGRQmQGRo3AAQo1AAmRmRg");
	this.shape_39.setTransform(974.125,266.475);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFBF64").s().p("AvHPIQmRmRAAo3QAAo2GRmRQGRmRI2AAQI3AAGRGRQGRGRAAI2QAAI3mRGRQmRGRo3AAQo2AAmRmRg");
	this.shape_40.setTransform(970.525,268.825);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFBE64").s().p("AvHPIQmSmRAAo3QAAo2GSmRQGRmSI2AAQI4AAGQGSQGSGRAAI2QAAI3mSGRQmQGSo4AAQo2AAmRmSg");
	this.shape_41.setTransform(966.825,271.225);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFBE64").s().p("AvIPJQmSmSABo3QgBo3GSmRQGSmRI2gBQI4ABGRGRQGRGRAAI3QAAI3mRGSQmRGSo4AAQo2AAmSmSg");
	this.shape_42.setTransform(963.05,273.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFBD63").s().p("AvIPJQmSmRAAo4QAAo3GSmRQGRmTI3ABQI4gBGSGTQGSGRAAI3QAAI4mSGRQmSGTo4AAQo3AAmRmTg");
	this.shape_43.setTransform(959.2,276.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFBC63").s().p("AvJPLQmTmTABo4QgBo3GTmSQGSmSI3gBQI5ABGRGSQGTGSAAI3QAAI4mTGTQmRGRo5AAQo3AAmSmRg");
	this.shape_44.setTransform(955.25,278.75);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFBC63").s().p("AvKPLQmSmSAAo5QAAo4GSmSQGSmSI4AAQI5AAGSGSQGSGSAAI4QAAI5mSGSQmSGSo5ABQo4gBmSmSg");
	this.shape_45.setTransform(951.225,281.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFBB63").s().p("AvKPMQmUmTAAo5QAAo4GUmTQGSmSI4AAQI5AAGTGSQGTGTAAI4QAAI5mTGTQmTGSo5AAQo4AAmSmSg");
	this.shape_46.setTransform(947.1,284.075);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFBA63").s().p("AvMPMQmTmTAAo5QAAo5GTmTQGTmTI5AAQI6AAGSGTQGTGTAAI5QAAI5mTGTQmSGTo6ABQo5gBmTmTg");
	this.shape_47.setTransform(942.9,286.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFBA63").s().p("AvMPNQmUmTAAo6QAAo5GUmTQGTmUI5AAQI7AAGSGUQGTGTAAI5QAAI6mTGTQmSGTo7AAQo5AAmTmTg");
	this.shape_48.setTransform(938.6,289.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFB963").s().p("AvNPOQmUmTAAo7QAAo6GUmTQGUmUI5ABQI7gBGTGUQGUGTAAI6QAAI7mUGTQmTGUo7gBQo5ABmUmUg");
	this.shape_49.setTransform(934.225,292.45);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFB863").s().p("AvOPPQmUmUAAo7QAAo6GUmUQGUmUI6AAQI7AAGUGUQGUGUAAI6QAAI7mUGUQmUGUo7AAQo6AAmUmUg");
	this.shape_50.setTransform(929.775,295.375);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFB762").s().p("AvPPQQmUmVAAo7QAAo6GUmUQGVmVI6AAQI8AAGTGVQGVGUAAI6QAAI7mVGVQmTGUo8AAQo6AAmVmUg");
	this.shape_51.setTransform(925.225,298.325);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFB762").s().p("AvPPQQmVmUAAo8QAAo7GVmUQGUmVI7AAQI8AAGUGVQGVGUAAI7QAAI8mVGUQmUGVo8AAQo7AAmUmVg");
	this.shape_52.setTransform(920.575,301.375);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFB662").s().p("AvQPRQmVmVAAo8QAAo8GVmUQGVmVI7AAQI8AAGVGVQGVGUAAI8QAAI8mVGVQmVGVo8AAQo8AAmUmVg");
	this.shape_53.setTransform(915.85,304.45);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFB562").s().p("AvRPSQmVmVAAo9QAAo8GVmVQGVmVI8AAQI9AAGVGVQGVGVAAI8QAAI9mVGVQmVGVo9AAQo8AAmVmVg");
	this.shape_54.setTransform(911.025,307.575);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFB462").s().p("AvSPTQmVmWAAo9QAAo8GVmWQGWmVI8AAQI+AAGVGVQGVGWAAI8QAAI9mVGWQmVGVo+AAQo8AAmWmVg");
	this.shape_55.setTransform(906.125,310.775);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFB362").s().p("AvTPUQmWmWAAo+QAAo9GWmWQGWmWI9AAQI+AAGVGWQGWGWAAI9QAAI+mWGWQmVGWo+AAQo9AAmWmWg");
	this.shape_56.setTransform(901.15,314.025);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFB262").s().p("AvUPVQmWmXAAo+QAAo9GWmXQGXmWI9AAQI/AAGWGWQGWGXAAI9QAAI+mWGXQmWGWo/AAQo9AAmXmWg");
	this.shape_57.setTransform(896.075,317.325);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFB261").s().p("AvVPWQmWmXAAo/QAAo+GWmWQGXmXI+AAQI/AAGWGXQGXGWAAI+QAAI/mXGXQmWGWo/AAQo+AAmXmWg");
	this.shape_58.setTransform(890.925,320.675);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFB161").s().p("AvVPXQmXmXAApAQAAo+GXmYQGXmXI+AAQJAAAGWGXQGXGYAAI+QAAJAmXGXQmWGWpAAAQo+AAmXmWg");
	this.shape_59.setTransform(885.675,324.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFB061").s().p("AvWPXQmYmXAApAQAAo/GYmXQGXmYI/AAQJAAAGXGYQGYGXAAI/QAAJAmYGXQmXGYpAAAQo/AAmXmYg");
	this.shape_60.setTransform(880.325,327.575);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFAF61").s().p("AvXPZQmYmYAApBQAApAGYmXQGXmYJAAAQJBAAGXGYQGYGXAAJAQAAJBmYGYQmXGXpBAAQpAAAmXmXg");
	this.shape_61.setTransform(874.9,331.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFAE61").s().p("AvYPZQmZmYABpBQgBpAGZmYQGYmYJAAAQJCAAGYGYQGXGYAAJAQAAJBmXGYQmYGZpCgBQpAABmYmZg");
	this.shape_62.setTransform(869.4,334.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFAD61").s().p("AvZPaQmZmYAApCQAApBGZmYQGYmZJBAAQJCAAGYGZQGZGYAAJBQAAJCmZGYQmYGZpCAAQpBAAmYmZg");
	this.shape_63.setTransform(863.825,338.325);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFAC60").s().p("AvaPbQmZmZAApCQAApCGZmYQGZmZJBAAQJDAAGYGZQGZGYAAJCQAAJCmZGZQmYGZpDAAQpBAAmZmZg");
	this.shape_64.setTransform(858.125,342.05);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFAB60").s().p("AvbPcQmamZAApDQAApCGamZQGZmaJCAAQJDAAGZGaQGaGZAAJCQAAJDmaGZQmZGZpDAAQpCAAmZmZg");
	this.shape_65.setTransform(852.375,345.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFAA60").s().p("AvcPdQmamaAApDQAApCGamaQGamaJCAAQJEAAGaGaQGZGaAAJCQAAJDmZGaQmaGapEAAQpCAAmamag");
	this.shape_66.setTransform(846.5,349.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFA960").s().p("AvdPeQmamaAApEQAApDGamaQGamaJDAAQJEAAGaGaQGaGaAAJDQAAJEmaGaQmaGapEAAQpDAAmamag");
	this.shape_67.setTransform(840.575,353.475);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFA860").s().p("AvePfQmbmaAApFQAApEGbmaQGambJEAAQJFAAGaGbQGbGaAAJEQAAJFmbGaQmaGbpFAAQpEAAmambg");
	this.shape_68.setTransform(834.55,357.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFA760").s().p("AvfPgQmbmbAApFQAApFGbmaQGbmcJEAAQJGAAGaGcQGbGaAAJFQAAJFmbGbQmaGbpGABQpEgBmbmbg");
	this.shape_69.setTransform(828.425,361.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFA65F").s().p("AvgPhQmcmbAApGQAApFGcmbQGbmcJFAAQJGAAGbGcQGcGbAAJFQAAJGmcGbQmbGcpGAAQpFAAmbmcg");
	this.shape_70.setTransform(822.225,365.425);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFA55F").s().p("AviPiQmbmcgBpGQABpGGbmbQGdmcJFAAQJHAAGbGcQGdGbAAJGQAAJGmdGcQmbGcpHAAQpFAAmdmcg");
	this.shape_71.setTransform(815.95,369.525);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFA45F").s().p("AviPjQmdmcAApHQAApGGdmcQGcmdJGAAQJIAAGbGdQGdGcAAJGQAAJHmdGcQmbGdpIAAQpGAAmcmdg");
	this.shape_72.setTransform(809.55,373.675);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFA35F").s().p("AvkPkQmcmcgBpIQABpHGcmcQGemeJGABQJIgBGdGeQGcGcAAJHQAAJImcGcQmdGepIgBQpGABmemeg");
	this.shape_73.setTransform(803.1,377.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFA25F").s().p("AvlPlQmdmdAApIQAApHGdmeQGemdJHAAQJJAAGdGdQGdGeAAJHQAAJImdGdQmdGepJAAQpHAAmemeg");
	this.shape_74.setTransform(796.575,382.15);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFA05E").s().p("AvmPnQmemeAApJQAApIGemeQGemeJIAAQJKAAGdGeQGeGeAAJIQAAJJmeGeQmdGepKAAQpIAAmemeg");
	this.shape_75.setTransform(789.925,386.475);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF9F5E").s().p("AvnPoQmfmfABpJQgBpJGfmeQGfmfJIAAQJKAAGeGfQGfGeAAJJQAAJJmfGfQmeGfpKgBQpIABmfmfg");
	this.shape_76.setTransform(783.2,390.85);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF9E5E").s().p("AvoPpQmfmfAApKQAApJGfmfQGfmfJJAAQJLAAGeGfQGfGfAAJJQAAJKmfGfQmeGfpLAAQpJAAmfmfg");
	this.shape_77.setTransform(776.4,395.275);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF9D5E").s().p("AvqPqQmfmfAApLQAApKGfmfQGgmgJKAAQJLAAGfGgQGgGfAAJKQAAJLmgGfQmfGgpLAAQpKAAmgmgg");
	this.shape_78.setTransform(769.525,399.775);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF9C5E").s().p("AvrPsQmgmgABpMQgBpKGgmhQGgmgJLABQJMgBGgGgQGgGhAAJKQAAJMmgGgQmgGgpMgBQpLABmgmgg");
	this.shape_79.setTransform(762.55,404.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF9B5D").s().p("AvsPtQmgmhAApMQAApMGgmgQGgmgJMAAQJNAAGgGgQGgGgAAJMQAAJMmgGhQmgGgpNAAQpMAAmgmgg");
	this.shape_80.setTransform(755.475,408.925);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF995D").s().p("AvtPuQmhmhAApNQAApMGhmhQGhmhJMAAQJOAAGgGhQGhGhAAJMQAAJNmhGhQmgGhpOAAQpMAAmhmhg");
	this.shape_81.setTransform(748.3,413.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF985D").s().p("AvuPvQmimhAApOQAApNGimiQGhmhJNAAQJOAAGhGhQGiGiAAJNQAAJOmiGhQmhGipOAAQpNAAmhmig");
	this.shape_82.setTransform(741.075,418.325);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF975D").s().p("AvwPxQmimiABpPQgBpOGimiQGimiJOAAQJPAAGhGiQGiGiABJOQgBJPmiGiQmhGipPAAQpOAAmimig");
	this.shape_83.setTransform(733.75,423.075);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF965D").s().p("AvxPyQmimjAApPQAApPGimiQGjmiJOAAQJQAAGiGiQGiGiAAJPQAAJPmiGjQmiGipQAAQpOAAmjmig");
	this.shape_84.setTransform(726.325,427.925);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF945C").s().p("AvyPzQmjmjAApQQAApPGjmjQGjmjJPAAQJRAAGiGjQGjGjAAJPQAAJQmjGjQmiGjpRAAQpPAAmjmjg");
	this.shape_85.setTransform(718.825,432.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF935C").s().p("AvzP1QmkmkAApRQAApQGkmjQGjmkJQAAQJSAAGjGkQGjGjAAJQQAAJRmjGkQmjGjpSAAQpQAAmjmjg");
	this.shape_86.setTransform(711.25,437.75);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF925C").s().p("Av1P2QmkmlAApRQAApRGkmkQGkmkJRAAQJSAAGkGkQGkGkAAJRQAAJRmkGlQmkGkpSAAQpRAAmkmkg");
	this.shape_87.setTransform(703.55,442.75);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF915C").s().p("Av2P3QmlmkAApTQAApSGlmkQGkmlJSAAQJTAAGkGlQGlGkAAJSQAAJTmlGkQmkGlpTAAQpSAAmkmlg");
	this.shape_88.setTransform(695.8,447.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF8F5B").s().p("Av4P4QmlmlAApTQAApTGlmlQGmmlJSAAQJUAAGkGlQGmGlAAJTQAAJTmmGlQmkGmpUAAQpSAAmmmmg");
	this.shape_89.setTransform(687.975,452.925);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF8E5B").s().p("Av5P6QmmmmAApUQAApTGmmmQGmmmJTAAQJVAAGlGmQGmGmAAJTQAAJUmmGmQmlGmpVAAQpTAAmmmmg");
	this.shape_90.setTransform(680.025,458.075);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF8C5B").s().p("Av6P7QmnmmAApVQAApUGnmmQGmmnJUAAQJWAAGlGnQGmGmAAJUQAAJVmmGmQmlGmpWAAQpUAAmmmmg");
	this.shape_91.setTransform(672,463.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FF8B5B").s().p("Av8P9QmmmoAApVQAApVGmmnQGnmmJVAAQJWAAGnGmQGnGnAAJVQAAJVmnGoQmnGnpWAAQpVAAmnmng");
	this.shape_92.setTransform(663.9,468.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF8A5B").s().p("Av9P+QmnmogBpWQABpWGnmnQGnmoJWAAQJXAAGnGoQGnGnABJWQgBJWmnGoQmnGopXAAQpWAAmnmog");
	this.shape_93.setTransform(655.7,473.925);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FF885A").s().p("Av/P/QmomoAApXQAApXGomoQGpmoJWAAQJYAAGnGoQGpGoAAJXQAAJXmpGoQmnGppYAAQpWAAmpmpg");
	this.shape_94.setTransform(647.425,479.325);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FF875A").s().p("AwAQBQmpmpAApYQAApYGpmoQGpmpJXAAQJZAAGoGpQGpGoAAJYQAAJYmpGpQmoGppZAAQpXAAmpmpg");
	this.shape_95.setTransform(639.025,484.775);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FF855A").s().p("AwBQCQmqmpAApZQAApYGqmpQGpmqJYAAQJaAAGpGqQGpGpAAJYQAAJZmpGpQmpGqpaAAQpYAAmpmqg");
	this.shape_96.setTransform(630.575,490.275);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF845A").s().p("AwDQEQmqmqAApaQAApZGqmqQGqmqJZAAQJaAAGqGqQGqGqAAJZQAAJamqGqQmqGqpaAAQpZAAmqmqg");
	this.shape_97.setTransform(622.05,495.825);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FF8359").s().p("AwEQGQmrmrAApbQAApaGrmqQGrmrJZAAQJbAAGqGrQGrGqAAJaQAAJbmrGrQmqGqpbAAQpZAAmrmqg");
	this.shape_98.setTransform(613.4,501.45);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF8159").s().p("AwGQHQmrmrAApcQAApbGrmrQGrmrJbAAQJcAAGrGrQGrGrAAJbQAAJcmrGrQmrGrpcAAQpbAAmrmrg");
	this.shape_99.setTransform(604.7,507.15);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF8059").s().p("AwIQIQmrmrAApdQAApcGrmrQGsmsJcAAQJdAAGrGsQGsGrAAJcQAAJdmsGrQmrGspdAAQpcAAmsmsg");
	this.shape_100.setTransform(595.925,512.875);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF7E59").s().p("AwJQKQmsmtAApdQAApdGsmsQGsmsJdAAQJeAAGsGsQGsGsAAJdQAAJdmsGtQmsGspeAAQpdAAmsmsg");
	this.shape_101.setTransform(587.025,518.675);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FF7D58").s().p("AwLQLQmtmsABpfQgBpdGtmuQGumtJdABQJfgBGsGtQGuGuAAJdQAAJfmuGsQmsGupfAAQpdAAmumug");
	this.shape_102.setTransform(578.05,524.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF7B58").s().p("AwMQNQmumuAApfQAApfGumtQGumuJeAAQJgAAGtGuQGuGtAAJfQAAJfmuGuQmtGupgAAQpeAAmumug");
	this.shape_103.setTransform(568.975,530.425);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF7958").s().p("AwOQPQmumvAApgQAApgGumuQGumuJgAAQJhAAGtGuQGvGuAAJgQAAJgmvGvQmtGuphAAQpgAAmumug");
	this.shape_104.setTransform(559.85,536.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FF7857").s().p("AwPQQQmvmvAAphQAApgGvmvQGvmvJgAAQJiAAGuGvQGvGvAAJgQAAJhmvGvQmuGvpiAAQpgAAmvmvg");
	this.shape_105.setTransform(550.575,542.375);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FF7657").s().p("AwQQSQmwmwAApiQAAphGwmvQGvmwJhAAQJjAAGvGwQGwGvgBJhQABJimwGwQmvGwpjgBQphABmvmwg");
	this.shape_106.setTransform(541.25,548.45);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FF7557").s().p("AwTQUQmwmxAApjQAApiGwmwQGxmxJiAAQJjAAGwGxQGxGwAAJiQAAJjmxGxQmwGwpjAAQpiAAmxmwg");
	this.shape_107.setTransform(531.875,554.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FF7357").s().p("AwUQVQmxmxAApkQAApjGxmxQGxmxJjAAQJkAAGxGxQGxGxAAJjQAAJkmxGxQmxGxpkAAQpjAAmxmxg");
	this.shape_108.setTransform(522.375,560.775);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FF7256").s().p("AwWQXQmymyABplQgBpkGymyQGymyJkAAQJlAAGyGyQGyGyAAJkQAAJlmyGyQmyGxplAAQpkAAmymxg");
	this.shape_109.setTransform(512.8,567);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FF7056").s().p("AwXQYQmzmyAApmQAAplGzmyQGymzJlAAQJmAAGyGzQGzGyAAJlQAAJmmzGyQmyGzpmAAQplAAmymzg");
	this.shape_110.setTransform(503.125,573.325);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FF6E56").s().p("AwZQaQmzmzAApnQAApmGzmzQGzmzJmAAQJnAAGzGzQGzGzAAJmQAAJnmzGzQmzGzpnAAQpmAAmzmzg");
	this.shape_111.setTransform(493.375,579.675);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FF6D55").s().p("AwbQcQm0m0AApoQAApnG0m0QG0m0JnAAQJoAAG0G0QG0G0AAJnQAAJom0G0Qm0G0poAAQpnAAm0m0g");
	this.shape_112.setTransform(483.525,586.075);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FF6B55").s().p("AwcQdQm1m0AAppQAApoG1m1QG0m0JoAAQJpAAG1G0QG0G1AAJoQAAJpm0G0Qm1G1ppAAQpoAAm0m1g");
	this.shape_113.setTransform(473.6,592.55);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FF6955").s().p("AweQfQm1m1gBpqQABpqG1m0QG2m2JoAAQJqAAG1G2QG2G0AAJqQAAJqm2G1Qm1G1pqAAQpoAAm2m1g");
	this.shape_114.setTransform(463.55,599.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FF6755").s().p("AwgQhQm2m2AAprQAApqG2m2QG3m2JpAAQJrAAG2G2QG2G2AAJqQAAJrm2G2Qm2G2prAAQppAAm3m2g");
	this.shape_115.setTransform(453.45,605.65);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FF6654").s().p("AwiQjQm3m3ABpsQgBprG3m3QG3m2JrgBQJsABG3G2QG2G3AAJrQAAJsm2G3Qm3G2psAAQprAAm3m2g");
	this.shape_116.setTransform(443.3,612.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FF6454").s().p("AwjQkQm4m3AAptQAApsG4m4QG3m3JsAAQJuAAG2G3QG4G4AAJsQAAJtm4G3Qm2G4puAAQpsAAm3m4g");
	this.shape_117.setTransform(433,619);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{x:1046.625,y:219.25}}]},1).to({state:[{t:this.shape_3,p:{x:1046.3,y:219.45}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8,p:{x:1043.5,y:221.275}}]},1).to({state:[{t:this.shape_8,p:{x:1042.675,y:221.825}}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).wait(181));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_stars = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// stars
	this.instance = new lib.CachedBmp_65();
	this.instance.setTransform(45.8,40.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(300));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_sky = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sky
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0066CC","#002E5C"],[0,1],0.2,-360,-0.2,360).s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(300));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_shimmer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shimmer
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(248.45,600.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(253.65,600.75,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(253.65,600.75,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_4();
	this.instance_3.setTransform(253.65,600.75,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_5();
	this.instance_4.setTransform(248.45,600.5,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_6();
	this.instance_5.setTransform(248.45,600.5,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_7();
	this.instance_6.setTransform(253.65,600.75,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_8();
	this.instance_7.setTransform(253.65,600.75,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_9();
	this.instance_8.setTransform(253.65,600.75,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_10();
	this.instance_9.setTransform(248.45,600.5,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_11();
	this.instance_10.setTransform(248.45,600.5,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_12();
	this.instance_11.setTransform(253.65,600.75,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_13();
	this.instance_12.setTransform(253.65,600.75,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_14();
	this.instance_13.setTransform(253.65,600.75,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_15();
	this.instance_14.setTransform(248.45,600.5,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_16();
	this.instance_15.setTransform(248.45,600.5,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_17();
	this.instance_16.setTransform(253.65,600.75,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_18();
	this.instance_17.setTransform(253.65,600.75,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_19();
	this.instance_18.setTransform(253.65,600.75,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_20();
	this.instance_19.setTransform(248.45,600.5,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_21();
	this.instance_20.setTransform(248.45,600.5,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_22();
	this.instance_21.setTransform(253.65,600.75,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_23();
	this.instance_22.setTransform(253.65,600.75,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_24();
	this.instance_23.setTransform(253.65,600.75,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_25();
	this.instance_24.setTransform(248.45,600.5,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_26();
	this.instance_25.setTransform(248.45,600.5,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_27();
	this.instance_26.setTransform(253.65,600.75,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_28();
	this.instance_27.setTransform(253.65,600.75,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_29();
	this.instance_28.setTransform(253.65,600.75,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_30();
	this.instance_29.setTransform(248.45,600.5,0.5,0.5);

	this.instance_30 = new lib.CachedBmp_31();
	this.instance_30.setTransform(248.45,600.5,0.5,0.5);

	this.instance_31 = new lib.CachedBmp_32();
	this.instance_31.setTransform(253.65,600.75,0.5,0.5);

	this.instance_32 = new lib.CachedBmp_33();
	this.instance_32.setTransform(253.65,600.75,0.5,0.5);

	this.instance_33 = new lib.CachedBmp_34();
	this.instance_33.setTransform(253.65,600.75,0.5,0.5);

	this.instance_34 = new lib.CachedBmp_35();
	this.instance_34.setTransform(248.45,600.5,0.5,0.5);

	this.instance_35 = new lib.CachedBmp_36();
	this.instance_35.setTransform(248.45,600.5,0.5,0.5);

	this.instance_36 = new lib.CachedBmp_37();
	this.instance_36.setTransform(253.65,600.75,0.5,0.5);

	this.instance_37 = new lib.CachedBmp_38();
	this.instance_37.setTransform(253.65,600.75,0.5,0.5);

	this.instance_38 = new lib.CachedBmp_39();
	this.instance_38.setTransform(253.65,600.75,0.5,0.5);

	this.instance_39 = new lib.CachedBmp_40();
	this.instance_39.setTransform(248.45,600.5,0.5,0.5);

	this.instance_40 = new lib.CachedBmp_41();
	this.instance_40.setTransform(248.45,600.5,0.5,0.5);

	this.instance_41 = new lib.CachedBmp_42();
	this.instance_41.setTransform(253.65,600.75,0.5,0.5);

	this.instance_42 = new lib.CachedBmp_43();
	this.instance_42.setTransform(253.65,600.75,0.5,0.5);

	this.instance_43 = new lib.CachedBmp_44();
	this.instance_43.setTransform(253.65,600.75,0.5,0.5);

	this.instance_44 = new lib.CachedBmp_45();
	this.instance_44.setTransform(248.45,600.5,0.5,0.5);

	this.instance_45 = new lib.CachedBmp_46();
	this.instance_45.setTransform(248.45,600.5,0.5,0.5);

	this.instance_46 = new lib.CachedBmp_47();
	this.instance_46.setTransform(253.65,600.75,0.5,0.5);

	this.instance_47 = new lib.CachedBmp_48();
	this.instance_47.setTransform(253.65,600.75,0.5,0.5);

	this.instance_48 = new lib.CachedBmp_49();
	this.instance_48.setTransform(253.65,600.75,0.5,0.5);

	this.instance_49 = new lib.CachedBmp_50();
	this.instance_49.setTransform(248.45,600.5,0.5,0.5);

	this.instance_50 = new lib.CachedBmp_51();
	this.instance_50.setTransform(253.65,600.75,0.5,0.5);

	this.instance_51 = new lib.CachedBmp_52();
	this.instance_51.setTransform(253.65,600.75,0.5,0.5);

	this.instance_52 = new lib.CachedBmp_53();
	this.instance_52.setTransform(253.65,600.75,0.5,0.5);

	this.instance_53 = new lib.CachedBmp_54();
	this.instance_53.setTransform(248.45,600.5,0.5,0.5);

	this.instance_54 = new lib.CachedBmp_55();
	this.instance_54.setTransform(253.65,600.75,0.5,0.5);

	this.instance_55 = new lib.CachedBmp_56();
	this.instance_55.setTransform(253.65,600.75,0.5,0.5);

	this.instance_56 = new lib.CachedBmp_57();
	this.instance_56.setTransform(253.65,600.75,0.5,0.5);

	this.instance_57 = new lib.CachedBmp_58();
	this.instance_57.setTransform(253.65,600.75,0.5,0.5);

	this.instance_58 = new lib.CachedBmp_59();
	this.instance_58.setTransform(248.45,600.5,0.5,0.5);

	this.instance_59 = new lib.CachedBmp_60();
	this.instance_59.setTransform(253.65,600.75,0.5,0.5);

	this.instance_60 = new lib.CachedBmp_61();
	this.instance_60.setTransform(253.65,600.75,0.5,0.5);

	this.instance_61 = new lib.CachedBmp_62();
	this.instance_61.setTransform(253.65,600.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_17}]},4).to({state:[{t:this.instance_18}]},4).to({state:[{t:this.instance_19}]},2).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_21}]},2).to({state:[{t:this.instance_22}]},4).to({state:[{t:this.instance_23}]},4).to({state:[{t:this.instance_24}]},2).to({state:[{t:this.instance_25}]},3).to({state:[{t:this.instance_26}]},2).to({state:[{t:this.instance_27}]},4).to({state:[{t:this.instance_28}]},4).to({state:[{t:this.instance_29}]},2).to({state:[{t:this.instance_30}]},3).to({state:[{t:this.instance_31}]},2).to({state:[{t:this.instance_32}]},4).to({state:[{t:this.instance_33}]},4).to({state:[{t:this.instance_34}]},2).to({state:[{t:this.instance_35}]},2).to({state:[{t:this.instance_36}]},2).to({state:[{t:this.instance_37}]},4).to({state:[{t:this.instance_38}]},4).to({state:[{t:this.instance_39}]},2).to({state:[{t:this.instance_40}]},3).to({state:[{t:this.instance_41}]},2).to({state:[{t:this.instance_42}]},4).to({state:[{t:this.instance_43}]},4).to({state:[{t:this.instance_44}]},2).to({state:[{t:this.instance_45}]},3).to({state:[{t:this.instance_46}]},2).to({state:[{t:this.instance_47}]},4).to({state:[{t:this.instance_48}]},4).to({state:[{t:this.instance_49}]},2).to({state:[{t:this.instance_50}]},5).to({state:[{t:this.instance_51}]},4).to({state:[{t:this.instance_52}]},4).to({state:[{t:this.instance_53}]},3).to({state:[{t:this.instance_54}]},2).to({state:[{t:this.instance_55}]},4).to({state:[{t:this.instance_56}]},4).to({state:[{t:this.instance_57}]},2).to({state:[{t:this.instance_58}]},2).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},2).to({state:[{t:this.instance_61}]},2).wait(121));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_mountains = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mountains
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EhGbgN7IEsGQIE7mvIK8PnIMgnzIH0K7IVzUPIPoiqIS10eIOEJYIPoy+IGQDIIOE6VIGQPZIHvMbIJdsbMAAAAu3MjIPAAfQASgBgDv3QgDvAgKgYg");
	this.shape.setTransform(638.75,350.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ehj4APgQgDvAgKgYIdruDIErGQIE7mvIK8PnIMhnzIHzK7IVzUPIPoiqIS00eIOEJYIPpy+IGQDIIOE6VIGPPZIHvMbIJesbMAAAAu3MjIOAAfQASgBgEv3g");
	this.shape_1.setTransform(638.75,350.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(300));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_ground = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ground
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#333333","#000000"],[0,1],0,104.9,0,-104.9).s().p("Ehj/AQaMAAAggzMDH/AAAMAAAAgzg");
	this.shape.setTransform(639.9902,629.9955,1,0.8571);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(300));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_detail = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// detail
	this.instance = new lib.CachedBmp_64();
	this.instance.setTransform(218.15,590.2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_63();
	this.instance_1.setTransform(56.8,562.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(300));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Comet = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Bits
	this.instance = new lib.CachedBmp_66();
	this.instance.setTransform(137.75,-21.9,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkMAlQgHgCgJABQgJAAgGABQAAgHgLgCIgJgCIgIgCQgBADADABQAGACABACQgCAAgCADQgBADgGgDQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAQAAABgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBQAAgDgFAAIAAAFIgGgGIgZABQgMAAgMACQgBAAAAgBQAAAAAAAAQAAgBABAAQAAAAABgBIgMgCQgHgCgFACIADABIgFAAIgEAAIgFgBQgKgCgFAAIAGAAQAGAAAAgCIgCgBIADAAIgBgBIAOABIgHAAQABACAHAAIAIgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAIACgDQAHgBAEACQAFAEAFACIgCABIAFACQAEACADgCQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBgBAAIgFgCIAGACQAEACADgBQgEgEgGgBIgLgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAIAfADQATACALgDQgBAAgBgBQgBAAAAgBQAAAAAAgBQAAAAABAAQAFAAgBgEQAAABABAAQAAAAABABQAAAAABAAQABAAABgBQAGgBACABQAAgDgFgCQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAAAABgBQAEAAAOAFQANAEAHgCQgCgCgDgBQAEAAAKAHQAKAEACgGIgNgLQACAAACgCIgEgFQAGgBAEAGIAGAKIAGgHQAIgDAIABQAJACAGAIIAGgCQADgBgCgFIgIgJQgGgEgIABQgBADAGACQAAAAABAAQAAABABAAQAAAAAAAAQAAAAAAABQgDgBgHACQgGABgCgDIAMgBQAAgFgDABQgBABgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQACgFAFACQAIAAABgCIgBgBIAJABIAKACQABAGgCABIgHADQAJgBATAEQATADAJgJIgLgGQAEgBAIABQAGABgCgHQgDACgBgDQgCgDgCgBIAAABQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAEAEAGADIALAEQAAAAgBAAQAAgBAAAAQAAgBAAAAQABgBAAgBIADgDQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAIgCAFIAFADQAEABABgDQADgEgEgCQgGgCAAgCIARAHIAAgBQAEADACgCQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQgBgBAAAAQgBAAAAABQgBAAgBAAQAEgDAJAFQAHAFAFgHIAEADQABgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIAFADQAGACgBgFQgBgFABgBIgBAAQABAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIAKAEQABADAJAEQAJAFAAAGQAEgCgBgCQADAAAAgFQAAgEAGABIgDgCQAEAAABACIABgFQAAAFAHgDIgEgGQADAEAGgCIgDgDQADAAABADQABADAGgCIgJAFQAGAAADAFIADAHQAFADALgDQAKgBAGAHIAAgFQAAAAAAgBQAAAAAAgBQABgBAAAAQABgBAAAAQgKgCgEgGQgHgDgBAHQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBAAQgCABgEgDQAAgIAIAFQAAgEgHgGQAEABAIgCIALgCIAAAAIAGADQAEACADgBQAAABAFAEQAGAEgCADQAEAAADgEQACgCAEADQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABgBAAAAQAAAAAAgBQgBAAAAgBQgBADgGgDIgKgGIANgEQgBABAAAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAIACgFQABAGALgEQAMgEAFAHIgGAAQgDAAgBgDQgEACACAEQACAEgBACQAEABARgBQANgBAIADIgFgCQgDgBgBgDQAFgBAKAEIARAGIgCgFQAEACACgBQACgCAEAAIAAACQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAABAAQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAFAEADgEQADgDAGABIgBgCQAFACALgDIAKgCQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABIAOAAIACgBQABgBAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAIgEABIABgDQAIABgDAEQgFADAAACQAHgCAGAEQABgCgDgDQgEgBAEgCQACgCAIACQAGAAAFADQAEgFALAAQAKgBAAgCIABABIAFAAIgDgCQAGgBADADQAEACACAAIgCgDQAEAAAMACQAHACAIgBIgCgCQgBgBAHACIgFACQAEACAJgBQAJgDAFAAIgDgBQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAABAAIAGABQADACAFgBIgDgCIgDgCQAKgBABABQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBABAAQADACAIgCIgBgBQAFADAEgCIAKgBIgBAAIAHAAIAJAAIgEgCQAEABAGgBQAGAAADABIgCgBQAAAAABAAQAAgBAAAAQABAAABAAQABAAABAAQAGACAEgBQAAgBAAAAQAAAAgBAAQAAAAgBAAQgBAAAAAAIAAABIgDgBIAMAAIgEgBIAZACIgBAAIAAABIgIAAQAAAAAAAAQgBAAAAAAQABAAAAAAQABABAAAAIAHAAIgFAAIgEABIADAAIgDAAQgFABAEAAIgHAAIgHABIAJAAIgFABIABAAIgEABQgHABgGACIgKACQgCABAAAAQgBAAgBAAQAAAAAAgBQAAAAABAAQAEgCgEABIgEABIgDAAIgDgBQAAAAAAABQAAAAgBAAQAAABgBAAQgBAAgBgBQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAABAAIAEABQgFgBgFACQACAAABAAQABAAABAAQAAAAAAAAQgBAAgBAAIgUADIgSADIABABIgEAAIABABIgdADIAFABIgJgBIACADQgEgCgGACIgOABIAAABIgFAAIACABIgIAAQgGgBgEACQAFgBAAAFIgQgCIgEACQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIgFgBIAAABQgLADgYgBIgRAAQgKABgIAEIAAABIgPgEQgDAGgFABQABAAAAgBQgBAAAAAAQgBAAAAAAQgBAAgBAAQgHAAgBgBQgBAAAAABQAAAAAAAAQAAAAAAABQAAAAABAAIABACQgHAEgMAAQgPgBgGADQAJgGAFgBIALgDQgGgBgHABQgGADgJAAIAHABQgDAFgKgBQgJgBAAAEIgMgDQgIgDgFABIAEAHIgIABIgBgFQgEAAAAACQgDgCgIAAQgIAAgFgCIAAACIgCgBQAAACgFACQgDACAAACQAJACAAgCQAEACgGABIgLABQABAAAAgBQABAAAAgBQAAAAgBAAQAAAAAAAAIgGgCIABACQgEACgFgEQgEgDgDAGIgBgGIgHAFQAAgFgEAAQgGAAgBgEQgEAAACACIABACQgDACgJgDIgGgBQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAAAAAQgEgCgGABIgIgBIAAAGIgFgCQAAAAgBAAQgBgBAAAAQgBAAAAABQgBAAAAAAIABACQgMgCgOACQABAFAEABQgEADgKgCQgNgEgGACIACADIgIgFQACADgBAEQgLACgHgBIgIgCQgDgCgCgEIgBAFQgBAEAEACIgFgDIgFgBIgegBIAAgBIgFgDIgBACIAEABIgIgBIgGgFQgCAJgDABQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAIgHACQgJADgDgEIABACQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIgdgEgAiuAdIACACIACgDIgBAAIgDABgAj7AbQgCgGACgCQAAAAAAAAQAAAAABAAQAAAAABAAQAAABABAAIAGACQADACABgDQgEgBgCgCQADgEAEACIAAgFQgIAIgOgBQgBACADADIAGAEIAAAAgAliAbIADgFIgFAAgAiqAYQACACAEAAQAFgBABgDIABgBIgNADgAhpASQgCAFgCACIAJgEQgCgDgCAAIgBAAgAhxARQACAEAFgDIgHgIIgCgCQAAAFACAEgAkrASIAEAAIABgCgAA6AQIgCABIAEAAIgBgCIgBABgABIAMIAEADQADgBgFgFIAEAAIgBgCIgCABQgEADgDgCQAAABAAAAQABABAAAAQABAAAAABQABAAABAAgAidAHQABAAAAABQAAAAAAABQABAAAAAAQABABAAAAQACgEgFgCgACwACQADABADgDQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAIgEAAIADACgAiWABIgEgDIAHACQgBgDgEgDQgGgCgDACIALAHgACBgBIgHgEQgEgBgFACIAGACQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAIAHACgAAsgEQAAABAAAAQAAABAAAAQAAAAABAAQAAABAAAAIADAAIgEgEQgBgCgEACIACAAIABAAIACABgAC6gGQABABAAAAQAAABAAAAQgBABAAAAQgBAAgBABQAAAAAAAAQgBAAABAAQAAAAAAAAQABAAABABQAEAAACgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIADAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAIADAAQAAAAAAAAQgBABAAAAQAAAAABABQAAAAABAAgABBgGQAEgIgSAFIAHABIABgBQAFAAABADgAA5gPIAFgBIgDgCgAFLgRIAFABQACACADgCIgEgBIgCAAIgEAAgAD4gUQABAAAAAAQAAAAAAAAQABABAAAAQAAAAgBAAIAEgBQAAgBABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIgGAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBIgCAEIABAAIAEABgADkgZQgFACAAABIAMgCQgBAAAAgBQAAAAgBAAQAAAAgBAAQgBAAAAAAIgDAAgAEmgaIAJAAIACAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAIgHgBIgCAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAgBABgAnFAZIAAgBIAFABgAm2AVIAFABIgGACgAlXASIgFgCIADgBQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQADABAEAFIgCABIgEgBgAmrARQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIAFAAIgEABIgBAAgAlwAOIgEABQAHgCgDgCQgHgBAAgBQAFAAACABIAFAFIgFgBgAkegEQADgBACACIADADgAjGgHQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAIABAIgAjigRIgBgCIAHgBQACABgFACIgDAAgACBgWQAGAAABgCQABACgGACIgIABQABgEAFABgAiBgUIABgDIAHADgAidgbIACABIADAAIAFABIgHABg");
	this.shape.setTransform(99.55,-28.4);

	this.instance_1 = new lib.CachedBmp_67();
	this.instance_1.setTransform(88.85,-31.05,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_68();
	this.instance_2.setTransform(88.85,-31.05,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_69();
	this.instance_3.setTransform(104.75,-31.9,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_70();
	this.instance_4.setTransform(100.85,4.45,0.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AipAeIgdgEIAAAAIgEgDIgBABIAEACIgIgCIgFgEIgCAFQgCADgCABQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAgBAAIgGABQgJADgDgEIABACIgBACIgagGIgPgCQgHAAgHABQgBgIgJgCIgIgCIgJgDQgBADADACQAFABACADQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIgCACQgBADgFgDIACACQgBAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgDgFAAIAAAFIgFgGIgYAAQgQgBgIABQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBABAAQgDAAgIgDQgHgCgFACIACABIgEAAIgDAAIgFgCQgHgCgHgBIAGAAQAEAAAAgBQgBgBgEAAIgGABIABgDIAMACIgCgBIAPACIgIAAQADACAFgBIAIAAIgDgDQAAAAAAgBQAAAAAAAAQABAAAAAAQABAAABgBQAGgBAEACQAEAEAFACIgCABIAFADQADACAEgCQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgFgCQABAAAAAAQABAAAAAAQABAAAAAAQABABABABQAFACABgBQgCgEgGgBQgGgCgFABIAAgEIAdAEQAUADAJgCQgBgBgBAAQgBgBAAAAQAAgBAAAAQAAAAABAAQAFAAgBgDQABADADgBIAIAAQABgDgFgCQgEgBACgDIAQAGQANAEAHAAQgCgDgDgBQADAAALAHQAIAFAEgGIgOgLQACAAADgDIgDgEQAGgCADAHIACAGQABADABACIAHgHQAHgDAJACQAIADAFAHQALAAgEgGIgIgMQgEgEgIAAQgBAEAEACIACACIgJABQgFABgDgEIANABQAAgGgDABQgBABgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQABgFAGABQAFABADgCIAIABIAJADQAAAFgCABIgGADQAFAAAIACIAOAEQAQAEAKgJIgKgIIALABQAGABgBgHQgEACgBgCIgDgFIAAABQAAgBgBAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQADAEAHADIAJAFQAAAAAAgBQAAAAAAAAQAAgBAAgBQABAAAAgBIADgDQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIgCAFIAFADQADABACgDQABgBAAAAQAAgBAAgBQAAAAgBgBQAAAAgBgBQgFgDgBgCIARAJIAAgCQADAEACgCQAAAAABgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAEgCAHAFQAHAFAEgGIgDgCQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAIAAABIAFADQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAgBAAIAFADQAFACAAgEQAAgGAAgBIAAAAIADgCQAAgBAAAAQABAAAAgBQAAAAgBAAQAAAAAAgBIAJAFIALAIQAGAFAAAGQAGgBgCgDQADAAAAgEQAAgEAHABQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAgBAAQABAAABAAQABAAAAAAQABAAAAAAQABABAAAAIABgEQAAAEAHgBIgEgHQADAEAGgBIgDgEQAEAAAAAEQABADAEgCIgIAEQAGABACAFIADAIQAEACAMgBQAKgBAEAGIABgEIABgEQgJgDgDgGQgDgCgCABIgCAFIgCAEQgCABgFgDQABgIAIAFQAAgEgIgGQAFACAIgCIAKgCIABAAQAHAHAEgDIAFAFQAFAEgCAEQAEABADgEQACgDAEAEQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQgBgBAAAAQgCADgFgEQgEgCgFgEIAMgDQAAAAgBABQAAAAAAAAQAAABAAAAQABABAAAAIADADIACgFQAAAEAEAAIAIgCQAMgDAEAHIgGAAQgCAAgBgDQgEABABAEQACAFgCACQAHACAOgBQANAAAHAEIgFgDIgDgCIAAgBIgBgBQAGgCAJAFIAPAHIgCgFQAFACACgBQACgCAEABQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAABAAQABAAAAAAQABAAABgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAFAEADgDQADgEAGACIgBgBQAFABALgCIAJgCQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABIANABIACgBQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAIACgCQAGABgDAEIgEAFQAGgBAGADQABAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBgBQgBAAAAgBQgBAAAAgBQAAAAABgBQAAAAABgBQACgBAIACQAFAAAFAEQAEgFALAAQAJAAABgCIABABIAEAAIgCgBQAFgBADADQAEADACgBIgCgDIAOADQAIACAHgBIgBgBQgCgBAHACIgEACQAEADAHgCQALgDAEABIgEgBQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAEAAACACQADABAFgBQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgDgCIAHgBIADABQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAEABAIgBIgBAAQADACAFAAIgCAAIACABIgIgBIAGACIAGAAQAAgBAAAAQABAAgBAAQAAgBAAAAQgBAAAAAAIgDAAIAKgBIgBgBIAGABIAIAAIgDgCIAJABIAJABIgBgBIADgBQAFADAFgCQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgBAAIABAAIgDgBIALABQAAAAAAAAQAAAAAAAAQgBgBgBAAQAAAAgCAAIAYADIgBAAQgBAAACABIgIAAQgGABAIAAIAAAAIgDAAIACABIgCAAIgGABIgCgBQgEAAgDABIAIABIgEAAQABAAABAAQAAAAAAAAQAAABgBAAQgCAAgCAAQgIAAgFACIgKACQgBAAgBAAQgBAAAAAAQAAAAAAAAQAAAAABgBQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAIgEABIgCABIgDgCQgBAAgBAAQgBAAAAAAQAAAAgBAAQAAAAAAABIgBAAQAAABgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAFABIgFAAIgFAAQACAAABAAQABAAAAAAQAAAAAAAAQAAAAgBAAQgLAAgIACQgLACgGAAIABABQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIABABIgLAAIgRABIAGABIgKgBIABACQgBgBgIAAIgMABIAAACIgGgBIACACIgIgBQgFgBgEABQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAABIgQgCIgDACIgBABIgEgCIAAACQgNADgVgDIgQgBQgKABgIAEIABAAIgPgEIgDADIgEAEQAAgBAAAAQAAAAAAgBQgBAAgBAAQgBAAgBAAQgFABgCgCQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAAAIACACQgHADgMgBQgMgBgIACIAPgGIAKgDQgHgBgGACQgHACgGAAIAFABQgCADgDAAIgHAAQgIgBgBAEIgLgEQgHgEgGABIAFAHIgJABIAAgFQgDAAgCACQgDgDgHAAQgIgBgDgCIgBADIgCgCQAAACgFACQgDABAAADQAIADAAgDQAEADgGAAIgKABQADgDgHgBIABACQgEABgFgEQgDgDgEAFIgBgFIgGAFQAAgFgFgBQgEAAgBgFQgBAAgBAAQAAAAgBABQAAAAAAABQAAAAABABIAAACQgEABgHgDIgGgBQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABQgDgCgGAAIgIgBIAAAFQgIgDAAABIAAACQgIgCgRAAQABAGAEABQgEADgKgEQgNgDgFABIABADIgGgFIABAGQgKACgHgBIgFgBIgDgCQgDgDgCgDIgBAEQgBAEADADgAiuAXIACACIABgDIAAgBIgDACgAAwAWIgCABIADAAIgBgBIAAAAgAA9ATIAFADQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBIgCgDIAEABQgBgBAAgBQAAgBgBAAQAAAAgBAAQAAAAgBABQgEACgCgBQAAAAAAABQAAAAAAABQABAAAAAAQABABABAAgAhsAQIgEAGIAJgEQgBgBAAAAQgBgBAAgBQAAAAgBAAQAAgBAAAAIgCACgAiqASQACACAEgBQAEAAABgDgAj3ARQgBgHABgBQAAgBAAAAQAAAAABAAQAAAAABABQAAAAABAAQAHAFACgDIgCgCQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQADgDAEACIgBgEQgDACgHACQgGABgFgBQgBACADAEIAGAFIAAAAgAh1AFQgBADACAFQACAFAFgDIgGgIQgCgEgFgCIgBAGIACgDIABAAIADABgAChAPQADABADgDQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIgFABIADADgACnAEIADAAQAAAAAAAAQgBAAAAABQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQgBAAAAABQgBAAgBAAQAFADACgCQAAAAAAAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAABAAIACgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgDgBIgCABgAlZAKIACgEIgFAAgABrAJQgBgFAEABIAGADIgFgEQgGgCgDACIAEACIgBAAgAE2ADIAEACIAFgBIgDgBIgDAAIgDAAgAicABQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQABgEgDgCgAkkAFIACAAIABgDgAAjAAIABADIADAAIgEgDQAAAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIACAAgAAqgDIAHAAQAGAAABADQABgEgFAAIgCAAIgIABgADmgEQABAAAAAAQABAAAAABQAAAAAAAAQAAAAAAAAIAEgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQgIAAAAgCIgCADIABAAIADABgAiWgDIgEgFIAHAEQgBgEgDgDQgFgDgEADIAKAIgAF9gGIACAAQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBAAIgDAAgAETgIIAJABIACAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAgBAAIgGgBQgBAAgBAAQgBAAAAAAQgBAAAAABQAAAAgBAAgADUgKQgCABgBAAQAAAAgBABQgBAAAAAAQAAABABAAQAAgBAKgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAgBAAIgCAAgAAxgJIAEgBIgCgDgAlPACIgEgCIADAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBgBAAQAEAAAEAFIgDABIgEgCgAk/gDIAAAAIAAAAgAB2gMQAEABACgDQABADgFAAIgIABQABgDAFABgAkYgQQAEgCACACIACAFgAjDgPQAAAAABAAQAAAAABgBQAAAAABAAQAAgBAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAAAIAAAJgAiBgZIABgBIAHACgAjegdIAGAAQABAAAAAAQAAABAAAAQgBAAgBABQgBAAgBABQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBgAiYgeIgDgDIACABIADABIAEABg");
	this.shape_1.setTransform(111.15,-26.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAKAiQABAAAAgBQABAAAAAAQAAgBAAAAQgBAAAAgBIgDgBIAAACQgCACgFgFQgCgDgCAFIgBgEIgFADQAAgFgDAAQgEAAgBgFQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAABABIABADQgEABgGgEQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAAAgBAAQgCgCgEAAIgGgBIAAAGQgGgDgBAAIABADQgIgDgMAAQABAGADABQgDADgIgEQgJgDgDABIAAACIgFgDIAAAFQgJABgDgBIgDgBIgDgBIgEgHIAAAFQgCAEADACIgDgCIgEgCIgHgBIgPgCIABgBIgFgDIAAABIADADIgFgDIgGgEQgCAIgBABQAAgDgGADQgIABgCgDIABACIgBABIgUgGIgLgCIgLABQgBgIgGgCIgHgCQgEgBgCgDQgBAEADABQADACABACIgCABIgBACQgBADgEgDIgBgCQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAgBAAIAAAFIgFgHIgSAAQgLgBgHABQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIgIgDQgEgCgFABIACABIgEABIgCgBIgEgBQgEgDgFAAIADAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQgDgBgCABIABgDQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIAFABIgCgCIALACIgFAAQABACAEAAIAGgBIgBgCQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAHgBABADIAHAFIgBABIAEADQABAAAAABQABAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAIgDgCQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAABQAEADABgCQgCgDgEgCQgDAAgFAAQAAgBAAAAQABgBAAAAQAAgBgBAAQAAgBAAgBIAWAFQAOADAIgCQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAEABgBgEQABAAAAABQAAAAABAAQAAABABAAQAAAAABAAQAEgBACABQAAgEgDgBQgBAAAAgBQgBAAAAgBQgBAAABgBQAAAAAAgBIANAGQAJAGAFgCQgBgCgCgCIALAIQAGAEACgGIgJgLIADgCIgCgFQAEgBACAGIAEAMIAEgHQAHgEAGADQAGADAEAHQAIAAgCgHIgGgKQgEgFgFAAQgCAEAEACIABABIgGABQgFACgBgEIAJAAQAAgBgBgBQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBAAgBABQAAAAgBAAQAAAAAAgBQgBAAAAgBQACgEAEABQAEABACgCIgBAAIAHABQACAAAFACQABAGgCABIgFADQADAAAGADIALADQANAEAIgIIgIgIIAIABQAFABgBgHQgBABAAAAQgBAAAAAAQgBAAAAgBQAAAAgBgBIgBgEIgBABQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQADAEAEADIAHAFQgBgDAEgEQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABIgCAFIAEADQABAAAAAAQABABAAgBQABAAAAgBQAAAAAAgBQACgDgDgCIgDgEIAMAIIAAgCQABABAAABQABAAAAABQABAAAAAAQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQADgDAGAHQAGAEADgGIAEAEIABgDIADADQADACAAgEIAAgHIADgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIAGAGIAAAAIAIAIQAGAFAAAFQABAAAAAAQABAAAAgBQABAAAAgBQAAgBgBAAQABAAAAgBQABAAAAAAQAAgBAAgBQAAgBAAgBQABgDAEABIgBgCQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAIAAgEQABAFAFgCIgDgHQADAEAEgBIgCgEQACAAABAEQAAABAAABQABAAAAAAQABAAAAAAQABAAABAAIgHADQAFABACAFIACAIQACACAJgBQAHgBAEAGIABgDIACgFQgIgDgCgGQgGgDgBAHIAAAEQgCABgEgDQACgIAEAFQAAgEgEgGQAEACAFgCQAHgCABAAQAFAHAEgCIAEAFQAEAEgCADQADABACgDQACgDADAEQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAADgFgEIgHgHIAJgCQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIADACIABgEQABAEADAAIAGgCQAJgCADAGIgFAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBgBQgCACABAEQACAEgCACQAFACAKgBQALAAAEAEIgDgDQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAEgBAHAFIAMAHIgCgFQABABABAAQABAAAAABQABAAAAAAQABgBAAAAQABgCAEABIAAACQABAAABAAQABAAAAAAQAAgBAAAAQABAAgBgBQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQADAEACgDQADgDAFACIgBgCQAEACAIgDIAJgCQgBAAAAAAQgBABAAAAQgBABAAAAQAAABAAABIAKABQAFgCgDgCIgDABIABgCQAFACgCACQgDADAAACQACAAADABIAEACQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQACgBAGACQAFABADACQACgDAJAAQAHAAABgDIABACIACAAIgBgCQAEgBACADQADADABAAIgBgDQAEAAAHADQAGACAFgCIgBAAQAAAAAAAAQAAAAABAAQAAAAABAAQABAAABAAIgDACQADADAGgCQAIgCADABIgDgBQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIAGACQABACADgCIgCgBIgBgCIAEAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAABgBQAAAAAAAAQAAAAAAAAQABAAAAAAIAJAAIgBgBQACACAEAAIAHAAIgBgCIAGACIAFgBIgCgBIAOACIgBgBIADgBQAEACAEAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIAAAAIgDgBQAFAAADACQABgBAAAAQAAAAgBAAQAAAAAAgBQgBAAgBAAIASADIAAAAIAAABIgGAAQgBAAgBAAQAAABAAAAQABAAABAAQABAAACAAIgCAAIABAAIgEAAIADABIgDAAIgDAAIgCAAIgFABIAHABIgFAAQABAAAAAAQAAAAgBAAQAAAAAAAAQgBAAgBABQgDgBgGACIgIACQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAABAAQABAAAAAAQABgBAAAAQAAAAgBAAQAAAAAAAAIgDAAIgDABIgCgBQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAIgBABQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAABAAIgFABQABAAABAAQABAAAAAAQAAAAAAAAQAAAAgBAAIgOACIgOACIABABIgEAAIABABIgUAAIADACIgHgCIABADQgBgBgFAAIgKABIAAABIgFAAIACABIgGgBQgEgBgDABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIgMgCIgCACQAAAAgBAAQAAAAAAABQAAAAABAAQAAAAABAAIgFgBIAAABQgKADgQgDIgNgBQgHAAgGAEIABAAIgMgDIgCACIgDAEQAAgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgEAAgBgCQAAABgBAAQAAAAAAABQAAAAAAAAQAAABAAAAIACACQgGADgJgBQgLgBgEACQAHgFAEgBIAIgDQgGgBgEABQgGACgFAAIAFACQgDAEgGgCQgHgBgBAEIgIgEQgGgEgEABIAEAHIgGABIgBgFQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAABQgDgEgFAAQgGgBgDgCIgBADIgBgCQAAADgDACQgBAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAHADgBgDQADADgFABIgIAAgAiAAWIACACIABgDIAAAAIgDABgAA0AVIADADQAAAAAAAAQABgBAAAAQAAAAgBgBQAAAAAAgBIgCgCIADAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQAAAAgBABQgEACgBgBQAAAAAAABQAAAAABABQAAAAAAABQABAAABAAgAhOAPIgDAHIAHgDQAAgBgBgBQAAgBAAAAQgBgBAAAAQAAAAgBAAIgBAAgAh9ARQACACADAAQABAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgBIABAAIgJABgACAASQABAAAAAAQABAAAAAAQAAAAABAAQAAgBABAAQAAgBgBgBQAAAAAAgBQgBAAAAAAQAAAAgBAAIgDABIACADgAhUAFIABAIQABAFADgDIgDgIIgGgGIgBAHIABgEIACAAIACABgAi4APQgBgKAEADQAFAFACgDIgCgCIgCgDQACgDADACIAAgDQgCACgGABQgFACgDgBQgBACACAEIAEAEIAAAAgACHAKQABAAAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAAAAAAAQAAAAAAABQABAAAAAAQABAAABAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAQgBAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIACAAIgCgCQAAgBgBAAQAAgBAAAAQgBAAAAABQgBAAAAABIACgBQAAAAgBAAQAAABAAAAQAAAAABABQAAAAAAABgAkDAIIACgFIgEAAgAAgACIABACIACABIgCgDQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBAAgBABQABAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIACAAgAhyABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQAAgEgCgBIAAACgAAlgCIAGABQAEAAAAADQACgEgEgBIgCAAIgGABgAC1AAIABAAIADAAQAAAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAIgEgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBIgBAEIABAAIACABgADYgEIAGACIACgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIgFgBIgCAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAAAgAEQgDIAFgBQAAAAAAAAQABAAgBgBQAAAAAAAAQAAgBgBAAIgEAAIACABIgGgBIAEADgACngGQgBAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAIAJgCQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIgCAAgAhtgEIgDgEIAFAEQgBgEgCgEQgEgDgDADIAIAIgAArgHIADgBIgCgDgAj6AAIgEgCQABAAABAAQAAAAABgBQAAAAAAAAQAAgBAAgBQACABAEAFIgCAAIgDgBgAlLAAIAAAAIAEAAgAkNgFIgCABQAFgBgDgCIgEgEQADABABACIAEAFQAAAAgBgBQAAAAAAAAQgBAAgBAAQAAgBgBAAgAk4gGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAEAAIgDABIgBgBgABfgJQADABACgDQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABIgGAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAABAAgAiQgPQAAAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIgBAIgAjQgSQABAAAAgBQABAAAAAAQABAAAAABQABAAAAABIABAEgAhcgYIAAgCIAFACgAikgeIAFgBQABABAAAAQAAABgBAAQAAABgBAAQAAAAgCABQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAAAgBgAhugeIgDgDIACABIACAAIADACg");
	this.shape_2.setTransform(119.75,-31.75);

	this.instance_5 = new lib.CachedBmp_71();
	this.instance_5.setTransform(185.15,-7.2,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_72();
	this.instance_6.setTransform(61,-27.5,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_73();
	this.instance_7.setTransform(24.1,-29.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},4).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},2).wait(2));

	// Comet
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Av9EXIhRgEIAFAAIgPgFIADAIIgDgCIgFgDIgMgCQgNgDACgDIACAAQAAgBABAAQAAAAgBgBQAAAAAAgBQAAAAgBgBIgBgBIgBgBIgNgGIgDgCQgBADADADIgNgDQgGgGgLgHIgWgOIgEgDIgCgBIgJgIIgDgEIgFgGIgKgCQgEgHgLgNIgTgUQgKgLgFgKQgGgMAAgKIgHgNIgBgBIABAAIgBgBIgFgKIgBgCIgBgCIgKgaIgJgcIgGggIABgUQAAgJACgLQACgMADgHIAEgHQABgDAEgCIAHgVIAFgQIAAgCIABgFIAAAAIABgBIAFgRIAGgNQADADADgCIAEgGIAGgJIADgEIADgCQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBABgBIAEgGIAEgEIABgBQACgEAAgDIAFADQAJgJAHgGQAIgIAJgGIgBADQAAAAABABQAAAAABAAQAAAAABgBQAAAAABgBIAHgGIAEgKIACAHIAEgDIACgDIABACIAHgDQADgCACgDQADgCAAgDIABgEIACAAIACAAQAAABABAAQAAAAABAAQAAAAABAAQAAAAABgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAAAIgGgBIACgBIAKAAIAFgCIAIgFIgEAFIAIgDIABAAIABAAIAFgBIADgCIAHgFIgCgJIgKAHIAAAAIAAAAIASgPIACAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABAAIAHgDIAFAAIAEgBQACAAACgEIADAHIAJgIIgBAHQAAABAAAAQABABAAAAQABABAAAAQABAAAAABIAIABIAOAAIgFgHIAFADIACAAIADACIAEABQAFAAADgDIAAAGQAEAAACgBIACgDQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAABAAQABgBAEABIgEAFIAmgCIASABIAIADIAIADIAAACQAGADAJACIAMABIgCgBIASAEIgBAEIAHACIABAAIAAAAIAFABIgBACIAHAEIACABIACAAIAEACIAHABIAHAAIgCgDIABgBIABAAIAKgMQADAAAEgCIAEAAIAFADIgDACQgBAAAAABQAAAAAAABQAAAAAAABQAAAAABABIAKAAIAJgFQgGAEABAGQAAACAEADIAGAFIANACIAKAAQALAAAHAEIAHALQAFACAFgEQAFgDACADIAHACQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAgBQABgCAIADIAAAAIABABQAFADAFAAIAIACIAMgBQADgEAFADIAHAGIAFgFQAKAHARAHQAOAFAWAGQABAFARAAIgEgDIAnANIAQAEIAJADIAFgIIAAABQAFADAJgCQAHgDAGADIAAgBQAAABAAABQABAAAAAAQAAABABAAQAAAAABAAQABAAAFgCQAJgDACADQADACAFgCIAHgEIACACQADADADgCIAFgFQADgDADACQADACAFAAIAJgBIgBgCQAHACAbgBQAXAAAKACIAAABIABgBIABgCIgBACIAIABIAAgBQAEgEADAAQAEgDADAEQAAABAAAAQAAABABAAQAAAAABAAQAAAAABAAQABgBAAAAQAAAAABABQAAAAAAAAQAAABgBAAQAHgDAHAAQAEgBAIACIAMABQAHAAAHgDIgBAAIAFABIgCgEQABACAGgCQABAAABAAQABAAAAAAQABAAAAABQAAAAAAAAIAAABQAAABAAAAQAAABAAAAQABAAAAABQABAAAAAAIAGAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAgBAAIADgCQAGADAJgBQAJgBADADIADgCQAEABANgBQAKgDAGAFIAogFIANABQAJABACACQAGABAIgBQAJgCAEABQAAAAAAABQAAABAAAAQABAAABAAQAAAAABAAQAGAAAAABQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABABQABAAAAAAQABgBABAAQAAAAABAAQAAgBAAAAIABADIAPAAIgBABIABABIADAAIADgDIAAADIACAAIAAABIAFAAQAAgBABAAQAAAAABgBQAAAAAAgBQAAAAAAgBIABACIABAAQABAAAAAAQABAAAAAAQAAAAgBgBQAAAAgBAAIAEABIAFABIgCAAIAEABQADABACgCIABgEIgFACIAHgFIABACIAAABIAFAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIABACIAEgCQgDAFAFABIAFAAIgCgDIAEADQAAAAABAAQAAAAABAAQAAAAABAAQABgBAAAAIAAACQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIgBACIANgCQAHgBAFACIAAABIAKAAIgBAAIAGgBIAAABIAFAAIAAABQAGACAGgCIgBgBQABAAACgFIADgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAABAAQgBAAAAABQAAAAAAAAQAAAAAAABQAAAAABAAIADgBIADgCQAAABgBAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAQABABAAAAQABAAABAAIAKgBIAHAAIAEADQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAIADgBIAEAAQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIABABIAEAAIAEAAIAEAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIADACIABgCQALADAQAAQABABAGAAIgBgBIAhABIABAAIABABIADAAIANAAIAAABIgZAAIgBABIAHABIABgCIALABIAIAAQAFAAACgBIALABIgFAAIAFABIAEAAIAIAAIADABIAGAAIAKABIgHgDIATAAIABABIADgBIACABIACgBIAAgBIALAAIAMABIABgBIAIABIAGgBIAKABIABAAIAEAAQAFAAAEABIAcAAQAKAAACgBIAAABIAHAAIAAgBIAAABIAfgBIgTABIAAAAIgDABIgXABIgCAAIgJABIABAAIghACIgYACIgbACIAHAAIgiAEQggADgDgBIgrADQgcADgNAAIgpACIgoADIhPAHIgPgBQgJAAgFACIAAgBIgHABIgVACIgIABIABADQABAHAGgDIADgBIAAAEQAMgHAOAAQAIAAAPADQAOAEAJgBQAOAAAOgIIgCACIAJACIgDgLQADAGAJgDQAEgCADABQAAAAABAAQAAAAAAABQAAAAABABQAAAAAAABIgCABQAAAGAGACIAJACQAAgGgCgBQACAAAFgEQAKAGARgBIANAAQAHABAEAFIAFgIQAIAEAIgBIASgCQAVgEAKAJIBNgKIAaACQAQACAFAHQAOAEAOgDQARgEAIAAQgCAHAIAAQAKAAADACQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAAAAAAAQACgBADABQAIABABgEIABAGIAdADIgCABQAAABAAAAQAAABAAAAQABAAAAAAQABAAABAAQAEgBACACIAFgIIgBAIIADAAIACgBIAAACQAGACAEgBQAEgCABgFIACADQABABAAAAQAAAAAAAAQABABAAAAQAAAAABAAQAEgCgFgEIAGADQAEACAHgBIgEADQACgBAGACQAGACAEgEIABgKIgJAEIAOgIQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAACQADgBAFACIACAAIAEgCIABAGIAGgGIgBAIQAAAEAHABIAJACIgDgHIAGAGQAEADAEgFIABAGQADABABgEQABgDAEACIgCADQAGABAHgBIAMgCQAOgDAKAEIAAACQAHADAMgCIgCgBIANgBIABAEIAJgBIAAADQALADAOgEIgDgCQACAAAFgNQACAAADgCQACgCAFACIgCADIAAADIAJgCIAFgEQgDACACAFQACAEAHACQAIAAALgCQAHgCAHACIAHAHQAEAAADgDQACgEAEACQAHACAAgCQAAgBAHABIAAgBIABAAQAGADAJgBIAIgCQABgDAFABIAGADIADgEQASAIAhABQADACAMAAIgCgCQATADAMAAIAfABIAEgCQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAABABIAFACIAaAAIAAABIgyAAIAAACIAMADIAEgEQAKACAKAAIAPAAQALABADgDIABAAIgBAAIAAgBIAXAFIgKAAIAKADIAEAAIACgCQACgBADABIALABIAGACIAMAAIAUADIgOgGIATAAIARAAIAAABIACABIAGgBIAEABQABAAABAAQABgBAAAAQABAAAAgBQAAAAAAAAIABgDIAUAAQAXADAEAAIgCgBIADAAIgGgBIAUACQABgBAMAAIARABIADABIgEAAIALACIgBgBIAAgBIADABIAGABIALAAIBOABIgBABIAMgBIAAABIADgBIALABIACgBIAFABIAggBIgbABIgHACIgNAAIgGABIgcACIgUACIALAAIgGAAIgjABIgTABQgLADgDgBIACAAIgvAEIgXACIgcACIANABIhwALQgUACgEgBIgqACIgqAEIgpAEQgVACgRgBQgkABgrADQgnACgmAFIhOAIIhPAIIABgBIgegCQgRAAgKAEQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIgNACIABAAQgZAAgSADQgYACgTAIQgEgCgQABQgRgBgEgCQgfgBgkADQgeABgoAEIhIAJIhJAJIgCgEQgDgDgGABIAAAKQgNgEgQABIgeAEIgdADQgRAAgKgHIgNANIitAWIgGgBIAAACQAAAAAAABQAAAAABABQAAAAABAAQABABABAAIADABIgBgEIAEADQAAAAABABQAAAAAAAAQABAAAAgBQABAAAAAAIAAACQABAAAAAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAAAABIgBACIANgCQAHgCAFADIAAABIAKAAIgBgBIAGAAIABABIAEAAIAAABQAGABAGgBIgBgBIADgHIACgBIAEAAQAAAAAAABQgBAAAAAAQAAABAAAAQABAAAAABIADgBIADgDQgEAEAJADIAJgBIAHAAIAEADQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAABAAQABAAABAAQAAAAAAAAQAAAAAAgBIADAAIABABIAEAAIAEgBIAEAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIAEACIABgDQAIADASABQABABAHgBIgCAAIAQABQAIABAHgBIACAAIABAAIADACIgNAAIABACIAGAAIACgBQADABAGgBIAHAAQAHAAABgBIAAAAIALACIgFAAIAGABQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQACgBAGABIAEACIAGAAIAJABIgGgEIARABIACAAIACAAIACAAIADgBIAAgCIAAABQAAgBAKABIANAAQgCgBACABIAAAAIAGAAIAHAAIAJAAIABABIgCAAIAGAAQgBAAgBAAQAAAAAAAAQAAAAABAAQABAAABAAIAjAAQAKABACgBIAAABIAHgBIAAgBIAAABIAGAAIAAAAIABAAIABAAIAWgBIgQABIgCABIgEAAIgJABIgYACIAFAAIhTAIIAGABIgiAEQgdAEgEgBIg/AHIgTABIgnADIgnAEIgmAFIgoAFIAAgBIgOAAQgJAAgFACIAAgBIgHABIgVACQgKACgLAEQgCgBgIABIgKgBQgbgBgqAFIhIALIgCgDIgBAAIgDAAIgBAFIgJgBIgGACQgVAKgEgEQgLAAgLAHIgIAFIgGAEIgGgCQgIgCgIAFIgJAIQgIAHgHgBQgHgBgMADIgWAHIADACIihApIACgDIgDAEQgFAGAEgHIgSAFIAAABQgDACgDAEIgJAJIgDABIgFABIgCAAIgDgBQgBgBAAAAQgBgBAAAAQAAAAgBAAQgBAAAAAAIgCAAIgBABIgDACIgCABIgCABQAAAAgBAAQAAAAAAAAQAAgBAAAAQABgBAAgBQgJAGgKAEQgLAEgHABQgOADgSAAIgEAAgAllBLIACAAIABAAIACAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIACABIAAABQABAAAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBIAEACQACACADgBIgCABIAEABQACABADgDIAAgEIgEABIAHgEIgegGIgiALQAFgBABABQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAABABQABAAAAAAQABAAAAgBQABAAAAAAQAAgBAAAAIABADIAPABIgBABQAAAAAAAAQAAAAAAAAQAAABABAAQAAAAABAAIACgBIADgDIgBAEQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABgBgAlBBGIACgCIgCAAgAlJBDIABACQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAIgGgCIgBABgAjMh3QAVABAPAFIgCADIADgEQAGgKgFAMIAOABIABgCIAGgFIACgCQgDgBgEAAIgLAAIgLAAQgPAAgRACgAo5iWIABgCIAAAAgAhbBNIgBAAIgMABg");
	this.shape_3.setTransform(105.425,-2.0222);

	this.instance_8 = new lib.CachedBmp_74();
	this.instance_8.setTransform(-28.15,-29.9,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_75();
	this.instance_9.setTransform(-28.15,-29.8,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_76();
	this.instance_10.setTransform(-28.15,-29.75,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_77();
	this.instance_11.setTransform(-28.15,-29.65,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_78();
	this.instance_12.setTransform(-28.15,-29.6,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_79();
	this.instance_13.setTransform(-28.15,-29.5,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_80();
	this.instance_14.setTransform(-28.15,-29.45,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_81();
	this.instance_15.setTransform(-28.15,-29.4,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_82();
	this.instance_16.setTransform(-28.15,-29.3,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_83();
	this.instance_17.setTransform(-28.2,-29.25,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_84();
	this.instance_18.setTransform(-28.2,-29.25,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_85();
	this.instance_19.setTransform(-28.2,-29.25,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_86();
	this.instance_20.setTransform(-28.2,-29.25,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_87();
	this.instance_21.setTransform(-28.2,-29.2,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_88();
	this.instance_22.setTransform(-28.2,-29.3,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_89();
	this.instance_23.setTransform(-28.2,-29.45,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_90();
	this.instance_24.setTransform(-28.2,-29.6,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_91();
	this.instance_25.setTransform(-28.2,-29.8,0.5,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EgkaAEXIi7gEIAMAAIgjgFIAHAIIgHgCIgLgDIgbgCQgfgDAFgDIAGAAQABgBAAAAQAAAAAAgBQgBAAAAgBQgBAAgBgBIgDgBIgngJQgCADAHADIgegDQgPgGgZgHIgzgOIgJgDIgEgBIgVgIIgHgEIgLgGIgWgCQgJgHgagNIgtgUQgVgLgMgKQgPgMABgKIgQgNIgCgBIABAAIgCgBIgMgKIgBgCIgCgCQgRgRgHgJQgPgSgGgKIgMggIACgUQAAgJAEgLQAFgMAHgHIAJgHQACgDAJgCQAKgLAHgKIAKgQIAAgCIADgFIAAAAIABgBIAMgRIAPgNQAHADAGgCQACAAAIgGIAMgJIAIgEIAHgCQgHgCAEgDQABgCAJgEIAJgEIACgBQAGgEgCgDIAMADQAVgJAQgGQASgIAWgGIgDADQABACAIgDIARgGIAIgKIAEAHIAKgDIAEgDIADACIAQgDQAGgCAFgDQAHgCABgDQABAAAAgBQAAgBABAAQAAgBAAAAQgBgBAAAAIAJAAQAGACADgCQAIgCgDgBIgNgBIAFgBIAWAAIANgCIASgFIgLAFIATgDIADAAIACAAIAjgIIgFgJIgWAHIgBAAIAAAAIApgPIAFAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAgBAAQAAABABAAQAAABAAAAQAAABABAAQAAAAABAAIAQgDIALAAIALgBQAEAAAFgEIAHAHIAVgIIgEAHQACADAGABIAyABIgLgHIAMADIADAAIAIACIAJABQAKAAAHgDIABAGQAKAAAEgBIAFgDQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQADgBAIABIgJAFICAgBIATADIATADIgBACQAPADATACIAcABIgEgBIApAEIgBAEIAPACIACAAIABAAIAKABIgCACIAQAEIAFABIAFAAIAJACIAQABIARAAIgGgDIAGgBIAXgMQAHAAAJgCIAIAAIAMADIgIACQAAAAgBABQAAAAAAABQAAAAAAABQABAAAAABIAYAAIAUgFQgNAEADAGQAAACAIADIANAFIAgACIAWAAQAYAAASAEIAQALQALACALgEQAMgDAEADIARACQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAgBQADgCARADIACAAIABABQAMADAKAAIAUACIAcgBQAGgEALADIAQAGIAMgFQAWAHApAHQAfAFAyAGQACAFAnAAIgJgDIBbANIAkAEIAUADIANgIIgBABQAMADATgCQASgDANADIABgBQAAADAFAAQAEAAALgCQAUgDAFADQAIACALgCIAQgEQAAAAAAABQAAAAABAAQAAAAABABQABAAABAAQAHADAHgCIALgFQAIgDAHACQAFACANAAIAVgBIgDgCQARACA9gBQA1AAAYACIAAABIABgBIADgCIgDACIASABIAAgBQAKgEAGAAQAJgDAHAEQAAADAIgBQABgBABAAQABAAAAABQAAAAAAAAQAAABAAAAQAOgDAQAAQAKgBASACIAbABQARAAARgDIgCAAIALABIgGgEQAEACAMgCQALAAgBABIgBABQABACAFABIAMAAQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAAAAAIAGgCQANADAUgBQAVgBAHADIAHgCQAJABAegBQAXgDANAFIBegFIAdABQAUABAFACQAPABASgBQATgCAKABQgBADAJgBQAOAAgBABQAAgCAJABQAHAAADgCIABADIAiAAIgCABQAAAAAAAAQAAAAABAAQAAABAAAAQABAAAAAAIAIAAIAIgDIgCADIAGAAIgBABQAFABAGgBQAGgBgBgDIADACIADAAQAFAAgFgBIAHABIANABIgDABIAIAAQAFABAHgCIABgEIgLACIAQgFQABAAAAABQABAAAAAAQAAAAAAAAQABAAAAABIAAABIAKAAQACAAADgBIADACIAIgCQgHAFAMABIALAAIgEgDIAJADQAEABAGgCIgBACQAFABACgCQABgCAEABIgDACIAegCQAQgBALACIABABIAWAAIgCAAIAPgBIABABIALAAIAAABQAPACAOgCIgEgBQACAAAGgFIAGgBQACgBAHABQgBAAAAABQgBAAAAAAQAAAAABABQAAAAABAAIAPgDQgFACAEACQABACAJAAIAXgBIAPAAIAJADQAFAAADgBIAHgBIAIAAQABgBAGAAIACABIAKAAIAJAAIAJAAQACgCAEAAIAHACIAEgCQAZADAjAAQAEABAOAAIgDgBIBLABIAEAAIABABIAIAAIAeAAIgBABIg6AAIgBABIAPABIACgCIAZABIATAAQAMAAAEgBIAbABIgOAAIAOABIAJAAIARAAIAIABIANAAIAXABIgPgDIAqAAQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAABAAIAHgBIAEABIAGgBIABgBIAXAAIAeABIABgBIATABIANgBIAYABIACAAIAJAAQALAAAKABIBAAAQAWAAAFgBIABABIAOAAIACgBIAAABIBHgBIiCAEIADAAIhLACIg4ACIg9ACIAQAAIhOAEQhKADgHgBIhkADQg/ADgeAAIheACIhcADIjYAGQgVAAgNACIABgBIgQABIgxACQgJAAgJABIADADQACAHANgDIAIgBQAAAAAAAAQAAAAAAABQAAAAAAABQgBABAAABQAcgHAfAAQATAAAjADQAgAEAVgBQAfAAAhgIIgFACIAVACIgIgLQAJAGAVgDQAJgCAGABQAFAAAAADIgDABQgCAGAOACIAWACQgBgGgEgBQAEAAANgEQAWAGAogBIAeAAQAOABALAFIALgIQASAEATgBIAogCQAwgEAZAJICwgKIA8ACQAkACALAHQAgAEAggDQAogEASAAQgFAHASAAQAYAAAGACQAAgBAAgBQAAgBAAAAQAAgBAAAAQABAAABAAQADgBAIABQARABADgEIABAGIBFADIgHABQAAADAIgBQAKgBAFACIALgIIgCAIIAGAAIAFgBIgBACQAOACAKgBQAIgCADgFIAFADQADACADAAQAKgCgMgEIAOADQAKACAPgBIgJADQAFgBAOACQAMACAKgEIACgKIgTAEIAegIQAFAAAAACQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAIgBALACIAFAAIAIgCIACAGIAPgGQgDAGAAACQABAEAPABIAVACIgHgHIAPAGQAJADAJgFIACAGQAHABADgEQACgDAJACIgFADQANABASgBIAbgCQAfgDAYAEIgBACQAQADAdgCIgFgBIAegBIACAEIAVgBIAAADQAZADAfgEIgGgCQAEAAAMgNQAFAAAGgCQAFgCAMACIgGADQAAAAAAAAQAAABAAAAQAAAAAAABQABAAAAABIAUgCIAMgEQgHADAEAEQAGAEAPACQASAAAagCQARgCAQACIAQAHQAJAAAGgDQAGgEAHACQASACgCgCQACgBAPABIAAgBIACAAQAPADATgBIATgCQADgDALABIAOADIAGgEQApAIBOABQAFACAcAAIgFgCQAtADAaAAIBIABIAKgCQgEABAFACIANACIA6AAIAAABIhzAAIAAACIAdADIAKgEQAVACAYAAIAhAAQAbABAFgDIADAAIgDAAIAAgBIA2AFIgYAAIAYADIAKAAIAFgCQADgBAIABIAZABIAOACIAbAAIAtADIgfgGIAqAAIAoAAIAAABIAFABIANgBIAKABQAJgBABgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAIAvAAQA0ADAKAAIgGgBIAHAAIgOgBIAuACQAEgBAaAAIAoABIAGABIgKAAIAbACIgCgBQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAABAAIAIABIAMABIAZAAIC0ABIgBABIAbgBIgBABIAHgBIAaABIAEgBIAMABIAqgBIhMADIgOABIhAACIgwACIAaAAIgOAAIhQABIgsABQgZADgHgBIAGAAIhtAEIg0ACIhBACIAeABIkAALQgvACgIgBIhiACIhgAEIhdAEQgxACgogBQhSABhiADQhaAChYAFIiyAIIi2AIIACgBIhEgCQgpAAgVAEQAAAAABAAQAAgBAAAAQgBAAAAgBQgBAAAAAAIgeACIAEAAQg6AAgqADQg3ACgsAIQgKgCgkABQgogBgIgCQhHgBhSADQhFABhdAEIimAJIimAJIgGgEQgJgDgNABIAAAKQgcgEgmABIhFAEIhBADQgnAAgYgHIgdANImOAWIgPgBIAAACQABACAJABIAIABIgDgEIAJADQADABAEgBIAAACQAFABACgCQABgBAAAAQABAAAAgBQABAAAAAAQABAAABABIgCACIAdgCQAQgCAMADIgBABIAXAAIgDgBIAQAAIABABIAKAAIAAABQAOABAOgBIgCgBQABAAAEgHIAGgBIAJAAQgBAAAAABQgBAAAAAAQAAABAAAAQAAAAABABIAIgBIAHgCQgKADAUADIAVgBQAIgBAIABIAJADQAFABADgCQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQALABgBgCIAGAAIACABIAKAAIAIgBIAJAAQADgCADABIAKACIABgDQATADAqABQAAABARgBIgEAAIAlABQARABARgBIAFAAIACAAIAGACIgdAAIACACIANAAIAFgBQAHABAPgBIAQAAQAQAAABgBIAAAAIAbACIgMAAIANABQACABADgCQAFgBANABIAIACIAPAAIAUABIgNgEIAnABIAEAAIAFAAIAFAAQAFAAABgBIAAgCIABABQAAgBAXABIAdAAQgGgBAGABIgBAAIARAAIAPAAIAVAAIACABIgDAAIAMAAQgCAAgBAAQgBAAAAAAQABAAACAAQABAAAEAAIBQAAQAVABAHgBIAAABIAOgBIABgBIAAABIANAAIABAAIACAAIADAAIAxgBIgxACIgWABIg2ACIAKAAIi/AIIANABIhMAEQhEAEgKgBIiPAHIgtABIhaADIhXAEIhZAFIhbAFIAAgBIggAAQgWAAgMACIAAgBIgOABIgxACQgWACgaAEQgFgBgTABQgRAAgFgBQg/gBhgAFIilALIgEgDIgCAAIgIAAIgCAFIgVgBIgOACQgwAKgJgEQgZAAgaAHIgSAFIgOAEIgOgCQgSgCgSAFIgUAIQgTAHgQgBQgQgBgdADIgyAHIAHACIlxApIAFgDQgBAAgGAEQgLAGAIgHIgpAFIAAABQgHACgGAEIgWAJIgHABIgMABIgEAAIgHgBQgDgCgGAAIgEAAIgDABIgHACIgEABIgEABQgGABAGgEQgVAGgWAEQgbAEgQABQggADgoAAIgKAAgAslBLIAEAAIACAAIAEAAQAFgCACgCIACABIACABQAEAAgEgDIAIACQAEACAIgBIgFABIAJABQAFABAGgDIAAgEIgHABIAOgEIhDgGIhPALQALgBACABQgBgCAIABQAIAAAAgCIACADIAhABIgBABQAAAAAAAAQAAAAABAAQAAABABAAQABAAABAAIAGgBIAGgDIgCAEQAEABACgCgArUBGIAHgCIgHAAgArlBDIABACQAGgCAEABQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIgPgCIgBABgAnHh3QAxABAiAFIgDADIAHgEQAOgKgMAMIAgABIACgCIAOgFIAFgCQgIgBgJAAIgaAAIgaAAQghAAgoACgA0MiWIACgCIgBAAg");
	this.shape_4.setTransform(276.95,-2.0222);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.2,-35.1,767.3000000000001,61.2);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-641,-361,1282,722);


(lib.Scene_1_ui = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ui
	this.startbutton = new lib.StartBTN();
	this.startbutton.name = "startbutton";
	this.startbutton.setTransform(637.5,681,1,1,0,0,0,137.5,30);
	new cjs.ButtonHelper(this.startbutton, 0, 1, 2, false, new lib.StartBTN(), 3);

	this.instance = new lib.Chrome();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.startbutton}]}).to({state:[]},1).wait(299));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Comet = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Comet
	this.instance = new lib.Comet();
	this.instance.setTransform(1314.9,-214.65,1,1,-39.2471,0,0,276.2,-0.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(213).to({_off:false},0).wait(1).to({regX:355.4,regY:-4.5,rotation:-39.2477,x:1334.8,y:-238.45},0).wait(1).to({x:1295.85,y:-209.2},0).wait(1).to({x:1256.9,y:-179.85},0).wait(1).to({x:1217.95,y:-150.55},0).wait(1).to({x:1179.05,y:-121.25},0).wait(1).to({x:1140.1,y:-91.9},0).wait(1).to({x:1101.15,y:-62.6},0).wait(1).to({x:1062.2,y:-33.25},0).wait(1).to({x:1023.3,y:-3.95},0).wait(1).to({x:984.35,y:25.35},0).wait(1).to({x:945.4,y:54.7},0).wait(1).to({x:906.45,y:84},0).wait(1).to({x:867.55,y:113.3},0).wait(1).to({x:828.6,y:142.65,alpha:0.6667},0).wait(1).to({x:789.65,y:171.95,alpha:0.3333},0).wait(1).to({x:750.7,y:201.3,alpha:0},0).wait(69).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.PuppetShape_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.instance_1 = new lib.BMP_6f67d743_db9c_41be_be57_6d39eac47331();
	this.instance_1.setTransform(-14.35,-33.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-33.1,623,143);


(lib.PuppetShape_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.instance_1 = new lib.BMP_0d4d9633_f3f9_4b0f_8064_ff23797c453e();
	this.instance_1.setTransform(-26.2,-58.8);

	this.instance_2 = new lib.BMP_36163b2c_c81e_4fa5_aedf_a87c4286a063();
	this.instance_2.setTransform(-26.2,-58.75);

	this.instance_3 = new lib.BMP_9ab02a1f_84ba_4e0e_a325_149ba0ebc2cc();
	this.instance_3.setTransform(-26.2,-58.6);

	this.instance_4 = new lib.BMP_716a5461_692d_4bca_9d4c_57adc26c8e3d();
	this.instance_4.setTransform(-26.2,-58.45);

	this.instance_5 = new lib.BMP_4169ff20_fb2e_4263_8e80_803e754c1ff2();
	this.instance_5.setTransform(-26.15,-58.15);

	this.instance_6 = new lib.BMP_a1f427d7_90bc_419c_b54b_0ea35cc00e4e();
	this.instance_6.setTransform(-26.15,-57.85);

	this.instance_7 = new lib.BMP_f563d470_1c48_48b1_b19f_c3a22c6874af();
	this.instance_7.setTransform(-26.1,-57.4);

	this.instance_8 = new lib.BMP_24f3cfd2_b296_4630_9729_29088ef5f25c();
	this.instance_8.setTransform(-26.05,-56.85);

	this.instance_9 = new lib.BMP_92cfe24c_4d79_40d8_981e_3f025726c890();
	this.instance_9.setTransform(-26,-56.25);

	this.instance_10 = new lib.BMP_2bcf5801_1fad_42ca_94f7_982351c7e3a6();
	this.instance_10.setTransform(-25.95,-55.6);

	this.instance_11 = new lib.BMP_59be8ba5_8b5b_4dcb_b5c9_338525351a59();
	this.instance_11.setTransform(-25.9,-54.9);

	this.instance_12 = new lib.BMP_6f623bfe_d77e_4c9e_967d_c70488b33f2f();
	this.instance_12.setTransform(-25.85,-54.05);

	this.instance_13 = new lib.BMP_cdafd4be_e221_49a7_97ac_34fc964ae7bc();
	this.instance_13.setTransform(-25.75,-53.15);

	this.instance_14 = new lib.BMP_c9419a74_9a2b_43d2_a4c9_f3f6e2350fd8();
	this.instance_14.setTransform(-25.7,-52.15);

	this.instance_15 = new lib.BMP_ce0cbec0_fceb_4d51_92f5_6a78bd98a1b2();
	this.instance_15.setTransform(-25.6,-51.05);

	this.instance_16 = new lib.BMP_c9481e22_df12_41f7_842c_2ae77c2b13d1();
	this.instance_16.setTransform(-25.5,-49.95);

	this.instance_17 = new lib.BMP_f534c50b_fbf2_40a7_be13_72f104e8e616();
	this.instance_17.setTransform(-25.35,-48.65);

	this.instance_18 = new lib.BMP_5dec786d_ddeb_46b9_8b6a_983f23a19f22();
	this.instance_18.setTransform(-25.2,-47.35);

	this.instance_19 = new lib.BMP_06bb2d09_75fc_440e_890a_84eae47d08e6();
	this.instance_19.setTransform(-25.05,-45.95);

	this.instance_20 = new lib.BMP_d36ab845_951b_445d_a65f_49e00f84e825();
	this.instance_20.setTransform(-24.9,-44.45);

	this.instance_21 = new lib.BMP_7c0e52cc_5db7_4d88_96cd_5f2e5693c8f7();
	this.instance_21.setTransform(-24.7,-42.9);

	this.instance_22 = new lib.BMP_55865c66_86ce_44f4_a64a_070b9aac9fe2();
	this.instance_22.setTransform(-24.5,-41.2);

	this.instance_23 = new lib.BMP_df01adc9_75a8_458e_b3a7_b3ce22cad56b();
	this.instance_23.setTransform(-24.25,-39.5);

	this.instance_24 = new lib.BMP_87c0b2fd_ccb4_4efc_a8ee_c60553b2724b();
	this.instance_24.setTransform(-23.95,-37.6);

	this.instance_25 = new lib.BMP_1805c3c4_8349_44b6_8e0c_504d037ac302();
	this.instance_25.setTransform(-23.65,-35.7);

	this.instance_26 = new lib.BMP_568a2ab8_28b5_4397_b24c_ea619926a8b6();
	this.instance_26.setTransform(-23.3,-33.65);

	this.instance_27 = new lib.BMP_ff82c4fb_5247_40f8_8d14_621c2a1c2e5f();
	this.instance_27.setTransform(-22.9,-31.5);

	this.instance_28 = new lib.BMP_f7cd3264_f6d6_4362_ac18_c955dcc7cd1c();
	this.instance_28.setTransform(-22.4,-29.25);

	this.instance_29 = new lib.BMP_3453eb44_4dd4_4f28_bddc_00623332dc40();
	this.instance_29.setTransform(-21.9,-28.8);

	this.instance_30 = new lib.BMP_015c2447_2b06_4483_b57c_9f398fe9d5f3();
	this.instance_30.setTransform(-21.25,-28.6);

	this.instance_31 = new lib.BMP_83785358_e7d9_4fa9_b571_27e47a16490e();
	this.instance_31.setTransform(-20.6,-28.4);

	this.instance_32 = new lib.BMP_c1144105_6f50_440c_994e_05c3eb44c928();
	this.instance_32.setTransform(-19.8,-28.2);

	this.instance_33 = new lib.BMP_98f504f7_e92c_4721_b9b2_b0b72566044d();
	this.instance_33.setTransform(-18.95,-28);

	this.instance_34 = new lib.BMP_b41006aa_9220_477d_87a5_77f25a998214();
	this.instance_34.setTransform(-18.05,-27.8);

	this.instance_35 = new lib.BMP_0e70bdff_7fce_4042_962a_c56acae092e4();
	this.instance_35.setTransform(-17.05,-27.65);

	this.instance_36 = new lib.BMP_7921bf48_bade_4b93_83ec_2132e662b8aa();
	this.instance_36.setTransform(-16.05,-27.45);

	this.instance_37 = new lib.BMP_7275932c_5f60_4d16_9dc1_081cf7c130ca();
	this.instance_37.setTransform(-14.95,-27.25);

	this.instance_38 = new lib.BMP_4a16508f_77db_466b_a922_ee53246d7c43();
	this.instance_38.setTransform(-13.8,-27.1);

	this.instance_39 = new lib.BMP_9bfca5c8_627b_4213_a496_1de6ae86015d();
	this.instance_39.setTransform(-12.7,-26.95);

	this.instance_40 = new lib.BMP_356d398d_a133_429a_86d2_2b7259629666();
	this.instance_40.setTransform(-12.05,-26.75);

	this.instance_41 = new lib.BMP_6f2fc8d7_8d9c_475d_b42b_cb1803323dc6();
	this.instance_41.setTransform(-11.55,-26.65);

	this.instance_42 = new lib.BMP_72922261_3f4f_4613_8ff4_0277cf5c0d84();
	this.instance_42.setTransform(-11,-26.6);

	this.instance_43 = new lib.BMP_c400b9de_fbd9_45c5_b34d_6fab5bfbd714();
	this.instance_43.setTransform(-11.35,-27.25);

	this.instance_44 = new lib.BMP_8c7900c0_5235_4643_be8a_dae67074bd7e();
	this.instance_44.setTransform(-11.7,-27.9);

	this.instance_45 = new lib.BMP_e7a9d657_52c1_4e00_b86b_3dc57662b489();
	this.instance_45.setTransform(-12,-28.5);

	this.instance_46 = new lib.BMP_3af5021e_c9e7_48ea_8d1b_4003dfa521b1();
	this.instance_46.setTransform(-12.3,-29.1);

	this.instance_47 = new lib.BMP_cb2801a1_6a81_4074_95dd_de3c7436a484();
	this.instance_47.setTransform(-12.55,-29.6);

	this.instance_48 = new lib.BMP_efa64642_7e6e_4294_96e3_e73693945ece();
	this.instance_48.setTransform(-12.85,-30.1);

	this.instance_49 = new lib.BMP_c7dbd50f_6c07_40f0_b4dc_6f49d7092f98();
	this.instance_49.setTransform(-13.1,-30.55);

	this.instance_50 = new lib.BMP_09ed5400_d29a_477e_a532_ed9f8ad000d1();
	this.instance_50.setTransform(-13.3,-31);

	this.instance_51 = new lib.BMP_9fd77115_6091_43bc_aee7_0a5a9ed777f3();
	this.instance_51.setTransform(-13.45,-31.35);

	this.instance_52 = new lib.BMP_61e00e6f_caf9_45bc_9f9a_a391dba72de6();
	this.instance_52.setTransform(-13.6,-31.7);

	this.instance_53 = new lib.BMP_0976ce78_ad27_4b20_a2f3_b433f740d673();
	this.instance_53.setTransform(-13.75,-32);

	this.instance_54 = new lib.BMP_22c5dfb8_e5e1_4bbd_8034_ded4a67a863f();
	this.instance_54.setTransform(-13.9,-32.3);

	this.instance_55 = new lib.BMP_6ccb5b57_0e97_4bb7_a8f7_5dba09f6cc4e();
	this.instance_55.setTransform(-14,-32.5);

	this.instance_56 = new lib.BMP_706f6ce8_7f53_4825_b159_3e11ec053e65();
	this.instance_56.setTransform(-14.1,-32.7);

	this.instance_57 = new lib.BMP_4bb6f29b_9555_4b0b_8259_8c413b2d67d5();
	this.instance_57.setTransform(-14.2,-32.9);

	this.instance_58 = new lib.BMP_037c8a71_244e_4b49_8b9d_b90daf9e0fef();
	this.instance_58.setTransform(-14.25,-33);

	this.instance_59 = new lib.BMP_b2524821_1e97_4cd5_ad4e_b5e3e3d5ba37();
	this.instance_59.setTransform(-14.3,-33.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.2,-58.8,634.9000000000001,185.39999999999998);


(lib.PuppetShape_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.instance_1 = new lib.BMP_ba713ed9_669b_431d_b0c3_937aa58107f8();
	this.instance_1.setTransform(-14.95,-14.95);

	this.instance_2 = new lib.BMP_ab87b4f9_4329_4f9a_b119_94a7dcba0cfb();
	this.instance_2.setTransform(-14.95,-15.1);

	this.instance_3 = new lib.BMP_639cb577_1fdc_4889_872e_a49c5b9eaafb();
	this.instance_3.setTransform(-15.2,-15.45);

	this.instance_4 = new lib.BMP_74ba586e_316e_4741_9029_9552f66954cb();
	this.instance_4.setTransform(-15.5,-16.1);

	this.instance_5 = new lib.BMP_b4dd5a80_48ea_45f9_be13_0af491bc3592();
	this.instance_5.setTransform(-16,-16.95);

	this.instance_6 = new lib.BMP_5a7a9bb9_86a7_4ce2_8e37_a98be57727d8();
	this.instance_6.setTransform(-16.55,-18);

	this.instance_7 = new lib.BMP_abb2a406_d363_4687_963b_8b24f40b46c9();
	this.instance_7.setTransform(-17.2,-19.3);

	this.instance_8 = new lib.BMP_fa661b7c_73dd_4724_8186_f2d6e5c481e3();
	this.instance_8.setTransform(-17.9,-20.8);

	this.instance_9 = new lib.BMP_15b8d0fa_5628_4f59_8380_0b0612e96ee2();
	this.instance_9.setTransform(-18.65,-22.5);

	this.instance_10 = new lib.BMP_0c4babce_1d0d_4e78_8ece_8d5dd0084baa();
	this.instance_10.setTransform(-19.45,-24.4);

	this.instance_11 = new lib.BMP_0cc0fc4b_3b33_4ce6_af8a_051718a2fddc();
	this.instance_11.setTransform(-20.25,-26.55);

	this.instance_12 = new lib.BMP_bafcea77_4087_43bf_8563_cd9dd8b32253();
	this.instance_12.setTransform(-21.05,-28.85);

	this.instance_13 = new lib.BMP_f4607a4b_f34f_45cf_a8bc_dab771e406ca();
	this.instance_13.setTransform(-21.85,-31.35);

	this.instance_14 = new lib.BMP_65075cc2_cfc7_447f_b795_5be2f48bdc64();
	this.instance_14.setTransform(-22.6,-34);

	this.instance_15 = new lib.BMP_5864ed2e_a7fa_44ac_8184_0dc783f8508f();
	this.instance_15.setTransform(-23.25,-36.8);

	this.instance_16 = new lib.BMP_8c453466_93db_468c_a1e8_bcace640d540();
	this.instance_16.setTransform(-23.9,-39.75);

	this.instance_17 = new lib.BMP_ba647800_9f58_4ac9_a6eb_73eacba6fc54();
	this.instance_17.setTransform(-24.4,-42.45);

	this.instance_18 = new lib.BMP_faa4fb1e_9ec7_4ce9_a1f4_ebbe7f9851c6();
	this.instance_18.setTransform(-24.8,-44.95);

	this.instance_19 = new lib.BMP_878414a4_93c7_4256_8c14_a3d63db6e02f();
	this.instance_19.setTransform(-25.1,-47.2);

	this.instance_20 = new lib.BMP_149da65d_79ab_4f36_983d_d1b24ccca10b();
	this.instance_20.setTransform(-25.35,-49.25);

	this.instance_21 = new lib.BMP_8a96df35_950c_4ec5_9908_34315e4d9340();
	this.instance_21.setTransform(-25.55,-51.1);

	this.instance_22 = new lib.BMP_551abb52_35e8_40d0_81e9_aeb5fbd79e12();
	this.instance_22.setTransform(-25.75,-52.7);

	this.instance_23 = new lib.BMP_cb5b5b9d_6217_4d7a_b61b_5596c4676795();
	this.instance_23.setTransform(-25.85,-54.2);

	this.instance_24 = new lib.BMP_7f726ff1_eb1b_453d_9b73_ae9c06fdbd5c();
	this.instance_24.setTransform(-25.95,-55.35);

	this.instance_25 = new lib.BMP_3502986e_9d03_4079_bf6e_03942615d6f3();
	this.instance_25.setTransform(-26.05,-56.45);

	this.instance_26 = new lib.BMP_fa4cbb09_0f7f_4513_bb87_c52e3b4dc803();
	this.instance_26.setTransform(-26.1,-57.25);

	this.instance_27 = new lib.BMP_499e1bc0_117d_4994_b1d5_16bf56cc04ca();
	this.instance_27.setTransform(-26.15,-57.9);

	this.instance_28 = new lib.BMP_0b991ed3_1cd1_494c_9b0e_28129b2fcff7();
	this.instance_28.setTransform(-26.15,-58.4);

	this.instance_29 = new lib.BMP_95c185e9_bdc7_4923_82cd_69dfbe115395();
	this.instance_29.setTransform(-26.2,-58.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.2,-58.6,599.1,185);


(lib.messagetext = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.PuppetShape_1("synched",1,false);
	this.instance.setTransform(456.5,62,1,1,0,0,0,266.5,35);

	this.instance_1 = new lib.PuppetShape_2("synched",1,false);
	this.instance_1.setTransform(456.5,62,1,1,0,0,0,266.5,35);
	this.instance_1._off = true;

	this.instance_2 = new lib.PuppetShape_4("synched",1,false);
	this.instance_2.setTransform(456.5,62,1,1,0,0,0,266.5,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},29).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},29,cjs.Ease.quadInOut).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},29,cjs.Ease.quadInOut).wait(1).to({regX:290.8,regY:33.9,x:480.8,y:60.9,startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-31.8,798.7,185.4);


(lib.Scene_1_message = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// message
	this.instance = new lib.messagetext("synched",0);
	this.instance.setTransform(638,126.2,1,1,0,0,0,456,59.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(149).to({_off:false},0).to({alpha:1,mode:"single",startPosition:29},29).wait(31).to({mode:"synched",loop:false},0).to({startPosition:0},60).to({_off:true},30).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.animation_HTML5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,299];
	this.streamSoundSymbolsList[0] = [{id:"Gothic",startFrame:0,endFrame:300,loop:1,offset:0}];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		var soundInstance = playSound("Gothic",0);
		this.InsertIntoSoundStreamData(soundInstance,0,300,1);
		this.startbutton = this.ui.startbutton;
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.startbutton.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.play();
		});
	}
	this.frame_1 = function() {
		this.startbutton = undefined;
	}
	this.frame_299 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(298).call(this.frame_299).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(717.55,292.55,0.7692,0.7692,0,0,0,0.4,0.5);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(59).to({regY:0.6,scaleX:1,scaleY:1,x:640.65,y:360.25},30).wait(61).to({regX:0,regY:0,scaleX:0.9996,scaleY:0.9996,x:640.2537,y:359.5954},0).wait(1).to({scaleX:0.999,scaleY:0.999,x:640.2599,y:359.5033},0).wait(1).to({scaleX:0.9982,scaleY:0.9982,x:640.2688,y:359.3717},0).wait(1).to({scaleX:0.997,scaleY:0.997,x:640.2805,y:359.1986},0).wait(1).to({scaleX:0.9956,scaleY:0.9956,x:640.2951,y:358.9818},0).wait(1).to({scaleX:0.9939,scaleY:0.9939,x:640.3128,y:358.7193},0).wait(1).to({scaleX:0.9918,scaleY:0.9918,x:640.3337,y:358.409},0).wait(1).to({scaleX:0.9895,scaleY:0.9895,x:640.358,y:358.0486},0).wait(1).to({scaleX:0.9867,scaleY:0.9867,x:640.3858,y:357.6363},0).wait(1).to({scaleX:0.9837,scaleY:0.9837,x:640.4173,y:357.1702},0).wait(1).to({scaleX:0.9802,scaleY:0.9802,x:640.4524,y:356.6488},0).wait(1).to({scaleX:0.9764,scaleY:0.9764,x:640.4914,y:356.071},0).wait(1).to({scaleX:0.9723,scaleY:0.9723,x:640.5342,y:355.4363},0).wait(1).to({scaleX:0.9677,scaleY:0.9677,x:640.5809,y:354.7448},0).wait(1).to({scaleX:0.9628,scaleY:0.9628,x:640.6313,y:353.9977},0).wait(1).to({scaleX:0.9575,scaleY:0.9575,x:640.6853,y:353.1972},0).wait(1).to({scaleX:0.9519,scaleY:0.9519,x:640.7426,y:352.3467},0).wait(1).to({scaleX:0.946,scaleY:0.946,x:640.8031,y:351.4511},0).wait(1).to({scaleX:0.9399,scaleY:0.9399,x:640.8661,y:350.5167},0).wait(1).to({scaleX:0.9335,scaleY:0.9335,x:640.9312,y:349.551},0).wait(1).to({scaleX:0.927,scaleY:0.927,x:640.9979,y:348.5629},0).wait(1).to({scaleX:0.9205,scaleY:0.9205,x:641.0654,y:347.5621},0).wait(1).to({scaleX:0.9139,scaleY:0.9139,x:641.1331,y:346.5585},0).wait(1).to({scaleX:0.9073,scaleY:0.9073,x:641.2003,y:345.5624},0).wait(1).to({scaleX:0.9009,scaleY:0.9009,x:641.2663,y:344.5834},0).wait(1).to({scaleX:0.8946,scaleY:0.8946,x:641.3306,y:343.6303},0).wait(1).to({scaleX:0.8886,scaleY:0.8886,x:641.3927,y:342.7107},0).wait(1).to({scaleX:0.8828,scaleY:0.8828,x:641.452,y:341.8309},0).wait(1).to({scaleX:0.8773,scaleY:0.8773,x:641.5083,y:340.996},0).wait(1).to({scaleX:0.8721,scaleY:0.8721,x:641.5614,y:340.2096},0).wait(1).to({scaleX:0.8673,scaleY:0.8673,x:641.611,y:339.4741},0).wait(1).to({scaleX:0.8628,scaleY:0.8628,x:641.6571,y:338.7908},0).wait(1).to({scaleX:0.8586,scaleY:0.8586,x:641.6996,y:338.1603},0).wait(1).to({scaleX:0.8548,scaleY:0.8548,x:641.7386,y:337.5823},0).wait(1).to({scaleX:0.8514,scaleY:0.8514,x:641.7741,y:337.0559},0).wait(1).to({scaleX:0.8482,scaleY:0.8482,x:641.8062,y:336.5801},0).wait(1).to({scaleX:0.8454,scaleY:0.8454,x:641.835,y:336.1533},0).wait(1).to({scaleX:0.8429,scaleY:0.8429,x:641.8606,y:335.7738},0).wait(1).to({scaleX:0.8407,scaleY:0.8407,x:641.8831,y:335.4397},0).wait(1).to({scaleX:0.8388,scaleY:0.8388,x:641.9027,y:335.1493},0).wait(1).to({scaleX:0.8372,scaleY:0.8372,x:641.9195,y:334.9006},0).wait(1).to({regX:0.5,regY:0.6,scaleX:0.8358,scaleY:0.8358,x:642.25,y:335.15},0).to({regX:0.6,regY:0.7,scaleX:0.8349,scaleY:0.8349,x:640.45,y:331.15},1).wait(1).to({regX:0,regY:0,scaleX:0.8342,scaleY:0.8342,x:640.3996,y:343.5096},0).wait(1).to({scaleX:0.8336,scaleY:0.8336,x:640.7339,y:353.146},0).wait(1).to({regX:0.5,regY:0.6,scaleX:0.8333,scaleY:0.8333,x:641.4,y:360.2},0).wait(37).to({regX:0.4,x:640.6,y:360.25},0).to({regX:0.5,regY:0.7,scaleX:0.7407,scaleY:0.7407,y:300.95},49,cjs.Ease.quadInOut).wait(19));

	// ui_obj_
	this.ui = new lib.Scene_1_ui();
	this.ui.name = "ui";
	this.ui.setTransform(640,360,1,1,0,0,0,640,360);
	this.ui.depth = 0;
	this.ui.isAttachedToCamera = 1
	this.ui.isAttachedToMask = 0
	this.ui.layerDepth = 0
	this.ui.layerIndex = 0
	this.ui.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ui).wait(300));

	// message_obj_
	this.message = new lib.Scene_1_message();
	this.message.name = "message";
	this.message.setTransform(0.05,-0.05,1.3001,1.3001,0,0,0,225,15.2);
	this.message.depth = 0;
	this.message.isAttachedToCamera = 0
	this.message.isAttachedToMask = 0
	this.message.layerDepth = 0
	this.message.layerIndex = 1
	this.message.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.message).wait(149).to({regX:0.2,regY:-0.3,scaleX:1,scaleY:1,x:-0.05,y:0},0).wait(60).to({regX:107.6,regY:59.6,scaleX:1.2,scaleY:1.2,y:-0.1},0).to({regX:159.1,regY:37,scaleX:1.3302,scaleY:1.3302,x:0.05,y:0},60).wait(30).to({regX:166.2,regY:33.8,scaleX:1.3501,scaleY:1.3501,y:0.05},0).wait(1));

	// Comet_obj_
	this.Comet = new lib.Scene_1_Comet();
	this.Comet.name = "Comet";
	this.Comet.setTransform(0.05,-0.05,1.3001,1.3001,0,0,0,225,15.2);
	this.Comet.depth = 0;
	this.Comet.isAttachedToCamera = 0
	this.Comet.isAttachedToMask = 0
	this.Comet.layerDepth = 0
	this.Comet.layerIndex = 2
	this.Comet.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Comet).wait(213).to({regX:107.6,regY:59.6,scaleX:1.2,scaleY:1.2,x:-0.05,y:-0.1},0).wait(1).to({regX:1062.3,regY:-33.3,scaleX:1,scaleY:1,x:954.7,y:-92.95},0).wait(85).to({regX:166.2,regY:33.8,scaleX:1.3501,scaleY:1.3501,x:0.05,y:0.05},0).wait(1));

	// shimmer_obj_
	this.shimmer = new lib.Scene_1_shimmer();
	this.shimmer.name = "shimmer";
	this.shimmer.setTransform(373.2,636.25,1.3001,1.3001,0,0,0,512,504.6);
	this.shimmer.depth = 0;
	this.shimmer.isAttachedToCamera = 0
	this.shimmer.isAttachedToMask = 0
	this.shimmer.layerDepth = 0
	this.shimmer.layerIndex = 3
	this.shimmer.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.shimmer).wait(60).to({regX:507.4,regY:509,scaleX:1.2873,scaleY:1.2873,x:373.25},0).wait(4).to({regX:488.9,regY:526.5,scaleX:1.2382,scaleY:1.2382,x:373.2,y:636.2},0).wait(4).to({regX:470.4,regY:544,scaleX:1.1927,scaleY:1.1927,y:636.25},0).wait(2).to({regX:461.2,regY:552.7,scaleX:1.1712,scaleY:1.1712},0).wait(3).to({regX:447.4,regY:565.9,scaleX:1.1404,scaleY:1.1404,x:373.3},0).wait(2).to({regX:438.1,regY:574.6,scaleX:1.1207,scaleY:1.1207,x:373.25},0).wait(4).to({regX:419.6,regY:592.2,scaleX:1.0834,scaleY:1.0834,x:373.2,y:636.2},0).wait(4).to({regX:401.2,regY:609.7,scaleX:1.0484,scaleY:1.0484,x:373.25,y:636.25},0).wait(2).to({regX:391.9,regY:618.5,scaleX:1.0318,scaleY:1.0318,x:373.15,y:636.3},0).wait(3).to({regX:378.1,regY:631.6,scaleX:1.0078,scaleY:1.0078,x:373.25,y:636.25},0).wait(2).to({regX:373.4,regY:636,scaleX:1,scaleY:1,x:373.15,y:636.3},0).wait(210));

	// detail_obj_
	this.detail = new lib.Scene_1_detail();
	this.detail.name = "detail";
	this.detail.setTransform(646.85,642.1,1.3001,1.3001,0,0,0,722.5,509.1);
	this.detail.depth = 0;
	this.detail.isAttachedToCamera = 0
	this.detail.isAttachedToMask = 0
	this.detail.layerDepth = 0
	this.detail.layerIndex = 4
	this.detail.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.detail).wait(300));

	// ground_obj_
	this.ground = new lib.Scene_1_ground();
	this.ground.name = "ground";
	this.ground.setTransform(640,630,1.3001,1.3001,0,0,0,717.2,499.8);
	this.ground.depth = 0;
	this.ground.isAttachedToCamera = 0
	this.ground.isAttachedToMask = 0
	this.ground.layerDepth = 0
	this.ground.layerIndex = 5
	this.ground.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ground).wait(300));

	// mountains_obj_
	this.mountains = new lib.Scene_1_mountains();
	this.mountains.name = "mountains";
	this.mountains.setTransform(638.7,350.35,1.3001,1.3001,0,0,0,716.2,284.7);
	this.mountains.depth = 0;
	this.mountains.isAttachedToCamera = 0
	this.mountains.isAttachedToMask = 0
	this.mountains.layerDepth = 0
	this.mountains.layerIndex = 6
	this.mountains.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.mountains).wait(300));

	// sun_obj_
	this.sun = new lib.Scene_1_sun();
	this.sun.name = "sun";
	this.sun.setTransform(1046.9,219.05,1.3001,1.3001,0,0,0,1030.2,183.7);
	this.sun.depth = 0;
	this.sun.isAttachedToCamera = 0
	this.sun.isAttachedToMask = 0
	this.sun.layerDepth = 0
	this.sun.layerIndex = 7
	this.sun.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sun).wait(59).to({x:1046.95,y:219.1},0).wait(1).to({regX:1030.8,regY:184.8,scaleX:1.2873,scaleY:1.2873,x:1047,y:218.95},0).wait(1).to({regX:1031.3,regY:186,scaleX:1.2746,scaleY:1.2746,x:1046.9,y:219.05},0).wait(1).to({regX:1031.9,regY:187.2,scaleX:1.2622,scaleY:1.2622,x:1047},0).wait(1).to({regX:1032.5,regY:188.4,scaleX:1.2501,scaleY:1.2501,y:219},0).wait(1).to({regX:1033,regY:189.6,scaleX:1.2382,scaleY:1.2382,x:1046.9,y:219.05},0).wait(1).to({regX:1033.6,regY:190.7,scaleX:1.2265,scaleY:1.2265,x:1046.95,y:219},0).wait(1).to({regX:1034.2,regY:191.9,scaleX:1.215,scaleY:1.215,x:1047.05},0).wait(1).to({regX:1034.8,regY:193,scaleX:1.2038,scaleY:1.2038,x:1047.1},0).wait(1).to({regX:1035.3,regY:194.2,scaleX:1.1927,scaleY:1.1927,x:1047,y:219.05},0).wait(1).to({regX:1035.8,regY:195.3,scaleX:1.1819,scaleY:1.1819,x:1046.9,y:218.95},0).wait(1).to({regX:1036.5,regY:196.5,scaleX:1.1712,scaleY:1.1712,x:1047,y:219.05},0).wait(1).to({regX:1037,regY:197.7,scaleX:1.1608,scaleY:1.1608,x:1046.95,y:219},0).wait(1).to({regX:1037.6,regY:198.8,scaleX:1.1505,scaleY:1.1505,y:218.95},0).wait(1).to({regX:1038.2,regY:200,scaleX:1.1404,scaleY:1.1404,x:1047.05,y:219},0).wait(1).to({regX:1038.8,regY:201.2,scaleX:1.1305,scaleY:1.1305,x:1047,y:219.05},0).wait(1).to({regX:1039.2,regY:202.3,scaleX:1.1207,scaleY:1.1207,x:1046.95,y:219},0).wait(1).to({regX:1039.9,regY:203.5,scaleX:1.1112,scaleY:1.1112,x:1047},0).wait(1).to({regX:1040.4,regY:204.7,scaleX:1.1017,scaleY:1.1017,y:219.05},0).wait(1).to({regX:1041,regY:205.8,scaleX:1.0925,scaleY:1.0925,x:1047.05,y:219},0).wait(1).to({regX:1041.5,regY:207.1,scaleX:1.0834,scaleY:1.0834,x:1046.9},0).wait(1).to({regX:1042.2,regY:208.2,scaleX:1.0744,scaleY:1.0744,x:1047.05},0).wait(1).to({regX:1042.8,regY:209.4,scaleX:1.0656,scaleY:1.0656},0).wait(1).to({regX:1043.3,regY:210.5,scaleX:1.057,scaleY:1.057,x:1047},0).wait(1).to({regX:1043.8,regY:211.7,scaleX:1.0484,scaleY:1.0484},0).wait(1).to({regX:1044.4,regY:212.8,scaleX:1.04,scaleY:1.04,y:218.95},0).wait(1).to({regX:1045,regY:214.1,scaleX:1.0318,scaleY:1.0318,y:219.05},0).wait(1).to({regX:1045.5,regY:215.2,scaleX:1.0237,scaleY:1.0237,x:1046.9,y:219},0).wait(1).to({regX:1046.1,regY:216.4,scaleX:1.0156,scaleY:1.0156,x:1047},0).wait(1).to({regX:1046.7,regY:217.6,scaleX:1.0078,scaleY:1.0078,y:219.05},0).wait(1).to({regX:1047.2,regY:218.7,scaleX:1,scaleY:1,x:1046.95,y:219},0).wait(211));

	// starsmask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_1 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_2 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_3 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_4 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_5 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_6 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_7 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_8 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_9 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_10 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_11 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_12 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_13 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_14 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_15 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_16 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_17 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_18 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_19 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_20 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_21 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_22 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_23 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_24 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_25 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_26 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_27 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_28 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_29 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_30 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_31 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_32 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_33 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_34 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_35 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_36 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_37 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_38 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_39 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_40 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_41 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_42 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_43 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_44 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_45 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_46 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_47 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_48 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_49 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_50 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_51 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_52 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_53 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_54 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_55 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_56 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_57 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_58 = new cjs.Graphics().p("EiCAAAGIAAgMMEEBAAAIAAAMg");
	var mask_graphics_59 = new cjs.Graphics().p("EiCAAAGIAAgLMEEBAAAIAAALg");
	var mask_graphics_60 = new cjs.Graphics().p("EiAuAAHIAAgNMEBdAAAIAAANg");
	var mask_graphics_61 = new cjs.Graphics().p("Eh/dAAGIAAgLMD+7AAAIAAALg");
	var mask_graphics_62 = new cjs.Graphics().p("Eh+NAAGIAAgLMD8bAAAIAAALg");
	var mask_graphics_63 = new cjs.Graphics().p("Eh9AAAGIAAgLMD6BAAAIAAALg");
	var mask_graphics_64 = new cjs.Graphics().p("Eh7zAAGIAAgLMD3oAAAIAAALg");
	var mask_graphics_65 = new cjs.Graphics().p("Eh6pAAGIAAgLMD1TAAAIAAALg");
	var mask_graphics_66 = new cjs.Graphics().p("Eh5fAAGIAAgLMDy/AAAIAAALg");
	var mask_graphics_67 = new cjs.Graphics().p("Eh4XAAGIAAgLMDwvAAAIAAALg");
	var mask_graphics_68 = new cjs.Graphics().p("Eh3QAAGIAAgLMDuhAAAIAAALg");
	var mask_graphics_69 = new cjs.Graphics().p("Eh2LAAGIAAgLMDsXAAAIAAALg");
	var mask_graphics_70 = new cjs.Graphics().p("Eh1HAAGIAAgLMDqPAAAIAAALg");
	var mask_graphics_71 = new cjs.Graphics().p("Eh0EAAGIAAgLMDoJAAAIAAALg");
	var mask_graphics_72 = new cjs.Graphics().p("EhzCAAGIAAgLMDmFAAAIAAALg");
	var mask_graphics_73 = new cjs.Graphics().p("EhyCAAGIAAgLMDkFAAAIAAALg");
	var mask_graphics_74 = new cjs.Graphics().p("EhxCAAGIAAgLMDiFAAAIAAALg");
	var mask_graphics_75 = new cjs.Graphics().p("EhwEAAFIAAgJMDgJAAAIAAAJg");
	var mask_graphics_76 = new cjs.Graphics().p("EhvHAAFIAAgKMDePAAAIAAAKg");
	var mask_graphics_77 = new cjs.Graphics().p("EhuKAAFIAAgJMDcVAAAIAAAJg");
	var mask_graphics_78 = new cjs.Graphics().p("EhtPAAFIAAgKMDafAAAIAAAKg");
	var mask_graphics_79 = new cjs.Graphics().p("EhsUAAGIAAgKMDYpAAAIAAAKg");
	var mask_graphics_80 = new cjs.Graphics().p("EhrbAAFIAAgJMDW3AAAIAAAJg");
	var mask_graphics_81 = new cjs.Graphics().p("EhqjAAFIAAgJMDVHAAAIAAAJg");
	var mask_graphics_82 = new cjs.Graphics().p("EhprAAFIAAgJMDTYAAAIAAAJg");
	var mask_graphics_83 = new cjs.Graphics().p("Eho1AAFIAAgJMDRrAAAIAAAJg");
	var mask_graphics_84 = new cjs.Graphics().p("Ehn/AAFIAAgJMDP/AAAIAAAJg");
	var mask_graphics_85 = new cjs.Graphics().p("EhnLAAFIAAgJMDOXAAAIAAAJg");
	var mask_graphics_86 = new cjs.Graphics().p("EhmWAAFIAAgJMDMtAAAIAAAJg");
	var mask_graphics_87 = new cjs.Graphics().p("EhljAAFIAAgJMDLHAAAIAAAJg");
	var mask_graphics_88 = new cjs.Graphics().p("EhkxAAFIAAgJMDJjAAAIAAAJg");
	var mask_graphics_89 = new cjs.Graphics().p("Ehj/AAFIAAgJMDH/AAAIAAAJg");
	var mask_graphics_90 = new cjs.Graphics().p("Ehj/ABBIAAiBMDH/AAAIAACBg");
	var mask_graphics_91 = new cjs.Graphics().p("Ehj/AB9IAAj5MDH/AAAIAAD5g");
	var mask_graphics_92 = new cjs.Graphics().p("Ehj/AC5IAAlxMDH/AAAIAAFxg");
	var mask_graphics_93 = new cjs.Graphics().p("Ehj/AD1IAAnpMDH/AAAIAAHpg");
	var mask_graphics_94 = new cjs.Graphics().p("Ehj/AExIAAphMDH/AAAIAAJhg");
	var mask_graphics_95 = new cjs.Graphics().p("Ehj/AFsIAArYMDH/AAAIAALYg");
	var mask_graphics_96 = new cjs.Graphics().p("Ehj/AGpIAAtRMDH/AAAIAANRg");
	var mask_graphics_97 = new cjs.Graphics().p("Ehj/AHkIAAvHMDH/AAAIAAPHg");
	var mask_graphics_98 = new cjs.Graphics().p("Ehj/AIgIAAw/MDH/AAAIAAQ/g");
	var mask_graphics_99 = new cjs.Graphics().p("Ehj/AJcIAAy3MDH/AAAIAAS3g");
	var mask_graphics_100 = new cjs.Graphics().p("Ehj/AKYIAA0vMDH/AAAIAAUvg");
	var mask_graphics_101 = new cjs.Graphics().p("Ehj/ALUIAA2nMDH/AAAIAAWng");
	var mask_graphics_102 = new cjs.Graphics().p("Ehj/AMQIAA4fMDH/AAAIAAYfg");
	var mask_graphics_103 = new cjs.Graphics().p("Ehj/ANMIAA6XMDH/AAAIAAaXg");
	var mask_graphics_104 = new cjs.Graphics().p("Ehj/AOIIAA8PMDH/AAAIAAcPg");
	var mask_graphics_105 = new cjs.Graphics().p("Ehj/APEIAA+HMDH/AAAIAAeHg");
	var mask_graphics_106 = new cjs.Graphics().p("Ehj/AQAIAA//MDH/AAAIAAf/g");
	var mask_graphics_107 = new cjs.Graphics().p("Ehj/AQ7MAAAgh2MDH/AAAMAAAAh2g");
	var mask_graphics_108 = new cjs.Graphics().p("Ehj/AR3MAAAgjuMDH/AAAMAAAAjug");
	var mask_graphics_109 = new cjs.Graphics().p("Ehj/ASzMAAAgllMDH/AAAMAAAAllg");
	var mask_graphics_110 = new cjs.Graphics().p("Ehj/ATvMAAAgndMDH/AAAMAAAAndg");
	var mask_graphics_111 = new cjs.Graphics().p("Ehj/AUrMAAAgpVMDH/AAAMAAAApVg");
	var mask_graphics_112 = new cjs.Graphics().p("Ehj/AVnMAAAgrNMDH/AAAMAAAArNg");
	var mask_graphics_113 = new cjs.Graphics().p("Ehj/AWjMAAAgtFMDH/AAAMAAAAtFg");
	var mask_graphics_114 = new cjs.Graphics().p("Ehj/AXfMAAAgu9MDH/AAAMAAAAu9g");
	var mask_graphics_115 = new cjs.Graphics().p("Ehj/AYbMAAAgw1MDH/AAAMAAAAw1g");
	var mask_graphics_116 = new cjs.Graphics().p("Ehj/AZXMAAAgytMDH/AAAMAAAAytg");
	var mask_graphics_117 = new cjs.Graphics().p("Ehj/AaTMAAAg0lMDH/AAAMAAAA0lg");
	var mask_graphics_118 = new cjs.Graphics().p("Ehj/AbPMAAAg2dMDH/AAAMAAAA2dg");
	var mask_graphics_119 = new cjs.Graphics().p("Ehj/AcLMAAAg4VMDH/AAAMAAAA4Vg");
	var mask_graphics_120 = new cjs.Graphics().p("Ehj/AdGMAAAg6MMDH/AAAMAAAA6Mg");
	var mask_graphics_121 = new cjs.Graphics().p("Ehj/AeCMAAAg8DMDH/AAAMAAAA8Dg");
	var mask_graphics_122 = new cjs.Graphics().p("Ehj/Ae+MAAAg97MDH/AAAMAAAA97g");
	var mask_graphics_123 = new cjs.Graphics().p("Ehj/Af6MAAAg/zMDH/AAAMAAAA/zg");
	var mask_graphics_124 = new cjs.Graphics().p("Ehj/Ag2MAAAhBrMDH/AAAMAAABBrg");
	var mask_graphics_125 = new cjs.Graphics().p("Ehj/AhyMAAAhDjMDH/AAAMAAABDjg");
	var mask_graphics_126 = new cjs.Graphics().p("Ehj/AiuMAAAhFbMDH/AAAMAAABFbg");
	var mask_graphics_127 = new cjs.Graphics().p("Ehj/AjqMAAAhHTMDH/AAAMAAABHTg");
	var mask_graphics_128 = new cjs.Graphics().p("Ehj/AkmMAAAhJLMDH/AAAMAAABJLg");
	var mask_graphics_129 = new cjs.Graphics().p("Ehj/AliMAAAhLDMDH/AAAMAAABLDg");
	var mask_graphics_130 = new cjs.Graphics().p("Ehj/AmdMAAAhM6MDH/AAAMAAABM6g");
	var mask_graphics_131 = new cjs.Graphics().p("Ehj/AnaMAAAhOzMDH/AAAMAAABOzg");
	var mask_graphics_132 = new cjs.Graphics().p("Ehj/AoVMAAAhQqMDH/AAAMAAABQqg");
	var mask_graphics_133 = new cjs.Graphics().p("Ehj/ApRMAAAhShMDH/AAAMAAABShg");
	var mask_graphics_134 = new cjs.Graphics().p("Ehj/AqNMAAAhUZMDH/AAAMAAABUZg");
	var mask_graphics_135 = new cjs.Graphics().p("Ehj/ArJMAAAhWRMDH/AAAMAAABWRg");
	var mask_graphics_136 = new cjs.Graphics().p("Ehj/AsFMAAAhYJMDH/AAAMAAABYJg");
	var mask_graphics_137 = new cjs.Graphics().p("Ehj/AtBMAAAhaBMDH/AAAMAAABaBg");
	var mask_graphics_138 = new cjs.Graphics().p("Ehj/At9MAAAhb5MDH/AAAMAAABb5g");
	var mask_graphics_139 = new cjs.Graphics().p("Ehj/Au5MAAAhdxMDH/AAAMAAABdxg");
	var mask_graphics_140 = new cjs.Graphics().p("Ehj/Av1MAAAhfpMDH/AAAMAAABfpg");
	var mask_graphics_141 = new cjs.Graphics().p("Ehj/AwxMAAAhhhMDH/AAAMAAABhhg");
	var mask_graphics_142 = new cjs.Graphics().p("Ehj/AxsMAAAhjYMDH/AAAMAAABjYg");
	var mask_graphics_143 = new cjs.Graphics().p("Ehj/AyoMAAAhlQMDH/AAAMAAABlQg");
	var mask_graphics_144 = new cjs.Graphics().p("Ehj/AzlMAAAhnJMDH/AAAMAAABnJg");
	var mask_graphics_145 = new cjs.Graphics().p("Ehj/A0gMAAAho/MDH/AAAMAAABo/g");
	var mask_graphics_146 = new cjs.Graphics().p("Ehj/A1cMAAAhq3MDH/AAAMAAABq3g");
	var mask_graphics_147 = new cjs.Graphics().p("Ehj/A2YMAAAhsvMDH/AAAMAAABsvg");
	var mask_graphics_148 = new cjs.Graphics().p("Ehj/A3UMAAAhunMDH/AAAMAAABung");
	var mask_graphics_149 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_150 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_151 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_152 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_153 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_154 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_155 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_156 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_157 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_158 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_159 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_160 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_161 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_162 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_163 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_164 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_165 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_166 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_167 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_168 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_169 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_170 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_171 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_172 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_173 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_174 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_175 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_176 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_177 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_178 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_179 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_180 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_181 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_182 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_183 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_184 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_185 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_186 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_187 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_188 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_189 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_190 = new cjs.Graphics().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	var mask_graphics_191 = new cjs.Graphics().p("Eh3oBDTMAAAiGlMDvRAAAMAAACGlg");
	var mask_graphics_192 = new cjs.Graphics().p("Eh3xBDYMAAAiGvMDvjAAAMAAACGvg");
	var mask_graphics_193 = new cjs.Graphics().p("Eh34BDcMAAAiG3MDvwAAAMAAACG3g");
	var mask_graphics_194 = new cjs.Graphics().p("Eh38BDfMAAAiG8MDv5AAAMAAACG8g");
	var mask_graphics_195 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_196 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_197 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_198 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_199 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_200 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_201 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_202 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_203 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_204 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_205 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_206 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_207 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_208 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_209 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_210 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_211 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_212 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_213 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_214 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_215 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_216 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_217 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_218 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_219 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_220 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_221 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_222 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_223 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_224 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_225 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_226 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_227 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_228 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_229 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_230 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_231 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_232 = new cjs.Graphics().p("Eh3/BDgMAAAiG/MDv/AAAMAAACG/g");
	var mask_graphics_233 = new cjs.Graphics().p("Eh4ABDhMAAAiHBMDwBAAAMAAACHBg");
	var mask_graphics_234 = new cjs.Graphics().p("Eh4CBDiMAAAiHDMDwFAAAMAAACHDg");
	var mask_graphics_235 = new cjs.Graphics().p("Eh4FBDkMAAAiHHMDwMAAAMAAACHHg");
	var mask_graphics_236 = new cjs.Graphics().p("Eh4LBDnMAAAiHNMDwXAAAMAAACHNg");
	var mask_graphics_237 = new cjs.Graphics().p("Eh4RBDqMAAAiHTMDwjAAAMAAACHTg");
	var mask_graphics_238 = new cjs.Graphics().p("Eh4ZBDuMAAAiHcMDwzAAAMAAACHcg");
	var mask_graphics_239 = new cjs.Graphics().p("Eh4iBD0MAAAiHnMDxFAAAMAAACHng");
	var mask_graphics_240 = new cjs.Graphics().p("Eh4tBD6MAAAiHzMDxbAAAMAAACHzg");
	var mask_graphics_241 = new cjs.Graphics().p("Eh45BEBMAAAiIBMDxzAAAMAAACIBg");
	var mask_graphics_242 = new cjs.Graphics().p("Eh5HBEJMAAAiIQMDyPAAAMAAACIQg");
	var mask_graphics_243 = new cjs.Graphics().p("Eh5WBERMAAAiIhMDytAAAMAAACIhg");
	var mask_graphics_244 = new cjs.Graphics().p("Eh5nBEbMAAAiI0MDzPAAAMAAACI0g");
	var mask_graphics_245 = new cjs.Graphics().p("Eh55BElMAAAiJJMDzzAAAMAAACJJg");
	var mask_graphics_246 = new cjs.Graphics().p("Eh6NBEwMAAAiJfMD0bAAAMAAACJfg");
	var mask_graphics_247 = new cjs.Graphics().p("Eh6jBE8MAAAiJ3MD1HAAAMAAACJ3g");
	var mask_graphics_248 = new cjs.Graphics().p("Eh66BFJMAAAiKRMD11AAAMAAACKRg");
	var mask_graphics_249 = new cjs.Graphics().p("Eh7SBFXMAAAiKtMD2lAAAMAAACKtg");
	var mask_graphics_250 = new cjs.Graphics().p("Eh7tBFmMAAAiLLMD3bAAAMAAACLLg");
	var mask_graphics_251 = new cjs.Graphics().p("Eh8JBF1MAAAiLpMD4TAAAMAAACLpg");
	var mask_graphics_252 = new cjs.Graphics().p("Eh8mBGGMAAAiMLMD5NAAAMAAACMLg");
	var mask_graphics_253 = new cjs.Graphics().p("Eh9GBGYMAAAiMvMD6NAAAMAAACMvg");
	var mask_graphics_254 = new cjs.Graphics().p("Eh9oBGrMAAAiNVMD7QAAAMAAACNVg");
	var mask_graphics_255 = new cjs.Graphics().p("Eh+LBG/MAAAiN9MD8XAAAMAAACN9g");
	var mask_graphics_256 = new cjs.Graphics().p("Eh+wBHTMAAAiOmMD9hAAAMAAACOmg");
	var mask_graphics_257 = new cjs.Graphics().p("Eh/XBHpMAAAiPRMD+vAAAMAAACPRg");
	var mask_graphics_258 = new cjs.Graphics().p("Eh/8BH+MAAAiP7MD/5AAAMAAACP7g");
	var mask_graphics_259 = new cjs.Graphics().p("EiAhBITMAAAiQlMEBDAAAMAAACQlg");
	var mask_graphics_260 = new cjs.Graphics().p("EiBEBInMAAAiRNMECJAAAMAAACRNg");
	var mask_graphics_261 = new cjs.Graphics().p("EiBmBI6MAAAiRzMEDNAAAMAAACRzg");
	var mask_graphics_262 = new cjs.Graphics().p("EiCHBJMMAAAiSXMEEPAAAMAAACSXg");
	var mask_graphics_263 = new cjs.Graphics().p("EiClBJeMAAAiS7MEFLAAAMAAACS7g");
	var mask_graphics_264 = new cjs.Graphics().p("EiDDBJuMAAAiTbMEGHAAAMAAACTbg");
	var mask_graphics_265 = new cjs.Graphics().p("EiDfBJ+MAAAiT7MEG/AAAMAAACT7g");
	var mask_graphics_266 = new cjs.Graphics().p("EiD6BKNMAAAiUZMEH1AAAMAAACUZg");
	var mask_graphics_267 = new cjs.Graphics().p("EiETBKbMAAAiU1MEInAAAMAAACU1g");
	var mask_graphics_268 = new cjs.Graphics().p("EiEqBKoMAAAiVPMEJVAAAMAAACVPg");
	var mask_graphics_269 = new cjs.Graphics().p("EiFABK0MAAAiVoMEKBAAAMAAACVog");
	var mask_graphics_270 = new cjs.Graphics().p("EiFUBLAMAAAiV/MEKpAAAMAAACV/g");
	var mask_graphics_271 = new cjs.Graphics().p("EiFmBLKMAAAiWTMELOAAAMAAACWTg");
	var mask_graphics_272 = new cjs.Graphics().p("EiF3BLUMAAAiWnMELvAAAMAAACWng");
	var mask_graphics_273 = new cjs.Graphics().p("EiGGBLcMAAAiW3MEMNAAAMAAACW3g");
	var mask_graphics_274 = new cjs.Graphics().p("EiGUBLkMAAAiXHMEMpAAAMAAACXHg");
	var mask_graphics_275 = new cjs.Graphics().p("EiGfBLqMAAAiXTMENAAAAMAAACXTg");
	var mask_graphics_276 = new cjs.Graphics().p("EiGpBLwMAAAiXfMENTAAAMAAACXfg");
	var mask_graphics_277 = new cjs.Graphics().p("EiGxBL0MAAAiXnMENjAAAMAAACXng");
	var mask_graphics_278 = new cjs.Graphics().p("EiG3BL4MAAAiXvMENwAAAMAAACXvg");
	var mask_graphics_279 = new cjs.Graphics().p("EiG8BL6MAAAiXzMEN5AAAMAAACXzg");
	var mask_graphics_280 = new cjs.Graphics().p("EiG/BL8MAAAiX3MEN/AAAMAAACX3g");
	var mask_graphics_281 = new cjs.Graphics().p("EiHABL8MAAAiX3MEOAAAAMAAACX3g");
	var mask_graphics_282 = new cjs.Graphics().p("EiHABL8MAAAiX3MEOAAAAMAAACX3g");
	var mask_graphics_283 = new cjs.Graphics().p("EiHABL8MAAAiX3MEOAAAAMAAACX3g");
	var mask_graphics_284 = new cjs.Graphics().p("EiHABL8MAAAiX3MEOAAAAMAAACX3g");
	var mask_graphics_285 = new cjs.Graphics().p("EiHABL8MAAAiX3MEOAAAAMAAACX3g");
	var mask_graphics_286 = new cjs.Graphics().p("EiHABL8MAAAiX3MEOAAAAMAAACX3g");
	var mask_graphics_287 = new cjs.Graphics().p("EiHABL8MAAAiX3MEOAAAAMAAACX3g");
	var mask_graphics_288 = new cjs.Graphics().p("EiHABL8MAAAiX3MEOAAAAMAAACX3g");
	var mask_graphics_289 = new cjs.Graphics().p("EiHABL8MAAAiX3MEOAAAAMAAACX3g");
	var mask_graphics_290 = new cjs.Graphics().p("EiHABL8MAAAiX3MEOAAAAMAAACX3g");
	var mask_graphics_291 = new cjs.Graphics().p("EiHABL8MAAAiX3MEOAAAAMAAACX3g");
	var mask_graphics_292 = new cjs.Graphics().p("EiHABL8MAAAiX3MEOAAAAMAAACX3g");
	var mask_graphics_293 = new cjs.Graphics().p("EiHABL8MAAAiX3MEOAAAAMAAACX3g");
	var mask_graphics_294 = new cjs.Graphics().p("EiHABL8MAAAiX3MEOAAAAMAAACX3g");
	var mask_graphics_295 = new cjs.Graphics().p("EiHABL8MAAAiX3MEOAAAAMAAACX3g");
	var mask_graphics_296 = new cjs.Graphics().p("EiHABL8MAAAiX3MEOAAAAMAAACX3g");
	var mask_graphics_297 = new cjs.Graphics().p("EiHABL8MAAAiX3MEOAAAAMAAACX3g");
	var mask_graphics_298 = new cjs.Graphics().p("EiHABL8MAAAiX3MEOAAAAMAAACX3g");
	var mask_graphics_299 = new cjs.Graphics().p("EiHABL8MAAAiX3MEOAAAAMAAACX3g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_1,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_2,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_3,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_4,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_5,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_6,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_7,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_8,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_9,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_10,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_11,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_12,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_13,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_14,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_15,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_16,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_17,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_18,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_19,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_20,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_21,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_22,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_23,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_24,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_25,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_26,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_27,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_28,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_29,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_30,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_31,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_32,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_33,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_34,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_35,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_36,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_37,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_38,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_39,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_40,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_41,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_42,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_43,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_44,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_45,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_46,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_47,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_48,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_49,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_50,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_51,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_52,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_53,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_54,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_55,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_56,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_57,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_58,x:539.625,y:-19.15}).wait(1).to({graphics:mask_graphics_59,x:539.675,y:-19.1}).wait(1).to({graphics:mask_graphics_60,x:543.95,y:-18.3}).wait(1).to({graphics:mask_graphics_61,x:548.175,y:-17.425}).wait(1).to({graphics:mask_graphics_62,x:552.325,y:-16.625}).wait(1).to({graphics:mask_graphics_63,x:556.375,y:-15.875}).wait(1).to({graphics:mask_graphics_64,x:560.3,y:-15.075}).wait(1).to({graphics:mask_graphics_65,x:564.225,y:-14.275}).wait(1).to({graphics:mask_graphics_66,x:568.075,y:-13.55}).wait(1).to({graphics:mask_graphics_67,x:571.825,y:-12.75}).wait(1).to({graphics:mask_graphics_68,x:575.5,y:-12}).wait(1).to({graphics:mask_graphics_69,x:579.125,y:-11.25}).wait(1).to({graphics:mask_graphics_70,x:582.65,y:-10.525}).wait(1).to({graphics:mask_graphics_71,x:586.15,y:-9.925}).wait(1).to({graphics:mask_graphics_72,x:589.525,y:-9.175}).wait(1).to({graphics:mask_graphics_73,x:592.925,y:-8.525}).wait(1).to({graphics:mask_graphics_74,x:596.175,y:-7.825}).wait(1).to({graphics:mask_graphics_75,x:599.525,y:-7.2}).wait(1).to({graphics:mask_graphics_76,x:602.65,y:-6.55}).wait(1).to({graphics:mask_graphics_77,x:605.875,y:-5.95}).wait(1).to({graphics:mask_graphics_78,x:608.95,y:-5.3}).wait(1).to({graphics:mask_graphics_79,x:611.95,y:-4.8}).wait(1).to({graphics:mask_graphics_80,x:614.925,y:-4.175}).wait(1).to({graphics:mask_graphics_81,x:617.85,y:-3.625}).wait(1).to({graphics:mask_graphics_82,x:620.7,y:-2.975}).wait(1).to({graphics:mask_graphics_83,x:623.625,y:-2.425}).wait(1).to({graphics:mask_graphics_84,x:626.425,y:-1.825}).wait(1).to({graphics:mask_graphics_85,x:629.15,y:-1.325}).wait(1).to({graphics:mask_graphics_86,x:631.825,y:-0.8}).wait(1).to({graphics:mask_graphics_87,x:634.55,y:-0.3}).wait(1).to({graphics:mask_graphics_88,x:637.175,y:0.25}).wait(1).to({graphics:mask_graphics_89,x:639.75,y:0.8}).wait(1).to({graphics:mask_graphics_90,x:639.75,y:6.8}).wait(1).to({graphics:mask_graphics_91,x:639.75,y:12.775}).wait(1).to({graphics:mask_graphics_92,x:639.75,y:18.775}).wait(1).to({graphics:mask_graphics_93,x:639.75,y:24.775}).wait(1).to({graphics:mask_graphics_94,x:639.75,y:30.75}).wait(1).to({graphics:mask_graphics_95,x:639.75,y:36.75}).wait(1).to({graphics:mask_graphics_96,x:639.75,y:42.75}).wait(1).to({graphics:mask_graphics_97,x:639.75,y:48.725}).wait(1).to({graphics:mask_graphics_98,x:639.75,y:54.725}).wait(1).to({graphics:mask_graphics_99,x:639.75,y:60.725}).wait(1).to({graphics:mask_graphics_100,x:639.75,y:66.7}).wait(1).to({graphics:mask_graphics_101,x:639.75,y:72.7}).wait(1).to({graphics:mask_graphics_102,x:639.75,y:78.7}).wait(1).to({graphics:mask_graphics_103,x:639.75,y:84.675}).wait(1).to({graphics:mask_graphics_104,x:639.75,y:90.675}).wait(1).to({graphics:mask_graphics_105,x:639.75,y:96.675}).wait(1).to({graphics:mask_graphics_106,x:639.75,y:102.65}).wait(1).to({graphics:mask_graphics_107,x:639.75,y:108.65}).wait(1).to({graphics:mask_graphics_108,x:639.75,y:114.65}).wait(1).to({graphics:mask_graphics_109,x:639.75,y:120.625}).wait(1).to({graphics:mask_graphics_110,x:639.75,y:126.625}).wait(1).to({graphics:mask_graphics_111,x:639.75,y:132.625}).wait(1).to({graphics:mask_graphics_112,x:639.75,y:138.6}).wait(1).to({graphics:mask_graphics_113,x:639.75,y:144.6}).wait(1).to({graphics:mask_graphics_114,x:639.75,y:150.6}).wait(1).to({graphics:mask_graphics_115,x:639.75,y:156.575}).wait(1).to({graphics:mask_graphics_116,x:639.75,y:162.575}).wait(1).to({graphics:mask_graphics_117,x:639.75,y:168.575}).wait(1).to({graphics:mask_graphics_118,x:639.75,y:174.55}).wait(1).to({graphics:mask_graphics_119,x:639.75,y:180.55}).wait(1).to({graphics:mask_graphics_120,x:639.75,y:186.55}).wait(1).to({graphics:mask_graphics_121,x:639.75,y:192.525}).wait(1).to({graphics:mask_graphics_122,x:639.75,y:198.525}).wait(1).to({graphics:mask_graphics_123,x:639.75,y:204.525}).wait(1).to({graphics:mask_graphics_124,x:639.75,y:210.5}).wait(1).to({graphics:mask_graphics_125,x:639.75,y:216.5}).wait(1).to({graphics:mask_graphics_126,x:639.75,y:222.5}).wait(1).to({graphics:mask_graphics_127,x:639.75,y:228.475}).wait(1).to({graphics:mask_graphics_128,x:639.75,y:234.475}).wait(1).to({graphics:mask_graphics_129,x:639.75,y:240.475}).wait(1).to({graphics:mask_graphics_130,x:639.75,y:246.45}).wait(1).to({graphics:mask_graphics_131,x:639.75,y:252.45}).wait(1).to({graphics:mask_graphics_132,x:639.75,y:258.45}).wait(1).to({graphics:mask_graphics_133,x:639.75,y:264.425}).wait(1).to({graphics:mask_graphics_134,x:639.75,y:270.425}).wait(1).to({graphics:mask_graphics_135,x:639.75,y:276.425}).wait(1).to({graphics:mask_graphics_136,x:639.75,y:282.4}).wait(1).to({graphics:mask_graphics_137,x:639.75,y:288.4}).wait(1).to({graphics:mask_graphics_138,x:639.75,y:294.4}).wait(1).to({graphics:mask_graphics_139,x:639.75,y:300.375}).wait(1).to({graphics:mask_graphics_140,x:639.75,y:306.375}).wait(1).to({graphics:mask_graphics_141,x:639.75,y:312.375}).wait(1).to({graphics:mask_graphics_142,x:639.75,y:318.35}).wait(1).to({graphics:mask_graphics_143,x:639.75,y:324.35}).wait(1).to({graphics:mask_graphics_144,x:639.75,y:330.35}).wait(1).to({graphics:mask_graphics_145,x:639.75,y:336.325}).wait(1).to({graphics:mask_graphics_146,x:639.75,y:342.325}).wait(1).to({graphics:mask_graphics_147,x:639.75,y:348.325}).wait(1).to({graphics:mask_graphics_148,x:639.75,y:354.3}).wait(1).to({graphics:mask_graphics_149,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_150,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_151,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_152,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_153,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_154,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_155,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_156,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_157,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_158,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_159,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_160,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_161,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_162,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_163,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_164,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_165,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_166,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_167,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_168,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_169,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_170,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_171,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_172,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_173,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_174,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_175,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_176,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_177,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_178,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_179,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_180,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_181,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_182,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_183,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_184,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_185,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_186,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_187,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_188,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_189,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_190,x:639.75,y:360.3}).wait(1).to({graphics:mask_graphics_191,x:637.825,y:390.375}).wait(1).to({graphics:mask_graphics_192,x:640.15,y:395.4}).wait(1).to({graphics:mask_graphics_193,x:639.55,y:379.875}).wait(1).to({graphics:mask_graphics_194,x:639.225,y:368.3}).wait(1).to({graphics:mask_graphics_195,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_196,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_197,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_198,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_199,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_200,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_201,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_202,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_203,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_204,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_205,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_206,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_207,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_208,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_209,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_210,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_211,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_212,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_213,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_214,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_215,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_216,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_217,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_218,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_219,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_220,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_221,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_222,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_223,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_224,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_225,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_226,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_227,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_228,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_229,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_230,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_231,x:638.875,y:360.425}).wait(1).to({graphics:mask_graphics_232,x:639.825,y:360.325}).wait(1).to({graphics:mask_graphics_233,x:639.85,y:360.45}).wait(1).to({graphics:mask_graphics_234,x:639.75,y:360.575}).wait(1).to({graphics:mask_graphics_235,x:639.75,y:360.925}).wait(1).to({graphics:mask_graphics_236,x:639.825,y:361.3}).wait(1).to({graphics:mask_graphics_237,x:639.75,y:361.825}).wait(1).to({graphics:mask_graphics_238,x:639.8,y:362.45}).wait(1).to({graphics:mask_graphics_239,x:639.775,y:363.225}).wait(1).to({graphics:mask_graphics_240,x:639.75,y:364.2}).wait(1).to({graphics:mask_graphics_241,x:639.825,y:365.175}).wait(1).to({graphics:mask_graphics_242,x:639.775,y:366.35}).wait(1).to({graphics:mask_graphics_243,x:639.725,y:367.55}).wait(1).to({graphics:mask_graphics_244,x:639.75,y:368.9}).wait(1).to({graphics:mask_graphics_245,x:639.725,y:370.525}).wait(1).to({graphics:mask_graphics_246,x:639.725,y:372.15}).wait(1).to({graphics:mask_graphics_247,x:639.775,y:373.9}).wait(1).to({graphics:mask_graphics_248,x:639.775,y:375.9}).wait(1).to({graphics:mask_graphics_249,x:639.8,y:377.9}).wait(1).to({graphics:mask_graphics_250,x:639.775,y:380.075}).wait(1).to({graphics:mask_graphics_251,x:639.775,y:382.4}).wait(1).to({graphics:mask_graphics_252,x:639.75,y:384.975}).wait(1).to({graphics:mask_graphics_253,x:639.775,y:387.5}).wait(1).to({graphics:mask_graphics_254,x:639.75,y:390.375}).wait(1).to({graphics:mask_graphics_255,x:639.75,y:393.275}).wait(1).to({graphics:mask_graphics_256,x:639.8,y:396.35}).wait(1).to({graphics:mask_graphics_257,x:639.725,y:399.575}).wait(1).to({graphics:mask_graphics_258,x:639.675,y:402.75}).wait(1).to({graphics:mask_graphics_259,x:639.7,y:405.8}).wait(1).to({graphics:mask_graphics_260,x:639.775,y:408.75}).wait(1).to({graphics:mask_graphics_261,x:639.7,y:411.55}).wait(1).to({graphics:mask_graphics_262,x:639.775,y:414.275}).wait(1).to({graphics:mask_graphics_263,x:639.7,y:416.775}).wait(1).to({graphics:mask_graphics_264,x:639.675,y:419.275}).wait(1).to({graphics:mask_graphics_265,x:639.675,y:421.575}).wait(1).to({graphics:mask_graphics_266,x:639.775,y:423.8}).wait(1).to({graphics:mask_graphics_267,x:639.675,y:426}).wait(1).to({graphics:mask_graphics_268,x:639.7,y:427.875}).wait(1).to({graphics:mask_graphics_269,x:639.7,y:429.65}).wait(1).to({graphics:mask_graphics_270,x:639.65,y:431.425}).wait(1).to({graphics:mask_graphics_271,x:639.65,y:432.875}).wait(1).to({graphics:mask_graphics_272,x:639.675,y:434.275}).wait(1).to({graphics:mask_graphics_273,x:639.7,y:435.575}).wait(1).to({graphics:mask_graphics_274,x:639.675,y:436.675}).wait(1).to({graphics:mask_graphics_275,x:639.7,y:437.575}).wait(1).to({graphics:mask_graphics_276,x:639.675,y:438.425}).wait(1).to({graphics:mask_graphics_277,x:639.725,y:439.075}).wait(1).to({graphics:mask_graphics_278,x:639.65,y:439.625}).wait(1).to({graphics:mask_graphics_279,x:639.65,y:439.975}).wait(1).to({graphics:mask_graphics_280,x:639.725,y:440.2}).wait(1).to({graphics:mask_graphics_281,x:639.7,y:440.425}).wait(1).to({graphics:mask_graphics_282,x:639.7,y:440.425}).wait(1).to({graphics:mask_graphics_283,x:639.7,y:440.425}).wait(1).to({graphics:mask_graphics_284,x:639.7,y:440.425}).wait(1).to({graphics:mask_graphics_285,x:639.7,y:440.425}).wait(1).to({graphics:mask_graphics_286,x:639.7,y:440.425}).wait(1).to({graphics:mask_graphics_287,x:639.7,y:440.425}).wait(1).to({graphics:mask_graphics_288,x:639.7,y:440.425}).wait(1).to({graphics:mask_graphics_289,x:639.7,y:440.425}).wait(1).to({graphics:mask_graphics_290,x:639.7,y:440.425}).wait(1).to({graphics:mask_graphics_291,x:639.7,y:440.425}).wait(1).to({graphics:mask_graphics_292,x:639.7,y:440.425}).wait(1).to({graphics:mask_graphics_293,x:639.7,y:440.425}).wait(1).to({graphics:mask_graphics_294,x:639.7,y:440.425}).wait(1).to({graphics:mask_graphics_295,x:639.7,y:440.425}).wait(1).to({graphics:mask_graphics_296,x:639.7,y:440.425}).wait(1).to({graphics:mask_graphics_297,x:639.7,y:440.425}).wait(1).to({graphics:mask_graphics_298,x:639.7,y:440.425}).wait(1).to({graphics:mask_graphics_299,x:639.7,y:440.425}).wait(1));

	// stars_obj_
	this.stars = new lib.Scene_1_stars();
	this.stars.name = "stars";
	this.stars.setTransform(640.35,238.9,1.3001,1.3001,0,0,0,717.5,199);
	this.stars.depth = 0;
	this.stars.isAttachedToCamera = 0
	this.stars.isAttachedToMask = 0
	this.stars.layerDepth = 0
	this.stars.layerIndex = 8
	this.stars.maskLayerName = 0

	var maskedShapeInstanceList = [this.stars];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.stars).wait(300));

	// sky_obj_
	this.sky = new lib.Scene_1_sky();
	this.sky.name = "sky";
	this.sky.setTransform(640,360.1,1.3001,1.3001,0,0,0,717.2,292.2);
	this.sky.depth = 0;
	this.sky.isAttachedToCamera = 0
	this.sky.isAttachedToMask = 0
	this.sky.layerDepth = 0
	this.sky.layerIndex = 9
	this.sky.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sky).wait(300));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(637,122.7,689.9000000000001,646.3);
// library properties:
lib.properties = {
	id: '2B8831099B4B43B98A4649987A8812B3',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_65.png", id:"CachedBmp_65"},
		{src:"images/CachedBmp_63.png", id:"CachedBmp_63"},
		{src:"images/animation_HTML5_atlas_1.png", id:"animation_HTML5_atlas_1"},
		{src:"images/animation_HTML5_atlas_2.png", id:"animation_HTML5_atlas_2"},
		{src:"images/animation_HTML5_atlas_3.png", id:"animation_HTML5_atlas_3"},
		{src:"images/animation_HTML5_atlas_4.png", id:"animation_HTML5_atlas_4"},
		{src:"images/animation_HTML5_atlas_5.png", id:"animation_HTML5_atlas_5"},
		{src:"sounds/Gothic.mp3", id:"Gothic"},
		{src:"sounds/hover.mp3", id:"hover"},
		{src:"sounds/press.mp3", id:"press"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2B8831099B4B43B98A4649987A8812B3'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;