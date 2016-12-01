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
var DocsBox = (function () {
    function DocsBox() {
    }
    return DocsBox;
}());
DocsBox = __decorate([
    core_1.Component({
        selector: 'docs-box',
        template: "\n  <article>\n    <ul>\n      <li> <h1>API Reference </h1></li>\n      <li> <h4>addReducer(reducer: Function): void</h4> <div class='method'>Adds reducers to be run on state on invokation of dispatch.</div> </li>\n\n      <li> <h4> getState() </h4> <div class='method'>Object Returns a deep clone of state.</div>  </li>\n\n      <li><h4>dispatch(action: Object): Object </h4> <div class='method'>Takes in action objects and checks for lock related commands before running state through reducers.</div></li>\n\n      <li> <h4>subscribe(fn: Function): Function </h4> <div class='method'>Subscribes a listener function to state changes and returns a function to unsubscribe the same listener function.</div></li>\n    </ul>\n    </article>\n  ",
        styles: ["\n    h1 {\n      font-family: Veranda, Fantasy;\n    }\n    li {\n      font-family: Veranda;\n      list-style: none;\n      margin-top: 0px;\n      margin-bottom: 10px;\n    }\n    .method {\n      font-color: light-grey;\n      font-family: Arial;\n      padding-left: 50px;\n      font-size: .8em;\n\n    }\n  "]
    }),
    __metadata("design:paramtypes", [])
], DocsBox);
exports.DocsBox = DocsBox;
//# sourceMappingURL=docs-box.component.js.map