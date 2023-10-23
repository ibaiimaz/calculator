import { Calculator } from "../src/Calculator";

describe("Calculator", () => {
    it("should add given numbers", () => {
        const calculator = new Calculator();

        const result = calculator.add(5, 2);

        expect(result).toEqual(7);
    });

    it("should subtract given numbers", () => {
        const calculator = new Calculator();

        const result = calculator.subtract(6, 3);

        expect(result).toEqual(3);
    });

    it("decimal results should be rounded on subtraction", () => {
        const calculator = new Calculator();

        const result = calculator.subtract(0.6, 1);

        expect(result).toEqual(-0);
    });

    it("should throw and error when subtraction result is negative", () => {
        const calculator = new Calculator();

        expect(() => calculator.subtract(3, 6)).toThrow("negative result not allowed");
    });

    it("should multiply given numbers", () => {
        const calculator = new Calculator();

        const result = calculator.multiply(4, 2);

        expect(result).toEqual(8);
    });

    it("should divide given numbers", () => {
        const calculator = new Calculator();

        const result = calculator.divide(10, 2);

        expect(result).toEqual(5);
    });

    it("should throw an error when dividing by 0", () => {
        const calculator = new Calculator();

        expect(() => calculator.divide(10, 0)).toThrow("can not divide by zero");
    });
});