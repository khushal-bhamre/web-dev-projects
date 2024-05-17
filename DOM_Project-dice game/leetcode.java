
/**
 * leetcode
 */
public class leetcode {

    public static void modifyTheMatrix(int arr[][]){
        for(int i=0;i<arr.length;i++){
           int maxi = Integer.MIN_VALUE;
            for (int j = 0; j < arr[0].length; j++) {
                maxi = Math.max(maxi, arr[j][i]);
            }
            for (int j2 = 0; j2 < arr[0].length; j2++) {
                if(arr[j2][i]==-1){
                    arr[j2][i] = maxi;
                }
            }
    
        }  
    }


    public static void main(String[] args) {
        int arr[][] = {{1,2,-1},{4,-1,6},{7,8,9}};
        // System.out.println("before:");
        // for (int i = 0; i < arr.length; i++) {
        //     for (int j = 0; j < arr[0].length; j++) {
        //         System.out.print(arr[i][j]+" ");
        //     }
        //     System.out.println();
        // }


        modifyTheMatrix(arr);

        System.out.println("after:");
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[0].length; j++) {
                System.out.print(arr[i][j]+" ");
            }
            System.out.println();
        }
     


        }
    }
    