const calc = require('./calc')

describe('测试', () => {
    test('1+1=2',() => {
        expect(calc.sum(1,1)).toBe(2);
    })
    test('1-1=0',() => {
        expect(calc.minus(1,1)).toBe(0);
    })
})
