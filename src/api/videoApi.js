import axios from "axios";
import { config } from "../config";

const token = window.localStorage.getItem("4brntoken");

const headers = {
  "Content-Type": "application/json",
  Authorization: "Access-Control-Allow-Origin",
};

export const getVideo = async (videoId) => {
  return axios
    .get(config.api_url + "/api/v1/video/get/" + videoId, {
      headers: { "x-access-token": token },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
};

export const addVideo = async (data) => {
  return axios
    .post(config.api_url + "/api/v1/video/add", data, {
      headers: { "x-access-token": token },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
};

export const setVideo = async (id, data) => {
  return axios
    .put(config.api_url + "/api/v1/video/set/" + id, data, {
      headers: { "x-access-token": token },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
};

export const addCycle = async (data) => {
  return axios
    .post(config.api_url + "/api/v1/cycle/add", data, {
      headers: { "x-access-token": token },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
};
