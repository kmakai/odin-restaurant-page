
function createMenuItem(Item, discription, cost) {
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

  function createMenu() {
    const menu = document.createElement('div');
    
    menu.appendChild(createMenuItem("Coffee", "black coffee with sugar or your choice of sweetener. also available with lightener +$1.", "$6.99"));
    menu.appendChild(createMenuItem("Latte", "Espresso with your choice of milk as well as flavoring", "$4.45"));
    menu.appendChild(createMenuItem("Carmel Macchiato", "Carmel sauce & Vanilla syrup W/ Espresso and your choice of milk", "$4.95"));
    menu.appendChild(createMenuItem("Pumpkin Spice Latte", "1/2 Pumpkin Pie 1/2 White Mocha W/ Espresso and your choice of milk", "$5.30"));
    menu.appendChild(createMenuItem("Cafe Breve", "double espresso + 5oz./14oz. steamed half & half", "$5.45"));
    menu.appendChild(createMenuItem("Melted Snowman (Affagato)", "scoop of vanilla ice cream + double espresso", "$7.50"));
    return menu;
  }

  function loadMenu() {
    document.querySelector('#content').removeChild(document.querySelector('.navbar').nextSibling);
    document.querySelector('.navbar').after(createMenu());
  }

export default loadMenu;