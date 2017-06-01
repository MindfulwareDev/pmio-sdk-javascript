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
    instance = new PMIO.Pagination();
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

  describe('Pagination', function() {
    it('should create an instance of Pagination', function() {
      // uncomment below and update the code to test Pagination
      //var instane = new PMIO.Pagination();
      //expect(instance).to.be.a(PMIO.Pagination);
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instane = new PMIO.Pagination();
      //expect(instance).to.be();
    });

    it('should have the property count (base name: "count")', function() {
      // uncomment below and update the code to test the property count
      //var instane = new PMIO.Pagination();
      //expect(instance).to.be();
    });

    it('should have the property perPage (base name: "per_page")', function() {
      // uncomment below and update the code to test the property perPage
      //var instane = new PMIO.Pagination();
      //expect(instance).to.be();
    });

    it('should have the property currentPage (base name: "current_page")', function() {
      // uncomment below and update the code to test the property currentPage
      //var instane = new PMIO.Pagination();
      //expect(instance).to.be();
    });

    it('should have the property totalPages (base name: "total_pages")', function() {
      // uncomment below and update the code to test the property totalPages
      //var instane = new PMIO.Pagination();
      //expect(instance).to.be();
    });

    it('should have the property links (base name: "links")', function() {
      // uncomment below and update the code to test the property links
      //var instane = new PMIO.Pagination();
      //expect(instance).to.be();
    });

  });

}));
