/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */
let sum=0;
console.log("sum of odd numbers")
console.log("*******odd numbers******")
for(let num=91;num<=129;num++)
{
    if(num%2!==0)
    {
        console.log(num);
        sum+=num;
    }
    
}
console.log("*********sum of odd********")
console.log(sum);