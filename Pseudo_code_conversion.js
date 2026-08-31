function getNumber(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (arr[i] == target) {
      console.log(`target found at index ${i}`);
      return;
    }
  }
  console.log("not found");
}
let arr = [1, 3, 5, 8, 9, 5, 3, 4];

getNumber(arr, 4);
