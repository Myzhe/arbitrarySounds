
// Init code
if (!navigator.getUserMedia) {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
  }

window.AudioContext = window.AudioContext || window.webkitAudioContext;

function setup() {
    createCanvas(800, 800);
    ball1 = new Ball();
}

function draw() {
    background(220);
    ball1.draw();
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
    ball1.x = mouseX;
    ball1.y = mouseY;
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

// Testing
var output = new AudioOutput();
var track = new Track(output);


