import java.util.*;

public class Main {
//    static ArrayList<Integer> new_a = new ArrayList<>();
//    static ArrayList<Integer> new_b = new ArrayList<>();
        public static int rank(int[] arr, int key, int low, int high) {
            while(low<=high) {
                int mid = (low + high)/2;
                if (arr[mid] < key) low = mid+1;
                if (arr[mid] > key) high = mid-1;
                if (arr[mid] == key) return mid;
            }
            return -1;
        }

    public static void delete(int[] a, int[] b, int deleteSum, int[] deleteNum) {
        int N = a.length;
        if (N == deleteSum) {
            System.out.println(0 + "  " + 0);
            return;
        }
        ArrayList<Integer> new_a = new ArrayList<>();
        ArrayList<Integer> new_b = new ArrayList<>();
        for (int i = 0; i < N; i++) {
            new_a.add(a[i]);
            new_b.add(b[i]);
        }
        for (int i = 0; i < deleteSum; i++) {
            for (int j = 0; j < new_a.size(); j++) {
                    if (new_a.get(j) == deleteNum[i]) {
                        new_a.remove(j);
                        new_b.remove(j);
                        j--;
                    }
            }
        }
        if (new_a.size() == 0) {
            System.out.println(0 + "  " + 0);
            return;
        }
        int j = new_a.size() - 1;
        while(j >= 1) {
            if (new_a.get(j) == new_a.get(j - 1)) {
                j--;
                if (j == 0) {
                    System.out.println(new_a.get(j) + "  " + new_b.get(j));
                    return;
                }
            }
            else {
                System.out.println(new_a.get(j) + "  " + new_b.get(j));
                return;
            }
        }
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int N = in.nextInt();
        int[] a = new int[N];
        int[] b = new int[N];
        for (int i = 0; i < N; i++) {
            a[i] = in.nextInt();
            b[i] = in.nextInt();
        }
        int q = in.nextInt();
        int[] deleteSum = new int[q];
        int deleteNum[][] = new int[q][];
        for (int i = 0; i < q; i++) {
            deleteSum[i] = in.nextInt();
            deleteNum[i] = new int[deleteSum[i]];
            for (int j = 0; j < deleteSum[i]; j++) {
                deleteNum[i][j] = in.nextInt();
            }
        }
        for (int i = 0; i < q; i++) {
            delete(a, b, deleteSum[i], deleteNum[i]);
        }
    }
}
