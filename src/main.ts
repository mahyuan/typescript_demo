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
