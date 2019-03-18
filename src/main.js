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
function somefunc1(_a) {
    var _b = _a.x, x = _b === void 0 ? 0 : _b, _c = _a.y, y = _c === void 0 ? 0 : _c;
    return console.log(x, y);
}
function somefunc3(_a) {
    var _b = _a.x, x = _b === void 0 ? 2 : _b, _c = _a.y, y = _c === void 0 ? 4 : _c, _d = _a.z, z = _d === void 0 ? 3 : _d;
    console.log('Pointer3d');
}
var MySQL = /** @class */ (function () {
    function MySQL(host, port) {
        this.host = host;
        this.port = port;
        console.log('正在连接 ' + this.host + ':' + this.port + ' 的数据库....');
    }
    return MySQL;
}());
var mysql = new MySQL('localhost', 3306);
var Person = /** @class */ (function () {
    function Person(IdCard, name, age) {
        this.IdCard = '23xxxxxxxxxx';
        // this.IdCard = IdCard // readonly
        this.name = name;
        this.age = age;
        console.log("id_card:" + IdCard + ", name:" + this.name + ", age: " + this.age);
    }
    return Person;
}());
var Lucy = new Person('42xxxx20130312xxxx', 'Lucy', 6);
var Lily = { IdCard: '42xxx111', name: 'Lily', age: 23, city: 'beijing' };
console.log('Lily', Lily);
// private , protected
// private 私有变量，只能自己访问
/*
class Dad {
  public hoby: string
  protected lastName: string;
  private money: number
  constructor(hoby: string, lastName: string, money: number) {
    this.hoby = hoby
  }
}
class Son extends Dad {
  constructor() {
    super()
    console.log('hoby', this.hoby)
  }
}
const dad = new Dad()
dad.hoby = 'basball'
dad.money = 1222

const son = new Son()
son.hoby = 'game'
*/
var Dad = /** @class */ (function () {
    function Dad() {
    }
    return Dad;
}());
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son() {
        return _super.call(this) || this;
    }
    return Son;
}(Dad));
var d = new Dad();
d.public_something = 'some_thing';
d.default_something = 'default_thing';
var s = new Son();
s.public_something = 'some_thing';
s.default_something = 'default_thing';
