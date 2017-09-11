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
    root.PMIO.TaskInstanceAttributes = factory(root.PMIO.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TaskInstanceAttributes model module.
   * @module Processmaker/Model/TaskInstanceAttributes
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>TaskInstanceAttributes</code>.
   * @alias module:Processmaker/Model/TaskInstanceAttributes
   * @class
   * @param taskId {String} 
   * @param instanceId {String} 
   * @param status {module:Processmaker/Model/TaskInstanceAttributes.StatusEnum} 
   * @param priority {module:Processmaker/Model/TaskInstanceAttributes.PriorityEnum} 
   */
  var exports = function(taskId, instanceId, status, priority) {
    var _this = this;

    _this['task_id'] = taskId;
    _this['instance_id'] = instanceId;


    _this['status'] = status;
    _this['priority'] = priority;











  };

  /**
   * Constructs a <code>TaskInstanceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Processmaker/Model/TaskInstanceAttributes} obj Optional instance to populate.
   * @return {module:Processmaker/Model/TaskInstanceAttributes} The populated <code>TaskInstanceAttributes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('task_id')) {
        obj['task_id'] = ApiClient.convertToType(data['task_id'], 'String');
      }
      if (data.hasOwnProperty('instance_id')) {
        obj['instance_id'] = ApiClient.convertToType(data['instance_id'], 'String');
      }
      if (data.hasOwnProperty('group_id')) {
        obj['group_id'] = ApiClient.convertToType(data['group_id'], 'String');
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('priority')) {
        obj['priority'] = ApiClient.convertToType(data['priority'], 'String');
      }
      if (data.hasOwnProperty('delegate_date')) {
        obj['delegate_date'] = ApiClient.convertToType(data['delegate_date'], 'String');
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'String');
      }
      if (data.hasOwnProperty('finish_date')) {
        obj['finish_date'] = ApiClient.convertToType(data['finish_date'], 'String');
      }
      if (data.hasOwnProperty('task_due_date')) {
        obj['task_due_date'] = ApiClient.convertToType(data['task_due_date'], 'String');
      }
      if (data.hasOwnProperty('risk_date')) {
        obj['risk_date'] = ApiClient.convertToType(data['risk_date'], 'String');
      }
      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'Integer');
      }
      if (data.hasOwnProperty('instance_overdue_percentage')) {
        obj['instance_overdue_percentage'] = ApiClient.convertToType(data['instance_overdue_percentage'], 'Number');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
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
   * @member {String} task_id
   */
  exports.prototype['task_id'] = undefined;
  /**
   * @member {String} instance_id
   */
  exports.prototype['instance_id'] = undefined;
  /**
   * @member {String} group_id
   */
  exports.prototype['group_id'] = undefined;
  /**
   * @member {String} user_id
   */
  exports.prototype['user_id'] = undefined;
  /**
   * @member {module:Processmaker/Model/TaskInstanceAttributes.StatusEnum} status
   * @default 'INITIAL'
   */
  exports.prototype['status'] = 'INITIAL';
  /**
   * @member {module:Processmaker/Model/TaskInstanceAttributes.PriorityEnum} priority
   * @default '3'
   */
  exports.prototype['priority'] = '3';
  /**
   * @member {String} delegate_date
   */
  exports.prototype['delegate_date'] = undefined;
  /**
   * @member {String} start_date
   */
  exports.prototype['start_date'] = undefined;
  /**
   * @member {String} finish_date
   */
  exports.prototype['finish_date'] = undefined;
  /**
   * @member {String} task_due_date
   */
  exports.prototype['task_due_date'] = undefined;
  /**
   * @member {String} risk_date
   */
  exports.prototype['risk_date'] = undefined;
  /**
   * @member {Integer} duration
   */
  exports.prototype['duration'] = undefined;
  /**
   * @member {Number} instance_overdue_percentage
   */
  exports.prototype['instance_overdue_percentage'] = undefined;
  /**
   * @member {String} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
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
     * value: "INITIAL"
     * @const
     */
    "INITIAL": "INITIAL",
    /**
     * value: "DELEGATED"
     * @const
     */
    "DELEGATED": "DELEGATED",
    /**
     * value: "STARTED"
     * @const
     */
    "STARTED": "STARTED",
    /**
     * value: "CANCELLED"
     * @const
     */
    "CANCELLED": "CANCELLED",
    /**
     * value: "FINISHED"
     * @const
     */
    "FINISHED": "FINISHED",
    /**
     * value: "COMPLETE"
     * @const
     */
    "COMPLETE": "COMPLETE",
    /**
     * value: "PAUSED"
     * @const
     */
    "PAUSED": "PAUSED"  };

  /**
   * Allowed values for the <code>priority</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PriorityEnum = {
    /**
     * value: "1"
     * @const
     */
    "1": "1",
    /**
     * value: "2"
     * @const
     */
    "2": "2",
    /**
     * value: "3"
     * @const
     */
    "3": "3",
    /**
     * value: "4"
     * @const
     */
    "4": "4",
    /**
     * value: "5"
     * @const
     */
    "5": "5"  };


  return exports;
}));


