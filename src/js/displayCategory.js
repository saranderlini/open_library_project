import labelSlide from "./labelSlide";
import setTop from "./setTopToMain";

function displayCategory(term){
    label.classList.remove('d-none');
    label.classList.add('antonio-sans-bold', 'label');
    label.innerHTML = 'Search results for: ' + term;
    setTop(label, 0);
    labelSlide('label', term);
}

export default displayCategory;