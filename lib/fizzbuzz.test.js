const fizzbuzz = require("./fizzbuzz")

describe('fizzbuzz',()=>{
    it('returns 1 unchanged',()=>{
        expect(fizzbuzz(1)).toEqual(1)
    })
    it('returns 2 unchanged',()=>{
        expect(fizzbuzz(2)).toEqual(2)
    })
    it('maps 3 to "fizz"',()=>{
        expect(fizzbuzz(3)).toEqual('fizz')
    })
    it('maps 6 to "fizz"',()=>{
        expect(fizzbuzz(6)).toEqual('fizz')
    })
    it('maps 5 to "buzz"',()=>{
        expect(fizzbuzz(5)).toEqual('buzz')
    })
    it('maps 10 to "buzz"',()=>{
        expect(fizzbuzz(10)).toEqual('buzz')
    })
    it('maps 15 to "fizzbuzz"',()=>{
        expect(fizzbuzz(15)).toEqual('fizzbuzz')
    })
})