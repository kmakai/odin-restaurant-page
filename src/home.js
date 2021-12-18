function createT() {
    const content = document.querySelector('#content');

    const title = document.createElement('h1');
    title.innerText = "Binx's Cafe";

    content.appendChild(title);
}

export default createT();



