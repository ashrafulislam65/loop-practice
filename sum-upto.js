/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
let num=1;
let sum=0;
while(num<200)
{   
   
    if(num>100)
        {
            break;
        }
    console.log(num);
    console.log(sum+=num);
    num++;
   
}