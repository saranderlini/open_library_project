import setTop from "./setTopToMain";
function displayCategory(term){
    document.getElementById('id', 'label');
    label.classList.remove('d-none');
    label.classList.add('antonio-sans-bold', 'label');
    label.innerHTML = 'Search results for: ' + term;
    setTop(label, 0);

    labelHover(document.getElementById('label'));
    labelSlide(term);

}

function labelSlide(term) { 
    document.getElementById('label').innerHTML = '';
            
    document.getElementById('label').addEventListener('click', () => {
        if(document.getElementById('label').innerHTML == ''){
            document.getElementById('label').innerHTML = 'Search results for: ' + term;
        } else {
            document.getElementById('label').innerHTML = '';
        }
    })    
}

function labelHover(target){
    target.addEventListener('mouseenter', () => {
        target.click();
    })
    target.addEventListener('mouseleave', () => {
        target.innerHTML = '';
    })
}

export default displayCategory;