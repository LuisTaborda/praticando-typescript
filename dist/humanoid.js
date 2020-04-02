"use strict";
exports.__esModule = true;
var Humanoid = /** @class */ (function () {
    function Humanoid(name) {
        this.name = name;
    }
    Humanoid.prototype.say = function (message) {
        console.log(this.name + ": " + message);
    };
    return Humanoid;
}());
exports.Humanoid = Humanoid;
