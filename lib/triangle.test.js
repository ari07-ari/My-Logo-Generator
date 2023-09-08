const Triangle = require('../lib/triangle')

describe('Triangle', ()=>{

    describe('shape', ()=> {
        it('should return the shape of a triangle', ()=>{
            const shape = new Triangle('blue');
            
            expect(shape.CreateShape()).toEqual(`<polygon points="150 2 45 160 255 160" fill="blue"/>`);
        });

    })

});
