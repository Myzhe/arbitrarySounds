//

class Rhythm {
    constructor(track, beat, bpm) {

        //Track-Objekt wird übernommen.
        this.track = track;

        //Taktart, BPM und Standardeinheit wird aus Timing-Klasse übernommen.
        this.metre = beat[1];
        this.bpm = bpm;
        this.unit = (this.bpm/60)*1000;

        //Hole Töne aus Harmonie-Objekt
        this.harmony = track.harmony;
        this.tones = this.harmony.getTones();

        //Mögliche Spiellängen für die Töne
        this.lengths = [0, 0.25*this.unit, 0.5*this.unit, this.unit, 2*this.unit];
    }

    checkEveryBeat() {
        //Checke für die gegebene Anzahl von Schlägen, ob und was für ein Ton gespielt wird.

        this.count = 0;

        if (this.count < this.metre) {
            setInterval(() => {this.playRhythm(); x++;}, this.unit);
        }
    }

    randomLength() {
        return this.lengths[Math.floor(Math.random()*4)];
    }

    playRhythm() {
        this.track.playTone(this.tones, this.randomLength);
    }


}
