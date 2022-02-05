let ourSum = [];
let selectBrand = document.getElementById('car-brand').value;
const selectUsage = document.getElementById('usage').value;



let calcTotal = function() {
    const leather = document.getElementById('leather').value;
    let regular = document.getElementById('regular').value;
    let addon1 = document.getElementById('addon-1').value;
    let addon2 = document.getElementById('addon-2').value;
    let addon3 = document.getElementById('addon-3').value;
    
                            if (leather.checked=true) {
                            ourSum.push(leather);
                            }
                            
                            if (regular.checked=true) {
                            ourSum.push(regular);
                            }
                            
                            if (addon1.checked=true) {
                            ourSum.push(addon1);
                            }
                            
                            if (addon2.checked=true) {
                            ourSum.push(addon2);
                            }
                            
                            if (addon3.checked=true) {
                            ourSum.push(addon3);
                            } 
ourSum.push(selectBrand,selectUsage);  
                        let total = 0;
    
                        let myCount = () => {
                        for (i = 0; i < ourSum.length; i++) {
                        total = total + Number(ourSum[i]);
                        }
                        return total;
                        };
    
    let totalRes = myCount();   
    document.getElementById('form-result').innerText= `Итого: ${totalRes}р.`
}   

