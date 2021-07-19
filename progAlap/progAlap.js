// Progalap teszt

// 1.
// elemi adattípusok: number, string, bolean – szám, karakterlánc, logikai(igaz/hamis)
// összetett típusok: tömb, objektum

// 2.
// const – a változó deklaráláskor az inicializált érték nem változtatható.
// Let – ennél a változó típusnál viszont bármikor megváltoztatható az érték.

// 3.
// referencia szerinti paraméterátadás – mikor egy függvény paraméterként kap meg pl. egy tömböt, és annak elemei a függvényen belüli változtatás során kívül is megváltoznak.

// érték szerinti paraméterátadás – mikor a függvény paraméterként kap meg egy változót;  a függvényen belüli változtatás során annak értéke kívül nem változik meg.

// 4.

const containsElement = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
};
console.log(containsElement([1, 2, 3, 4, 5], 6)); // false

// 5.

const arrOfNicePeople = [
  {
    name: 'Feri',
    age: '25'
  },
  { name: 'Józsi', age: '21' },
  { name: 'Marika néni', age: '99' }
];

const oldest = (arr) => {
  let oldPerson = arr[0].age;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age > oldPerson) {
      oldPerson = arr[i].age;
    }
  }
  return oldPerson;
};
console.log(oldest(arrOfNicePeople));

// 6.

const segment = (arr1, arr2, segmentArr) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] === arr1[i] && !segmentArr.includes(arr1[i])) {
        segmentArr.push(arr1[i]);
        break;
      }
    }
  }
  return segmentArr;
};
console.log(segment([1, 3, 2, 3, 4], [5, 3, 9, 2, 6, 10], []));

// 7.

const add = (a, b) => {
  return a + b;
};

const mul = (a, b) => {
  return a * b;
};

const pow = (a, b) => {
  return a ** b;
};

module.exports = {
  add,
  mul,
  pow
};

// 8.

const newArr = (n, m) => {
  const arr = new Array(n);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(m);
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = i * j;
    }
  }
  return arr;
};
console.log(newArr(3, 3));
