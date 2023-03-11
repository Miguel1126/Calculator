function plus(){
    const form = document.getElementById('form');
    let stNumber = form['stNumber'];
    let ndNumber = form['ndNumber'];
    let result = parseInt(stNumber.value) + parseInt(ndNumber.value);
    if(isNaN(result))
        result = 'The operation does not include numbers';
    document.getElementById('result').innerHTML = `result: ${result}`;
    console.log(`result: ${result}`);
}

function subtract(){
    const form = document.getElementById('form');
    let stNumber = form['stNumber'];
    let ndNumber = form['ndNumber'];
    let result = parseInt(stNumber.value) - parseInt(ndNumber.value);
    if(isNaN(result))
        result = 'The operation does not include numbers';
    document.getElementById('result').innerHTML = `result: ${result}`;
    console.log(`result: ${result}`);
}

function multiply(){
    const form = document.getElementById('form');
    let stNumber = form['stNumber'];
    let ndNumber = form['ndNumber'];
    let result = parseInt(stNumber.value) * parseInt(ndNumber.value);
    if(isNaN(result))
        result = 'The operation does not include numbers';
    document.getElementById('result').innerHTML = `result: ${result}`;
    console.log(`result: ${result}`);
}

function divide(){
    const form = document.getElementById('form');
    let stNumber = form['stNumber'];
    let ndNumber = form['ndNumber'];
    let result = parseInt(stNumber.value) / parseInt(ndNumber.value);
    if(isNaN(result))
        result = 'The operation does not include numbers';
    document.getElementById('result').innerHTML = `result: ${result}`;
    console.log(`result: ${result}`);
}

function modul(){
    const form = document.getElementById('form');
    let stNumber = form['stNumber'];
    let ndNumber = form['ndNumber'];
    let result = parseInt(stNumber.value) % parseInt(ndNumber.value);
    if(isNaN(result))
        result = 'The operation does not include numbers';
    document.getElementById('result').innerHTML = `result: ${result}`;
    console.log(`result: ${result}`);
}