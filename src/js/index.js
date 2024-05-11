import '../styles/main.scss';
import favicon from '../img/favicon.png';
import setTop from './setTopToMain';
import getCategory from './lookUpCategory';
import showResult from './showResult';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
  }
