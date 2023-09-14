from typing import List


class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:

        for i in range(len(digits)-1, -1, -1):
            if (digits[i] != 9):
                digits[i] += 1
                return digits
            else:
                digits[i] = 0

        return [1]+digits


solution = Solution()
digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]
solution.plusOne(digits)
