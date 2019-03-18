function init(compiler: string) {
  console.log(`hello from ${compiler}`)
}
init('mahy')

class Baby1 {
  constructor() {
    console.log('小宝贝正在哭泣，哇哇哇哇哇~~~')
  }
}

const baby1 = new Baby1()

export class Baby2 {
  private _name: string
  constructor(name: string) {
    this._name = name
    console.log('baby born...')
  }

  static smaile() {
    console.log('😝')
  }

  public getBabyName() {
    return this._name
  }
}
const baby2 = new Baby2('mhyuan')
// smaile 是class的静态方法，不会被继承，所以实例不能调用，只能通过class或者extends的子类调用
// baby2.smaile()
Baby2.smaile()
baby2.getBabyName()
class Baby3 extends Baby2 {

}
Baby3.smaile()

enum Direction {
  No = 0,
  Yes = 1
}
console.log(Direction.Yes)

interface Pointer2d {
  x: number;
  y: number;
}
interface Pointer3d extends Pointer2d {
  z: number;
}
function somefunc1({ x = 0, y = 0 }: Pointer2d) {
  return console.log(x, y)
}

function somefunc3({ x = 2, y = 4, z = 3 }: Pointer3d) {
  console.log('Pointer3d')
}

interface Db {
  host: string;
  port: number;
}

class MySQL implements Db {
  host: string;
  port: number;

  constructor(host: string, port: number) {
    this.host = host
    this.port = port
    console.log('正在连接 ' + this.host + ':' + this.port + ' 的数据库....')
  }
}

const mysql = new MySQL('localhost', 3306)

interface Person {
  readonly IdCard: string;
  name: string;
  age: number;
  city: string;
}

class Person implements Person {
  readonly IdCard: string = '23xxxxxxxxxx'
  constructor(IdCard: string, name: string, age: number) {
    // this.IdCard = IdCard // readonly
    this.name = name
    this.age = age
    console.log(`id_card:${IdCard}, name:${this.name}, age: ${this.age}`)
  }
}

const Lucy = new Person('42xxxx20130312xxxx', 'Lucy', 6)

const Lily: Person = { IdCard: '42xxx111', name: 'Lily', age: 23, city: 'beijing' }
console.log('Lily', Lily)

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
class Dad {
  protected surname; // 姓氏
  private private_money; // 私房钱
  public public_something;
  default_something;
  constructor() {}
}

class Son extends Dad {
  constructor() {
    super()
  }
}

const d = new Dad()
d.public_something = 'some_thing'
d.default_something = 'default_thing'

const s = new Son()
s.public_something = 'some_thing'
s.default_something = 'default_thing'
