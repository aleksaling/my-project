document.getElementById('name__transformer').onchange = function myfunction() {

 // get what the user typed in   
let userinputStr = document.getElementById('user__input').value;
 // check for valid signs - not working properly :(
let regexp = /^[0-9!@#\$%\^\&*\)\(+=._]+$/g;
if (regexp.test(userinputStr) == true) {
    alert("Недопустимые знаки")
}

//clean the string from spaces at the begining and at the end 
let cleanInputStr = userinputStr.trim(userinputStr);

// put the strings in the array separately 
const devidedInputArr = cleanInputStr.split(" ");
console.log(devidedInputArr);

//clean array from empty strings and invalid signs  - need to check for more
const cleanedArr = devidedInputArr.filter(input => {
    if (isNaN(input) && input !== "")
    return input;
});
console.log(cleanedArr);

//correct capotalization in array items
const caseInputArr = cleanedArr.map(function (item) { 
    let lowercase = item.slice(1);
    return item = item[0].toUpperCase() + lowercase.toLowerCase();
});

// put each element of the array into the field
if (caseInputArr[0] !== undefined) {
document.getElementById('user__last-name').value = caseInputArr[0];
}
if (caseInputArr[1] !== undefined) {
document.getElementById('user__first-name').value = caseInputArr[1];
}
if (caseInputArr[2] !== undefined) {
document.getElementById('user__patronic-name').value = caseInputArr[2];
}
}