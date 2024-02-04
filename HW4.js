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
      if (age !== 11 && lastDigit === 1) {
          word = "рік";
      } else if (age > 4 && age <= 21) {
          word = 'років';
      } else if (lastDigit > 1 && lastDigit < 5) {
          word = 'роки';
      } else {
          word = 'років';
      }
    alert(age + " " + word);
  }
}
