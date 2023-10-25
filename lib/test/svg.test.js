const svg = require("../svg")

describe('svg', ()=>{
    it('should fail when text length is greater then 3 or an empty string', ()=>{
        const text = ''
        if (text.length > 3 || text.length === '') {
            expect(text.length).toBe(false)
        }
        
    })
    it('should pass when text length is 3 or less', ()=>{
        const text = 'abc'
        if (text <= 3) {
            expect(text).toBe(true)
        }
        
    })
})