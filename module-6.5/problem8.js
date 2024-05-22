var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
const maxNumber = (array) =>
    {
        let bigNumber = array[0];
        for(let i=0; i<array.length; i++)
            {
                if(array[i] > bigNumber)
                    {
                        bigNumber = array[i];
                    }
            }
        return bigNumber;
    }
const result = maxNumber(numbers);
console.log(result);
// const maxNumber =Math.max(...numbers);
// console.log(maxNumber)
