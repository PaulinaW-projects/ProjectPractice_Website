/*
* stwórz klasę Person, na podstawie której można stworzyć obiekty jak niżej
*
* {
*   name: 'John',
*   age: 41,
*   kids: ['Anna', 'Tomek']
* }
*
*
* */
class Person {
    constructor(name, age, kids) {
        this._name = name;
        this._age = age;
        this._kids = kids;
    }

    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    get kids() {
        return this._kids;
    }

    set name(newName){
        this._name = newName;
    }

    set age(newAge){
        this._age = newAge;
    }

    set kids(newKids){
        this._kids = newKids;
    }
}
const person1 = new Person("John", 41, ["Anna", "Tomek"]);
console.log(person1)
const person2 = new Person("Adam", 30, []);
console.log(person2);

// ------------------------------------------------------
// do każdego z pól dopisz setter i getter, i zaprezentuj użycie

console.log(person1);
console.log(person1.name);
person1.name = "notJohnanymore";
console.log(person1.name)
person1.age = "actually, it's 44";
console.log(person1.age)

//-------------------------------------------------------------
// Stwórz klasy kobieta i mężczyzna, które będą dziedziczyć po klasie person, i nadaj im jakieś unikalne zdolności

class Woman extends Person {
    constructor(name, age, kids, hair) {
        super(name, age, kids);
        this.hair = hair;
    }

    introduce() {
        return (`Hello, I'm ${this.name}. `)
    }
}

class Man extends Person {
    constructor(name, age, kids, height) {
        super(name, age, kids);
        this.height = height;
    }

    introduce() {
        return (`Hello, I'm ${this.name}. `)
    }
}
// podaj przykład użycia

const woman1 = new Woman("Anna", 25, ["Belle"], "long");
console.log(woman1);
console.log(woman1.introduce());
// _____________________________________________________________________________________________________
// zadanie 2
// napisz ten sam kod z użyciem funkcji zamiast klas (take jak u Overnmenta)

function WomanNew(name, age, kids, hair) {
    this.name = name;
    this.age = age;
    this.kids = kids;
    this.hair = hair;
}

WomanNew.prototype.introduce = function() {
    return (`Hello, I'm ${this.name}. `)
}

const woman2 = new WomanNew("Anna", 25, ["Belle"], "long");
console.log(woman2.introduce());