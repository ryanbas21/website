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
// Purpose of Store is to have one state container for the whole app.
// Only GETSTATE, DISPATCH, and SUBSCRIBE should be invoked from outside this component.
var StoreService = (function () {
    function StoreService() {
        this.stateLocked = false; // When set to true (triggered by action.lock === true), state cannot be mutated until it is unlocked (triggered by action.unlock === true).
        this.lockedKeys = []; // Partial locking. Contains array of state properties (in dot notation, even for arrays) that should be locked.
        this.listeners = []; // Can be mutated because this.history has deep copies, including current listeners array.
        this.reducers = []; // Array of functions that mutate state.
        this.history = []; // Should always contain deep copies of states and listeners arrays, including current status of each.
        // Styles object used to style console logs in the browser.
        this.styles = {
            stateHistory: 'color: #7733CC',
            cannotMutateState: 'color: white; background: #CC0099; border: 1px solid #990000',
            stateUnchangedByReducers: 'color: white; background: #00CC99; border: 1px solid #990000'
        };
    }
    // Returns a deep clone and optionally deep frozen copy of an object.
    StoreService.prototype.deepClone = function (obj, freeze) {
        if (typeof obj !== 'object')
            return obj;
        var newObj = Array.isArray(obj) ? [] : {};
        for (var n in obj)
            newObj[n] = typeof obj[n] === 'object' ? this.deepClone(obj[n], freeze) : obj[n];
        if (freeze)
            Object.freeze(newObj);
        return newObj;
    };
    // Compares two objects at every level and returns boolean indicating if they are the same.
    StoreService.prototype.deepCompare = function (obj1, obj2) {
        if (typeof obj1 !== typeof obj2)
            return false;
        if ((typeof obj1 !== 'object') || (typeof obj2 !== 'object'))
            return obj1 === obj2;
        if (Array.isArray(obj1) && ((!Array.isArray(obj2)) || (obj1.length !== obj2.length)))
            return false;
        if (Array.isArray(obj2) && ((!Array.isArray(obj1)) || (obj1.length !== obj2.length)))
            return false;
        for (var n in obj1)
            if (!this.deepCompare(obj1[n], obj2[n]))
                return false;
        return true;
    };
    // Takes dot notation key path and returns bracket format key path.
    StoreService.prototype.getNestedValue = function (obj, keyPath) { return eval("obj" + ("['" + keyPath.split(".").join("']['") + "']")); };
    StoreService.prototype.getAllKeys = function (obj, keyPath) {
        if (keyPath === void 0) { keyPath = ''; }
        var keys = [];
        if (typeof obj !== 'object')
            return keys;
        for (var n in obj)
            keys = keys.concat(n).concat(typeof obj[n] === 'object' ? this.getAllKeys(obj[n], n) : []);
        return keys.map(function (e) { return keyPath === '' ? e : keyPath + "." + e; });
    };
    // Returns array of keys from obj1 that are not the same in obj2
    StoreService.prototype.keysChanged = function (obj1, obj2) {
        var _this = this;
        return this.getAllKeys(obj1).filter(function (key) { return !_this.deepCompare(_this.getNestedValue(obj1, key), _this.getNestedValue(obj2, key)); });
    };
    // Saves a history of state in the form of an array of deep cloned, deep frozen copies.
    StoreService.prototype.saveHistory = function (type, changedKeys) {
        this.history.push({
            change: type,
            changedKeys: changedKeys,
            state: this.deepClone(this.state, true),
            listeners: this.deepClone(this.listeners, true) // Deep cloned and deep frozen copes of all past and present listener arrays to match with state history.
        });
    };
    // Adds reducers to be run on state on invokation of DISPATCH.
    StoreService.prototype.addReducer = function (reducer) {
        this.reducers = this.reducers.concat(reducer);
        // Automatically calls first reducer with empty action object to initialize state.
        if (this.reducers.length === 1) {
            this.state = this.reducers[0](null, {});
            this.saveHistory('State', []);
            console.log("%cState History initialized to", this.styles['stateHistory'], this.history.filter(function (h) { return h['change'] === 'State'; }));
        }
    };
    // Returns a deep clone of state.
    StoreService.prototype.getState = function () { return this.deepClone(this.state, false); };
    // Takes in action objects and checks for lock related commands before running state through reducers.
    StoreService.prototype.dispatch = function (action) {
        var _this = this;
        console.groupCollapsed('Store.DISPATCH');
        console.log("Action object passed in:");
        console.dir(action);
        // Locking specific keys.
        if (action['lockKeys']) {
            var newKeys = action['lockKeys'].filter(function (e) { return _this.lockedKeys.indexOf(e) === -1; });
            var alreadyLocked = action['lockKeys'].filter(function (e) { return _this.lockedKeys.indexOf(e) > -1; });
            this.lockedKeys = this.lockedKeys.concat(newKeys);
            console.log("Keys locked:");
            console.dir(newKeys);
            if (alreadyLocked.length) {
                console.log("Keys already locked:");
                console.dir(alreadyLocked);
            }
            console.groupEnd();
            return this.deepClone(this.state, false);
        }
        // Unlocking specific keys.
        if (action['unlockKeys']) {
            var newKeys_1 = action['unlockKeys'].filter(function (e) { return _this.lockedKeys.indexOf(e) > -1; });
            var alreadyUnlocked = action['unlockKeys'].filter(function (e) { return _this.lockedKeys.indexOf(e) === -1; });
            this.lockedKeys = this.lockedKeys.filter(function (e) { return newKeys_1.indexOf(e) === -1; });
            console.log("Keys unlocked:");
            console.dir(newKeys_1);
            if (alreadyUnlocked.length) {
                console.log("Keys already unlocked:");
                console.dir(alreadyUnlocked);
            }
            console.groupEnd();
            return this.deepClone(this.state, false);
        }
        // Checking for lockState command.
        if (action['lockState']) {
            this.stateLocked = true;
            console.log("State locked.");
            console.groupEnd();
            return this.deepClone(this.state, false);
        }
        // Checking for unlockState command.
        if (action['unlockState']) {
            this.stateLocked = false;
            console.log("State unlocked.");
            console.groupEnd();
            return this.deepClone(this.state, false);
        }
        // Checking if entire state is locked.
        if (this.stateLocked) {
            console.log("%cState change operation rejected: State is locked.", this.styles['cannotMutateState']);
            console.groupEnd();
            return this.deepClone(this.state, false);
        }
        // Proceeding with reducers.
        var newState = this.reducers.reduce(function (state, reducer) { return reducer(state, action); }, this.deepClone(this.state, false));
        // Getting changed keys.
        var changedKeys = this.keysChanged(this.state, newState);
        // If there were attempts to change locked keys, console log an array of the would-be affected locked keys and return a deep clone of state.
        var changedLockedKeys = changedKeys.filter(function (e) { return _this.lockedKeys.indexOf(e) > -1; });
        if (changedLockedKeys.length) {
            console.log.apply(console, ["%cState change operation rejected: Cannot change keys:", this.styles['cannotMutateState']].concat(changedLockedKeys));
            console.groupEnd();
            return this.deepClone(this.state, false);
        }
        // Return current state if reducers did not change state.
        if (this.deepCompare(this.state, newState)) {
            console.log("%cState unchanged by reducers: History not updated.", this.styles['stateUnchangedByReducers']);
            console.groupEnd();
            return this.deepClone(this.state, false);
        }
        // Mutate state, update history, and return new state if reducers changed state.
        this.state = newState;
        this.saveHistory('State', changedKeys);
        // Execute all subscribed listeners and return mutated state.
        console.log("%cState History is", this.styles['stateHistory'], this.history.filter(function (h) { return h['change'] === 'State'; }));
        console.groupEnd();
        this.listeners.forEach(function (l) { return l(); }); //loop through the array of listeners.
        return this.deepClone(this.state, false);
    };
    // Subscribes a listener function to state changes and returns a function to unsubscribe the same listener function.
    StoreService.prototype.subscribe = function (fn) {
        var _this = this;
        this.listeners = this.listeners.concat(fn); // not altering the original listeners array.
        this.saveHistory('Listener', []);
        return function () {
            _this.listeners = _this.listeners.filter(function (func) { return func !== fn; });
            _this.saveHistory('Listener', []);
        };
    };
    return StoreService;
}());
StoreService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], StoreService);
exports.StoreService = StoreService;
//# sourceMappingURL=store.service.js.map