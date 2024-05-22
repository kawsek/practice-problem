var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
const calculation = (ar) =>
    {
        for(let i=0; i<ar.length; i++)
            {
                for(let j=i+1; j<ar.length; j++) { 
                    if(ar[i]>ar[j])
                    {
                        let temp = ar[i];
                        ar[i] = ar[j];
                        ar[j] = temp;
                    }
                }
            }
        for(let i=0;i<ar.length-1;i++)
            {
                for(let j=1;j<ar.length;j++)
                    {
                        if(ar[i]==ar[j])
                            {
                                ar.shift(ar[i]);
                                console.log(ar[i]);
                            }
                    }
            }
        // for(let i=0;i<ar.length;i++)
        //     {
        //         console.log(ar[i]);
        //     }
    }
calculation(numbers);