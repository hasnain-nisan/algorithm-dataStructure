
const linearSearch = (array, result) => {
    // if the result is found in array return the index number or return null
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element === result){
            return index;
        }
    }
    return null; 
}

const betterLinearSearch = (array, result) => {
    let length = array.length;
    let left = 0;
    let right = length -1;

    while (left <= right) {
        if(array[left] === result) return left;
        if(array[right] === result) return right;
        left++
        right--
    }
    return null;
}

const verifyLinearSearch = (index) => {
    index === null 
        ? console.log("Result not found in the array") 
        : console.log(`Result found in the index number: ${index}`)
}

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,];

const result = linearSearch(array, 50)
const betterResult = betterLinearSearch(array, 35)

verifyLinearSearch(result)
verifyLinearSearch(betterResult);
