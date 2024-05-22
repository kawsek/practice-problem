var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
const bigName = (array) =>
    {
        let biggestName = array[0];
        for(let i=0; i<array.length; i++)
            {
                if(biggestName.length < array[i].length)
                    {
                        biggestName = array[i];
                    }
            }
        return biggestName;
    }
const result = bigName(friends);
console.log(result);