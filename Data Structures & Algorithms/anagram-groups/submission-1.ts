class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        var groups: Map<string, string[]> = new Map();

        for(const str of strs){
            let tempKey = str.split("").sort().join("");
            if(groups.has(tempKey)){
                groups.get(tempKey)!.push(str);
            }
            else{
                groups.set(tempKey, [str]);
            }
        }

        return [...groups.values()];

    }
}
