package 顺时针打印矩阵;

import com.sun.org.apache.xalan.internal.xsltc.trax.SmartTransformerFactoryImpl;

import java.util.ArrayList;

/**
 * @Author Zhaolq
 * @Date: 2019/9/5 12:41
 * @Version 1.0
 */

/**
 * 题目描述
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，
 * 例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
 * 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
 */
public class Solution {
    public static ArrayList<Integer> printMatrix(int [][] matrix) {
        ArrayList<Integer> temp = new ArrayList<>();
        int M = matrix.length;
        int N = matrix[0].length;
        final int Num = M * N;
        int i = 0;
        int count = 0;
        while (i <= N - 1 && i <= M - 1) {
            System.out.println("count:" + count++ + "  i:" + i + "  M:" + M + "  N:" + N);
            for (int j = i; j <= N - 1; j++) {
                if (temp.size() == Num) break;
                temp.add(matrix[i][j]);
                System.out.println("1:" + matrix[i][j]);
            }
            for (int j = i + 1; j <= M - 1; j++) {
                if (temp.size() == Num) break;
                temp.add(matrix[j][N - 1]);
                System.out.println("2:" + matrix[j][N - 1]);
            }
            for (int j = N - 2; j >= i ; j--) {
                if (temp.size() == Num) break;
                temp.add(matrix[M - 1][j]);
                System.out.println("3:" + matrix[M - 1][j]);
            }
            for (int j = M - 2; j >= i + 1 ; j--) {
                if (temp.size() == Num) break;
                temp.add(matrix[j][i]);
                System.out.println("4:" + matrix[j][i]);
            }
            i++;
            N--;
            M--;
        }
        return temp;
    }

    public static void main(String[] args) {
        int[][] arr = {{1,2,3,4,5},{6,7,8,9,10},{11,12,13,14,15},{16,17,18,19,20},{21,22,23,24,25}};
//        int[][] arr = {{1},{2},{3},{4},{5}};
        ArrayList<Integer> temp = printMatrix(arr);
        for (int i = 0; i < temp.size(); i++) {
            System.out.println(temp.get(i));
        }
    }
}
