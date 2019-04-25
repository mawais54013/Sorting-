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

function selectionSort(items)
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

function selectSort(arr)
{
    // var obj = {};
    // obj["cat"] = 234;
    // obj["tac"]=123;
    // console.log(obj["tac"]);
    for( var i = 0; i<arr.length;i++)
    {
        var lowNum = i;
        for(var j = i+1;j<arr.length;j++)
        {
            if(arr[j] < arr[lowNum])
            {
                lowNum = j;
            }
        }
        if(lowNum != i)
        {
            var temp = arr[i];
            arr[i] = arr[lowNum];
            arr[lowNum] = temp;
        }
    }
    return arr;
}

console.log("PRE-SORT");
console.log(arr.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(selectSort(arr).join(" "));