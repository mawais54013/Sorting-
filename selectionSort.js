var array = 40;

var arr = [];
    for(var index = 0 ; index < array; index++)
    {
        var number = Math.round(Math.random() * array);
        arr.push(number);
    }

function swap(items, first, second)
{
    var temp = items[first];
    items[first] = items[second];
    items[second] = temp;
}

function  selectionSort(items)
{
    var len = items.length;
    var min;

    for(var i = 0; i < len; i++)
    {
        min = i;
        for(var j = i+ 1; j<len; j++)
        {
            if(items[j] < items[min]) {
                min = j;
            }
        }

        if(1 !== min)
        {
            swap(items, i, min);
        }
    }
    return items;
}

console.log("PRE-SORT");
console.log(arr.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(selectionSort(arr).join(" "));