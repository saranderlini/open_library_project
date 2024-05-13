import axios from "axios";
import addNavBar from "./addNavBar";
import setTop from "./setTopToMain";
import createCard from "./createCard";
import showResult from "./showResult";
import displayCategory from "./displayCategory";
import labelHeight from './displayCategory';
import { data } from "jquery";

let labelOffsetHeight = labelHeight;
function getSubject(key){
    axios.get(`https://openlibrary.org/subjects/${key}.json`).then(resp => {
        let data = resp.data; 
        let works = data.works;
        let caption = '';
        let writers = '';
        let bookEndPoint = '';
        if(works.length == 0) {
            alert(`The search for ${key} has not produced any result.`);
            document.getElementById('category').value = '';
        } else {
            displayCategory(key);

            for(let i = 0; i < works.length; i++){
                caption = works[i].title;
            bookEndPoint = 'https://openlibrary.org' + works[i].key;
            if(works[i].authors.length > 1){
                for(let j = 1; j < works[i].authors.length; j++){
                    writers += works[i].authors[j].name + ', ';
                }
                writers = writers.slice(0, writers.lastIndexOf(', '));
            } else {
                writers = works[i].authors[0].name;
            }

            createCard(`result${[i]}`, writers, caption, `https://openlibrary.org${works[i].key}`);
        }

        document.querySelector('div.formDiv').classList.add('d-none');
        
        addNavBar();
        if(window.innerWidth <= 576){
            setTop(document.getElementById('responseDiv'), 55);
        } else if(window.innerWidth >= 577 && window.innerHeight <= 768) {
            setTop(document.getElementById('responseDiv'), 40);
        }
         else {
            setTop(document.getElementById('responseDiv'), 0);
        }
        showResult();
        }   
    })
    .catch(error => {
        console.error('Error fetching subject data:', error);
        document.getElementById('category').setAttribute('placeholder', 'Please, provide a different term.');
    });

}

export default getSubject;