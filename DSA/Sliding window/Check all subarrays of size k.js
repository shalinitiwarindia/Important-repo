function maxSubarraySum(arr, k) {
    let maxSum = 0;
    let windowSum = 0;
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];  // add the next element

        // slide the window, we don't need to slide until we hit size k
        if (windowEnd >= k - 1) {
            maxSum = Math.max(maxSum, windowSum);  // update max
            windowSum -= arr[windowStart];         // remove the element going out
            windowStart++;                         // slide window forward
        }
    }

    return maxSum;
}

console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3)); // Output: 9
