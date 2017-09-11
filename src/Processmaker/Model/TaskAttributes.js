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
    root.PMIO.TaskAttributes = factory(root.PMIO.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TaskAttributes model module.
   * @module Processmaker/Model/TaskAttributes
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>TaskAttributes</code>.
   * @alias module:Processmaker/Model/TaskAttributes
   * @class
   * @param name {String} 
   * @param processId {String} 
   * @param type {module:Processmaker/Model/TaskAttributes.TypeEnum} 
   * @param assignType {module:Processmaker/Model/TaskAttributes.AssignTypeEnum} 
   * @param transferFly {Boolean} 
   * @param canUpload {Boolean} 
   * @param viewUpload {Boolean} 
   * @param viewAdditionalDocumentation {Boolean} 
   * @param start {Boolean} 
   * @param sendLastEmail {Boolean} 
   * @param selfserviceTimeout {Integer} 
   */
  var exports = function(name, processId, type, assignType, transferFly, canUpload, viewUpload, viewAdditionalDocumentation, start, sendLastEmail, selfserviceTimeout) {
    var _this = this;

    _this['name'] = name;

    _this['process_id'] = processId;
    _this['type'] = type;
    _this['assign_type'] = assignType;





    _this['transfer_fly'] = transferFly;
    _this['can_upload'] = canUpload;
    _this['view_upload'] = viewUpload;
    _this['view_additional_documentation'] = viewAdditionalDocumentation;
    _this['start'] = start;
    _this['send_last_email'] = sendLastEmail;

    _this['selfservice_timeout'] = selfserviceTimeout;







  };

  /**
   * Constructs a <code>TaskAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Processmaker/Model/TaskAttributes} obj Optional instance to populate.
   * @return {module:Processmaker/Model/TaskAttributes} The populated <code>TaskAttributes</code> instance.
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
      if (data.hasOwnProperty('process_id')) {
        obj['process_id'] = ApiClient.convertToType(data['process_id'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('assign_type')) {
        obj['assign_type'] = ApiClient.convertToType(data['assign_type'], 'String');
      }
      if (data.hasOwnProperty('priority_variable')) {
        obj['priority_variable'] = ApiClient.convertToType(data['priority_variable'], 'String');
      }
      if (data.hasOwnProperty('assign_variable')) {
        obj['assign_variable'] = ApiClient.convertToType(data['assign_variable'], 'String');
      }
      if (data.hasOwnProperty('group_variable')) {
        obj['group_variable'] = ApiClient.convertToType(data['group_variable'], 'String');
      }
      if (data.hasOwnProperty('mi_instance_variable')) {
        obj['mi_instance_variable'] = ApiClient.convertToType(data['mi_instance_variable'], 'String');
      }
      if (data.hasOwnProperty('mi_complete_variable')) {
        obj['mi_complete_variable'] = ApiClient.convertToType(data['mi_complete_variable'], 'String');
      }
      if (data.hasOwnProperty('transfer_fly')) {
        obj['transfer_fly'] = ApiClient.convertToType(data['transfer_fly'], 'Boolean');
      }
      if (data.hasOwnProperty('can_upload')) {
        obj['can_upload'] = ApiClient.convertToType(data['can_upload'], 'Boolean');
      }
      if (data.hasOwnProperty('view_upload')) {
        obj['view_upload'] = ApiClient.convertToType(data['view_upload'], 'Boolean');
      }
      if (data.hasOwnProperty('view_additional_documentation')) {
        obj['view_additional_documentation'] = ApiClient.convertToType(data['view_additional_documentation'], 'Boolean');
      }
      if (data.hasOwnProperty('start')) {
        obj['start'] = ApiClient.convertToType(data['start'], 'Boolean');
      }
      if (data.hasOwnProperty('send_last_email')) {
        obj['send_last_email'] = ApiClient.convertToType(data['send_last_email'], 'Boolean');
      }
      if (data.hasOwnProperty('derivation_screen_tpl')) {
        obj['derivation_screen_tpl'] = ApiClient.convertToType(data['derivation_screen_tpl'], 'String');
      }
      if (data.hasOwnProperty('selfservice_timeout')) {
        obj['selfservice_timeout'] = ApiClient.convertToType(data['selfservice_timeout'], 'Integer');
      }
      if (data.hasOwnProperty('selfservice_time')) {
        obj['selfservice_time'] = ApiClient.convertToType(data['selfservice_time'], 'String');
      }
      if (data.hasOwnProperty('selfservice_time_unit')) {
        obj['selfservice_time_unit'] = ApiClient.convertToType(data['selfservice_time_unit'], 'String');
      }
      if (data.hasOwnProperty('selfservice_execution')) {
        obj['selfservice_execution'] = ApiClient.convertToType(data['selfservice_execution'], 'String');
      }
      if (data.hasOwnProperty('last_assigned_user_id')) {
        obj['last_assigned_user_id'] = ApiClient.convertToType(data['last_assigned_user_id'], 'String');
      }
      if (data.hasOwnProperty('script')) {
        obj['script'] = ApiClient.convertToType(data['script'], 'String');
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
   * @member {String} process_id
   */
  exports.prototype['process_id'] = undefined;
  /**
   * @member {module:Processmaker/Model/TaskAttributes.TypeEnum} type
   * @default 'NORMAL'
   */
  exports.prototype['type'] = 'NORMAL';
  /**
   * @member {module:Processmaker/Model/TaskAttributes.AssignTypeEnum} assign_type
   * @default 'CYCLIC'
   */
  exports.prototype['assign_type'] = 'CYCLIC';
  /**
   * @member {String} priority_variable
   */
  exports.prototype['priority_variable'] = undefined;
  /**
   * @member {String} assign_variable
   */
  exports.prototype['assign_variable'] = undefined;
  /**
   * @member {String} group_variable
   */
  exports.prototype['group_variable'] = undefined;
  /**
   * @member {String} mi_instance_variable
   */
  exports.prototype['mi_instance_variable'] = undefined;
  /**
   * @member {String} mi_complete_variable
   */
  exports.prototype['mi_complete_variable'] = undefined;
  /**
   * @member {Boolean} transfer_fly
   * @default false
   */
  exports.prototype['transfer_fly'] = false;
  /**
   * @member {Boolean} can_upload
   * @default false
   */
  exports.prototype['can_upload'] = false;
  /**
   * @member {Boolean} view_upload
   * @default false
   */
  exports.prototype['view_upload'] = false;
  /**
   * @member {Boolean} view_additional_documentation
   * @default false
   */
  exports.prototype['view_additional_documentation'] = false;
  /**
   * @member {Boolean} start
   * @default false
   */
  exports.prototype['start'] = false;
  /**
   * @member {Boolean} send_last_email
   * @default true
   */
  exports.prototype['send_last_email'] = true;
  /**
   * @member {String} derivation_screen_tpl
   */
  exports.prototype['derivation_screen_tpl'] = undefined;
  /**
   * @member {Integer} selfservice_timeout
   */
  exports.prototype['selfservice_timeout'] = undefined;
  /**
   * @member {String} selfservice_time
   */
  exports.prototype['selfservice_time'] = undefined;
  /**
   * @member {String} selfservice_time_unit
   */
  exports.prototype['selfservice_time_unit'] = undefined;
  /**
   * @member {String} selfservice_execution
   */
  exports.prototype['selfservice_execution'] = undefined;
  /**
   * @member {String} last_assigned_user_id
   */
  exports.prototype['last_assigned_user_id'] = undefined;
  /**
   * @member {String} script
   */
  exports.prototype['script'] = undefined;
  /**
   * @member {String} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * @member {String} updated_at
   */
  exports.prototype['updated_at'] = undefined;


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
     * value: "ADHOC"
     * @const
     */
    "ADHOC": "ADHOC",
    /**
     * value: "SUBPROCESS"
     * @const
     */
    "SUBPROCESS": "SUBPROCESS",
    /**
     * value: "HIDDEN"
     * @const
     */
    "HIDDEN": "HIDDEN",
    /**
     * value: "GATEWAYTOGATEWAY"
     * @const
     */
    "GATEWAYTOGATEWAY": "GATEWAYTOGATEWAY",
    /**
     * value: "WEBENTRYEVENT"
     * @const
     */
    "WEBENTRYEVENT": "WEBENTRYEVENT",
    /**
     * value: "END-MESSAGE-EVENT"
     * @const
     */
    "END-MESSAGE-EVENT": "END-MESSAGE-EVENT",
    /**
     * value: "START-MESSAGE-EVENT"
     * @const
     */
    "START-MESSAGE-EVENT": "START-MESSAGE-EVENT",
    /**
     * value: "INTERMEDIATE-THROW-MESSAGE-EVENT"
     * @const
     */
    "INTERMEDIATE-THROW-MESSAGE-EVENT": "INTERMEDIATE-THROW-MESSAGE-EVENT",
    /**
     * value: "INTERMEDIATE-CATCH-MESSAGE-EVENT"
     * @const
     */
    "INTERMEDIATE-CATCH-MESSAGE-EVENT": "INTERMEDIATE-CATCH-MESSAGE-EVENT",
    /**
     * value: "SCRIPT-TASK"
     * @const
     */
    "SCRIPT-TASK": "SCRIPT-TASK",
    /**
     * value: "SERVICE-TASK"
     * @const
     */
    "SERVICE-TASK": "SERVICE-TASK",
    /**
     * value: "USER-TASK"
     * @const
     */
    "USER-TASK": "USER-TASK",
    /**
     * value: "START-TIMER-EVENT"
     * @const
     */
    "START-TIMER-EVENT": "START-TIMER-EVENT",
    /**
     * value: "INTERMEDIATE-CATCH-TIMER-EVENT"
     * @const
     */
    "INTERMEDIATE-CATCH-TIMER-EVENT": "INTERMEDIATE-CATCH-TIMER-EVENT",
    /**
     * value: "END-EMAIL-EVENT"
     * @const
     */
    "END-EMAIL-EVENT": "END-EMAIL-EVENT",
    /**
     * value: "INTERMEDIATE-THROW-EMAIL-EVENT"
     * @const
     */
    "INTERMEDIATE-THROW-EMAIL-EVENT": "INTERMEDIATE-THROW-EMAIL-EVENT"  };

  /**
   * Allowed values for the <code>assign_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AssignTypeEnum = {
    /**
     * value: "CYCLIC"
     * @const
     */
    "CYCLIC": "CYCLIC",
    /**
     * value: "MANUAL"
     * @const
     */
    "MANUAL": "MANUAL",
    /**
     * value: "EVALUATE"
     * @const
     */
    "EVALUATE": "EVALUATE",
    /**
     * value: "REPORT_TO"
     * @const
     */
    "REPORT_TO": "REPORT_TO",
    /**
     * value: "SELF_SERVICE"
     * @const
     */
    "SELF_SERVICE": "SELF_SERVICE",
    /**
     * value: "STATIC_MI"
     * @const
     */
    "STATIC_MI": "STATIC_MI",
    /**
     * value: "CANCEL_MI"
     * @const
     */
    "CANCEL_MI": "CANCEL_MI",
    /**
     * value: "MULTIPLE_INSTANCE"
     * @const
     */
    "MULTIPLE_INSTANCE": "MULTIPLE_INSTANCE",
    /**
     * value: "MULTIPLE_INSTANCE_VALUE_BASED"
     * @const
     */
    "MULTIPLE_INSTANCE_VALUE_BASED": "MULTIPLE_INSTANCE_VALUE_BASED"  };


  return exports;
}));


