var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { StoreService } from './store.service';
var SquareComponent = (function () {
    function SquareComponent(store) {
        this.store = store;
    }
    SquareComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.value = this.store.getState()['board'][this.id];
        this.imgUrl = "./transparent.png";
        var unsubChangeValue = this.store.subscribe(function () {
            var char = _this.store.getState()['board'][_this.id];
            if (char === _this.value)
                return;
            _this.value = char;
            _this.imgUrl = _this.value === 'X' ? "./X.png" : "./O.png";
            _this.store.dispatch({ lockKeys: ["board." + _this.id] });
            _this.store.dispatch({ type: 'CHECK_WIN', id: _this.id });
            _this.store.dispatch({ type: 'SWITCH' });
            unsubChangeValue();
        });
    };
    return SquareComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Number)
], SquareComponent.prototype, "id", void 0);
SquareComponent = __decorate([
    Component({
        selector: 'square',
        template: "\n    <img src=\"{{imgUrl}}\" width=\"250px\" height=\"250px\">\n  "
    }),
    __metadata("design:paramtypes", [StoreService])
], SquareComponent);
export { SquareComponent };
//# sourceMappingURL=../../../Demo/app/square.component.js.map