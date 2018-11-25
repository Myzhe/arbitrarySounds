
class Timing {
   constructor(rhythm) {
      this.bpm = rhythm.bpm;
      this.metre = rhythm.metre;
      setInterval(rhythm.checkEveryBeat, this.bpm/this.metre/60*1000);
   }
}
