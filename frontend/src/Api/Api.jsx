import axios from 'axios';

const apiURL = 'http://localhost:3000';

export const getWorkers = () => {
   return axios.get(apiURL + '/workers')
     .then((result) => {
       return result.data;
     })
     .catch((error) => {
       return error;
     });
}

export const getWorks = () => {
  return axios.get(apiURL + "/works")
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};