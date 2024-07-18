export class stringCalculator {
    add(numbers: string): number {
      if (numbers === "") return 0;
      const numbersArray = numbers.split(/[\n,]/);
      let sum = 0;
      numbersArray.forEach((n) =>{
        sum += parseInt(n,10);
      })
      return sum;
    }
}