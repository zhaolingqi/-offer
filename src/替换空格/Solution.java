package 替换空格;

/**
 * @Author Zhaolq
 * @Date 2019/8/27 16:07
 * @Version 1.0
 */
/**
 * 替换空格
 * 请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
 * 解题思路：
 * 不考虑String类中自带的replace方法
 * 首先遍历，得到字符串中空格数，然后确定新字符串的长度(空格数为spaceLenrth，新字符串长度为 length + 2 * spaceLength)
 */
public class Solution {
    public String replaceSpace(StringBuffer str) {
        //String s = str.toString();
        //s = s.replace(" ", "%20");
        //return s;
        int spaceLength = 0;
        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) == ' ')
                spaceLength++;
        }
        if (spaceLength == 0) return str.toString();
        int newLength = str.length() + 2 * spaceLength;
        int oldLength = str.length();
        str.setLength(newLength);
        for (int i = oldLength - 1, j = newLength - 1; i >= 0; i--) {
            if (str.charAt(i) == ' ') {
                str.setCharAt(j--, '0');
                str.setCharAt(j--, '2');
                str.setCharAt(j--, '%');
            } else {
                str.setCharAt(j--, str.charAt(i));
            }
        }
        return str.toString();
    }
}
