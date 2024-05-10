import { name } from "file-loader";
import { param } from "jquery";
import magnifyingGlassImg from '../assets/search.png';
import searchReset from "./searchReset";

let header = document.getElementById('header');
let navBar = document.createElement('nav');
let searchInfo = document.createElement('p');

function addNavBar() {
    navBar.innerHTML = '<img id="lensSearch" src="' + magnifyingGlassImg + '" width="30px" height="30px">';
    searchInfo.innerText = 'New search!';
    settingAttributeAndClass(navBar, 'id', 'navBar', 'imgSearchStyle');
    settingAttributeAndClass(header, '', '', 'headerOnSearch');
    settingAttributeAndClass(searchInfo, 'id', 'searchInfo', 'searchInfo');
    
    document.getElementById('header').appendChild(navBar).appendChild(searchInfo);
    searchReset();
}


function settingAttributeAndClass(elem, attributeType, attributeDesc, className){
    if(attributeType) {
        elem.setAttribute(attributeType, attributeDesc);
    } 
    if (className) {
        elem.classList.add(className);
    }
}


export default addNavBar;