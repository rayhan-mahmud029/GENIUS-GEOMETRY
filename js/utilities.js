// Used to get Text Element value
function getTextValue(elementID) {
    const element = document.getElementById(elementID);
    const valueString = element.innerText;
    let valueNum = parseFloat(valueString).toFixed(2);
    return valueNum;
}

// Used to get User Input value
function getInputValue(inputID) {
    const element = document.getElementById(inputID);
    const valueString = element.value;
    let valueNum = parseFloat(valueString).toFixed(2);
    if (valueString === '' || isNaN(valueNum) === true) {
        alert('Enter number in input field');
        return false;
    }

    else if(valueNum <0 ){
        alert('Enter positive number');
        return false;
    }
    else {
        return valueNum;
    }
}


// Used to set Value in text element
function setTextValue(elementID, value) {
    const element = document.getElementById(elementID);
    element.innerText = value;
}


// Random Color creating function
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


// Calculation function along with putting values in result table and in formula
function calculateEvent(item, data1ID, data2ID, prefValue, equationID, formula) {
    const data1 = getInputValue(data1ID);
    const data2 = getInputValue(data2ID);
    if (data1 === false || data2 === false) {
        return;
    }
    else {
        const equationValues = data1 + " × " + data2;
        const prefixValue = prefValue;
        const Area = parseFloat(prefixValue * data1 * data2).toFixed(2);

        
        
        // Result table
        let table = document.getElementById("calc-table");
        let row = table.insertRow(-1); 
        let c1 = row.insertCell(0);
        let c2 = row.insertCell(1);
        let c3 = row.insertCell(2);
 
        c1.innerHTML = row.rowIndex + '. ' + item;
        c2.innerHTML =  Area + `<span>cm<sup>2</sup></span>`;
        c3.innerHTML = '<button class="btn-primary btn-calculation" >Convert to m<sup>2</sup> </button>';

        setTextValue(equationID, equationValues);
    }
}