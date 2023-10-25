const SVG = require("../svg")

describe('svg', () => {
    it('should fail when text length is greater then 3 or an empty string', () => {
        const svgInstance = new SVG()
        const text = 'sadasdasdasdasd'
        expect(() => svgInstance.setText('red', text)).toThrow('Text can only be 3 Characters or less')
    })
    it('should pass when text length is 3 or less', () => {
        const svgInstance = new SVG()
        const text = 'abc'
        expect(() => svgInstance.setText('red', text))
        const renderedSVG = svgInstance.render();
        expect(renderedSVG).toContain(`fill="blue">${text}</text>`)
    })
})