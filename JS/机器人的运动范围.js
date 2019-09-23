/**
 * 题目描述
地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，
每一次只能向左，右，上，下四个方向移动一格，
但是不能进入行坐标和列坐标的数位之和大于k的格子。 
例如，当k为18时，机器人能够进入方格（35,37），
因为3+5+3+7 = 18。但是，它不能进入方格（35,38），
因为3+5+3+8 = 19。请问该机器人能够达到多少个格子？
 */
// var dx = [-1, 1, 0, 0]
// var dy = [0, 0, -1, 1]
// var trueMax = 0
// function movingCount(threshold, rows, cols) {
//     if(threshold < 0 || rows < 0 || cols < 0) return 0
//     var N = rows * cols
//     var flagArr = new Array(N).fill(0)
//     return move(threshold, rows, cols, 0, 0, flagArr)
// }
// function move(threshold, rows, cols, row, col, flagArr) {
//     flagArr[row * cols + col] = 1
//     var max = flagArr.reduce((sum, e) => {
//         return sum += e
//     })
//     trueMax = trueMax > max ? trueMax : max
//     var tempMax = 0
//     for(let i = 0; i < 4; i++) {
//         var newRow = row + dx[i]
//         var newCol = col + dy[i]
//         if(newRow >= 0 && newCol >= 0 && newRow < rows && newCol < cols && flagArr[newRow * cols + newCol] !== 1 && countSum(newRow, newCol) <= threshold) {
//             move(threshold, rows, cols, newRow, newCol, flagArr)
//         }
//     }
//     return trueMax
// }

// function countSum(i, j) {
//     var sum = 0
//     while(i / 10 > 0) {
//         sum = sum + i % 10
//         i = parseInt(i / 10)
//     }
//     while(j / 10 > 0) {
//         sum = sum + j % 10
//         j = parseInt(j / 10)
//     }
//     return sum
// }
function movingCount(threshold, rows, cols) {
    var visited = [];
    for (var i = 0; i < rows; i++) {
      visited.push([]);
      for (var j = 0; j < cols; j++) {
        visited[i][j] = false;
      }
    }
    return moveCount(threshold, rows, cols, 0, 0, visited);
}

function moveCount(threshold, rows, cols, row, col, visited) {
    if (row < 0 || row == rows || col < 0 || col == cols || visited[row][col]) {
      return 0;
    }
    var sum = 0;
    var temp = row + "" + col;
    for (var i = 0; i < temp.length; i++) {
      sum += temp.charAt(i) / 1;
    }
    if (sum > threshold) {
      return 0
    }
    visited[row][col] = true;
    return 1 + moveCount(threshold, rows, cols, row, col - 1, visited) +
      moveCount(threshold, rows, cols, row, col + 1, visited) +
      moveCount(threshold, rows, cols, row - 1, col, visited) +
      moveCount(threshold, rows, cols, row + 1, col, visited);
}
console.log(movingCount(10, 1, 100))