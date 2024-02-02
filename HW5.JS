const unit = prompt("Введіть одиницю вимірювання");
const amount = prompt ("Введіть одиницю");

let convertedValue;
let convertedUnit;

switch (unit) {
    case "км":
        convertedValue = amount * 1000;
        convertedUnit = "м";
        break;
    case "год":
        convertedValue = amount * 60;
        convertedUnit = "хв";
        break;
    case "кг":
        convertedValue = amount * 1000;
        convertedUnit = "г";
        break;
    default:
        alert("Невідома одиниця виміру");
}
alert(`${amount} ${unit} це ${convertedValue} ${convertedUnit}`);
