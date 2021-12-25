function createContact() {
    const contacts = document.createElement('div');
    const conTitle = document.createElement('h1');
    conTitle.id = "contacts-title";
    conTitle.textContent = "Contacts";
    contacts.append(conTitle);

    const contactBinx = document.createElement('div');
    const binxImg = document.createElement('img');
    binxImg.src = "images/binx.jpg"
    binxImg.alt = "Binx";
    const binxInfo = document.createElement('p');
    binxInfo.textContent =
        `Binx Makai 555-555-6666
    Owner and Mananger of Binx Cafe.`;
    contactBinx.append(binxImg);
    contactBinx.append(binxInfo);

    const contactBella = document.createElement('div');
    const bellaImg = document.createElement('img');
    bellaImg.src = "images/bella.png";
    bellaImg.alt = "Bella";
    const bellaInfo = document.createElement('p');
    bellaInfo.textContent =
        `Bella Makai 555-555-6666
    Barista of Binx Cafe.`;
    contactBella.append(bellaImg);
    contactBella.append(bellaInfo);


    contacts.append(contactBinx);
    contacts.append(contactBella);
    contacts.classList = "contactsct"

    return contacts;
}

function loadContact(){
    document.querySelector('#content').removeChild(document.querySelector('.navbar').nextSibling);
    document.querySelector('.navbar').after(createContact());
}

export default loadContact;