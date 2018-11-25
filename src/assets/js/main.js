
// Init code
if (!navigator.getUserMedia) {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
  }

document.getElementsByTagName("input")[1].addEventListener("change", function(){document.getElementById("beat-p").innerHTML=document.getElementsByTagName("input")[1].value;});

window.AudioContext = window.AudioContext || window.webkitAudioContext;

function setup() {
    createCanvas(800, 800);
    ball = new Ball();
}

function draw() {
    background(220);
    ball.draw();
}

class Ball {
    constructor() {
        this.x = width/2;
        this.y = height/2;
        this.size = 40;
    }

    draw() {
        fill(0);
        noStroke();
        ellipse(this.x, this.y, this.size);
    }
}

function mouseDragged() {
    ball.x = mouseX;
    ball.y = mouseY;
}

// Audio and Sound code
class AudioOutput {

    constructor() {
        this.context = new AudioContext();
    }

    setInput(input) {
        input.output.connect(this.context.destination);
    }
}

class SoundGenerator {

    constructor(output, time) {
        this.output = output.context.createOscillator();
        this.output.start();
    }

    setFrequency(f) {
        this.output.frequency.setValueAtTime(f, this.output.context.currentTime);
    }

    terminate(time) {
        setTimeout(function(note){
            note.stop(); // possible bug?
        }, time, this.output);
    }
}
document.getElementsByTagName("input")[0].addEventListener("change", function(){
   if (document.getElementsByTagName("input")[0].checked) {
      let _bpm = document.getElementsByTagName("input")[1].value;
      let _beat1 = document.getElementsByTagName("input")[2].value;
      let _beat2 = document.getElementsByTagName("input")[3].value;
      console.log(_bpm,_beat1,_beat2);
   }
});
if (!document.getElementsByTagName("input")[0].checked) {
   let _bpm = document.getElementsByTagName("input")[1].value;
   let _beat1 = document.getElementsByTagName("input")[2].value;
   let _beat2 = document.getElementsByTagName("input")[3].value;
   console.log(_bpm,_beat1,_beat2);
}

// Testing
var output = new AudioOutput();
var track = new Track(output);
