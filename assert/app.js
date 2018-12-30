const assert = require('assert')
//断言：把一个表达式和期望的值传进去，如果表达式的值不等于期望的值，就报错
assert(1+1===2,'true则不报错，fasle则报错') //等同于 assert.ok(x,y)

assert.equal(1+1,3,'不符合预期的值') //使用==，而不是 ===
//assert.notEqual(x1,x2,ms)
//assert.strictEqual(x1,x2,ms) //===

//判断对象是否相等
//assert.deepEqual({},{},msg) 两个对象的属性和属性的值是否相等
