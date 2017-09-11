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
    define(['Processmaker/ApiClient', 'Processmaker/Model/ErrorArray', 'Processmaker/Model/ProcessItem', 'Processmaker/Model/ProcessCreateItem', 'Processmaker/Model/ResultSuccess', 'Processmaker/Model/ProcessCollection', 'Processmaker/Model/BpmnImportItem', 'Processmaker/Model/ProcessCollection1', 'Processmaker/Model/ProcessUpdateItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../Model/ErrorArray'), require('../Model/ProcessItem'), require('../Model/ProcessCreateItem'), require('../Model/ResultSuccess'), require('../Model/ProcessCollection'), require('../Model/BpmnImportItem'), require('../Model/ProcessCollection1'), require('../Model/ProcessUpdateItem'));
  } else {
    // Browser globals (root is window)
    if (!root.PMIO) {
      root.PMIO = {};
    }
    root.PMIO.Process = factory(root.PMIO.ApiClient, root.PMIO.ErrorArray, root.PMIO.ProcessItem, root.PMIO.ProcessCreateItem, root.PMIO.ResultSuccess, root.PMIO.ProcessCollection, root.PMIO.BpmnImportItem, root.PMIO.ProcessCollection1, root.PMIO.ProcessUpdateItem);
  }
}(this, function(ApiClient, ErrorArray, ProcessItem, ProcessCreateItem, ResultSuccess, ProcessCollection, BpmnImportItem, ProcessCollection1, ProcessUpdateItem) {
  'use strict';

  /**
   * Process service.
   * @module Processmaker/PMIO/Process
   * @version 1.0.0
   */

  /**
   * Constructs a new Process. 
   * @alias module:Processmaker/PMIO/Process
   * @class
   * @param {module:Processmaker/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:Processmaker/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addProcess operation.
     * @callback module:Processmaker/PMIO/Process~addProcessCallback
     * @param {String} error Error message, if any.
     * @param {module:Processmaker/Model/ProcessItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method creates a new process.
     * @param {module:Processmaker/Model/ProcessCreateItem} processCreateItem JSON API response with the process object to add
     * @param {module:Processmaker/PMIO/Process~addProcessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Processmaker/Model/ProcessItem}
     */
    this.addProcess = function(processCreateItem, callback) {
      var postBody = processCreateItem;

      // verify the required parameter 'processCreateItem' is set
      if (processCreateItem == undefined || processCreateItem == null) {
        throw "Missing the required parameter 'processCreateItem' when calling addProcess";
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
      var returnType = ProcessItem;

      return this.apiClient.callApi(
        '/processes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteProcess operation.
     * @callback module:Processmaker/PMIO/Process~deleteProcessCallback
     * @param {String} error Error message, if any.
     * @param {module:Processmaker/Model/ResultSuccess} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method deletes a process using the process ID.
     * @param {String} id Process ID to delete
     * @param {module:Processmaker/PMIO/Process~deleteProcessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Processmaker/Model/ResultSuccess}
     */
    this.deleteProcess = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling deleteProcess";
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
        '/processes/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findProcessById operation.
     * @callback module:Processmaker/PMIO/Process~findProcessByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:Processmaker/Model/ProcessItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method retrieves a process using its ID.
     * @param {String} id ID of the process to return
     * @param {module:Processmaker/PMIO/Process~findProcessByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Processmaker/Model/ProcessItem}
     */
    this.findProcessById = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling findProcessById";
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
      var returnType = ProcessItem;

      return this.apiClient.callApi(
        '/processes/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findProcesses operation.
     * @callback module:Processmaker/PMIO/Process~findProcessesCallback
     * @param {String} error Error message, if any.
     * @param {module:Processmaker/Model/ProcessCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method retrieves all existing processes.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page Page number to fetch (default to 1)
     * @param {Integer} opts.perPage Amount of items per page (default to 15)
     * @param {module:Processmaker/PMIO/Process~findProcessesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Processmaker/Model/ProcessCollection}
     */
    this.findProcesses = function(opts, callback) {
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
      var returnType = ProcessCollection;

      return this.apiClient.callApi(
        '/processes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the importBpmnFile operation.
     * @callback module:Processmaker/PMIO/Process~importBpmnFileCallback
     * @param {String} error Error message, if any.
     * @param {module:Processmaker/Model/ProcessCollection1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method imports BPMN 2.0 files. A new process(es) is/are created and its object returned back when import is successful.
     * @param {module:Processmaker/Model/BpmnImportItem} bpmnImportItem JSON API with the BPMN file to import
     * @param {module:Processmaker/PMIO/Process~importBpmnFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Processmaker/Model/ProcessCollection1}
     */
    this.importBpmnFile = function(bpmnImportItem, callback) {
      var postBody = bpmnImportItem;

      // verify the required parameter 'bpmnImportItem' is set
      if (bpmnImportItem == undefined || bpmnImportItem == null) {
        throw "Missing the required parameter 'bpmnImportItem' when calling importBpmnFile";
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
      var returnType = ProcessCollection1;

      return this.apiClient.callApi(
        '/processes/import', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateProcess operation.
     * @callback module:Processmaker/PMIO/Process~updateProcessCallback
     * @param {String} error Error message, if any.
     * @param {module:Processmaker/Model/ProcessItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method updates an existing process.
     * @param {String} id ID of the process to retrieve
     * @param {module:Processmaker/Model/ProcessUpdateItem} processUpdateItem Process object to edit
     * @param {module:Processmaker/PMIO/Process~updateProcessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Processmaker/Model/ProcessItem}
     */
    this.updateProcess = function(id, processUpdateItem, callback) {
      var postBody = processUpdateItem;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling updateProcess";
      }

      // verify the required parameter 'processUpdateItem' is set
      if (processUpdateItem == undefined || processUpdateItem == null) {
        throw "Missing the required parameter 'processUpdateItem' when calling updateProcess";
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
      var returnType = ProcessItem;

      return this.apiClient.callApi(
        '/processes/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
