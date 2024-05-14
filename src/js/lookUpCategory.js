import { event, get } from "jquery";
import axios from "axios";
import getSubject from "./processResponse";

let form = document.forms[0];
let category = form.category;
let cercaBtn = document.getElementById('cercaBtn');

//allows for search to be initiated by pressing enter 
category.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        cercaBtn.classList.add('btnActive');
        e.preventDefault();
        cercaBtn.click();
    }
})

//allows for search to be initiated by pressing enter 
cercaBtn.addEventListener('touchstart', (e) => {
    cercaBtn.classList.add('btnActive');
    e.preventDefault();
    cercaBtn.click();
})

//gets corresponding books for the inserted category, upon checking thaht the field is not vacant
function getCategory(){
    cercaBtn.addEventListener('click', (e) => {
    backOnFocus(category);
    let categoryValueTrimmed = category.value.toLowerCase().trim();

    if(categoryValueTrimmed == '' || categoryValueTrimmed == undefined) {
        e.preventDefault();
        category.value = '';
        category.classList.add('error');
        category.setAttribute('placeholder', 'Please, specify a genre.');
    } else {   
        if(categoryValueTrimmed.indexOf(' ') > 1){
            categoryValueTrimmed = categoryValueTrimmed.replace(' ', '_');
        }
        getSubject(categoryValueTrimmed);
    }
   })
}

//after enter or button has been clicked, and no error has been found, error class is removed
function backOnFocus(field){
    category.setAttribute('placeholder', '');
    if(field.classList.contains('error')){
        field.classList.remove('error');
    }
}

getCategory();

export default getCategory;
    
