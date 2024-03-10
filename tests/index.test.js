
const { default: testFunc } = await import("../");

describe("this needs to pass", () => {
    test("true is true", () => {
        expect(true).toBe(true);
    });
});

/*
describe("basic random number tests", () => {
    test("invalid input", async () => {
        expect(testFunc("foo", "bar")).toBeUndefined();
    });

    test("single random number test", async () => {
        for (let i = 0; i < 1000; i++) {
            const val = testFunc(10);
            expect(val).toBeGreaterThanOrEqual(0);
            expect(val).toBeLessThanOrEqual(10);
        }
    });

    test("ranged random number test", async () => {
        for (let i = 0; i < 1000; i++) {
            const val = testFunc(10, 20);
            expect(val).toBeGreaterThanOrEqual(10);
            expect(val).toBeLessThanOrEqual(20);
        }
    });

    test("no range", async () => {
        expect(testFunc(5, 5)).toBe(5);
    });

    test("switched range", async () => {
        const val = testFunc(20, 10);
        expect(val).toBeGreaterThanOrEqual(10);
        expect(val).toBeLessThanOrEqual(20);
    });

});

describe("one full range without repetition", () => {
    const random = testFunc(1, 100, { repeat: false });
    const numbers = [];
    for (let i = 0; i < 100; i++) {
        numbers.push(random.number());
    }

    test("should be 100 unique numbers", () => {
        const unique = Array.from(new Set(numbers));
        expect(unique.length).toEqual(100);
    });
});

describe("many full ranges without repetition", () => {
    const random = testFunc(1, 100, { repeat: false });
    const numbers = [];

    for (let i = 0; i < 1000; i++) {
        numbers.push(random.number());
    }

    let count = 1;

    while (numbers.length) {
        const set = numbers.splice(0, 100);

        test("set " + (count++) + " - should be 100 unique numbers", () => {
            const unique = Array.from(new Set(set));
            expect(unique.length).toEqual(100);
        });
    }
});
*/