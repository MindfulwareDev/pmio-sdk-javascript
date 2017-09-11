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
    define(['Processmaker/ApiClient', 'Processmaker/Model/GatewayAttributes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GatewayAttributes'));
  } else {
    // Browser globals (root is window)
    if (!root.PMIO) {
      root.PMIO = {};
    }
    root.PMIO.Gateway = factory(root.PMIO.ApiClient, root.PMIO.GatewayAttributes);
  }
}(this, function(ApiClient, GatewayAttributes) {
  'use strict';




  /**
   * The Gateway model module.
   * @module Processmaker/Model/Gateway
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Gateway</code>.
   * @alias module:Processmaker/Model/Gateway
   * @class
   * @param type {String} 
   */
  var exports = function(type) {
    var _this = this;


    _this['type'] = type;

  };

  /**
   * Constructs a <code>Gateway</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Processmaker/Model/Gateway} obj Optional instance to populate.
   * @return {module:Processmaker/Model/Gateway} The populated <code>Gateway</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('attributes')) {
        obj['attributes'] = GatewayAttributes.constructFromObject(data['attributes']);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} type
   * @default 'gateway'
   */
  exports.prototype['type'] = 'gateway';
  /**
   * @member {module:Processmaker/Model/GatewayAttributes} attributes
   */
  exports.prototype['attributes'] = undefined;



  return exports;
}));


