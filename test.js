const outputContainer = document.getElementById('outputContainer');
const output = document.getElementById('output');
const btn = document.getElementById('btn');

function rollDice() {
    let number = Math.round(Math.random() * 100)
    console.log(number);
    if(number > 55) {
        output.style.color = 'green';
        output.innerHTML = `You roll a (${number}), YOU WIN!`;
        return;
    } else {
        output.style.color = 'red';
        output.innerHTML = `You roll a (${number}), bad luck!`;
        return;
    }
}