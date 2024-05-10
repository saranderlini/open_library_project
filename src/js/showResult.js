/*
import axios from "axios";

let bookDescription = '';
let detailsDev = '';

function showResult(){
    let arrowButton = document.querySelectorAll('button.arrowButton');
    arrowButton.forEach(item => {
        item.addEventListener('click', () => {
            if(item.parentElement.lastChild.classList.contains('detailsShown')) {
                item.classList.remove('opened');
                detailsDev.classList.remove('detailsShown', 'ibm-plex-sans-regular');
                item.parentElement.removeChild(detailsDev);
            } else {
                axios.get(item.name)
                .then(resp => {
                    let data = resp.data;
                    if(data.description.value == undefined || data.description.value == '') {
                        bookDescription = data.description;
                    } else {
                        bookDescription = data.description.value;
                    }
                    item.classList.add('opened')
                    detailsDev = document.createElement('div');
                    detailsDev.classList.add('detailsShown', 'ibm-plex-sans-regular');
                    detailsDev.innerHTML = bookDescription;
    
                    item.parentElement.appendChild(detailsDev);
                })
            }
        })
    })
}

export default showResult;
*/

import axios from "axios";

function showResult(){
    let arrowButton = document.querySelectorAll('button.arrowButton');
    arrowButton.forEach(item => {
        item.addEventListener('click', () => {
            if(item.parentElement.lastChild.classList.contains('detailsShown')) {
                item.classList.remove('opened');
                item.parentElement.removeChild(item.parentElement.lastChild);
            } else {
                axios.get(item.name)
                .then(resp => {
                    if (resp.data.description && resp.data.description.value) {
                        createDetailsDiv(resp.data.description.value, item.parentElement);
                    } else {
                        createDetailsDiv(resp.data.description, item.parentElement);
                    }
                    item.classList.add('opened');
                })
                .catch(error => {
                    console.error('Error fetching book details:', error);
                    // Optionally, you can handle the error here, for example, by displaying a message to the user.
                    createDetailsDiv('Description not currently available.', item.parentElement);
                });
            }
        });
    });
}

function createDetailsDiv(description, parentElement) {
    let detailsDev = document.createElement('div');
    detailsDev.classList.add('detailsShown', 'ibm-plex-sans-regular');
    detailsDev.innerHTML = description;
    parentElement.appendChild(detailsDev);
}

export default showResult;
