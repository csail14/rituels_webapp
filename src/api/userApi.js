import axios from "axios";
import { config } from "../config";

const headers = {
  "Content-Type": "application/json",
  Authorization: "Access-Control-Allow-Origin",
};

export const loginUser = (data) => {
  return axios
    .post(config.api_url + "/api/v1/user/login", data)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("erreur");
      return err;
    });
};

export const setProductForuser = (id, product) => {
  let body = {
    product: product,
  };
  return axios
    .put(
      config.api_url + "/api/v1/user/set/product/" + id,

      body
    )
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
};

export const sendContactMessage = (data) => {
  return axios
    .post(config.api_url + "/api/v1/user/contact", data)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
};

export const saveUser = (data) => {
  return axios
    .post(config.api_url + "/api/v1/user/add", data)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
};

export const changePassword = (data, key_id) => {
  return axios
    .post(config.api_url + "/api/v1/user/changePassword/" + key_id, data)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
};

export const forgotPassword = (data) => {
  return axios
    .post(config.api_url + "/api/v1/user/forgot", data)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const validateUser = (key) => {
  return axios
    .get(config.api_url + "/api/v1/user/validate/" + key)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
};
