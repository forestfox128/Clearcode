
var riddleSolver = require('./example.js');

const board = [
    [ 7, 7, 7, 5, 1, 7 ],
    [ 1, 8, 1, 1, 1, 1 ],
    [ 3, 2, 3, 9, 7, 6 ],
    [ 9, 9, 3, 3, 6, 2 ],
    [ 1, 9, 3, 1, 8, 7 ],
    [ 5, 9, 2, 2, 4, 8 ]
];

console.log(riddleSolver(board));  