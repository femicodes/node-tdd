const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            let res = utils.add(33, 11);
            
            expect(res).toBe(44).toBeA('number');
        
           /*  if (res !== 44) {
                throw new Error(`Expected 44, but got ${res}`);
            } */
        });
    })
    
    
    it('should square a number', () => {
        let res = utils.square(3);
    
        expect(res).toBe(9).toBeA('number')
    
        /* if (res !== 9) {
            throw new Error(`Expected 9, but got ${res}`);
        } */
    });

    
it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    })
});

it('should async square a number', (done) => {
    utils.asyncSquare(9, (square) => {
        expect(square).toBe(81).toBeA('number');
        done();
    })
})
    
})


/* it('should expect some values', () => {
    // expect(12).toNotBe(11);
    // expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
    // expect([2,3,4]).toExclude(3);
    expect({
        name: 'Daniel',
        age: 10,
        location: 'Nigeria'
    })
}); */

it('should set firstName and lastName', () => {
    let user = {location: 'Lagos', age: 25};
    let res = utils.setName(user, 'Daniel Adeniji');

    expect(res).toInclude({
        firstName: 'Daniel',
        lastName: 'Adeniji'
    });
});