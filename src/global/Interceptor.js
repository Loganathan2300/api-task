import React from "react";
import axios from "axios";

//  require('dotenv').config()
// axios.defaults.baseURL = 'https://gorest.co.in/public/v2/users';
const instance = axios.create({
    baseURL: 'https://gorest.co.in/public'
  });
  instance.defaults.headers.common['Authorization'] = "Bearer 8b0977e6f9372784a4e885e802cd121e86ad7db2a37f2c4d6831dd5dd5e2d36c";

  instance.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
  instance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });
  export default instance;