// tests shapes js file
const { Circle, Square, Triangle } = require("../shapes")

describe('shapes', function(){
    it('should pass when triangle is choosen', ()=>{
        const shape = new Triangle()
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="" />')
    })
})
describe('shapes', function(){
    it('should pass when circle is choosen', ()=>{
        const shape = new Circle()
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="" />')
    })
})
describe('shapes', function(){
    it('should pass when square is choosen', ()=>{
        const shape = new Square()
        expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="" />')
    })
})


