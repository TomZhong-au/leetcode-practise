class Solution:
    def licenseKeyFormatting(self, s: str, k: int) -> str:
        content = s.replace('-', '').upper()
        res = ''

        for i in range(len(content), -1, -k):
            if (i <= k):
                res = content[0:i]+res
            else:
                res = '-'+content[i-k:i]+res

        return res


# class Solution:
#     def licenseKeyFormatting(self, s: str, k: int) -> str:
#         s = s.replace('-', '').upper()
#         L = len(s)

#         if L == 1:
#             return s

#         ans = ""
#         ans += (s[0: L % k])

#         for i in range(L % k, L, k):
#             if len(ans) > 0:
#                 ans += '-'
#             ans += s[i: i + k]

#         return (ans)
