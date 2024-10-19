function showResult(value) {
    document.querySelector('.input').value += value;
}
function clearResult() {
    document.querySelector('.input').value = '';
}
function calculateResult() {
    const resultField = document.querySelector('.input');
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = error;
    }
}

