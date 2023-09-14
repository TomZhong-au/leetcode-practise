from typing import List


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:

        prev = nums[0]
        slow = 1
        for fast in range(1, len(nums)):
            if nums[fast] != prev:
                nums[slow] = nums[fast]
                prev = nums[fast]
                slow += 1
        return slow
