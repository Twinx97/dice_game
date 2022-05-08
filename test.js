const outputContainer = document.getElementById('outputContainer');
const output = document.getElementById('output');
const btn = document.getElementById('btn');

function rollDice() {
    let number = Math.floor(Math.random() * 100)
    if(number > 55) {
        output.style.color = 'green';
        output.innerHTML = `You rolled a (${number}), YOU WIN!`;
        return;
    } else {
        output.style.color = 'red';
        output.innerHTML = `You rolled a (${number}), bad luck!`;
        return;
    }
}