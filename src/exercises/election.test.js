"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var election_1 = require("./election");
describe('election', function () {
    test('it should elect correct candidate', function () {
        expect((0, election_1.electANumber)(9, 2)).toEqual([9]);
        console.log((0, election_1.electANumber)(9, 2));
    });
});
