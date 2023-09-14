class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) == 0 or len(s) == 1:
            return len(s)
        longest = -1
        for i in range(0, len(s)):
            for j in range(i+1, len(s)):
                if s[j] == s[i]:
                    longest = max(j-i, longest)
                    break
            longest = max(longest, len(s)-i)
            print('index ', i, " longest ", longest)

        return longest


result = Solution()
value = result.lengthOfLongestSubstring('au')
print(value)
