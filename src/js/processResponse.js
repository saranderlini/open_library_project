import axios from "axios";
import addNavBar from "./addNavBar";
import setTop from "./setTopToMain";
import createCard from "./createCard";
import showResult from "./showResult";
import displayCategory from "./displayCategory";
import { data } from "jquery";

function getSubject(key){
    axios.get(`https://openlibrary.org/subjects/${key}.json`).then(resp => {
        let data = resp.data; 
        let works = data.works;
        let caption = '';
        let writers = '';
        let bookEndPoint = '';
        if(works.length == 0) {
            if(key.indexOf('_') > 1){
                key = key.replace('_', ' ');
            }

            alert(`The search for ${key} has not produced any result.`);
            document.getElementById('category').value = '';
            document.getElementById('cercaBtn').classList.remove('btnActive');
        } else {
            displayCategory(key.replace('_', ' '));

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
        if(document.getElementById('cercaBtn').classList.contains('btnActive')){
            document.getElementById('cercaBtn').classList.remove('btnActive');
        }
        
        addNavBar();
        setTop(document.getElementById('responseDiv'), 0);
        showResult();
        }   
    })
    .catch(error => {
        console.error('Error fetching subject data:', error);
        document.getElementById('category').setAttribute('placeholder', 'Please, provide a different term.');
    });

}

export default getSubject;