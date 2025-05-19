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
export const getWorkers = (employer) => {
  return axios
    .get(apiURL + "/workers/" + employer.id)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};

export const getWorkById = (id) => {
  return axios
    .get(apiURL + "/workbyid/" + id)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};
export const getWorkerByWorkId = (id) => {
  return axios
    .get(apiURL + "/workerbyworkid/" + id)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};
export const getWorkPaymentsByWorkId = (id) => {
  return axios
    .get(apiURL + "/workpayments/" + id)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};
export const getSumWorkPayments = (id) => {
  return axios
    .get(apiURL + "/sumworkpayments/" + id)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};
export const getWorkerandWorkById = (id) => {
  return axios
    .get(apiURL + "/workerandwork/" + id)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};
export const getWorkerById = (id) => {
  return axios
    .get(apiURL + "/worker/" + id)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};
export const getWalletWorks = (employer) => {
  return axios
    .get(apiURL + "/walletworks/" + employer.id)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};
export const getDaysWorked = (id) => {
  return axios
    .get(apiURL + "/workeddays/" + id)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};

/* wallet worker  sayfası */
export const getWalletWorkerData = (employer) => {
  return axios
    .get(apiURL + "/walletworkersdata/" + employer.id)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};
/* wallet worker data sayfası */
export const getWalletWorkerDataByWorkerID = (id, employer) => {
  return axios
    .get(apiURL + "/walletworkerdata/" + id + "/" + employer.id)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};

/* çalışanın id sine göre çalıştığı işin id'sini ve iş adını getir */
export const getWorkByWorkerId = (id, employer) => {
  return axios
    .get(apiURL + "/workbyworker/" + id + "/" + employer.id)
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
  return axios
    .post(apiURL + "/works", data)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};
export const addWorker = (data) => {
  return axios
    .post(apiURL + "/workers", data)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};
export const addWorkPayment = (data) => {
  return axios
    .post(apiURL + "/work-payment", data)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};
export const addWorkerPayment = (data) => {
  return axios
    .post(apiURL + "/worker-payment", data)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};
export const addWorkControl = (data) => {
  console.log("addWorkControl çağrıldı:", data);
  return axios
    .post(apiURL + "/add-worker-control", data)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};