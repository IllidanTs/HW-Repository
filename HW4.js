let age = prompt("Скільки тобі років?");
console.log(typeof age);
if (isNaN(age)) {
    alert("Введено не число");
} else {
    age = Number(age);
    if (age < 0 || age > 100) {
        alert("Введено некоректний вік");
    } else {
        let word;
        const lastDigit = age % 10;
        const lastTwoDigits = age % 100;
        if (age === 1 || (lastTwoDigits >= 11 && lastTwoDigits <= 14)) {
            word = 'рік';
        } else if (lastDigit >= 2 && lastDigit <= 4) {
            word = 'роки';
        } else {
            word = 'років';
        }
        alert(age + " " + word);
    }
}
