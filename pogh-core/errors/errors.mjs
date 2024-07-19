export class PoghError extends Error {
    constructor(message = '') { super(message); }

    static validateOrThrow(predicate, ...args) {
        if (!predicate) throw new this(...args);
    }
}

export class AbstractComponentInstantiationError extends PoghError {
    constructor(component) {
        super(`Component ${component} is abstract and can not be instantiated.`);
    }
}

export class ComponentPublicMethodRequiredError extends PoghError {
    constructor(component, method) {
        super(`Component ${component} must declare a public ${method} method.`);
    }
}

export class ComponentStaticFieldRequiredError extends PoghError {
    constructor(component, field) {
        super(`Component ${component} must declare a static "${field}" property.`);
    }
}