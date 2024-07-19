export class stringCalculator {
    add(numbers: string): number {
      if (numbers === "") return 0;

      let numbersOnlyString : string = numbers;
      let delimiter : RegExp = /[\n,]/g;
      let negativeNumbers :number[] = [];

      // Check if custom delimiter exists
      if(numbers.startsWith("//")){
        const delimiterString : string = numbers.split("\n",2)[0].slice(2);
        const delimiterArray = delimiterString.match(/\[([^\]]+)\]/g)?.map(item => item.slice(1, -1)) || [];
        const escapedDelimiters = delimiterArray.map(d => d.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&')).join('|');
        delimiter = new RegExp(escapedDelimiters, 'g');
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