/**
 * ProcessMaker API
 * This ProcessMaker I/O API provides access to a BPMN 2.0 compliant workflow engine API that is designed to be used as a microservice to support enterprise cloud applications. The current Alpha 1.0 version supports most of the descriptive classes of the BPMN 2.0 specification.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@processmaker.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['Processmaker/ApiClient', 'Processmaker/Model/ErrorArray', 'Processmaker/Model/UserItem', 'Processmaker/Model/UserCreateItem', 'Processmaker/Model/ResultSuccess', 'Processmaker/Model/UserCollection', 'Processmaker/Model/UserUpdateItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../Model/ErrorArray'), require('../Model/UserItem'), require('../Model/UserCreateItem'), require('../Model/ResultSuccess'), require('../Model/UserCollection'), require('../Model/UserUpdateItem'));
  } else {
    // Browser globals (root is window)
    if (!root.PMIO) {
      root.PMIO = {};
    }
    root.PMIO.Users = factory(root.PMIO.ApiClient, root.PMIO.ErrorArray, root.PMIO.UserItem, root.PMIO.UserCreateItem, root.PMIO.ResultSuccess, root.PMIO.UserCollection, root.PMIO.UserUpdateItem);
  }
}(this, function(ApiClient, ErrorArray, UserItem, UserCreateItem, ResultSuccess, UserCollection, UserUpdateItem) {
  'use strict';

  /**
   * Users service.
   * @module Processmaker/PMIO/Users
   * @version 1.0.0
   */

  /**
   * Constructs a new Users. 
   * @alias module:Processmaker/PMIO/Users
   * @class
   * @param {module:Processmaker/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:Processmaker/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addUser operation.
     * @callback module:Processmaker/PMIO/Users~addUserCallback
     * @param {String} error Error message, if any.
     * @param {module:Processmaker/Model/UserItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method creates a new user in the system. The client_id will appear in the results.  The &#x60;client_id&#x60; is required to obtain a &#x60;client_secret&#x60; and then you will be able to use it in an Oauth authorization key. Refer to [Oauth Client APIs](#tag/oauth)
     * @param {module:Processmaker/Model/UserCreateItem} userCreateItem JSON API with the User object to add
     * @param {module:Processmaker/PMIO/Users~addUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Processmaker/Model/UserItem}
     */
    this.addUser = function(userCreateItem, callback) {
      var postBody = userCreateItem;

      // verify the required parameter 'userCreateItem' is set
      if (userCreateItem == undefined || userCreateItem == null) {
        throw "Missing the required parameter 'userCreateItem' when calling addUser";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['PasswordGrant'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = UserItem;

      return this.apiClient.callApi(
        '/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUser operation.
     * @callback module:Processmaker/PMIO/Users~deleteUserCallback
     * @param {String} error Error message, if any.
     * @param {module:Processmaker/Model/ResultSuccess} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method deletes a user from the system.
     * @param {String} id ID of user to delete
     * @param {module:Processmaker/PMIO/Users~deleteUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Processmaker/Model/ResultSuccess}
     */
    this.deleteUser = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling deleteUser";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['PasswordGrant'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = ResultSuccess;

      return this.apiClient.callApi(
        '/users/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findUserById operation.
     * @callback module:Processmaker/PMIO/Users~findUserByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:Processmaker/Model/UserItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method returns a user using its ID.
     * @param {String} id ID of the user to return
     * @param {module:Processmaker/PMIO/Users~findUserByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Processmaker/Model/UserItem}
     */
    this.findUserById = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling findUserById";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['PasswordGrant'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = UserItem;

      return this.apiClient.callApi(
        '/users/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findUsers operation.
     * @callback module:Processmaker/PMIO/Users~findUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:Processmaker/Model/UserCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method returns all existing users in the system.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page Page number to fetch (default to 1)
     * @param {Integer} opts.perPage Amount of items per page (default to 15)
     * @param {module:Processmaker/PMIO/Users~findUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Processmaker/Model/UserCollection}
     */
    this.findUsers = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['PasswordGrant'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = UserCollection;

      return this.apiClient.callApi(
        '/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the myselfUser operation.
     * @callback module:Processmaker/PMIO/Users~myselfUserCallback
     * @param {String} error Error message, if any.
     * @param {module:Processmaker/Model/UserItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method returns user information using a token.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page Page number to fetch (default to 1)
     * @param {Integer} opts.perPage Amount of items per page (default to 15)
     * @param {module:Processmaker/PMIO/Users~myselfUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Processmaker/Model/UserItem}
     */
    this.myselfUser = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['PasswordGrant'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = UserItem;

      return this.apiClient.callApi(
        '/users/myself', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUser operation.
     * @callback module:Processmaker/PMIO/Users~updateUserCallback
     * @param {String} error Error message, if any.
     * @param {module:Processmaker/Model/UserItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method updates an existing user.
     * @param {String} id ID of user to retrieve
     * @param {module:Processmaker/Model/UserUpdateItem} userUpdateItem User object for update
     * @param {module:Processmaker/PMIO/Users~updateUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Processmaker/Model/UserItem}
     */
    this.updateUser = function(id, userUpdateItem, callback) {
      var postBody = userUpdateItem;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling updateUser";
      }

      // verify the required parameter 'userUpdateItem' is set
      if (userUpdateItem == undefined || userUpdateItem == null) {
        throw "Missing the required parameter 'userUpdateItem' when calling updateUser";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['PasswordGrant'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = UserItem;

      return this.apiClient.callApi(
        '/users/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
