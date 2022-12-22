export class BubbleSort {
    static list: number[] = [5, 6, 1, -2, 3, 14, 12];
    public static bubbleSort(list: number[]): void {
        let neddNextPass: boolean = true;
        for (let k = 0; k < list.length && neddNextPass; k++) {
            neddNextPass = false;
            for (let i = 0; i < list.length - k; i++) {
                if (list[i] > list[i + 1]) {
                    let temp: number = list[i];
                    list[i] = list[i + 1];
                    list[i + 1] = temp;

                    neddNextPass = true;
                }
            }
        }
    }
}