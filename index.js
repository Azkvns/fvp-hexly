// 1
['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна'].forEach(name => {console.log('Привет,', name)});

// 2
[1, 2, 3, 4, 5].map(value => value * 10);

// 3
[5, 12, 8, 130, 44].filter(value => value > 10);

// 4
[{name: 'Иван', age: 23}, {name: 'Мария', age: 18}, {name: 'Алексей', age: 32}, {name: 'Ольга', age: 24}, {name: 'Сергей', age: 17}, {name: 'Анна', age: 21}]
  .filter(person => person.age > 18)
  .map(({name, age}) => `${name} (${age} лет)`);

// 5
[{product: 'Телефон', price: 50000, quantity: 1}, {product: 'Чехол', price: 1500, quantity: 2}, {product: 'Зарядное устройство', price: 2500, quantity: 1}]
  .reduce((acc, {price, quantity}) => {
    return acc + price * quantity;
  }, 0);