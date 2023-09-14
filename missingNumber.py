from typing import List


class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        dict = {}
        for i in range(0, len(nums)):
            dict[nums[i]] = True

        for i in range(0, len(nums)+1):
            if i not in dict:
                return i
