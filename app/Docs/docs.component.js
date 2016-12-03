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
var DocsComponent = (function () {
    function DocsComponent() {
    }
    return DocsComponent;
}());
DocsComponent = __decorate([
    core_1.Component({
        selector: "docs",
        template: "\n  <div class='container'>\n  <h1 class = 'left'>Docs</h1>\n    <docs-box class='flex-center'></docs-box>\n  </div>",
        styles: ["\n    .container {\n      display: flex;\n      justify-content: center;\n      background-color: #76C8FF;\n    }\n    .flex-center {\n      width: 800px;\n\n    }\n    .left {\n      display: flex;\n      justify-content:  space-evenly;\n      margin-right: 200px;\n    }"
        ],
    }),
    __metadata("design:paramtypes", [])
], DocsComponent);
exports.DocsComponent = DocsComponent;
//# sourceMappingURL=docs.component.js.map