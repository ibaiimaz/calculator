import { Calculator } from "../src/Calculator";

describe("Calculator", () => {
    let calculator: Calculator;

    beforeEach(async () => {
        calculator = new Calculator();
    });

    describe("on add", () => {
        it("should add given numbers", () => {
            const result = calculator.add(5, 2);

            expect(result).toEqual(7);
        });
    });

    describe("on subtract", () => {
        it("should subtract given numbers", () => {
            const result = calculator.subtract(6, 3);

            expect(result).toEqual(3);
        });

        it("decimal results should be rounded", () => {
            const result = calculator.subtract(0.6, 1);

            expect(result).toEqual(-0);
        });

        it("should throw and error when result is negative", () => {
            expect(() => calculator.subtract(3, 6)).toThrow("negative result not allowed");
        });
    });

    describe("on multiply", () => {
        it("should multiply given numbers", () => {
            const result = calculator.multiply(4, 2);

            expect(result).toEqual(8);
        });
    });

    describe("on divide", () => {
        it("should divide given numbers", () => {
            const result = calculator.divide(10, 2);

            expect(result).toEqual(5);
        });

        it("should throw an error when dividing by 0", () => {
            expect(() => calculator.divide(10, 0)).toThrow("can not divide by zero");
        });
    });
});