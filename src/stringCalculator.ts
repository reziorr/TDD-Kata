export class stringCalculator {
    add(numbers: string): number {
      if (numbers === "") return 0;
      let numbersOnlyString = numbers;
      let delimiter : RegExp = /[\n,]/;

      // Check if custom delimiter exists
      if(numbers.startsWith("//")){
        delimiter = new RegExp(numbers[2]);
        numbersOnlyString = numbers.split("\n",2)[1];
      }
      
      const numbersArray = numbersOnlyString.split(delimiter);
      let sum = 0;
      numbersArray.forEach((n) =>{
        sum += parseInt(n,10);
      })
      return sum;
    }
}