/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.
//* ******odd numbers*******/
var num =61;
while(num<=100)
{
    if(num%2!==0)
    {
        console.log(num)
    }
    num++;
}
console.log("********** even numbers*********");
let i=78;
while(i<=98)
{
    if(i%2==0)
    {
        console.log(i);
    }
    i++;
}
