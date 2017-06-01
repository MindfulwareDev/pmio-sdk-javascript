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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['Processmaker/ApiClient', 'Processmaker/Model/BpmnFile', 'Processmaker/Model/BpmnFileAttributes', 'Processmaker/Model/BpmnImportItem', 'Processmaker/Model/Client', 'Processmaker/Model/ClientAttributes', 'Processmaker/Model/ClientCollection', 'Processmaker/Model/ClientCreateItem', 'Processmaker/Model/ClientItem', 'Processmaker/Model/ClientUpdateItem', 'Processmaker/Model/DataModel', 'Processmaker/Model/DataModelAttributes', 'Processmaker/Model/DataModelItem', 'Processmaker/Model/DataModelItem1', 'Processmaker/Model/DataModelItemAttributes', 'Processmaker/Model/Error', 'Processmaker/Model/ErrorArray', 'Processmaker/Model/Event', 'Processmaker/Model/EventAttributes', 'Processmaker/Model/EventCollection', 'Processmaker/Model/EventConnector', 'Processmaker/Model/EventConnector1', 'Processmaker/Model/EventConnectorAttributes', 'Processmaker/Model/EventConnectorCreateItem', 'Processmaker/Model/EventConnectorUpdateItem', 'Processmaker/Model/EventConnectorsCollection', 'Processmaker/Model/EventCreateItem', 'Processmaker/Model/EventItem', 'Processmaker/Model/EventUpdateItem', 'Processmaker/Model/Flow', 'Processmaker/Model/FlowAttributes', 'Processmaker/Model/FlowCollection', 'Processmaker/Model/FlowCreateItem', 'Processmaker/Model/FlowItem', 'Processmaker/Model/FlowUpdateItem', 'Processmaker/Model/Gateway', 'Processmaker/Model/GatewayAttributes', 'Processmaker/Model/GatewayCollection', 'Processmaker/Model/GatewayCreateItem', 'Processmaker/Model/GatewayItem', 'Processmaker/Model/GatewayUpdateItem', 'Processmaker/Model/Group', 'Processmaker/Model/GroupAddUsersItem', 'Processmaker/Model/GroupAttributes', 'Processmaker/Model/GroupCollection', 'Processmaker/Model/GroupCreateItem', 'Processmaker/Model/GroupIds', 'Processmaker/Model/GroupItem', 'Processmaker/Model/GroupRemoveUsersItem', 'Processmaker/Model/GroupSyncUsersItem', 'Processmaker/Model/GroupUpdateItem', 'Processmaker/Model/InlineResponse200', 'Processmaker/Model/InputOutput', 'Processmaker/Model/InputOutputAttributes', 'Processmaker/Model/InputOutputCollection', 'Processmaker/Model/InputOutputCreateItem', 'Processmaker/Model/InputOutputItem', 'Processmaker/Model/InputOutputUpdateItem', 'Processmaker/Model/Instance', 'Processmaker/Model/InstanceAttributes', 'Processmaker/Model/InstanceCollection', 'Processmaker/Model/InstanceCreateItem', 'Processmaker/Model/InstanceItem', 'Processmaker/Model/InstanceUpdateItem', 'Processmaker/Model/Meta', 'Processmaker/Model/MetaLog', 'Processmaker/Model/Pagination', 'Processmaker/Model/PaginationLinks', 'Processmaker/Model/Process', 'Processmaker/Model/ProcessAttributes', 'Processmaker/Model/ProcessCollection', 'Processmaker/Model/ProcessCollection1', 'Processmaker/Model/ProcessCreateItem', 'Processmaker/Model/ProcessItem', 'Processmaker/Model/ProcessUpdateItem', 'Processmaker/Model/ResultSuccess', 'Processmaker/Model/ResultSuccessMeta', 'Processmaker/Model/Task', 'Processmaker/Model/TaskAddGroupsItem', 'Processmaker/Model/TaskAttributes', 'Processmaker/Model/TaskCollection', 'Processmaker/Model/TaskConnector', 'Processmaker/Model/TaskConnector1', 'Processmaker/Model/TaskConnectorAttributes', 'Processmaker/Model/TaskConnectorCreateItem', 'Processmaker/Model/TaskConnectorUpdateItem', 'Processmaker/Model/TaskConnectorsCollection', 'Processmaker/Model/TaskCreateItem', 'Processmaker/Model/TaskInstance', 'Processmaker/Model/TaskInstanceAttributes', 'Processmaker/Model/TaskInstanceCollection', 'Processmaker/Model/TaskInstanceUpdateItem', 'Processmaker/Model/TaskItem', 'Processmaker/Model/TaskRemoveGroupsItem', 'Processmaker/Model/TaskSyncGroupsItem', 'Processmaker/Model/TaskUpdateItem', 'Processmaker/Model/TriggerEventCreateItem', 'Processmaker/Model/User', 'Processmaker/Model/UserAttributes', 'Processmaker/Model/UserCollection', 'Processmaker/Model/UserCreateItem', 'Processmaker/Model/UserIds', 'Processmaker/Model/UserItem', 'Processmaker/Model/UserUpdateItem', 'Processmaker/PMIO/ProcessmakerApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./Model/BpmnFile'), require('./Model/BpmnFileAttributes'), require('./Model/BpmnImportItem'), require('./Model/Client'), require('./Model/ClientAttributes'), require('./Model/ClientCollection'), require('./Model/ClientCreateItem'), require('./Model/ClientItem'), require('./Model/ClientUpdateItem'), require('./Model/DataModel'), require('./Model/DataModelAttributes'), require('./Model/DataModelItem'), require('./Model/DataModelItem1'), require('./Model/DataModelItemAttributes'), require('./Model/Error'), require('./Model/ErrorArray'), require('./Model/Event'), require('./Model/EventAttributes'), require('./Model/EventCollection'), require('./Model/EventConnector'), require('./Model/EventConnector1'), require('./Model/EventConnectorAttributes'), require('./Model/EventConnectorCreateItem'), require('./Model/EventConnectorUpdateItem'), require('./Model/EventConnectorsCollection'), require('./Model/EventCreateItem'), require('./Model/EventItem'), require('./Model/EventUpdateItem'), require('./Model/Flow'), require('./Model/FlowAttributes'), require('./Model/FlowCollection'), require('./Model/FlowCreateItem'), require('./Model/FlowItem'), require('./Model/FlowUpdateItem'), require('./Model/Gateway'), require('./Model/GatewayAttributes'), require('./Model/GatewayCollection'), require('./Model/GatewayCreateItem'), require('./Model/GatewayItem'), require('./Model/GatewayUpdateItem'), require('./Model/Group'), require('./Model/GroupAddUsersItem'), require('./Model/GroupAttributes'), require('./Model/GroupCollection'), require('./Model/GroupCreateItem'), require('./Model/GroupIds'), require('./Model/GroupItem'), require('./Model/GroupRemoveUsersItem'), require('./Model/GroupSyncUsersItem'), require('./Model/GroupUpdateItem'), require('./Model/InlineResponse200'), require('./Model/InputOutput'), require('./Model/InputOutputAttributes'), require('./Model/InputOutputCollection'), require('./Model/InputOutputCreateItem'), require('./Model/InputOutputItem'), require('./Model/InputOutputUpdateItem'), require('./Model/Instance'), require('./Model/InstanceAttributes'), require('./Model/InstanceCollection'), require('./Model/InstanceCreateItem'), require('./Model/InstanceItem'), require('./Model/InstanceUpdateItem'), require('./Model/Meta'), require('./Model/MetaLog'), require('./Model/Pagination'), require('./Model/PaginationLinks'), require('./Model/Process'), require('./Model/ProcessAttributes'), require('./Model/ProcessCollection'), require('./Model/ProcessCollection1'), require('./Model/ProcessCreateItem'), require('./Model/ProcessItem'), require('./Model/ProcessUpdateItem'), require('./Model/ResultSuccess'), require('./Model/ResultSuccessMeta'), require('./Model/Task'), require('./Model/TaskAddGroupsItem'), require('./Model/TaskAttributes'), require('./Model/TaskCollection'), require('./Model/TaskConnector'), require('./Model/TaskConnector1'), require('./Model/TaskConnectorAttributes'), require('./Model/TaskConnectorCreateItem'), require('./Model/TaskConnectorUpdateItem'), require('./Model/TaskConnectorsCollection'), require('./Model/TaskCreateItem'), require('./Model/TaskInstance'), require('./Model/TaskInstanceAttributes'), require('./Model/TaskInstanceCollection'), require('./Model/TaskInstanceUpdateItem'), require('./Model/TaskItem'), require('./Model/TaskRemoveGroupsItem'), require('./Model/TaskSyncGroupsItem'), require('./Model/TaskUpdateItem'), require('./Model/TriggerEventCreateItem'), require('./Model/User'), require('./Model/UserAttributes'), require('./Model/UserCollection'), require('./Model/UserCreateItem'), require('./Model/UserIds'), require('./Model/UserItem'), require('./Model/UserUpdateItem'), require('./PMIO/ProcessmakerApi'));
  }
}(function(ApiClient, BpmnFile, BpmnFileAttributes, BpmnImportItem, Client, ClientAttributes, ClientCollection, ClientCreateItem, ClientItem, ClientUpdateItem, DataModel, DataModelAttributes, DataModelItem, DataModelItem1, DataModelItemAttributes, Error, ErrorArray, Event, EventAttributes, EventCollection, EventConnector, EventConnector1, EventConnectorAttributes, EventConnectorCreateItem, EventConnectorUpdateItem, EventConnectorsCollection, EventCreateItem, EventItem, EventUpdateItem, Flow, FlowAttributes, FlowCollection, FlowCreateItem, FlowItem, FlowUpdateItem, Gateway, GatewayAttributes, GatewayCollection, GatewayCreateItem, GatewayItem, GatewayUpdateItem, Group, GroupAddUsersItem, GroupAttributes, GroupCollection, GroupCreateItem, GroupIds, GroupItem, GroupRemoveUsersItem, GroupSyncUsersItem, GroupUpdateItem, InlineResponse200, InputOutput, InputOutputAttributes, InputOutputCollection, InputOutputCreateItem, InputOutputItem, InputOutputUpdateItem, Instance, InstanceAttributes, InstanceCollection, InstanceCreateItem, InstanceItem, InstanceUpdateItem, Meta, MetaLog, Pagination, PaginationLinks, Process, ProcessAttributes, ProcessCollection, ProcessCollection1, ProcessCreateItem, ProcessItem, ProcessUpdateItem, ResultSuccess, ResultSuccessMeta, Task, TaskAddGroupsItem, TaskAttributes, TaskCollection, TaskConnector, TaskConnector1, TaskConnectorAttributes, TaskConnectorCreateItem, TaskConnectorUpdateItem, TaskConnectorsCollection, TaskCreateItem, TaskInstance, TaskInstanceAttributes, TaskInstanceCollection, TaskInstanceUpdateItem, TaskItem, TaskRemoveGroupsItem, TaskSyncGroupsItem, TaskUpdateItem, TriggerEventCreateItem, User, UserAttributes, UserCollection, UserCreateItem, UserIds, UserItem, UserUpdateItem, ProcessmakerApi) {
  'use strict';

  /**
   * This_ProcessMaker_IO_API_provides_access_to_a_BPMN_2_0_compliant_workflow_engine_api_that_is_designed_to_be_used_as_a_microservice_to_support_enterprise_cloud_applications_The_current_Alpha_1_0_version_supports_most_of_the_descriptive_class_of_the_BPMN_2_0_specification_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var PMIO = require('Processmaker/index'); // See note below*.
   * var xxxSvc = new PMIO.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new PMIO.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['Processmaker/index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new PMIO.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new PMIO.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module Processmaker/index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:Processmaker/ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The BpmnFile model constructor.
     * @property {module:Processmaker/Model/BpmnFile}
     */
    BpmnFile: BpmnFile,
    /**
     * The BpmnFileAttributes model constructor.
     * @property {module:Processmaker/Model/BpmnFileAttributes}
     */
    BpmnFileAttributes: BpmnFileAttributes,
    /**
     * The BpmnImportItem model constructor.
     * @property {module:Processmaker/Model/BpmnImportItem}
     */
    BpmnImportItem: BpmnImportItem,
    /**
     * The Client model constructor.
     * @property {module:Processmaker/Model/Client}
     */
    Client: Client,
    /**
     * The ClientAttributes model constructor.
     * @property {module:Processmaker/Model/ClientAttributes}
     */
    ClientAttributes: ClientAttributes,
    /**
     * The ClientCollection model constructor.
     * @property {module:Processmaker/Model/ClientCollection}
     */
    ClientCollection: ClientCollection,
    /**
     * The ClientCreateItem model constructor.
     * @property {module:Processmaker/Model/ClientCreateItem}
     */
    ClientCreateItem: ClientCreateItem,
    /**
     * The ClientItem model constructor.
     * @property {module:Processmaker/Model/ClientItem}
     */
    ClientItem: ClientItem,
    /**
     * The ClientUpdateItem model constructor.
     * @property {module:Processmaker/Model/ClientUpdateItem}
     */
    ClientUpdateItem: ClientUpdateItem,
    /**
     * The DataModel model constructor.
     * @property {module:Processmaker/Model/DataModel}
     */
    DataModel: DataModel,
    /**
     * The DataModelAttributes model constructor.
     * @property {module:Processmaker/Model/DataModelAttributes}
     */
    DataModelAttributes: DataModelAttributes,
    /**
     * The DataModelItem model constructor.
     * @property {module:Processmaker/Model/DataModelItem}
     */
    DataModelItem: DataModelItem,
    /**
     * The DataModelItem1 model constructor.
     * @property {module:Processmaker/Model/DataModelItem1}
     */
    DataModelItem1: DataModelItem1,
    /**
     * The DataModelItemAttributes model constructor.
     * @property {module:Processmaker/Model/DataModelItemAttributes}
     */
    DataModelItemAttributes: DataModelItemAttributes,
    /**
     * The Error model constructor.
     * @property {module:Processmaker/Model/Error}
     */
    Error: Error,
    /**
     * The ErrorArray model constructor.
     * @property {module:Processmaker/Model/ErrorArray}
     */
    ErrorArray: ErrorArray,
    /**
     * The Event model constructor.
     * @property {module:Processmaker/Model/Event}
     */
    Event: Event,
    /**
     * The EventAttributes model constructor.
     * @property {module:Processmaker/Model/EventAttributes}
     */
    EventAttributes: EventAttributes,
    /**
     * The EventCollection model constructor.
     * @property {module:Processmaker/Model/EventCollection}
     */
    EventCollection: EventCollection,
    /**
     * The EventConnector model constructor.
     * @property {module:Processmaker/Model/EventConnector}
     */
    EventConnector: EventConnector,
    /**
     * The EventConnector1 model constructor.
     * @property {module:Processmaker/Model/EventConnector1}
     */
    EventConnector1: EventConnector1,
    /**
     * The EventConnectorAttributes model constructor.
     * @property {module:Processmaker/Model/EventConnectorAttributes}
     */
    EventConnectorAttributes: EventConnectorAttributes,
    /**
     * The EventConnectorCreateItem model constructor.
     * @property {module:Processmaker/Model/EventConnectorCreateItem}
     */
    EventConnectorCreateItem: EventConnectorCreateItem,
    /**
     * The EventConnectorUpdateItem model constructor.
     * @property {module:Processmaker/Model/EventConnectorUpdateItem}
     */
    EventConnectorUpdateItem: EventConnectorUpdateItem,
    /**
     * The EventConnectorsCollection model constructor.
     * @property {module:Processmaker/Model/EventConnectorsCollection}
     */
    EventConnectorsCollection: EventConnectorsCollection,
    /**
     * The EventCreateItem model constructor.
     * @property {module:Processmaker/Model/EventCreateItem}
     */
    EventCreateItem: EventCreateItem,
    /**
     * The EventItem model constructor.
     * @property {module:Processmaker/Model/EventItem}
     */
    EventItem: EventItem,
    /**
     * The EventUpdateItem model constructor.
     * @property {module:Processmaker/Model/EventUpdateItem}
     */
    EventUpdateItem: EventUpdateItem,
    /**
     * The Flow model constructor.
     * @property {module:Processmaker/Model/Flow}
     */
    Flow: Flow,
    /**
     * The FlowAttributes model constructor.
     * @property {module:Processmaker/Model/FlowAttributes}
     */
    FlowAttributes: FlowAttributes,
    /**
     * The FlowCollection model constructor.
     * @property {module:Processmaker/Model/FlowCollection}
     */
    FlowCollection: FlowCollection,
    /**
     * The FlowCreateItem model constructor.
     * @property {module:Processmaker/Model/FlowCreateItem}
     */
    FlowCreateItem: FlowCreateItem,
    /**
     * The FlowItem model constructor.
     * @property {module:Processmaker/Model/FlowItem}
     */
    FlowItem: FlowItem,
    /**
     * The FlowUpdateItem model constructor.
     * @property {module:Processmaker/Model/FlowUpdateItem}
     */
    FlowUpdateItem: FlowUpdateItem,
    /**
     * The Gateway model constructor.
     * @property {module:Processmaker/Model/Gateway}
     */
    Gateway: Gateway,
    /**
     * The GatewayAttributes model constructor.
     * @property {module:Processmaker/Model/GatewayAttributes}
     */
    GatewayAttributes: GatewayAttributes,
    /**
     * The GatewayCollection model constructor.
     * @property {module:Processmaker/Model/GatewayCollection}
     */
    GatewayCollection: GatewayCollection,
    /**
     * The GatewayCreateItem model constructor.
     * @property {module:Processmaker/Model/GatewayCreateItem}
     */
    GatewayCreateItem: GatewayCreateItem,
    /**
     * The GatewayItem model constructor.
     * @property {module:Processmaker/Model/GatewayItem}
     */
    GatewayItem: GatewayItem,
    /**
     * The GatewayUpdateItem model constructor.
     * @property {module:Processmaker/Model/GatewayUpdateItem}
     */
    GatewayUpdateItem: GatewayUpdateItem,
    /**
     * The Group model constructor.
     * @property {module:Processmaker/Model/Group}
     */
    Group: Group,
    /**
     * The GroupAddUsersItem model constructor.
     * @property {module:Processmaker/Model/GroupAddUsersItem}
     */
    GroupAddUsersItem: GroupAddUsersItem,
    /**
     * The GroupAttributes model constructor.
     * @property {module:Processmaker/Model/GroupAttributes}
     */
    GroupAttributes: GroupAttributes,
    /**
     * The GroupCollection model constructor.
     * @property {module:Processmaker/Model/GroupCollection}
     */
    GroupCollection: GroupCollection,
    /**
     * The GroupCreateItem model constructor.
     * @property {module:Processmaker/Model/GroupCreateItem}
     */
    GroupCreateItem: GroupCreateItem,
    /**
     * The GroupIds model constructor.
     * @property {module:Processmaker/Model/GroupIds}
     */
    GroupIds: GroupIds,
    /**
     * The GroupItem model constructor.
     * @property {module:Processmaker/Model/GroupItem}
     */
    GroupItem: GroupItem,
    /**
     * The GroupRemoveUsersItem model constructor.
     * @property {module:Processmaker/Model/GroupRemoveUsersItem}
     */
    GroupRemoveUsersItem: GroupRemoveUsersItem,
    /**
     * The GroupSyncUsersItem model constructor.
     * @property {module:Processmaker/Model/GroupSyncUsersItem}
     */
    GroupSyncUsersItem: GroupSyncUsersItem,
    /**
     * The GroupUpdateItem model constructor.
     * @property {module:Processmaker/Model/GroupUpdateItem}
     */
    GroupUpdateItem: GroupUpdateItem,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:Processmaker/Model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The InputOutput model constructor.
     * @property {module:Processmaker/Model/InputOutput}
     */
    InputOutput: InputOutput,
    /**
     * The InputOutputAttributes model constructor.
     * @property {module:Processmaker/Model/InputOutputAttributes}
     */
    InputOutputAttributes: InputOutputAttributes,
    /**
     * The InputOutputCollection model constructor.
     * @property {module:Processmaker/Model/InputOutputCollection}
     */
    InputOutputCollection: InputOutputCollection,
    /**
     * The InputOutputCreateItem model constructor.
     * @property {module:Processmaker/Model/InputOutputCreateItem}
     */
    InputOutputCreateItem: InputOutputCreateItem,
    /**
     * The InputOutputItem model constructor.
     * @property {module:Processmaker/Model/InputOutputItem}
     */
    InputOutputItem: InputOutputItem,
    /**
     * The InputOutputUpdateItem model constructor.
     * @property {module:Processmaker/Model/InputOutputUpdateItem}
     */
    InputOutputUpdateItem: InputOutputUpdateItem,
    /**
     * The Instance model constructor.
     * @property {module:Processmaker/Model/Instance}
     */
    Instance: Instance,
    /**
     * The InstanceAttributes model constructor.
     * @property {module:Processmaker/Model/InstanceAttributes}
     */
    InstanceAttributes: InstanceAttributes,
    /**
     * The InstanceCollection model constructor.
     * @property {module:Processmaker/Model/InstanceCollection}
     */
    InstanceCollection: InstanceCollection,
    /**
     * The InstanceCreateItem model constructor.
     * @property {module:Processmaker/Model/InstanceCreateItem}
     */
    InstanceCreateItem: InstanceCreateItem,
    /**
     * The InstanceItem model constructor.
     * @property {module:Processmaker/Model/InstanceItem}
     */
    InstanceItem: InstanceItem,
    /**
     * The InstanceUpdateItem model constructor.
     * @property {module:Processmaker/Model/InstanceUpdateItem}
     */
    InstanceUpdateItem: InstanceUpdateItem,
    /**
     * The Meta model constructor.
     * @property {module:Processmaker/Model/Meta}
     */
    Meta: Meta,
    /**
     * The MetaLog model constructor.
     * @property {module:Processmaker/Model/MetaLog}
     */
    MetaLog: MetaLog,
    /**
     * The Pagination model constructor.
     * @property {module:Processmaker/Model/Pagination}
     */
    Pagination: Pagination,
    /**
     * The PaginationLinks model constructor.
     * @property {module:Processmaker/Model/PaginationLinks}
     */
    PaginationLinks: PaginationLinks,
    /**
     * The Process model constructor.
     * @property {module:Processmaker/Model/Process}
     */
    Process: Process,
    /**
     * The ProcessAttributes model constructor.
     * @property {module:Processmaker/Model/ProcessAttributes}
     */
    ProcessAttributes: ProcessAttributes,
    /**
     * The ProcessCollection model constructor.
     * @property {module:Processmaker/Model/ProcessCollection}
     */
    ProcessCollection: ProcessCollection,
    /**
     * The ProcessCollection1 model constructor.
     * @property {module:Processmaker/Model/ProcessCollection1}
     */
    ProcessCollection1: ProcessCollection1,
    /**
     * The ProcessCreateItem model constructor.
     * @property {module:Processmaker/Model/ProcessCreateItem}
     */
    ProcessCreateItem: ProcessCreateItem,
    /**
     * The ProcessItem model constructor.
     * @property {module:Processmaker/Model/ProcessItem}
     */
    ProcessItem: ProcessItem,
    /**
     * The ProcessUpdateItem model constructor.
     * @property {module:Processmaker/Model/ProcessUpdateItem}
     */
    ProcessUpdateItem: ProcessUpdateItem,
    /**
     * The ResultSuccess model constructor.
     * @property {module:Processmaker/Model/ResultSuccess}
     */
    ResultSuccess: ResultSuccess,
    /**
     * The ResultSuccessMeta model constructor.
     * @property {module:Processmaker/Model/ResultSuccessMeta}
     */
    ResultSuccessMeta: ResultSuccessMeta,
    /**
     * The Task model constructor.
     * @property {module:Processmaker/Model/Task}
     */
    Task: Task,
    /**
     * The TaskAddGroupsItem model constructor.
     * @property {module:Processmaker/Model/TaskAddGroupsItem}
     */
    TaskAddGroupsItem: TaskAddGroupsItem,
    /**
     * The TaskAttributes model constructor.
     * @property {module:Processmaker/Model/TaskAttributes}
     */
    TaskAttributes: TaskAttributes,
    /**
     * The TaskCollection model constructor.
     * @property {module:Processmaker/Model/TaskCollection}
     */
    TaskCollection: TaskCollection,
    /**
     * The TaskConnector model constructor.
     * @property {module:Processmaker/Model/TaskConnector}
     */
    TaskConnector: TaskConnector,
    /**
     * The TaskConnector1 model constructor.
     * @property {module:Processmaker/Model/TaskConnector1}
     */
    TaskConnector1: TaskConnector1,
    /**
     * The TaskConnectorAttributes model constructor.
     * @property {module:Processmaker/Model/TaskConnectorAttributes}
     */
    TaskConnectorAttributes: TaskConnectorAttributes,
    /**
     * The TaskConnectorCreateItem model constructor.
     * @property {module:Processmaker/Model/TaskConnectorCreateItem}
     */
    TaskConnectorCreateItem: TaskConnectorCreateItem,
    /**
     * The TaskConnectorUpdateItem model constructor.
     * @property {module:Processmaker/Model/TaskConnectorUpdateItem}
     */
    TaskConnectorUpdateItem: TaskConnectorUpdateItem,
    /**
     * The TaskConnectorsCollection model constructor.
     * @property {module:Processmaker/Model/TaskConnectorsCollection}
     */
    TaskConnectorsCollection: TaskConnectorsCollection,
    /**
     * The TaskCreateItem model constructor.
     * @property {module:Processmaker/Model/TaskCreateItem}
     */
    TaskCreateItem: TaskCreateItem,
    /**
     * The TaskInstance model constructor.
     * @property {module:Processmaker/Model/TaskInstance}
     */
    TaskInstance: TaskInstance,
    /**
     * The TaskInstanceAttributes model constructor.
     * @property {module:Processmaker/Model/TaskInstanceAttributes}
     */
    TaskInstanceAttributes: TaskInstanceAttributes,
    /**
     * The TaskInstanceCollection model constructor.
     * @property {module:Processmaker/Model/TaskInstanceCollection}
     */
    TaskInstanceCollection: TaskInstanceCollection,
    /**
     * The TaskInstanceUpdateItem model constructor.
     * @property {module:Processmaker/Model/TaskInstanceUpdateItem}
     */
    TaskInstanceUpdateItem: TaskInstanceUpdateItem,
    /**
     * The TaskItem model constructor.
     * @property {module:Processmaker/Model/TaskItem}
     */
    TaskItem: TaskItem,
    /**
     * The TaskRemoveGroupsItem model constructor.
     * @property {module:Processmaker/Model/TaskRemoveGroupsItem}
     */
    TaskRemoveGroupsItem: TaskRemoveGroupsItem,
    /**
     * The TaskSyncGroupsItem model constructor.
     * @property {module:Processmaker/Model/TaskSyncGroupsItem}
     */
    TaskSyncGroupsItem: TaskSyncGroupsItem,
    /**
     * The TaskUpdateItem model constructor.
     * @property {module:Processmaker/Model/TaskUpdateItem}
     */
    TaskUpdateItem: TaskUpdateItem,
    /**
     * The TriggerEventCreateItem model constructor.
     * @property {module:Processmaker/Model/TriggerEventCreateItem}
     */
    TriggerEventCreateItem: TriggerEventCreateItem,
    /**
     * The User model constructor.
     * @property {module:Processmaker/Model/User}
     */
    User: User,
    /**
     * The UserAttributes model constructor.
     * @property {module:Processmaker/Model/UserAttributes}
     */
    UserAttributes: UserAttributes,
    /**
     * The UserCollection model constructor.
     * @property {module:Processmaker/Model/UserCollection}
     */
    UserCollection: UserCollection,
    /**
     * The UserCreateItem model constructor.
     * @property {module:Processmaker/Model/UserCreateItem}
     */
    UserCreateItem: UserCreateItem,
    /**
     * The UserIds model constructor.
     * @property {module:Processmaker/Model/UserIds}
     */
    UserIds: UserIds,
    /**
     * The UserItem model constructor.
     * @property {module:Processmaker/Model/UserItem}
     */
    UserItem: UserItem,
    /**
     * The UserUpdateItem model constructor.
     * @property {module:Processmaker/Model/UserUpdateItem}
     */
    UserUpdateItem: UserUpdateItem,
    /**
     * The ProcessmakerApi service constructor.
     * @property {module:Processmaker/PMIO/ProcessmakerApi}
     */
    ProcessmakerApi: ProcessmakerApi
  };

  return exports;
}));