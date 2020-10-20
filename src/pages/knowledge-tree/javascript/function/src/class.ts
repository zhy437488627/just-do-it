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
// 抽象类 abstract 抽象类无法实例化
abstract class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name
    }

    abstract eat(): any;
}
class Dog extends Animal {
    protected name: string;

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(name: string) {
        super(name)
    }

    // eslint-disable-next-line class-methods-use-this
    eat() {
        console.log('吃');
    }
}
// 1.属性接口 对json的约束
function printLabel(label: string): void {
    console.log(label);
}
printLabel(1)
// 传入对象的约束
interface FullName{
    firstName: string;
    secondName: string;
    age?: number;
}
function printName(name:FullName) {
    return name
}
printName({
    firstName: 'string',
    secondName: 'string',
    // age: 1
})
// ts封装ajax
interface config {
    type: string;
    url: string;
    data?: string;
    dataType: string;
}
function ajax(config: config) {
    const xhr = new XMLHttpRequest()
    xhr.open(config.url, 'true')
    xhr.send(config.data)
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200) {
            console.log('success');
        } else {
            console.log('error');
        }
    }
}

ajax({
    type: 'get',
    url: '/api/aaa',
    data: '{"a": "1"}',
    dataType: 'json',
}
)
// 加密的函数类型接口 批量约束
 interface encrypt {
     (key: string, value: string):string
 }
 const md5: encrypt = function (key: string, value: string):string {
     return key+value
 }
 md5('a', 'b')
 const sha1: encrypt = function (key: string, value: string):string {
    return key+value
}
sha1('a', 'b')
// 可索引接口  数组，对象约束

const arr: number[] = [1,2,3]
const arr1: Array<string> = ['a', 'b']
// eslint-disable-next-line no-console
// 对数组约束
interface UserArr {
    [index: number]: string 
}
const arrUser: UserArr = ['a', 'b']

// 对对象约束
interface UserObj{
    [index: string]: string
}
const userObj = {name: '20'}
// 类类型接口
interface Animal {
    name: string;
    eat(str: string): void;
}
class Doge implements Animal{ // 类似于 a: Animal
    name:string;

    constructor(name: string){
        this.name = name
    }

    eat(food:string){
        console.log(this.name+food);
    }
}
const doggo = new Doge('xg')

// 接口的扩展 ：接口可以继承接口

interface People {
    name: string;
    eat(str:string): void;
}

interface Student extends Person {
    study(str:string): void;
}

class Programmer {
    public name: string

    constructor(name: string) {
        this.name = name
    }
    
    coding(code: string) {
        // eslint-disable-next-line no-console
        console.log(this.name+code);
    }
}
class Me extends Programmer implements Student {
    
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(name: string) {
        super(name)
    }

    study(cla: string) {
        console.log(this.name + cla);
        
    }

    eat(food: string) {
        console.log(this.name+food);
        
    }
}
const you = new Me('zhy')
// eslint-disable-next-line no-console
console.log(arr, arr1, arrUser, userObj, doggo.eat, you.coding);

// 泛型 泛型就是解决 类 接口 方法的复用性，以及对不特定数据类型的支持

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getData(value: string):string {
    return value
}
// 同时返回 string和number类型 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getData1(value: any):any { // 不能做到传入什么 返回什么
    return value
}
// 开始泛型 可以支持不特定的数据类型 要求 ： 传入和返回类型一致
function fanxing<T>(value: T):T { // 具体什么类型调用时才能确定
    return value
}
fanxing<number>(123)
// 泛型类 ：比如有个最小堆算法，需要支持返回数组和字符串两种类型
class MinClass {
    public list:number[] = [];

    add(num:number){
        this.list.push(num)
    }

    min(): number{
        let minNum = this.list[0];
        for (let i = 0; i < this.list.length; i++) {
            if(minNum>this.list[i]) {
                minNum = this.list[i]
            }
        }
        return minNum
    }
}
class MinClassFX<T> {
    public list: T[] = []

    add(num: T){
        this.list.push(num)
    }

    min(): T{
        let minNum = this.list[0];
        for (let i = 0; i < this.list.length; i++) {
            if(minNum>this.list[i]) {
                minNum = this.list[i]
            }
        }
        return minNum
    }
}
const m1=new MinClassFX<number>()
m1.add(2)
m1.add(4)
// 泛型接口

interface ConfigFn { // 函数类型接口
    (value1: string,value2: number):string
}
const setData:ConfigFn = function(name: string,age: number): string{
    return age+name
}
setData('a', 12)
interface ConfigFnFX {
    <T>(value1: T):T
}

const setDataFX:ConfigFnFX = function<T>(name: T): T{
    return name
}
setDataFX<number>(2)
// 第二种写法
interface ConfigFnFX2<T> {
    (value1: T):T
}
function getData2<T>(value:T):T {
    return value
}
const setDataFX2: ConfigFnFX2<number> = getData2
setDataFX2(2)