const DefaultErrorOptions = {
    errorNumber: 0,
    message: ''
};

export function validateOrElse(predicate, elseCB = () => {}) {
    if (!predicate) elseCB();
}

export class PoghError extends Error {
    #errorNumber;
    get errorNumber() { return this.#errorNumber; }

    constructor(options = DefaultErrorOptions) {
        super(options.message);
        this.#errorNumber = options.errorNumber;
    }
}