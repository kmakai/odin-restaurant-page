const main = document.createElement('div');
main.id = "mainct";

const title = document.createElement('h3');
title.innerText = "Welcome to Binx's!";

const img = document.createElement('img');
img.alt = "binx";

const discription = document.createElement('p');
discription.innerText = "We welcome you to Binx's cafe, the most cozy warm cafe in town. Come in to have yourself the best coffee and meet the cat binx.";

function loadHome(){
    const content = document.querySelector('#content');
    main.appendChild(title);
    main.append(img);
    main.append(discription);
    content.append(main);
}

export default loadHome();