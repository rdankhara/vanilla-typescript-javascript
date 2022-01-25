export const arrayDiagonalSumDiff = (arr: number[][]) => {
    const result = arr.reduce((acc, current, index) => {

        const lastIndex = current.length - index -1;
        const first = current[index];

        console.log(`'lastIndex: ${lastIndex}, 'firstIndex:${index} current`, current);
        const last = current[lastIndex];

        console.log(`first: ${first}, last: ${console.log(last)}`);
        acc[0] += first;
        acc[1] += last;

        return acc;
    }, [0,0]);

    const [first, last] = result;
    console.log(`result first: ${first} last:${last}`);
    return Math.abs(first - last);
}