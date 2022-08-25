

const API_KEY = '29400400-14e1219d1dcdc4068cdd8e581';
const BASE_URL = 'https://pixabay.com/api/'


function fetchImages (image) {

    const URL = `${BASE_URL}?key=${API_KEY}&q=${image}&image_type=photo&orientation=horizontal&safesearch=true`;
    return fetch(URL).then( response => response.json());
}


export default { fetchImages };
