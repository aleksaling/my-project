const myCount = (ourSum) => {
    let total = 0;
    for (let i = 0; i < ourSum.length; i++) {
    total = total + Number(ourSum[i]);
    }
    return total;
    };

const calcTotal = function() {
    const ourSum = [];
    const selectBrand = document.getElementById('car-brand').value;
    const selectUsage = document.getElementById('usage').value;
    const leather = document.getElementById('leather');
    const regular = document.getElementById('regular');
    const addon1 = document.getElementById('addon-1');
    const addon2 = document.getElementById('addon-2');
    const addon3 = document.getElementById('addon-3');
    
if (leather.checked) {
ourSum.push(leather.value);
}                           
if (regular.checked) {
ourSum.push(regular.value);
}                         
if (addon1.checked) {
ourSum.push(addon1.value);
}        

if (addon2.checked) {
    ourSum.push(addon2.value);
}
if (addon3.checked) {
    ourSum.push(addon3.value);
}                                                       
ourSum.push(selectBrand,selectUsage);  
document.getElementById('form-result').innerText= `Итого: ${myCount(ourSum)}р.`
}   

