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
    instance = new PMIO.Client();
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

  describe('Client', function() {
    describe('addEvent', function() {
      it('should call addEvent successfully', function(done) {
        //uncomment below and update the code to test addEvent
        //instance.addEvent(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addEventConnector', function() {
      it('should call addEventConnector successfully', function(done) {
        //uncomment below and update the code to test addEventConnector
        //instance.addEventConnector(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addFlow', function() {
      it('should call addFlow successfully', function(done) {
        //uncomment below and update the code to test addFlow
        //instance.addFlow(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addGateway', function() {
      it('should call addGateway successfully', function(done) {
        //uncomment below and update the code to test addGateway
        //instance.addGateway(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addGroup', function() {
      it('should call addGroup successfully', function(done) {
        //uncomment below and update the code to test addGroup
        //instance.addGroup(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addGroupsToTask', function() {
      it('should call addGroupsToTask successfully', function(done) {
        //uncomment below and update the code to test addGroupsToTask
        //instance.addGroupsToTask(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addInputOutput', function() {
      it('should call addInputOutput successfully', function(done) {
        //uncomment below and update the code to test addInputOutput
        //instance.addInputOutput(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addInstance', function() {
      it('should call addInstance successfully', function(done) {
        //uncomment below and update the code to test addInstance
        //instance.addInstance(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addOauthClient', function() {
      it('should call addOauthClient successfully', function(done) {
        //uncomment below and update the code to test addOauthClient
        //instance.addOauthClient(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addProcess', function() {
      it('should call addProcess successfully', function(done) {
        //uncomment below and update the code to test addProcess
        //instance.addProcess(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addTask', function() {
      it('should call addTask successfully', function(done) {
        //uncomment below and update the code to test addTask
        //instance.addTask(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addTaskConnector', function() {
      it('should call addTaskConnector successfully', function(done) {
        //uncomment below and update the code to test addTaskConnector
        //instance.addTaskConnector(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addUser', function() {
      it('should call addUser successfully', function(done) {
        //uncomment below and update the code to test addUser
        //instance.addUser(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addUsersToGroup', function() {
      it('should call addUsersToGroup successfully', function(done) {
        //uncomment below and update the code to test addUsersToGroup
        //instance.addUsersToGroup(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteEvent', function() {
      it('should call deleteEvent successfully', function(done) {
        //uncomment below and update the code to test deleteEvent
        //instance.deleteEvent(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteEventConnector', function() {
      it('should call deleteEventConnector successfully', function(done) {
        //uncomment below and update the code to test deleteEventConnector
        //instance.deleteEventConnector(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFlow', function() {
      it('should call deleteFlow successfully', function(done) {
        //uncomment below and update the code to test deleteFlow
        //instance.deleteFlow(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteGateway', function() {
      it('should call deleteGateway successfully', function(done) {
        //uncomment below and update the code to test deleteGateway
        //instance.deleteGateway(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteGroup', function() {
      it('should call deleteGroup successfully', function(done) {
        //uncomment below and update the code to test deleteGroup
        //instance.deleteGroup(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteInputOutput', function() {
      it('should call deleteInputOutput successfully', function(done) {
        //uncomment below and update the code to test deleteInputOutput
        //instance.deleteInputOutput(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteInstance', function() {
      it('should call deleteInstance successfully', function(done) {
        //uncomment below and update the code to test deleteInstance
        //instance.deleteInstance(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteOauthClient', function() {
      it('should call deleteOauthClient successfully', function(done) {
        //uncomment below and update the code to test deleteOauthClient
        //instance.deleteOauthClient(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProcess', function() {
      it('should call deleteProcess successfully', function(done) {
        //uncomment below and update the code to test deleteProcess
        //instance.deleteProcess(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteTask', function() {
      it('should call deleteTask successfully', function(done) {
        //uncomment below and update the code to test deleteTask
        //instance.deleteTask(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteTaskConnector', function() {
      it('should call deleteTaskConnector successfully', function(done) {
        //uncomment below and update the code to test deleteTaskConnector
        //instance.deleteTaskConnector(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteUser', function() {
      it('should call deleteUser successfully', function(done) {
        //uncomment below and update the code to test deleteUser
        //instance.deleteUser(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('eventTrigger', function() {
      it('should call eventTrigger successfully', function(done) {
        //uncomment below and update the code to test eventTrigger
        //instance.eventTrigger(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('eventWebhook', function() {
      it('should call eventWebhook successfully', function(done) {
        //uncomment below and update the code to test eventWebhook
        //instance.eventWebhook(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findByFieldInsideDataModel', function() {
      it('should call findByFieldInsideDataModel successfully', function(done) {
        //uncomment below and update the code to test findByFieldInsideDataModel
        //instance.findByFieldInsideDataModel(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findDataModel', function() {
      it('should call findDataModel successfully', function(done) {
        //uncomment below and update the code to test findDataModel
        //instance.findDataModel(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findEventById', function() {
      it('should call findEventById successfully', function(done) {
        //uncomment below and update the code to test findEventById
        //instance.findEventById(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findEventConnectorById', function() {
      it('should call findEventConnectorById successfully', function(done) {
        //uncomment below and update the code to test findEventConnectorById
        //instance.findEventConnectorById(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findEventConnectors', function() {
      it('should call findEventConnectors successfully', function(done) {
        //uncomment below and update the code to test findEventConnectors
        //instance.findEventConnectors(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findEvents', function() {
      it('should call findEvents successfully', function(done) {
        //uncomment below and update the code to test findEvents
        //instance.findEvents(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findFlowById', function() {
      it('should call findFlowById successfully', function(done) {
        //uncomment below and update the code to test findFlowById
        //instance.findFlowById(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findFlows', function() {
      it('should call findFlows successfully', function(done) {
        //uncomment below and update the code to test findFlows
        //instance.findFlows(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findGatewayById', function() {
      it('should call findGatewayById successfully', function(done) {
        //uncomment below and update the code to test findGatewayById
        //instance.findGatewayById(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findGateways', function() {
      it('should call findGateways successfully', function(done) {
        //uncomment below and update the code to test findGateways
        //instance.findGateways(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findGroupById', function() {
      it('should call findGroupById successfully', function(done) {
        //uncomment below and update the code to test findGroupById
        //instance.findGroupById(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findGroups', function() {
      it('should call findGroups successfully', function(done) {
        //uncomment below and update the code to test findGroups
        //instance.findGroups(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findInputOutputById', function() {
      it('should call findInputOutputById successfully', function(done) {
        //uncomment below and update the code to test findInputOutputById
        //instance.findInputOutputById(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findInputOutputs', function() {
      it('should call findInputOutputs successfully', function(done) {
        //uncomment below and update the code to test findInputOutputs
        //instance.findInputOutputs(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findInstanceById', function() {
      it('should call findInstanceById successfully', function(done) {
        //uncomment below and update the code to test findInstanceById
        //instance.findInstanceById(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findInstances', function() {
      it('should call findInstances successfully', function(done) {
        //uncomment below and update the code to test findInstances
        //instance.findInstances(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findOauthClientById', function() {
      it('should call findOauthClientById successfully', function(done) {
        //uncomment below and update the code to test findOauthClientById
        //instance.findOauthClientById(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findOauthClients', function() {
      it('should call findOauthClients successfully', function(done) {
        //uncomment below and update the code to test findOauthClients
        //instance.findOauthClients(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findProcessById', function() {
      it('should call findProcessById successfully', function(done) {
        //uncomment below and update the code to test findProcessById
        //instance.findProcessById(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findProcesses', function() {
      it('should call findProcesses successfully', function(done) {
        //uncomment below and update the code to test findProcesses
        //instance.findProcesses(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findTaskById', function() {
      it('should call findTaskById successfully', function(done) {
        //uncomment below and update the code to test findTaskById
        //instance.findTaskById(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findTaskConnectorById', function() {
      it('should call findTaskConnectorById successfully', function(done) {
        //uncomment below and update the code to test findTaskConnectorById
        //instance.findTaskConnectorById(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findTaskConnectors', function() {
      it('should call findTaskConnectors successfully', function(done) {
        //uncomment below and update the code to test findTaskConnectors
        //instance.findTaskConnectors(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findTaskInstanceById', function() {
      it('should call findTaskInstanceById successfully', function(done) {
        //uncomment below and update the code to test findTaskInstanceById
        //instance.findTaskInstanceById(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findTaskInstances', function() {
      it('should call findTaskInstances successfully', function(done) {
        //uncomment below and update the code to test findTaskInstances
        //instance.findTaskInstances(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findTaskInstancesByInstanceAndTaskId', function() {
      it('should call findTaskInstancesByInstanceAndTaskId successfully', function(done) {
        //uncomment below and update the code to test findTaskInstancesByInstanceAndTaskId
        //instance.findTaskInstancesByInstanceAndTaskId(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findTaskInstancesByInstanceAndTaskIdDelegated', function() {
      it('should call findTaskInstancesByInstanceAndTaskIdDelegated successfully', function(done) {
        //uncomment below and update the code to test findTaskInstancesByInstanceAndTaskIdDelegated
        //instance.findTaskInstancesByInstanceAndTaskIdDelegated(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findTaskInstancesByInstanceAndTaskIdStarted', function() {
      it('should call findTaskInstancesByInstanceAndTaskIdStarted successfully', function(done) {
        //uncomment below and update the code to test findTaskInstancesByInstanceAndTaskIdStarted
        //instance.findTaskInstancesByInstanceAndTaskIdStarted(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findTasks', function() {
      it('should call findTasks successfully', function(done) {
        //uncomment below and update the code to test findTasks
        //instance.findTasks(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findTokens', function() {
      it('should call findTokens successfully', function(done) {
        //uncomment below and update the code to test findTokens
        //instance.findTokens(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findUserById', function() {
      it('should call findUserById successfully', function(done) {
        //uncomment below and update the code to test findUserById
        //instance.findUserById(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findUsers', function() {
      it('should call findUsers successfully', function(done) {
        //uncomment below and update the code to test findUsers
        //instance.findUsers(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('importBpmnFile', function() {
      it('should call importBpmnFile successfully', function(done) {
        //uncomment below and update the code to test importBpmnFile
        //instance.importBpmnFile(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('myselfUser', function() {
      it('should call myselfUser successfully', function(done) {
        //uncomment below and update the code to test myselfUser
        //instance.myselfUser(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeGroupsFromTask', function() {
      it('should call removeGroupsFromTask successfully', function(done) {
        //uncomment below and update the code to test removeGroupsFromTask
        //instance.removeGroupsFromTask(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeUsersFromGroup', function() {
      it('should call removeUsersFromGroup successfully', function(done) {
        //uncomment below and update the code to test removeUsersFromGroup
        //instance.removeUsersFromGroup(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('syncGroupsToTask', function() {
      it('should call syncGroupsToTask successfully', function(done) {
        //uncomment below and update the code to test syncGroupsToTask
        //instance.syncGroupsToTask(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('syncUsersToGroup', function() {
      it('should call syncUsersToGroup successfully', function(done) {
        //uncomment below and update the code to test syncUsersToGroup
        //instance.syncUsersToGroup(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateEvent', function() {
      it('should call updateEvent successfully', function(done) {
        //uncomment below and update the code to test updateEvent
        //instance.updateEvent(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateEventConnector', function() {
      it('should call updateEventConnector successfully', function(done) {
        //uncomment below and update the code to test updateEventConnector
        //instance.updateEventConnector(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateFlow', function() {
      it('should call updateFlow successfully', function(done) {
        //uncomment below and update the code to test updateFlow
        //instance.updateFlow(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateGateway', function() {
      it('should call updateGateway successfully', function(done) {
        //uncomment below and update the code to test updateGateway
        //instance.updateGateway(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateGroup', function() {
      it('should call updateGroup successfully', function(done) {
        //uncomment below and update the code to test updateGroup
        //instance.updateGroup(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateInputOutput', function() {
      it('should call updateInputOutput successfully', function(done) {
        //uncomment below and update the code to test updateInputOutput
        //instance.updateInputOutput(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateInstance', function() {
      it('should call updateInstance successfully', function(done) {
        //uncomment below and update the code to test updateInstance
        //instance.updateInstance(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOauthClient', function() {
      it('should call updateOauthClient successfully', function(done) {
        //uncomment below and update the code to test updateOauthClient
        //instance.updateOauthClient(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateProcess', function() {
      it('should call updateProcess successfully', function(done) {
        //uncomment below and update the code to test updateProcess
        //instance.updateProcess(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTask', function() {
      it('should call updateTask successfully', function(done) {
        //uncomment below and update the code to test updateTask
        //instance.updateTask(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTaskConnector', function() {
      it('should call updateTaskConnector successfully', function(done) {
        //uncomment below and update the code to test updateTaskConnector
        //instance.updateTaskConnector(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTaskInstance', function() {
      it('should call updateTaskInstance successfully', function(done) {
        //uncomment below and update the code to test updateTaskInstance
        //instance.updateTaskInstance(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateUser', function() {
      it('should call updateUser successfully', function(done) {
        //uncomment below and update the code to test updateUser
        //instance.updateUser(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));