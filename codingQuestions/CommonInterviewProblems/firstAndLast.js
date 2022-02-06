const firstAndLast = (arr, target) => {
    let firstIndex = Number.POSITIVE_INFINITY;
    let secondIndex = Number.POSITIVE_INFINITY;
    for(i in arr) {
        if(arr[i] === target && firstIndex === Number.POSITIVE_INFINITY) firstIndex = i - 0;

        if(arr[i] !== target && i > firstIndex && secondIndex === Number.POSITIVE_INFINITY) secondIndex = i - 1;
    }

    if(firstIndex !== Number.POSITIVE_INFINITY && secondIndex !== Number.POSITIVE_INFINITY) return [firstIndex, secondIndex];
    else return [-1,1];
}


console.log(firstAndLast([1,2,3,3,3,3,3,3,3,5,6,7], 3))
console.log(firstAndLast([1,2,3,3,3,3,3,3,3,5,6,7], 53))
