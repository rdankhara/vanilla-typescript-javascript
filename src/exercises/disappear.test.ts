import {disappear} from "./disappear";

describe('disappear', () => {
    it('tests disappearance 1', () => {
        const grid = [
            [0, 3, 3, 3, 3, 3, 3],
            [0, 1, 1, 1, 1, 1, 3],
            [0, 2, 2, 0, 2, 1, 4],
            [0, 1, 2, 2, 2, 1, 3],
            [0, 1, 1, 1, 1, 1, 3],
            [0, 0, 0, 0, 0, 0, 0]
        ];

        expect(disappear(grid, 1, 4,)).toBe(13);
        expect(disappear(grid, 0,0)).toBe(12);
        expect(disappear(grid, 2,0)).toBe(12);
        expect(disappear(grid, 0,2)).toBe(7);
        expect(disappear(grid, 2,1)).toBe(6);
        expect(disappear(grid, 2,6)).toBe(1);
    });

    it('tests disappearance for different grid', () => {
        const grid = [
            [4, 4, 4, 4],
            [5, 5, 5, 4],
            [2, 5, 7, 5]
            ];
        expect(disappear(grid, 0,0)).toBe(5);
        expect(disappear(grid, 1,0)).toBe(4);
        expect(disappear(grid, 2,2)).toBe(1);

    })
})