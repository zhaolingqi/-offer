/**
 * 题目描述
请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。
如果一条路径经过了矩阵中的某一个格子，则该路径不能再进入该格子。 
例如 a b c e s f c s a d e e 矩阵中包含一条字符串"bcced"的路径，
但是矩阵中不包含"abcb"路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，
路径不能再次进入该格子。
 */
function hasPath(matrix, rows, cols, path) {
    if(matrix === null || path === null || rows < 1 || cols < 1) return false
    var N = matrix.length
    matrix = matrix.split("")
    path = path.split("")
    var flagArr = new Array(N)
    flagArr.fill(0)
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(matrix[i * cols + j] === path[0] && findPath(matrix,rows, cols, path, i, j, 1, flagArr) ) {
                return true
            }
        }
    }
    return false
}
var dx = [-1,1,0,0]
var dy = [0,0,-1,1]
function findPath(matrix, rows, cols, path, row, col, k, flagArr) {
    flagArr[row * cols + col] = 1
    if(k === path.length) return true
    for(let i = 0; i < 4; i++) {
        var newRow = row + dx[i]
        var newCol = col + dy[i]
        if(matrix[newRow * cols + newCol] === path[k] && flagArr[newRow * cols + newCol] !== 1 && findPath(matrix, rows, cols, path, newRow, newCol, k + 1, flagArr)) {
            return true
        }
    }
    flagArr[row * cols + col] = 0
    return false
}
var a = "ABCESFCSADEE"
var b = "ABCCED"
console.log(hasPath(a, 3, 4, b))