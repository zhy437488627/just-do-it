// 柯里化
function curry(fn, args = []) {
    const { length } = fn;
    return (...rest) => {
        const newArgs = [...args].concat(Array.from(rest))
        return newArgs.length < length ? curry.call(this, fn, newArgs) : fn.apply(this, newArgs)
    }
}
function add(a, b, c) {
                return a + b + c;
            }
            const a = curry(add)
            const b = a(1)
            const c = b(3)
            const d = c(4)
            console.log(d);