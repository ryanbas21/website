"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var store_service_1 = require("./store.service");
var AppComponent2 = (function () {
    function AppComponent2(storeService) {
        this.storeService = storeService;
    }
    AppComponent2.prototype.ngOnInit = function () { };
    return AppComponent2;
}());
AppComponent2 = __decorate([
    core_1.Component({
        selector: 'tic-tac-toe',
        template: "\n    <board class=\"board\"></board>\n  ",
        styles: ["\n    .board {\n      margin: auto;\n      display: block;\n      left: 0;\n      right: 0;\n      width: 756px;\n      height: 756px;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [store_service_1.StoreService])
], AppComponent2);
exports.AppComponent2 = AppComponent2;
//# sourceMappingURL=app.component.js.map