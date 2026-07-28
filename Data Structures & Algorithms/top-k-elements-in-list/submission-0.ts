class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequencies = new Map<number, number>();

        for(const num of nums){
            if(frequencies.has(num)){
                const newFreq = frequencies.get(num)! + 1;
                frequencies.set(num, newFreq);
            }
            else{
                frequencies.set(num, 1);
            }
        }

        return [...frequencies].sort((a, b) => b[1] - a[1]).slice(0, k).map(entry => entry[0]);

    }
}
