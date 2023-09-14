class Solution:
    def isPowerOfTwo(self, n: int) -> bool:

        current = 1
        while (current <= n):
            if (current == n):
                return True
            current *= 2

        return False
