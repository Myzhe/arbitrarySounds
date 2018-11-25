


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

    //Keinen Bock auf Kommentierung sorry
    toneNumGen() {
        if (ball1.x < 300); {
            let nums = [0, 2, 4, 7, 9, 12, -2, -4, -7, -9, -12];
        };
        else if (300 <= ball1.x < 500); {
            let nums = [0, 2, 4, 5, 7, 9, 11, 12, -2, -4, -5, -7, -9, -11, -12];
        };
        else if (500 <= ball1.x); {
            let nums = [0, 2, 3, 5, 7, 8, 10, 12, -2, -3, -5, -7, -8, -10, -12];
        };
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