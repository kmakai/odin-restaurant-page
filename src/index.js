import loadHome from "./home";
import loadAbout from "./About";
console.log("hello world");

function createNav() {
    const m = document.querySelector('#mainct');
    const content = document.querySelector("#content");
    const navigation = document.createElement('nav');
    const navList = document.createElement('ul');

    const listItem1 = document.createElement('li');
    listItem1.innerText = "Home"
    navList.appendChild(listItem1);

    const listItem2 = document.createElement('li');
    listItem2.innerText = "About"
    navList.appendChild(listItem2);

    const listItem3 = document.createElement('li');
    listItem3.innerText = "Contact";
    navList.appendChild(listItem3);

    navigation.appendChild(navList);
    m.before(navigation);
    navigation.classList = "navbar";
}

createNav();
loadHome();