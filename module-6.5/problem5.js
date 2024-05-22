const Find = () =>
    {
        let a = [];
        for(let i = 1; i <= 50; i++)
            {
                if(i%3 == 0 && i%5 == 0)
                    {
                        a.push(i);
                    }
            }
        return a;
    }
const result = Find();
console.log(...result);