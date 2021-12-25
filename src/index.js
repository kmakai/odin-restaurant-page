import loadHome from "./home.js";
import loadMenu from "./menu.js";
console.log("hello world");

function createNav() {
    const navigation = document.createElement('nav');
    const navList = document.createElement('ul');

    const listItem1 = document.createElement('li');
    listItem1.innerText = "Home"
    navList.appendChild(listItem1);
    listItem1.addEventListener("click", () => { loadHome() });


    const listItem2 = document.createElement('li');
    listItem2.innerText = "Menu"
    navList.appendChild(listItem2);
    listItem2.addEventListener("click", () => { loadMenu() });

    const listItem3 = document.createElement('li');
    listItem3.innerText = "Contact";
    navList.appendChild(listItem3);
    listItem3.addEventListener("click", () => { loadContact() });

    navigation.appendChild(navList);
    navigation.classList = "navbar";

    return navigation;
  }

  function loadNav() {
    document.querySelector("#content").append(createNav());
  }

loadNav();