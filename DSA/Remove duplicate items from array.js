//Method 1 (using loop):
const arr = [1, 2, 3, 4, 1, 2];
const b = [];

for (let i = 0; i < arr.length; i++) {
  if (b.indexOf(arr[i]) === -1) {
    b.push(arr[i]);
  }
}
console.log("removed array value", b); // 👉 [1, 2, 3, 4]

//Method 2 (using filter):
const arr = [1, 2, 3, 4, 1, 2];
const b = [];

arr.filter((item) => {
  if (b.indexOf(item) === -1) {
    b.push(item);
  }
});
console.log("removed array value", b); // 👉 [1, 2, 3, 4]

//Better way (using Set):
const arr = [1, 2, 3, 4, 1, 2];
const uniqueArr = [...new Set(arr)];
console.log("removed array value", uniqueArr); // 👉 [1, 2, 3, 4]

