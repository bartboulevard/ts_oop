class Resistor {
    r: number = 0;
    constructor(r: number) {
        this.r = r;
    }
    getCurrent(u: number): number {
        return u / this.r;
    }
    getPower(u: number): number{
        return u * this.r;
    }
    getAmperage(w: number, v: number): number {
        return w / v
    }
    getResistance(w: number, v: number ): number {
        return v / this.getAmperage(w, v)
    }
    getTemp(w: number, ml: number): number {
        return Math.floor(20+(60/(4.19*(ml/w))))
   }

}
/*
let resistors: Resistor[] = [];
let r1: Resistor = new Resistor(110)
console.log(r1.getCurrent(5))
let r2: Resistor = new Resistor(220)
console.log(r2.getCurrent(5))
let r3: Resistor = new Resistor(4700)
console.log(r3.getCurrent(5))
resistors.push(r1)
resistors.push(r2)
resistors.push(r3)
let totalCurrent: number = 0;
resistors.forEach((resistor) => {totalCurrent += resistor.getCurrent(5); });
console.log(resistors)
console.log(totalCurrent)
 */

let r1 = new Resistor(2);
console.log(r1.getPower(5));
console.log(r1.getAmperage(6,4))
console.log(r1.getResistance(6,4))
console.log(r1.getTemp(1000,1000))
console.log(r1.getAmperage(1000, 220))
console.log(r1.getResistance(1000,220))

