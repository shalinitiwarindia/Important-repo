function minSubArrayLen(target, arr) {
    let minLength = Infinity;
    let windowSum = 0;
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];

        while (windowSum >= target) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            windowSum -= arr[windowStart];
            windowStart++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen(7, [2,3,1,2,4,3])); // Output: 2 -> [4,3]
