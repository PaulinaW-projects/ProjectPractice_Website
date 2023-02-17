//Napisz program, który będzie symulować działanie pralki (takiej do prania ubrań)
//Twoja pralka powinna umożliwiać użytkownikowi wybranie programu prania (szybkie, długie)
//Powinna umieć wirować (na koniec szybkiego prania, oraz na koniec i w połowie długiego)
//Po wybraniu jakiegokolwiek programu powinna odpompować starą wodę, pobrać nową.
//Na podstawie wybranego programu podgrzać każdorazowo wodę do odpowiedniej temperatury.
//I odpompować ją przed wirowaniem.Powinna umożliwiać użytkownikowi uruchomić wirowanie na żądanie.
//Aby zabezpieczyć łazienkę przed zalaniem, pralka powinna ryglować drzwi pralki po włączeniu
//jakiegokolwiek programu oraz odblokowywać 30 sekund po skończonym praniu.
//Pralka powinna płukać ubrania przed wirowaniem, oraz udostępniać płukanie z wirowaniem jako
//osobny program do wybrania.
//Każda pralka bierze proszek, więc programy piorące powinny sprawdzać czy użytkownik
//wsypał proszek do prania.
//Pralka powinna sprawdzać czy użytkownik włożył ciuchy do bębna.
// W przypadku ich braku powinna poinformować użytkownika o tym.

class WashingmMachine {
  constructor() {
    this._program = null;
    this._quickProgram = false;
    this._longProgram = false;
    this._spin = false;
    this._drain = false;
    this._locked = true;
    this._rinse = false;
    this._rinseAndSpin = false;
    this._detergentAdded = false;
    this._clothesAdded = false;
  }

  addDetergent = () => {
    this._detergentAdded = true;
    console.log("Dodano proszek do pralki");
  };

  addClothes = () => {
    this._clothesAdded = true;
    console.log("Włożyłeś ubrania do pralki");
  };

  checkDetergent = () => {
    if (!this._derergentAdded) {
      console.log("Nie dodano proszku - najpierw wsyp proszek");
    }
  };
  checkClothes = () => {
    if (!this._clothesAdded) {
      console.log("Nie włożyłeś ubrań - włóż najpierw ubrania");
    }
  };

  chooseProgram = (program) => {
    if (!this.checkClothes()) {
      return;
    }
    if (!this.checkDetergent()) {
      return;
    }
    this._program = program;
    if (program === "szybkie") {
      this._quickProgram = true;
      this._drain = true;
      console.log(`Wybrałeś szybki program. Wybierz start`);
    } else if (program === "długie") {
      this._longProgram = true;
      this._drain = true;
      console.log(`Wybrałeś długi program. Wybierz start`);
    } else if (program === "wirowanie") {
      this._spin = true;
      this._drain = true;
      console.log(`Wybrałeś wirowanie. Wybierz start`);
    } else if (program === "płukanie") {
      this._rinse = true;
      this._drain = true;
      console.log(`Wybrałeś płukanie. Wybierz start`);
    } else if (program === "płukanie z wirowaniem") {
      this._rinseAndSpin = true;
      this._spin = true;
      this._rinse = true;
      this._drain = true;
      console.log(`Wybrałeś płukanie z wirowaniem. Wybierz start`);
    } else {
      console.log(`Wybierz jeden z dostępnych programów`);
    }
  };

  startProgram = () => {
    if (!this._program) {
      console.log("Nie wybrałeś żadnego programu");
      return;
    }

    console.log(`Wybrany program prania: ${this._program}`);

    if (this._quickProgram) {
      console.log(`Blokada drzwi. 
      Start szybkiego prania...
      Podgrzewam wodę do 40 stopni...`);
      this._quickProgram = false;
      this._drain = true;
      this.spin();
      setTimeout(() => {
        this.unlockDoor();
      }, 3000);
    } else if (this._longProgram) {
      console.log(`Blokada drzwi.
      Start długiego prania...
      Podgrzewam wodę do 60 stopni...`);
      this._longProgram = "ongoing";
      this.spin();
      setTimeout(() => {
        this.unlockDoor();
      }, 3000);
    } else if (this._spin) {
      console.log(`Blokada drzwi.
      Start wirowania...`);
      this._spin = false;
      this._drain = true;
      setTimeout(() => {
        this.unlockDoor();
      }, 3000);
    } else if (this._rinse) {
      console.log(`Blokada drzwi.
      Start płukania...`);
      this._rinse = false;
      this._drain = true;
      setTimeout(() => {
        this.unlockDoor();
      }, 3000);
    } else if (this._rinseAndSpin) {
      console.log(`Blokada drzwi.
      Start płukania...
      Start wirowania...`);
      this._rinseAndSpin = false;
      this._rinse = false;
      this._spin = false;
      this._drain = true;
      setTimeout(() => {
        this.unlockDoor();
      }, 3000);
    } 
  };
  spin = () => {
    if (this._quickProgram) {
      console.log(`Kończę szybkie pranie. Start wirowania...`);
      this._spin = true;
    } else if (this._longProgram === "ongoing") {
      console.log(`Kończę 1 fazę długiego prania. Start wirowania...`);
      this._drain = true;
      this._longProgram = "ongoingSpin";
      this._spin = true;
    } else if (this._longProgram === "ongoingSpin") {
      console.log(`Kończę 2 fazę długiego prania. Start wirowania...`);
      this._drain = true;
      this._longProgram = false;
      this._spin = true;
    }
  };

  unlockDoor = () => {
    this.locked = false;
    console.log("Możesz otworzyć pralkę.");
  };
}
const pralka = new WashingmMachine();
pralka.chooseProgram("szybkie");
pralka.startProgram();
