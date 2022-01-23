function changeTheme () {

switch (document.getElementById("theme").value) {

    case "green":
    document.getElementById("body").style.backgroundColor = "#94C973";
    break;
    case "yellow":
    document.getElementById("body").style.backgroundColor = "#E9B210";
    break;
    case "blue":
    document.getElementById("body").style.backgroundColor = "#41729F";
    break;
    default: 
    document.getElementById("body").style.backgroundColor = "white"
}
}

