export class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract (a: number, b: number): number {
        const result = a - b;

        return Math.round(result);
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
