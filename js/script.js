//task1
let N=+prompt("enter number")
let result=alert(divBy10(N))
function divBy10(N) {
    return N / 10 === Math.floor(N /10);
}
//+++++++++++++++++++++++++++++++++++++++++
//task2
let arr = [2,6,30,20,15,9];
let maxNum = maxArr(arr);
function maxArr(arr) {
    let max = arr[0];
    for (i = 1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(maxNum);
//+++++++++++++++++++++++++++++++++++++++++
//task3
let A = [10,20,15,50,25,40];
let reversArray = revArr(A);
function revArr(arr) {
    return arr.reverse();
}
//console.log(arr);
console.log(reversArray);



