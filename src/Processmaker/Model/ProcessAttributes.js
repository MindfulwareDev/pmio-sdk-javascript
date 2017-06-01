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
    define(['Processmaker/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PMIO) {
      root.PMIO = {};
    }
    root.PMIO.ProcessAttributes = factory(root.PMIO.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProcessAttributes model module.
   * @module Processmaker/Model/ProcessAttributes
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ProcessAttributes</code>.
   * @alias module:Processmaker/Model/ProcessAttributes
   * @class
   * @param name {String} 
   * @param status {module:Processmaker/Model/ProcessAttributes.StatusEnum} 
   * @param durationBy {module:Processmaker/Model/ProcessAttributes.DurationByEnum} 
   * @param type {module:Processmaker/Model/ProcessAttributes.TypeEnum} 
   * @param designAccess {module:Processmaker/Model/ProcessAttributes.DesignAccessEnum} 
   */
  var exports = function(name, status, durationBy, type, designAccess) {
    var _this = this;

    _this['name'] = name;


    _this['status'] = status;
    _this['duration_by'] = durationBy;
    _this['type'] = type;

    _this['design_access'] = designAccess;











  };

  /**
   * Constructs a <code>ProcessAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Processmaker/Model/ProcessAttributes} obj Optional instance to populate.
   * @return {module:Processmaker/Model/ProcessAttributes} The populated <code>ProcessAttributes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('parent_process_id')) {
        obj['parent_process_id'] = ApiClient.convertToType(data['parent_process_id'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('duration_by')) {
        obj['duration_by'] = ApiClient.convertToType(data['duration_by'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('assignment')) {
        obj['assignment'] = ApiClient.convertToType(data['assignment'], 'Boolean');
      }
      if (data.hasOwnProperty('design_access')) {
        obj['design_access'] = ApiClient.convertToType(data['design_access'], 'String');
      }
      if (data.hasOwnProperty('show_map')) {
        obj['show_map'] = ApiClient.convertToType(data['show_map'], 'Boolean');
      }
      if (data.hasOwnProperty('show_message')) {
        obj['show_message'] = ApiClient.convertToType(data['show_message'], 'Boolean');
      }
      if (data.hasOwnProperty('show_delegate')) {
        obj['show_delegate'] = ApiClient.convertToType(data['show_delegate'], 'Boolean');
      }
      if (data.hasOwnProperty('show_dynaform')) {
        obj['show_dynaform'] = ApiClient.convertToType(data['show_dynaform'], 'Boolean');
      }
      if (data.hasOwnProperty('category_id')) {
        obj['category_id'] = ApiClient.convertToType(data['category_id'], 'String');
      }
      if (data.hasOwnProperty('sub_category_id')) {
        obj['sub_category_id'] = ApiClient.convertToType(data['sub_category_id'], 'String');
      }
      if (data.hasOwnProperty('create_user_id')) {
        obj['create_user_id'] = ApiClient.convertToType(data['create_user_id'], 'String');
      }
      if (data.hasOwnProperty('debug')) {
        obj['debug'] = ApiClient.convertToType(data['debug'], 'Boolean');
      }
      if (data.hasOwnProperty('dynaform_summary_id')) {
        obj['dynaform_summary_id'] = ApiClient.convertToType(data['dynaform_summary_id'], 'String');
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
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} parent_process_id
   */
  exports.prototype['parent_process_id'] = undefined;
  /**
   * @member {module:Processmaker/Model/ProcessAttributes.StatusEnum} status
   * @default 'ACTIVE'
   */
  exports.prototype['status'] = 'ACTIVE';
  /**
   * @member {module:Processmaker/Model/ProcessAttributes.DurationByEnum} duration_by
   * @default 'WORKING_DAYS'
   */
  exports.prototype['duration_by'] = 'WORKING_DAYS';
  /**
   * @member {module:Processmaker/Model/ProcessAttributes.TypeEnum} type
   * @default 'NORMAL'
   */
  exports.prototype['type'] = 'NORMAL';
  /**
   * @member {Boolean} assignment
   * @default false
   */
  exports.prototype['assignment'] = false;
  /**
   * @member {module:Processmaker/Model/ProcessAttributes.DesignAccessEnum} design_access
   * @default 'PUBLIC'
   */
  exports.prototype['design_access'] = 'PUBLIC';
  /**
   * @member {Boolean} show_map
   * @default true
   */
  exports.prototype['show_map'] = true;
  /**
   * @member {Boolean} show_message
   * @default true
   */
  exports.prototype['show_message'] = true;
  /**
   * @member {Boolean} show_delegate
   * @default true
   */
  exports.prototype['show_delegate'] = true;
  /**
   * @member {Boolean} show_dynaform
   * @default false
   */
  exports.prototype['show_dynaform'] = false;
  /**
   * @member {String} category_id
   */
  exports.prototype['category_id'] = undefined;
  /**
   * @member {String} sub_category_id
   */
  exports.prototype['sub_category_id'] = undefined;
  /**
   * @member {String} create_user_id
   */
  exports.prototype['create_user_id'] = undefined;
  /**
   * @member {Boolean} debug
   * @default false
   */
  exports.prototype['debug'] = false;
  /**
   * @member {String} dynaform_summary_id
   */
  exports.prototype['dynaform_summary_id'] = undefined;
  /**
   * @member {String} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * @member {String} updated_at
   */
  exports.prototype['updated_at'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "ACTIVE"
     * @const
     */
    "ACTIVE": "ACTIVE",
    /**
     * value: "INACTIVE"
     * @const
     */
    "INACTIVE": "INACTIVE",
    /**
     * value: "DISABLED"
     * @const
     */
    "DISABLED": "DISABLED"  };

  /**
   * Allowed values for the <code>duration_by</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DurationByEnum = {
    /**
     * value: "WORKING_DAYS"
     * @const
     */
    "WORKING_DAYS": "WORKING_DAYS",
    /**
     * value: "CALENDAR_DAYS"
     * @const
     */
    "CALENDAR_DAYS": "CALENDAR_DAYS"  };

  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "NORMAL"
     * @const
     */
    "NORMAL": "NORMAL",
    /**
     * value: "SUB_PROCESS"
     * @const
     */
    "SUB_PROCESS": "SUB_PROCESS"  };

  /**
   * Allowed values for the <code>design_access</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DesignAccessEnum = {
    /**
     * value: "PUBLIC"
     * @const
     */
    "PUBLIC": "PUBLIC",
    /**
     * value: "PRIVATE"
     * @const
     */
    "PRIVATE": "PRIVATE"  };


  return exports;
}));

