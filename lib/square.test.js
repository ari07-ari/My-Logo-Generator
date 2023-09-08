const Square = require('../lib/square')

describe('Square', ()=>{

    describe('shape', ()=> {
        it('should return the shape of a triangle', ()=>{
            const shape = new Square('green');
            
            expect(shape.CreateShape()).toEqual(`<rect x="90" y="42" width="120" height="120" fill="green"/>`);
        });

    })

});