package 二维数组中的查找;

/**
 * @Author Zhaolq
 * @Date 2019/8/27 16:07
 * @Version 1.0
 */
/**
 * 二维数组中的查找
 * 题目描述
 * 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，
 * 输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */
public class Solution {
    public boolean Find(int target, int [][] array) {
        if(array == null || array[0].length == 0 || array.length == 0) return false;
        int row = array.length;
        int line = array[0].length;
        int i = 0;
        int j = line - 1;
        while(true) {
            if(array[i][j] < target) {
                i++;
            } else if(array[i][j] > target) {
                j--;
            } else if(array[i][j] == target) {
                return true;
            }
            if(i >= row || j < 0) break;
        }
        return false;
    }
}
