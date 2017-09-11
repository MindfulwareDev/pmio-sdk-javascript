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
    instance = new PMIO.TokenAttributes();
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

  describe('TokenAttributes', function() {
    it('should create an instance of TokenAttributes', function() {
      // uncomment below and update the code to test TokenAttributes
      //var instane = new PMIO.TokenAttributes();
      //expect(instance).to.be.a(PMIO.TokenAttributes);
    });

    it('should have the property instanceId (base name: "instance_id")', function() {
      // uncomment below and update the code to test the property instanceId
      //var instane = new PMIO.TokenAttributes();
      //expect(instance).to.be();
    });

    it('should have the property flowId (base name: "flow_id")', function() {
      // uncomment below and update the code to test the property flowId
      //var instane = new PMIO.TokenAttributes();
      //expect(instance).to.be();
    });

    it('should have the property tokenKey (base name: "token_key")', function() {
      // uncomment below and update the code to test the property tokenKey
      //var instane = new PMIO.TokenAttributes();
      //expect(instance).to.be();
    });

    it('should have the property tokenCount (base name: "token_count")', function() {
      // uncomment below and update the code to test the property tokenCount
      //var instane = new PMIO.TokenAttributes();
      //expect(instance).to.be();
    });

    it('should have the property initiatorObjectId (base name: "initiator_object_id")', function() {
      // uncomment below and update the code to test the property initiatorObjectId
      //var instane = new PMIO.TokenAttributes();
      //expect(instance).to.be();
    });

    it('should have the property initiatorObjectType (base name: "initiator_object_type")', function() {
      // uncomment below and update the code to test the property initiatorObjectType
      //var instane = new PMIO.TokenAttributes();
      //expect(instance).to.be();
    });

    it('should have the property targetObjectId (base name: "target_object_id")', function() {
      // uncomment below and update the code to test the property targetObjectId
      //var instane = new PMIO.TokenAttributes();
      //expect(instance).to.be();
    });

    it('should have the property targetObjectType (base name: "target_object_type")', function() {
      // uncomment below and update the code to test the property targetObjectType
      //var instane = new PMIO.TokenAttributes();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new PMIO.TokenAttributes();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new PMIO.TokenAttributes();
      //expect(instance).to.be();
    });

  });

}));
