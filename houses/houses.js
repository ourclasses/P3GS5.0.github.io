(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"houses_atlas_1", frames: [[1080,455,789,172],[1080,0,474,453],[0,0,538,721],[540,0,538,721],[1556,0,474,453],[0,863,486,172],[488,863,486,172],[976,863,403,171],[1381,863,302,171],[1685,863,302,170],[1685,1035,302,170],[0,723,1870,138]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.圖片1 = function() {
	this.initialize(ss["houses_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.圖片2 = function() {
	this.initialize(ss["houses_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.h1 = function() {
	this.initialize(ss["houses_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.h2 = function() {
	this.initialize(ss["houses_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.small_star7_yellow = function() {
	this.initialize(ss["houses_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖16 = function() {
	this.initialize(ss["houses_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖17 = function() {
	this.initialize(ss["houses_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖18 = function() {
	this.initialize(ss["houses_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖20 = function() {
	this.initialize(ss["houses_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖21 = function() {
	this.initialize(ss["houses_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖21複製 = function() {
	this.initialize(ss["houses_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖8 = function() {
	this.initialize(ss["houses_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.hitArea = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D05DC4").s().p("AgpAjIAAhGIBTAAIAABGg");
	this.shape.setTransform(34.7,32.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hitArea, new cjs.Rectangle(30.5,28.8,8.399999999999999,7.099999999999998), null);


(lib.dot = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D05DC4").s().p("AgZA2IAAhrIAzAAIAABrg");
	this.shape.setTransform(1.8,0.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dot, new cjs.Rectangle(-0.8,-5.1,5.2,10.8), null);


(lib.元件22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.small_star7_yellow();
	this.instance.setTransform(0,0,0.1338,0.147);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件22, new cjs.Rectangle(0,0,63.4,66.6), null);


(lib.元件21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.small_star7_yellow();
	this.instance.setTransform(0,0,0.1338,0.147);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件21, new cjs.Rectangle(0,0,63.4,66.6), null);


(lib.元件20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.small_star7_yellow();
	this.instance.setTransform(0,0,0.1338,0.147);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件20, new cjs.Rectangle(0,0,63.4,66.6), null);


(lib.元件19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.small_star7_yellow();
	this.instance.setTransform(0,0,0.1338,0.147);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件19, new cjs.Rectangle(0,0,63.4,66.6), null);


(lib.元件18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.h2();
	this.instance.setTransform(0,0,0.716,0.7401);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件18, new cjs.Rectangle(0,0,385.2,533.6), null);


(lib.元件17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.small_star7_yellow();
	this.instance.setTransform(0,0,0.1338,0.147);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件17, new cjs.Rectangle(0,0,63.4,66.6), null);


(lib.元件16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.small_star7_yellow();
	this.instance.setTransform(0,0,0.1338,0.147);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件16, new cjs.Rectangle(0,0,63.4,66.6), null);


(lib.元件6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.圖片1();
	this.instance.setTransform(0,0,0.318,0.3954);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(0,0,250.9,68), null);


(lib.元件8 = function(mode,startPosition,loop,reversed) {
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
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.setTransform(58.25,34.45,2.7941,1.7197,0,0,0,0.2,0.1);
	this.dot.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// 圖層_1
	this.instance = new lib.點陣圖21();
	this.instance.setTransform(0,0,0.3859,0.4053);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件8, new cjs.Rectangle(0,0,116.6,68.9), null);


(lib.元件7 = function(mode,startPosition,loop,reversed) {
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
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.setTransform(58.1,34.45,2.6321,1.7197,0,0,0,0.1,0.1);
	this.dot.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// 圖層_1
	this.instance = new lib.點陣圖20();
	this.instance.setTransform(0,0,0.3859,0.4029);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件7, new cjs.Rectangle(0,0,116.6,68.9), null);


(lib.元件5 = function(mode,startPosition,loop,reversed) {
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
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.setTransform(65.95,34.6,5.3857,1.7197,0,0,0,0.1,0.1);
	this.dot.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// 圖層_1
	this.instance = new lib.點陣圖18();
	this.instance.setTransform(0,0,0.385,0.4029);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件5, new cjs.Rectangle(0,0,155.2,68.9), null);


(lib.元件4 = function(mode,startPosition,loop,reversed) {
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
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.setTransform(77.35,34.5,4.5559,1.7197,0,0,0,0.3,0.1);
	this.dot.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// 圖層_1
	this.instance = new lib.點陣圖17();
	this.instance.setTransform(0,0,0.3192,0.4006);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件4, new cjs.Rectangle(0,0,155.2,68.9), null);


(lib.元件3 = function(mode,startPosition,loop,reversed) {
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
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.setTransform(65.95,34.6,5.3857,1.7197,0,0,0,0.1,0.1);
	this.dot.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// 圖層_1
	this.instance = new lib.點陣圖16();
	this.instance.setTransform(0,0,0.3193,0.4005);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,155.2,68.9), null);


(lib.元件1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hitArea
	this.hitBox = new lib.hitArea();
	this.hitBox.name = "hitBox";
	this.hitBox.setTransform(190.35,268.85,28.1829,9.0939,0,0,180,34.8,34.1);
	this.hitBox.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.hitBox).wait(1));

	// 圖層_1
	this.instance = new lib.h1();
	this.instance.setTransform(0,0,0.7364,0.7289);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,396.2,525.5), null);


// stage content:
(lib.house5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		createjs.Touch.enable(stage);
		var root = this;
		this.tick1.visible=false;
		this.tick2.visible=false;
		this.tick3.visible=false;
		this.tick4.visible=false;
		this.tick5.visible=false;
		this.tick6.visible=false;
		
		this.picone.on("pressmove", movePictwo);
		
		function movePicone(e) {
				var p = stage.globalToLocal(e.stageX, e.stageY)
				e.currentTarget.x= p.x;
				e.currentTarget.y= p.y;
			
		}
		
		
		this.picone.on("pressup" , dropPicone);
		
		
		function dropPicone () {
			
			if(root.picone.x>550 && root.picone.x < 850 && root.picone.y > 160 && root.picone.y < 580 ) {
			    root.tick1.visible=true;
		     } else {
				root.tick1.visible=false;
			 }
				
			
		}
		
		
		this.pictwo.on("pressmove", movePictwo );
		
		function movePictwo(e) {
				var p = stage.globalToLocal(e.stageX, e.stageY)
				e.currentTarget.x= p.x;
				e.currentTarget.y= p.y;
			
		}
		
		
		this.pictwo.on("pressup" , dropPictwo);
		
		
		function dropPictwo () {
			
			if(root.pictwo.x>190 && root.pictwo.x < 490 && root.pictwo.y > 160 && root.pictwo.y < 580 ) {
			    root.tick2.visible=true;
		     } else {
				root.tick2.visible=false;
			 }
				
			
		}
		
		this.picthree.on("pressmove", movePicthree );
		
		function movePicthree(e) {
				var p = stage.globalToLocal(e.stageX, e.stageY)
				e.currentTarget.x= p.x;
				e.currentTarget.y= p.y;
			
		}
		
		
		this.picthree.on("pressup" , dropPicthree);
		
		
		function dropPicthree () {
			
			if(root.picthree.x>550 && root.picthree.x < 850 && root.picthree.y > 160 && root.picthree.y < 580 ) {
			    root.tick3.visible=true;
		     } else {
				root.tick3.visible=false;
			 }
				
			
		}
		
		this.picfour.on("pressmove", movePicfour );
		
		function movePicfour(e) {
				var p = stage.globalToLocal(e.stageX, e.stageY)
				e.currentTarget.x= p.x;
				e.currentTarget.y= p.y;
			
		}
		
		
		this.picfour.on("pressup" , dropPicfour);
		
		
		function dropPicfour () {
			
			if(root.picfour.x>550 && root.picfour.x < 850 && root.picfour.y > 160 && root.picfour.y < 580 ) {
			    root.tick4.visible=true;
		     } else {
				root.tick4.visible=false;
			 }
				
			
		}
		
		this.picfive.on("pressmove", movePicfive );
		
		function movePicfive(e) {
				var p = stage.globalToLocal(e.stageX, e.stageY)
				e.currentTarget.x= p.x;
				e.currentTarget.y= p.y;
			
		}
		
		
		this.picfive.on("pressup" , dropPicfive);
		
		
		function dropPicfive () {
			
			if(root.picfive.x>550 && root.picfive.x < 850 && root.picfive.y > 160 && root.picfive.y < 580 ) {
			    root.tick5.visible=true;
		     } else {
				root.tick5.visible=false;
			 }
				
			
		}
		
		this.picsix.on("pressmove", movePicsix );
		
		function movePicsix(e) {
				var p = stage.globalToLocal(e.stageX, e.stageY)
				e.currentTarget.x= p.x;
				e.currentTarget.y= p.y;
			
		}
		
		
		this.picsix.on("pressup" , dropPicsix);
		
		
		function dropPicsix () {
			
			if(root.picsix.x>190 && root.picsix.x < 490 && root.picsix.y > 160 && root.picsix.y < 580 ) {
			    root.tick6.visible=true;
		     } else {
				root.tick6.visible=false;
			 }
				
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 圖層_1
	this.tick6 = new lib.元件22();
	this.tick6.name = "tick6";
	this.tick6.setTransform(711.7,625.3,1,1,0,0,0,31.7,33.3);

	this.tick5 = new lib.元件21();
	this.tick5.name = "tick5";
	this.tick5.setTransform(639.7,625.3,1,1,0,0,0,31.7,33.3);

	this.tick4 = new lib.元件20();
	this.tick4.name = "tick4";
	this.tick4.setTransform(571.6,661.8,1,1,0,0,0,35.6,69.8);

	this.tick3 = new lib.元件19();
	this.tick3.name = "tick3";
	this.tick3.setTransform(491.7,625.3,1,1,0,0,0,31.7,33.3);

	this.tick2 = new lib.元件17();
	this.tick2.name = "tick2";
	this.tick2.setTransform(418.7,624.3,1,1,0,0,0,31.7,33.3);

	this.tick1 = new lib.元件16();
	this.tick1.name = "tick1";
	this.tick1.setTransform(342.7,624.3,1,1,0,0,0,31.7,33.3);

	this.instance = new lib.圖片2();
	this.instance.setTransform(681,601,0.1266,0.113);

	this.instance_1 = new lib.圖片2();
	this.instance_1.setTransform(611,601,0.1266,0.113);

	this.instance_2 = new lib.圖片2();
	this.instance_2.setTransform(538,601,0.1266,0.113);

	this.instance_3 = new lib.圖片2();
	this.instance_3.setTransform(461,601,0.1266,0.113);

	this.instance_4 = new lib.圖片2();
	this.instance_4.setTransform(389,601,0.1266,0.113);

	this.instance_5 = new lib.圖片2();
	this.instance_5.setTransform(314,601,0.1266,0.113);

	this.picsix = new lib.元件6();
	this.picsix.name = "picsix";
	this.picsix.setTransform(902.5,126,1,1,0,0,0,125.5,34);

	this.instance_6 = new lib.點陣圖21複製();
	this.instance_6.setTransform(189,591,0.3887,0.4188);

	this.picfive = new lib.元件8();
	this.picfive.name = "picfive";
	this.picfive.setTransform(653.4,91.9);

	this.picfour = new lib.元件7();
	this.picfour.name = "picfour";
	this.picfour.setTransform(584.4,126.4,1,1,0,0,0,58.2,34.5);

	this.picthree = new lib.元件5();
	this.picthree.name = "picthree";
	this.picthree.setTransform(356.2,91.9);

	this.pictwo = new lib.元件4();
	this.pictwo.name = "pictwo";
	this.pictwo.setTransform(273.45,126.4,1,1,0,0,0,77.5,34.5);

	this.picone = new lib.元件3();
	this.picone.name = "picone";
	this.picone.setTransform(111.7,126.4,1,1,0,0,0,77.5,34.5);

	this.myRect = new lib.元件18();
	this.myRect.name = "myRect";
	this.myRect.setTransform(718.9,371.65,0.9289,0.8671,0,0,0,192.7,266.8);

	this.instance_7 = new lib.點陣圖8();
	this.instance_7.setTransform(13,27,0.422,0.4711);

	this.myRect2 = new lib.元件1();
	this.myRect2.name = "myRect2";
	this.myRect2.setTransform(338.8,370.65,0.9722,0.8765,0,0,0,198.2,262.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.myRect2},{t:this.instance_7},{t:this.myRect},{t:this.picone},{t:this.pictwo},{t:this.picthree},{t:this.picfour},{t:this.picfive},{t:this.instance_6},{t:this.picsix},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.tick1},{t:this.tick2},{t:this.tick3},{t:this.tick4},{t:this.tick5},{t:this.tick6}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(525,411,502.9000000000001,251.20000000000005);
// library properties:
lib.properties = {
	id: '7082F410708BA64D9CF88EA8C008210D',
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/houses_atlas_1.png?1650888508927", id:"houses_atlas_1"}
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
an.compositions['7082F410708BA64D9CF88EA8C008210D'] = {
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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;