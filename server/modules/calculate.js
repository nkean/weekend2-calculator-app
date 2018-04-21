function calculateAnswer(parameters) {
    let x = Number(parameters.x);
    let y = Number(parameters.y);
    let type = parameters.type;
    let answer = 0;
    
    if (type == 'add') {
        answer = x + y;
    }
    else if (type == 'subtract') {
        answer = x - y;
    }
    else if (type == 'multiply') {
        answer = x * y;
    }
    else if (type == 'divide') {
        answer = x / y;
    }

    parameters.answer = answer;
    return parameters;
}

module.exports = calculateAnswer;