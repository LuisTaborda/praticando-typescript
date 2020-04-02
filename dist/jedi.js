"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var humanoid_1 = require("./humanoid");
var Jedi = /** @class */ (function (_super) {
    __extends(Jedi, _super);
    function Jedi(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Jedi.prototype.TheForce = function () {
        this.say("Eu sinto a força");
    };
    return Jedi;
}(humanoid_1.Humanoid));
exports.Jedi = Jedi;
