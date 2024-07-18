export class stringCalculator {
    add(numbers: string): number {
      if (numbers === "") return 0;

      let numbersOnlyString = numbers;
      let delimiter : RegExp = /[\n,]/;
      let negativeNumbers :number[] = [];

      // Check if custom delimiter exists
      if(numbers.startsWith("//")){
        const delimiterString = numbers.split("\n",2)[0].slice(2);
        delimiter = new RegExp(delimiterString);
        numbersOnlyString = numbers.split("\n",2)[1];
      }

      const numbersArray = numbersOnlyString.split(delimiter);
      let sum = 0;
      numbersArray.forEach((n) =>{
        const currentNumber = parseInt(n,10);
        if(currentNumber < 0){
            negativeNumbers.push(currentNumber);
        }
        // ignore numbers greater than 1000
        if(currentNumber <= 1000){
            sum += currentNumber;
        }
      });

      // Check for negative numbers
      if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(', ')}`);
      }

      return sum;
    }
}