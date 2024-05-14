import labelSlide from "./labelSlide";
import setTop from "./setTopToMain";

let label = document.getElementById('label');

function displayCategory(term){
    console.log("Updating label with term:", term);
    
    label.innerHTML = '';
    label.classList.remove('d-none');
    label.classList.add('antonio-sans-bold', 'label');
    label.innerHTML = 'Search results for: ' + term;
    setTop(label, 0);
    labelSlide('label', term);
}

export default displayCategory;