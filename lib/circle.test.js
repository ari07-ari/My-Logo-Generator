const Circle = require('../lib/circle')

describe('Circle', ()=>{

    describe('shape', ()=> {
        it('should return the shape of a triangle', ()=>{
            const shape = new Circle('red');
            
            expect(shape.CreateShape()).toEqual(`<circle cx="150" cy="105" r="80" fill="red"/>`);
        });

    })

});