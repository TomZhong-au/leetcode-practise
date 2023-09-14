from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dict={}
        for index,num in nums:
            dict[num]=index
