import request from 'superagent';
require('superagent-auth-bearer')(request);

import ApiConstants from '../constants/ApiConstants';
import CredentialStore from '../stores/CredentialStore';

let authErrorMessage = "You are not authorized for that action.";

function getUrlForPath(path) {
  return `${ApiConstants.API_URL}${path}`;
}

// function handleUnauthorized(errorMessage = null) {
//   // console.log(errorMessage.response);
//   // CredentialStore.clearCredentials(errorMessage);
// }

var Api = {
  get(path) {
    return new Promise(function(resolve, reject) {
      request
        .get(getUrlForPath(path))
        .authBearer(CredentialStore.getJWT())
        .set('Accept', 'application/json')
        .end(function(error, response) {
          if (error){
            // handleUnauthorized(error);
            reject(error);
          } else {
            resolve(response.body);
          }
        });
    });
  },

  post(path, data, authErrorMessage = null) {
    return new Promise((resolve, reject) => {
      request
        .post(getUrlForPath(path))
        .authBearer(CredentialStore.getJWT())
        .type('application/json')
        .send(data)
        .end(function(error, response) {
          if (error){
            // handleUnauthorized(error);
            reject(error);
          } else {
            resolve(response.body);
          }
        });
    })
  },

  put(path, data) {
    return new Promise(function(resolve, reject) {
      request
        .put(getUrlForPath(path))
        .authBearer(CredentialStore.getJWT())
        .type('application/json')
        .send(data)
        .end(function(error, response) {
          if (error){
            // handleUnauthorized(error);
            reject(error);
          } else {
            resolve(response.body);
          }
        });
    });
  },

  delete(path) {
    return new Promise(function(resolve, reject) {
      request
        .delete(getUrlForPath(path))
        .authBearer(CredentialStore.getJWT())
        .type('application/json')
        .end(function(error, response) {
          if (error){
            // handleUnauthorized(error);
            reject(error);
          } else {
            resolve(response.body);
          }
        });
    });
  },
};

module.exports = Api;
