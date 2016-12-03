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
var BoardComponent = (function () {
    function BoardComponent(store) {
        this.store = store;
    }
    BoardComponent.prototype.go = function (id) { this.store.dispatch({ type: 'GO', id: id }); };
    BoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.addReducer(function (state, action) {
            // Initial state
            if (!state) {
                return {
                    turn: 'X',
                    board: [
                        '-', '-', '-',
                        '-', '-', '-',
                        '-', '-', '-'
                    ],
                    winner: ''
                };
            }
            var winningCombos = {
                0: [[1, 2], [3, 6], [4, 8]],
                1: [[0, 2], [4, 7]],
                2: [[0, 1], [4, 6], [5, 8]],
                3: [[0, 6], [4, 5]],
                4: [[0, 8], [1, 7], [2, 6]],
                5: [[2, 8], [3, 4]],
                6: [[0, 3], [2, 4], [7, 8]],
                7: [[1, 4], [6, 8]],
                8: [[0, 4], [2, 5], [6, 7]]
            };
            // Possible commands for StoreService.dispatch to use
            switch (action.type) {
                case 'GO':
                    if (!state.winner)
                        state.board[action.id] = state.turn;
                    break;
                case 'SWITCH':
                    state.turn = state.turn === 'X' ? 'O' : 'X';
                    break;
                case 'CHECK_WIN':
                    if (winningCombos[action.id].some(function (e) { return e.every(function (i) { return state.board[i] === state.turn; }); }))
                        state.winner = state.turn;
                    break;
                default:
                    break;
            }
            // Returning state
            return state;
        });
        this.squares = this.store.getState()['board'];
        this.store.subscribe(function () {
            // End game if we have a winner
            if (!_this.store.getState()['winner'])
                return;
            _this.store.dispatch({ lockState: true });
            var winStyles = [
                'background: linear-gradient(#FF0000, #FFBB66)',
                'border: 1px solid #3E0E02',
                'color: white',
                'display: block',
                'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)',
                'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
                'line-height: 40px',
                'text-align: center',
                'font-weight: bold'
            ].join(';');
            var msg = _this.store.getState()['winner'] === 'X' ? "Player X won!!!" : "Player O won!!!";
            console.log('%c' + ("" + msg), winStyles);
            document.getElementById('header').innerHTML = "<h1>" + msg + "</h1>";
        });
    };
    return BoardComponent;
}());
BoardComponent = __decorate([
    core_1.Component({
        selector: 'board',
        template: "\n    <div id=\"header\"><h1>Tic Tac Toe</h1></div>\n    <square\n      class=\"square\"\n      *ngFor=\"let square of squares; let i = index\"\n      [id]=\"i\"\n      (click)=\"go(i)\"\n    ></square>\n  ",
        styles: ["\n    #header {\n        text-align: center;\n        margin-bottom: 50px;\n    }\n    .square {\n        padding: 0;\n        margin: 0;\n        border: 1px solid black;\n        display: inline-block;\n        width: 250px;\n        height: 250px;\n        font-size: 70px;\n        background-color: beige;\n        text-align: center;\n        vertical-align: center;\n    }\n    p {\n        margin: auto;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [store_service_1.StoreService])
], BoardComponent);
exports.BoardComponent = BoardComponent;
//# sourceMappingURL=board.component.js.map