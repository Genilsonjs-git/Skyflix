const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://sky-flix.herokuapp.com';

export default {
  URL,
};
