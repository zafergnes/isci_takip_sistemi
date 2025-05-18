import axios from 'axios';

const apiURL = "http://localhost:3000";

export const getWorks = (employer) => {
  return axios
    .get(apiURL + "/works/" + employer.id)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};
export const getWorkers = () => {
  return axios
    .get(apiURL + "/workers")
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
export const getWorkerandWorkById = (id) => {
  return axios.get(apiURL + '/workerandwork/' + id)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};
export const getWorkerById = (id) => {
  return axios.get(apiURL + '/worker/' + id)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};
export const getWalletWorks = () => {
  return axios.get(apiURL + '/walletworks/')
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};
export const getDaysWorked= (id) => {
  return axios.get(apiURL + '/workeddays/'+id)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};

/* wallet worker  sayfası */
export const getWalletWorkerData= () => {
  return axios.get(apiURL + '/walletworkersdata/')
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};
/* wallet worker data sayfası */
export const getWalletWorkerDataByWorkerID= (id) => {
  return axios.get(apiURL + '/walletworkerdata/'+id)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};


/* çalışanın id sine göre çalıştığı işin id'sini ve iş adını getir */
export const getWorkByWorkerId= (id) => {
  return axios.get(apiURL + '/workbyworker/'+id)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};

// ! post
//worker için resim yükleme
export const uploadFile = (file) => {
  const formdata = new FormData();
  formdata.append("file", file);
  const config = {
    header: {
      "content-type": "multipart/form-data",
    },
  };
  return axios
    .post(apiURL + "/blogimage", formdata, config)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};


export const createWork = (data) => {
  //return blog created
  return axios
    .post(apiURL + "/works", data)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};