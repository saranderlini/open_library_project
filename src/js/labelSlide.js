let isEventListenerAdded = false;

// Define the function outside to maintain a reference
function handleLabelClick(event) {
    const element = event.target;
    const term = element.getAttribute('data-term'); // Use a data attribute to store the term
    if (element.innerText !== '') {
        element.innerText = '';
    } else {
        element.innerText = 'Search results for: ' + term;
    }
}

function labelSlide(elemID, term) {
    const element = document.getElementById(elemID);
    element.setAttribute('data-term', term);

    if (!isEventListenerAdded) {
        element.addEventListener('click', handleLabelClick);
        isEventListenerAdded = true;
    }

    element.innerText = '';
}

export default labelSlide;
