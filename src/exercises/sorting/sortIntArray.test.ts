describe('sortIntArray', () => {
    it('sorts integer array', () => {
        const input = [5,4,3, 31, 2, 21, 1];
        expect(sortIntArray(input)).toEqual([1, 2, 3, 4, 5, 21, 31]);
    });

    it('does sorts Upper Case string before lowercase string array', () => {
       const input = ['germany', 'America', 'China', 'australia', 'india'];
       const output = [ 'America', 'China', 'australia', 'germany', 'india' ];
       expect(input.sort()).toEqual(output);
    });

    it('sorts array of upper and lowercase strigns', () => {
        const input = ['germany', 'America', 'China', 'australia', 'India'];
        const output = [ 'America', 'australia', 'China', 'germany', 'India' ]
        expect(sortStringArray(input)).toEqual(output)
    })
})

const sortStringArray = (input: string[]): string[] => {
    const array = input.slice();
    array.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    return array;
}

const sortIntArray = (input: number[]): number[] => {
    const array = input.slice();
    array.sort((a,b) => a -b);
    return array;
}