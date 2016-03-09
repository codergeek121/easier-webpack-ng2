/**
 * Created by codergeek on 07.03.16.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var LicenseplateForm = (function () {
    function LicenseplateForm() {
    }
    LicenseplateForm = __decorate([
        core_1.Component({
            selector: 'plate-form',
            host: { class: "test" },
            template: "\n  <p>Hallo</p>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], LicenseplateForm);
    return LicenseplateForm;
})();
exports.LicenseplateForm = LicenseplateForm;
//# sourceMappingURL=licenseplateForm.js.map