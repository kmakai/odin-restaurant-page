function createContact() {
    const main = document.createElement('div');
    const title = document.createElement('h1');
    title.id = "contacts-title";
    title.textContent = "Contacts";

    const contactBinx = document.createElement('div');
    const binxImg = document.createElement('img')
    binxImg.alt = "Binx";
    const binxInfo = document.createElement('p');
    binxInfo.textContent =
        `Binx Makai 555-555-6666
    Owner and Mananger of Binx Cafe.`
    contactBinx.append(binxImg);
    contactBinx.append(binxInfo);

    const contactBella = document.createElement('div');
    const bellaImg = document.createElement('img')
    bellaImg.alt = "Bella";
    const bellaInfo = document.createElement('p');
    bellaInfo.textContent =
        `Bella Makai 555-555-6666
    Barista of Binx Cafe.`
    contactBella.appendChild(bellaImg);
    contactBella.appendChild(bellaInfo);


    main.appendchild(contactBinx);
    main.appendchild(contactBella);

    return main;
}

function loadContact(){
    document.querySelector('#content').removeChild(document.querySelector('.navbar').nextSibling);
    document.querySelector('.navbar').after(createContact());
}

export default loadContact;