const moneda1 = document.getElementById('from');
const moneda2 = document.getElementById('to');
const result = document.getElementById('result-container')

addEventListener('click', (e) =>{
    if (e.target.id==='convert-btn') {
        let valor3;
        const inputElement = document.getElementById('amount');
        const valor = parseFloat(inputElement.value);
        if (moneda1.value=== 'usd' && moneda2.value === 'eur') {
            valor3 =  (valor * 0.92)
        }else if (moneda1.value === 'usd' && moneda2.value === 'gbp') {
            valor3 = (valor / 1.26);
        }else if (moneda1.value === 'eur' && moneda2.value === 'usd') {
            valor3 = (valor / 0.92)
        }else if(moneda1.value === 'eur' && moneda2.value === 'gbp'){
            valor3 = (valor * 0.86)
        }else if (moneda1.value === 'gbp' && moneda2.value ==='usd') {
            valor3 = (valor * 1.26)
        }else if (moneda1.value === 'gbp' && moneda2.value==='eur') {
            valor3=(valor / 0.86)
        }
        const listItem = document.createElement('li');
        listItem.textContent = valor3.toFixed(2); 
        result.appendChild(listItem);
    }
})
