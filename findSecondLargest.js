function findSecondLargest(arr) {
  // initialized two variables to track the largest and second largest
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];

    // if the current number is larger than the largest number, update both largest and second largest
    if (current > largest) {
      secondLargest = largest;
      largest = current;
    } 
    // if the current number is smaller than the largest but larger than the second largest, update second largest
    else if (current > secondLargest && current !== largest) {
      secondLargest = current;
    }
  }

  console.log("Second largest number is:", secondLargest);
}

=let arr = [6, 13, 22, 18, 0, 3, 45, 57, 5, 12];

findSecondLargest(arr);
