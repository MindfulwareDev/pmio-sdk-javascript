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
    define(['Processmaker/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PMIO) {
      root.PMIO = {};
    }
    root.PMIO.InputOutputAttributes = factory(root.PMIO.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InputOutputAttributes model module.
   * @module Processmaker/Model/InputOutputAttributes
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InputOutputAttributes</code>.
   * @alias module:Processmaker/Model/InputOutputAttributes
   * @class
   * @param inputParameters {Object} 
   * @param outputParameters {Object} 
   */
  var exports = function(inputParameters, outputParameters) {
    var _this = this;

    _this['input_parameters'] = inputParameters;
    _this['output_parameters'] = outputParameters;


  };

  /**
   * Constructs a <code>InputOutputAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Processmaker/Model/InputOutputAttributes} obj Optional instance to populate.
   * @return {module:Processmaker/Model/InputOutputAttributes} The populated <code>InputOutputAttributes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('input_parameters')) {
        obj['input_parameters'] = ApiClient.convertToType(data['input_parameters'], Object);
      }
      if (data.hasOwnProperty('output_parameters')) {
        obj['output_parameters'] = ApiClient.convertToType(data['output_parameters'], Object);
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Object} input_parameters
   */
  exports.prototype['input_parameters'] = undefined;
  /**
   * @member {Object} output_parameters
   */
  exports.prototype['output_parameters'] = undefined;
  /**
   * @member {String} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * @member {String} updated_at
   */
  exports.prototype['updated_at'] = undefined;



  return exports;
}));


