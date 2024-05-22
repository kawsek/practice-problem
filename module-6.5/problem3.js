let arr = [2,1,4,6,8,10,11,13,15,17,19,12,14,16,18,3,5,7,9,20];
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
        for(let i=0; i<ar.length;i++)
            {
                console.log(ar[i]);
            }
    }
calculation(arr);
