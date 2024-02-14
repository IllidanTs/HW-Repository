let services = {
  "Стрижка": 60,
  "Гоління": 80,
  "Миття голови": 100,

  addService: function(name, price) {
    this[name] = price;
  },

  minPrice: function() {
    let min;
    for (let service in this) {
      if (typeof this[service] === 'number') {
        if (!min) {
          min = this[service];
          continue;
        }

        if (this[service] < min) {
          min = this[service];
        }
      }
    }
    return min;
  },

  maxPrice: function() {
    let max;
    for (let service in this) {
      if (typeof this[service] === 'number') {
        if (!max) {
          max = this[service];
          continue;
        }
        if (this[service] > max) {
          max = this[service];
        }
      }
    }
    return max;
  },

  calculatePrices: function() {
    let totalPrice = 0;
    for (let service in this) {
      if (typeof this[service] === 'number') {
        totalPrice += this[service];
      }
    }
    return totalPrice;
  },
};

services.addService('Фарбування волосся', 300);
services.addService('Розбити обличчя майстру', 500);

console.log('Загальна вартість наданих послуг:', services.calculatePrices(), 'грн');
console.log('Мінімальна вартість:', services.minPrice(), 'грн');
console.log('Максимальна вартість:', services.maxPrice(), 'грн');
