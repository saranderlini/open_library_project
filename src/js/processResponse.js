import axios from "axios";
import addNavBar from "./addNavBar";
import setTop from "./setTopToMain";
import createCard from "./createCard";
import showResult from "./showResult";
import { data } from "jquery";

function getSubject(key){
    axios.get(`https://openlibrary.org/subjects/${key}.json`).then(resp => {
        let data = resp.data; 
        let works = data.works;
        let caption = '';
        let writers = '';
        let bookEndPoint = '';
        console.log(works);
        if(works.length == 0) {
            alert(`The search for ${key} has not produced any result.`);
            document.getElementById('category').value = '';
        } else {
            for(let i = 0; i < works.length; i++){
                caption = works[i].title;
            bookEndPoint = 'https://openlibrary.org' + works[i].key;
            console.log(bookEndPoint);
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
        document.querySelector('div.formDiv').classList.add('invisible');
        
        addNavBar();
        setTop();
        showResult();
        }   
    })
    .catch(error => {
        console.error('Error fetching subject data:', error);
    });

}

export default getSubject;