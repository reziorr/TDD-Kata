export class stringCalculator {
    add(numbers: string): number {
      if (numbers === "") {
        return 0;
      }
      if(numbers.length === 1){
        return parseInt(numbers, 10);
      }
      return 0;
    }
}