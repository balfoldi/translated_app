import home from './home.json';
import error from './error.json';


const fr = {
    ...home, ...error, //On concatène tous nos objets JSON en un seul
};

export default fr;