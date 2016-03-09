import {Component} from 'angular2/core';
import {FORM_PROVIDERS} from 'angular2/common';
import {bootstrap} from "angular2/bootstrap";
import {LicenseplateForm} from "./components/licenseplateForm";

@Component({
  selector: 'app',
  directives: [LicenseplateForm],
  template: `
  lk
  <plate-form></plate-form>
  `
})
export class App {
}

bootstrap(App);
