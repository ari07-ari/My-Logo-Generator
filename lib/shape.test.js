const Shape = require('../lib/shape')

describe('Shape', ()=>{ 
    it('should return the shape color', ()=>{
        const shape=new Shape('yellow');

        expect(shape.shape_color).toEqual('yellow');

    })








})