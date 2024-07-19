import { Component } from './component.mjs';
import { AbstractComponentInstantiationError } from '../errors/errors.mjs';

export class Application extends Component {
    constructor() {
        super();

        AbstractComponentInstantiationError.validateOrThrow(this.constructor.name !== 'Application', this.constructor.name);
    }
}