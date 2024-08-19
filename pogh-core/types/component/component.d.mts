export class Component extends HTMLElement {
    static get observedAttributes(): any[];
    static isComponent(maybeComponent: any): boolean;
    constructor({ template, styles, shadow }?: {
        template: string;
        styles: string;
        shadow: any;
    });
    connectedCallback(): void;
    attributeChangedCallback(attribute: any, oldValue: any, newValue: any): void;
    destroyCallback(): void;
    #private;
}
export class AbstractComponentInstantiationError extends PoghError {
    constructor();
}
export class ComponentStaticFieldRequiredError extends PoghError {
    constructor(component: any, field: any);
}
import { PoghError } from '../errors/errors.mjs';
//# sourceMappingURL=component.d.mts.map