const faker = require('faker');

console.log(
  '========================= \n   Welcome to My Shop! \n========================='
);

function printProducts(num) {
  for (let i = 0; i < num; i++) {
    let product = faker.commerce.productName();
    let price = '$' + faker.commerce.price();
    console.log(product, price);
  }
}

printProducts(2);
