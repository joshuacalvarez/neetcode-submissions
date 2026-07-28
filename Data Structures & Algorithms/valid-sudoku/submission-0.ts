class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = Array.from({ length: 9 }, () => new Set<string>());
        const cols = Array.from({ length: 9 }, () => new Set<string>());
        const grid = new Map<string, Set<string>>();

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                const cell = board[i][j];
                if (cell === ".") continue;
                // row check
                if (rows[i].has(cell)) {
                    return false;
                }
                rows[i].add(cell);
                // col check
                if (cols[j].has(cell)) {
                    return false;
                }
                cols[j].add(cell);

                //grid check
                const coord = `${Math.floor(i / 3)},${Math.floor(j / 3)}`;
                if (!grid.has(coord)) {
                    grid.set(coord, new Set<string>().add(cell));
                } else if (grid.get(coord).has(cell)) {
                    return false;
                } else {
                    grid.get(coord).add(cell);
                }
            }
        }

        return true;
    }
}
