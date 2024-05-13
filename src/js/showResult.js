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
                    if(!resp.data.description){
                        createDetailsDiv('No scription found for the book: "' + resp.data.title + '".', item.parentElement);
                    } else if (resp.data.description && resp.data.description.value) {
                        createDetailsDiv(resp.data.description.value, item.parentElement);
                    } else {
                        createDetailsDiv(resp.data.description, item.parentElement);
                    }
                    item.classList.add('opened');
                })
                .catch(error => {
                    console.error('Error fetching book details:', error);
                    
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
