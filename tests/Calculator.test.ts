import { Calculator } from "../src/Calculator";

describe("Calculator", () => {
    it("should sum given numbers", () => {
        const calculator = new Calculator();

        const result = calculator.sum(5, 2);

        expect(result).toEqual(7);
    });

    it("should subtract given numbers", () => {
        const calculator = new Calculator();

        const result = calculator.sum(6, 3);

        expect(result).toEqual(3);
    });

    it("should multiply given numbers", () => {
        const calculator = new Calculator();

        const result = calculator.sum(4, 2);

        expect(result).toEqual(8);
    });

    it("should divide given numbers", () => {
        const calculator = new Calculator();

        const result = calculator.sum(10, 2);

        expect(result).toEqual(5);
    });
});