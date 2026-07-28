class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sorted_s_String = s.split('').sort().join("");
        const sorted_t_String = t.split('').sort().join("");

        return sorted_s_String === sorted_t_String;

    }
}
