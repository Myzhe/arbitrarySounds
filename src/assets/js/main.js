
// Init code
if (!navigator.getUserMedia) {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
  }

window.AudioContext = window.AudioContext || window.webkitAudioContext;



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

track.playTone([220, 440], 1000);
