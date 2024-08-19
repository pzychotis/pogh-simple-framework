import { PoghError } from '../errors/errors.mjs';

export class Component extends HTMLElement {
    #shadow;
    #styles;
    #template;

    static get observedAttributes() {
        return [];
    };

    static isComponent(maybeComponent) {
        return maybeComponent && maybeComponent instanceof Component;
    }

    constructor({template, styles, shadow} = {template: ``, styles: ``, shadow: null}) {
        super();

        this.#validateNotAbstract();
        this.#validateHasStaticSelector();

        if(['open', 'closed'].includes(shadow)) {
            this.#shadow = this.attachShadow({ mode: shadow });
        } else {
            this.#shadow = null;
        }

        this.#styles = document.createElement('style');
        this.#styles.innerText = styles;

        this.#template = document.createElement('template');
        this.#template.innerHTML = template;
    }

    connectedCallback() {
        super.connectedCallback();
        const me = this.#shadow || this;
        me.append(this.#styles);
        me.append(this.#template);
    }

    attributeChangedCallback(attribute, oldValue, newValue) {
        super.attributeChangedCallback(attribute, oldValue, newValue);
    }

    destroyCallback() {
        super.destroyCallback();
    }

    #validateNotAbstract() {
        if (this.constructor.name === 'Component') {
            throw new AbstractComponentInstantiationError();
        }
    }

    #validateHasStaticSelector() {
        if (this.constructor.hasOwnProperty('selector')) {
            throw new ComponentStaticFieldRequiredError(this.constructor.name, 'selector');
        }
    }
}

export class AbstractComponentInstantiationError extends PoghError {
    constructor() { super({ errorNumber: 1000, message: `Component is abstract and can not be instantiated.` }); }
}

export class ComponentStaticFieldRequiredError extends PoghError {
    constructor(component, field) { super({ errorNumber: 1001, message: `Component ${component} must declare a static ${field} property or getter.` }); }
}