class Resistor {
    r: number = 0;

    constructor(r: number) {
        this.r = r;
    }

    getCurrent(u: number): number {
        return u / this.r;
    }

    getPower(u: number): number {
        return u * this.getCurrent(u);
    }

    getResistance(): number {
        return this.r;
    }

}

class SeriesCircuit {
    resistors: Resistor[] = []
    push(r: Resistor) {
        this.resistors.push(r);
    }
    getTotalResistance() {
        let sum: number = 0;
        this.resistors.forEach((r: Resistor) => {sum += r.getResistance() });
        return sum;
    }
    getCurrent(u: number) {
        return u / this.getTotalResistance();
    }
    getPower(u: number) {
        return Math.pow((u), 2) / this.getTotalResistance(); // funktsioon küsib rakendatud pinget, et arvutada võimsus
    }
}

let sc1: SeriesCircuit = new SeriesCircuit();
sc1.push(new Resistor(220));
sc1.push(new Resistor(220));
sc1.push(new Resistor(220));
console.log("Esimese jadaühenduse kogutakistus: " + sc1.getTotalResistance());
console.log("Esimese jadaühenduse pinge: " + sc1.getCurrent(12))
console.log("Esimese jadaühenduse võimsus: " + sc1.getPower(12))

let sc2: SeriesCircuit = new SeriesCircuit();
sc2.push(new Resistor(220))
sc2.push(new Resistor(220))
sc2.push(new Resistor(110))
console.log("Teise jadaühenduse kogutakistus: " + sc2.getTotalResistance())
console.log("Teise jadaühenduse pinge: " + sc2.getCurrent(12))
console.log("Teise jadaühenduse võimsus: " + sc2.getPower(12))