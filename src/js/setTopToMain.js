let header = document.querySelector('header');
let headerHeight = header.offsetHeight;
let respDiv = document.getElementById('responseDiv');

function setTop(){
    respDiv.style.setProperty('top', `${headerHeight}px`);
}

export default setTop;