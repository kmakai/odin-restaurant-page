import createT from "./home"
console.log("hello world");

function createNav() {
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
    content.appendChild(navigation);
    navigation.classList = "navbar";
}

createNav();
createT();