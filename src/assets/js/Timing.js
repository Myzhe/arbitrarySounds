
class Timing {
   constructor(rhythm, bpm, beat) {
      this.bpm = bpm;
      this.beat = beat;
      setInterval(rythm, this.bpm/this.beat[1]/60*1000)
   }
}
