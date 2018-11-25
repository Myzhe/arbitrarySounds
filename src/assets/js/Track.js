class Track {

    constructor(output) {
        this.output = output;
        //this.rythm = new Rythm(this);
        //this.timing = new Timing(this.rythm, bpm, beat);
    }

    playTone(tones, time) {
        for (let i = 0; i < tones.length; i++) {
            let tone = new SoundGenerator(output);
            tone.setFrequency(tones[i]);
            this.output.setInput(tone);
            tone.terminate(time);
        }
    }
}
