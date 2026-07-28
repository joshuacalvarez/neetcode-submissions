class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {

        const groups = new Map<string, string[]>();

        for (const str of strs){
            // break down individual word and sort its letters alphabetically
            let tempKey = str.split('').sort().join('');
            // check this sorted key in the map, if exists add the index of current word to that key
            if(!groups.has(tempKey)){
                groups.set(tempKey, [])
            }

            groups.get(tempKey)!.push(str);
        }

        return Array.from(groups.values());
        
    }
}
