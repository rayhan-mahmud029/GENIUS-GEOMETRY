function getTextValue(elementID) {
    const element = document.getElementById(elementID);
    const valueString = element.innerText;
    const valueNum = parseInt(valueString);
    return valueNum;
}

function getInputValue(inputID) {
    const element = document.getElementById(inputID);
    const valueString = element.value;
    if (valueString === '') {
        alert('Enter number in input field');
        return false;
    }
    else {
        const valueNum = parseInt(valueString);
        return valueNum;
    }
}



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


function calculateEvent(item, data1ID, data2ID, prefValue, equationID) {
    const data1 = getInputValue(data1ID);
    const data2 = getInputValue(data2ID);
    let i = 1;
    if (data1 === false || data2 === false) {
        return;
    }
    else {
        

        // let htmlNode = document.getElementById('calc-table-body');
        // let elementNode = htmlNode.childNodes(        
        // `

        // <tr>
        //    <td>1. `+ item + `</td>
        //    <td><span id="` + item +`-area">12</span>cm<sup>2</sup> </td>
        //   <td><button class="btn-primary btn-calculation">Convert to m<sup>2</sup> </button></td>
        // </tr>
        // `)
        


        const equationValues = data1 + " × " + data2;
        const prefixValue = prefValue;
        const triangleArea = prefixValue * data1 * data2;
        console.log(triangleArea);
        console.log(equationValues);
        
        
        // Result table
        let table = document.getElementById("calc-table");
        let row = table.insertRow(-1); 
        let c1 = row.insertCell(0);
        let c2 = row.insertCell(1);
        let c3 = row.insertCell(2);

        c1.innerHTML = row.rowIndex + '. ' + item;
        c2.innerHTML =  triangleArea + `cm<sup>2</sup>`;
        c3.innerHTML = '<button class="btn-primary btn-calculation">Convert to m<sup>2</sup> </button>';

        setTextValue(equationID, equationValues);
        i++;
        // setTextValue(resultAreID, triangleArea);
    }
}