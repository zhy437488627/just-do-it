// eslint-disable-next-line max-classes-per-file
class Person {
    private name: string; // 属性

    static sex: string;

    constructor(name: string) { // 构造函数 实例化类时触发的方法
        this.name=name;
    }

    run(): void {
        console.log(this.name);
    }

    getName(): string {
        return this.name
    }

    static print(): void {
        console.log(Person.sex);
        
    }

    setName(name: string): void {
        this.name = name
    }
}
const p = new Person('jay-z')
p.setName('aaa')
// ts继承 extends \ super
class Man extends Person{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(name: string) {
        super(name) // 初始化父类构造函数
    }

    callName(): void {
        console.log(this.name);
        
    }
}
const m = new Man('eminem')
m.setName('aa')
// 类修饰符
/**
 * [description] /**块注释
 * public 公有 类 子类 类外可以访问
 * protected 保护类型  类 子类 类外不可以访问
 * private 私有 类里能访问 子类 类外不可访问
 */

 // 多态 父类定义一个方法不去实现，让继承他的子类去实现

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name
    }

    eat() {
        console.log(this.name);
    }
}
class Dog extends Animal{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(name: string) {
        super(name)
    }

    eat(){
        return this.name
    }
}