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




// 1. Перепишите домашнее задание прошлой недели c помощью **input** для ввода данных и **div** (либо **input**) для вывода результата
// 2. Напишите скрипт, который меняет фон div-ов по клику на них
// 3. Напишите простую галерею на 2+ картинки с кнопками Вперед и Назад (*она не должна работать идеально, это пока просто заготовка на будущее!*)
// 4. Воспользовавшись дебаггером, пройдите по шагам все практическое домашнее задание. Если что-то не работает, попытайтесь понять, почему