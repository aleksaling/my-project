function CleanInput (){
    document.getElementsByTagName('input')[0].value = "";
}   

function clickMeGoogle () {
    window.location.href = 'http://www.google.com';
    document.getElementsByTagName('input')[0].value = "";
}