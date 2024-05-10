import { event } from 'jquery';
import arrowImg from '../assets/arrow-right.png';

//function for creation of card, then called inside the loop, for reading data gathered by Axios fetch
function createCard(description, mainAuth, mainName, mainUrl){
    // let responseDiv = document.getElementById('responseDiv');
    let bookCard = document.createElement('div');
    bookCard.setAttribute('name', 'card');
    
    //Creation of title, author and button referencing to single book info
    let firstSec = document.createElement('div');
    let firstLine = document.createElement('div');
    let mainBookTitle = document.createElement('h3');
    let mainBookAuth = document.createElement('p');
    let bookUrlKey = document.createElement('button');
    
    bookCard.classList.add('glass', 'outer', 'cardStyle');
    bookCard.setAttribute('id', description);

    styleCard(mainAuth, 'ibm-plex-sans-medium-italic', mainName, 'antonio-sans-semibold', mainUrl);
    
    //append elements
    document.getElementById('responseDiv').appendChild(bookCard);
    bookCard.appendChild(firstLine).append(firstSec, bookUrlKey);
    firstSec.append(mainBookTitle, mainBookAuth);
    
    //Function to style and add innerHTML to card elements
    function styleCard(bookAuth, authStl, bookTitle, ttlStl/*, newPage*/){
        mainBookAuth.innerHTML = bookAuth;
        mainBookAuth.classList.add(authStl);
        mainBookTitle.innerHTML = bookTitle;
        mainBookTitle.classList.add(ttlStl);

        bookUrlKey.setAttribute('name', mainUrl);
        bookUrlKey.innerHTML = '<img src="' + arrowImg + '" height="20px" width="20px">';
        bookUrlKey.classList.add('btn', 'arrowButton');

        responseDiv.style.position = 'absolute';
    }
}


export default createCard;