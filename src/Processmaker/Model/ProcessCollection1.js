/**
 * ProcessMaker API
 * This ProcessMaker I/O API provides access to a BPMN 2.0 compliant workflow engine api that is designed to be used as a microservice to support enterprise cloud applications.  The current Alpha 1.0 version supports most of the descriptive class of the BPMN 2.0 specification.
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
    define(['Processmaker/ApiClient', 'Processmaker/Model/MetaLog', 'Processmaker/Model/Process'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MetaLog'), require('./Process'));
  } else {
    // Browser globals (root is window)
    if (!root.PMIO) {
      root.PMIO = {};
    }
    root.PMIO.ProcessCollection1 = factory(root.PMIO.ApiClient, root.PMIO.MetaLog, root.PMIO.Process);
  }
}(this, function(ApiClient, MetaLog, Process) {
  'use strict';




  /**
   * The ProcessCollection1 model module.
   * @module Processmaker/Model/ProcessCollection1
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ProcessCollection1</code>.
   * @alias module:Processmaker/Model/ProcessCollection1
   * @class
   * @param data {Array.<module:Processmaker/Model/Process>} 
   */
  var exports = function(data) {
    var _this = this;

    _this['data'] = data;

  };

  /**
   * Constructs a <code>ProcessCollection1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Processmaker/Model/ProcessCollection1} obj Optional instance to populate.
   * @return {module:Processmaker/Model/ProcessCollection1} The populated <code>ProcessCollection1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Process]);
      }
      if (data.hasOwnProperty('meta')) {
        obj['meta'] = MetaLog.constructFromObject(data['meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:Processmaker/Model/Process>} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {module:Processmaker/Model/MetaLog} meta
   */
  exports.prototype['meta'] = undefined;



  return exports;
}));


