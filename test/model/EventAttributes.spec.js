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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PMIO);
  }
}(this, function(expect, PMIO) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PMIO.EventAttributes();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('EventAttributes', function() {
    it('should create an instance of EventAttributes', function() {
      // uncomment below and update the code to test EventAttributes
      //var instane = new PMIO.EventAttributes();
      //expect(instance).to.be.a(PMIO.EventAttributes);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new PMIO.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new PMIO.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property processId (base name: "process_id")', function() {
      // uncomment below and update the code to test the property processId
      //var instane = new PMIO.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property messageId (base name: "message_id")', function() {
      // uncomment below and update the code to test the property messageId
      //var instane = new PMIO.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new PMIO.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property definition (base name: "definition")', function() {
      // uncomment below and update the code to test the property definition
      //var instane = new PMIO.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property interrupting (base name: "interrupting")', function() {
      // uncomment below and update the code to test the property interrupting
      //var instane = new PMIO.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property condition (base name: "condition")', function() {
      // uncomment below and update the code to test the property condition
      //var instane = new PMIO.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property time (base name: "time")', function() {
      // uncomment below and update the code to test the property time
      //var instane = new PMIO.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property duration (base name: "duration")', function() {
      // uncomment below and update the code to test the property duration
      //var instane = new PMIO.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property cycle (base name: "cycle")', function() {
      // uncomment below and update the code to test the property cycle
      //var instane = new PMIO.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property attachedToTaskId (base name: "attached_to_task_id")', function() {
      // uncomment below and update the code to test the property attachedToTaskId
      //var instane = new PMIO.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new PMIO.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new PMIO.EventAttributes();
      //expect(instance).to.be();
    });

  });

}));
