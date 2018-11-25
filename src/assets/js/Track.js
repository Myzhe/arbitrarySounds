class Track {

    constructor(output) {
        this.output = output;
        this.harmony = new Harmony();
        this.rhythm = new Rhythm(this);
        this.timing = new Timing(this.rhythm, this.harmony, beat, bpm);
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
