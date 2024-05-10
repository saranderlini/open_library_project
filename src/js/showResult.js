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
                    resp.json;
                    if(resp.data.description.value == undefined || resp.data.description.value == '') {
                        bookDescription = resp.data.description;
                    } else {
                        bookDescription = resp.data.description.value;
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