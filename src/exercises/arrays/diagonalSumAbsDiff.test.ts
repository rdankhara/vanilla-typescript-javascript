import {arrayDiagonalSumDiff} from "./diagonalSum";

describe('array sum', () => {

    it('should sum arrays', () => {
        let result = arrayDiagonalSumDiff([[1,2,3], [4,5,6], [7,8,9]]);
        expect(result).toBe(0);

        result = arrayDiagonalSumDiff([[1,2,3], [4,5,6], [9,8,9]]);
        expect(result).toBe(2);

    })
});
