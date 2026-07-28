class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        // right of the specific idx
        let right_to_left: number[] = [1];

        //left of the specific idx
        let left_to_right: number[] = [];

        // temp var that keeps a running product that will increase thru the iteration
        let runningProduct: number = 1;
        //right to left

        // 1 2 3 4
        // 1 1 2 6
        for (let i = 1; i < nums.length; i++) {
            runningProduct *= nums[i - 1];
            right_to_left.push(runningProduct);
        }

        runningProduct = 1;

        // 1 2 3 4
        // 24 12 4 1
        for (let j = nums.length - 1; j >= 0; j--) {
            left_to_right[j] = runningProduct;
            runningProduct *= nums[j];
        }

        let output: number[] = [];
        for (let idx = 0; idx < nums.length; idx++) {
            output.push(left_to_right[idx] * right_to_left[idx]);
        }

        return output;
    }
}
