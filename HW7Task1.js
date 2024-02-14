let obj = {
    name: 'Elias',
    age: 24,
    city: 'Toronto',
    getInfo() {
      for (let property in this)
        if (typeof this[property] !== 'function')
          console.log(`${property}: ${this[property]}`);
    }
  };
  
  obj.getInfo();
  
  obj.newProperty = 'Нова властивість!';
  
  obj.getInfo();