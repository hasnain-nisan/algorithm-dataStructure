const binarySearch = (array, result) => {
    let first = 0;
    let last = array.length - 1;

    while (first <= last) {
        let midpoint  = Math.floor((first + last)/2)
        if(array[midpoint] === result){
            return midpoint;
        } else if(array[midpoint] < result){
            first = midpoint + 1;
        } else {
            last  = midpoint -  1;
        }
    }
    return null;
}

const verifyBinarySearch = (index) => {
  index === null
    ? console.log("Result not found in the array")
    : console.log(`Result found in the index number: ${index}`);
};

const array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
];

const result = binarySearch(array, 50);
const result1 = binarySearch(array, 35);

verifyBinarySearch(result);
verifyBinarySearch(result1);