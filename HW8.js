const company = {
    name: 'Велика Компанія',
    type: 'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(object, companyName) {
    let result = null;
    const arrayToIterateOn = object.clients || object.partners;
    for (let i = 0; i < arrayToIterateOn.length; i++) {
      const client = arrayToIterateOn[i];
      if (companyName.includes(client.name) && client.name !== companyName) {
        result = findValueByKey(client, companyName);
        break;
      } else if (client.name === companyName) {
        result = client;
      }
    }
    return result;
  }

const foundCompany = findValueByKey(company, 'Клієнт 1.2');
if (foundCompany) {
    console.log(foundCompany);
} else {
    console.log('Компанію не знайдено.');
}
