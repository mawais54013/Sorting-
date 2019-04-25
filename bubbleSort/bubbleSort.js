var array = 5;
var arr = [];
for(var index = 0; index < array; index++)
{
    var randomNumber = Math.round(Math.random() * array);

  arr.push(randomNumber);
}
function bubbleSort(arr1)
{
    var sorted = false;
    while(!sorted)
    {
        sorted = true;
        for(var i = 0; i<arr1.length;i++)
        {
            if(arr1[i]>arr1[i+1])
            {
                sorted = false;
                var x = arr1[i];
                arr1[i] = arr1[i+1];
                arr1[i+1] = x;
            }
        }
    }
    return arr;
}
console.log("PRE-SORT");
console.log(arr.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(bubbleSort(arr).join(" "));