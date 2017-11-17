import request from 'superagent';

import ApiConstants from '../constants/ApiConstants';


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
