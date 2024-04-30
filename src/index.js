import generateJoke from "./generateJoke";
import './styles/main.scss';
import bgPic from './assets/bg-blurred.png';

const bg = document.getElementById('bg');
bg.src = bgPic;


const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);
generateJoke();