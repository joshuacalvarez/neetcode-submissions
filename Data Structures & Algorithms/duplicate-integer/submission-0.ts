class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {

        let mySet = new Set<number>();

        for (const num of nums){
            if (mySet.has(num)){
                return true;
            }
            mySet.add(num);
        }
        return false;
    }
}
