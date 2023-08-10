let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let sumOfPositive = 0;
let countOfPositive = 0;

let pairedPositiveNums = 0;
let sumOfPairedPositiveNums = 0;

let unpairedPositiveNums = 0;
let sumOfUnpairedPositiveNums = 0;

let productOfPositive = 1;

let countOfNegative = 0;
let minElement = 0;

let maxElement = 0;
let maxIndex = 0;

let minIndex = 0;

for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0){
        sumOfPositive += arr[i];
        countOfPositive++;
        productOfPositive *= arr[i];
        if (arr[i] % 2 === 0){
            pairedPositiveNums++;
            sumOfPairedPositiveNums += arr[i];
        } else{
            unpairedPositiveNums++;
            sumOfUnpairedPositiveNums += arr[i];
        }
    } else{
        countOfNegative++;
    }
    if (arr[i] < minElement){
        minElement = arr[i];
        minIndex = i;
    }
    if (arr[i] > maxElement){
        maxElement = arr[i];
        arr[maxIndex] = 0;
        maxIndex = i;
    } else {
        arr[i] = 0;
    }
}
