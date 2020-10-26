// eslint-disable-next-line max-classes-per-file
const a = 1 // 值类型 存栈内存 从上到下
const b = { a: '1' } // 引用类型 存堆内存 从下到上
// 类型 undefine / string / number / boolean / symbol
// 引用类型 数组 对象 null /*特殊*/ function
// typeof 识别值类型 undefine / string / number / boolean / symbol / function / object (null 为object)
// 深拷贝
const obj = {
    a: 1,
    b: [1,2,3],
    c: {
        a: 1
    },
    d: () => {
        // eslint-disable-next-line no-alert
        alert(1)
    }
}
function deepClone(obj = {}) {
    if(typeof obj !== 'object' || obj == null){
        return obj
    } 
    const result = obj instanceof Array ? [] : {};
    // for (const key in obj) {
    //     if (obj.hasOwnProperty(key)) {
    //         result[key] = deepClone(obj[key]);
    //     }
    // }
    Object.keys(obj).forEach(key => {
        if (obj[key]) { result[key] = obj[key] }
       })
       return result;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const data = deepClone(obj)
// 隐式转换 为true
/* 
100 == '100'
0 == ''
0 == false
false == ''
null == undefined 
*/
// truly 变量 !!a === true
// falsly 变量 !!a === false null / '' / undefine / NaN / 0 / false

// 原型 原型链 typeof class为function


class Father {

}

class Children extends Father{}
const jiojio = new Children()
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
jiojio instanceof Children === true
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
jiojio instanceof Father === true
jiojio.__proto__ === Children.prototype
Children.prototype.__proto__ === Father.prototype
Father.prototype.__proto__ === Object.prototype
Object.prototype.__proto__ === null

// 作用域和闭包
// 在函数定义的地方向上级进行查找，不是函数定义的地方

// this
const This2 =  {
 name: 'zhang',

 sayThis() {
     console.log(this);
 },

 // eslint-disable-next-line class-methods-use-this
 waitThis() {
    setTimeout( () => {
        console.log(this);
    }, 1);
}
}
// 手写bind函数