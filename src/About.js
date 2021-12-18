
function loadAbout(){
    const m = document.createElement('div')
    m.textContent = "about test";
    
    document.querySelector('#content').append(m)
}

export default loadAbout();