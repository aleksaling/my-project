
reg__button.addEventListener("click", check);
reg__button.addEventListener("click", checkEmail);
reg__button.addEventListener("click", grantAccess);
let user_name = document.getElementById('name');

function check() {
    let user_lastname = document.getElementById('lastname');
    let user_phone = document.getElementById('phone');
    let user_email = document.getElementById('email');
    let user_password = document.getElementById('password');
    document.getElementById("form__error-message").innerHTML = " ";

    if(user_name.value == '') {
    document.getElementById("form__error-message").innerHTML += "Введите имя<br>";
    }
    if(user_lastname.value == '') {
        document.getElementById("form__error-message").innerHTML += "Введите фамилию<br>";
        }
        if(user_phone.value == '') {
            document.getElementById("form__error-message").innerHTML += "Введите телефон<br>";
            }    
            if(user_password.value.length < 8) {
                document.getElementById("form__error-message").innerHTML += "Сликшом короткий пароль<br>";
                }   

                else return true;
}

function checkEmail () {
    let user_email = document.getElementById('email');
    if (user_email.value.includes ('@')) {
        return true }
else {
    document.getElementById("form__error-message").innerHTML += "Неверный email<br>"
}
}

function grantAccess () {
    if (check() && checkEmail ()){
    alert(`Ура, все получилось :) Привет ${user_name.value}`);
    }
    else {
        console.log("validation failed")
    }
}

//console.log("user_email is ok") && 