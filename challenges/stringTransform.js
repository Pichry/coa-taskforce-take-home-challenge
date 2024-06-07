const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function transformString(str) {
    const length = str.length;
    if (length % 15 === 0) {
        return str.split('').reverse().join('').split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 5 === 0) {
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        return str.split('').reverse().join('');
    }
    return str;
}

rl.question('Enter a string: ', (input) => {
    console.log(transformString(input));
    rl.close();
});