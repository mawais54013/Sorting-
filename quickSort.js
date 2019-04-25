function quicksort(arr){
    if(arr.length===1){
        return arr;
    }
    var pivot = arr[arr.length-1];
    var left =[];
    var right = [];
    for(var i=0;i<arr.length-1;i++){
        if(arr[i]<=pivot)
            left.push(arr[i]);
        else if(arr[i]>=pivot)
            right.push(arr[i])
    }
    return quicksort(left)+ " "+pivot+" "+quicksort(right);
}