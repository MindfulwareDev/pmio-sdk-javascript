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
    define(['Processmaker/ApiClient', 'Processmaker/Model/PaginationLinks'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaginationLinks'));
  } else {
    // Browser globals (root is window)
    if (!root.PMIO) {
      root.PMIO = {};
    }
    root.PMIO.Pagination = factory(root.PMIO.ApiClient, root.PMIO.PaginationLinks);
  }
}(this, function(ApiClient, PaginationLinks) {
  'use strict';




  /**
   * The Pagination model module.
   * @module Processmaker/Model/Pagination
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Pagination</code>.
   * @alias module:Processmaker/Model/Pagination
   * @class
   * @param total {Integer} 
   * @param count {Integer} 
   * @param perPage {Integer} 
   * @param currentPage {Integer} 
   * @param totalPages {Integer} 
   */
  var exports = function(total, count, perPage, currentPage, totalPages) {
    var _this = this;

    _this['total'] = total;
    _this['count'] = count;
    _this['per_page'] = perPage;
    _this['current_page'] = currentPage;
    _this['total_pages'] = totalPages;

  };

  /**
   * Constructs a <code>Pagination</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Processmaker/Model/Pagination} obj Optional instance to populate.
   * @return {module:Processmaker/Model/Pagination} The populated <code>Pagination</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Integer');
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Integer');
      }
      if (data.hasOwnProperty('per_page')) {
        obj['per_page'] = ApiClient.convertToType(data['per_page'], 'Integer');
      }
      if (data.hasOwnProperty('current_page')) {
        obj['current_page'] = ApiClient.convertToType(data['current_page'], 'Integer');
      }
      if (data.hasOwnProperty('total_pages')) {
        obj['total_pages'] = ApiClient.convertToType(data['total_pages'], 'Integer');
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = PaginationLinks.constructFromObject(data['links']);
      }
    }
    return obj;
  }

  /**
   * @member {Integer} total
   */
  exports.prototype['total'] = undefined;
  /**
   * @member {Integer} count
   */
  exports.prototype['count'] = undefined;
  /**
   * @member {Integer} per_page
   */
  exports.prototype['per_page'] = undefined;
  /**
   * @member {Integer} current_page
   */
  exports.prototype['current_page'] = undefined;
  /**
   * @member {Integer} total_pages
   */
  exports.prototype['total_pages'] = undefined;
  /**
   * @member {module:Processmaker/Model/PaginationLinks} links
   */
  exports.prototype['links'] = undefined;



  return exports;
}));


