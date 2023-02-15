//

const names = ["Ania", "Karol", "Grzesiek", "Tomek", "Alfons"];

// zadanie 1
// tabela powinna zawierać liste imion dluższych niż 4 znaki

const namesLongerThan4 = names.filter((name) => {
  return name.length > 4;
});
console.log(namesLongerThan4);

// tabela powinna zawierac te imiona, w ktore zaczynaja sie na litere A
const namesStartsWithA = names.filter((name) => {
  return name.startsWith("A");
});
console.log(namesStartsWithA);

// tabela powinna zawierać imiona napisane kapitalikami np ['ANNA', 'KAROL'...]
const everyUpperCase = names.map((name) => {
  return name.toUpperCase();
});
console.log(everyUpperCase);

// Zadanie 2
const person = {
  name: "Tomasz",
  age: 31,
  footSize: 42,
  hasPartner: true,
  children: [],
};

const pets = ["dog", "cat", "fish"];

// utwórz nowy obiekt na bazie obiektu person, dodając mu zwierzaki
// rezultat
// {
//     name: "Tomasz",
//     age: 31,
//     footSize: 42,
//     hasPartner: true,
//     children: [],
//     pets: ['dog', 'cat', 'fish']
// }
// uwaga, tablica pets, oraz obiekt person powinny pozostać bez zmian

const extendedPerson = { ...person, pets };
console.log(extendedPerson);

// const extendedPerson = coś;

// na podstawie wartości obiektu person zwróć liste zawierajaca wartosci liczbowe
// [31, 42]
const only31And42 = Object.keys(person).reduce((final, curr) => {
  if (person[curr] === 31 || person[curr] === 42) {
    final[curr] = person[curr];
  }
  return final;
}, {});
console.log(only31And42);
// to samo, tylko prościej ( i lepiej, wyświetla tylko wartości)

const onlyNumbers = Object.values(person).filter(element => typeof element === 'number')
console.log(onlyNumbers)

// na podstawie obiektu extendedPerson zwroc nowy obiekt w ktorym nie bedzie pola age, a lista zwierzat bedzie odwrócona, a nazwy zwierzat napisane wielką literą

const { age, ...transformedPerson } = extendedPerson;
console.log(transformedPerson);
const reversedUpperPets = [...transformedPerson.pets]
  .reverse()
  .map((pet) => pet.toUpperCase());
console.log(reversedUpperPets);
const transformedPersonFinal = {
  ...transformedPerson,
  pets: reversedUpperPets,
};
console.log(transformedPersonFinal);

// do zmiennej ponizej zwroc liste kluczy danego obiektu person
const personKeys = Object.keys(person);
console.log(personKeys);

// do zmiennej ponizej zwroc tablice zawierajaca klucz i wartosc, ale tylko dla tych elementow dla
// ktorych wartosc jest typu array


const arraysKV = Object.entries(extendedPerson).filter(([_, value]) => Array.isArray(value))
console.log(arraysKV);

// ------------------------------------------------

//destrukturyzacja danych
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

/*
const person = {
    name: "Tomasz",
    age: 31,
    footSize: 42,
    hasPartner: true,
    children: []
}
const pets = ['dog', 'cat', 'fish']
const extendedPerson = { ...person, pets };

// wyciagnij do zmiennej z pomoca desktrykturyzacji wiek
const {age} = person;
console.log(age);

// wyciagnij do zmiennej 'cat'

// const [, cat] = pets;
// console.log(cat)


// wyciagnij do zmiennej cat i fish

const [, cat, fish] = pets;
console.log(cat,',',fish);

*/

// -----------------------------------------

/*
const number = 4.121231231

// zaokrąglij powyższą liczbę do 2 miejsc po przecinku
// a) w górę
const numberUp = number.toFixed(2)
console.log(numberUp)
// b) w dół
*/
//
const stringifiedNumber = '3,13141241234'
// a) zamien na liczbę całkowitą
const strinifiedNumberInt = Math.round(parseFloat(stringifiedNumber));
console.log(strinifiedNumberInt)
// b) zamien na liczbe dziesietna
const stringifiedNumberDec = parseFloat(stringifiedNumber);
console.log(stringifiedNumber)
//--------------------------------------------------
const val1 = 10, val2 = 2;
// do zmiennej poznizej zapisz z użyciem string template
// rezultat: 'Gdy do 10 dodamy 2, wynik wyniesie 12'
const concatenatedString = 'Gdy do ' + val1 + ' dodamy ' + val2 + ', wynik wyniesie ' + (val1 + val2)
console.log(concatenatedString);
//lepiej
const z = `Gdy do ${val1} dodamy ${val2}, wynik wyniesie ${val1 + val2}`
console.log(z)


