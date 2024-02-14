let array1 = [1, 2, 3, 7, 9, 19, 25];
let array2 = [19, 5, 16, 10, 3, 1];

function Intersection(arr1, arr2) {
  let result = [];
  let arr3 = arr1.concat(arr2);
  let counter = {};

  for (let i = 0; i < arr3.length; i++) {
    let array3Value = arr3[i];
    //不包含Array3的值
    if (!counter[array3Value]) {
      counter[array3Value] = 1;
    } else {
      //如果包含就+1
      counter[array3Value]++;
    }
  }
  console.log(counter);

  //Loop over the counter
  for (let property in counter) {
    if (counter[property] > 1) {
      result.push(property);
    }
  }
  console.log(result);
  return result;
}
Intersection(array1, array2);
