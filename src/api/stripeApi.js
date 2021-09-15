import axios from "axios";
import { config } from "../config";

const token = window.localStorage.getItem("4brntoken");

const headers = {
  "Content-Type": "application/json",
  Authorization: "Access-Control-Allow-Origin",
};

export const setStripeProduct = (data) => {
  return axios
    .post(config.api_url + "/api/v1/paiment/changeProduct", data, {
      headers: { "x-access-token": token },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
};
