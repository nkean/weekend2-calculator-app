console.log('client.js has been loaded')

$(document).ready(onReady);

function onReady() {
    console.log('jQuery has been loaded');
    $('#addButton').click(addNumbers);
    $('#subtractButton').click(subtractNumbers);
    $('#multiplyButton').click(multiplyNumbers);
    $('#divideButton').click(divideNumbers);
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
        });
}