class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = Array.from({ length: 9 }, () => new Set<string>());

        const cols = Array.from({ length: 9 }, () => new Set<string>());

        const boxes = Array.from({ length: 9 }, () => new Set<string>());

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                const cell = board[i][j];

                if (cell === ".") continue;

                const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if (rows[i].has(cell) || cols[j].has(cell) || boxes[boxIndex].has(cell)) {
                    return false;
                }

                rows[i].add(cell);
                cols[j].add(cell);
                boxes[boxIndex].add(cell);
            }
        }

        return true;
    }
}
