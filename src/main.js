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
function init(compiler) {
    console.log("hello from " + compiler);
}
init('mahy');
var Baby1 = /** @class */ (function () {
    function Baby1() {
        console.log('小宝贝正在哭泣，哇哇哇哇哇~~~');
    }
    return Baby1;
}());
var baby1 = new Baby1();
var Baby2 = /** @class */ (function () {
    function Baby2(name) {
        this._name = name;
        console.log('baby born...');
    }
    Baby2.smaile = function () {
        console.log('😝');
    };
    Baby2.prototype.getBabyName = function () {
        return this._name;
    };
    return Baby2;
}());
exports.Baby2 = Baby2;
var baby2 = new Baby2('mhyuan');
// smaile 是class的静态方法，不会被继承，所以实例不能调用，只能通过class或者extends的子类调用
// baby2.smaile()
Baby2.smaile();
baby2.getBabyName();
var Baby3 = /** @class */ (function (_super) {
    __extends(Baby3, _super);
    function Baby3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Baby3;
}(Baby2));
Baby3.smaile();
var Direction;
(function (Direction) {
    Direction[Direction["No"] = 0] = "No";
    Direction[Direction["Yes"] = 1] = "Yes";
})(Direction || (Direction = {}));
console.log(Direction.Yes);
