function checkIsPrimeNumber(n) {
    let isPrimeNumber = true; // Prime number is already setting by default as true
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            isPrimeNumber = false
        }
    }
    return isPrimeNumber
}


const primeNumbersUpTo = (number) => {
    let primeNumbers = []
    for (let i = 1; i < number; i++) {
        if (checkIsPrimeNumber(i) ) { //Check is prime Number
            primeNumbers.push(i)
        }
    }
    return primeNumbers
}

console.log(primeNumbersUpTo(600))
