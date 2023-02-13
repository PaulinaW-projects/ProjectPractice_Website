// Task1
const categories = [
  { id: 1, name: "Category 1" },
  { id: 2, name: "Category 2" },
  { id: 3, name: "Category 3" },
  { id: 4, name: "Category 4" },
  { id: 5, name: "Category 5" },
  { id: 6, name: "Category 6" },
  { id: 7, name: "Category 7" },
];

// const evenCategories = categories
// array bellow should include only even categories like those where id is even 2, 4....
function even(categoriesArray) {
  //funkcja jest wykonywana na każdym elemencie tablicy - element to "category"
  return categoriesArray.filter((category) => {
    // console.log(element)
    return category.id % 2 === 0;
  });
}

const evenCategories = even(categories);

//nie powinno się bazować na indexach tablicy, może być ona nie posortowana.
//number też powinno nazywać się inaczej - wprowadza w błąd
//number zamienione na categoriesArray
//mniej preferowana metoda, lepiej używać .filter
function even2(categoriesArray) {
  const temporaryArray = [];
  for (var i = 0; i < categoriesArray.length; i++) {
    if (categoriesArray[i].id % 2 === 0) {
      temporaryArray.push(categoriesArray[i]);
    }
  }
  return temporaryArray;
}

const evenCategories2 = even2(categories);

//sprawdzenie czy obie metody działają tak samo
console.log(evenCategories);
console.log(evenCategories2);

// you should combine categories and evenCategories into one array
// it could be solved in many ways, please implement at least two scenarios, first with mutation of data second without

//dla każdego elementu z evenCategories do tablicy categories dodaj ten element
//to mutuje dane
evenCategories.forEach((element) => {
  categories.push(element);
});

//to nie mutuje danych
const combinedCategoriesWithoutMutation = [...categories, ...evenCategories]; // categories.concat(evenCategories);

// array should not include  element with id 1 and id 7 (plase do it twice)

function removeFirstLastEL(arr) {
  return arr.filter((_, index) => index !== 0 && index !== arr.length - 1);
}
const categoriesWithoutFirstAndLastIndex = removeFirstLastEL(categories);

function removeFirstLastEl2(arr) {
  arr.pop();
  arr.shift();
  return arr;
}

const categoriesWithoutFirstAndLastIndexAndWithoutUsingFilterMethod =
  removeFirstLastEl2(categories);

// write function that devide any array ino separate arrays in length that is given as param
// example divide([1, 2, 3, 4], 2) should return [[1,2], [3,4]]
function divide(arr, chunkSize) {
  const resultArray = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    resultArray.push(arr.slice(i, i + chunkSize));
  }
  return resultArray;
}
const result = divide(categories, 2);
console.log(result);
// function drop should create a slice of array with n elementds dropped from the bneginning
function drop(arr, size) {
  return arr.slice(size);
}

// same as above but drops from right side
function take(arr, size) {
  return arr.filter((_, index) => index >= size);
}
const resultArray2 = take(categories, 1);
console.log(categories);
console.log(resultArray2);
// function should return only unique values in array like uniq([1, 2, 3, 3])  should return only [1, 2]

const array4 = [1, 1, 2];
const array3 = [{ name: "John" }, { name: "John" }, { name: "Mary" }];
const test = {
  type: "human",
  age: 30,
  name: "John",
  children: [{ name: "Jacob", age: 7 }],
};
console.log(test.type); //to
console.log(test["type"]); //to samo

function uniq(arr) {
  const doesArrayIncludesOnlyPrimitives = arr.every(
    (element) =>
      typeof element === "string" ||
      typeof element === "number" ||
      typeof element === "boolean" ||
      typeof element === "undefined" ||
      typeof element === "symbol" ||
      typeof element === "bigint" ||
      typeof element === "null"
  );
  if (doesArrayIncludesOnlyPrimitives) {
    return [...new Set(arr)]; //działa tylko wtedy, gdy elementami są primitives
  }
}
const result3 = uniq(array3);
const result4 = uniq(array4);
console.log(result3);
console.log(result4);

// it should group elements of array
// example1:
// groupBy([6.1, 4.2, 6.3], Math.floor) should return { '4': [4.2], '6': [6.1, 6.3] }
// example2:
//groupBy(['one', 'two', 'three'], 'length') should return { '3': ['one', 'two'], '5': ['three'] }
function groupBy(arr, key) {
  return arr.reduce((final, current) => {
    const value = Math.floor(current[key]);
    if (!final[value]) {
      final[value] = [];
    }
    final[value].push(current);
    return final;
  });
}
console.log("---");
//[{ name: "John" }, { name: "John" }, { name: "Mary" }];
//{"John":[{ name: "John" }, { name: "John" }], "Mary":[{ name: "Mary" }]}
function groupBy2(arr, key) {
  if (!Array.isArray(arr)) {
    throw new Error("this is not array");
  }
  const hasEveryElHasKey = arr.every((element) => element.hasOwnProperty(key));
  if (!hasEveryElHasKey) {
    throw new Error("not every element of an array includes this key");
  }

  return arr.reduce((result, curr) => {
    if (!result.hasOwnProperty(curr[key])) {
      result[curr[key]] = [];
    }
    result[curr[key]].push(curr);

    return result;
  }, {});
}
const result5 = groupBy2(array3, "name");
console.log(result5);
// it should split given array into two separate arrays, first array should include records for which predicate returns truthy and the second array should include records for which predicate returns falsy,
// example:
// important: predicate is a function that takses value and return boolean
// partition([1, 'b', 'c'], value => typeof value === 'string') should return [['b', 'c'],[1]]

function partition(arr, predicate) {
  return arr.reduce(
    (final, current) => {
      if (predicate(current)) {
        final[0].push(current);
      } else {
        final[1].push(current);
      }
      return final;
    },
    [[], []]
  );
}

const values = partition(arr, (value) => {
  return typeof value === "string";
});

const values2 = partition(arr, (value) => {
  return typeof value === "number";
});

// should take any array and for thise elements of given array that have length we should summarize if length of those elements
// example sumarizeLength[1, 'a', 'bb]) should return 3, because for 1 - cant calculate length, lengrh of 'a' is equal to 1, and length of 'bb' is equal to 2, so 1 + 2 = 3
function sumarizeLength(arr) {
  return arr.reduce((final, current) => {
    if (typeof current === "string") {
      return final + current.length;
    }
    return final;
  }, 0);
}

