import randomizeArray from '@chriscodesthings/randomize-array';

function order(n1, n2) {
    return [n1 < n2 ? n1 : n2, n1 >= n2 ? n1 : n2];
}
function aRandomNumber(bottom, top) {
    const range = top - bottom;

    return bottom + Math.round(Math.random() * range, 0);
}

function createNumberList(n, from) {
    const arr = [];

    while (arr.length < n) {
        arr.push(from + arr.length);
    }

    return arr;
}

class UltimateRandomNumberer {
    #bottom;
    #top;
    #range;
    #repeat;
    #history;

    #past = [];
    #now;
    #future = [];

    constructor(bottom, top, options) {
        this.#bottom = bottom;
        this.#top = top;
        this.#range = this.#top - this.#bottom + 1;
        this.#repeat = options.repeat;
        this.#history = options.history;
    }

    #generateSequence() {
        if (this.#repeat) {
            return [aRandomNumber(this.#bottom, this.#top)];
        }

        return randomizeArray(createNumberList(this.#range, this.#bottom));
    }

    // last(n = 1) {
    // }

    now() {
        return this.#now;
    }

    // next(n = 1) {
    // }

    number(n = 1) {
        while (this.#future.length < n) {
            this.#future.push(...this.#generateSequence());
        }

        if (this.#history) {
            this.#past.push(this.#now, ...this.#future.splice(0, n - 1));
        }

        this.#now = this.#future.shift();

        return this.#now;
    }
}

export default function (n1, n2 = 0, options) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        return;
    }

    [n1, n2] = order(n1, n2);

    if (typeof options === 'undefined') {
        return aRandomNumber(n1, n2);
    }

    // Default options
    options.repeat ??= true;
    options.history ??= false;

    return new UltimateRandomNumberer(n1, n2, options);
}
