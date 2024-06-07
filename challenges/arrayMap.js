const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function subarraySum(arr, target) {
    let sum = 0;
    const map = new Map();

    // Initialize with sum 0 at index -1 for edge case
    map.set(0, -1); 

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (map.has(sum - target)) {
            return true;
        }
        map.set(sum, i);
    }
    return false;
}

rl.question('Enter the array (comma-separated): ', (arrStr) => {
    const arr = arrStr.split(',').map(Number);
    rl.question('Enter the target sum: ', (targetStr) => {
        const target = Number(targetStr);
        console.log(subarraySum(arr, target));
        rl.close();
    });
});
