let min = Math.ceil(-10);
let max = Math.floor(10);

function generator () {
function getRandomIntInclusive(min, max) {
nums = [];
for (let i = 0; i<10; i++) {
nums.push(Math.floor(Math.random() * (max - min + 1)) + min); 
}
return nums;
}
let array = getRandomIntInclusive(min, max); // 1. get numbers generated
document.getElementById("1").innerHTML = array;
let minimal = Math.min(...array); // 2. get min number
document.getElementById("2").innerHTML = minimal;
let maximum = Math.max(...array); // 3. get max number
document.getElementById("3").innerHTML = maximum;

let sum = () => { 
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
    sum = sum + Number(array[i]);
    }
    return sum;
}
document.getElementById("5").innerHTML = sum(); // 5. get sum 

let middlesum = sum()/10;
document.getElementById("4").innerHTML = middlesum; // 4. get middle sum 

let multi = () => { 
    let multi = 0;
    for (let i = 0; i < array.length; i++) {
    multi = multi * Number(array[i]);
    }
    return multi;
}
document.getElementById("6").innerHTML = multi(); // 6. get multiply
}