// import bgPic from '../assets/bg-blurred.png';
import searchImg from '../assets/search.png';
import '../styles/main.scss';
import setTop from './setTopToMain';
import generateJoke from "./generateJoke";
import getCategory from './lookUpCategory';
import showResult from './showResult';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
  }
  
// setTop();
// getCategory();

/**
const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);

generateJoke();
*/

