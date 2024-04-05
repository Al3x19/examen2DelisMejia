const valor = document.getElementById('amount');
const moneda1 = document.getElementById('from');
const moneda2 = document.getElementById('to');
const result = document.getElementById('result-container')

addEventListener('click', (e) =>{
    if (e.target.id==='convert-btn') {
        // let valor3
        if (moneda1.value=== 'USD' && moneda2.value === 'EUR') {
            result =  (valor * 0.92)
        }else if (moneda1.value === 'USD' && moneda2.value === 'GBP') {
            result = (valor * 1.26);
        }
        result.innerHTML= result.innerHTML + `<li>${eval(result.value)}</li>`
        // console.log(result);
    }
})

// object.addEventListener("change", myScript)