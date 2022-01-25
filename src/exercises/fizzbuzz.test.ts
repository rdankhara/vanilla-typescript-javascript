/*
Write a program that prints the numbers from 1 to 100.

But for multiples of three print “Fizz” instead of the number
and for the multiples of five print “Buzz”.
For numbers which are multiples of both three and five print “FizzBuzz

 */
describe('fizbuz', () => {
    it('should correctly return fizz, buzz or fizzbuzz', () => {
        const expected = [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzBuzz', 16, 17, 'fizz', 19, 'buzz'];
        expect(fizBuzz(20)).toEqual(expected);
    })
})

const fizBuzz = (length: number) => {
    const values: (number | string) [] = []
    for(let index = 1; index < length + 1; index++) {
        const isFizz = index % 3 === 0;
        const isBuzz = index % 5 === 0;
        const isFizzBuzz = isBuzz && isFizz;

        const value = isFizzBuzz ? 'fizzBuzz' : isFizz ? 'fizz' : isBuzz ? 'buzz' : index;
        values.push(value);
    }
    return values;
}
