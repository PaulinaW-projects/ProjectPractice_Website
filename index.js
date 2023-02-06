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



const items  = [{
    name: "Creative Ideas", value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
}, {
    name: "Planning", value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
}, {
    name: "Safe Work", value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
}, {
    name: "Best Quality", value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
}]

// items.innerHTML = "";
// const item = document.createElement("item");
// item.setAttribute("name", "value");
// items.append(item);

const getCharacteristics = () =>
    new Promise((resolve, reject) => {
        if (!items) {
            reject(new Error('Items not found'));
        }

        resolve(items);
    });
 function setupCards(items) {
items.forEach(function (item) {
    const card = document.createElement('div');
    const circle = document.createElement('div')
    const icon = document.createElement('div')
    const iconSvg = document.createElement('svg')
    const title = document.createElement('p') 
    const note = document.createElement('p')

    card.className.add('eachCard');
    circle.className.add('circle')
    icon.className.add('icon')
    iconSvg.className.add()
    title.className.add('titleCard')
    title.textContent = 'CREATIVE IDEAS'
    note.className.add('noteCard')
    note.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor';
    
    card.appendChild(circle)
    circle.appendChild(icon)
    icon.appendChild(iconSvg)
    card.appendChild(title)
    card.appendChild(note)
    
    return card;

    
    
})
 }
    getCharacteristics().then((items) => {setupCards(items)}).catch((error) => [])

    /*operacje na tablicach, promise (praca z kodem asynchronicznym), operacje na drzewie DOM, uruchomienie kodu JS po załadowaniu drzewa DOM
/*
* Task 2
* use servicesTypes to get values from servicesContent and render content dynamically in "Our Service" section
* */

const servicesTypes = ['repair', 'painting', 'support', 'others']
const servicesContent = [{
    type: 'repair',
    title:'Repair Services',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
}, {
    type: 'painting',
    title:'Wall Painting',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
}, {
    type: 'support',
    title:'Premium Support',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
}]

const getServicesTypes = () =>
    new Promise((resolve, reject) => {
        if (!servicesTypes) {
            reject(new Error('Services not found'));
        }

        resolve(servicesTypes);
    });

const getServices = (servicesTypes) => {
    // for each services types should return services content
    return []
}

/*
* 1.Add media queries to your template to be able to properly display your page on mobile devices
* 2. Create hamburger menu that replaces top menu on mobile devices
* */

