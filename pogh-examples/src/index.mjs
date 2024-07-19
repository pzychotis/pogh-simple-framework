import { Application } from '@pogh/core';

class ExampleApplication extends Application {
    static selector = 'pogh-test-application';
    constructor() { super(); }

    connectedCallback() {
        this.innerHTML = 'Hello World!';
    }
}

ExampleApplication.register();