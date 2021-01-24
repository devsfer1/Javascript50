var input_1 = document.getElementById('input_1');
var input_2 = document.getElementById('input_2');
var exchangeRate_1 = document.getElementById('exchangeRate_1');
var exchangeRate_2 = document.getElementById('exchangeRate_2');
const btnSwap = document.getElementById('swap-btn');

// Calculate
function calculate() {
    var valueExchange1 = exchangeRate_1.value;
    var valueExchange2 = exchangeRate_2.value;

     fetch(`https://api.exchangeratesapi.io/latest?base=${valueExchange1}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[valueExchange2];
            console.log(data);
            
            const valueInput_1 = input_1.value;
            input_2.value = (valueInput_1 * rate).toFixed(2);
        })
}

// Swap
function swap() {
    const temp = exchangeRate_1.value;
    exchangeRate_1.value = exchangeRate_2.value;
    exchangeRate_2.value = temp;

    calculate();
}

// Events
input_1.addEventListener('input', calculate);
input_2.addEventListener('input', calculate);
exchangeRate_1.addEventListener('change', calculate);
exchangeRate_2.addEventListener('change', calculate);    
btnSwap.addEventListener('click', swap);