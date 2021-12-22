function createMenuItem(Item, discription, cost){
    const menuitem = document.createElement('div');
    const item = document.createElement("h4");
    item.textContent = Item;
    menuitem.append(item);
    const itemInfo = document.createElement('p');
    itemInfo.textContent = discription;
    menuitem.append(itemInfo);
    const price = document.createElement('h5');
    price.textContent = cost;
    menuitem.append(price);

    return menuitem;
}

function createMenu(){
    const menu = document.createElement('div')

    menu.appendChild(createMenuItem("Coffee","black coffee with sugar or your choice of sweetener. also available with lightener +$1.","$6.99"));

    return menu;
}

function loadMenu(){
    document.querySelector("#content").textContent = '';
    document.querySelector("#content").append(createMenu());
}

export default loadMenu();