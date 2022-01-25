"use strict";
// test gold man sach
// teacher wants to elect classroom president, he starts in circular position from 1 and counts k, and eliminates k,
// k will be next start position, from there again start counting for k in circular position
// last one remaining will be elected as president
Object.defineProperty(exports, "__esModule", { value: true });
exports.electANumber = void 0;
// input 9 and 3
// 1 [1, 2, 4, 5, 6, 7, 8, 9]
// 2 [1, 2, 4, 5, 6, 8, 9]
// start 2 index 3 [ 1, 4, 5, 6, 8, 9 ]
// start 5 index 4 [ 1, 4, 5, 6, 9 ]
// start 3 index 5 [ 1, 4, 6, 9 ]
// start 2 index 6 [ 1, 6, 9 ]
// start 2 index 7 [ 1, 9 ]
// start 1 index 8 [ 9 ]
function electANumber(n, k) {
    console.log('n', n, 'k', k);
    var temp = Array.from(Array(n).keys()).map(function (x) { return x + 1; });
    var index = 1;
    var eliminateIndex = k;
    while (temp.length > 1 && index < n + 1) {
        temp.splice(eliminateIndex - 1, 1);
        console.log('eliminateIndex', eliminateIndex, 'index', index, temp);
        eliminateIndex = eliminateIndex + k;
        if (eliminateIndex > temp.length) {
            eliminateIndex = eliminateIndex - temp.length;
        }
        index++;
    }
    return temp;
}
exports.electANumber = electANumber;
