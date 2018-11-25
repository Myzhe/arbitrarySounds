//

class Rhythm {
    constructor(track, beat, bpm) {

        //Track-Objekt wird übernommen.
        this.track = track;

        //Taktart, BPM und Standardeinheit wird aus Timing-Klasse übernommen.
        this.metre = beat[1];
        this.bpm = bpm;
        this.unit = (this.bpm/60)*1000;
        console.log(this.unit);

        //Hole Töne aus Harmonie-Objekt
        this.harmony = track.harmony;
        this.tones = this.harmony.getTones();

        //Mögliche Spiellängen für die Töne
        this.lengths = [0, 0.25*this.unit, 0.5*this.unit, this.unit, 2*this.unit];

        this.checkEveryBeat.bind(this);
    }

    checkEveryBeat(self = this) {
        //Checke für die gegebene Anzahl von Schlägen, ob und was für ein Ton gespielt wird.
        setInterval(self.playRhythm, self.unit, self);
        }
    

    randomLength(self = this) {
        return self.lengths[Math.floor(Math.random()*4)];
    }

    playRhythm(self = this) {
        self.track.playTone(self.tones, self.randomLength(self));
    }


}
