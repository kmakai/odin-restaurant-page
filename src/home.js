function createHome() {
    const main = document.createElement('div');
    main.id = "mainct";

    const title = document.createElement('h3');
    title.innerText = "Welcome to Binx's!";

    const img = document.createElement('img');
    img.alt = "binx";

    const discription = document.createElement('p');
    discription.innerText = "We welcome you to Binx's cafe, the most cozy warm cafe in town. Come in to have yourself the best coffee and meet the cat binx.";

    main.appendChild(title);
    main.append(img);
    main.append(discription);


    return main;

  }

  function loadHome() {
    if (document.querySelector('.navbar').nextSibling === null) {
      document.querySelector('.navbar').after(createHome());
    } else {
      document.querySelector('#content').removeChild(document.querySelector('.navbar').nextSibling);
      document.querySelector('.navbar').after(createHome());
    }
  }

export default loadHome();