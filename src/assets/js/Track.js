class Track {

    constructor(output) {
        this.bpm = document.getElementsByTagName("input")[0].value;
        this.output = output;
        this.harmony = new Harmony();
        this.rhythm = new Rhythm(this, [4, 4], this.bpm);
        this.timing = new Timing(this.rhythm);
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
