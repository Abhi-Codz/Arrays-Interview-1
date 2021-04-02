//Creating an array length
var arr = [0, 1, 0, 1, 0, 1, 0, 1];

var i = 0;
var j = arr.length - 1;

while(i < j)
  {
    let leftIndex = arr[i];
    let rightIndex = arr[j];
  }

if(leftIndex == 0)
   {
     i++
   }

if(rightIndex == 0)
  {
    j--
  }

if(leftIndex == 1 && rightIndex == 0)
  {
    arr[i] = rightIndex;
    arr[j] = leftIndex;
    i++
    j--
  }

for(let num = 0; num < arr.length; num++)
  {
    console.log(arr[num] + " ");
  }



function setup() 
{
  let canvas = noCanvas(480, 500);
}

function draw() 
{
  background(220);
}