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

export const getWorkById = (id) => {
  return axios.get(apiURL + '/workbyid/' + id)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};
export const getWorkerByWorkId = (id) => {
  return axios.get(apiURL + '/workerbyworkid/' + id)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};
export const getWorkPaymentsByWorkId = (id) => {
  return axios.get(apiURL + '/workpayments/' + id)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};
export const getSumWorkPayments = (id) => {
  return axios.get(apiURL + '/sumworkpayments/' + id)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};