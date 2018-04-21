console.log('client.js has been loaded')

$(document).ready(onReady);

function onReady() {
    console.log('jQuery has been loaded');
    $('#addButton').click(addNumbers);
    $('#subtractButton').click(subtractNumbers);
    $('#multiplyButton').click(multiplyNumbers);
    $('#divideButton').click(divideNumbers);
    updateHistoryDom();
}

function addNumbers() {
    sendCalculation('add');
}

function subtractNumbers() {
    sendCalculation('subtract');
}

function multiplyNumbers() {
    sendCalculation('multiply');
}

function divideNumbers() {
    sendCalculation('divide');
}

function sendCalculation (type) {
    const calcParams = {
        x: $('#inputNum1').val(),
        y: $('#inputNum2').val(),
        type: type
    };
    $('input').val(''); // clear input fields
    console.log(calcParams);
    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: calcParams
    })
        .then(function(response) {
            console.log(response);
            updateHistoryDom();
        });
}

function updateHistoryDom() {
    $.ajax({
        method: 'GET',
        url: '/history'
    })
        .then(function(response) {
            $('#calcHistoryTable').empty();
            response.forEach(function (calculation) {
                prependTableRow(calculation);
            });
        });
}

function prependTableRow(object) {
    let operator = object.type;
    if (operator == 'add') {
        operator = '+';
    }
    else if (operator == 'subtract') {
        operator = '-';
    }
    else if (operator == 'multiply') {
        operator = '&times;';
    }
    else if (operator == 'divide') {
        operator = '&divide;'
    }
    $('#calcHistoryTable').prepend(`<tr>
                                        <td>${object.x}</td>
                                        <td>${operator}</td>
                                        <td>${object.y}</td>
                                        <td>${object.answer}</td>
                                    </tr>`);
}