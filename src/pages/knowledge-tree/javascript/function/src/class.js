function Person(name, age) {
    this.name = name
    this.age = age
    // eslint-disable-next-line func-names
    this.run = function () {
        // eslint-disable-next-line no-console
        console.log(this.name, this.age);
    }
}
Person.prototype.sex = 'man'
// eslint-disable-next-line func-names
Person.prototype.work = function() {
    // eslint-disable-next-line no-console
    console.log('work');
}
const man = new Person();
man.run()
// 继承
// 对象冒充
function Web(name, age) {
    Person.call(this, name, age) 
}
const w = new Web();
w.work() // 报错  对象冒充没法继承原型链上的方法
// 原型链+对象冒充的组合继承模式
function WebNext() {
    // eslint-disable-next-line no-console
    console.log('原型链继承可以继承构造函数里的熟悉和方法, 也可以继承原型链上的属性和方法');
}
WebNext.prototype = new Person()
/**
 * 类的封装
 */
function $() {
    returnew base(element);
}
function base(element) {
    this.element = element;
    this.css = function (arr,value) {
        this.element.style.arr = value
    }
}
$('#box').css('color', 'red')
$.length('url', function () {
    
})
