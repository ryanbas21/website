var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { StoreService } from './store.service';
var AppComponent2 = (function () {
    function AppComponent2(storeService) {
        this.storeService = storeService;
    }
    AppComponent2.prototype.ngOnInit = function () { };
    return AppComponent2;
}());
AppComponent2 = __decorate([
    Component({
        selector: 'tic-tac-toe',
        template: "\n    <board class=\"board\"></board>\n  ",
        styles: ["\n    .board {\n      margin: auto;\n      display: block;\n      left: 0;\n      right: 0;\n      width: 756px;\n      height: 756px;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [StoreService])
], AppComponent2);
export { AppComponent2 };
//# sourceMappingURL=../../../../Demo/app/app.component.js.map