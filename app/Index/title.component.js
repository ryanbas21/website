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
var TitleComponent = (function () {
    function TitleComponent() {
    }
    return TitleComponent;
}());
TitleComponent = __decorate([
    core_1.Component({
        selector: 'index-title',
        template: "<h1 class='center'>Brain Day State Service</h1>",
        styles: ["\n    .center {\n      font-family: Arial;\n      color: FFAC37;\n      display: flex;\n      justify-content: center;\n    }"]
    }),
    __metadata("design:paramtypes", [])
], TitleComponent);
exports.TitleComponent = TitleComponent;
//# sourceMappingURL=title.component.js.map