class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let runningString = "";
        for (const str of strs) {
            runningString += `${str.length}#${str}`;
        }

        return runningString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let output: string[] = [];
        let i = 0;
        let j = i;

        while (i < str.length) {
            while (str[j] !== "#") {
                j++;
            }
            const length = Number(str.slice(i,j));
            output.push(str.slice(j + 1, j + length + 1));

            i = j + length + 1;
            j = i;
        }

        return output;
    }
}
