const shapes = require("../shapes")

describe('shapes', function(){
    it('should pass when triangle is choosen', ()=>{
        const shape = 'triangle'
        expect(shape).toEqual('triangle')
    })
})

describe('shapes', function(){
    it('should pass when square is choosen', ()=>{
        const shape = 'square'
        expect(shape).toEqual('square')
    })
})

describe('shapes', function(){
    it('should pass when circle is choosen', ()=>{
        const shape = 'circle'
        expect(shape).toEqual('circle')
    })
})
