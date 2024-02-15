let services = {
  "Стрижка": "60 грн",
  "Гоління": "80 грн",
  "Миття голови": "100 грн",

  addService: function(name, price) {
    this[name] = price + ' грн';
  },

  minPrice: function() {
    let min;
    for (let service in this) {
      if (typeof this[service] === 'string') {
        let price = parseInt(this[service]);
        if (!isNaN(price)) {
          if (!min) {
            min = price;
            continue;
          }
          if (price < min) {
            min = price;
          }
        }
      }
    }
    return min + ' грн';
  },

  maxPrice: function() {
    let max;
    for (let service in this) {
      if (typeof this[service] === 'string') {
        let price = parseInt(this[service]);
        if (!isNaN(price)) {
          if (!max) {
            max = price;
            continue;
          }
          if (price > max) {
            max = price;
          }
        }
      }
    }
    return max + ' грн';
  },

  calculatePrices: function() {
    let totalPrice = 0;
    for (let service in this) {
      if (typeof this[service] === 'string') {
        let price = parseInt(this[service]);
        if (!isNaN(price)) {
          totalPrice += price;
        }
      }
    }
    return totalPrice + ' грн';
  },
};

services.addService('Фарбування волосся', '300 грн');
services.addService('Розбити обличчя майстру', '500 грн');

console.log('Загальна вартість наданих послуг:', services.calculatePrices());
console.log('Мінімальна вартість:', services.minPrice());
console.log('Максимальна вартість:', services.maxPrice());
