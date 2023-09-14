class Solution:
    def titleToNumber(self, columnTitle: str) -> int:
        res = 0
        for i in range(0, len(columnTitle)):
            letter = columnTitle[len(columnTitle)-i-1]  # start from the back
            res += (ord(letter)-64)*(26**i)
        return res
