export function disappear(grid: number[][], row: number, col: number) : number {
    const rows = grid.length;
    const cols = grid[row].length;
    const element = grid[row][col];

    let count = 0;
    let counted = new Map<number, number[]>();
    const coveredRows: Set<number> = new Set<number>();
    counted.set(row, [col]);

    function findRight(row: number, col: number) : void {
        const currentRow = row;
        let currentCol = col+1;
        for (; currentCol < cols; currentCol++) {
            if (grid[currentRow][currentCol] !== element) {
                return;
            }
            const values: number[] = counted.get(currentRow) || [];
            if (!values.some(x => x === currentCol)) {
                values.push(currentCol);
            }
            counted.set(currentRow, values);
        }
    }

    function findLeft(row: number, col: number) : void {
        const currentRow = row;
        let currentCol = col-1;
        for (; currentCol >= 0; currentCol--) {
            if (grid[currentRow][currentCol] !== element) {
                return;
            }
            const values: number[] = counted.get(currentRow) || [];
            if (!values.some(x => x === currentCol)) {
                values.unshift(currentCol);
            }
            counted.set(currentRow, values);
        }
    }

    function findUp(row: number, col: number) : void {
        const currentCol = col;
        let currentRow = row-1
        for (; currentRow >= 0; currentRow--) {
            if (grid[currentRow][currentCol] !== element) {
                return;
            }
            const values: number[] = counted.get(currentRow) || [];
            if (!values.some(x => x === currentCol)) {
                values.unshift(currentCol);
            }
            counted.set(currentRow, values);
        }

        return;
    }

    function findDown(row: number, col: number) : void {
        const currentCol = col;
        let currentRow = row+1
        for (; currentRow < rows; currentRow++) {
            if (grid[currentRow][currentCol] !== element) {
                return;
            }
            const values: number[] = counted.get(currentRow) || [];
            if (!values.some(x => x === currentCol)) {
                values.push(currentCol);
            }
            counted.set(currentRow, values);
        }

        return;
    }

    function countConnectedTile(row: number, col: number) {
        if (!coveredRows.has(row)) {
            findRight(row, col);
            findLeft(row, col);

            const columns = counted.get(row) || [];
            columns.forEach(c => {
                findUp(row, c);
                findDown(row, c);
            });
        }
        coveredRows.add(row);

        counted.forEach((value, key, map) => {
            if (!coveredRows.has(key)) {
                const countedCols = map.get(key) || [];
                countedCols.forEach(col => countConnectedTile(key, col));
            }
        })
    }

    countConnectedTile(row, col);
    console.log(`counted for row: ${row} col: ${col}`, counted);
    counted.forEach((values) => count +=values.length);
    return count;
}