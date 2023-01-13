class Resistor {
    r: number = 0;
    maxPower: number = 0;
    maxVoltage: number = 0;

    constructor(r: number, maxPower: number, maxVoltage: number) {
        this.r = r;
        this.maxPower = maxPower;
        this.maxVoltage = maxVoltage;
    }

    getCurrent(u: number): number {
        return u / this.r;
    }
    getPower(u: number): number {
        return u * this.getCurrent(u);
    }
    getMaxPower(): number {
        return this.maxPower;
    }
    voltageCheck(u: number): boolean {
        return u <= this.maxVoltage
    }
}

let r1 = new Resistor(220, 100, 20);
console.log(r1.voltageCheck(14)); // true, sest max voltage alla 20
console.log(r1.voltageCheck(32)); // false, sest max voltage üle 20

const resistors: Resistor[] = [
    new Resistor(220, 100, 10),
    new Resistor(330, 200, 15),
    new Resistor(100, 50, 5),
    new Resistor(100, 70, 8)
];

function getAllowedResistor(voltage: number, resistors: Resistor[]): Resistor[] {
    return resistors.filter(resistor => resistor.voltageCheck(voltage));

}
let allowedResistor = getAllowedResistor(8, resistors); // output = 3, sest üks alla 8 voldi
console.log(allowedResistor)


