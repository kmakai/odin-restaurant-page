(()=>{"use strict";const e=function(){null===document.querySelector(".navbar").nextSibling||document.querySelector("#content").removeChild(document.querySelector(".navbar").nextSibling),document.querySelector(".navbar").after(function(){const e=document.createElement("div");e.id="mainct";const t=document.createElement("h3");t.innerText="Welcome to Binx's!";const n=document.createElement("img");n.alt="binx";const o=document.createElement("p");return o.innerText="We welcome you to Binx's cafe, the most cozy warm cafe in town. Come in to have yourself the best coffee and meet the cat binx.",e.appendChild(t),e.append(n),e.append(o),e}())};function t(e,t,n){const o=document.createElement("div"),c=document.createElement("h4");c.textContent=e,o.append(c);const a=document.createElement("p");a.textContent=t,o.append(a);const l=document.createElement("h5");return l.textContent=n,o.append(l),o}console.log("hello world"),document.querySelector("#content").append(function(){const n=document.createElement("nav"),o=document.createElement("ul"),c=document.createElement("li");c.innerText="Home",o.appendChild(c),c.addEventListener("click",(()=>{e()}));const a=document.createElement("li");a.innerText="Menu",o.appendChild(a),a.addEventListener("click",(()=>{document.querySelector("#content").removeChild(document.querySelector(".navbar").nextSibling),document.querySelector(".navbar").after(function(){const e=document.createElement("div"),n=document.createElement("p");return n.textContent="Menu",e.appendchild(n),e.appendChild(t("Coffee","black coffee with sugar or your choice of sweetener. also available with lightener +$1.","$6.99")),e.appendChild(t("Latte","Espresso with your choice of milk as well as flavoring","$4.45")),e.appendChild(t("Carmel Macchiato","Carmel sauce & Vanilla syrup W/ Espresso and your choice of milk","$4.95")),e.appendChild(t("Pumpkin Spice Latte","1/2 Pumpkin Pie 1/2 White Mocha W/ Espresso and your choice of milk","$5.30")),e.appendChild(t("Cafe Breve","double espresso + 5oz./14oz. steamed half & half","$5.45")),e.appendChild(t("Melted Snowman (Affagato)","scoop of vanilla ice cream + double espresso","$7.50")),e}())}));const l=document.createElement("li");return l.innerText="Contact",o.appendChild(l),l.addEventListener("click",(()=>{document.querySelector("#content").removeChild(document.querySelector(".navbar").nextSibling),document.querySelector(".navbar").after(function(){const e=document.createElement("div"),t=document.createElement("h1");t.id="contacts-title",t.textContent="Contacts";const n=document.createElement("div"),o=document.createElement("img");o.alt="Binx";const c=document.createElement("p");c.textContent="Binx Makai 555-555-6666\n    Owner and Mananger of Binx Cafe.",n.append(o),n.append(c);const a=document.createElement("div"),l=document.createElement("img");l.alt="Bella";const r=document.createElement("p");return r.textContent="Bella Makai 555-555-6666\n    Barista of Binx Cafe.",a.appendChild(l),a.appendChild(r),e.appendchild(n),e.appendchild(a),e}())})),n.appendChild(o),n.classList="navbar",n}()),e()})();