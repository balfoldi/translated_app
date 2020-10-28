import home from './home.json';
import error from './error.json';


const en = {
    ...home, ...error, //On concatène tous nos objets JSON en un seul
};

export default en;