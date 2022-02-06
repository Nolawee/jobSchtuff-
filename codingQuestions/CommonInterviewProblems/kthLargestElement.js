const kthLargestElement = (arr, k) => {
    const reverseSorted = [...arr.sort().reverse()]
    return reverseSorted[k-1];
}
// O(nlogn) Time complexity
// O(1)



console.log(kthLargestElement([4,2,9,7,5,6,7,1,3], 4))
console.log(kthLargestElement([4,2,9,7,5,6,7,1,3], 5))