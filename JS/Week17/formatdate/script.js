function formatDate(date) {
let distance = new Date() - date;
let distanceinseconds = Math.round(distance / 1000); 
let distanceinminutes = distanceinseconds / 60; 
let distanceinhours = distanceinminutes / 60; 
    
let day = date.getDate();
day = day < 10 ? '0' + day : day;
let hour = date.getHours();
hour = hour < 10 ? '0' + hour : hour;
let  minutes = date.getMinutes();
minutes = minutes < 10 ? '0' + minutes : minutes;
let month = date.getMonth() + 1;
month = month < 10 ? '0' + month : month;
let year = date.getFullYear();
year = year.toString().slice(-2);

if (distanceinseconds < 1) {
    return 'прямо сейчас';
} 
if (distanceinminutes < 1) {
    return `${distanceinseconds} сек. назад`
} 
if (distanceinhours < 1) {
    return `${distanceinminutes} мин. назад`
} 
else {
    return `${day}.${month}.${year} ${hour}:${minutes}`
}
}

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400* 4 * 1000)) );