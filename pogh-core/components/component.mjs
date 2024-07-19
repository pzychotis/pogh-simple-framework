import { AbstractComponentInstantiationError, ComponentStaticFieldRequiredError } from "../errors/errors.mjs";

export class Component extends HTMLElement {
    get tagName() { 
        return this.constructor.selector;
    };

    constructor() {
        super();

        AbstractComponentInstantiationError.validateOrThrow(this.constructor.name !== 'Component', this.constructor.name);
        ComponentStaticFieldRequiredError.validateOrThrow(this.constructor.hasOwnProperty('selector'), this.constructor.name, 'selector');
    }

    static create(doc = document, ce = customElements) {
        ComponentStaticFieldRequiredError.validateOrThrow(this.hasOwnProperty('selector'), this.name, 'selector');

        if (!doc instanceof Document) 
            console.warn(`"document" is not an instance of Document. ${this.selector} will not render.`);
        if (!ce instanceof CustomElementRegistry)
            console.warn(`"customElements" is not an instance of CustomElementRegistry. ${this.selector} will not render.`);
        if (!ce.get(this.selector))
            console.warn(`The element ${this.selector} has not been registered with "customElements". ${this.selector} will not render.`);

        return doc instanceof Document && doc.createElement(this.selector);
    }

    static register(ce = customElements) {
        ComponentStaticFieldRequiredError.validateOrThrow(this.hasOwnProperty('selector'), this.name, 'selector');

        if (!ce instanceof CustomElementRegistry)
            console.warn(`"customElements" is not an instance of CustomElementRegistry. ${this.selector} will not render.`);

        ce instanceof CustomElementRegistry && !ce.get(this.selector) && ce.define(this.selector, this);
    }
}