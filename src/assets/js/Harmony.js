


class Harmony {
	
	//Erstellt eine Instanz der Klasse Harmony
    constructor() {
        this.base = this.newTone(Math.floor(Math.random() * 54), 220);
        this.tones = [this.base];
    }

    newTone(n, b) {
        this.tone = b * (Math.pow(2, (n / 12)));
        return this.tone;
    };

    //Zufällige Zahl (0/4/5/7/12/-4/-5/-7/-12)
    toneNumGen() {
        let nums = [0, 2, 4, 7, 9, 12, -2, -4, -7, -9, -12];
        let rnum = nums[Math.floor(Math.random() * nums.length)];
        return nums[rnum];
    };


    //Generiert ein harmoisches Ton-Material basierend auf dem vorherigen Ton
    genNextTones() {
        for (var i = 0; i < Math.floor(Math.random() * 4); i++) {
            this.nextTone = newTone(this.toneNumGen(), this.base);
            this.tones.push(this.nextTone);
        };

    };

    getTones() {
        return this.tones;
    }
	
}