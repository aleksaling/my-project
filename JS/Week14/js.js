// function GetName () {
//     alert (`Привет ${prompt ("Как тебя зовут?")}`);
// }

function GetName () {
    let name = prompt ("Как тебя зовут?");
    alert (`Привет ${name}`);
}


//Калькулятор

let a = document.getElementById('input1');
let b = document.getElementById('input2');


function sum() {
    let result = (+a.value + +b.value);
    console.log(result);
    document.getElementById('result').value = result;
    return result;
}

function min() {
    let result = (+a.value - +b.value);
    console.log(result);
    document.getElementById('result').value = result;
    return result;
}
function mult(){
    let result = (+a.value * +b.value);
    console.log(result);
    document.getElementById('result').value = result;
    return result;
}
function div(){
    let result = (+a.value / +b.value);
    console.log(result);
    document.getElementById('result').value = result;
    return result;
}

//Смена цвета 

function ColorChange(){
    let colorNew = document.getElementsByClassName('color__block')[0];
    colorNew.style.backgroundColor = "red";
}

//Смена картинки 

function ChangePicture(){
    let ImageGal = document.getElementById('image1');
    ImageGal.src = "https://media.istockphoto.com/photos/modern-apartment-buildings-on-a-sunny-day-with-a-blue-sky-picture-id1177797403?k=20&m=1177797403&s=612x612&w=0&h=bfprQyZxMluJaAfl2NyzIndyJDOoNGgSh8eOegCsAB4=";
}