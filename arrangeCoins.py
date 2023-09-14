class Solution:
    def arrangeCoins(self, n: int) -> int:
        row = 1

        while n >= row:
            n -= row
            row += 1
            print('row number: ', row)
            print('coins left: ', n)

        return row - (1 if n == 0 else 0)


solution = Solution()
solution.arrangeCoins(5)
