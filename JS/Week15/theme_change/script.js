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
    case "white":
    document.getElementById("body").style.backgroundColor = "#190204";
    break;
    default: 
    document.getElementById("body").style.backgroundColor = "white"
}
}

