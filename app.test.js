const app = require("./app");

const shoppingBasket1 = [
  '2 book at 12.49',
  '1 music CD at 14.99',
  '1 chocolate bar at 0.85'
];

const shoppingBasket2 = [
  '1 imported box of chocolates at 10.00',
  '1 imported bottle of perfume at 47.50'
];

const shoppingBasket3 = [
  '1 imported bottle of perfume at 27.99',
  '1 bottle of perfume at 18.99',
  '1 packet of headache pills at 9.75',
  '3 imported boxes of chocolates at 11.25'
];

describe('First basket', () => {
  test('run app on basket 1', () => {
    const expectedResult = ['2 book : 27.48', '1 music CD: 16.49', '1 chocolate bar: 0.85', 'Sales Taxes: 2.84', 'Total: 44.82'];

    const result = app.init(shoppingBasket1);
    expect(result).toEqual(expectedResult);
  })
});

describe('Second basket', () => {
  test('run app on basket 2', () => {
    const expectedResult = [
      '1 imported chocolates: 11.50',
      '1 imported perfume: 54.63',
      'Sales Taxes: 8.63',
      'Total: 66.13'
    ];

    const result = app.init(shoppingBasket2);
    console.log(result);
    expect(result).toEqual(expectedResult);
  })
});

describe('Third basket', () => {
  test('run app on basket 3', () => {
    const expectedResult = [
      '1 imported perfume: 32.19',
      '1 bottle perfume: 20.89',
      '1 packet pills: 10.72',
      '3 imported chocolates: 38.81',
      'Sales Taxes: 8.77',
      'Total: 102.61'
    ];

    const result = app.init(shoppingBasket3);
    expect(result).toEqual(expectedResult);
  })
});
