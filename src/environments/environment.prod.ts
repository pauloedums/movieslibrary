export const api = 'http://www.omdbapi.com/?';
export const apiKey = 'apikey=114c968f&';

export const environment = {
  production: false,
  defaultSearch: `${api}${apiKey}s=`,
  idSearch: `${api}${apiKey}i=`,
};
