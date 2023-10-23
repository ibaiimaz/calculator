export class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract (a: number, b: number): number {
        const result = a - b;
        const roundedResult = Math.round(result);

        if (roundedResult < 0) {
            throw new Error("negative result not allowed");
        }

        return roundedResult;
    };

    multiply (a: number, b: number): number {
        return a * b;
    };

    divide (a: number, b: number): number {
        if (b === 0) {
            throw new Error("can not divide by zero");
        }

        return a / b;
    };
}
