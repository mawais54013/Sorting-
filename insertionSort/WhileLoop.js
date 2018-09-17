
var arraySize = 40;

// // Case 2 - Large set of Numbers
// var arraySize = 400000;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

  function swap(item1, item2)
  {
    var temp = item1;
    item1 = item2;
    item2 = temp;
  }

  function insertionSort(items)
  {
    // var len = items.length - 1;
    var j;

    for(var i = 0; i <= items.length - 1; i++)
    {
      j = i;
      while(j > 0 && items[j-1] > items[j])
      {
        var temp = array[j - 1]
 
        array[j - 1] = array[j]
        array[j] = temp
        j--
      }
    }
    return items;
  }

console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(insertionSort(array).join(" "));
