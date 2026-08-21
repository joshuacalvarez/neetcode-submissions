class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        //input number[] nums
        //output number of the longest possible consecutive squence that can be formed

        //umm rn im thinking to add each value to a set, and then do a for loop again and if a number has nothing before it then its the start of a sequence, keep track of max sequence

        let maxSequence: number = 0;
        const ourNums: Set<number> = new Set<number>();

        for(const num of nums){
            ourNums.add(num);
        }

        for(let i = 0; i < nums.length; i++){
            let thisSequence = 1;
            if(ourNums.has(nums[i] - 1)){
                continue;
            }
            // start counting the sequence
            // idk how to make it end tho
            for(let x = 1; x <= nums.length; x++){
                if(!ourNums.has(nums[i] + x)){
                    break;
                }
                thisSequence++;
            }

            maxSequence = Math.max(maxSequence, thisSequence);

        }

        return maxSequence;



    }
}
