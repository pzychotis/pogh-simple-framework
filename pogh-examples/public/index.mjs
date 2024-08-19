import { Component } from '@pogh/core';

export class TestComponent extends Component {
    constructor() {
        super({
            template: `Hello World!`,
            styles: ``
        });
    }
}

customElements.define('app-hello-world', TestComponent);