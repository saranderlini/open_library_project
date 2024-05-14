let isEventListenerAdded = false;

function labelSlide(elemID, term) {
    const element = document.getElementById(elemID);
    if (!isEventListenerAdded) {
        element.addEventListener('click', () => {
            if (element.innerText !== '') {
                element.innerText = '';
            } else {
                element.innerText = 'Search results for: ' + term;
            }
        });
        isEventListenerAdded = true;
    }
    element.innerText = '';
}

export default labelSlide;