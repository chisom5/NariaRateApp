document.querySelector('#output').style.visibility = 'hidden';

const input = document.querySelector(`input[type]`);
input.addEventListener('input', e => {

    document.querySelector('#output').style.visibility = 'visible';

    let inputTxt = e.target.value;

    // dollars conversion
    document.querySelector('#dollarsTxt').innerHTML = inputTxt * 0.0028;

    // Euros conversion
    document.querySelector('#euroTxt').innerHTML = inputTxt * 0.0022;

    // pounds conversion
    document.querySelector('#poundTxt').innerHTML = inputTxt * 0.0019;

});