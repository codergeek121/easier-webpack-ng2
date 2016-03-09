import {Component} from 'angular2/core';
import {FORM_PROVIDERS} from 'angular2/common';
import {bootstrap} from "angular2/bootstrap";

@Component({
  selector: 'app',
  template: `
  <h1>Angular-App</h1>
  `
})
export class App {
}

bootstrap(App);
