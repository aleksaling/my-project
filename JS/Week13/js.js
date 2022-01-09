// function GetName () {
//     alert (`Привет ${prompt ("Как тебя зовут?")}`);
// }

function GetName () {
    let name = prompt ("Как тебя зовут?");
    alert (`Привет ${name}`);
}



function sum(){
    let a = prompt (`Введите первое число`);
    let b = prompt (`Введите второе число`);
    alert (+a+ +b);
}
function min(){
    let a = prompt (`Введите первое число`);
    let b = prompt (`Введите второе число`);
    alert (a-b);
}
function mult(){
    let a = prompt (`Введите первое число`);
    let b = prompt (`Введите второе число`);
    alert (a*b);
}
function div(){
    let a = prompt (`Введите первое число`);
    let b = prompt (`Введите второе число`);
    alert (a/b);
}