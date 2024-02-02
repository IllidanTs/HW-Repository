let age = prompt("Скільки тобі років");
console.log (typeof age)
if (isNaN(age)) {
    alert ("Введено не число")
} else {
    age=Number(age)
    if (age <= 0) {alert("Число є відʼємним")}
    else {
        let word;
    if (age === 1) {
        word = 'рік';
    } else if (age >= 2 && age <= 4) {
        word = 'роки';
    } else {
        word = 'років';
    }
    alert (age+" "+word)
    }
}