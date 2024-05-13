import { event } from 'jquery';
import arrowImg from '../img/arrow-right.png';

//function for creation of card, then called inside the loop, for reading data gathered by Axios fetch
function createCard(description, mainAuth, mainName, mainUrl){
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

    styleCard(mainAuth, 'ibm-plex-sans-medium-italic', mainName, 'antonio-sans-semibold', mainUrl, document.getElementById('responseDiv'));
    console.log();

    document.getElementById('responseDiv').appendChild(bookCard);
    bookCard.appendChild(firstLine).append(firstSec, bookUrlKey);
    firstSec.append(mainBookTitle, mainBookAuth);
    

    //Function to style and add innerHTML to card elements
    function styleCard(bookAuth, authStl, bookTitle, ttlStl, mainUrl, parentDiv){
        mainBookAuth.innerHTML = bookAuth;
        mainBookAuth.classList.add(authStl);
        mainBookTitle.innerHTML = bookTitle;
        mainBookTitle.classList.add(ttlStl);

        bookUrlKey.setAttribute('name', mainUrl);
        bookUrlKey.innerHTML = '<img src="' + arrowImg + '" height="20px" width="20px">';
        bookUrlKey.classList.add('btn', 'arrowButton');

        parentDiv.style.position = 'absolute';
        parentDiv.style.left = '0';
        parentDiv.style.right = '0';
    }
}


export default createCard;