import { event, get } from "jquery";
import axios from "axios";
import getSubject from "./processResponse";

let form = document.forms[0];
let category = form.category;
let cercaBtn = document.getElementById('cercaBtn');

getCategory();
checkInputValue(category);


//allows for search to be initiated by pressing enter 
category.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        e.preventDefault();
        cercaBtn.click();
    }
})

//gets corresponding books for the inserted category, upon checking thaht the field is not vacant
function getCategory(){
    cercaBtn.addEventListener('click', (e) => {
    backOnFocus(category);
    if(category.value == '' || category.value == undefined) {
        e.preventDefault();
        category.classList.add('error');
        category.setAttribute('placeholder', 'Please, specify a genre.');
    } else {
        getSubject(category.value);
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

//function to check whether after error being displayed, the input field has been filled
function checkInputValue(input) {
    input.addEventListener('blur', ()=>{
        if(input.value == '' || input.value == undefined){
            input.classList.add('error');
            category.setAttribute('placeholder', 'Please, specify a genre.');
        } else if(input.classList.contains('error') && input.value != '' && input.value != undefined) {
            category.setAttribute('placeholder', '');
            input.classList.remove('error');
        }
    });
}
    
export default getCategory;
    
