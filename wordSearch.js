function wordExist(boardSample, word) {
    const board = [...boardSample];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === word[0] && dfs(board, i, j, 0, word)) {
                return true;
            }
        }
    }
    return false;  
}

function dfs(board, i, j, count, word) {
    if (count === word.length) {
        return true;
    }
    if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] !== word[count]) {
        return false;
    }
    const temp = board[i][j];
    board[i][j] = '';

    const found = dfs(board, i + 1, j, count + 1, word)
        || dfs(board, i - 1, j, count + 1,word)
        || dfs(board, i, j + 1, count + 1, word)
        || dfs(board, i, j - 1, count + 1, word);

    board[i][j] = temp;
    return found;
}

wordExist([
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
], 'ABCB')