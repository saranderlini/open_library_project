let header = document.querySelector('header');
let headerHeight = header.offsetHeight;

function setTop(element, additional){
    if(additional == '' || additional == undefined) {
        additional = 0;
    } else {
        headerHeight = headerHeight + +additional;
    }
    element.style.setProperty('top', `${headerHeight}px`);
}

export default setTop;