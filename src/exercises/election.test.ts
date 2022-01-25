import {electANumber} from "./election";

describe('election', () => {
    test('it should elect correct candidate', () =>{
        expect(electANumber(9,2)).toEqual([9])
        console.log(electANumber(9,2));
    })
});