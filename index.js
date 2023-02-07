/*
 * Create your task solutions on separate branches, every task should be implemented on separate branch
 * invite me to your repo, and after code review
 * rebase/merge solution into master branch
 * */

/*
 * Task 1
 * use data bellow to render content dynamically
 * use getCharacteristics to render cards bellow "Welcome to Free PSD...."
 * */

const items = [
  {
    name: "Creative Ideas",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    name: "Planning",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    name: "Safe Work",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    name: "Best Quality",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
];

// items.innerHTML = "";
// const item = document.createElement("item");
// item.setAttribute("name", "value");
// items.append(item);

const getCharacteristics = () =>
  new Promise((resolve, reject) => {
    if (!items) {
      reject(new Error("Items not found"));
    }

    resolve(items);
  });
function setupCards(items) {
  items.forEach(function (item) {
    const card = document.createElement("div");
    const circle = document.createElement("div");
    const icon = document.createElement("div");
    const iconSvg = document.createElement("svg");
    const title = document.createElement("p");
    const note = document.createElement("p");

    card.classList.add("eachCard");
    circle.classList.add("circle");
    icon.classList.add("icon");
    iconSvg.classList.add();
    title.classList.add("titleCard");
    title.textContent = item.name; //NOT 'CREATIVE IDEAS'
    note.classList.add("noteCard");
    note.textContent = item.value; //NOT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor';

    card.appendChild(circle);
    circle.appendChild(icon);
    icon.appendChild(iconSvg);
    card.appendChild(title);
    card.appendChild(note);

    //remember, do not use innerHTML
    const myCards = document.getElementById("cards");
    myCards.appendChild(card);
  });
}
document.addEventListener("DOMContentLoaded", function () {
  getCharacteristics()
    .then((items) => {
      setupCards(items);
    })
    .catch((error) => []);
});

/*operacje na tablicach, promise (praca z kodem asynchronicznym), operacje na drzewie DOM, uruchomienie kodu JS po załadowaniu drzewa DOM
/*
* Task 2
* use servicesTypes to get values from servicesContent and render content dynamically in "Our Service" section
* */

const servicesTypes = ["repair", "painting", "support", "others"];
const servicesContent = [
  {
    type: "repair",
    title: "Repair Services",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    type: "painting",
    title: "Wall Painting",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    type: "support",
    title: "Premium Support",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
];

// const servicesValues = []

// servicesTypes.map(a => {
//     let matched = servicesContent.filter(b => a === b.type);
//     if (matched.length) {
//         servicesValues.push({type:a, title: b.title, content: b.content});
//     }
// })

const getServicesTypes = () =>
  new Promise((resolve, reject) => {
    if (!servicesTypes) {
      reject(new Error("Services not found"));
    }

    resolve(servicesTypes);
  });

const getServicesContent = (servicesTypes) => {
  return new Promise((resolve, reject) => {
    if (!servicesTypes) {
      reject([]);
    }
    const response = servicesContent.map((item) => {
      if (servicesTypes.includes(item.type)) {
        return item;
      }
    });
    resolve(response);
  });
};

//funkcja, która najpierw pobiera servicesTypes, później przekazuje je jako parametr do getServicesContent, odpowiedź getServicesContent jest generowana jako HTML w drzewie DOM

// const getServicesTypes = () =>
// new Promise((resolve, reject) => {
//     if (!servicesValues) {
//         reject(new Error('Services not found'));
//     }

//     resolve(servicesValues);
// });

function setupServices(response) {
  response.forEach(function (item) {
    const twoOtherSides = document.createElement("div");
    const wrapper = document.createElement("div");
    const innerWrapper = document.createElement("div");
    const image = document.createElement("img");
    const service = document.createElement("div");
    const title = document.createElement("p");
    const note = document.createElement("p");

    twoOtherSides.classList.add("twoOtherSides");
    innerWrapper.classList.add("circleDark");
    image.setAttribute("src", "assets/tool_icon.svg");
    title.classList.add("titleCard");
    note.classList.add("sideNote");
    title.textContent = item.title;
    note.textContent = item.content;

    twoOtherSides.appendChild(wrapper);
    wrapper.appendChild(innerWrapper);
    innerWrapper.appendChild(image);
    service.appendChild(title);
    service.appendChild(note);
    twoOtherSides.appendChild(service);
    const myServices = document.getElementById("ourServiceSection");
    myServices.appendChild(twoOtherSides);
    
  });
}
document.addEventListener("DOMContentLoaded", function () {
  getServicesTypes().then(
    (servicesTypes) =>
      getServicesContent(servicesTypes).then((response) => {
        setupServices(response);
      })
    // .catch((error) => {console.log(error) }))
  );
});

// const getServices = (servicesTypes) => {
//     // for each services types should return services content
//     return []
// }

/*
 * 1.Add media queries to your template to be able to properly display your page on mobile devices
 * 2. Create hamburger menu that replaces top menu on mobile devices
 * >= 768 width
 * */
