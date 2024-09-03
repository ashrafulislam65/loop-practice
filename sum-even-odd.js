
/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */
// *****sum of odd********/
let i=81;
sum=0;
while(i<=131)
{
    if(i%2!==0)
    {
        console.log(i);
        sum+=i;
        
    }
    i++;
}
console.log("sum of odd :"+sum);
// ****sum of even****
let j=206;
total=0;
while(j<=311)
{
    if(j%2==0)
    {
        console.log(j);
        total+=j;
    }
    j++;
}
console.log("total of even :"+total);
