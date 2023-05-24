// selecting all elements

const inputArray = document.querySelector('.argument');
const countButton = document.querySelector('.count-button');
const fill = document.querySelector('.fill');
const operations = document.querySelector('#options');
const output = document.querySelector('.output');
const colorText = document.querySelector('.input-text-color');
const bgColor = document.querySelector('.input-background-color');


// selection ends here



// ----------------------------------------------------------------------------------------------------------

// event listeners

colorText.addEventListener('input', () => {
    setStyle(inputArray, output, 'color', colorText.value);
});


bgColor.addEventListener('input', () => {
    setStyle(inputArray, output, 'backgroundColor', bgColor.value);
});

countButton.addEventListener('click', () => {
    let  array = filterInput(inputArray.value);
    const operator = operations.value;
    const result = calculate(operator, array);
    output.value = result;
});


fill.addEventListener('click', () => {
    let arr = new Array();
    for(let i = 0; i < 10; i++){
        arr.push(randomGenerator());
    }
    inputArray.value = arr.join(' ');
})

// events end

// --------------------------------------------------------------------------------------------------------------

// functions 

function setStyle(element1, element2, property, value) {
    element1.style[property] = value;
    element2.style[property] = value;
}

function randomGenerator() {
    return Math.floor(Math.random() * 10);
}
function filterInput(input) {
    const inputArray = Array.from(input.split(' ')).filter((item) => {
        if(!isNaN(item) && item !== ' ') {
            return item;
        }
    }).map((item) => {
        return parseInt(item);
    });
    return inputArray;
}
setTimeout(randomGenerator, 1);
function calculate(operator, array) {
    return array.reduce((accumulator, currentValue) => {
        switch (operator) {
            case 'sum': return accumulator + currentValue;
            case 'product': return accumulator * currentValue;
            case 'min': return Math.min(...array);
            case 'max': return Math.max(...array);
        }
    }, operator === 'product' ? 1 : 0);
}

// functions end 