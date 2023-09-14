from typing import List


class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        dictionary = {}
        res = []
        for number in nums:
            dictionary[number] = True

        for i in range(1, len(nums)+1):
            if dictionary.get(i) is None:
                res.append(i)
        return res
