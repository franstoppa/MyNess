// SUPERSHAPE VARIABLES //

// ANIMATION //
var osc = 1;
// var osc_rt

// var capturer = new CCapture( {
//   framerate: 60,
//   verbose: true
// } );



// GUI VARIABLES //

// RADIUS // 
var exaggeratedness = 100;
var exaggeratednessMin = 0;
var exaggeratednessMax = 300;
var exaggeratednessStep = 10;

// STROKE //
var fullness = 2;
var fullnessMin = 0.1;
var fullnessMax = 10;
var fullnessStep = 0.1;

// A //
var ness_a = 1;
var ness_aMin = 0.1;
var ness_aMax = 2;
var ness_aStep = 0.1;

// B //
var dizziness = 10;
var dizzinessMin = 0.1;
var dizzinessMax = 20;
var dizzinessStep = 0.1;

// C //
var ness_c = 2.6;
var ness_cMin = -3;
var ness_cMax = 3;
var ness_cStep = 0.1;

// D //
var eagerness = 1.3;
var eagernessMin = -3;
var eagernessMax = 3;
var eagernessStep = 0.1;

// E //
var gooeyness = -1.3;
var gooeynessMin = -2;
var gooeynessMax = 2;
var gooeynessStep = 0.1;

// F //
var sourness = 1.3;
var sournessMin = -2;
var sournessMax = 2;
var sournessStep = 0.1;



// OSC Rotation //
// var osc_rt = 1;
// var osc_rtMin = 0;
// var osc_rtMax = 10;
// var osc_rtStep = 0.1;

// OSC variables 1 //
var highness = 4;
var highnessMin = 0;
var highnessMax = 10;
var highnessStep = 1;

// OSC variables 2 //
var coolness = 10;
var coolnessrMin = 0;
var coolnessMax = 20;
var coolnessStep = 1;

// OSC variables 3 //
var laziness = 100;
var lazinessMin = 10;
var lazinessMax = 100;
var lazinessStep = 5;

// OSC variables 4 //
var jumpiness = 100;
var jumpinessMin = 0;
var jumpinessMax = 200;
var jumpinessStep = 5;

// OSC Speed //
var speedness = 0.005;
var speednessMin = 0;
var speednessMax = 0.1;
var speednessStep = 0.001;

// OSC Speed //
var piness = 6.3;
var pinessMin = 1;
var pinessMax = 100;
var pinessStep = 0.1;


var hueness = 50;
var gui;
var Save = false;
var Random = false;




// test //
// const CRYSTAL_SIZE = 500
// const SIDES = 6
let PALETTE = []






function setup() {
  createCanvas(windowWidth, windowHeight);

  // angleMode(DEGREES)
  // rectMode(CENTER)

  PALETTE = [
    color(255, 52, 154), // pink
    color(4, 0, 152), // blue
    color(240, 205, 75) // yellow
  ]

  // frameRate(30);

  // GUI SETUP //
  var gui = createGui('My Ness');
  gui.addGlobals('exaggeratedness');
  gui.addGlobals('fullness');
  // gui.addGlobals('ness_a');
  gui.addGlobals('dizziness');
  // gui.addGlobals('ness_c');
  gui.addGlobals('eagerness');
  gui.addGlobals('gooeyness');
  gui.addGlobals('sourness');
  // gui.addGlobals('osc_rt');

  gui.addGlobals('highness');
  gui.addGlobals('coolness');
  gui.addGlobals('laziness');
  gui.addGlobals('jumpiness');
  gui.addGlobals('speedness');
  gui.addGlobals('piness');

  sliderRange(0, 255, 1);
  gui = createGui('Control Panel').setPosition(width - 250, 20);
  gui.addGlobals('hueness', 'Save', 'Random');

}







function draw() {
 drawshape()
}








function supershape(theta) {
  var part1 = (2 / gooeyness) * cos((theta * ness_c) / highness);
  part1 = abs(part1);
  part1 = pow(part1, gooeyness);

  var part2 = (2 / dizziness) * cos((theta * ness_c) * coolness);
  part2 = abs(part2);
  part2 = pow(part2, sourness);

  var part3 = pow(part1 + part2, 1 / eagerness);

  if (part3 === 0) {
    return 0;
  }

  return 1 / part3;


}





function drawshape () {
  ness_c = map(cos(osc), -1, 1, 0, 10);
  osc += speedness;

 

  background(hueness, 75);
  translate(width / 2, height / 2);
  

  push()
      stroke(PALETTE[0]);
      strokeWeight(fullness);
      noFill();

      var total = jumpiness;
      var increment = piness / total;

      beginShape();
      for (var angle = 0; angle < piness; angle += increment) {
        var r = supershape(angle);
        var x = exaggeratedness * r * cos(angle);
        var y = exaggeratedness * r * sin(angle);


        vertex(x, y);
        
      }
      endShape(CLOSE);
  pop()

}


// function RandomGui(min, max) {
//     return Math.random() * (max-min) + min
// }

// function RandomGui() {
//     exaggeratednessSlider.setValue(parseFloat(random(paramLimits.exaggeratedness.min, paramLimits.exaggeratedness.max)));
//     fullnessSlider.setValue(parseFloat(random(paramLimits.fullness.min, paramLimits.fullness.max)));
//     dizzinessSlider.setValue(parseFloat(random(paramLimits.dizziness.min, paramLimits.dizziness.max)));
//     eagernessSlider.setValue(parseFloat(random(paramLimits.eagerness.min, paramLimits.eagerness.max)));
//     gooeynessSlider.setValue(parseFloat(random(paramLimits.gooeyness.min, paramLimits.gooeyness.max)));
//     highnessSlider.setValue(parseFloat(random(paramLimits.highness.min, paramLimits.highness.max)));
//     highnessSlider.setValue(parseInt(random(paramLimits.highness.min, paramLimits.highness.max)));
//     coolnessSlider.setValue(parseFloat(random(paramLimits.coolness.min, paramLimits.coolness.max)));
//     lazinessSlider.setValue(parseFloat(random(paramLimits.laziness.min, paramLimits.laziness.max)));
//     jumpinessSlider.setValue(parseFloat(random(paramLimits.jumpiness.min, paramLimits.jumpiness.max)));
//     pinessSlider.setValue(parseFloat(random(paramLimits.piness.min, paramLimits.piness.max)));

// }






