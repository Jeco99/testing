const calculator = require("../src/mathOperation");


describe('Calculator Testing', () => {
    //addition
    test ("adds 1 + 2 to equal 3", () => {
        expect(calculator(1, 2, "+")).toBe(3);
    });
  
    test ("add -1 + 2 equal 1", () => {
        expect(calculator(-1, 2, "+")).toBe(1);
    });

    test ("add -2 + 3 equal 1", () => {
        expect(calculator(-2, 3, "+")).toBe(1);
    });

    test ("add 3 + -4 equal -1", () => {
        expect(calculator(3, -4, "+")).toBe(-1);
    });

    test ("add 5 + -2 equal 3", () => {
        expect(calculator(5, -2, "+")).toBe(3);
    });

    //subtraction
    test ("subtract 1 - 2 to equal -1", () => {
        expect(calculator(1, 2, "-")).toBe(-1);
    });
  
    test ("subtract -1 - 2 equal -3", () => {
        expect(calculator(-1, 2, "-")).toBe(-3);
    });

    test ("subtract -2 - 3 equal -5", () => {
        expect(calculator(-2, 3, "-")).toBe(-5);
    });

    test ("subtract 3 - -4 equal 7", () => {
        expect(calculator(3, -4, "-")).toBe(7);
    });

    test ("subtract 5 - -2 equal 7", () => {
        expect(calculator(5, -2, "-")).toBe(7);
    });

    //multiplication
    test ("multiply 1 * 2 to equal 2", () => {
        expect(calculator(1, 2, "*")).toBe(2);
    });
  
    test ("multiply -1 * 2 equal -2", () => {
        expect(calculator(-1, 2, "*")).toBe(-2);
    });

    test ("multiply -2 * -3 equal 6", () => {
        expect(calculator(-2, -3, "*")).toBe(6);
    });

    test ("multiply 3 * -4 equal -12", () => {
        expect(calculator(3, -4, "*")).toBe(-12);
    });

    test ("multiply 5 * 0 equal 0", () => {
        expect(calculator(5, 0, "*")).toBe(0);
    });

    //division
    test ("divide 1 / 2 to equal 0.5", () => {
        expect(calculator(1, 2, "/")).toBe(0.5);
    });
  
    test ("divide -1 / 2 equal -0.5", () => {
        expect(calculator(-1, 2, "/")).toBe(-0.5);
    });

    test ("divide 45 / -9 equal -5", () => {
        expect(calculator(45, -9, "/")).toBe(-5);
    });

    test ("divide -12 / 3 equal -4", () => {
        expect(calculator(-12, 3, "/")).toBe(-4);
    });

    test ("divide -100 / -5 equal 20", () => {
        expect(calculator(-100, -5, "/")).toBe(20);
    });

    test ("divide 5 / 0 equal Infinity", () => {
        expect(calculator(5, 0, "/")).toBe(Infinity);
    });



    test ("Error Operator", () => {
        expect(calculator(1, 2, "3")).toBe('Invalid Operator');
    });
})
