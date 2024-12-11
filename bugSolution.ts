function combine(arr1: number[], arr2: number[]): number[] {
  const combinedArr: number[] = [];
  arr1.forEach(num => combinedArr.push(num));
  arr2.forEach(num => {
    if(typeof num === 'number') {
      combinedArr.push(num);
    } else {
      console.error('Non-number element found in array')
    }
  });
  return combinedArr;
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, "6"];
const result = combine(arr1, arr2); 
console.log(result); // Output: [1, 2, 3, 4, 5] and a console error.