/**
 * @preserve
 * kinvey-html5-sdk v3.8.1
 * Kinvey JavaScript SDK for HTML5 applications.
 * http://www.kinvey.com
 *
 * Copyright (c) 2016, Kinvey.
 * All rights reserved.
 *
 * Released under the Apache-2.0 license.
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Kinvey"] = factory();
	else
		root["Kinvey"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _export = __webpack_require__(1);

	var _identity = __webpack_require__(321);

	var _kinvey = __webpack_require__(340);

	var _middleware = __webpack_require__(347);

	var _popup = __webpack_require__(367);

	var _popup2 = _interopRequireDefault(_popup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Setup racks
	_export.CacheRack.useCacheMiddleware(new _middleware.CacheMiddleware());
	_export.NetworkRack.useHttpMiddleware(new _middleware.HttpMiddleware());

	// Setup popup
	_identity.MobileIdentityConnect.usePopupClass(_popup2.default);

	// Export
	module.exports = _kinvey.Kinvey;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.User = exports.SyncOperation = exports.Storage = exports.StatusCode = exports.SocialIdentity = exports.SerializeMiddleware = exports.Response = exports.RequestMethod = exports.Request = exports.Rack = exports.Query = exports.Properties = exports.ParseMiddleware = exports.NetworkRequest = exports.NetworkRack = exports.Middleware = exports.Metadata = exports.MemoryAdapter = exports.KinveyResponse = exports.KinveyRequest = exports.Kinvey = exports.HttpMiddleware = exports.Headers = exports.Files = exports.DeltaFetchRequest = exports.DataStoreType = exports.DataStore = exports.CustomEndpoint = exports.Client = exports.CacheRequest = exports.CacheRack = exports.CacheMiddleware = exports.AuthType = exports.AuthorizationGrant = exports.Group = exports.Aggregation = exports.Acl = undefined;

	var _errors = __webpack_require__(2);

	Object.keys(_errors).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _errors[key];
	    }
	  });
	});

	var _utils = __webpack_require__(40);

	Object.keys(_utils).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _utils[key];
	    }
	  });
	});

	var _datastore = __webpack_require__(139);

	var _datastore2 = _interopRequireDefault(_datastore);

	var _entity = __webpack_require__(328);

	var _identity = __webpack_require__(321);

	var _request = __webpack_require__(244);

	var _request2 = _interopRequireDefault(_request);

	var _aggregation = __webpack_require__(286);

	var _aggregation2 = _interopRequireDefault(_aggregation);

	var _client = __webpack_require__(288);

	var _client2 = _interopRequireDefault(_client);

	var _endpoint = __webpack_require__(338);

	var _endpoint2 = _interopRequireDefault(_endpoint);

	var _kinvey = __webpack_require__(339);

	var _query = __webpack_require__(275);

	var _query2 = _interopRequireDefault(_query);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Files = new _datastore.FileStore();

	exports.Acl = _entity.Acl;
	exports.Aggregation = _aggregation2.default;
	exports.Group = _aggregation2.default;
	exports.AuthorizationGrant = _identity.AuthorizationGrant;
	exports.AuthType = _request.AuthType;
	exports.CacheMiddleware = _request.CacheMiddleware;
	exports.CacheRack = _request.CacheRack;
	exports.CacheRequest = _request.CacheRequest;
	exports.Client = _client2.default;
	exports.CustomEndpoint = _endpoint2.default;
	exports.DataStore = _datastore2.default;
	exports.DataStoreType = _datastore.DataStoreType;
	exports.DeltaFetchRequest = _request.DeltaFetchRequest;
	exports.Files = Files;
	exports.Headers = _request.Headers;
	exports.HttpMiddleware = _request.HttpMiddleware;
	exports.Kinvey = _kinvey.Kinvey;
	exports.KinveyRequest = _request.KinveyRequest;
	exports.KinveyResponse = _request.KinveyResponse;
	exports.MemoryAdapter = _request.MemoryAdapter;
	exports.Metadata = _entity.Metadata;
	exports.Middleware = _request.Middleware;
	exports.NetworkRack = _request.NetworkRack;
	exports.NetworkRequest = _request.NetworkRequest;
	exports.ParseMiddleware = _request.ParseMiddleware;
	exports.Properties = _request.Properties;
	exports.Query = _query2.default;
	exports.Rack = _request.Rack;
	exports.Request = _request2.default;
	exports.RequestMethod = _request.RequestMethod;
	exports.Response = _request.Response;
	exports.SerializeMiddleware = _request.SerializeMiddleware;
	exports.SocialIdentity = _identity.SocialIdentity;
	exports.StatusCode = _request.StatusCode;
	exports.Storage = _request.Storage;
	exports.SyncOperation = _datastore.SyncOperation;
	exports.User = _entity.User;
	exports.default = _kinvey.Kinvey;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.WritesToCollectionDisallowedError = exports.UserAlreadyExistsError = exports.TimeoutError = exports.SyncError = exports.StaleRequestError = exports.ServerError = exports.QueryError = exports.PopupError = exports.ParameterValueOutOfRangeError = exports.NotFoundError = exports.NoResponseError = exports.NoActiveUserError = exports.NetworkConnectionError = exports.MobileIdentityConnectError = exports.MissingRequestParameterError = exports.MissingRequestHeaderError = exports.MissingQueryError = exports.KinveyError = exports.KinveyInternalErrorStop = exports.KinveyInternalErrorRetry = exports.JSONParseError = exports.InvalidQuerySyntaxError = exports.InvalidIdentifierError = exports.InvalidCredentialsError = exports.InsufficientCredentialsError = exports.IndirectCollectionAccessDisallowedError = exports.IncompleteRequestBodyError = exports.FeatureUnavailableError = exports.DuplicateEndUsersError = exports.CORSDisabledError = exports.BLError = exports.BaseError = exports.BadRequestError = exports.AppProblemError = exports.APIVersionNotImplementedError = exports.APIVersionNotAvailableError = exports.ActiveUserError = undefined;

	var _activeUser = __webpack_require__(3);

	var _activeUser2 = _interopRequireDefault(_activeUser);

	var _apiVersionNotAvailable = __webpack_require__(5);

	var _apiVersionNotAvailable2 = _interopRequireDefault(_apiVersionNotAvailable);

	var _apiVersionNotImplemented = __webpack_require__(6);

	var _apiVersionNotImplemented2 = _interopRequireDefault(_apiVersionNotImplemented);

	var _appProblem = __webpack_require__(7);

	var _appProblem2 = _interopRequireDefault(_appProblem);

	var _badRequest = __webpack_require__(8);

	var _badRequest2 = _interopRequireDefault(_badRequest);

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	var _bl = __webpack_require__(9);

	var _bl2 = _interopRequireDefault(_bl);

	var _corsDisabled = __webpack_require__(10);

	var _corsDisabled2 = _interopRequireDefault(_corsDisabled);

	var _duplicateEndUsers = __webpack_require__(11);

	var _duplicateEndUsers2 = _interopRequireDefault(_duplicateEndUsers);

	var _featureUnavailable = __webpack_require__(12);

	var _featureUnavailable2 = _interopRequireDefault(_featureUnavailable);

	var _incompleteRequestBody = __webpack_require__(13);

	var _incompleteRequestBody2 = _interopRequireDefault(_incompleteRequestBody);

	var _indirectCollectionAccessDisallowed = __webpack_require__(14);

	var _indirectCollectionAccessDisallowed2 = _interopRequireDefault(_indirectCollectionAccessDisallowed);

	var _insufficientCredentials = __webpack_require__(15);

	var _insufficientCredentials2 = _interopRequireDefault(_insufficientCredentials);

	var _invalidCredentials = __webpack_require__(16);

	var _invalidCredentials2 = _interopRequireDefault(_invalidCredentials);

	var _invalidIdentifier = __webpack_require__(17);

	var _invalidIdentifier2 = _interopRequireDefault(_invalidIdentifier);

	var _invalidQuerySyntax = __webpack_require__(18);

	var _invalidQuerySyntax2 = _interopRequireDefault(_invalidQuerySyntax);

	var _jsonParse = __webpack_require__(19);

	var _jsonParse2 = _interopRequireDefault(_jsonParse);

	var _kinveyInternalErrorRetry = __webpack_require__(20);

	var _kinveyInternalErrorRetry2 = _interopRequireDefault(_kinveyInternalErrorRetry);

	var _kinveyInternalErrorStop = __webpack_require__(21);

	var _kinveyInternalErrorStop2 = _interopRequireDefault(_kinveyInternalErrorStop);

	var _kinvey = __webpack_require__(22);

	var _kinvey2 = _interopRequireDefault(_kinvey);

	var _missingQuery = __webpack_require__(23);

	var _missingQuery2 = _interopRequireDefault(_missingQuery);

	var _missingRequestHeader = __webpack_require__(24);

	var _missingRequestHeader2 = _interopRequireDefault(_missingRequestHeader);

	var _missingRequestParameter = __webpack_require__(25);

	var _missingRequestParameter2 = _interopRequireDefault(_missingRequestParameter);

	var _mobileIdentityConnect = __webpack_require__(26);

	var _mobileIdentityConnect2 = _interopRequireDefault(_mobileIdentityConnect);

	var _networkConnection = __webpack_require__(27);

	var _networkConnection2 = _interopRequireDefault(_networkConnection);

	var _noActiveUser = __webpack_require__(28);

	var _noActiveUser2 = _interopRequireDefault(_noActiveUser);

	var _noResponse = __webpack_require__(29);

	var _noResponse2 = _interopRequireDefault(_noResponse);

	var _notFound = __webpack_require__(30);

	var _notFound2 = _interopRequireDefault(_notFound);

	var _parameterValueOutOfRange = __webpack_require__(31);

	var _parameterValueOutOfRange2 = _interopRequireDefault(_parameterValueOutOfRange);

	var _popup = __webpack_require__(32);

	var _popup2 = _interopRequireDefault(_popup);

	var _query = __webpack_require__(33);

	var _query2 = _interopRequireDefault(_query);

	var _server = __webpack_require__(34);

	var _server2 = _interopRequireDefault(_server);

	var _staleRequest = __webpack_require__(35);

	var _staleRequest2 = _interopRequireDefault(_staleRequest);

	var _sync = __webpack_require__(36);

	var _sync2 = _interopRequireDefault(_sync);

	var _timeout = __webpack_require__(37);

	var _timeout2 = _interopRequireDefault(_timeout);

	var _userAlreadyExists = __webpack_require__(38);

	var _userAlreadyExists2 = _interopRequireDefault(_userAlreadyExists);

	var _writesToCollectionDisallowed = __webpack_require__(39);

	var _writesToCollectionDisallowed2 = _interopRequireDefault(_writesToCollectionDisallowed);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.ActiveUserError = _activeUser2.default;
	exports.APIVersionNotAvailableError = _apiVersionNotAvailable2.default;
	exports.APIVersionNotImplementedError = _apiVersionNotImplemented2.default;
	exports.AppProblemError = _appProblem2.default;
	exports.BadRequestError = _badRequest2.default;
	exports.BaseError = _base2.default;
	exports.BLError = _bl2.default;
	exports.CORSDisabledError = _corsDisabled2.default;
	exports.DuplicateEndUsersError = _duplicateEndUsers2.default;
	exports.FeatureUnavailableError = _featureUnavailable2.default;
	exports.IncompleteRequestBodyError = _incompleteRequestBody2.default;
	exports.IndirectCollectionAccessDisallowedError = _indirectCollectionAccessDisallowed2.default;
	exports.InsufficientCredentialsError = _insufficientCredentials2.default;
	exports.InvalidCredentialsError = _invalidCredentials2.default;
	exports.InvalidIdentifierError = _invalidIdentifier2.default;
	exports.InvalidQuerySyntaxError = _invalidQuerySyntax2.default;
	exports.JSONParseError = _jsonParse2.default;
	exports.KinveyInternalErrorRetry = _kinveyInternalErrorRetry2.default;
	exports.KinveyInternalErrorStop = _kinveyInternalErrorStop2.default;
	exports.KinveyError = _kinvey2.default;
	exports.MissingQueryError = _missingQuery2.default;
	exports.MissingRequestHeaderError = _missingRequestHeader2.default;
	exports.MissingRequestParameterError = _missingRequestParameter2.default;
	exports.MobileIdentityConnectError = _mobileIdentityConnect2.default;
	exports.NetworkConnectionError = _networkConnection2.default;
	exports.NoActiveUserError = _noActiveUser2.default;
	exports.NoResponseError = _noResponse2.default;
	exports.NotFoundError = _notFound2.default;
	exports.ParameterValueOutOfRangeError = _parameterValueOutOfRange2.default;
	exports.PopupError = _popup2.default;
	exports.QueryError = _query2.default;
	exports.ServerError = _server2.default;
	exports.StaleRequestError = _staleRequest2.default;
	exports.SyncError = _sync2.default;
	exports.TimeoutError = _timeout2.default;
	exports.UserAlreadyExistsError = _userAlreadyExists2.default;
	exports.WritesToCollectionDisallowedError = _writesToCollectionDisallowed2.default;
	exports.default = _kinvey2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function ActiveUserError(message, debug, code, kinveyRequestId) {
	  this.name = 'ActiveUserError';
	  this.message = message || 'An active user already exists.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	ActiveUserError.prototype = Object.create(_base2.default.prototype);
	ActiveUserError.prototype.constructor = ActiveUserError;
	exports.default = ActiveUserError;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function BaseError(message, debug, code, kinveyRequestId) {
	  this.name = 'BaseError';
	  this.message = message || 'An error occurred.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	BaseError.prototype = Object.create(Error.prototype);
	BaseError.prototype.constructor = BaseError;
	exports.default = BaseError;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function APIVersionNotAvailableError(message, debug, code, kinveyRequestId) {
	  this.name = 'APIVersionNotAvailableError';
	  this.message = message || 'This API version is not available for your app.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	APIVersionNotAvailableError.prototype = Object.create(_base2.default.prototype);
	APIVersionNotAvailableError.prototype.constructor = APIVersionNotAvailableError;
	exports.default = APIVersionNotAvailableError;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function APIVersionNotImplementedError(message, debug, code, kinveyRequestId) {
	  this.name = 'APIVersionNotImplementedError';
	  this.message = message || 'This API version is not implemented.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	APIVersionNotImplementedError.prototype = Object.create(_base2.default.prototype);
	APIVersionNotImplementedError.prototype.constructor = APIVersionNotImplementedError;
	exports.default = APIVersionNotImplementedError;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function AppProblemError(message, debug, code, kinveyRequestId) {
	  this.name = 'AppProblemError';
	  this.message = message || 'There is a problem with this app backend that prevents execution of this operation. Please contact support@kinvey.com for assistance.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	AppProblemError.prototype = Object.create(_base2.default.prototype);
	AppProblemError.prototype.constructor = AppProblemError;
	exports.default = AppProblemError;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function BadRequestError(message, debug, code, kinveyRequestId) {
	  this.name = 'BadRequestError';
	  this.message = message || 'Unable to understand request.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	BadRequestError.prototype = Object.create(_base2.default.prototype);
	BadRequestError.prototype.constructor = BadRequestError;
	exports.default = BadRequestError;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function BLError(message, debug, code, kinveyRequestId) {
	  this.name = 'BLError';
	  this.message = message || 'The Business Logic script did not complete.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	BLError.prototype = Object.create(_base2.default.prototype);
	BLError.prototype.constructor = BLError;
	exports.default = BLError;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function CORSDisabledError(message, debug, code, kinveyRequestId) {
	  this.name = 'CORSDisabledError';
	  this.message = message || 'Cross Origin Support is disabled for this application.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	CORSDisabledError.prototype = Object.create(_base2.default.prototype);
	CORSDisabledError.prototype.constructor = CORSDisabledError;
	exports.default = CORSDisabledError;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function DuplicateEndUsersError(message, debug, code, kinveyRequestId) {
	  this.name = 'DuplicateEndUsersError';
	  this.message = message || 'More than one user registered with this username for this application.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	DuplicateEndUsersError.prototype = Object.create(_base2.default.prototype);
	DuplicateEndUsersError.prototype.constructor = DuplicateEndUsersError;
	exports.default = DuplicateEndUsersError;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function FeatureUnavailableError(message, debug, code, kinveyRequestId) {
	  this.name = 'FeatureUnavailableError';
	  this.message = message || 'Requested functionality is unavailable in this API version.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	FeatureUnavailableError.prototype = Object.create(_base2.default.prototype);
	FeatureUnavailableError.prototype.constructor = FeatureUnavailableError;
	exports.default = FeatureUnavailableError;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function IncompleteRequestBodyError(message, debug, code, kinveyRequestId) {
	  this.name = 'IncompleteRequestBodyError';
	  this.message = message || 'The request body is either missing or incomplete.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	IncompleteRequestBodyError.prototype = Object.create(_base2.default.prototype);
	IncompleteRequestBodyError.prototype.constructor = IncompleteRequestBodyError;
	exports.default = IncompleteRequestBodyError;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function IndirectCollectionAccessDisallowedError(message, debug, code, kinveyRequestId) {
	  this.name = 'IndirectCollectionAccessDisallowedError';
	  this.message = message || 'Please use the appropriate API to access this collection for this app backend.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	IndirectCollectionAccessDisallowedError.prototype = Object.create(_base2.default.prototype);
	IndirectCollectionAccessDisallowedError.prototype.constructor = IndirectCollectionAccessDisallowedError;
	exports.default = IndirectCollectionAccessDisallowedError;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function InsufficientCredentialsError(message, debug, code, kinveyRequestId) {
	  this.name = 'InsufficientCredentialsError';
	  this.message = message || 'The credentials used to authenticate this request are not authorized to run this operation. Please retry your request with appropriate credentials.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	InsufficientCredentialsError.prototype = Object.create(_base2.default.prototype);
	InsufficientCredentialsError.prototype.constructor = InsufficientCredentialsError;
	exports.default = InsufficientCredentialsError;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function InvalidCredentialsError(message, debug, code, kinveyRequestId) {
	  this.name = 'InvalidCredentialsError';
	  this.message = message || 'Invalid credentials. Please retry your request with correct credentials.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	InvalidCredentialsError.prototype = Object.create(_base2.default.prototype);
	InvalidCredentialsError.prototype.constructor = InvalidCredentialsError;
	exports.default = InvalidCredentialsError;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function InvalidIdentifierError(message, debug, code, kinveyRequestId) {
	  this.name = 'InvalidIdentifierError';
	  this.message = message || 'One of more identifier names in the request has an invalid format.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	InvalidIdentifierError.prototype = Object.create(_base2.default.prototype);
	InvalidIdentifierError.prototype.constructor = InvalidIdentifierError;
	exports.default = InvalidIdentifierError;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function InvalidQuerySyntaxError(message, debug, code, kinveyRequestId) {
	  this.name = 'InvalidQuerySyntaxError';
	  this.message = message || 'The query string in the request has an invalid syntax.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	InvalidQuerySyntaxError.prototype = Object.create(_base2.default.prototype);
	InvalidQuerySyntaxError.prototype.constructor = InvalidQuerySyntaxError;
	exports.default = InvalidQuerySyntaxError;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function JSONParseError(message, debug, code, kinveyRequestId) {
	  this.name = 'JSONParseError';
	  this.message = message || 'Unable to parse the JSON in the request.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	JSONParseError.prototype = Object.create(_base2.default.prototype);
	JSONParseError.prototype.constructor = JSONParseError;
	exports.default = JSONParseError;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function KinveyInternalErrorRetry(message, debug, code, kinveyRequestId) {
	  this.name = 'KinveyInternalErrorRetry';
	  this.message = message || 'The Kinvey server encountered an unexpected error. Please retry your request.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	KinveyInternalErrorRetry.prototype = Object.create(_base2.default.prototype);
	KinveyInternalErrorRetry.prototype.constructor = KinveyInternalErrorRetry;
	exports.default = KinveyInternalErrorRetry;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function KinveyInternalErrorStop(message, debug, code, kinveyRequestId) {
	  this.name = 'KinveyInternalErrorStop';
	  this.message = message || 'The Kinvey server encountered an unexpected error. Please contact support@kinvey.com for assistance.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	KinveyInternalErrorStop.prototype = Object.create(_base2.default.prototype);
	KinveyInternalErrorStop.prototype.constructor = KinveyInternalErrorStop;
	exports.default = KinveyInternalErrorStop;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function KinveyError(message, debug, code, kinveyRequestId) {
	  this.name = 'KinveyError';
	  this.message = message || 'An error occurred.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	KinveyError.prototype = Object.create(_base2.default.prototype);
	KinveyError.prototype.constructor = KinveyError;
	exports.default = KinveyError;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function MissingQueryError(message, debug, code, kinveyRequestId) {
	  this.name = 'MissingQueryError';
	  this.message = message || 'The request is missing a query string.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	MissingQueryError.prototype = Object.create(_base2.default.prototype);
	MissingQueryError.prototype.constructor = MissingQueryError;
	exports.default = MissingQueryError;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function MissingRequestHeaderError(message, debug, code, kinveyRequestId) {
	  this.name = 'MissingRequestHeaderError';
	  this.message = message || 'The request is missing a required header.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	MissingRequestHeaderError.prototype = Object.create(_base2.default.prototype);
	MissingRequestHeaderError.prototype.constructor = MissingRequestHeaderError;
	exports.default = MissingRequestHeaderError;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function MissingRequestParameterError(message, debug, code, kinveyRequestId) {
	  this.name = 'MissingRequestParameterError';
	  this.message = message || 'A required parameter is missing from the request.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	MissingRequestParameterError.prototype = Object.create(_base2.default.prototype);
	MissingRequestParameterError.prototype.constructor = MissingRequestParameterError;
	exports.default = MissingRequestParameterError;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function MobileIdentityConnectError(message, debug, code, kinveyRequestId) {
	  this.name = 'MobileIdentityConnectError';
	  this.message = message || 'An error has occurred with Mobile Identity Connect.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	MobileIdentityConnectError.prototype = Object.create(_base2.default.prototype);
	MobileIdentityConnectError.prototype.constructor = MobileIdentityConnectError;
	exports.default = MobileIdentityConnectError;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function NetworkConnectionError(message, debug, code, kinveyRequestId) {
	  this.name = 'NetworkConnectionError';
	  this.message = message || 'There was an error connecting to the network.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	NetworkConnectionError.prototype = Object.create(_base2.default.prototype);
	NetworkConnectionError.prototype.constructor = NetworkConnectionError;
	exports.default = NetworkConnectionError;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function NoActiveUserError(message, debug, code, kinveyRequestId) {
	  this.name = 'NoActiveUserError';
	  this.message = message || 'There is not an active user.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	NoActiveUserError.prototype = Object.create(_base2.default.prototype);
	NoActiveUserError.prototype.constructor = NoActiveUserError;
	exports.default = NoActiveUserError;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function NoResponseError(message, debug, code, kinveyRequestId) {
	  this.name = 'NoResponseError';
	  this.message = message || 'No response was provided.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	NoResponseError.prototype = Object.create(_base2.default.prototype);
	NoResponseError.prototype.constructor = NoResponseError;
	exports.default = NoResponseError;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function NotFoundError(message, debug, code, kinveyRequestId) {
	  this.name = 'NotFoundError';
	  this.message = message || 'The entity was not found.';
	  this.debug = debug || undefined;
	  this.code = code || 404;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	NotFoundError.prototype = Object.create(_base2.default.prototype);
	NotFoundError.prototype.constructor = NotFoundError;
	exports.default = NotFoundError;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function ParameterValueOutOfRangeError(message, debug, code, kinveyRequestId) {
	  this.name = 'ParameterValueOutOfRangeError';
	  this.message = message || 'The value specified for one of the request parameters is out of range.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	ParameterValueOutOfRangeError.prototype = Object.create(_base2.default.prototype);
	ParameterValueOutOfRangeError.prototype.constructor = ParameterValueOutOfRangeError;
	exports.default = ParameterValueOutOfRangeError;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function PopupError(message, debug, code, kinveyRequestId) {
	  this.name = 'PopupError';
	  this.message = message || 'Unable to open a popup on this platform.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	PopupError.prototype = Object.create(_base2.default.prototype);
	PopupError.prototype.constructor = PopupError;
	exports.default = PopupError;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function QueryError(message, debug, code, kinveyRequestId) {
	  this.name = 'QueryError';
	  this.message = message || 'An error occurred with the query.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	QueryError.prototype = Object.create(_base2.default.prototype);
	QueryError.prototype.constructor = QueryError;
	exports.default = QueryError;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function ServerError(message, debug, code, kinveyRequestId) {
	  this.name = 'ServerError';
	  this.message = message || 'An error occurred on the server.';
	  this.debug = debug || undefined;
	  this.code = code || 500;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	ServerError.prototype = Object.create(_base2.default.prototype);
	ServerError.prototype.constructor = ServerError;
	exports.default = ServerError;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function StaleRequestError(message, debug, code, kinveyRequestId) {
	  this.name = 'StaleRequestError';
	  this.message = message || 'The time window for this request has expired.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	StaleRequestError.prototype = Object.create(_base2.default.prototype);
	StaleRequestError.prototype.constructor = StaleRequestError;
	exports.default = StaleRequestError;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function SyncError(message, debug, code, kinveyRequestId) {
	  this.name = 'SyncError';
	  this.message = message || 'An error occurred during sync.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	SyncError.prototype = Object.create(_base2.default.prototype);
	SyncError.prototype.constructor = SyncError;
	exports.default = SyncError;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function TimeoutError(message, debug, code, kinveyRequestId) {
	  this.name = 'TimeoutError';
	  this.message = message || 'The request timed out.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	TimeoutError.prototype = Object.create(_base2.default.prototype);
	TimeoutError.prototype.constructor = TimeoutError;
	exports.default = TimeoutError;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function UserAlreadyExistsError(message, debug, code, kinveyRequestId) {
	  this.name = 'UserAlreadyExistsError';
	  this.message = message || 'This username is already taken. Please retry your request with a different username.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	UserAlreadyExistsError.prototype = Object.create(_base2.default.prototype);
	UserAlreadyExistsError.prototype.constructor = UserAlreadyExistsError;
	exports.default = UserAlreadyExistsError;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(4);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function WritesToCollectionDisallowedError(message, debug, code, kinveyRequestId) {
	  this.name = 'WritesToCollectionDisallowedError';
	  this.message = message || 'This collection is configured to disallow any modifications to an existing entity or creation of new entities.';
	  this.debug = debug || undefined;
	  this.code = code || undefined;
	  this.kinveyRequestId = kinveyRequestId || undefined;
	  this.stack = new Error().stack;
	}
	WritesToCollectionDisallowedError.prototype = Object.create(_base2.default.prototype);
	WritesToCollectionDisallowedError.prototype.constructor = WritesToCollectionDisallowedError;
	exports.default = WritesToCollectionDisallowedError;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.appendQuery = exports.randomString = exports.nested = exports.isDefined = exports.Queue = exports.Log = exports.KinveyObservable = undefined;

	var _log = __webpack_require__(41);

	var _log2 = _interopRequireDefault(_log);

	var _object = __webpack_require__(43);

	var _observable = __webpack_require__(46);

	var _observable2 = _interopRequireDefault(_observable);

	var _promise = __webpack_require__(64);

	var _string = __webpack_require__(65);

	var _url = __webpack_require__(66);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.KinveyObservable = _observable2.default;
	exports.Log = _log2.default;
	exports.Queue = _promise.Queue;
	exports.isDefined = _object.isDefined;
	exports.nested = _object.nested;
	exports.randomString = _string.randomString;
	exports.appendQuery = _url.appendQuery;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _loglevel = __webpack_require__(42);

	var _loglevel2 = _interopRequireDefault(_loglevel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_loglevel2.default.setDefaultLevel(_loglevel2.default.levels.SILENT);

	var originalFactory = _loglevel2.default.methodFactory;
	_loglevel2.default.methodFactory = function methodFactory(methodName, logLevel, loggerName) {
	  var rawMethod = originalFactory(methodName, logLevel, loggerName);

	  return function log(message) {
	    message = 'Kinvey: ' + message;

	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    if (args.length > 0) {
	      rawMethod(message, args);
	    } else {
	      rawMethod(message);
	    }
	  };
	};

	exports.default = _loglevel2.default;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	* loglevel - https://github.com/pimterry/loglevel
	*
	* Copyright (c) 2013 Tim Perry
	* Licensed under the MIT license.
	*/
	(function (root, definition) {
	    "use strict";
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module === 'object' && module.exports) {
	        module.exports = definition();
	    } else {
	        root.log = definition();
	    }
	}(this, function () {
	    "use strict";
	    var noop = function() {};
	    var undefinedType = "undefined";

	    function realMethod(methodName) {
	        if (typeof console === undefinedType) {
	            return false; // We can't build a real method without a console to log to
	        } else if (console[methodName] !== undefined) {
	            return bindMethod(console, methodName);
	        } else if (console.log !== undefined) {
	            return bindMethod(console, 'log');
	        } else {
	            return noop;
	        }
	    }

	    function bindMethod(obj, methodName) {
	        var method = obj[methodName];
	        if (typeof method.bind === 'function') {
	            return method.bind(obj);
	        } else {
	            try {
	                return Function.prototype.bind.call(method, obj);
	            } catch (e) {
	                // Missing bind shim or IE8 + Modernizr, fallback to wrapping
	                return function() {
	                    return Function.prototype.apply.apply(method, [obj, arguments]);
	                };
	            }
	        }
	    }

	    // these private functions always need `this` to be set properly

	    function enableLoggingWhenConsoleArrives(methodName, level, loggerName) {
	        return function () {
	            if (typeof console !== undefinedType) {
	                replaceLoggingMethods.call(this, level, loggerName);
	                this[methodName].apply(this, arguments);
	            }
	        };
	    }

	    function replaceLoggingMethods(level, loggerName) {
	        /*jshint validthis:true */
	        for (var i = 0; i < logMethods.length; i++) {
	            var methodName = logMethods[i];
	            this[methodName] = (i < level) ?
	                noop :
	                this.methodFactory(methodName, level, loggerName);
	        }
	    }

	    function defaultMethodFactory(methodName, level, loggerName) {
	        /*jshint validthis:true */
	        return realMethod(methodName) ||
	               enableLoggingWhenConsoleArrives.apply(this, arguments);
	    }

	    var logMethods = [
	        "trace",
	        "debug",
	        "info",
	        "warn",
	        "error"
	    ];

	    function Logger(name, defaultLevel, factory) {
	      var self = this;
	      var currentLevel;
	      var storageKey = "loglevel";
	      if (name) {
	        storageKey += ":" + name;
	      }

	      function persistLevelIfPossible(levelNum) {
	          var levelName = (logMethods[levelNum] || 'silent').toUpperCase();

	          // Use localStorage if available
	          try {
	              window.localStorage[storageKey] = levelName;
	              return;
	          } catch (ignore) {}

	          // Use session cookie as fallback
	          try {
	              window.document.cookie =
	                encodeURIComponent(storageKey) + "=" + levelName + ";";
	          } catch (ignore) {}
	      }

	      function getPersistedLevel() {
	          var storedLevel;

	          try {
	              storedLevel = window.localStorage[storageKey];
	          } catch (ignore) {}

	          if (typeof storedLevel === undefinedType) {
	              try {
	                  var cookie = window.document.cookie;
	                  var location = cookie.indexOf(
	                      encodeURIComponent(storageKey) + "=");
	                  if (location) {
	                      storedLevel = /^([^;]+)/.exec(cookie.slice(location))[1];
	                  }
	              } catch (ignore) {}
	          }

	          // If the stored level is not valid, treat it as if nothing was stored.
	          if (self.levels[storedLevel] === undefined) {
	              storedLevel = undefined;
	          }

	          return storedLevel;
	      }

	      /*
	       *
	       * Public API
	       *
	       */

	      self.levels = { "TRACE": 0, "DEBUG": 1, "INFO": 2, "WARN": 3,
	          "ERROR": 4, "SILENT": 5};

	      self.methodFactory = factory || defaultMethodFactory;

	      self.getLevel = function () {
	          return currentLevel;
	      };

	      self.setLevel = function (level, persist) {
	          if (typeof level === "string" && self.levels[level.toUpperCase()] !== undefined) {
	              level = self.levels[level.toUpperCase()];
	          }
	          if (typeof level === "number" && level >= 0 && level <= self.levels.SILENT) {
	              currentLevel = level;
	              if (persist !== false) {  // defaults to true
	                  persistLevelIfPossible(level);
	              }
	              replaceLoggingMethods.call(self, level, name);
	              if (typeof console === undefinedType && level < self.levels.SILENT) {
	                  return "No console available for logging";
	              }
	          } else {
	              throw "log.setLevel() called with invalid level: " + level;
	          }
	      };

	      self.setDefaultLevel = function (level) {
	          if (!getPersistedLevel()) {
	              self.setLevel(level, false);
	          }
	      };

	      self.enableAll = function(persist) {
	          self.setLevel(self.levels.TRACE, persist);
	      };

	      self.disableAll = function(persist) {
	          self.setLevel(self.levels.SILENT, persist);
	      };

	      // Initialize with the right level
	      var initialLevel = getPersistedLevel();
	      if (initialLevel == null) {
	          initialLevel = defaultLevel == null ? "WARN" : defaultLevel;
	      }
	      self.setLevel(initialLevel, false);
	    }

	    /*
	     *
	     * Package-level API
	     *
	     */

	    var defaultLogger = new Logger();

	    var _loggersByName = {};
	    defaultLogger.getLogger = function getLogger(name) {
	        if (typeof name !== "string" || name === "") {
	          throw new TypeError("You must supply a name when creating a logger.");
	        }

	        var logger = _loggersByName[name];
	        if (!logger) {
	          logger = _loggersByName[name] = new Logger(
	            name, defaultLogger.getLevel(), defaultLogger.methodFactory);
	        }
	        return logger;
	    };

	    // Grab the current global log variable in case of overwrite
	    var _log = (typeof window !== undefinedType) ? window.log : undefined;
	    defaultLogger.noConflict = function() {
	        if (typeof window !== undefinedType &&
	               window.log === defaultLogger) {
	            window.log = _log;
	        }

	        return defaultLogger;
	    };

	    return defaultLogger;
	}));


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isDefined = isDefined;
	exports.nested = nested;

	var _isNull = __webpack_require__(44);

	var _isNull2 = _interopRequireDefault(_isNull);

	var _isUndefined = __webpack_require__(45);

	var _isUndefined2 = _interopRequireDefault(_isUndefined);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isDefined(obj) {
	  return (0, _isUndefined2.default)(obj) === false && (0, _isNull2.default)(obj) === false;
	}

	function nested(obj, dotProperty, value) {
	  if (isDefined(dotProperty) === false) {
	    obj = value || obj;
	    return obj;
	  }

	  var parts = dotProperty.split('.');
	  var current = parts.shift();
	  while (current && obj) {
	    obj = obj[current];
	    current = parts.shift();
	  }

	  return value || obj;
	}

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
	 * @example
	 *
	 * _.isNull(null);
	 * // => true
	 *
	 * _.isNull(void 0);
	 * // => false
	 */
	function isNull(value) {
	  return value === null;
	}

	module.exports = isNull;


/***/ }),
/* 45 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is `undefined`.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	 * @example
	 *
	 * _.isUndefined(void 0);
	 * // => true
	 *
	 * _.isUndefined(null);
	 * // => false
	 */
	function isUndefined(value) {
	  return value === undefined;
	}

	module.exports = isUndefined;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _es6Promise = __webpack_require__(47);

	var _es6Promise2 = _interopRequireDefault(_es6Promise);

	var _Observable2 = __webpack_require__(50);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var KinveyObservable = function (_Observable) {
	  _inherits(KinveyObservable, _Observable);

	  function KinveyObservable() {
	    _classCallCheck(this, KinveyObservable);

	    return _possibleConstructorReturn(this, (KinveyObservable.__proto__ || Object.getPrototypeOf(KinveyObservable)).apply(this, arguments));
	  }

	  _createClass(KinveyObservable, [{
	    key: 'toPromise',
	    value: function toPromise() {
	      var _this2 = this;

	      return new _es6Promise2.default(function (resolve, reject) {
	        var value = void 0;
	        _this2.subscribe(function (v) {
	          value = v;
	        }, reject, function () {
	          resolve(value);
	        });
	      });
	    }
	  }], [{
	    key: 'create',
	    value: function create(subscriber) {
	      return new KinveyObservable(subscriber);
	    }
	  }]);

	  return KinveyObservable;
	}(_Observable2.Observable);

	exports.default = KinveyObservable;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	var require;/* WEBPACK VAR INJECTION */(function(process, global) {/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   4.1.0
	 */

	(function (global, factory) {
	     true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    (global.ES6Promise = factory());
	}(this, (function () { 'use strict';

	function objectOrFunction(x) {
	  return typeof x === 'function' || typeof x === 'object' && x !== null;
	}

	function isFunction(x) {
	  return typeof x === 'function';
	}

	var _isArray = undefined;
	if (!Array.isArray) {
	  _isArray = function (x) {
	    return Object.prototype.toString.call(x) === '[object Array]';
	  };
	} else {
	  _isArray = Array.isArray;
	}

	var isArray = _isArray;

	var len = 0;
	var vertxNext = undefined;
	var customSchedulerFn = undefined;

	var asap = function asap(callback, arg) {
	  queue[len] = callback;
	  queue[len + 1] = arg;
	  len += 2;
	  if (len === 2) {
	    // If len is 2, that means that we need to schedule an async flush.
	    // If additional callbacks are queued before the queue is flushed, they
	    // will be processed by this flush that we are scheduling.
	    if (customSchedulerFn) {
	      customSchedulerFn(flush);
	    } else {
	      scheduleFlush();
	    }
	  }
	};

	function setScheduler(scheduleFn) {
	  customSchedulerFn = scheduleFn;
	}

	function setAsap(asapFn) {
	  asap = asapFn;
	}

	var browserWindow = typeof window !== 'undefined' ? window : undefined;
	var browserGlobal = browserWindow || {};
	var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
	var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';

	// test for web worker but not in IE10
	var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

	// node
	function useNextTick() {
	  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	  // see https://github.com/cujojs/when/issues/410 for details
	  return function () {
	    return process.nextTick(flush);
	  };
	}

	// vertx
	function useVertxTimer() {
	  if (typeof vertxNext !== 'undefined') {
	    return function () {
	      vertxNext(flush);
	    };
	  }

	  return useSetTimeout();
	}

	function useMutationObserver() {
	  var iterations = 0;
	  var observer = new BrowserMutationObserver(flush);
	  var node = document.createTextNode('');
	  observer.observe(node, { characterData: true });

	  return function () {
	    node.data = iterations = ++iterations % 2;
	  };
	}

	// web worker
	function useMessageChannel() {
	  var channel = new MessageChannel();
	  channel.port1.onmessage = flush;
	  return function () {
	    return channel.port2.postMessage(0);
	  };
	}

	function useSetTimeout() {
	  // Store setTimeout reference so es6-promise will be unaffected by
	  // other code modifying setTimeout (like sinon.useFakeTimers())
	  var globalSetTimeout = setTimeout;
	  return function () {
	    return globalSetTimeout(flush, 1);
	  };
	}

	var queue = new Array(1000);
	function flush() {
	  for (var i = 0; i < len; i += 2) {
	    var callback = queue[i];
	    var arg = queue[i + 1];

	    callback(arg);

	    queue[i] = undefined;
	    queue[i + 1] = undefined;
	  }

	  len = 0;
	}

	function attemptVertx() {
	  try {
	    var r = require;
	    var vertx = __webpack_require__(49);
	    vertxNext = vertx.runOnLoop || vertx.runOnContext;
	    return useVertxTimer();
	  } catch (e) {
	    return useSetTimeout();
	  }
	}

	var scheduleFlush = undefined;
	// Decide what async method to use to triggering processing of queued callbacks:
	if (isNode) {
	  scheduleFlush = useNextTick();
	} else if (BrowserMutationObserver) {
	  scheduleFlush = useMutationObserver();
	} else if (isWorker) {
	  scheduleFlush = useMessageChannel();
	} else if (browserWindow === undefined && "function" === 'function') {
	  scheduleFlush = attemptVertx();
	} else {
	  scheduleFlush = useSetTimeout();
	}

	function then(onFulfillment, onRejection) {
	  var _arguments = arguments;

	  var parent = this;

	  var child = new this.constructor(noop);

	  if (child[PROMISE_ID] === undefined) {
	    makePromise(child);
	  }

	  var _state = parent._state;

	  if (_state) {
	    (function () {
	      var callback = _arguments[_state - 1];
	      asap(function () {
	        return invokeCallback(_state, child, callback, parent._result);
	      });
	    })();
	  } else {
	    subscribe(parent, child, onFulfillment, onRejection);
	  }

	  return child;
	}

	/**
	  `Promise.resolve` returns a promise that will become resolved with the
	  passed `value`. It is shorthand for the following:

	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    resolve(1);
	  });

	  promise.then(function(value){
	    // value === 1
	  });
	  ```

	  Instead of writing the above, your code now simply becomes the following:

	  ```javascript
	  let promise = Promise.resolve(1);

	  promise.then(function(value){
	    // value === 1
	  });
	  ```

	  @method resolve
	  @static
	  @param {Any} value value that the returned promise will be resolved with
	  Useful for tooling.
	  @return {Promise} a promise that will become fulfilled with the given
	  `value`
	*/
	function resolve(object) {
	  /*jshint validthis:true */
	  var Constructor = this;

	  if (object && typeof object === 'object' && object.constructor === Constructor) {
	    return object;
	  }

	  var promise = new Constructor(noop);
	  _resolve(promise, object);
	  return promise;
	}

	var PROMISE_ID = Math.random().toString(36).substring(16);

	function noop() {}

	var PENDING = void 0;
	var FULFILLED = 1;
	var REJECTED = 2;

	var GET_THEN_ERROR = new ErrorObject();

	function selfFulfillment() {
	  return new TypeError("You cannot resolve a promise with itself");
	}

	function cannotReturnOwn() {
	  return new TypeError('A promises callback cannot return that same promise.');
	}

	function getThen(promise) {
	  try {
	    return promise.then;
	  } catch (error) {
	    GET_THEN_ERROR.error = error;
	    return GET_THEN_ERROR;
	  }
	}

	function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	  try {
	    then.call(value, fulfillmentHandler, rejectionHandler);
	  } catch (e) {
	    return e;
	  }
	}

	function handleForeignThenable(promise, thenable, then) {
	  asap(function (promise) {
	    var sealed = false;
	    var error = tryThen(then, thenable, function (value) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	      if (thenable !== value) {
	        _resolve(promise, value);
	      } else {
	        fulfill(promise, value);
	      }
	    }, function (reason) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;

	      _reject(promise, reason);
	    }, 'Settle: ' + (promise._label || ' unknown promise'));

	    if (!sealed && error) {
	      sealed = true;
	      _reject(promise, error);
	    }
	  }, promise);
	}

	function handleOwnThenable(promise, thenable) {
	  if (thenable._state === FULFILLED) {
	    fulfill(promise, thenable._result);
	  } else if (thenable._state === REJECTED) {
	    _reject(promise, thenable._result);
	  } else {
	    subscribe(thenable, undefined, function (value) {
	      return _resolve(promise, value);
	    }, function (reason) {
	      return _reject(promise, reason);
	    });
	  }
	}

	function handleMaybeThenable(promise, maybeThenable, then$$) {
	  if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
	    handleOwnThenable(promise, maybeThenable);
	  } else {
	    if (then$$ === GET_THEN_ERROR) {
	      _reject(promise, GET_THEN_ERROR.error);
	      GET_THEN_ERROR.error = null;
	    } else if (then$$ === undefined) {
	      fulfill(promise, maybeThenable);
	    } else if (isFunction(then$$)) {
	      handleForeignThenable(promise, maybeThenable, then$$);
	    } else {
	      fulfill(promise, maybeThenable);
	    }
	  }
	}

	function _resolve(promise, value) {
	  if (promise === value) {
	    _reject(promise, selfFulfillment());
	  } else if (objectOrFunction(value)) {
	    handleMaybeThenable(promise, value, getThen(value));
	  } else {
	    fulfill(promise, value);
	  }
	}

	function publishRejection(promise) {
	  if (promise._onerror) {
	    promise._onerror(promise._result);
	  }

	  publish(promise);
	}

	function fulfill(promise, value) {
	  if (promise._state !== PENDING) {
	    return;
	  }

	  promise._result = value;
	  promise._state = FULFILLED;

	  if (promise._subscribers.length !== 0) {
	    asap(publish, promise);
	  }
	}

	function _reject(promise, reason) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	  promise._state = REJECTED;
	  promise._result = reason;

	  asap(publishRejection, promise);
	}

	function subscribe(parent, child, onFulfillment, onRejection) {
	  var _subscribers = parent._subscribers;
	  var length = _subscribers.length;

	  parent._onerror = null;

	  _subscribers[length] = child;
	  _subscribers[length + FULFILLED] = onFulfillment;
	  _subscribers[length + REJECTED] = onRejection;

	  if (length === 0 && parent._state) {
	    asap(publish, parent);
	  }
	}

	function publish(promise) {
	  var subscribers = promise._subscribers;
	  var settled = promise._state;

	  if (subscribers.length === 0) {
	    return;
	  }

	  var child = undefined,
	      callback = undefined,
	      detail = promise._result;

	  for (var i = 0; i < subscribers.length; i += 3) {
	    child = subscribers[i];
	    callback = subscribers[i + settled];

	    if (child) {
	      invokeCallback(settled, child, callback, detail);
	    } else {
	      callback(detail);
	    }
	  }

	  promise._subscribers.length = 0;
	}

	function ErrorObject() {
	  this.error = null;
	}

	var TRY_CATCH_ERROR = new ErrorObject();

	function tryCatch(callback, detail) {
	  try {
	    return callback(detail);
	  } catch (e) {
	    TRY_CATCH_ERROR.error = e;
	    return TRY_CATCH_ERROR;
	  }
	}

	function invokeCallback(settled, promise, callback, detail) {
	  var hasCallback = isFunction(callback),
	      value = undefined,
	      error = undefined,
	      succeeded = undefined,
	      failed = undefined;

	  if (hasCallback) {
	    value = tryCatch(callback, detail);

	    if (value === TRY_CATCH_ERROR) {
	      failed = true;
	      error = value.error;
	      value.error = null;
	    } else {
	      succeeded = true;
	    }

	    if (promise === value) {
	      _reject(promise, cannotReturnOwn());
	      return;
	    }
	  } else {
	    value = detail;
	    succeeded = true;
	  }

	  if (promise._state !== PENDING) {
	    // noop
	  } else if (hasCallback && succeeded) {
	      _resolve(promise, value);
	    } else if (failed) {
	      _reject(promise, error);
	    } else if (settled === FULFILLED) {
	      fulfill(promise, value);
	    } else if (settled === REJECTED) {
	      _reject(promise, value);
	    }
	}

	function initializePromise(promise, resolver) {
	  try {
	    resolver(function resolvePromise(value) {
	      _resolve(promise, value);
	    }, function rejectPromise(reason) {
	      _reject(promise, reason);
	    });
	  } catch (e) {
	    _reject(promise, e);
	  }
	}

	var id = 0;
	function nextId() {
	  return id++;
	}

	function makePromise(promise) {
	  promise[PROMISE_ID] = id++;
	  promise._state = undefined;
	  promise._result = undefined;
	  promise._subscribers = [];
	}

	function Enumerator(Constructor, input) {
	  this._instanceConstructor = Constructor;
	  this.promise = new Constructor(noop);

	  if (!this.promise[PROMISE_ID]) {
	    makePromise(this.promise);
	  }

	  if (isArray(input)) {
	    this._input = input;
	    this.length = input.length;
	    this._remaining = input.length;

	    this._result = new Array(this.length);

	    if (this.length === 0) {
	      fulfill(this.promise, this._result);
	    } else {
	      this.length = this.length || 0;
	      this._enumerate();
	      if (this._remaining === 0) {
	        fulfill(this.promise, this._result);
	      }
	    }
	  } else {
	    _reject(this.promise, validationError());
	  }
	}

	function validationError() {
	  return new Error('Array Methods must be provided an Array');
	};

	Enumerator.prototype._enumerate = function () {
	  var length = this.length;
	  var _input = this._input;

	  for (var i = 0; this._state === PENDING && i < length; i++) {
	    this._eachEntry(_input[i], i);
	  }
	};

	Enumerator.prototype._eachEntry = function (entry, i) {
	  var c = this._instanceConstructor;
	  var resolve$$ = c.resolve;

	  if (resolve$$ === resolve) {
	    var _then = getThen(entry);

	    if (_then === then && entry._state !== PENDING) {
	      this._settledAt(entry._state, i, entry._result);
	    } else if (typeof _then !== 'function') {
	      this._remaining--;
	      this._result[i] = entry;
	    } else if (c === Promise) {
	      var promise = new c(noop);
	      handleMaybeThenable(promise, entry, _then);
	      this._willSettleAt(promise, i);
	    } else {
	      this._willSettleAt(new c(function (resolve$$) {
	        return resolve$$(entry);
	      }), i);
	    }
	  } else {
	    this._willSettleAt(resolve$$(entry), i);
	  }
	};

	Enumerator.prototype._settledAt = function (state, i, value) {
	  var promise = this.promise;

	  if (promise._state === PENDING) {
	    this._remaining--;

	    if (state === REJECTED) {
	      _reject(promise, value);
	    } else {
	      this._result[i] = value;
	    }
	  }

	  if (this._remaining === 0) {
	    fulfill(promise, this._result);
	  }
	};

	Enumerator.prototype._willSettleAt = function (promise, i) {
	  var enumerator = this;

	  subscribe(promise, undefined, function (value) {
	    return enumerator._settledAt(FULFILLED, i, value);
	  }, function (reason) {
	    return enumerator._settledAt(REJECTED, i, reason);
	  });
	};

	/**
	  `Promise.all` accepts an array of promises, and returns a new promise which
	  is fulfilled with an array of fulfillment values for the passed promises, or
	  rejected with the reason of the first passed promise to be rejected. It casts all
	  elements of the passed iterable to promises as it runs this algorithm.

	  Example:

	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = resolve(2);
	  let promise3 = resolve(3);
	  let promises = [ promise1, promise2, promise3 ];

	  Promise.all(promises).then(function(array){
	    // The array here would be [ 1, 2, 3 ];
	  });
	  ```

	  If any of the `promises` given to `all` are rejected, the first promise
	  that is rejected will be given as an argument to the returned promises's
	  rejection handler. For example:

	  Example:

	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = reject(new Error("2"));
	  let promise3 = reject(new Error("3"));
	  let promises = [ promise1, promise2, promise3 ];

	  Promise.all(promises).then(function(array){
	    // Code here never runs because there are rejected promises!
	  }, function(error) {
	    // error.message === "2"
	  });
	  ```

	  @method all
	  @static
	  @param {Array} entries array of promises
	  @param {String} label optional string for labeling the promise.
	  Useful for tooling.
	  @return {Promise} promise that is fulfilled when all `promises` have been
	  fulfilled, or rejected if any of them become rejected.
	  @static
	*/
	function all(entries) {
	  return new Enumerator(this, entries).promise;
	}

	/**
	  `Promise.race` returns a new promise which is settled in the same way as the
	  first passed promise to settle.

	  Example:

	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });

	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 2');
	    }, 100);
	  });

	  Promise.race([promise1, promise2]).then(function(result){
	    // result === 'promise 2' because it was resolved before promise1
	    // was resolved.
	  });
	  ```

	  `Promise.race` is deterministic in that only the state of the first
	  settled promise matters. For example, even if other promises given to the
	  `promises` array argument are resolved, but the first settled promise has
	  become rejected before the other promises became fulfilled, the returned
	  promise will become rejected:

	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });

	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      reject(new Error('promise 2'));
	    }, 100);
	  });

	  Promise.race([promise1, promise2]).then(function(result){
	    // Code here never runs
	  }, function(reason){
	    // reason.message === 'promise 2' because promise 2 became rejected before
	    // promise 1 became fulfilled
	  });
	  ```

	  An example real-world use case is implementing timeouts:

	  ```javascript
	  Promise.race([ajax('foo.json'), timeout(5000)])
	  ```

	  @method race
	  @static
	  @param {Array} promises array of promises to observe
	  Useful for tooling.
	  @return {Promise} a promise which settles in the same way as the first passed
	  promise to settle.
	*/
	function race(entries) {
	  /*jshint validthis:true */
	  var Constructor = this;

	  if (!isArray(entries)) {
	    return new Constructor(function (_, reject) {
	      return reject(new TypeError('You must pass an array to race.'));
	    });
	  } else {
	    return new Constructor(function (resolve, reject) {
	      var length = entries.length;
	      for (var i = 0; i < length; i++) {
	        Constructor.resolve(entries[i]).then(resolve, reject);
	      }
	    });
	  }
	}

	/**
	  `Promise.reject` returns a promise rejected with the passed `reason`.
	  It is shorthand for the following:

	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    reject(new Error('WHOOPS'));
	  });

	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```

	  Instead of writing the above, your code now simply becomes the following:

	  ```javascript
	  let promise = Promise.reject(new Error('WHOOPS'));

	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```

	  @method reject
	  @static
	  @param {Any} reason value that the returned promise will be rejected with.
	  Useful for tooling.
	  @return {Promise} a promise rejected with the given `reason`.
	*/
	function reject(reason) {
	  /*jshint validthis:true */
	  var Constructor = this;
	  var promise = new Constructor(noop);
	  _reject(promise, reason);
	  return promise;
	}

	function needsResolver() {
	  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	}

	function needsNew() {
	  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	}

	/**
	  Promise objects represent the eventual result of an asynchronous operation. The
	  primary way of interacting with a promise is through its `then` method, which
	  registers callbacks to receive either a promise's eventual value or the reason
	  why the promise cannot be fulfilled.

	  Terminology
	  -----------

	  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	  - `thenable` is an object or function that defines a `then` method.
	  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	  - `exception` is a value that is thrown using the throw statement.
	  - `reason` is a value that indicates why a promise was rejected.
	  - `settled` the final resting state of a promise, fulfilled or rejected.

	  A promise can be in one of three states: pending, fulfilled, or rejected.

	  Promises that are fulfilled have a fulfillment value and are in the fulfilled
	  state.  Promises that are rejected have a rejection reason and are in the
	  rejected state.  A fulfillment value is never a thenable.

	  Promises can also be said to *resolve* a value.  If this value is also a
	  promise, then the original promise's settled state will match the value's
	  settled state.  So a promise that *resolves* a promise that rejects will
	  itself reject, and a promise that *resolves* a promise that fulfills will
	  itself fulfill.


	  Basic Usage:
	  ------------

	  ```js
	  let promise = new Promise(function(resolve, reject) {
	    // on success
	    resolve(value);

	    // on failure
	    reject(reason);
	  });

	  promise.then(function(value) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```

	  Advanced Usage:
	  ---------------

	  Promises shine when abstracting away asynchronous interactions such as
	  `XMLHttpRequest`s.

	  ```js
	  function getJSON(url) {
	    return new Promise(function(resolve, reject){
	      let xhr = new XMLHttpRequest();

	      xhr.open('GET', url);
	      xhr.onreadystatechange = handler;
	      xhr.responseType = 'json';
	      xhr.setRequestHeader('Accept', 'application/json');
	      xhr.send();

	      function handler() {
	        if (this.readyState === this.DONE) {
	          if (this.status === 200) {
	            resolve(this.response);
	          } else {
	            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	          }
	        }
	      };
	    });
	  }

	  getJSON('/posts.json').then(function(json) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```

	  Unlike callbacks, promises are great composable primitives.

	  ```js
	  Promise.all([
	    getJSON('/posts'),
	    getJSON('/comments')
	  ]).then(function(values){
	    values[0] // => postsJSON
	    values[1] // => commentsJSON

	    return values;
	  });
	  ```

	  @class Promise
	  @param {function} resolver
	  Useful for tooling.
	  @constructor
	*/
	function Promise(resolver) {
	  this[PROMISE_ID] = nextId();
	  this._result = this._state = undefined;
	  this._subscribers = [];

	  if (noop !== resolver) {
	    typeof resolver !== 'function' && needsResolver();
	    this instanceof Promise ? initializePromise(this, resolver) : needsNew();
	  }
	}

	Promise.all = all;
	Promise.race = race;
	Promise.resolve = resolve;
	Promise.reject = reject;
	Promise._setScheduler = setScheduler;
	Promise._setAsap = setAsap;
	Promise._asap = asap;

	Promise.prototype = {
	  constructor: Promise,

	  /**
	    The primary way of interacting with a promise is through its `then` method,
	    which registers callbacks to receive either a promise's eventual value or the
	    reason why the promise cannot be fulfilled.
	  
	    ```js
	    findUser().then(function(user){
	      // user is available
	    }, function(reason){
	      // user is unavailable, and you are given the reason why
	    });
	    ```
	  
	    Chaining
	    --------
	  
	    The return value of `then` is itself a promise.  This second, 'downstream'
	    promise is resolved with the return value of the first promise's fulfillment
	    or rejection handler, or rejected if the handler throws an exception.
	  
	    ```js
	    findUser().then(function (user) {
	      return user.name;
	    }, function (reason) {
	      return 'default name';
	    }).then(function (userName) {
	      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	      // will be `'default name'`
	    });
	  
	    findUser().then(function (user) {
	      throw new Error('Found user, but still unhappy');
	    }, function (reason) {
	      throw new Error('`findUser` rejected and we're unhappy');
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	    });
	    ```
	    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	  
	    ```js
	    findUser().then(function (user) {
	      throw new PedagogicalException('Upstream error');
	    }).then(function (value) {
	      // never reached
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // The `PedgagocialException` is propagated all the way down to here
	    });
	    ```
	  
	    Assimilation
	    ------------
	  
	    Sometimes the value you want to propagate to a downstream promise can only be
	    retrieved asynchronously. This can be achieved by returning a promise in the
	    fulfillment or rejection handler. The downstream promise will then be pending
	    until the returned promise is settled. This is called *assimilation*.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // The user's comments are now available
	    });
	    ```
	  
	    If the assimliated promise rejects, then the downstream promise will also reject.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // If `findCommentsByAuthor` fulfills, we'll have the value here
	    }, function (reason) {
	      // If `findCommentsByAuthor` rejects, we'll have the reason here
	    });
	    ```
	  
	    Simple Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let result;
	  
	    try {
	      result = findResult();
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	    findResult(function(result, err){
	      if (err) {
	        // failure
	      } else {
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findResult().then(function(result){
	      // success
	    }, function(reason){
	      // failure
	    });
	    ```
	  
	    Advanced Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let author, books;
	  
	    try {
	      author = findAuthor();
	      books  = findBooksByAuthor(author);
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	  
	    function foundBooks(books) {
	  
	    }
	  
	    function failure(reason) {
	  
	    }
	  
	    findAuthor(function(author, err){
	      if (err) {
	        failure(err);
	        // failure
	      } else {
	        try {
	          findBoooksByAuthor(author, function(books, err) {
	            if (err) {
	              failure(err);
	            } else {
	              try {
	                foundBooks(books);
	              } catch(reason) {
	                failure(reason);
	              }
	            }
	          });
	        } catch(error) {
	          failure(err);
	        }
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findAuthor().
	      then(findBooksByAuthor).
	      then(function(books){
	        // found books
	    }).catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method then
	    @param {Function} onFulfilled
	    @param {Function} onRejected
	    Useful for tooling.
	    @return {Promise}
	  */
	  then: then,

	  /**
	    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	    as the catch block of a try/catch statement.
	  
	    ```js
	    function findAuthor(){
	      throw new Error('couldn't find that author');
	    }
	  
	    // synchronous
	    try {
	      findAuthor();
	    } catch(reason) {
	      // something went wrong
	    }
	  
	    // async with promises
	    findAuthor().catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method catch
	    @param {Function} onRejection
	    Useful for tooling.
	    @return {Promise}
	  */
	  'catch': function _catch(onRejection) {
	    return this.then(null, onRejection);
	  }
	};

	function polyfill() {
	    var local = undefined;

	    if (typeof global !== 'undefined') {
	        local = global;
	    } else if (typeof self !== 'undefined') {
	        local = self;
	    } else {
	        try {
	            local = Function('return this')();
	        } catch (e) {
	            throw new Error('polyfill failed because global object is unavailable in this environment');
	        }
	    }

	    var P = local.Promise;

	    if (P) {
	        var promiseToString = null;
	        try {
	            promiseToString = Object.prototype.toString.call(P.resolve());
	        } catch (e) {
	            // silently ignored
	        }

	        if (promiseToString === '[object Promise]' && !P.cast) {
	            return;
	        }
	    }

	    local.Promise = Promise;
	}

	// Strange compat..
	Promise.polyfill = polyfill;
	Promise.Promise = Promise;

	return Promise;

	})));
	//# sourceMappingURL=es6-promise.map

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(48), (function() { return this; }())))

/***/ }),
/* 48 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 49 */
/***/ (function(module, exports) {

	/* (ignored) */

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(51);
	var toSubscriber_1 = __webpack_require__(52);
	var observable_1 = __webpack_require__(63);
	/**
	 * A representation of any set of values over any amount of time. This the most basic building block
	 * of RxJS.
	 *
	 * @class Observable<T>
	 */
	var Observable = (function () {
	    /**
	     * @constructor
	     * @param {Function} subscribe the function that is  called when the Observable is
	     * initially subscribed to. This function is given a Subscriber, to which new values
	     * can be `next`ed, or an `error` method can be called to raise an error, or
	     * `complete` can be called to notify of a successful completion.
	     */
	    function Observable(subscribe) {
	        this._isScalar = false;
	        if (subscribe) {
	            this._subscribe = subscribe;
	        }
	    }
	    /**
	     * Creates a new Observable, with this Observable as the source, and the passed
	     * operator defined as the new observable's operator.
	     * @method lift
	     * @param {Operator} operator the operator defining the operation to take on the observable
	     * @return {Observable} a new observable with the Operator applied
	     */
	    Observable.prototype.lift = function (operator) {
	        var observable = new Observable();
	        observable.source = this;
	        observable.operator = operator;
	        return observable;
	    };
	    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
	        var operator = this.operator;
	        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
	        if (operator) {
	            operator.call(sink, this.source);
	        }
	        else {
	            sink.add(this._trySubscribe(sink));
	        }
	        if (sink.syncErrorThrowable) {
	            sink.syncErrorThrowable = false;
	            if (sink.syncErrorThrown) {
	                throw sink.syncErrorValue;
	            }
	        }
	        return sink;
	    };
	    Observable.prototype._trySubscribe = function (sink) {
	        try {
	            return this._subscribe(sink);
	        }
	        catch (err) {
	            sink.syncErrorThrown = true;
	            sink.syncErrorValue = err;
	            sink.error(err);
	        }
	    };
	    /**
	     * @method forEach
	     * @param {Function} next a handler for each value emitted by the observable
	     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
	     * @return {Promise} a promise that either resolves on observable completion or
	     *  rejects with the handled error
	     */
	    Observable.prototype.forEach = function (next, PromiseCtor) {
	        var _this = this;
	        if (!PromiseCtor) {
	            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
	                PromiseCtor = root_1.root.Rx.config.Promise;
	            }
	            else if (root_1.root.Promise) {
	                PromiseCtor = root_1.root.Promise;
	            }
	        }
	        if (!PromiseCtor) {
	            throw new Error('no Promise impl found');
	        }
	        return new PromiseCtor(function (resolve, reject) {
	            // Must be declared in a separate statement to avoid a RefernceError when
	            // accessing subscription below in the closure due to Temporal Dead Zone.
	            var subscription;
	            subscription = _this.subscribe(function (value) {
	                if (subscription) {
	                    // if there is a subscription, then we can surmise
	                    // the next handling is asynchronous. Any errors thrown
	                    // need to be rejected explicitly and unsubscribe must be
	                    // called manually
	                    try {
	                        next(value);
	                    }
	                    catch (err) {
	                        reject(err);
	                        subscription.unsubscribe();
	                    }
	                }
	                else {
	                    // if there is NO subscription, then we're getting a nexted
	                    // value synchronously during subscription. We can just call it.
	                    // If it errors, Observable's `subscribe` will ensure the
	                    // unsubscription logic is called, then synchronously rethrow the error.
	                    // After that, Promise will trap the error and send it
	                    // down the rejection path.
	                    next(value);
	                }
	            }, reject, resolve);
	        });
	    };
	    Observable.prototype._subscribe = function (subscriber) {
	        return this.source.subscribe(subscriber);
	    };
	    /**
	     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
	     * @method Symbol.observable
	     * @return {Observable} this instance of the observable
	     */
	    Observable.prototype[observable_1.observable] = function () {
	        return this;
	    };
	    // HACK: Since TypeScript inherits static properties too, we have to
	    // fight against TypeScript here so Subject can have a different static create signature
	    /**
	     * Creates a new cold Observable by calling the Observable constructor
	     * @static true
	     * @owner Observable
	     * @method create
	     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
	     * @return {Observable} a new cold observable
	     */
	    Observable.create = function (subscribe) {
	        return new Observable(subscribe);
	    };
	    return Observable;
	}());
	exports.Observable = Observable;
	//# sourceMappingURL=Observable.js.map

/***/ }),
/* 51 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	// CommonJS / Node have global context exposed as "global" variable.
	// We don't want to include the whole node.d.ts this this compilation unit so we'll just fake
	// the global "global" var for now.
	var __window = typeof window !== 'undefined' && window;
	var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' &&
	    self instanceof WorkerGlobalScope && self;
	var __global = typeof global !== 'undefined' && global;
	var _root = __window || __global || __self;
	exports.root = _root;
	// Workaround Closure Compiler restriction: The body of a goog.module cannot use throw.
	// This is needed when used with angular/tsickle which inserts a goog.module statement.
	// Wrap in IIFE
	(function () {
	    if (!_root) {
	        throw new Error('RxJS could not find any global context (window, self, global)');
	    }
	})();
	//# sourceMappingURL=root.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var Subscriber_1 = __webpack_require__(53);
	var rxSubscriber_1 = __webpack_require__(62);
	var Observer_1 = __webpack_require__(61);
	function toSubscriber(nextOrObserver, error, complete) {
	    if (nextOrObserver) {
	        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
	            return nextOrObserver;
	        }
	        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
	            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
	        }
	    }
	    if (!nextOrObserver && !error && !complete) {
	        return new Subscriber_1.Subscriber(Observer_1.empty);
	    }
	    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
	}
	exports.toSubscriber = toSubscriber;
	//# sourceMappingURL=toSubscriber.js.map

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isFunction_1 = __webpack_require__(54);
	var Subscription_1 = __webpack_require__(55);
	var Observer_1 = __webpack_require__(61);
	var rxSubscriber_1 = __webpack_require__(62);
	/**
	 * Implements the {@link Observer} interface and extends the
	 * {@link Subscription} class. While the {@link Observer} is the public API for
	 * consuming the values of an {@link Observable}, all Observers get converted to
	 * a Subscriber, in order to provide Subscription-like capabilities such as
	 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
	 * implementing operators, but it is rarely used as a public API.
	 *
	 * @class Subscriber<T>
	 */
	var Subscriber = (function (_super) {
	    __extends(Subscriber, _super);
	    /**
	     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
	     * defined Observer or a `next` callback function.
	     * @param {function(e: ?any): void} [error] The `error` callback of an
	     * Observer.
	     * @param {function(): void} [complete] The `complete` callback of an
	     * Observer.
	     */
	    function Subscriber(destinationOrNext, error, complete) {
	        _super.call(this);
	        this.syncErrorValue = null;
	        this.syncErrorThrown = false;
	        this.syncErrorThrowable = false;
	        this.isStopped = false;
	        switch (arguments.length) {
	            case 0:
	                this.destination = Observer_1.empty;
	                break;
	            case 1:
	                if (!destinationOrNext) {
	                    this.destination = Observer_1.empty;
	                    break;
	                }
	                if (typeof destinationOrNext === 'object') {
	                    if (destinationOrNext instanceof Subscriber) {
	                        this.destination = destinationOrNext;
	                        this.destination.add(this);
	                    }
	                    else {
	                        this.syncErrorThrowable = true;
	                        this.destination = new SafeSubscriber(this, destinationOrNext);
	                    }
	                    break;
	                }
	            default:
	                this.syncErrorThrowable = true;
	                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
	                break;
	        }
	    }
	    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
	    /**
	     * A static factory for a Subscriber, given a (potentially partial) definition
	     * of an Observer.
	     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
	     * @param {function(e: ?any): void} [error] The `error` callback of an
	     * Observer.
	     * @param {function(): void} [complete] The `complete` callback of an
	     * Observer.
	     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
	     * Observer represented by the given arguments.
	     */
	    Subscriber.create = function (next, error, complete) {
	        var subscriber = new Subscriber(next, error, complete);
	        subscriber.syncErrorThrowable = false;
	        return subscriber;
	    };
	    /**
	     * The {@link Observer} callback to receive notifications of type `next` from
	     * the Observable, with a value. The Observable may call this method 0 or more
	     * times.
	     * @param {T} [value] The `next` value.
	     * @return {void}
	     */
	    Subscriber.prototype.next = function (value) {
	        if (!this.isStopped) {
	            this._next(value);
	        }
	    };
	    /**
	     * The {@link Observer} callback to receive notifications of type `error` from
	     * the Observable, with an attached {@link Error}. Notifies the Observer that
	     * the Observable has experienced an error condition.
	     * @param {any} [err] The `error` exception.
	     * @return {void}
	     */
	    Subscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this._error(err);
	        }
	    };
	    /**
	     * The {@link Observer} callback to receive a valueless notification of type
	     * `complete` from the Observable. Notifies the Observer that the Observable
	     * has finished sending push-based notifications.
	     * @return {void}
	     */
	    Subscriber.prototype.complete = function () {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this._complete();
	        }
	    };
	    Subscriber.prototype.unsubscribe = function () {
	        if (this.closed) {
	            return;
	        }
	        this.isStopped = true;
	        _super.prototype.unsubscribe.call(this);
	    };
	    Subscriber.prototype._next = function (value) {
	        this.destination.next(value);
	    };
	    Subscriber.prototype._error = function (err) {
	        this.destination.error(err);
	        this.unsubscribe();
	    };
	    Subscriber.prototype._complete = function () {
	        this.destination.complete();
	        this.unsubscribe();
	    };
	    Subscriber.prototype._unsubscribeAndRecycle = function () {
	        var _a = this, _parent = _a._parent, _parents = _a._parents;
	        this._parent = null;
	        this._parents = null;
	        this.unsubscribe();
	        this.closed = false;
	        this.isStopped = false;
	        this._parent = _parent;
	        this._parents = _parents;
	        return this;
	    };
	    return Subscriber;
	}(Subscription_1.Subscription));
	exports.Subscriber = Subscriber;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SafeSubscriber = (function (_super) {
	    __extends(SafeSubscriber, _super);
	    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
	        _super.call(this);
	        this._parentSubscriber = _parentSubscriber;
	        var next;
	        var context = this;
	        if (isFunction_1.isFunction(observerOrNext)) {
	            next = observerOrNext;
	        }
	        else if (observerOrNext) {
	            next = observerOrNext.next;
	            error = observerOrNext.error;
	            complete = observerOrNext.complete;
	            if (observerOrNext !== Observer_1.empty) {
	                context = Object.create(observerOrNext);
	                if (isFunction_1.isFunction(context.unsubscribe)) {
	                    this.add(context.unsubscribe.bind(context));
	                }
	                context.unsubscribe = this.unsubscribe.bind(this);
	            }
	        }
	        this._context = context;
	        this._next = next;
	        this._error = error;
	        this._complete = complete;
	    }
	    SafeSubscriber.prototype.next = function (value) {
	        if (!this.isStopped && this._next) {
	            var _parentSubscriber = this._parentSubscriber;
	            if (!_parentSubscriber.syncErrorThrowable) {
	                this.__tryOrUnsub(this._next, value);
	            }
	            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var _parentSubscriber = this._parentSubscriber;
	            if (this._error) {
	                if (!_parentSubscriber.syncErrorThrowable) {
	                    this.__tryOrUnsub(this._error, err);
	                    this.unsubscribe();
	                }
	                else {
	                    this.__tryOrSetError(_parentSubscriber, this._error, err);
	                    this.unsubscribe();
	                }
	            }
	            else if (!_parentSubscriber.syncErrorThrowable) {
	                this.unsubscribe();
	                throw err;
	            }
	            else {
	                _parentSubscriber.syncErrorValue = err;
	                _parentSubscriber.syncErrorThrown = true;
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.complete = function () {
	        var _this = this;
	        if (!this.isStopped) {
	            var _parentSubscriber = this._parentSubscriber;
	            if (this._complete) {
	                var wrappedComplete = function () { return _this._complete.call(_this._context); };
	                if (!_parentSubscriber.syncErrorThrowable) {
	                    this.__tryOrUnsub(wrappedComplete);
	                    this.unsubscribe();
	                }
	                else {
	                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
	                    this.unsubscribe();
	                }
	            }
	            else {
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
	        try {
	            fn.call(this._context, value);
	        }
	        catch (err) {
	            this.unsubscribe();
	            throw err;
	        }
	    };
	    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
	        try {
	            fn.call(this._context, value);
	        }
	        catch (err) {
	            parent.syncErrorValue = err;
	            parent.syncErrorThrown = true;
	            return true;
	        }
	        return false;
	    };
	    SafeSubscriber.prototype._unsubscribe = function () {
	        var _parentSubscriber = this._parentSubscriber;
	        this._context = null;
	        this._parentSubscriber = null;
	        _parentSubscriber.unsubscribe();
	    };
	    return SafeSubscriber;
	}(Subscriber));
	//# sourceMappingURL=Subscriber.js.map

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	"use strict";
	function isFunction(x) {
	    return typeof x === 'function';
	}
	exports.isFunction = isFunction;
	//# sourceMappingURL=isFunction.js.map

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var isArray_1 = __webpack_require__(56);
	var isObject_1 = __webpack_require__(57);
	var isFunction_1 = __webpack_require__(54);
	var tryCatch_1 = __webpack_require__(58);
	var errorObject_1 = __webpack_require__(59);
	var UnsubscriptionError_1 = __webpack_require__(60);
	/**
	 * Represents a disposable resource, such as the execution of an Observable. A
	 * Subscription has one important method, `unsubscribe`, that takes no argument
	 * and just disposes the resource held by the subscription.
	 *
	 * Additionally, subscriptions may be grouped together through the `add()`
	 * method, which will attach a child Subscription to the current Subscription.
	 * When a Subscription is unsubscribed, all its children (and its grandchildren)
	 * will be unsubscribed as well.
	 *
	 * @class Subscription
	 */
	var Subscription = (function () {
	    /**
	     * @param {function(): void} [unsubscribe] A function describing how to
	     * perform the disposal of resources when the `unsubscribe` method is called.
	     */
	    function Subscription(unsubscribe) {
	        /**
	         * A flag to indicate whether this Subscription has already been unsubscribed.
	         * @type {boolean}
	         */
	        this.closed = false;
	        this._parent = null;
	        this._parents = null;
	        this._subscriptions = null;
	        if (unsubscribe) {
	            this._unsubscribe = unsubscribe;
	        }
	    }
	    /**
	     * Disposes the resources held by the subscription. May, for instance, cancel
	     * an ongoing Observable execution or cancel any other type of work that
	     * started when the Subscription was created.
	     * @return {void}
	     */
	    Subscription.prototype.unsubscribe = function () {
	        var hasErrors = false;
	        var errors;
	        if (this.closed) {
	            return;
	        }
	        var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
	        this.closed = true;
	        this._parent = null;
	        this._parents = null;
	        // null out _subscriptions first so any child subscriptions that attempt
	        // to remove themselves from this subscription will noop
	        this._subscriptions = null;
	        var index = -1;
	        var len = _parents ? _parents.length : 0;
	        // if this._parent is null, then so is this._parents, and we
	        // don't have to remove ourselves from any parent subscriptions.
	        while (_parent) {
	            _parent.remove(this);
	            // if this._parents is null or index >= len,
	            // then _parent is set to null, and the loop exits
	            _parent = ++index < len && _parents[index] || null;
	        }
	        if (isFunction_1.isFunction(_unsubscribe)) {
	            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
	            if (trial === errorObject_1.errorObject) {
	                hasErrors = true;
	                errors = errors || (errorObject_1.errorObject.e instanceof UnsubscriptionError_1.UnsubscriptionError ?
	                    flattenUnsubscriptionErrors(errorObject_1.errorObject.e.errors) : [errorObject_1.errorObject.e]);
	            }
	        }
	        if (isArray_1.isArray(_subscriptions)) {
	            index = -1;
	            len = _subscriptions.length;
	            while (++index < len) {
	                var sub = _subscriptions[index];
	                if (isObject_1.isObject(sub)) {
	                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
	                    if (trial === errorObject_1.errorObject) {
	                        hasErrors = true;
	                        errors = errors || [];
	                        var err = errorObject_1.errorObject.e;
	                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
	                            errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
	                        }
	                        else {
	                            errors.push(err);
	                        }
	                    }
	                }
	            }
	        }
	        if (hasErrors) {
	            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
	        }
	    };
	    /**
	     * Adds a tear down to be called during the unsubscribe() of this
	     * Subscription.
	     *
	     * If the tear down being added is a subscription that is already
	     * unsubscribed, is the same reference `add` is being called on, or is
	     * `Subscription.EMPTY`, it will not be added.
	     *
	     * If this subscription is already in an `closed` state, the passed
	     * tear down logic will be executed immediately.
	     *
	     * @param {TeardownLogic} teardown The additional logic to execute on
	     * teardown.
	     * @return {Subscription} Returns the Subscription used or created to be
	     * added to the inner subscriptions list. This Subscription can be used with
	     * `remove()` to remove the passed teardown logic from the inner subscriptions
	     * list.
	     */
	    Subscription.prototype.add = function (teardown) {
	        if (!teardown || (teardown === Subscription.EMPTY)) {
	            return Subscription.EMPTY;
	        }
	        if (teardown === this) {
	            return this;
	        }
	        var subscription = teardown;
	        switch (typeof teardown) {
	            case 'function':
	                subscription = new Subscription(teardown);
	            case 'object':
	                if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
	                    return subscription;
	                }
	                else if (this.closed) {
	                    subscription.unsubscribe();
	                    return subscription;
	                }
	                else if (typeof subscription._addParent !== 'function' /* quack quack */) {
	                    var tmp = subscription;
	                    subscription = new Subscription();
	                    subscription._subscriptions = [tmp];
	                }
	                break;
	            default:
	                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
	        }
	        var subscriptions = this._subscriptions || (this._subscriptions = []);
	        subscriptions.push(subscription);
	        subscription._addParent(this);
	        return subscription;
	    };
	    /**
	     * Removes a Subscription from the internal list of subscriptions that will
	     * unsubscribe during the unsubscribe process of this Subscription.
	     * @param {Subscription} subscription The subscription to remove.
	     * @return {void}
	     */
	    Subscription.prototype.remove = function (subscription) {
	        var subscriptions = this._subscriptions;
	        if (subscriptions) {
	            var subscriptionIndex = subscriptions.indexOf(subscription);
	            if (subscriptionIndex !== -1) {
	                subscriptions.splice(subscriptionIndex, 1);
	            }
	        }
	    };
	    Subscription.prototype._addParent = function (parent) {
	        var _a = this, _parent = _a._parent, _parents = _a._parents;
	        if (!_parent || _parent === parent) {
	            // If we don't have a parent, or the new parent is the same as the
	            // current parent, then set this._parent to the new parent.
	            this._parent = parent;
	        }
	        else if (!_parents) {
	            // If there's already one parent, but not multiple, allocate an Array to
	            // store the rest of the parent Subscriptions.
	            this._parents = [parent];
	        }
	        else if (_parents.indexOf(parent) === -1) {
	            // Only add the new parent to the _parents list if it's not already there.
	            _parents.push(parent);
	        }
	    };
	    Subscription.EMPTY = (function (empty) {
	        empty.closed = true;
	        return empty;
	    }(new Subscription()));
	    return Subscription;
	}());
	exports.Subscription = Subscription;
	function flattenUnsubscriptionErrors(errors) {
	    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
	}
	//# sourceMappingURL=Subscription.js.map

/***/ }),
/* 56 */
/***/ (function(module, exports) {

	"use strict";
	exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
	//# sourceMappingURL=isArray.js.map

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	"use strict";
	function isObject(x) {
	    return x != null && typeof x === 'object';
	}
	exports.isObject = isObject;
	//# sourceMappingURL=isObject.js.map

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var errorObject_1 = __webpack_require__(59);
	var tryCatchTarget;
	function tryCatcher() {
	    try {
	        return tryCatchTarget.apply(this, arguments);
	    }
	    catch (e) {
	        errorObject_1.errorObject.e = e;
	        return errorObject_1.errorObject;
	    }
	}
	function tryCatch(fn) {
	    tryCatchTarget = fn;
	    return tryCatcher;
	}
	exports.tryCatch = tryCatch;
	;
	//# sourceMappingURL=tryCatch.js.map

/***/ }),
/* 59 */
/***/ (function(module, exports) {

	"use strict";
	// typeof any so that it we don't have to cast when comparing a result to the error object
	exports.errorObject = { e: {} };
	//# sourceMappingURL=errorObject.js.map

/***/ }),
/* 60 */
/***/ (function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when one or more errors have occurred during the
	 * `unsubscribe` of a {@link Subscription}.
	 */
	var UnsubscriptionError = (function (_super) {
	    __extends(UnsubscriptionError, _super);
	    function UnsubscriptionError(errors) {
	        _super.call(this);
	        this.errors = errors;
	        var err = Error.call(this, errors ?
	            errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n  ') : '');
	        this.name = err.name = 'UnsubscriptionError';
	        this.stack = err.stack;
	        this.message = err.message;
	    }
	    return UnsubscriptionError;
	}(Error));
	exports.UnsubscriptionError = UnsubscriptionError;
	//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	"use strict";
	exports.empty = {
	    closed: true,
	    next: function (value) { },
	    error: function (err) { throw err; },
	    complete: function () { }
	};
	//# sourceMappingURL=Observer.js.map

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(51);
	var Symbol = root_1.root.Symbol;
	exports.rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
	    Symbol.for('rxSubscriber') : '@@rxSubscriber';
	/**
	 * @deprecated use rxSubscriber instead
	 */
	exports.$$rxSubscriber = exports.rxSubscriber;
	//# sourceMappingURL=rxSubscriber.js.map

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(51);
	function getSymbolObservable(context) {
	    var $$observable;
	    var Symbol = context.Symbol;
	    if (typeof Symbol === 'function') {
	        if (Symbol.observable) {
	            $$observable = Symbol.observable;
	        }
	        else {
	            $$observable = Symbol('observable');
	            Symbol.observable = $$observable;
	        }
	    }
	    else {
	        $$observable = '@@observable';
	    }
	    return $$observable;
	}
	exports.getSymbolObservable = getSymbolObservable;
	exports.observable = getSymbolObservable(root_1.root);
	/**
	 * @deprecated use observable instead
	 */
	exports.$$observable = exports.observable;
	//# sourceMappingURL=observable.js.map

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Queue = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _es6Promise = __webpack_require__(47);

	var _es6Promise2 = _interopRequireDefault(_es6Promise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var noop = function noop() {};

	function resolveWith(value) {
	  if (value && typeof value.then === 'function') {
	    return value;
	  }

	  return _es6Promise2.default.resolve(value);
	}

	var Queue = exports.Queue = function () {
	  function Queue(maxPendingPromises, maxQueuedPromises) {
	    _classCallCheck(this, Queue);

	    this.pendingPromises = 0;
	    this.maxPendingPromises = typeof maxPendingPromises !== 'undefined' ? maxPendingPromises : Infinity;
	    this.maxQueuedPromises = typeof maxQueuedPromises !== 'undefined' ? maxQueuedPromises : Infinity;
	    this.queue = [];
	  }

	  _createClass(Queue, [{
	    key: 'add',
	    value: function add(promiseGenerator) {
	      var _this = this;

	      return new _es6Promise2.default(function (resolve, reject, notify) {
	        if (_this.queue.length >= _this.maxQueuedPromises) {
	          reject(new Error('Queue limit reached'));
	          return;
	        }

	        _this.queue.push({
	          promiseGenerator: promiseGenerator,
	          resolve: resolve,
	          reject: reject,
	          notify: notify || noop
	        });

	        _this._dequeue();
	      });
	    }
	  }, {
	    key: 'getPendingLength',
	    value: function getPendingLength() {
	      return this.pendingPromises;
	    }
	  }, {
	    key: 'getQueueLength',
	    value: function getQueueLength() {
	      return this.queue.length;
	    }
	  }, {
	    key: '_dequeue',
	    value: function _dequeue() {
	      var _this2 = this;

	      if (this.pendingPromises >= this.maxPendingPromises) {
	        return false;
	      }

	      var item = this.queue.shift();
	      if (!item) {
	        return false;
	      }

	      try {
	        this.pendingPromises += 1;
	        resolveWith(item.promiseGenerator()).then(function (value) {
	          _this2.pendingPromises -= 1;

	          item.resolve(value);
	          _this2._dequeue();
	        }, function (err) {
	          _this2.pendingPromises -= 1;

	          item.reject(err);
	          _this2._dequeue();
	        }, function (message) {
	          item.notify(message);
	        });
	      } catch (err) {
	        this.pendingPromises -= 1;
	        item.reject(err);
	        this._dequeue();
	      }

	      return true;
	    }
	  }]);

	  return Queue;
	}();

/***/ }),
/* 65 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.randomString = randomString;

	function uid() {
	  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

	  var text = '';
	  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	  for (var i = 0; i < size; i += 1) {
	    text += possible.charAt(Math.floor(Math.random() * possible.length));
	  }

	  return text;
	}

	function randomString(size) {
	  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	  return '' + prefix + uid(size);
	}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.appendQuery = appendQuery;

	var _url = __webpack_require__(67);

	var _url2 = _interopRequireDefault(_url);

	var _qs = __webpack_require__(74);

	var _qs2 = _interopRequireDefault(_qs);

	var _assign = __webpack_require__(79);

	var _assign2 = _interopRequireDefault(_assign);

	var _isArray = __webpack_require__(119);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _isPlainObject = __webpack_require__(129);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _isString = __webpack_require__(131);

	var _isString2 = _interopRequireDefault(_isString);

	var _isEmpty = __webpack_require__(132);

	var _isEmpty2 = _interopRequireDefault(_isEmpty);

	var _object = __webpack_require__(43);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function serialize(obj) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var prefix = arguments[2];

	  var str = [];
	  var useArraySyntax = false;

	  if ((0, _isArray2.default)(obj) && (0, _object.isDefined)(prefix)) {
	    useArraySyntax = true;
	  }

	  Object.keys(obj).forEach(function (prop) {
	    var query = void 0;
	    var val = obj[prop];

	    var key = prefix ? prefix + '[' + (useArraySyntax ? '' : prop) + ']' : prop;

	    if ((0, _object.isDefined)(val) === false) {
	      if (options.removeNull === true) {
	        return;
	      }

	      query = options.encodeComponents === true ? encodeURIComponent(key) : key;
	    } else if ((0, _isPlainObject2.default)(val)) {
	      query = serialize(val, options, key);
	    } else {
	      query = options.encodeComponents ? encodeURIComponent(key) + '=' + encodeURIComponent(val) : key + '=' + val;
	    }

	    str.push(query);
	  });

	  return str.join('&');
	}

	function appendQuery(uri, query) {
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	  var parts = _url2.default.parse(uri, true);
	  var queryToAppend = (0, _isString2.default)(query) ? _qs2.default.parse(query) : query;
	  var parsedQuery = (0, _assign2.default)({}, parts.query, queryToAppend);
	  options = (0, _assign2.default)({ encodeComponents: true, removeNull: false }, options);
	  parts.query = null;
	  var queryString = serialize(parsedQuery, options);
	  parts.search = (0, _object.isDefined)(queryString) && (0, _isEmpty2.default)(queryString) === false ? '?' + queryString : null;
	  return _url2.default.format(parts);
	}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var punycode = __webpack_require__(68);
	var util = __webpack_require__(70);

	exports.parse = urlParse;
	exports.resolve = urlResolve;
	exports.resolveObject = urlResolveObject;
	exports.format = urlFormat;

	exports.Url = Url;

	function Url() {
	  this.protocol = null;
	  this.slashes = null;
	  this.auth = null;
	  this.host = null;
	  this.port = null;
	  this.hostname = null;
	  this.hash = null;
	  this.search = null;
	  this.query = null;
	  this.pathname = null;
	  this.path = null;
	  this.href = null;
	}

	// Reference: RFC 3986, RFC 1808, RFC 2396

	// define these here so at least they only have to be
	// compiled once on the first module load.
	var protocolPattern = /^([a-z0-9.+-]+:)/i,
	    portPattern = /:[0-9]*$/,

	    // Special case for a simple path URL
	    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

	    // RFC 2396: characters reserved for delimiting URLs.
	    // We actually just auto-escape these.
	    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

	    // RFC 2396: characters not allowed for various reasons.
	    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

	    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
	    autoEscape = ['\''].concat(unwise),
	    // Characters that are never ever allowed in a hostname.
	    // Note that any invalid chars are also handled, but these
	    // are the ones that are *expected* to be seen, so we fast-path
	    // them.
	    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
	    hostEndingChars = ['/', '?', '#'],
	    hostnameMaxLen = 255,
	    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
	    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
	    // protocols that can allow "unsafe" and "unwise" chars.
	    unsafeProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that never have a hostname.
	    hostlessProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that always contain a // bit.
	    slashedProtocol = {
	      'http': true,
	      'https': true,
	      'ftp': true,
	      'gopher': true,
	      'file': true,
	      'http:': true,
	      'https:': true,
	      'ftp:': true,
	      'gopher:': true,
	      'file:': true
	    },
	    querystring = __webpack_require__(71);

	function urlParse(url, parseQueryString, slashesDenoteHost) {
	  if (url && util.isObject(url) && url instanceof Url) return url;

	  var u = new Url;
	  u.parse(url, parseQueryString, slashesDenoteHost);
	  return u;
	}

	Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
	  if (!util.isString(url)) {
	    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
	  }

	  // Copy chrome, IE, opera backslash-handling behavior.
	  // Back slashes before the query string get converted to forward slashes
	  // See: https://code.google.com/p/chromium/issues/detail?id=25916
	  var queryIndex = url.indexOf('?'),
	      splitter =
	          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
	      uSplit = url.split(splitter),
	      slashRegex = /\\/g;
	  uSplit[0] = uSplit[0].replace(slashRegex, '/');
	  url = uSplit.join(splitter);

	  var rest = url;

	  // trim before proceeding.
	  // This is to support parse stuff like "  http://foo.com  \n"
	  rest = rest.trim();

	  if (!slashesDenoteHost && url.split('#').length === 1) {
	    // Try fast path regexp
	    var simplePath = simplePathPattern.exec(rest);
	    if (simplePath) {
	      this.path = rest;
	      this.href = rest;
	      this.pathname = simplePath[1];
	      if (simplePath[2]) {
	        this.search = simplePath[2];
	        if (parseQueryString) {
	          this.query = querystring.parse(this.search.substr(1));
	        } else {
	          this.query = this.search.substr(1);
	        }
	      } else if (parseQueryString) {
	        this.search = '';
	        this.query = {};
	      }
	      return this;
	    }
	  }

	  var proto = protocolPattern.exec(rest);
	  if (proto) {
	    proto = proto[0];
	    var lowerProto = proto.toLowerCase();
	    this.protocol = lowerProto;
	    rest = rest.substr(proto.length);
	  }

	  // figure out if it's got a host
	  // user@server is *always* interpreted as a hostname, and url
	  // resolution will treat //foo/bar as host=foo,path=bar because that's
	  // how the browser resolves relative URLs.
	  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
	    var slashes = rest.substr(0, 2) === '//';
	    if (slashes && !(proto && hostlessProtocol[proto])) {
	      rest = rest.substr(2);
	      this.slashes = true;
	    }
	  }

	  if (!hostlessProtocol[proto] &&
	      (slashes || (proto && !slashedProtocol[proto]))) {

	    // there's a hostname.
	    // the first instance of /, ?, ;, or # ends the host.
	    //
	    // If there is an @ in the hostname, then non-host chars *are* allowed
	    // to the left of the last @ sign, unless some host-ending character
	    // comes *before* the @-sign.
	    // URLs are obnoxious.
	    //
	    // ex:
	    // http://a@b@c/ => user:a@b host:c
	    // http://a@b?@c => user:a host:c path:/?@c

	    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
	    // Review our test case against browsers more comprehensively.

	    // find the first instance of any hostEndingChars
	    var hostEnd = -1;
	    for (var i = 0; i < hostEndingChars.length; i++) {
	      var hec = rest.indexOf(hostEndingChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }

	    // at this point, either we have an explicit point where the
	    // auth portion cannot go past, or the last @ char is the decider.
	    var auth, atSign;
	    if (hostEnd === -1) {
	      // atSign can be anywhere.
	      atSign = rest.lastIndexOf('@');
	    } else {
	      // atSign must be in auth portion.
	      // http://a@b/c@d => host:b auth:a path:/c@d
	      atSign = rest.lastIndexOf('@', hostEnd);
	    }

	    // Now we have a portion which is definitely the auth.
	    // Pull that off.
	    if (atSign !== -1) {
	      auth = rest.slice(0, atSign);
	      rest = rest.slice(atSign + 1);
	      this.auth = decodeURIComponent(auth);
	    }

	    // the host is the remaining to the left of the first non-host char
	    hostEnd = -1;
	    for (var i = 0; i < nonHostChars.length; i++) {
	      var hec = rest.indexOf(nonHostChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }
	    // if we still have not hit it, then the entire thing is a host.
	    if (hostEnd === -1)
	      hostEnd = rest.length;

	    this.host = rest.slice(0, hostEnd);
	    rest = rest.slice(hostEnd);

	    // pull out port.
	    this.parseHost();

	    // we've indicated that there is a hostname,
	    // so even if it's empty, it has to be present.
	    this.hostname = this.hostname || '';

	    // if hostname begins with [ and ends with ]
	    // assume that it's an IPv6 address.
	    var ipv6Hostname = this.hostname[0] === '[' &&
	        this.hostname[this.hostname.length - 1] === ']';

	    // validate a little.
	    if (!ipv6Hostname) {
	      var hostparts = this.hostname.split(/\./);
	      for (var i = 0, l = hostparts.length; i < l; i++) {
	        var part = hostparts[i];
	        if (!part) continue;
	        if (!part.match(hostnamePartPattern)) {
	          var newpart = '';
	          for (var j = 0, k = part.length; j < k; j++) {
	            if (part.charCodeAt(j) > 127) {
	              // we replace non-ASCII char with a temporary placeholder
	              // we need this to make sure size of hostname is not
	              // broken by replacing non-ASCII by nothing
	              newpart += 'x';
	            } else {
	              newpart += part[j];
	            }
	          }
	          // we test again with ASCII char only
	          if (!newpart.match(hostnamePartPattern)) {
	            var validParts = hostparts.slice(0, i);
	            var notHost = hostparts.slice(i + 1);
	            var bit = part.match(hostnamePartStart);
	            if (bit) {
	              validParts.push(bit[1]);
	              notHost.unshift(bit[2]);
	            }
	            if (notHost.length) {
	              rest = '/' + notHost.join('.') + rest;
	            }
	            this.hostname = validParts.join('.');
	            break;
	          }
	        }
	      }
	    }

	    if (this.hostname.length > hostnameMaxLen) {
	      this.hostname = '';
	    } else {
	      // hostnames are always lower case.
	      this.hostname = this.hostname.toLowerCase();
	    }

	    if (!ipv6Hostname) {
	      // IDNA Support: Returns a punycoded representation of "domain".
	      // It only converts parts of the domain name that
	      // have non-ASCII characters, i.e. it doesn't matter if
	      // you call it with a domain that already is ASCII-only.
	      this.hostname = punycode.toASCII(this.hostname);
	    }

	    var p = this.port ? ':' + this.port : '';
	    var h = this.hostname || '';
	    this.host = h + p;
	    this.href += this.host;

	    // strip [ and ] from the hostname
	    // the host field still retains them, though
	    if (ipv6Hostname) {
	      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
	      if (rest[0] !== '/') {
	        rest = '/' + rest;
	      }
	    }
	  }

	  // now rest is set to the post-host stuff.
	  // chop off any delim chars.
	  if (!unsafeProtocol[lowerProto]) {

	    // First, make 100% sure that any "autoEscape" chars get
	    // escaped, even if encodeURIComponent doesn't think they
	    // need to be.
	    for (var i = 0, l = autoEscape.length; i < l; i++) {
	      var ae = autoEscape[i];
	      if (rest.indexOf(ae) === -1)
	        continue;
	      var esc = encodeURIComponent(ae);
	      if (esc === ae) {
	        esc = escape(ae);
	      }
	      rest = rest.split(ae).join(esc);
	    }
	  }


	  // chop off from the tail first.
	  var hash = rest.indexOf('#');
	  if (hash !== -1) {
	    // got a fragment string.
	    this.hash = rest.substr(hash);
	    rest = rest.slice(0, hash);
	  }
	  var qm = rest.indexOf('?');
	  if (qm !== -1) {
	    this.search = rest.substr(qm);
	    this.query = rest.substr(qm + 1);
	    if (parseQueryString) {
	      this.query = querystring.parse(this.query);
	    }
	    rest = rest.slice(0, qm);
	  } else if (parseQueryString) {
	    // no query string, but parseQueryString still requested
	    this.search = '';
	    this.query = {};
	  }
	  if (rest) this.pathname = rest;
	  if (slashedProtocol[lowerProto] &&
	      this.hostname && !this.pathname) {
	    this.pathname = '/';
	  }

	  //to support http.request
	  if (this.pathname || this.search) {
	    var p = this.pathname || '';
	    var s = this.search || '';
	    this.path = p + s;
	  }

	  // finally, reconstruct the href based on what has been validated.
	  this.href = this.format();
	  return this;
	};

	// format a parsed object into a url string
	function urlFormat(obj) {
	  // ensure it's an object, and not a string url.
	  // If it's an obj, this is a no-op.
	  // this way, you can call url_format() on strings
	  // to clean up potentially wonky urls.
	  if (util.isString(obj)) obj = urlParse(obj);
	  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
	  return obj.format();
	}

	Url.prototype.format = function() {
	  var auth = this.auth || '';
	  if (auth) {
	    auth = encodeURIComponent(auth);
	    auth = auth.replace(/%3A/i, ':');
	    auth += '@';
	  }

	  var protocol = this.protocol || '',
	      pathname = this.pathname || '',
	      hash = this.hash || '',
	      host = false,
	      query = '';

	  if (this.host) {
	    host = auth + this.host;
	  } else if (this.hostname) {
	    host = auth + (this.hostname.indexOf(':') === -1 ?
	        this.hostname :
	        '[' + this.hostname + ']');
	    if (this.port) {
	      host += ':' + this.port;
	    }
	  }

	  if (this.query &&
	      util.isObject(this.query) &&
	      Object.keys(this.query).length) {
	    query = querystring.stringify(this.query);
	  }

	  var search = this.search || (query && ('?' + query)) || '';

	  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

	  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
	  // unless they had them to begin with.
	  if (this.slashes ||
	      (!protocol || slashedProtocol[protocol]) && host !== false) {
	    host = '//' + (host || '');
	    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
	  } else if (!host) {
	    host = '';
	  }

	  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
	  if (search && search.charAt(0) !== '?') search = '?' + search;

	  pathname = pathname.replace(/[?#]/g, function(match) {
	    return encodeURIComponent(match);
	  });
	  search = search.replace('#', '%23');

	  return protocol + host + pathname + search + hash;
	};

	function urlResolve(source, relative) {
	  return urlParse(source, false, true).resolve(relative);
	}

	Url.prototype.resolve = function(relative) {
	  return this.resolveObject(urlParse(relative, false, true)).format();
	};

	function urlResolveObject(source, relative) {
	  if (!source) return relative;
	  return urlParse(source, false, true).resolveObject(relative);
	}

	Url.prototype.resolveObject = function(relative) {
	  if (util.isString(relative)) {
	    var rel = new Url();
	    rel.parse(relative, false, true);
	    relative = rel;
	  }

	  var result = new Url();
	  var tkeys = Object.keys(this);
	  for (var tk = 0; tk < tkeys.length; tk++) {
	    var tkey = tkeys[tk];
	    result[tkey] = this[tkey];
	  }

	  // hash is always overridden, no matter what.
	  // even href="" will remove it.
	  result.hash = relative.hash;

	  // if the relative url is empty, then there's nothing left to do here.
	  if (relative.href === '') {
	    result.href = result.format();
	    return result;
	  }

	  // hrefs like //foo/bar always cut to the protocol.
	  if (relative.slashes && !relative.protocol) {
	    // take everything except the protocol from relative
	    var rkeys = Object.keys(relative);
	    for (var rk = 0; rk < rkeys.length; rk++) {
	      var rkey = rkeys[rk];
	      if (rkey !== 'protocol')
	        result[rkey] = relative[rkey];
	    }

	    //urlParse appends trailing / to urls like http://www.example.com
	    if (slashedProtocol[result.protocol] &&
	        result.hostname && !result.pathname) {
	      result.path = result.pathname = '/';
	    }

	    result.href = result.format();
	    return result;
	  }

	  if (relative.protocol && relative.protocol !== result.protocol) {
	    // if it's a known url protocol, then changing
	    // the protocol does weird things
	    // first, if it's not file:, then we MUST have a host,
	    // and if there was a path
	    // to begin with, then we MUST have a path.
	    // if it is file:, then the host is dropped,
	    // because that's known to be hostless.
	    // anything else is assumed to be absolute.
	    if (!slashedProtocol[relative.protocol]) {
	      var keys = Object.keys(relative);
	      for (var v = 0; v < keys.length; v++) {
	        var k = keys[v];
	        result[k] = relative[k];
	      }
	      result.href = result.format();
	      return result;
	    }

	    result.protocol = relative.protocol;
	    if (!relative.host && !hostlessProtocol[relative.protocol]) {
	      var relPath = (relative.pathname || '').split('/');
	      while (relPath.length && !(relative.host = relPath.shift()));
	      if (!relative.host) relative.host = '';
	      if (!relative.hostname) relative.hostname = '';
	      if (relPath[0] !== '') relPath.unshift('');
	      if (relPath.length < 2) relPath.unshift('');
	      result.pathname = relPath.join('/');
	    } else {
	      result.pathname = relative.pathname;
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    result.host = relative.host || '';
	    result.auth = relative.auth;
	    result.hostname = relative.hostname || relative.host;
	    result.port = relative.port;
	    // to support http.request
	    if (result.pathname || result.search) {
	      var p = result.pathname || '';
	      var s = result.search || '';
	      result.path = p + s;
	    }
	    result.slashes = result.slashes || relative.slashes;
	    result.href = result.format();
	    return result;
	  }

	  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
	      isRelAbs = (
	          relative.host ||
	          relative.pathname && relative.pathname.charAt(0) === '/'
	      ),
	      mustEndAbs = (isRelAbs || isSourceAbs ||
	                    (result.host && relative.pathname)),
	      removeAllDots = mustEndAbs,
	      srcPath = result.pathname && result.pathname.split('/') || [],
	      relPath = relative.pathname && relative.pathname.split('/') || [],
	      psychotic = result.protocol && !slashedProtocol[result.protocol];

	  // if the url is a non-slashed url, then relative
	  // links like ../.. should be able
	  // to crawl up to the hostname, as well.  This is strange.
	  // result.protocol has already been set by now.
	  // Later on, put the first path part into the host field.
	  if (psychotic) {
	    result.hostname = '';
	    result.port = null;
	    if (result.host) {
	      if (srcPath[0] === '') srcPath[0] = result.host;
	      else srcPath.unshift(result.host);
	    }
	    result.host = '';
	    if (relative.protocol) {
	      relative.hostname = null;
	      relative.port = null;
	      if (relative.host) {
	        if (relPath[0] === '') relPath[0] = relative.host;
	        else relPath.unshift(relative.host);
	      }
	      relative.host = null;
	    }
	    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
	  }

	  if (isRelAbs) {
	    // it's absolute.
	    result.host = (relative.host || relative.host === '') ?
	                  relative.host : result.host;
	    result.hostname = (relative.hostname || relative.hostname === '') ?
	                      relative.hostname : result.hostname;
	    result.search = relative.search;
	    result.query = relative.query;
	    srcPath = relPath;
	    // fall through to the dot-handling below.
	  } else if (relPath.length) {
	    // it's relative
	    // throw away the existing file, and take the new path instead.
	    if (!srcPath) srcPath = [];
	    srcPath.pop();
	    srcPath = srcPath.concat(relPath);
	    result.search = relative.search;
	    result.query = relative.query;
	  } else if (!util.isNullOrUndefined(relative.search)) {
	    // just pull out the search.
	    // like href='?foo'.
	    // Put this after the other two cases because it simplifies the booleans
	    if (psychotic) {
	      result.hostname = result.host = srcPath.shift();
	      //occationaly the auth can get stuck only in host
	      //this especially happens in cases like
	      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	      var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                       result.host.split('@') : false;
	      if (authInHost) {
	        result.auth = authInHost.shift();
	        result.host = result.hostname = authInHost.shift();
	      }
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    //to support http.request
	    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
	      result.path = (result.pathname ? result.pathname : '') +
	                    (result.search ? result.search : '');
	    }
	    result.href = result.format();
	    return result;
	  }

	  if (!srcPath.length) {
	    // no path at all.  easy.
	    // we've already handled the other stuff above.
	    result.pathname = null;
	    //to support http.request
	    if (result.search) {
	      result.path = '/' + result.search;
	    } else {
	      result.path = null;
	    }
	    result.href = result.format();
	    return result;
	  }

	  // if a url ENDs in . or .., then it must get a trailing slash.
	  // however, if it ends in anything else non-slashy,
	  // then it must NOT get a trailing slash.
	  var last = srcPath.slice(-1)[0];
	  var hasTrailingSlash = (
	      (result.host || relative.host || srcPath.length > 1) &&
	      (last === '.' || last === '..') || last === '');

	  // strip single dots, resolve double dots to parent dir
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = srcPath.length; i >= 0; i--) {
	    last = srcPath[i];
	    if (last === '.') {
	      srcPath.splice(i, 1);
	    } else if (last === '..') {
	      srcPath.splice(i, 1);
	      up++;
	    } else if (up) {
	      srcPath.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (!mustEndAbs && !removeAllDots) {
	    for (; up--; up) {
	      srcPath.unshift('..');
	    }
	  }

	  if (mustEndAbs && srcPath[0] !== '' &&
	      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
	    srcPath.unshift('');
	  }

	  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
	    srcPath.push('');
	  }

	  var isAbsolute = srcPath[0] === '' ||
	      (srcPath[0] && srcPath[0].charAt(0) === '/');

	  // put the host back
	  if (psychotic) {
	    result.hostname = result.host = isAbsolute ? '' :
	                                    srcPath.length ? srcPath.shift() : '';
	    //occationaly the auth can get stuck only in host
	    //this especially happens in cases like
	    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	    var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                     result.host.split('@') : false;
	    if (authInHost) {
	      result.auth = authInHost.shift();
	      result.host = result.hostname = authInHost.shift();
	    }
	  }

	  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

	  if (mustEndAbs && !isAbsolute) {
	    srcPath.unshift('');
	  }

	  if (!srcPath.length) {
	    result.pathname = null;
	    result.path = null;
	  } else {
	    result.pathname = srcPath.join('/');
	  }

	  //to support request.http
	  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
	    result.path = (result.pathname ? result.pathname : '') +
	                  (result.search ? result.search : '');
	  }
	  result.auth = relative.auth || result.auth;
	  result.slashes = result.slashes || relative.slashes;
	  result.href = result.format();
	  return result;
	};

	Url.prototype.parseHost = function() {
	  var host = this.host;
	  var port = portPattern.exec(host);
	  if (port) {
	    port = port[0];
	    if (port !== ':') {
	      this.port = port.substr(1);
	    }
	    host = host.substr(0, host.length - port.length);
	  }
	  if (host) this.hostname = host;
	};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/punycode v1.3.2 by @mathias */
	;(function(root) {

		/** Detect free variables */
		var freeExports = typeof exports == 'object' && exports &&
			!exports.nodeType && exports;
		var freeModule = typeof module == 'object' && module &&
			!module.nodeType && module;
		var freeGlobal = typeof global == 'object' && global;
		if (
			freeGlobal.global === freeGlobal ||
			freeGlobal.window === freeGlobal ||
			freeGlobal.self === freeGlobal
		) {
			root = freeGlobal;
		}

		/**
		 * The `punycode` object.
		 * @name punycode
		 * @type Object
		 */
		var punycode,

		/** Highest positive signed 32-bit float value */
		maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

		/** Bootstring parameters */
		base = 36,
		tMin = 1,
		tMax = 26,
		skew = 38,
		damp = 700,
		initialBias = 72,
		initialN = 128, // 0x80
		delimiter = '-', // '\x2D'

		/** Regular expressions */
		regexPunycode = /^xn--/,
		regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

		/** Error messages */
		errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},

		/** Convenience shortcuts */
		baseMinusTMin = base - tMin,
		floor = Math.floor,
		stringFromCharCode = String.fromCharCode,

		/** Temporary variable */
		key;

		/*--------------------------------------------------------------------------*/

		/**
		 * A generic error utility function.
		 * @private
		 * @param {String} type The error type.
		 * @returns {Error} Throws a `RangeError` with the applicable error message.
		 */
		function error(type) {
			throw RangeError(errors[type]);
		}

		/**
		 * A generic `Array#map` utility function.
		 * @private
		 * @param {Array} array The array to iterate over.
		 * @param {Function} callback The function that gets called for every array
		 * item.
		 * @returns {Array} A new array of values returned by the callback function.
		 */
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}

		/**
		 * A simple `Array#map`-like wrapper to work with domain name strings or email
		 * addresses.
		 * @private
		 * @param {String} domain The domain name or email address.
		 * @param {Function} callback The function that gets called for every
		 * character.
		 * @returns {Array} A new string of characters returned by the callback
		 * function.
		 */
		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				// In email addresses, only the domain name should be punycoded. Leave
				// the local part (i.e. everything up to `@`) intact.
				result = parts[0] + '@';
				string = parts[1];
			}
			// Avoid `split(regex)` for IE8 compatibility. See #17.
			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}

		/**
		 * Creates an array containing the numeric code points of each Unicode
		 * character in the string. While JavaScript uses UCS-2 internally,
		 * this function will convert a pair of surrogate halves (each of which
		 * UCS-2 exposes as separate characters) into a single code point,
		 * matching UTF-16.
		 * @see `punycode.ucs2.encode`
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode.ucs2
		 * @name decode
		 * @param {String} string The Unicode input string (UCS-2).
		 * @returns {Array} The new array of code points.
		 */
		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		/**
		 * Creates a string based on an array of numeric code points.
		 * @see `punycode.ucs2.decode`
		 * @memberOf punycode.ucs2
		 * @name encode
		 * @param {Array} codePoints The array of numeric code points.
		 * @returns {String} The new Unicode string (UCS-2).
		 */
		function ucs2encode(array) {
			return map(array, function(value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}

		/**
		 * Converts a basic code point into a digit/integer.
		 * @see `digitToBasic()`
		 * @private
		 * @param {Number} codePoint The basic numeric code point value.
		 * @returns {Number} The numeric value of a basic code point (for use in
		 * representing integers) in the range `0` to `base - 1`, or `base` if
		 * the code point does not represent a value.
		 */
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}

		/**
		 * Converts a digit/integer into a basic code point.
		 * @see `basicToDigit()`
		 * @private
		 * @param {Number} digit The numeric value of a basic code point.
		 * @returns {Number} The basic code point whose value (when used for
		 * representing integers) is `digit`, which needs to be in the range
		 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
		 * used; else, the lowercase form is used. The behavior is undefined
		 * if `flag` is non-zero and `digit` has no uppercase form.
		 */
		function digitToBasic(digit, flag) {
			//  0..25 map to ASCII a..z or A..Z
			// 26..35 map to ASCII 0..9
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}

		/**
		 * Bias adaptation function as per section 3.4 of RFC 3492.
		 * http://tools.ietf.org/html/rfc3492#section-3.4
		 * @private
		 */
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}

		/**
		 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
		 * symbols.
		 * @memberOf punycode
		 * @param {String} input The Punycode string of ASCII-only symbols.
		 * @returns {String} The resulting string of Unicode symbols.
		 */
		function decode(input) {
			// Don't use UCS-2
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,
			    /** Cached calculation results */
			    baseMinusT;

			// Handle the basic code points: let `basic` be the number of input code
			// points before the last delimiter, or `0` if there is none, then copy
			// the first basic code points to the output.

			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}

			for (j = 0; j < basic; ++j) {
				// if it's not a basic code point
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}

			// Main decoding loop: start just after the last delimiter if any basic code
			// points were copied; start at the beginning otherwise.

			for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

				// `index` is the index of the next character to be consumed.
				// Decode a generalized variable-length integer into `delta`,
				// which gets added to `i`. The overflow checking is easier
				// if we increase `i` as we go, then subtract off its starting
				// value at the end to obtain `delta`.
				for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

					if (index >= inputLength) {
						error('invalid-input');
					}

					digit = basicToDigit(input.charCodeAt(index++));

					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}

					i += digit * w;
					t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

					if (digit < t) {
						break;
					}

					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}

					w *= baseMinusT;

				}

				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);

				// `i` was supposed to wrap around from `out` to `0`,
				// incrementing `n` each time, so we'll fix that now:
				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}

				n += floor(i / out);
				i %= out;

				// Insert `n` at position `i` of the output
				output.splice(i++, 0, n);

			}

			return ucs2encode(output);
		}

		/**
		 * Converts a string of Unicode symbols (e.g. a domain name label) to a
		 * Punycode string of ASCII-only symbols.
		 * @memberOf punycode
		 * @param {String} input The string of Unicode symbols.
		 * @returns {String} The resulting Punycode string of ASCII-only symbols.
		 */
		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],
			    /** `inputLength` will hold the number of code points in `input`. */
			    inputLength,
			    /** Cached calculation results */
			    handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;

			// Convert the input in UCS-2 to Unicode
			input = ucs2decode(input);

			// Cache the length
			inputLength = input.length;

			// Initialize the state
			n = initialN;
			delta = 0;
			bias = initialBias;

			// Handle the basic code points
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}

			handledCPCount = basicLength = output.length;

			// `handledCPCount` is the number of code points that have been handled;
			// `basicLength` is the number of basic code points.

			// Finish the basic string - if it is not empty - with a delimiter
			if (basicLength) {
				output.push(delimiter);
			}

			// Main encoding loop:
			while (handledCPCount < inputLength) {

				// All non-basic code points < n have been handled already. Find the next
				// larger one:
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}

				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
				// but guard against overflow
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}

				delta += (m - n) * handledCPCountPlusOne;
				n = m;

				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];

					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}

					if (currentValue == n) {
						// Represent delta as a generalized variable-length integer
						for (q = delta, k = base; /* no condition */; k += base) {
							t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(
								stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
							);
							q = floor(qMinusT / baseMinusT);
						}

						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}

				++delta;
				++n;

			}
			return output.join('');
		}

		/**
		 * Converts a Punycode string representing a domain name or an email address
		 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
		 * it doesn't matter if you call it on a string that has already been
		 * converted to Unicode.
		 * @memberOf punycode
		 * @param {String} input The Punycoded domain name or email address to
		 * convert to Unicode.
		 * @returns {String} The Unicode representation of the given Punycode
		 * string.
		 */
		function toUnicode(input) {
			return mapDomain(input, function(string) {
				return regexPunycode.test(string)
					? decode(string.slice(4).toLowerCase())
					: string;
			});
		}

		/**
		 * Converts a Unicode string representing a domain name or an email address to
		 * Punycode. Only the non-ASCII parts of the domain name will be converted,
		 * i.e. it doesn't matter if you call it with a domain that's already in
		 * ASCII.
		 * @memberOf punycode
		 * @param {String} input The domain name or email address to convert, as a
		 * Unicode string.
		 * @returns {String} The Punycode representation of the given domain name or
		 * email address.
		 */
		function toASCII(input) {
			return mapDomain(input, function(string) {
				return regexNonASCII.test(string)
					? 'xn--' + encode(string)
					: string;
			});
		}

		/*--------------------------------------------------------------------------*/

		/** Define the public API */
		punycode = {
			/**
			 * A string representing the current Punycode.js version number.
			 * @memberOf punycode
			 * @type String
			 */
			'version': '1.3.2',
			/**
			 * An object of methods to convert from JavaScript's internal character
			 * representation (UCS-2) to Unicode code points, and back.
			 * @see <https://mathiasbynens.be/notes/javascript-encoding>
			 * @memberOf punycode
			 * @type Object
			 */
			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};

		/** Expose `punycode` */
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return punycode;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (freeExports && freeModule) {
			if (module.exports == freeExports) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = punycode;
			} else { // in Narwhal or RingoJS v0.7.0-
				for (key in punycode) {
					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.punycode = punycode;
		}

	}(this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(69)(module), (function() { return this; }())))

/***/ }),
/* 69 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 70 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = {
	  isString: function(arg) {
	    return typeof(arg) === 'string';
	  },
	  isObject: function(arg) {
	    return typeof(arg) === 'object' && arg !== null;
	  },
	  isNull: function(arg) {
	    return arg === null;
	  },
	  isNullOrUndefined: function(arg) {
	    return arg == null;
	  }
	};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.decode = exports.parse = __webpack_require__(72);
	exports.encode = exports.stringify = __webpack_require__(73);


/***/ }),
/* 72 */
/***/ (function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};


/***/ }),
/* 73 */
/***/ (function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);

	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var stringify = __webpack_require__(75);
	var parse = __webpack_require__(78);
	var formats = __webpack_require__(77);

	module.exports = {
	    formats: formats,
	    parse: parse,
	    stringify: stringify
	};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(76);
	var formats = __webpack_require__(77);

	var arrayPrefixGenerators = {
	    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
	        return prefix + '[]';
	    },
	    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
	        return prefix + '[' + key + ']';
	    },
	    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
	        return prefix;
	    }
	};

	var toISO = Date.prototype.toISOString;

	var defaults = {
	    delimiter: '&',
	    encode: true,
	    encoder: utils.encode,
	    encodeValuesOnly: false,
	    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
	        return toISO.call(date);
	    },
	    skipNulls: false,
	    strictNullHandling: false
	};

	var stringify = function stringify( // eslint-disable-line func-name-matching
	    object,
	    prefix,
	    generateArrayPrefix,
	    strictNullHandling,
	    skipNulls,
	    encoder,
	    filter,
	    sort,
	    allowDots,
	    serializeDate,
	    formatter,
	    encodeValuesOnly
	) {
	    var obj = object;
	    if (typeof filter === 'function') {
	        obj = filter(prefix, obj);
	    } else if (obj instanceof Date) {
	        obj = serializeDate(obj);
	    } else if (obj === null) {
	        if (strictNullHandling) {
	            return encoder && !encodeValuesOnly ? encoder(prefix) : prefix;
	        }

	        obj = '';
	    }

	    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
	        if (encoder) {
	            var keyValue = encodeValuesOnly ? prefix : encoder(prefix);
	            return [formatter(keyValue) + '=' + formatter(encoder(obj))];
	        }
	        return [formatter(prefix) + '=' + formatter(String(obj))];
	    }

	    var values = [];

	    if (typeof obj === 'undefined') {
	        return values;
	    }

	    var objKeys;
	    if (Array.isArray(filter)) {
	        objKeys = filter;
	    } else {
	        var keys = Object.keys(obj);
	        objKeys = sort ? keys.sort(sort) : keys;
	    }

	    for (var i = 0; i < objKeys.length; ++i) {
	        var key = objKeys[i];

	        if (skipNulls && obj[key] === null) {
	            continue;
	        }

	        if (Array.isArray(obj)) {
	            values = values.concat(stringify(
	                obj[key],
	                generateArrayPrefix(prefix, key),
	                generateArrayPrefix,
	                strictNullHandling,
	                skipNulls,
	                encoder,
	                filter,
	                sort,
	                allowDots,
	                serializeDate,
	                formatter,
	                encodeValuesOnly
	            ));
	        } else {
	            values = values.concat(stringify(
	                obj[key],
	                prefix + (allowDots ? '.' + key : '[' + key + ']'),
	                generateArrayPrefix,
	                strictNullHandling,
	                skipNulls,
	                encoder,
	                filter,
	                sort,
	                allowDots,
	                serializeDate,
	                formatter,
	                encodeValuesOnly
	            ));
	        }
	    }

	    return values;
	};

	module.exports = function (object, opts) {
	    var obj = object;
	    var options = opts || {};

	    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
	        throw new TypeError('Encoder has to be a function.');
	    }

	    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
	    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
	    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
	    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
	    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
	    var sort = typeof options.sort === 'function' ? options.sort : null;
	    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
	    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
	    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
	    if (typeof options.format === 'undefined') {
	        options.format = formats.default;
	    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
	        throw new TypeError('Unknown format option provided.');
	    }
	    var formatter = formats.formatters[options.format];
	    var objKeys;
	    var filter;

	    if (typeof options.filter === 'function') {
	        filter = options.filter;
	        obj = filter('', obj);
	    } else if (Array.isArray(options.filter)) {
	        filter = options.filter;
	        objKeys = filter;
	    }

	    var keys = [];

	    if (typeof obj !== 'object' || obj === null) {
	        return '';
	    }

	    var arrayFormat;
	    if (options.arrayFormat in arrayPrefixGenerators) {
	        arrayFormat = options.arrayFormat;
	    } else if ('indices' in options) {
	        arrayFormat = options.indices ? 'indices' : 'repeat';
	    } else {
	        arrayFormat = 'indices';
	    }

	    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

	    if (!objKeys) {
	        objKeys = Object.keys(obj);
	    }

	    if (sort) {
	        objKeys.sort(sort);
	    }

	    for (var i = 0; i < objKeys.length; ++i) {
	        var key = objKeys[i];

	        if (skipNulls && obj[key] === null) {
	            continue;
	        }

	        keys = keys.concat(stringify(
	            obj[key],
	            key,
	            generateArrayPrefix,
	            strictNullHandling,
	            skipNulls,
	            encode ? encoder : null,
	            filter,
	            sort,
	            allowDots,
	            serializeDate,
	            formatter,
	            encodeValuesOnly
	        ));
	    }

	    return keys.join(delimiter);
	};


/***/ }),
/* 76 */
/***/ (function(module, exports) {

	'use strict';

	var has = Object.prototype.hasOwnProperty;

	var hexTable = (function () {
	    var array = [];
	    for (var i = 0; i < 256; ++i) {
	        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
	    }

	    return array;
	}());

	exports.arrayToObject = function (source, options) {
	    var obj = options && options.plainObjects ? Object.create(null) : {};
	    for (var i = 0; i < source.length; ++i) {
	        if (typeof source[i] !== 'undefined') {
	            obj[i] = source[i];
	        }
	    }

	    return obj;
	};

	exports.merge = function (target, source, options) {
	    if (!source) {
	        return target;
	    }

	    if (typeof source !== 'object') {
	        if (Array.isArray(target)) {
	            target.push(source);
	        } else if (typeof target === 'object') {
	            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
	                target[source] = true;
	            }
	        } else {
	            return [target, source];
	        }

	        return target;
	    }

	    if (typeof target !== 'object') {
	        return [target].concat(source);
	    }

	    var mergeTarget = target;
	    if (Array.isArray(target) && !Array.isArray(source)) {
	        mergeTarget = exports.arrayToObject(target, options);
	    }

	    if (Array.isArray(target) && Array.isArray(source)) {
	        source.forEach(function (item, i) {
	            if (has.call(target, i)) {
	                if (target[i] && typeof target[i] === 'object') {
	                    target[i] = exports.merge(target[i], item, options);
	                } else {
	                    target.push(item);
	                }
	            } else {
	                target[i] = item;
	            }
	        });
	        return target;
	    }

	    return Object.keys(source).reduce(function (acc, key) {
	        var value = source[key];

	        if (Object.prototype.hasOwnProperty.call(acc, key)) {
	            acc[key] = exports.merge(acc[key], value, options);
	        } else {
	            acc[key] = value;
	        }
	        return acc;
	    }, mergeTarget);
	};

	exports.decode = function (str) {
	    try {
	        return decodeURIComponent(str.replace(/\+/g, ' '));
	    } catch (e) {
	        return str;
	    }
	};

	exports.encode = function (str) {
	    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
	    // It has been adapted here for stricter adherence to RFC 3986
	    if (str.length === 0) {
	        return str;
	    }

	    var string = typeof str === 'string' ? str : String(str);

	    var out = '';
	    for (var i = 0; i < string.length; ++i) {
	        var c = string.charCodeAt(i);

	        if (
	            c === 0x2D || // -
	            c === 0x2E || // .
	            c === 0x5F || // _
	            c === 0x7E || // ~
	            (c >= 0x30 && c <= 0x39) || // 0-9
	            (c >= 0x41 && c <= 0x5A) || // a-z
	            (c >= 0x61 && c <= 0x7A) // A-Z
	        ) {
	            out += string.charAt(i);
	            continue;
	        }

	        if (c < 0x80) {
	            out = out + hexTable[c];
	            continue;
	        }

	        if (c < 0x800) {
	            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
	            continue;
	        }

	        if (c < 0xD800 || c >= 0xE000) {
	            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
	            continue;
	        }

	        i += 1;
	        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
	        out += hexTable[0xF0 | (c >> 18)] + hexTable[0x80 | ((c >> 12) & 0x3F)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]; // eslint-disable-line max-len
	    }

	    return out;
	};

	exports.compact = function (obj, references) {
	    if (typeof obj !== 'object' || obj === null) {
	        return obj;
	    }

	    var refs = references || [];
	    var lookup = refs.indexOf(obj);
	    if (lookup !== -1) {
	        return refs[lookup];
	    }

	    refs.push(obj);

	    if (Array.isArray(obj)) {
	        var compacted = [];

	        for (var i = 0; i < obj.length; ++i) {
	            if (obj[i] && typeof obj[i] === 'object') {
	                compacted.push(exports.compact(obj[i], refs));
	            } else if (typeof obj[i] !== 'undefined') {
	                compacted.push(obj[i]);
	            }
	        }

	        return compacted;
	    }

	    var keys = Object.keys(obj);
	    keys.forEach(function (key) {
	        obj[key] = exports.compact(obj[key], refs);
	    });

	    return obj;
	};

	exports.isRegExp = function (obj) {
	    return Object.prototype.toString.call(obj) === '[object RegExp]';
	};

	exports.isBuffer = function (obj) {
	    if (obj === null || typeof obj === 'undefined') {
	        return false;
	    }

	    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
	};


/***/ }),
/* 77 */
/***/ (function(module, exports) {

	'use strict';

	var replace = String.prototype.replace;
	var percentTwenties = /%20/g;

	module.exports = {
	    'default': 'RFC3986',
	    formatters: {
	        RFC1738: function (value) {
	            return replace.call(value, percentTwenties, '+');
	        },
	        RFC3986: function (value) {
	            return value;
	        }
	    },
	    RFC1738: 'RFC1738',
	    RFC3986: 'RFC3986'
	};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(76);

	var has = Object.prototype.hasOwnProperty;

	var defaults = {
	    allowDots: false,
	    allowPrototypes: false,
	    arrayLimit: 20,
	    decoder: utils.decode,
	    delimiter: '&',
	    depth: 5,
	    parameterLimit: 1000,
	    plainObjects: false,
	    strictNullHandling: false
	};

	var parseValues = function parseQueryStringValues(str, options) {
	    var obj = {};
	    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);

	    for (var i = 0; i < parts.length; ++i) {
	        var part = parts[i];
	        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;

	        var key, val;
	        if (pos === -1) {
	            key = options.decoder(part);
	            val = options.strictNullHandling ? null : '';
	        } else {
	            key = options.decoder(part.slice(0, pos));
	            val = options.decoder(part.slice(pos + 1));
	        }
	        if (has.call(obj, key)) {
	            obj[key] = [].concat(obj[key]).concat(val);
	        } else {
	            obj[key] = val;
	        }
	    }

	    return obj;
	};

	var parseObject = function parseObjectRecursive(chain, val, options) {
	    if (!chain.length) {
	        return val;
	    }

	    var root = chain.shift();

	    var obj;
	    if (root === '[]') {
	        obj = [];
	        obj = obj.concat(parseObject(chain, val, options));
	    } else {
	        obj = options.plainObjects ? Object.create(null) : {};
	        var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
	        var index = parseInt(cleanRoot, 10);
	        if (
	            !isNaN(index) &&
	            root !== cleanRoot &&
	            String(index) === cleanRoot &&
	            index >= 0 &&
	            (options.parseArrays && index <= options.arrayLimit)
	        ) {
	            obj = [];
	            obj[index] = parseObject(chain, val, options);
	        } else {
	            obj[cleanRoot] = parseObject(chain, val, options);
	        }
	    }

	    return obj;
	};

	var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
	    if (!givenKey) {
	        return;
	    }

	    // Transform dot notation to bracket notation
	    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

	    // The regex chunks

	    var brackets = /(\[[^[\]]*])/;
	    var child = /(\[[^[\]]*])/g;

	    // Get the parent

	    var segment = brackets.exec(key);
	    var parent = segment ? key.slice(0, segment.index) : key;

	    // Stash the parent if it exists

	    var keys = [];
	    if (parent) {
	        // If we aren't using plain objects, optionally prefix keys
	        // that would overwrite object prototype properties
	        if (!options.plainObjects && has.call(Object.prototype, parent)) {
	            if (!options.allowPrototypes) {
	                return;
	            }
	        }

	        keys.push(parent);
	    }

	    // Loop through children appending to the array until we hit depth

	    var i = 0;
	    while ((segment = child.exec(key)) !== null && i < options.depth) {
	        i += 1;
	        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
	            if (!options.allowPrototypes) {
	                return;
	            }
	        }
	        keys.push(segment[1]);
	    }

	    // If there's a remainder, just add whatever is left

	    if (segment) {
	        keys.push('[' + key.slice(segment.index) + ']');
	    }

	    return parseObject(keys, val, options);
	};

	module.exports = function (str, opts) {
	    var options = opts || {};

	    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
	        throw new TypeError('Decoder has to be a function.');
	    }

	    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
	    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
	    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
	    options.parseArrays = options.parseArrays !== false;
	    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
	    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
	    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
	    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
	    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
	    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

	    if (str === '' || str === null || typeof str === 'undefined') {
	        return options.plainObjects ? Object.create(null) : {};
	    }

	    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
	    var obj = options.plainObjects ? Object.create(null) : {};

	    // Iterate over the keys and setup the new object

	    var keys = Object.keys(tempObj);
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        var newObj = parseKeys(key, tempObj[key], options);
	        obj = utils.merge(obj, newObj, options);
	    }

	    return utils.compact(obj);
	};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(80),
	    copyObject = __webpack_require__(98),
	    createAssigner = __webpack_require__(99),
	    isArrayLike = __webpack_require__(109),
	    isPrototype = __webpack_require__(112),
	    keys = __webpack_require__(113);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns own enumerable string keyed properties of source objects to the
	 * destination object. Source objects are applied from left to right.
	 * Subsequent sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object` and is loosely based on
	 * [`Object.assign`](https://mdn.io/Object/assign).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.10.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assignIn
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * function Bar() {
	 *   this.c = 3;
	 * }
	 *
	 * Foo.prototype.b = 2;
	 * Bar.prototype.d = 4;
	 *
	 * _.assign({ 'a': 0 }, new Foo, new Bar);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var assign = createAssigner(function(object, source) {
	  if (isPrototype(source) || isArrayLike(source)) {
	    copyObject(source, keys(source), object);
	    return;
	  }
	  for (var key in source) {
	    if (hasOwnProperty.call(source, key)) {
	      assignValue(object, key, source[key]);
	    }
	  }
	});

	module.exports = assign;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(81),
	    eq = __webpack_require__(97);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	module.exports = assignValue;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(82);

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	module.exports = baseAssignValue;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(83);

	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	module.exports = defineProperty;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(84),
	    getValue = __webpack_require__(96);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(85),
	    isMasked = __webpack_require__(93),
	    isObject = __webpack_require__(92),
	    toSource = __webpack_require__(95);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(86),
	    isObject = __webpack_require__(92);

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	module.exports = isFunction;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(87),
	    getRawTag = __webpack_require__(90),
	    objectToString = __webpack_require__(91);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(88);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(89);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ }),
/* 89 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(87);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ }),
/* 91 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ }),
/* 92 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(94);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	module.exports = isMasked;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(88);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ }),
/* 95 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ }),
/* 96 */
/***/ (function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;


/***/ }),
/* 97 */
/***/ (function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(80),
	    baseAssignValue = __webpack_require__(81);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	module.exports = copyObject;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(100),
	    isIterateeCall = __webpack_require__(108);

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(101),
	    overRest = __webpack_require__(102),
	    setToString = __webpack_require__(104);

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}

	module.exports = baseRest;


/***/ }),
/* 101 */
/***/ (function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(103);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = overRest;


/***/ }),
/* 103 */
/***/ (function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	var baseSetToString = __webpack_require__(105),
	    shortOut = __webpack_require__(107);

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);

	module.exports = setToString;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	var constant = __webpack_require__(106),
	    defineProperty = __webpack_require__(82),
	    identity = __webpack_require__(101);

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};

	module.exports = baseSetToString;


/***/ }),
/* 106 */
/***/ (function(module, exports) {

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	module.exports = constant;


/***/ }),
/* 107 */
/***/ (function(module, exports) {

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	module.exports = shortOut;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(97),
	    isArrayLike = __webpack_require__(109),
	    isIndex = __webpack_require__(111),
	    isObject = __webpack_require__(92);

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(85),
	    isLength = __webpack_require__(110);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ }),
/* 110 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ }),
/* 111 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ }),
/* 112 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(114),
	    baseKeys = __webpack_require__(126),
	    isArrayLike = __webpack_require__(109);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	module.exports = keys;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(115),
	    isArguments = __webpack_require__(116),
	    isArray = __webpack_require__(119),
	    isBuffer = __webpack_require__(120),
	    isIndex = __webpack_require__(111),
	    isTypedArray = __webpack_require__(122);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;


/***/ }),
/* 115 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(117),
	    isObjectLike = __webpack_require__(118);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	module.exports = isArguments;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(86),
	    isObjectLike = __webpack_require__(118);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}

	module.exports = baseIsArguments;


/***/ }),
/* 118 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ }),
/* 119 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(88),
	    stubFalse = __webpack_require__(121);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(69)(module)))

/***/ }),
/* 121 */
/***/ (function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(123),
	    baseUnary = __webpack_require__(124),
	    nodeUtil = __webpack_require__(125);

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	module.exports = isTypedArray;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(86),
	    isLength = __webpack_require__(110),
	    isObjectLike = __webpack_require__(118);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	module.exports = baseIsTypedArray;


/***/ }),
/* 124 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(89);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(69)(module)))

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(112),
	    nativeKeys = __webpack_require__(127);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeys;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(128);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);

	module.exports = nativeKeys;


/***/ }),
/* 128 */
/***/ (function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(86),
	    getPrototype = __webpack_require__(130),
	    isObjectLike = __webpack_require__(118);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(128);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(86),
	    isArray = __webpack_require__(119),
	    isObjectLike = __webpack_require__(118);

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
	}

	module.exports = isString;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	var baseKeys = __webpack_require__(126),
	    getTag = __webpack_require__(133),
	    isArguments = __webpack_require__(116),
	    isArray = __webpack_require__(119),
	    isArrayLike = __webpack_require__(109),
	    isBuffer = __webpack_require__(120),
	    isPrototype = __webpack_require__(112),
	    isTypedArray = __webpack_require__(122);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    setTag = '[object Set]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if `value` is an empty object, collection, map, or set.
	 *
	 * Objects are considered empty if they have no own enumerable string keyed
	 * properties.
	 *
	 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
	 * jQuery-like collections are considered empty if they have a `length` of `0`.
	 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	 * @example
	 *
	 * _.isEmpty(null);
	 * // => true
	 *
	 * _.isEmpty(true);
	 * // => true
	 *
	 * _.isEmpty(1);
	 * // => true
	 *
	 * _.isEmpty([1, 2, 3]);
	 * // => false
	 *
	 * _.isEmpty({ 'a': 1 });
	 * // => false
	 */
	function isEmpty(value) {
	  if (value == null) {
	    return true;
	  }
	  if (isArrayLike(value) &&
	      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
	        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
	    return !value.length;
	  }
	  var tag = getTag(value);
	  if (tag == mapTag || tag == setTag) {
	    return !value.size;
	  }
	  if (isPrototype(value)) {
	    return !baseKeys(value).length;
	  }
	  for (var key in value) {
	    if (hasOwnProperty.call(value, key)) {
	      return false;
	    }
	  }
	  return true;
	}

	module.exports = isEmpty;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(134),
	    Map = __webpack_require__(135),
	    Promise = __webpack_require__(136),
	    Set = __webpack_require__(137),
	    WeakMap = __webpack_require__(138),
	    baseGetTag = __webpack_require__(86),
	    toSource = __webpack_require__(95);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	module.exports = getTag;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(83),
	    root = __webpack_require__(88);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(83),
	    root = __webpack_require__(88);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(83),
	    root = __webpack_require__(88);

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(83),
	    root = __webpack_require__(88);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(83),
	    root = __webpack_require__(88);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UserStore = exports.SyncStore = exports.SyncOperation = exports.NetworkStore = exports.FileStore = exports.DataStoreType = exports.CacheStore = undefined;

	var _cachestore = __webpack_require__(140);

	var _cachestore2 = _interopRequireDefault(_cachestore);

	var _datastore = __webpack_require__(334);

	var _datastore2 = _interopRequireDefault(_datastore);

	var _filestore = __webpack_require__(336);

	var _filestore2 = _interopRequireDefault(_filestore);

	var _networkstore = __webpack_require__(332);

	var _networkstore2 = _interopRequireDefault(_networkstore);

	var _syncstore = __webpack_require__(335);

	var _syncstore2 = _interopRequireDefault(_syncstore);

	var _userstore = __webpack_require__(337);

	var _userstore2 = _interopRequireDefault(_userstore);

	var _sync = __webpack_require__(333);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.CacheStore = _cachestore2.default;
	exports.DataStoreType = _datastore.DataStoreType;
	exports.FileStore = _filestore2.default;
	exports.NetworkStore = _networkstore2.default;
	exports.SyncOperation = _sync.SyncOperation;
	exports.SyncStore = _syncstore2.default;
	exports.UserStore = _userstore2.default;
	exports.default = _datastore2.default;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _es6Promise = __webpack_require__(47);

	var _es6Promise2 = _interopRequireDefault(_es6Promise);

	var _differenceBy = __webpack_require__(141);

	var _differenceBy2 = _interopRequireDefault(_differenceBy);

	var _assign = __webpack_require__(79);

	var _assign2 = _interopRequireDefault(_assign);

	var _keyBy = __webpack_require__(225);

	var _keyBy2 = _interopRequireDefault(_keyBy);

	var _remove2 = __webpack_require__(234);

	var _remove3 = _interopRequireDefault(_remove2);

	var _isArray = __webpack_require__(119);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _reduce = __webpack_require__(239);

	var _reduce2 = _interopRequireDefault(_reduce);

	var _map = __webpack_require__(242);

	var _map2 = _interopRequireDefault(_map);

	var _url = __webpack_require__(67);

	var _url2 = _interopRequireDefault(_url);

	var _request2 = __webpack_require__(244);

	var _errors = __webpack_require__(2);

	var _query4 = __webpack_require__(275);

	var _query5 = _interopRequireDefault(_query4);

	var _aggregation = __webpack_require__(286);

	var _aggregation2 = _interopRequireDefault(_aggregation);

	var _entity = __webpack_require__(328);

	var _utils = __webpack_require__(40);

	var _networkstore = __webpack_require__(332);

	var _networkstore2 = _interopRequireDefault(_networkstore);

	var _sync = __webpack_require__(333);

	var _sync2 = _interopRequireDefault(_sync);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CacheStore = function (_NetworkStore) {
	  _inherits(CacheStore, _NetworkStore);

	  function CacheStore(collection) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    _classCallCheck(this, CacheStore);

	    var _this = _possibleConstructorReturn(this, (CacheStore.__proto__ || Object.getPrototypeOf(CacheStore)).call(this, collection, options));

	    _this.ttl = options.ttl || undefined;

	    _this.syncManager = new _sync2.default(_this.collection, options);
	    return _this;
	  }

	  _createClass(CacheStore, [{
	    key: 'find',
	    value: function find(query) {
	      var _this2 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      options = (0, _assign2.default)({ syncAutomatically: this.syncAutomatically }, options);
	      var syncAutomatically = options.syncAutomatically === true;
	      var stream = _utils.KinveyObservable.create(function (observer) {
	        if (query && !(query instanceof _query5.default)) {
	          return observer.error(new _errors.KinveyError('Invalid query. It must be an instance of the Query class.'));
	        }

	        var request = new _request2.CacheRequest({
	          method: _request2.RequestMethod.GET,
	          url: _url2.default.format({
	            protocol: _this2.client.apiProtocol,
	            host: _this2.client.apiHost,
	            pathname: _this2.pathname
	          }),
	          properties: options.properties,
	          query: query,
	          timeout: options.timeout
	        });

	        return request.execute().then(function (response) {
	          return response.data;
	        }).catch(function () {
	          return [];
	        }).then(function () {
	          var cacheEntities = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	          observer.next(cacheEntities);

	          if (syncAutomatically === true) {
	            return _this2.pendingSyncCount(query, options).then(function (syncCount) {
	              if (syncCount > 0) {
	                return _this2.push(query, options).then(function () {
	                  return _this2.pendingSyncCount(query, options);
	                });
	              }

	              return syncCount;
	            }).then(function (syncCount) {
	              if (syncCount > 0) {
	                throw new _errors.KinveyError('Unable to fetch the entities on the backend.' + (' There are ' + syncCount + ' entities that need') + ' to be synced.');
	              }

	              return _get(CacheStore.prototype.__proto__ || Object.getPrototypeOf(CacheStore.prototype), 'find', _this2).call(_this2, query, options).toPromise();
	            }).then(function (networkEntities) {
	              var removedEntities = (0, _differenceBy2.default)(cacheEntities, networkEntities, '_id');
	              var removedIds = Object.keys((0, _keyBy2.default)(removedEntities, '_id'));
	              var removeQuery = new _query5.default().contains('_id', removedIds);
	              return _this2.clear(removeQuery, options).then(function () {
	                return networkEntities;
	              });
	            }).then(function (networkEntities) {
	              var request = new _request2.CacheRequest({
	                method: _request2.RequestMethod.PUT,
	                url: _url2.default.format({
	                  protocol: _this2.client.apiProtocol,
	                  host: _this2.client.apiHost,
	                  pathname: _this2.pathname
	                }),
	                properties: options.properties,
	                body: networkEntities,
	                timeout: options.timeout
	              });
	              return request.execute().then(function (response) {
	                return response.data;
	              });
	            });
	          }

	          return cacheEntities;
	        }).then(function (entities) {
	          observer.next(entities);
	        }).then(function () {
	          observer.complete();
	        }).catch(function (error) {
	          return observer.error(error);
	        });
	      });

	      return stream;
	    }
	  }, {
	    key: 'findById',
	    value: function findById(id) {
	      var _this3 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      options = (0, _assign2.default)({ syncAutomatically: this.syncAutomatically }, options);
	      var syncAutomatically = options.syncAutomatically === true;
	      var stream = _utils.KinveyObservable.create(function (observer) {
	        if ((0, _utils.isDefined)(id) === false) {
	          observer.next(undefined);
	          return observer.complete();
	        }

	        var request = new _request2.CacheRequest({
	          method: _request2.RequestMethod.GET,
	          url: _url2.default.format({
	            protocol: _this3.client.apiProtocol,
	            host: _this3.client.apiHost,
	            pathname: _this3.pathname + '/' + id
	          }),
	          properties: options.properties,
	          timeout: options.timeout
	        });
	        return request.execute().then(function (response) {
	          return response.data;
	        }).catch(function () {
	          return undefined;
	        }).then(function (cacheEntity) {
	          observer.next(cacheEntity);

	          if (syncAutomatically === true) {
	            var query = new _query5.default();
	            query.equalTo('_id', id);
	            return _this3.pendingSyncCount(query, options).then(function (syncCount) {
	              if (syncCount > 0) {
	                return _this3.push(query, options).then(function () {
	                  return _this3.pendingSyncCount(query, options);
	                });
	              }

	              return syncCount;
	            }).then(function (syncCount) {
	              if (syncCount > 0) {
	                throw new _errors.KinveyError('Unable to find the entity on the backend.' + (' There are ' + syncCount + ' entities that need') + ' to be synced.');
	              }
	            }).then(function () {
	              return _get(CacheStore.prototype.__proto__ || Object.getPrototypeOf(CacheStore.prototype), 'findById', _this3).call(_this3, id, options).toPromise();
	            }).then(function (networkEntity) {
	              var request = new _request2.CacheRequest({
	                method: _request2.RequestMethod.PUT,
	                url: _url2.default.format({
	                  protocol: _this3.client.apiProtocol,
	                  host: _this3.client.apiHost,
	                  pathname: _this3.pathname
	                }),
	                properties: options.properties,
	                body: networkEntity,
	                timeout: options.timeout
	              });
	              return request.execute().then(function (response) {
	                return response.data;
	              });
	            });
	          }

	          return cacheEntity;
	        }).then(function (entity) {
	          return observer.next(entity);
	        }).then(function () {
	          return observer.complete();
	        }).catch(function (error) {
	          return observer.error(error);
	        });
	      });

	      return stream;
	    }
	  }, {
	    key: 'group',
	    value: function group(aggregation) {
	      var _this4 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      options = (0, _assign2.default)({ syncAutomatically: this.syncAutomatically }, options);
	      var syncAutomatically = options.syncAutomatically === true;
	      var stream = _utils.KinveyObservable.create(function (observer) {
	        if (!(aggregation instanceof _aggregation2.default)) {
	          return observer.error(new _errors.KinveyError('Invalid aggregation. It must be an instance of the Aggregation class.'));
	        }

	        var request = new _request2.CacheRequest({
	          method: _request2.RequestMethod.POST,
	          url: _url2.default.format({
	            protocol: _this4.client.apiProtocol,
	            host: _this4.client.apiHost,
	            pathname: _this4.pathname + '/_group'
	          }),
	          properties: options.properties,
	          aggregation: aggregation,
	          timeout: options.timeout
	        });

	        return request.execute().then(function (response) {
	          return response.data;
	        }).catch(function () {
	          return [];
	        }).then(function () {
	          var cacheResult = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	          observer.next(cacheResult);

	          if (syncAutomatically === true) {
	            return _this4.pendingSyncCount(null, options).then(function (syncCount) {
	              if (syncCount > 0) {
	                return _this4.push(null, options).then(function () {
	                  return _this4.pendingSyncCount(null, options);
	                });
	              }

	              return syncCount;
	            }).then(function (syncCount) {
	              if (syncCount > 0) {
	                throw new _errors.KinveyError('Unable to group entities on the backend.' + (' There are ' + syncCount + ' entities that need') + ' to be synced.');
	              }

	              return _get(CacheStore.prototype.__proto__ || Object.getPrototypeOf(CacheStore.prototype), 'group', _this4).call(_this4, aggregation, options).toPromise();
	            });
	          }

	          return cacheResult;
	        }).then(function (result) {
	          return observer.next(result);
	        }).then(function () {
	          return observer.complete();
	        }).catch(function (error) {
	          return observer.error(error);
	        });
	      });
	      return stream;
	    }
	  }, {
	    key: 'count',
	    value: function count(query) {
	      var _this5 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      options = (0, _assign2.default)({ syncAutomatically: this.syncAutomatically }, options);
	      var syncAutomatically = options.syncAutomatically === true;
	      var stream = _utils.KinveyObservable.create(function (observer) {
	        if (query && !(query instanceof _query5.default)) {
	          return observer.error(new _errors.KinveyError('Invalid query. It must be an instance of the Query class.'));
	        }

	        var request = new _request2.CacheRequest({
	          method: _request2.RequestMethod.GET,
	          url: _url2.default.format({
	            protocol: _this5.client.apiProtocol,
	            host: _this5.client.apiHost,
	            pathname: _this5.pathname
	          }),
	          properties: options.properties,
	          query: query,
	          timeout: options.timeout
	        });

	        return request.execute().then(function (response) {
	          return response.data;
	        }).catch(function () {
	          return [];
	        }).then(function () {
	          var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	          return data.length;
	        }).then(function (cacheCount) {
	          observer.next(cacheCount);

	          if (syncAutomatically === true) {
	            return _this5.pendingSyncCount(query, options).then(function (syncCount) {
	              if (syncCount > 0) {
	                return _this5.push(query, options).then(function () {
	                  return _this5.pendingSyncCount(query, options);
	                });
	              }

	              return syncCount;
	            }).then(function (syncCount) {
	              if (syncCount > 0) {
	                throw new _errors.KinveyError('Unable to count entities on the backend.' + (' There are ' + syncCount + ' entities that need') + ' to be synced.');
	              }
	            }).then(function () {
	              return _get(CacheStore.prototype.__proto__ || Object.getPrototypeOf(CacheStore.prototype), 'count', _this5).call(_this5, query, options).toPromise();
	            });
	          }

	          return cacheCount;
	        }).then(function (count) {
	          return observer.next(count);
	        }).then(function () {
	          return observer.complete();
	        }).catch(function (error) {
	          return observer.error(error);
	        });
	      });

	      return stream;
	    }
	  }, {
	    key: 'create',
	    value: function create(entity) {
	      var _this6 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var stream = _utils.KinveyObservable.create(function (observer) {
	        if ((0, _utils.isDefined)(entity) === false) {
	          observer.next(null);
	          return observer.complete();
	        }

	        if ((0, _isArray2.default)(entity)) {
	          return observer.error(new _errors.KinveyError('Unable to create an array of entities.', 'Please create entities one by one.'));
	        }

	        var request = new _request2.CacheRequest({
	          method: _request2.RequestMethod.POST,
	          url: _url2.default.format({
	            protocol: _this6.client.apiProtocol,
	            host: _this6.client.apiHost,
	            pathname: _this6.pathname
	          }),
	          properties: options.properties,
	          body: entity,
	          timeout: options.timeout
	        });

	        return request.execute().then(function (response) {
	          return response.data;
	        }).then(function (entity) {
	          return _this6.syncManager.addCreateOperation(entity, options).then(function () {
	            return entity;
	          });
	        }).then(function (entity) {
	          if (_this6.syncAutomatically === true) {
	            var query = new _query5.default().equalTo('_id', entity._id);
	            return _this6.push(query, options).then(function (results) {
	              var result = results[0];

	              if ((0, _utils.isDefined)(result.error)) {
	                throw result.error;
	              }

	              return result.entity;
	            });
	          }

	          return entity;
	        }).then(function (entity) {
	          return observer.next(entity);
	        }).then(function () {
	          return observer.complete();
	        }).catch(function (error) {
	          return observer.error(error);
	        });
	      });

	      return stream.toPromise();
	    }
	  }, {
	    key: 'update',
	    value: function update(entity) {
	      var _this7 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var stream = _utils.KinveyObservable.create(function (observer) {
	        if ((0, _utils.isDefined)(entity) === false) {
	          observer.next(null);
	          return observer.complete();
	        }

	        if ((0, _isArray2.default)(entity)) {
	          return observer.error(new _errors.KinveyError('Unable to update an array of entities.', 'Please update entities one by one.'));
	        }

	        if ((0, _utils.isDefined)(entity._id) === false) {
	          return observer.error(new _errors.KinveyError('The entity provided does not contain an _id. An _id is required to' + ' update the entity.', entity));
	        }

	        var request = new _request2.CacheRequest({
	          method: _request2.RequestMethod.PUT,
	          url: _url2.default.format({
	            protocol: _this7.client.apiProtocol,
	            host: _this7.client.apiHost,
	            pathname: _this7.pathname + '/' + entity._id
	          }),
	          properties: options.properties,
	          body: entity,
	          timeout: options.timeout
	        });

	        return request.execute().then(function (response) {
	          return response.data;
	        }).then(function (entity) {
	          return _this7.syncManager.addUpdateOperation(entity, options).then(function () {
	            return entity;
	          });
	        }).then(function (entity) {
	          if (_this7.syncAutomatically === true) {
	            var query = new _query5.default().equalTo('_id', entity._id);
	            return _this7.push(query, options).then(function (results) {
	              var result = results[0];

	              if ((0, _utils.isDefined)(result.error)) {
	                throw result.error;
	              }

	              return result.entity;
	            });
	          }

	          return entity;
	        }).then(function (entity) {
	          return observer.next(entity);
	        }).then(function () {
	          return observer.complete();
	        }).catch(function (error) {
	          return observer.error(error);
	        });
	      });

	      return stream.toPromise();
	    }
	  }, {
	    key: 'remove',
	    value: function remove(query) {
	      var _this8 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var stream = _utils.KinveyObservable.create(function (observer) {
	        if (query && !(query instanceof _query5.default)) {
	          return observer.error(new _errors.KinveyError('Invalid query. It must be an instance of the Query class.'));
	        }

	        var request = new _request2.CacheRequest({
	          method: _request2.RequestMethod.GET,
	          url: _url2.default.format({
	            protocol: _this8.client.apiProtocol,
	            host: _this8.client.apiHost,
	            pathname: _this8.pathname
	          }),
	          properties: options.properties,
	          query: query,
	          timeout: options.timeout
	        });

	        return request.execute().then(function (response) {
	          return response.data;
	        }).then(function () {
	          var entities = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	          if (entities.length > 0) {
	            return _es6Promise2.default.all((0, _map2.default)(entities, function (entity) {
	              var metadata = new _entity.Metadata(entity);

	              if (metadata.isLocal()) {
	                var _query = new _query5.default();
	                _query.equalTo('_id', entity._id);
	                return _this8.clearSync(_query, options).then(function () {
	                  return entity;
	                });
	              }

	              return _this8.syncManager.addDeleteOperation(entity, options).then(function () {
	                return entity;
	              });
	            })).then(function () {
	              return entities;
	            });
	          }

	          return entities;
	        }).then(function (entities) {
	          if (entities.length > 0 && _this8.syncAutomatically === true) {
	            var localEntities = (0, _remove3.default)(entities, function (entity) {
	              var metadata = new _entity.Metadata(entity);
	              return metadata.isLocal();
	            });

	            var ids = Object.keys((0, _keyBy2.default)(entities, '_id'));
	            var _query2 = new _query5.default().contains('_id', ids);
	            return _this8.push(_query2, options).then(function (results) {
	              return results.concat(localEntities);
	            });
	          }

	          return entities;
	        }).then(function (results) {
	          return _es6Promise2.default.all((0, _map2.default)(results, function (result) {
	            if ((0, _utils.isDefined)(result.error) === false) {
	              var _request = new _request2.CacheRequest({
	                method: _request2.RequestMethod.DELETE,
	                url: _url2.default.format({
	                  protocol: _this8.client.apiProtocol,
	                  host: _this8.client.apiHost,
	                  pathname: _this8.pathname + '/' + result._id
	                }),
	                properties: options.properties,
	                authType: _request2.AuthType.Default,
	                timeout: options.timeout
	              });
	              return _request.execute().then(function (response) {
	                return response.data;
	              });
	            }

	            return { count: 0 };
	          }));
	        }).then(function (results) {
	          return (0, _reduce2.default)(results, function (totalResult, result) {
	            totalResult.count += result.count;
	            return totalResult;
	          }, { count: 0 });
	        }).then().then(function (result) {
	          return observer.next(result);
	        }).then(function () {
	          return observer.complete();
	        }).catch(function (error) {
	          return observer.error(error);
	        });
	      });

	      return stream.toPromise();
	    }
	  }, {
	    key: 'removeById',
	    value: function removeById(id) {
	      var _this9 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var stream = _utils.KinveyObservable.create(function (observer) {
	        if ((0, _utils.isDefined)(id) === false) {
	          observer.next({ count: 0 });
	          return observer.complete();
	        }

	        var request = new _request2.CacheRequest({
	          method: _request2.RequestMethod.GET,
	          url: _url2.default.format({
	            protocol: _this9.client.apiProtocol,
	            host: _this9.client.apiHost,
	            pathname: _this9.pathname + '/' + id
	          }),
	          properties: options.properties,
	          authType: _request2.AuthType.Default,
	          timeout: options.timeout
	        });

	        return request.execute().then(function (response) {
	          return response.data;
	        }).catch(function (error) {
	          if (error instanceof _errors.NotFoundError) {
	            return null;
	          }

	          throw error;
	        }).then(function (entity) {
	          if ((0, _utils.isDefined)(entity)) {
	            var metadata = new _entity.Metadata(entity);

	            if (metadata.isLocal()) {
	              var query = new _query5.default();
	              query.equalTo('_id', entity._id);
	              return _this9.clearSync(query, options).then(function () {
	                return entity;
	              });
	            }

	            return _this9.syncManager.addDeleteOperation(entity, options).then(function () {
	              return entity;
	            });
	          }

	          return entity;
	        }).then(function (entity) {
	          if (_this9.syncAutomatically === true) {
	            var query = new _query5.default().equalTo('_id', entity._id);
	            return _this9.push(query, options).then(function () {
	              return entity;
	            });
	          }

	          return entity;
	        }).then(function (entity) {
	          var request = new _request2.CacheRequest({
	            method: _request2.RequestMethod.DELETE,
	            url: _url2.default.format({
	              protocol: _this9.client.apiProtocol,
	              host: _this9.client.apiHost,
	              pathname: _this9.pathname + '/' + entity._id
	            }),
	            properties: options.properties,
	            authType: _request2.AuthType.Default,
	            timeout: options.timeout
	          });
	          return request.execute().then(function (response) {
	            return response.data;
	          });
	        }).then(function (result) {
	          return observer.next(result);
	        }).then(function () {
	          return observer.complete();
	        }).catch(function (error) {
	          return observer.error(error);
	        });
	      });

	      return stream.toPromise();
	    }
	  }, {
	    key: 'clear',
	    value: function clear(query) {
	      var _this10 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var stream = _utils.KinveyObservable.create(function (observer) {
	        if (query && !(query instanceof _query5.default)) {
	          return observer.error(new _errors.KinveyError('Invalid query. It must be an instance of the Query class.'));
	        }

	        var request = new _request2.CacheRequest({
	          method: _request2.RequestMethod.GET,
	          url: _url2.default.format({
	            protocol: _this10.client.apiProtocol,
	            host: _this10.client.apiHost,
	            pathname: _this10.pathname
	          }),
	          properties: options.properties,
	          query: query,
	          timeout: options.timeout
	        });

	        return request.execute().then(function (response) {
	          return response.data;
	        }).then(function () {
	          var entities = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	          return _es6Promise2.default.all((0, _map2.default)(entities, function (entity) {
	            return _es6Promise2.default.resolve(entity).then(function (entity) {
	              var metadata = new _entity.Metadata(entity);

	              if (metadata.isLocal()) {
	                var _query3 = new _query5.default();
	                _query3.equalTo('_id', entity._id);
	                return _this10.clearSync(_query3, options).then(function () {
	                  return entity;
	                });
	              }

	              return entity;
	            }).then(function (entity) {
	              var request = new _request2.CacheRequest({
	                method: _request2.RequestMethod.DELETE,
	                url: _url2.default.format({
	                  protocol: _this10.client.apiProtocol,
	                  host: _this10.client.apiHost,
	                  pathname: _this10.pathname + '/' + entity._id
	                }),
	                properties: options.properties,
	                authType: _request2.AuthType.Default,
	                timeout: options.timeout
	              });
	              return request.execute().then(function (response) {
	                return response.data;
	              });
	            });
	          }));
	        }).then(function (results) {
	          return (0, _reduce2.default)(results, function (totalResult, result) {
	            totalResult.count += result.count;
	            return totalResult;
	          }, { count: 0 });
	        }).then(function (result) {
	          return observer.next(result);
	        }).then(function () {
	          return observer.complete();
	        }).catch(function (error) {
	          return observer.error(error);
	        });
	      });

	      return stream.toPromise();
	    }
	  }, {
	    key: 'pendingSyncCount',
	    value: function pendingSyncCount(query, options) {
	      return this.syncManager.count(query, options);
	    }
	  }, {
	    key: 'pendingSyncEntities',
	    value: function pendingSyncEntities(query, options) {
	      return this.syncManager.find(query, options);
	    }
	  }, {
	    key: 'push',
	    value: function push(query, options) {
	      return this.syncManager.push(query, options);
	    }
	  }, {
	    key: 'pull',
	    value: function pull(query) {
	      var _this11 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      options = (0, _assign2.default)({ useDeltaFetch: this.useDeltaFetch }, options);
	      return this.syncManager.pull(query, options).then(function (entities) {
	        return _this11.clear(query, options).then(function () {
	          var saveRequest = new _request2.CacheRequest({
	            method: _request2.RequestMethod.PUT,
	            url: _url2.default.format({
	              protocol: _this11.client.apiProtocol,
	              host: _this11.client.apiHost,
	              pathname: _this11.pathname
	            }),
	            properties: options.properties,
	            body: entities,
	            timeout: options.timeout
	          });
	          return saveRequest.execute();
	        }).then(function () {
	          return entities;
	        });
	      });
	    }
	  }, {
	    key: 'sync',
	    value: function sync(query, options) {
	      var _this12 = this;

	      options = (0, _assign2.default)({ useDeltaFetch: this.useDeltaFetch }, options);
	      return this.push(query, options).then(function (push) {
	        var promise = _this12.pull(query, options).then(function (pull) {
	          var result = {
	            push: push,
	            pull: pull
	          };
	          return result;
	        });
	        return promise;
	      });
	    }
	  }, {
	    key: 'clearSync',
	    value: function clearSync(query, options) {
	      return this.syncManager.clear(query, options);
	    }
	  }, {
	    key: 'syncAutomatically',
	    get: function get() {
	      return true;
	    }
	  }]);

	  return CacheStore;
	}(_networkstore2.default);

	exports.default = CacheStore;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(142),
	    baseFlatten = __webpack_require__(176),
	    baseIteratee = __webpack_require__(179),
	    baseRest = __webpack_require__(100),
	    isArrayLikeObject = __webpack_require__(223),
	    last = __webpack_require__(224);

	/**
	 * This method is like `_.difference` except that it accepts `iteratee` which
	 * is invoked for each element of `array` and `values` to generate the criterion
	 * by which they're compared. The order and references of result values are
	 * determined by the first array. The iteratee is invoked with one argument:
	 * (value).
	 *
	 * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {...Array} [values] The values to exclude.
	 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	 * @returns {Array} Returns the new array of filtered values.
	 * @example
	 *
	 * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
	 * // => [1.2]
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
	 * // => [{ 'x': 2 }]
	 */
	var differenceBy = baseRest(function(array, values) {
	  var iteratee = last(values);
	  if (isArrayLikeObject(iteratee)) {
	    iteratee = undefined;
	  }
	  return isArrayLikeObject(array)
	    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), baseIteratee(iteratee, 2))
	    : [];
	});

	module.exports = differenceBy;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(143),
	    arrayIncludes = __webpack_require__(168),
	    arrayIncludesWith = __webpack_require__(173),
	    arrayMap = __webpack_require__(174),
	    baseUnary = __webpack_require__(124),
	    cacheHas = __webpack_require__(175);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of methods like `_.difference` without support
	 * for excluding multiple arrays or iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      isCommon = true,
	      length = array.length,
	      result = [],
	      valuesLength = values.length;

	  if (!length) {
	    return result;
	  }
	  if (iteratee) {
	    values = arrayMap(values, baseUnary(iteratee));
	  }
	  if (comparator) {
	    includes = arrayIncludesWith;
	    isCommon = false;
	  }
	  else if (values.length >= LARGE_ARRAY_SIZE) {
	    includes = cacheHas;
	    isCommon = false;
	    values = new SetCache(values);
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee == null ? value : iteratee(value);

	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === computed) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (!includes(values, computed, comparator)) {
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseDifference;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(144),
	    setCacheAdd = __webpack_require__(166),
	    setCacheHas = __webpack_require__(167);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(145),
	    mapCacheDelete = __webpack_require__(160),
	    mapCacheGet = __webpack_require__(163),
	    mapCacheHas = __webpack_require__(164),
	    mapCacheSet = __webpack_require__(165);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(146),
	    ListCache = __webpack_require__(153),
	    Map = __webpack_require__(135);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(147),
	    hashDelete = __webpack_require__(149),
	    hashGet = __webpack_require__(150),
	    hashHas = __webpack_require__(151),
	    hashSet = __webpack_require__(152);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(148);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	module.exports = hashClear;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(83);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ }),
/* 149 */
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = hashDelete;


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(148);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(148);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(148);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(154),
	    listCacheDelete = __webpack_require__(155),
	    listCacheGet = __webpack_require__(157),
	    listCacheHas = __webpack_require__(158),
	    listCacheSet = __webpack_require__(159);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ }),
/* 154 */
/***/ (function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	module.exports = listCacheClear;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(156);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	module.exports = listCacheDelete;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(97);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(156);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(156);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(156);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(161);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = mapCacheDelete;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(162);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ }),
/* 162 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(161);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(161);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(161);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	module.exports = mapCacheSet;


/***/ }),
/* 166 */
/***/ (function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;


/***/ }),
/* 167 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(169);

	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  var length = array == null ? 0 : array.length;
	  return !!length && baseIndexOf(array, value, 0) > -1;
	}

	module.exports = arrayIncludes;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	var baseFindIndex = __webpack_require__(170),
	    baseIsNaN = __webpack_require__(171),
	    strictIndexOf = __webpack_require__(172);

	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  return value === value
	    ? strictIndexOf(array, value, fromIndex)
	    : baseFindIndex(array, baseIsNaN, fromIndex);
	}

	module.exports = baseIndexOf;


/***/ }),
/* 170 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseFindIndex;


/***/ }),
/* 171 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
	function baseIsNaN(value) {
	  return value !== value;
	}

	module.exports = baseIsNaN;


/***/ }),
/* 172 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.indexOf` which performs strict equality
	 * comparisons of values, i.e. `===`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function strictIndexOf(array, value, fromIndex) {
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = strictIndexOf;


/***/ }),
/* 173 */
/***/ (function(module, exports) {

	/**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludesWith(array, value, comparator) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arrayIncludesWith;


/***/ }),
/* 174 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ }),
/* 175 */
/***/ (function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	module.exports = cacheHas;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(177),
	    isFlattenable = __webpack_require__(178);

	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;

	  predicate || (predicate = isFlattenable);
	  result || (result = []);

	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	module.exports = baseFlatten;


/***/ }),
/* 177 */
/***/ (function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(87),
	    isArguments = __webpack_require__(116),
	    isArray = __webpack_require__(119);

	/** Built-in value references. */
	var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArray(value) || isArguments(value) ||
	    !!(spreadableSymbol && value && value[spreadableSymbol]);
	}

	module.exports = isFlattenable;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(180),
	    baseMatchesProperty = __webpack_require__(205),
	    identity = __webpack_require__(101),
	    isArray = __webpack_require__(119),
	    property = __webpack_require__(220);

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}

	module.exports = baseIteratee;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(181),
	    getMatchData = __webpack_require__(202),
	    matchesStrictComparable = __webpack_require__(204);

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	module.exports = baseMatches;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(182),
	    baseIsEqual = __webpack_require__(188);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(153),
	    stackClear = __webpack_require__(183),
	    stackDelete = __webpack_require__(184),
	    stackGet = __webpack_require__(185),
	    stackHas = __webpack_require__(186),
	    stackSet = __webpack_require__(187);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(153);

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}

	module.exports = stackClear;


/***/ }),
/* 184 */
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	module.exports = stackDelete;


/***/ }),
/* 185 */
/***/ (function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	module.exports = stackGet;


/***/ }),
/* 186 */
/***/ (function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	module.exports = stackHas;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(153),
	    Map = __webpack_require__(135),
	    MapCache = __webpack_require__(144);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	module.exports = stackSet;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(189),
	    isObjectLike = __webpack_require__(118);

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}

	module.exports = baseIsEqual;


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(182),
	    equalArrays = __webpack_require__(190),
	    equalByTag = __webpack_require__(192),
	    equalObjects = __webpack_require__(196),
	    getTag = __webpack_require__(133),
	    isArray = __webpack_require__(119),
	    isBuffer = __webpack_require__(120),
	    isTypedArray = __webpack_require__(122);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = objIsArr ? arrayTag : getTag(object),
	      othTag = othIsArr ? arrayTag : getTag(other);

	  objTag = objTag == argsTag ? objectTag : objTag;
	  othTag = othTag == argsTag ? objectTag : othTag;

	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	module.exports = baseIsEqualDeep;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(143),
	    arraySome = __webpack_require__(191),
	    cacheHas = __webpack_require__(175);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalArrays;


/***/ }),
/* 191 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(87),
	    Uint8Array = __webpack_require__(193),
	    eq = __webpack_require__(97),
	    equalArrays = __webpack_require__(190),
	    mapToArray = __webpack_require__(194),
	    setToArray = __webpack_require__(195);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	module.exports = equalByTag;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(88);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;


/***/ }),
/* 194 */
/***/ (function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;


/***/ }),
/* 195 */
/***/ (function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

	var getAllKeys = __webpack_require__(197);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalObjects;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(198),
	    getSymbols = __webpack_require__(199),
	    keys = __webpack_require__(113);

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	module.exports = getAllKeys;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(177),
	    isArray = __webpack_require__(119);

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	module.exports = baseGetAllKeys;


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(200),
	    stubArray = __webpack_require__(201);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};

	module.exports = getSymbols;


/***/ }),
/* 200 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	module.exports = arrayFilter;


/***/ }),
/* 201 */
/***/ (function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	module.exports = stubArray;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(203),
	    keys = __webpack_require__(113);

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];

	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}

	module.exports = getMatchData;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(92);

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	module.exports = isStrictComparable;


/***/ }),
/* 204 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	module.exports = matchesStrictComparable;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(188),
	    get = __webpack_require__(206),
	    hasIn = __webpack_require__(217),
	    isKey = __webpack_require__(209),
	    isStrictComparable = __webpack_require__(203),
	    matchesStrictComparable = __webpack_require__(204),
	    toKey = __webpack_require__(216);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	  };
	}

	module.exports = baseMatchesProperty;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(207);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(208),
	    toKey = __webpack_require__(216);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = castPath(path, object);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(119),
	    isKey = __webpack_require__(209),
	    stringToPath = __webpack_require__(211),
	    toString = __webpack_require__(214);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray(value)) {
	    return value;
	  }
	  return isKey(value, object) ? [value] : stringToPath(toString(value));
	}

	module.exports = castPath;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(119),
	    isSymbol = __webpack_require__(210);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	module.exports = isKey;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(86),
	    isObjectLike = __webpack_require__(118);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

	var memoizeCapped = __webpack_require__(212);

	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function(string) {
	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	module.exports = stringToPath;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(213);

	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;

	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });

	  var cache = result.cache;
	  return result;
	}

	module.exports = memoizeCapped;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(144);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Expose `MapCache`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(215);

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	module.exports = toString;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(87),
	    arrayMap = __webpack_require__(174),
	    isArray = __webpack_require__(119),
	    isSymbol = __webpack_require__(210);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = baseToString;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(210);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toKey;


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(218),
	    hasPath = __webpack_require__(219);

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	module.exports = hasIn;


/***/ }),
/* 218 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	module.exports = baseHasIn;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(208),
	    isArguments = __webpack_require__(116),
	    isArray = __webpack_require__(119),
	    isIndex = __webpack_require__(111),
	    isLength = __webpack_require__(110),
	    toKey = __webpack_require__(216);

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = castPath(path, object);

	  var index = -1,
	      length = path.length,
	      result = false;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}

	module.exports = hasPath;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(221),
	    basePropertyDeep = __webpack_require__(222),
	    isKey = __webpack_require__(209),
	    toKey = __webpack_require__(216);

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	module.exports = property;


/***/ }),
/* 221 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(207);

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}

	module.exports = basePropertyDeep;


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(109),
	    isObjectLike = __webpack_require__(118);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;


/***/ }),
/* 224 */
/***/ (function(module, exports) {

	/**
	 * Gets the last element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the last element of `array`.
	 * @example
	 *
	 * _.last([1, 2, 3]);
	 * // => 3
	 */
	function last(array) {
	  var length = array == null ? 0 : array.length;
	  return length ? array[length - 1] : undefined;
	}

	module.exports = last;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(81),
	    createAggregator = __webpack_require__(226);

	/**
	 * Creates an object composed of keys generated from the results of running
	 * each element of `collection` thru `iteratee`. The corresponding value of
	 * each key is the last element responsible for generating the key. The
	 * iteratee is invoked with one argument: (value).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
	 * @returns {Object} Returns the composed aggregate object.
	 * @example
	 *
	 * var array = [
	 *   { 'dir': 'left', 'code': 97 },
	 *   { 'dir': 'right', 'code': 100 }
	 * ];
	 *
	 * _.keyBy(array, function(o) {
	 *   return String.fromCharCode(o.code);
	 * });
	 * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	 *
	 * _.keyBy(array, 'dir');
	 * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
	 */
	var keyBy = createAggregator(function(result, value, key) {
	  baseAssignValue(result, key, value);
	});

	module.exports = keyBy;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayAggregator = __webpack_require__(227),
	    baseAggregator = __webpack_require__(228),
	    baseIteratee = __webpack_require__(179),
	    isArray = __webpack_require__(119);

	/**
	 * Creates a function like `_.groupBy`.
	 *
	 * @private
	 * @param {Function} setter The function to set accumulator values.
	 * @param {Function} [initializer] The accumulator object initializer.
	 * @returns {Function} Returns the new aggregator function.
	 */
	function createAggregator(setter, initializer) {
	  return function(collection, iteratee) {
	    var func = isArray(collection) ? arrayAggregator : baseAggregator,
	        accumulator = initializer ? initializer() : {};

	    return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
	  };
	}

	module.exports = createAggregator;


/***/ }),
/* 227 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `baseAggregator` for arrays.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} setter The function to set `accumulator` values.
	 * @param {Function} iteratee The iteratee to transform keys.
	 * @param {Object} accumulator The initial aggregated object.
	 * @returns {Function} Returns `accumulator`.
	 */
	function arrayAggregator(array, setter, iteratee, accumulator) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    var value = array[index];
	    setter(accumulator, value, iteratee(value), array);
	  }
	  return accumulator;
	}

	module.exports = arrayAggregator;


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(229);

	/**
	 * Aggregates elements of `collection` on `accumulator` with keys transformed
	 * by `iteratee` and values set by `setter`.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} setter The function to set `accumulator` values.
	 * @param {Function} iteratee The iteratee to transform keys.
	 * @param {Object} accumulator The initial aggregated object.
	 * @returns {Function} Returns `accumulator`.
	 */
	function baseAggregator(collection, setter, iteratee, accumulator) {
	  baseEach(collection, function(value, key, collection) {
	    setter(accumulator, value, iteratee(value), collection);
	  });
	  return accumulator;
	}

	module.exports = baseAggregator;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(230),
	    createBaseEach = __webpack_require__(233);

	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);

	module.exports = baseEach;


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(231),
	    keys = __webpack_require__(113);

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}

	module.exports = baseForOwn;


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(232);

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	module.exports = baseFor;


/***/ }),
/* 232 */
/***/ (function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = createBaseFor;


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(109);

	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);

	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}

	module.exports = createBaseEach;


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIteratee = __webpack_require__(179),
	    basePullAt = __webpack_require__(235);

	/**
	 * Removes all elements from `array` that `predicate` returns truthy for
	 * and returns an array of the removed elements. The predicate is invoked
	 * with three arguments: (value, index, array).
	 *
	 * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
	 * to pull elements from an array by value.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.0.0
	 * @category Array
	 * @param {Array} array The array to modify.
	 * @param {Function} [predicate=_.identity] The function invoked per iteration.
	 * @returns {Array} Returns the new array of removed elements.
	 * @example
	 *
	 * var array = [1, 2, 3, 4];
	 * var evens = _.remove(array, function(n) {
	 *   return n % 2 == 0;
	 * });
	 *
	 * console.log(array);
	 * // => [1, 3]
	 *
	 * console.log(evens);
	 * // => [2, 4]
	 */
	function remove(array, predicate) {
	  var result = [];
	  if (!(array && array.length)) {
	    return result;
	  }
	  var index = -1,
	      indexes = [],
	      length = array.length;

	  predicate = baseIteratee(predicate, 3);
	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result.push(value);
	      indexes.push(index);
	    }
	  }
	  basePullAt(array, indexes);
	  return result;
	}

	module.exports = remove;


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

	var baseUnset = __webpack_require__(236),
	    isIndex = __webpack_require__(111);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * The base implementation of `_.pullAt` without support for individual
	 * indexes or capturing the removed elements.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {number[]} indexes The indexes of elements to remove.
	 * @returns {Array} Returns `array`.
	 */
	function basePullAt(array, indexes) {
	  var length = array ? indexes.length : 0,
	      lastIndex = length - 1;

	  while (length--) {
	    var index = indexes[length];
	    if (length == lastIndex || index !== previous) {
	      var previous = index;
	      if (isIndex(index)) {
	        splice.call(array, index, 1);
	      } else {
	        baseUnset(array, index);
	      }
	    }
	  }
	  return array;
	}

	module.exports = basePullAt;


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(208),
	    last = __webpack_require__(224),
	    parent = __webpack_require__(237),
	    toKey = __webpack_require__(216);

	/**
	 * The base implementation of `_.unset`.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The property path to unset.
	 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
	 */
	function baseUnset(object, path) {
	  path = castPath(path, object);
	  object = parent(object, path);
	  return object == null || delete object[toKey(last(path))];
	}

	module.exports = baseUnset;


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(207),
	    baseSlice = __webpack_require__(238);

	/**
	 * Gets the parent value at `path` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} path The path to get the parent value of.
	 * @returns {*} Returns the parent value.
	 */
	function parent(object, path) {
	  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
	}

	module.exports = parent;


/***/ }),
/* 238 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;

	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;

	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}

	module.exports = baseSlice;


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayReduce = __webpack_require__(240),
	    baseEach = __webpack_require__(229),
	    baseIteratee = __webpack_require__(179),
	    baseReduce = __webpack_require__(241),
	    isArray = __webpack_require__(119);

	/**
	 * Reduces `collection` to a value which is the accumulated result of running
	 * each element in `collection` thru `iteratee`, where each successive
	 * invocation is supplied the return value of the previous. If `accumulator`
	 * is not given, the first element of `collection` is used as the initial
	 * value. The iteratee is invoked with four arguments:
	 * (accumulator, value, index|key, collection).
	 *
	 * Many lodash methods are guarded to work as iteratees for methods like
	 * `_.reduce`, `_.reduceRight`, and `_.transform`.
	 *
	 * The guarded methods are:
	 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
	 * and `sortBy`
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @returns {*} Returns the accumulated value.
	 * @see _.reduceRight
	 * @example
	 *
	 * _.reduce([1, 2], function(sum, n) {
	 *   return sum + n;
	 * }, 0);
	 * // => 3
	 *
	 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
	 *   (result[value] || (result[value] = [])).push(key);
	 *   return result;
	 * }, {});
	 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
	 */
	function reduce(collection, iteratee, accumulator) {
	  var func = isArray(collection) ? arrayReduce : baseReduce,
	      initAccum = arguments.length < 3;

	  return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
	}

	module.exports = reduce;


/***/ }),
/* 240 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	module.exports = arrayReduce;


/***/ }),
/* 241 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.reduce` and `_.reduceRight`, without support
	 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} accumulator The initial value.
	 * @param {boolean} initAccum Specify using the first or last element of
	 *  `collection` as the initial value.
	 * @param {Function} eachFunc The function to iterate over `collection`.
	 * @returns {*} Returns the accumulated value.
	 */
	function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
	  eachFunc(collection, function(value, index, collection) {
	    accumulator = initAccum
	      ? (initAccum = false, value)
	      : iteratee(accumulator, value, index, collection);
	  });
	  return accumulator;
	}

	module.exports = baseReduce;


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(174),
	    baseIteratee = __webpack_require__(179),
	    baseMap = __webpack_require__(243),
	    isArray = __webpack_require__(119);

	/**
	 * Creates an array of values by running each element in `collection` thru
	 * `iteratee`. The iteratee is invoked with three arguments:
	 * (value, index|key, collection).
	 *
	 * Many lodash methods are guarded to work as iteratees for methods like
	 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	 *
	 * The guarded methods are:
	 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
	 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
	 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
	 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 * @example
	 *
	 * function square(n) {
	 *   return n * n;
	 * }
	 *
	 * _.map([4, 8], square);
	 * // => [16, 64]
	 *
	 * _.map({ 'a': 4, 'b': 8 }, square);
	 * // => [16, 64] (iteration order is not guaranteed)
	 *
	 * var users = [
	 *   { 'user': 'barney' },
	 *   { 'user': 'fred' }
	 * ];
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.map(users, 'user');
	 * // => ['barney', 'fred']
	 */
	function map(collection, iteratee) {
	  var func = isArray(collection) ? arrayMap : baseMap;
	  return func(collection, baseIteratee(iteratee, 3));
	}

	module.exports = map;


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(229),
	    isArrayLike = __webpack_require__(109);

	/**
	 * The base implementation of `_.map` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function baseMap(collection, iteratee) {
	  var index = -1,
	      result = isArrayLike(collection) ? Array(collection.length) : [];

	  baseEach(collection, function(value, key, collection) {
	    result[++index] = iteratee(value, key, collection);
	  });
	  return result;
	}

	module.exports = baseMap;


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Storage = exports.StatusCode = exports.SerializeMiddleware = exports.Response = exports.RequestMethod = exports.Rack = exports.Properties = exports.ParseMiddleware = exports.NetworkRequest = exports.NetworkRack = exports.Middleware = exports.MemoryAdapter = exports.KinveyResponse = exports.KinveyRequest = exports.HttpMiddleware = exports.Headers = exports.DeltaFetchRequest = exports.CacheRequest = exports.CacheRack = exports.CacheMiddleware = exports.AuthType = undefined;

	var _cache = __webpack_require__(245);

	var _cache2 = _interopRequireDefault(_cache);

	var _deltafetch = __webpack_require__(310);

	var _deltafetch2 = _interopRequireDefault(_deltafetch);

	var _headers = __webpack_require__(291);

	var _headers2 = _interopRequireDefault(_headers);

	var _network = __webpack_require__(312);

	var _network2 = _interopRequireDefault(_network);

	var _request = __webpack_require__(287);

	var _request2 = _interopRequireDefault(_request);

	var _response = __webpack_require__(290);

	var _response2 = _interopRequireDefault(_response);

	var _rack = __webpack_require__(292);

	var _rack2 = _interopRequireDefault(_rack);

	var _middleware = __webpack_require__(295);

	var _middleware2 = _interopRequireDefault(_middleware);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.AuthType = _network.AuthType;
	exports.CacheMiddleware = _middleware.CacheMiddleware;
	exports.CacheRack = _rack.CacheRack;
	exports.CacheRequest = _cache2.default;
	exports.DeltaFetchRequest = _deltafetch2.default;
	exports.Headers = _headers2.default;
	exports.HttpMiddleware = _middleware.HttpMiddleware;
	exports.KinveyRequest = _network.KinveyRequest;
	exports.KinveyResponse = _response.KinveyResponse;
	exports.MemoryAdapter = _middleware.MemoryAdapter;
	exports.Middleware = _middleware2.default;
	exports.NetworkRack = _rack.NetworkRack;
	exports.NetworkRequest = _network2.default;
	exports.ParseMiddleware = _middleware.ParseMiddleware;
	exports.Properties = _network.Properties;
	exports.Rack = _rack2.default;
	exports.RequestMethod = _request.RequestMethod;
	exports.Response = _response2.default;
	exports.SerializeMiddleware = _middleware.SerializeMiddleware;
	exports.StatusCode = _response.StatusCode;
	exports.Storage = _middleware.Storage;
	exports.default = _request2.default;

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _urlPattern = __webpack_require__(246);

	var _urlPattern2 = _interopRequireDefault(_urlPattern);

	var _url = __webpack_require__(67);

	var _url2 = _interopRequireDefault(_url);

	var _cloneDeep = __webpack_require__(248);

	var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

	var _errors = __webpack_require__(2);

	var _query = __webpack_require__(275);

	var _query2 = _interopRequireDefault(_query);

	var _aggregation = __webpack_require__(286);

	var _aggregation2 = _interopRequireDefault(_aggregation);

	var _utils = __webpack_require__(40);

	var _request = __webpack_require__(287);

	var _request2 = _interopRequireDefault(_request);

	var _response = __webpack_require__(290);

	var _rack = __webpack_require__(292);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CacheRequest = function (_Request) {
	  _inherits(CacheRequest, _Request);

	  function CacheRequest() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, CacheRequest);

	    var _this = _possibleConstructorReturn(this, (CacheRequest.__proto__ || Object.getPrototypeOf(CacheRequest)).call(this, options));

	    _this.aggregation = options.aggregation;
	    _this.query = options.query;
	    _this.rack = _rack.CacheRack;
	    return _this;
	  }

	  _createClass(CacheRequest, [{
	    key: 'execute',
	    value: function execute() {
	      var _this2 = this;

	      return _get(CacheRequest.prototype.__proto__ || Object.getPrototypeOf(CacheRequest.prototype), 'execute', this).call(this).then(function (response) {
	        if (!(response instanceof _response.KinveyResponse)) {
	          response = new _response.KinveyResponse({
	            statusCode: response.statusCode,
	            headers: response.headers,
	            data: response.data
	          });
	        }

	        if (!response.isSuccess()) {
	          throw response.error;
	        }

	        if ((0, _utils.isDefined)(_this2.query) && (0, _utils.isDefined)(response.data)) {
	          response.data = _this2.query.process(response.data);
	        }

	        if ((0, _utils.isDefined)(_this2.aggregation) && (0, _utils.isDefined)(response.data)) {
	          response.data = _this2.aggregation.process(response.data);
	        }

	        return response;
	      });
	    }
	  }, {
	    key: 'toPlainObject',
	    value: function toPlainObject() {
	      var obj = _get(CacheRequest.prototype.__proto__ || Object.getPrototypeOf(CacheRequest.prototype), 'toPlainObject', this).call(this);
	      obj.appKey = this.appKey;
	      obj.collection = this.collection;
	      obj.entityId = this.entityId;
	      obj.encryptionKey = this.client ? this.client.encryptionKey : undefined;
	      return obj;
	    }
	  }, {
	    key: 'body',
	    get: function get() {
	      return this._body;
	    },
	    set: function set(body) {
	      this._body = (0, _cloneDeep2.default)(body);
	    }
	  }, {
	    key: 'query',
	    get: function get() {
	      return this._query;
	    },
	    set: function set(query) {
	      if ((0, _utils.isDefined)(query) && !(query instanceof _query2.default)) {
	        throw new _errors.KinveyError('Invalid query. It must be an instance of the Query class.');
	      }

	      this._query = query;
	    }
	  }, {
	    key: 'aggregation',
	    get: function get() {
	      return this._aggregation;
	    },
	    set: function set(aggregation) {
	      if ((0, _utils.isDefined)(aggregation) && !(aggregation instanceof _aggregation2.default)) {
	        throw new _errors.KinveyError('Invalid aggregation. It must be an instance of the Aggregation class.');
	      }

	      this._aggregation = aggregation;
	    }
	  }, {
	    key: 'url',
	    get: function get() {
	      return _get(CacheRequest.prototype.__proto__ || Object.getPrototypeOf(CacheRequest.prototype), 'url', this);
	    },
	    set: function set(urlString) {
	      _set(CacheRequest.prototype.__proto__ || Object.getPrototypeOf(CacheRequest.prototype), 'url', urlString, this);
	      var pathname = global.decodeURIComponent(_url2.default.parse(urlString).pathname);
	      var urlParts = pathname.replace(/^\//, '').split('/');

	      this.appKey = urlParts[1];
	      this.collection = urlParts[2];
	      this.entityId = urlParts[3];
	    }
	  }]);

	  return CacheRequest;
	}(_request2.default);

	exports.default = CacheRequest;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Generated by CoffeeScript 1.10.0
	var slice = [].slice;

	(function(root, factory) {
	  if (('function' === "function") && (__webpack_require__(247) != null)) {
	    return !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined" && exports !== null) {
	    return module.exports = factory();
	  } else {
	    return root.UrlPattern = factory();
	  }
	})(this, function() {
	  var P, UrlPattern, astNodeContainsSegmentsForProvidedParams, astNodeToNames, astNodeToRegexString, baseAstNodeToRegexString, concatMap, defaultOptions, escapeForRegex, getParam, keysAndValuesToObject, newParser, regexGroupCount, stringConcatMap, stringify;
	  escapeForRegex = function(string) {
	    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	  };
	  concatMap = function(array, f) {
	    var i, length, results;
	    results = [];
	    i = -1;
	    length = array.length;
	    while (++i < length) {
	      results = results.concat(f(array[i]));
	    }
	    return results;
	  };
	  stringConcatMap = function(array, f) {
	    var i, length, result;
	    result = '';
	    i = -1;
	    length = array.length;
	    while (++i < length) {
	      result += f(array[i]);
	    }
	    return result;
	  };
	  regexGroupCount = function(regex) {
	    return (new RegExp(regex.toString() + '|')).exec('').length - 1;
	  };
	  keysAndValuesToObject = function(keys, values) {
	    var i, key, length, object, value;
	    object = {};
	    i = -1;
	    length = keys.length;
	    while (++i < length) {
	      key = keys[i];
	      value = values[i];
	      if (value == null) {
	        continue;
	      }
	      if (object[key] != null) {
	        if (!Array.isArray(object[key])) {
	          object[key] = [object[key]];
	        }
	        object[key].push(value);
	      } else {
	        object[key] = value;
	      }
	    }
	    return object;
	  };
	  P = {};
	  P.Result = function(value, rest) {
	    this.value = value;
	    this.rest = rest;
	  };
	  P.Tagged = function(tag, value) {
	    this.tag = tag;
	    this.value = value;
	  };
	  P.tag = function(tag, parser) {
	    return function(input) {
	      var result, tagged;
	      result = parser(input);
	      if (result == null) {
	        return;
	      }
	      tagged = new P.Tagged(tag, result.value);
	      return new P.Result(tagged, result.rest);
	    };
	  };
	  P.regex = function(regex) {
	    return function(input) {
	      var matches, result;
	      matches = regex.exec(input);
	      if (matches == null) {
	        return;
	      }
	      result = matches[0];
	      return new P.Result(result, input.slice(result.length));
	    };
	  };
	  P.sequence = function() {
	    var parsers;
	    parsers = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return function(input) {
	      var i, length, parser, rest, result, values;
	      i = -1;
	      length = parsers.length;
	      values = [];
	      rest = input;
	      while (++i < length) {
	        parser = parsers[i];
	        result = parser(rest);
	        if (result == null) {
	          return;
	        }
	        values.push(result.value);
	        rest = result.rest;
	      }
	      return new P.Result(values, rest);
	    };
	  };
	  P.pick = function() {
	    var indexes, parsers;
	    indexes = arguments[0], parsers = 2 <= arguments.length ? slice.call(arguments, 1) : [];
	    return function(input) {
	      var array, result;
	      result = P.sequence.apply(P, parsers)(input);
	      if (result == null) {
	        return;
	      }
	      array = result.value;
	      result.value = array[indexes];
	      return result;
	    };
	  };
	  P.string = function(string) {
	    var length;
	    length = string.length;
	    return function(input) {
	      if (input.slice(0, length) === string) {
	        return new P.Result(string, input.slice(length));
	      }
	    };
	  };
	  P.lazy = function(fn) {
	    var cached;
	    cached = null;
	    return function(input) {
	      if (cached == null) {
	        cached = fn();
	      }
	      return cached(input);
	    };
	  };
	  P.baseMany = function(parser, end, stringResult, atLeastOneResultRequired, input) {
	    var endResult, parserResult, rest, results;
	    rest = input;
	    results = stringResult ? '' : [];
	    while (true) {
	      if (end != null) {
	        endResult = end(rest);
	        if (endResult != null) {
	          break;
	        }
	      }
	      parserResult = parser(rest);
	      if (parserResult == null) {
	        break;
	      }
	      if (stringResult) {
	        results += parserResult.value;
	      } else {
	        results.push(parserResult.value);
	      }
	      rest = parserResult.rest;
	    }
	    if (atLeastOneResultRequired && results.length === 0) {
	      return;
	    }
	    return new P.Result(results, rest);
	  };
	  P.many1 = function(parser) {
	    return function(input) {
	      return P.baseMany(parser, null, false, true, input);
	    };
	  };
	  P.concatMany1Till = function(parser, end) {
	    return function(input) {
	      return P.baseMany(parser, end, true, true, input);
	    };
	  };
	  P.firstChoice = function() {
	    var parsers;
	    parsers = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return function(input) {
	      var i, length, parser, result;
	      i = -1;
	      length = parsers.length;
	      while (++i < length) {
	        parser = parsers[i];
	        result = parser(input);
	        if (result != null) {
	          return result;
	        }
	      }
	    };
	  };
	  newParser = function(options) {
	    var U;
	    U = {};
	    U.wildcard = P.tag('wildcard', P.string(options.wildcardChar));
	    U.optional = P.tag('optional', P.pick(1, P.string(options.optionalSegmentStartChar), P.lazy(function() {
	      return U.pattern;
	    }), P.string(options.optionalSegmentEndChar)));
	    U.name = P.regex(new RegExp("^[" + options.segmentNameCharset + "]+"));
	    U.named = P.tag('named', P.pick(1, P.string(options.segmentNameStartChar), P.lazy(function() {
	      return U.name;
	    })));
	    U.escapedChar = P.pick(1, P.string(options.escapeChar), P.regex(/^./));
	    U["static"] = P.tag('static', P.concatMany1Till(P.firstChoice(P.lazy(function() {
	      return U.escapedChar;
	    }), P.regex(/^./)), P.firstChoice(P.string(options.segmentNameStartChar), P.string(options.optionalSegmentStartChar), P.string(options.optionalSegmentEndChar), U.wildcard)));
	    U.token = P.lazy(function() {
	      return P.firstChoice(U.wildcard, U.optional, U.named, U["static"]);
	    });
	    U.pattern = P.many1(P.lazy(function() {
	      return U.token;
	    }));
	    return U;
	  };
	  defaultOptions = {
	    escapeChar: '\\',
	    segmentNameStartChar: ':',
	    segmentValueCharset: 'a-zA-Z0-9-_~ %',
	    segmentNameCharset: 'a-zA-Z0-9',
	    optionalSegmentStartChar: '(',
	    optionalSegmentEndChar: ')',
	    wildcardChar: '*'
	  };
	  baseAstNodeToRegexString = function(astNode, segmentValueCharset) {
	    if (Array.isArray(astNode)) {
	      return stringConcatMap(astNode, function(node) {
	        return baseAstNodeToRegexString(node, segmentValueCharset);
	      });
	    }
	    switch (astNode.tag) {
	      case 'wildcard':
	        return '(.*?)';
	      case 'named':
	        return "([" + segmentValueCharset + "]+)";
	      case 'static':
	        return escapeForRegex(astNode.value);
	      case 'optional':
	        return '(?:' + baseAstNodeToRegexString(astNode.value, segmentValueCharset) + ')?';
	    }
	  };
	  astNodeToRegexString = function(astNode, segmentValueCharset) {
	    if (segmentValueCharset == null) {
	      segmentValueCharset = defaultOptions.segmentValueCharset;
	    }
	    return '^' + baseAstNodeToRegexString(astNode, segmentValueCharset) + '$';
	  };
	  astNodeToNames = function(astNode) {
	    if (Array.isArray(astNode)) {
	      return concatMap(astNode, astNodeToNames);
	    }
	    switch (astNode.tag) {
	      case 'wildcard':
	        return ['_'];
	      case 'named':
	        return [astNode.value];
	      case 'static':
	        return [];
	      case 'optional':
	        return astNodeToNames(astNode.value);
	    }
	  };
	  getParam = function(params, key, nextIndexes, sideEffects) {
	    var index, maxIndex, result, value;
	    if (sideEffects == null) {
	      sideEffects = false;
	    }
	    value = params[key];
	    if (value == null) {
	      if (sideEffects) {
	        throw new Error("no values provided for key `" + key + "`");
	      } else {
	        return;
	      }
	    }
	    index = nextIndexes[key] || 0;
	    maxIndex = Array.isArray(value) ? value.length - 1 : 0;
	    if (index > maxIndex) {
	      if (sideEffects) {
	        throw new Error("too few values provided for key `" + key + "`");
	      } else {
	        return;
	      }
	    }
	    result = Array.isArray(value) ? value[index] : value;
	    if (sideEffects) {
	      nextIndexes[key] = index + 1;
	    }
	    return result;
	  };
	  astNodeContainsSegmentsForProvidedParams = function(astNode, params, nextIndexes) {
	    var i, length;
	    if (Array.isArray(astNode)) {
	      i = -1;
	      length = astNode.length;
	      while (++i < length) {
	        if (astNodeContainsSegmentsForProvidedParams(astNode[i], params, nextIndexes)) {
	          return true;
	        }
	      }
	      return false;
	    }
	    switch (astNode.tag) {
	      case 'wildcard':
	        return getParam(params, '_', nextIndexes, false) != null;
	      case 'named':
	        return getParam(params, astNode.value, nextIndexes, false) != null;
	      case 'static':
	        return false;
	      case 'optional':
	        return astNodeContainsSegmentsForProvidedParams(astNode.value, params, nextIndexes);
	    }
	  };
	  stringify = function(astNode, params, nextIndexes) {
	    if (Array.isArray(astNode)) {
	      return stringConcatMap(astNode, function(node) {
	        return stringify(node, params, nextIndexes);
	      });
	    }
	    switch (astNode.tag) {
	      case 'wildcard':
	        return getParam(params, '_', nextIndexes, true);
	      case 'named':
	        return getParam(params, astNode.value, nextIndexes, true);
	      case 'static':
	        return astNode.value;
	      case 'optional':
	        if (astNodeContainsSegmentsForProvidedParams(astNode.value, params, nextIndexes)) {
	          return stringify(astNode.value, params, nextIndexes);
	        } else {
	          return '';
	        }
	    }
	  };
	  UrlPattern = function(arg1, arg2) {
	    var groupCount, options, parsed, parser, withoutWhitespace;
	    if (arg1 instanceof UrlPattern) {
	      this.isRegex = arg1.isRegex;
	      this.regex = arg1.regex;
	      this.ast = arg1.ast;
	      this.names = arg1.names;
	      return;
	    }
	    this.isRegex = arg1 instanceof RegExp;
	    if (!(('string' === typeof arg1) || this.isRegex)) {
	      throw new TypeError('argument must be a regex or a string');
	    }
	    if (this.isRegex) {
	      this.regex = arg1;
	      if (arg2 != null) {
	        if (!Array.isArray(arg2)) {
	          throw new Error('if first argument is a regex the second argument may be an array of group names but you provided something else');
	        }
	        groupCount = regexGroupCount(this.regex);
	        if (arg2.length !== groupCount) {
	          throw new Error("regex contains " + groupCount + " groups but array of group names contains " + arg2.length);
	        }
	        this.names = arg2;
	      }
	      return;
	    }
	    if (arg1 === '') {
	      throw new Error('argument must not be the empty string');
	    }
	    withoutWhitespace = arg1.replace(/\s+/g, '');
	    if (withoutWhitespace !== arg1) {
	      throw new Error('argument must not contain whitespace');
	    }
	    options = {
	      escapeChar: (arg2 != null ? arg2.escapeChar : void 0) || defaultOptions.escapeChar,
	      segmentNameStartChar: (arg2 != null ? arg2.segmentNameStartChar : void 0) || defaultOptions.segmentNameStartChar,
	      segmentNameCharset: (arg2 != null ? arg2.segmentNameCharset : void 0) || defaultOptions.segmentNameCharset,
	      segmentValueCharset: (arg2 != null ? arg2.segmentValueCharset : void 0) || defaultOptions.segmentValueCharset,
	      optionalSegmentStartChar: (arg2 != null ? arg2.optionalSegmentStartChar : void 0) || defaultOptions.optionalSegmentStartChar,
	      optionalSegmentEndChar: (arg2 != null ? arg2.optionalSegmentEndChar : void 0) || defaultOptions.optionalSegmentEndChar,
	      wildcardChar: (arg2 != null ? arg2.wildcardChar : void 0) || defaultOptions.wildcardChar
	    };
	    parser = newParser(options);
	    parsed = parser.pattern(arg1);
	    if (parsed == null) {
	      throw new Error("couldn't parse pattern");
	    }
	    if (parsed.rest !== '') {
	      throw new Error("could only partially parse pattern");
	    }
	    this.ast = parsed.value;
	    this.regex = new RegExp(astNodeToRegexString(this.ast, options.segmentValueCharset));
	    this.names = astNodeToNames(this.ast);
	  };
	  UrlPattern.prototype.match = function(url) {
	    var groups, match;
	    match = this.regex.exec(url);
	    if (match == null) {
	      return null;
	    }
	    groups = match.slice(1);
	    if (this.names) {
	      return keysAndValuesToObject(this.names, groups);
	    } else {
	      return groups;
	    }
	  };
	  UrlPattern.prototype.stringify = function(params) {
	    if (params == null) {
	      params = {};
	    }
	    if (this.isRegex) {
	      throw new Error("can't stringify patterns generated from a regex");
	    }
	    if (params !== Object(params)) {
	      throw new Error("argument must be an object or undefined");
	    }
	    return stringify(this.ast, params, {});
	  };
	  UrlPattern.escapeForRegex = escapeForRegex;
	  UrlPattern.concatMap = concatMap;
	  UrlPattern.stringConcatMap = stringConcatMap;
	  UrlPattern.regexGroupCount = regexGroupCount;
	  UrlPattern.keysAndValuesToObject = keysAndValuesToObject;
	  UrlPattern.P = P;
	  UrlPattern.newParser = newParser;
	  UrlPattern.defaultOptions = defaultOptions;
	  UrlPattern.astNodeToRegexString = astNodeToRegexString;
	  UrlPattern.astNodeToNames = astNodeToNames;
	  UrlPattern.getParam = getParam;
	  UrlPattern.astNodeContainsSegmentsForProvidedParams = astNodeContainsSegmentsForProvidedParams;
	  UrlPattern.stringify = stringify;
	  return UrlPattern;
	});


/***/ }),
/* 247 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

	var baseClone = __webpack_require__(249);

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1,
	    CLONE_SYMBOLS_FLAG = 4;

	/**
	 * This method is like `_.clone` except that it recursively clones `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.0.0
	 * @category Lang
	 * @param {*} value The value to recursively clone.
	 * @returns {*} Returns the deep cloned value.
	 * @see _.clone
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var deep = _.cloneDeep(objects);
	 * console.log(deep[0] === objects[0]);
	 * // => false
	 */
	function cloneDeep(value) {
	  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
	}

	module.exports = cloneDeep;


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(182),
	    arrayEach = __webpack_require__(250),
	    assignValue = __webpack_require__(80),
	    baseAssign = __webpack_require__(251),
	    baseAssignIn = __webpack_require__(252),
	    cloneBuffer = __webpack_require__(256),
	    copyArray = __webpack_require__(257),
	    copySymbols = __webpack_require__(258),
	    copySymbolsIn = __webpack_require__(259),
	    getAllKeys = __webpack_require__(197),
	    getAllKeysIn = __webpack_require__(261),
	    getTag = __webpack_require__(133),
	    initCloneArray = __webpack_require__(262),
	    initCloneByTag = __webpack_require__(263),
	    initCloneObject = __webpack_require__(273),
	    isArray = __webpack_require__(119),
	    isBuffer = __webpack_require__(120),
	    isObject = __webpack_require__(92),
	    keys = __webpack_require__(113);

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1,
	    CLONE_FLAT_FLAG = 2,
	    CLONE_SYMBOLS_FLAG = 4;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Deep clone
	 *  2 - Flatten inherited properties
	 *  4 - Clone symbols
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, bitmask, customizer, key, object, stack) {
	  var result,
	      isDeep = bitmask & CLONE_DEEP_FLAG,
	      isFlat = bitmask & CLONE_FLAT_FLAG,
	      isFull = bitmask & CLONE_SYMBOLS_FLAG;

	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;

	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      result = (isFlat || isFunc) ? {} : initCloneObject(value);
	      if (!isDeep) {
	        return isFlat
	          ? copySymbolsIn(value, baseAssignIn(result, value))
	          : copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, baseClone, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  var keysFunc = isFull
	    ? (isFlat ? getAllKeysIn : getAllKeys)
	    : (isFlat ? keysIn : keys);

	  var props = isArr ? undefined : keysFunc(value);
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
	  });
	  return result;
	}

	module.exports = baseClone;


/***/ }),
/* 250 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	module.exports = arrayEach;


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(98),
	    keys = __webpack_require__(113);

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}

	module.exports = baseAssign;


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(98),
	    keysIn = __webpack_require__(253);

	/**
	 * The base implementation of `_.assignIn` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssignIn(object, source) {
	  return object && copyObject(source, keysIn(source), object);
	}

	module.exports = baseAssignIn;


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(114),
	    baseKeysIn = __webpack_require__(254),
	    isArrayLike = __webpack_require__(109);

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	module.exports = keysIn;


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(92),
	    isPrototype = __webpack_require__(112),
	    nativeKeysIn = __webpack_require__(255);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeysIn;


/***/ }),
/* 255 */
/***/ (function(module, exports) {

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = nativeKeysIn;


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(88);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

	  buffer.copy(result);
	  return result;
	}

	module.exports = cloneBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(69)(module)))

/***/ }),
/* 257 */
/***/ (function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	module.exports = copyArray;


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(98),
	    getSymbols = __webpack_require__(199);

	/**
	 * Copies own symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}

	module.exports = copySymbols;


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(98),
	    getSymbolsIn = __webpack_require__(260);

	/**
	 * Copies own and inherited symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbolsIn(source, object) {
	  return copyObject(source, getSymbolsIn(source), object);
	}

	module.exports = copySymbolsIn;


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(177),
	    getPrototype = __webpack_require__(130),
	    getSymbols = __webpack_require__(199),
	    stubArray = __webpack_require__(201);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own and inherited enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
	  var result = [];
	  while (object) {
	    arrayPush(result, getSymbols(object));
	    object = getPrototype(object);
	  }
	  return result;
	};

	module.exports = getSymbolsIn;


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(198),
	    getSymbolsIn = __webpack_require__(260),
	    keysIn = __webpack_require__(253);

	/**
	 * Creates an array of own and inherited enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeysIn(object) {
	  return baseGetAllKeys(object, keysIn, getSymbolsIn);
	}

	module.exports = getAllKeysIn;


/***/ }),
/* 262 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	module.exports = initCloneArray;


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(264),
	    cloneDataView = __webpack_require__(265),
	    cloneMap = __webpack_require__(266),
	    cloneRegExp = __webpack_require__(268),
	    cloneSet = __webpack_require__(269),
	    cloneSymbol = __webpack_require__(271),
	    cloneTypedArray = __webpack_require__(272);

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, cloneFunc, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return cloneArrayBuffer(object);

	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);

	    case dataViewTag:
	      return cloneDataView(object, isDeep);

	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      return cloneTypedArray(object, isDeep);

	    case mapTag:
	      return cloneMap(object, isDeep, cloneFunc);

	    case numberTag:
	    case stringTag:
	      return new Ctor(object);

	    case regexpTag:
	      return cloneRegExp(object);

	    case setTag:
	      return cloneSet(object, isDeep, cloneFunc);

	    case symbolTag:
	      return cloneSymbol(object);
	  }
	}

	module.exports = initCloneByTag;


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

	var Uint8Array = __webpack_require__(193);

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}

	module.exports = cloneArrayBuffer;


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(264);

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	module.exports = cloneDataView;


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

	var addMapEntry = __webpack_require__(267),
	    arrayReduce = __webpack_require__(240),
	    mapToArray = __webpack_require__(194);

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1;

	/**
	 * Creates a clone of `map`.
	 *
	 * @private
	 * @param {Object} map The map to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned map.
	 */
	function cloneMap(map, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
	  return arrayReduce(array, addMapEntry, new map.constructor);
	}

	module.exports = cloneMap;


/***/ }),
/* 267 */
/***/ (function(module, exports) {

	/**
	 * Adds the key-value `pair` to `map`.
	 *
	 * @private
	 * @param {Object} map The map to modify.
	 * @param {Array} pair The key-value pair to add.
	 * @returns {Object} Returns `map`.
	 */
	function addMapEntry(map, pair) {
	  // Don't return `map.set` because it's not chainable in IE 11.
	  map.set(pair[0], pair[1]);
	  return map;
	}

	module.exports = addMapEntry;


/***/ }),
/* 268 */
/***/ (function(module, exports) {

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	module.exports = cloneRegExp;


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

	var addSetEntry = __webpack_require__(270),
	    arrayReduce = __webpack_require__(240),
	    setToArray = __webpack_require__(195);

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1;

	/**
	 * Creates a clone of `set`.
	 *
	 * @private
	 * @param {Object} set The set to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned set.
	 */
	function cloneSet(set, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
	  return arrayReduce(array, addSetEntry, new set.constructor);
	}

	module.exports = cloneSet;


/***/ }),
/* 270 */
/***/ (function(module, exports) {

	/**
	 * Adds `value` to `set`.
	 *
	 * @private
	 * @param {Object} set The set to modify.
	 * @param {*} value The value to add.
	 * @returns {Object} Returns `set`.
	 */
	function addSetEntry(set, value) {
	  // Don't return `set.add` because it's not chainable in IE 11.
	  set.add(value);
	  return set;
	}

	module.exports = addSetEntry;


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(87);

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}

	module.exports = cloneSymbol;


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(264);

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	module.exports = cloneTypedArray;


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(274),
	    getPrototype = __webpack_require__(130),
	    isPrototype = __webpack_require__(112);

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}

	module.exports = initCloneObject;


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(92);

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());

	module.exports = baseCreate;


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _sift = __webpack_require__(276);

	var _sift2 = _interopRequireDefault(_sift);

	var _assign = __webpack_require__(79);

	var _assign2 = _interopRequireDefault(_assign);

	var _isArray = __webpack_require__(119);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _isNumber = __webpack_require__(277);

	var _isNumber2 = _interopRequireDefault(_isNumber);

	var _isString = __webpack_require__(131);

	var _isString2 = _interopRequireDefault(_isString);

	var _isObject = __webpack_require__(92);

	var _isObject2 = _interopRequireDefault(_isObject);

	var _isRegExp = __webpack_require__(278);

	var _isRegExp2 = _interopRequireDefault(_isRegExp);

	var _isEmpty = __webpack_require__(132);

	var _isEmpty2 = _interopRequireDefault(_isEmpty);

	var _forEach = __webpack_require__(280);

	var _forEach2 = _interopRequireDefault(_forEach);

	var _findKey = __webpack_require__(282);

	var _findKey2 = _interopRequireDefault(_findKey);

	var _has = __webpack_require__(284);

	var _has2 = _interopRequireDefault(_has);

	var _errors = __webpack_require__(2);

	var _utils = __webpack_require__(40);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var unsupportedFilters = ['$nearSphere'];

	var Query = function () {
	  function Query(options) {
	    _classCallCheck(this, Query);

	    options = (0, _assign2.default)({
	      fields: [],
	      filter: {},
	      sort: null,
	      limit: null,
	      skip: 0
	    }, options);

	    this.fields = options.fields;

	    this.filter = options.filter;

	    this.sort = options.sort;

	    this.limit = options.limit;

	    this.skip = options.skip;

	    this._parent = null;
	  }

	  _createClass(Query, [{
	    key: 'isSupportedOffline',
	    value: function isSupportedOffline() {
	      var _this = this;

	      var supported = true;

	      (0, _forEach2.default)(unsupportedFilters, function (filter) {
	        supported = !(0, _findKey2.default)(_this.filter, filter);
	        return supported;
	      });

	      return supported;
	    }
	  }, {
	    key: 'equalTo',
	    value: function equalTo(field, value) {
	      return this.addFilter(field, value);
	    }
	  }, {
	    key: 'contains',
	    value: function contains(field, values) {
	      if ((0, _utils.isDefined)(values) === false) {
	        throw new _errors.QueryError('You must supply a value.');
	      }

	      if ((0, _isArray2.default)(values) === false) {
	        values = [values];
	      }

	      return this.addFilter(field, '$in', values);
	    }
	  }, {
	    key: 'containsAll',
	    value: function containsAll(field, values) {
	      if ((0, _utils.isDefined)(values) === false) {
	        throw new _errors.QueryError('You must supply a value.');
	      }

	      if ((0, _isArray2.default)(values) === false) {
	        values = [values];
	      }

	      return this.addFilter(field, '$all', values);
	    }
	  }, {
	    key: 'greaterThan',
	    value: function greaterThan(field, value) {
	      if ((0, _isNumber2.default)(value) === false && (0, _isString2.default)(value) === false) {
	        throw new _errors.QueryError('You must supply a number or string.');
	      }

	      return this.addFilter(field, '$gt', value);
	    }
	  }, {
	    key: 'greaterThanOrEqualTo',
	    value: function greaterThanOrEqualTo(field, value) {
	      if ((0, _isNumber2.default)(value) === false && (0, _isString2.default)(value) === false) {
	        throw new _errors.QueryError('You must supply a number or string.');
	      }

	      return this.addFilter(field, '$gte', value);
	    }
	  }, {
	    key: 'lessThan',
	    value: function lessThan(field, value) {
	      if ((0, _isNumber2.default)(value) === false && (0, _isString2.default)(value) === false) {
	        throw new _errors.QueryError('You must supply a number or string.');
	      }

	      return this.addFilter(field, '$lt', value);
	    }
	  }, {
	    key: 'lessThanOrEqualTo',
	    value: function lessThanOrEqualTo(field, value) {
	      if ((0, _isNumber2.default)(value) === false && (0, _isString2.default)(value) === false) {
	        throw new _errors.QueryError('You must supply a number or string.');
	      }

	      return this.addFilter(field, '$lte', value);
	    }
	  }, {
	    key: 'notEqualTo',
	    value: function notEqualTo(field, value) {
	      return this.addFilter(field, '$ne', value);
	    }
	  }, {
	    key: 'notContainedIn',
	    value: function notContainedIn(field, values) {
	      if ((0, _isArray2.default)(values) === false) {
	        values = [values];
	      }

	      return this.addFilter(field, '$nin', values);
	    }
	  }, {
	    key: 'and',
	    value: function and() {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return this.join('$and', args);
	    }
	  }, {
	    key: 'nor',
	    value: function nor() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      if ((0, _utils.isDefined)(this._parent) && (0, _has2.default)(this._parent.filter, '$and')) {
	        var _parent;

	        return (_parent = this._parent).nor.apply(_parent, args);
	      }

	      return this.join('$nor', args);
	    }
	  }, {
	    key: 'or',
	    value: function or() {
	      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        args[_key3] = arguments[_key3];
	      }

	      if ((0, _utils.isDefined)(this._parent)) {
	        var _parent2;

	        return (_parent2 = this._parent).or.apply(_parent2, args);
	      }

	      return this.join('$or', args);
	    }
	  }, {
	    key: 'exists',
	    value: function exists(field, flag) {
	      flag = typeof flag === 'undefined' ? true : flag || false;
	      return this.addFilter(field, '$exists', flag);
	    }
	  }, {
	    key: 'mod',
	    value: function mod(field, divisor) {
	      var remainder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

	      if ((0, _isString2.default)(divisor)) {
	        divisor = parseFloat(divisor);
	      }

	      if ((0, _isString2.default)(remainder)) {
	        remainder = parseFloat(remainder);
	      }

	      if (!(0, _isNumber2.default)(divisor)) {
	        throw new _errors.QueryError('divisor must be a number');
	      }

	      if (!(0, _isNumber2.default)(remainder)) {
	        throw new _errors.QueryError('remainder must be a number');
	      }

	      return this.addFilter(field, '$mod', [divisor, remainder]);
	    }
	  }, {
	    key: 'matches',
	    value: function matches(field, regExp) {
	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      var flags = [];

	      if (!(0, _isRegExp2.default)(regExp)) {
	        regExp = new RegExp(regExp);
	      }

	      if (regExp.source.indexOf('^') !== 0) {
	        throw new _errors.QueryError('regExp must have \'^\' at the beginning of the expression' + ' to make it an anchored expression.');
	      }

	      if ((regExp.ignoreCase || options.ignoreCase) && options.ignoreCase !== false) {
	        throw new _errors.QueryError('ignoreCase flag is not supported');
	      }

	      if ((regExp.multiline || options.multiline) && options.multiline !== false) {
	        flags.push('m');
	      }

	      if (options.extended === true) {
	        flags.push('x');
	      }

	      if (options.dotMatchesAll === true) {
	        flags.push('s');
	      }

	      if (flags.length > 0) {
	        this.addFilter(field, '$options', flags.join(''));
	      }

	      return this.addFilter(field, '$regex', regExp.source);
	    }
	  }, {
	    key: 'near',
	    value: function near(field, coord, maxDistance) {
	      if (!(0, _isArray2.default)(coord) || !(0, _isNumber2.default)(coord[0]) || !(0, _isNumber2.default)(coord[1])) {
	        throw new _errors.QueryError('coord must be a [number, number]');
	      }

	      var result = this.addFilter(field, '$nearSphere', [coord[0], coord[1]]);

	      if ((0, _isNumber2.default)(maxDistance)) {
	        this.addFilter(field, '$maxDistance', maxDistance);
	      }

	      return result;
	    }
	  }, {
	    key: 'withinBox',
	    value: function withinBox(field, bottomLeftCoord, upperRightCoord) {
	      if (!(0, _isArray2.default)(bottomLeftCoord) || !(0, _isNumber2.default)(bottomLeftCoord[0]) || !(0, _isNumber2.default)(bottomLeftCoord[1])) {
	        throw new _errors.QueryError('bottomLeftCoord must be a [number, number]');
	      }

	      if (!(0, _isArray2.default)(upperRightCoord) || !(0, _isNumber2.default)(upperRightCoord[0]) || !(0, _isNumber2.default)(upperRightCoord[1])) {
	        throw new _errors.QueryError('upperRightCoord must be a [number, number]');
	      }

	      bottomLeftCoord[0] = parseFloat(bottomLeftCoord[0]);
	      bottomLeftCoord[1] = parseFloat(bottomLeftCoord[1]);
	      upperRightCoord[0] = parseFloat(upperRightCoord[0]);
	      upperRightCoord[1] = parseFloat(upperRightCoord[1]);

	      var coords = [[bottomLeftCoord[0], bottomLeftCoord[1]], [upperRightCoord[0], upperRightCoord[1]]];
	      return this.addFilter(field, '$within', { $box: coords });
	    }
	  }, {
	    key: 'withinPolygon',
	    value: function withinPolygon(field, coords) {
	      if ((0, _isArray2.default)(coords) === false || coords.length === 0 || coords.length > 3) {
	        throw new _errors.QueryError('coords must be a [[number, number]]');
	      }

	      coords = coords.map(function (coord) {
	        if ((0, _isNumber2.default)(coord[0]) === false || (0, _isNumber2.default)(coord[1]) === false) {
	          throw new _errors.QueryError('coords argument must be a [number, number]');
	        }

	        return [parseFloat(coord[0]), parseFloat(coord[1])];
	      });

	      return this.addFilter(field, '$within', { $polygon: coords });
	    }
	  }, {
	    key: 'size',
	    value: function size(field, _size) {
	      if ((0, _isString2.default)(_size)) {
	        _size = parseFloat(_size);
	      }

	      if (!(0, _isNumber2.default)(_size)) {
	        throw new _errors.QueryError('size must be a number');
	      }

	      return this.addFilter(field, '$size', _size);
	    }
	  }, {
	    key: 'ascending',
	    value: function ascending(field) {
	      if ((0, _utils.isDefined)(this._parent)) {
	        this._parent.ascending(field);
	      } else {
	        this.sort[field] = 1;
	      }

	      return this;
	    }
	  }, {
	    key: 'descending',
	    value: function descending(field) {
	      if ((0, _utils.isDefined)(this._parent)) {
	        this._parent.descending(field);
	      } else {
	        this.sort[field] = -1;
	      }

	      return this;
	    }
	  }, {
	    key: 'addFilter',
	    value: function addFilter(field, condition, values) {
	      if (!(0, _isObject2.default)(this.filter[field])) {
	        this.filter[field] = {};
	      }

	      if ((0, _utils.isDefined)(condition) && (0, _utils.isDefined)(values)) {
	        this.filter[field][condition] = values;
	      } else {
	        this.filter[field] = condition;
	      }

	      return this;
	    }
	  }, {
	    key: 'join',
	    value: function join(operator, queries) {
	      var _this2 = this;

	      var that = this;
	      var currentQuery = {};

	      queries = queries.map(function (query) {
	        if (!(query instanceof Query)) {
	          if ((0, _isObject2.default)(query)) {
	            query = new Query(query);
	          } else {
	            throw new _errors.QueryError('query argument must be of type: Kinvey.Query[] or Object[].');
	          }
	        }

	        return query.toPlainObject().filter;
	      });

	      if (queries.length === 0) {
	        that = new Query();
	        queries = [that.toPlainObject().filter];
	        that._parent = this;
	      }

	      var members = Object.keys(this.filter);
	      (0, _forEach2.default)(members, function (member) {
	        currentQuery[member] = _this2.filter[member];
	        delete _this2.filter[member];
	      });

	      this.filter[operator] = [currentQuery].concat(queries);

	      return that;
	    }
	  }, {
	    key: 'process',
	    value: function process(data) {
	      if (this.isSupportedOffline() === false) {
	        var message = 'This query is not able to run locally. The following filters are not supported' + ' locally:';

	        (0, _forEach2.default)(unsupportedFilters, function (filter) {
	          message = message + ' ' + filter;
	        });

	        _utils.Log.error(message);
	        throw new _errors.QueryError(message);
	      }

	      if (!(0, _isArray2.default)(data)) {
	        throw new _errors.QueryError('data argument must be of type: Array.');
	      }

	      _utils.Log.debug('Data length before processiong query', data.length);

	      var json = this.toPlainObject();
	      data = (0, _sift2.default)(json.filter, data);

	      _utils.Log.debug('Data length after applying query filter', json.filter, data.length);

	      if ((0, _isArray2.default)(json.fields) && json.fields.length > 0) {
	        _utils.Log.debug('Removing fields from data', json.fields);
	        data = data.map(function (item) {
	          var keys = Object.keys(item);
	          (0, _forEach2.default)(keys, function (key) {
	            if (json.fields.indexOf(key) === -1) {
	              delete item[key];
	            }
	          });

	          return item;
	        });
	      }

	      if ((0, _utils.isDefined)(json.sort)) {
	        _utils.Log.debug('Sorting data', json.sort);
	        data.sort(function (a, b) {
	          for (var field in json.sort) {
	            if (json.sort.hasOwnProperty(field)) {
	              var aField = (0, _utils.nested)(a, field);
	              var bField = (0, _utils.nested)(b, field);

	              if ((0, _utils.isDefined)(aField) && (0, _utils.isDefined)(bField) === false) {
	                return -1;
	              } else if ((0, _utils.isDefined)(bField) && (0, _utils.isDefined)(aField) === false) {
	                return 1;
	              } else if (aField !== bField) {
	                var modifier = json.sort[field];
	                return (aField < bField ? -1 : 1) * modifier;
	              }
	            }
	          }

	          return 0;
	        });
	      }

	      if ((0, _isNumber2.default)(json.skip)) {
	        if ((0, _isNumber2.default)(json.limit) && json.limit > 0) {
	          _utils.Log.debug('Skipping and limiting data', json.skip, json.limit);
	          return data.slice(json.skip, json.skip + json.limit);
	        }

	        _utils.Log.debug('Skipping data', json.skip);
	        return data.slice(json.skip);
	      }

	      return data;
	    }
	  }, {
	    key: 'toPlainObject',
	    value: function toPlainObject() {
	      if ((0, _utils.isDefined)(this._parent)) {
	        return this._parent.toPlainObject();
	      }

	      var json = {
	        fields: this.fields,
	        filter: this.filter,
	        sort: this.sort,
	        skip: this.skip,
	        limit: this.limit
	      };

	      return json;
	    }
	  }, {
	    key: 'toQueryString',
	    value: function toQueryString() {
	      var queryString = {};

	      if (!(0, _isEmpty2.default)(this.filter)) {
	        queryString.query = this.filter;
	      }

	      if (!(0, _isEmpty2.default)(this.fields)) {
	        queryString.fields = this.fields.join(',');
	      }

	      if ((0, _isNumber2.default)(this.limit)) {
	        queryString.limit = this.limit;
	      }

	      if ((0, _isNumber2.default)(this.skip) && this.skip > 0) {
	        queryString.skip = this.skip;
	      }

	      if (!(0, _isEmpty2.default)(this.sort)) {
	        queryString.sort = this.sort;
	      }

	      var keys = Object.keys(queryString);
	      (0, _forEach2.default)(keys, function (key) {
	        queryString[key] = (0, _isString2.default)(queryString[key]) ? queryString[key] : JSON.stringify(queryString[key]);
	      });

	      return queryString;
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return JSON.stringify(this.toQueryString());
	    }
	  }, {
	    key: 'fields',
	    get: function get() {
	      return this._fields;
	    },
	    set: function set(fields) {
	      fields = fields || [];

	      if (!(0, _isArray2.default)(fields)) {
	        throw new _errors.QueryError('fields must be an Array');
	      }

	      if ((0, _utils.isDefined)(this._parent)) {
	        this._parent.fields = fields;
	      } else {
	        this._fields = fields;
	      }
	    }
	  }, {
	    key: 'filter',
	    get: function get() {
	      return this._filter;
	    },
	    set: function set(filter) {
	      this._filter = filter;
	    }
	  }, {
	    key: 'sort',
	    get: function get() {
	      return this._sort;
	    },
	    set: function set(sort) {
	      if (sort && (0, _isObject2.default)(sort) === false) {
	        throw new _errors.QueryError('sort must an Object');
	      }

	      if ((0, _utils.isDefined)(this._parent)) {
	        this._parent.sort = sort;
	      } else {
	        this._sort = sort || {};
	      }
	    }
	  }, {
	    key: 'limit',
	    get: function get() {
	      return this._limit;
	    },
	    set: function set(limit) {
	      if ((0, _isString2.default)(limit)) {
	        limit = parseFloat(limit);
	      }

	      if ((0, _utils.isDefined)(limit) && (0, _isNumber2.default)(limit) === false) {
	        throw new _errors.QueryError('limit must be a number');
	      }

	      if (this._parent) {
	        this._parent.limit = limit;
	      } else {
	        this._limit = limit;
	      }
	    }
	  }, {
	    key: 'skip',
	    get: function get() {
	      return this._skip;
	    },
	    set: function set(skip) {
	      if ((0, _isString2.default)(skip)) {
	        skip = parseFloat(skip);
	      }

	      if ((0, _isNumber2.default)(skip) === false) {
	        throw new _errors.QueryError('skip must be a number');
	      }

	      if ((0, _utils.isDefined)(this._parent)) {
	        this._parent.skip = skip;
	      } else {
	        this._skip = skip;
	      }
	    }
	  }]);

	  return Query;
	}();

	exports.default = Query;

/***/ }),
/* 276 */
/***/ (function(module, exports) {

	/*
	 * Sift 3.x
	 *
	 * Copryright 2015, Craig Condon
	 * Licensed under MIT
	 *
	 * Filter JavaScript objects with mongodb queries
	 */

	(function() {

	  'use strict';

	  /**
	   */

	  function isFunction(value) {
	    return typeof value === 'function';
	  }

	  /**
	   */

	  function isArray(value) {
	    return Object.prototype.toString.call(value) === '[object Array]';
	  }

	  /**
	   */

	  function comparable(value) {
	    if (value instanceof Date) {
	      return value.getTime();
	    } else if (value instanceof Array) {
	      return value.map(comparable);
	    } else {
	      return value;
	    }
	  }

	  function get(obj, key) {
	    if (obj.get) {
	      return obj.get(key);
	    }
	    return obj[key];
	  }

	  /**
	   */

	  function or(validator) {
	    return function(a, b) {
	      if (!isArray(b) || !b.length) {
	        return validator(a, b);
	      }
	      for (var i = 0, n = b.length; i < n; i++) {
	        if (validator(a, get(b,i))) return true;
	      }
	      return false;
	    }
	  }

	  /**
	   */

	  function and(validator) {
	    return function(a, b) {
	      if (!isArray(b) || !b.length) {
	        return validator(a, b);
	      }
	      for (var i = 0, n = b.length; i < n; i++) {
	        if (!validator(a, get(b, i))) return false;
	      }
	      return true;
	    };
	  }

	  function validate(validator, b) {
	    return validator.v(validator.a, b);
	  }

	  var operator = {

	    /**
	     */

	    $eq: or(function(a, b) {
	      return a(b);
	    }),

	    /**
	     */

	    $ne: and(function(a, b) {
	      return !a(b);
	    }),

	    /**
	     */

	    $or: function(a, b) {
	      for (var i = 0, n = a.length; i < n; i++) if (validate(get(a, i), b)) return true;
	      return false;
	    },

	    /**
	     */

	    $gt: or(function(a, b) {
	      return sift.compare(comparable(b), a) > 0;
	    }),

	    /**
	     */

	    $gte: or(function(a, b) {
	      return sift.compare(comparable(b), a) >= 0;
	    }),

	    /**
	     */

	    $lt: or(function(a, b) {
	      return sift.compare(comparable(b), a) < 0;
	    }),

	    /**
	     */

	    $lte: or(function(a, b) {
	      return sift.compare(comparable(b), a) <= 0;
	    }),

	    /**
	     */

	    $mod: or(function(a, b) {
	      return b % a[0] == a[1];
	    }),

	    /**
	     */

	    $in: function(a, b) {

	      if (b instanceof Array) {
	        for (var i = b.length; i--;) {
	          if (~a.indexOf(comparable(get(b, i)))) {
	            return true;
	          }
	        }
	      } else {
	        var comparableB = comparable(b);
	        if (comparableB === b && typeof b === 'object') {
	          for (var i = a.length; i--;) {
	            if (String(a[i]) === String(b) && String(b) !== '[object Object]') {
	              return true;
	            }
	          }
	        }

	        /*
	          Handles documents that are undefined, whilst also
	          having a 'null' element in the parameters to $in.
	        */
	        if (typeof comparableB == 'undefined') {
	          for (var i = a.length; i--;) {
	            if (a[i] == null) {
	              return true;
	            }
	          }
	        }

	        /*
	          Handles the case of {'field': {$in: [/regexp1/, /regexp2/, ...]}}
	        */
	        for (var i = a.length; i--;) {
	          var validator = createRootValidator(get(a, i), undefined);
	          var result = validate(validator, b);
	          if ((result) && (String(result) !== '[object Object]') && (String(b) !== '[object Object]')) {
	            return true;
	          }
	        }

	        return Boolean(!!~a.indexOf(comparable(b)));
	      }

	      return false;
	    },

	    /**
	     */

	    $nin: function(a, b) {
	      return !operator.$in(a, b);
	    },

	    /**
	     */

	    $not: function(a, b) {
	      return !validate(a, b);
	    },

	    /**
	     */

	    $type: function(a, b) {
	      return b != void 0 ? b instanceof a || b.constructor == a : false;
	     },

	    /**
	     */

	    $all: function(a, b) {
	      return operator.$and(a, b);
	    },

	    /**
	     */

	    $size: function(a, b) {
	      return b ? a === b.length : false;
	    },

	    /**
	     */

	    $nor: function(a, b) {
	      // todo - this suffice? return !operator.$in(a)
	      for (var i = 0, n = a.length; i < n; i++) {
	        if (validate(get(a, i), b)) {
	          return false;
	        }
	      }
	      return true;
	    },

	    /**
	     */

	    $and: function(a, b) {
	      if (!b) {
	        b = [];
	      }
	      for (var i = 0, n = a.length; i < n; i++) {
	        if (!validate(get(a, i), b)) {
	          return false;
	        }
	      }
	      return true;
	    },

	    /**
	     */

	    $regex: or(function(a, b) {
	      return typeof b === 'string' && a.test(b);
	    }),

	    /**
	     */

	    $where: function(a, b) {
	      return a.call(b, b);
	    },

	    /**
	     */

	    $elemMatch: function(a, b) {
	      if (isArray(b)) {
	        return !!~search(b, a);
	      }
	      return validate(a, b);
	    },

	    /**
	     */

	    $exists: function(a, b) {
	      return (b != void 0) === a;
	    }
	  };

	  /**
	   */

	  var prepare = {

	    /**
	     */

	    $eq: function(a) {

	      if (a instanceof RegExp) {
	        return function(b) {
	          return typeof b === 'string' && a.test(b);
	        };
	      } else if (a instanceof Function) {
	        return a;
	      } else if (isArray(a) && !a.length) {
	        // Special case of a == []
	        return function(b) {
	          return (isArray(b) && !b.length);
	        };
	      } else if (a === null){
	        return function(b){
	          //will match both null and undefined
	          return b == null;
	        }
	      }

	      return function(b) {
	        return sift.compare(comparable(b), a) === 0;
	      };
	    },

	    /**
	     */

	    $ne: function(a) {
	      return prepare.$eq(a);
	    },

	    /**
	     */

	    $and: function(a) {
	      return a.map(parse);
	    },

	    /**
	     */

	    $all: function(a) {
	      return prepare.$and(a);
	    },

	    /**
	     */

	    $or: function(a) {
	      return a.map(parse);
	    },

	    /**
	     */

	    $nor: function(a) {
	      return a.map(parse);
	    },

	    /**
	     */

	    $not: function(a) {
	      return parse(a);
	    },

	    /**
	     */

	    $regex: function(a, query) {
	      return new RegExp(a, query.$options);
	    },

	    /**
	     */

	    $where: function(a) {
	      return typeof a === 'string' ? new Function('obj', 'return ' + a) : a;
	    },

	    /**
	     */

	    $elemMatch: function(a) {
	      return parse(a);
	    },

	    /**
	     */

	    $exists: function(a) {
	      return !!a;
	    }
	  };

	  /**
	   */

	  function search(array, validator) {

	    for (var i = 0; i < array.length; i++) {
	      if (validate(validator, get(array, i))) {
	        return i;
	      }
	    }

	    return -1;
	  }

	  /**
	   */

	  function createValidator(a, validate) {
	    return { a: a, v: validate };
	  }

	  /**
	   */

	  function nestedValidator(a, b) {
	    var values  = [];
	    findValues(b, a.k, 0, values);

	    if (values.length === 1) {
	      return validate(a.nv, values[0]);
	    }

	    return !!~search(values, a.nv);
	  }

	  /**
	   */

	  function findValues(current, keypath, index, values) {

	    if (index === keypath.length || current == void 0) {
	      values.push(current);
	      return;
	    }

	    var k = get(keypath, index);

	    // ensure that if current is an array, that the current key
	    // is NOT an array index. This sort of thing needs to work:
	    // sift({'foo.0':42}, [{foo: [42]}]);
	    if (isArray(current) && isNaN(Number(k))) {
	      for (var i = 0, n = current.length; i < n; i++) {
	        findValues(get(current, i), keypath, index, values);
	      }
	    } else {
	      findValues(get(current, k), keypath, index + 1, values);
	    }
	  }

	  /**
	   */

	  function createNestedValidator(keypath, a) {
	    return { a: { k: keypath, nv: a }, v: nestedValidator };
	  }

	  /**
	   * flatten the query
	   */

	  function isVanillaObject(value) {
	    return String(value.constructor) === 'Object' || String(value.constructor).replace(/[\r\n\s\t]/g, '') === 'functionObject(){[nativecode]}';
	  }

	  function parse(query) {
	    query = comparable(query);

	    if (!query || !isVanillaObject(query)) { // cross browser support
	      query = { $eq: query };
	    }

	    var validators = [];

	    for (var key in query) {
	      var a = query[key];

	      if (key === '$options') {
	        continue;
	      }

	      if (operator[key]) {
	        if (prepare[key]) a = prepare[key](a, query);
	        validators.push(createValidator(comparable(a), operator[key]));
	      } else {

	        if (key.charCodeAt(0) === 36) {
	          throw new Error('Unknown operation ' + key);
	        }

	        validators.push(createNestedValidator(key.split('.'), parse(a)));
	      }
	    }

	    return validators.length === 1 ? validators[0] : createValidator(validators, operator.$and);
	  }

	  /**
	   */

	  function createRootValidator(query, getter) {
	    var validator = parse(query);
	    if (getter) {
	      validator = {
	        a: validator,
	        v: function(a, b) {
	          return validate(a, getter(b));
	        }
	      };
	    }
	    return validator;
	  }

	  /**
	   */

	  function sift(query, array, getter) {

	    if (isFunction(array)) {
	      getter = array;
	      array  = void 0;
	    }

	    var validator = createRootValidator(query, getter);

	    function filter(b) {
	      return validate(validator, b);
	    }

	    if (array) {
	      return array.filter(filter);
	    }

	    return filter;
	  }

	  /**
	   */

	  sift.use = function(plugin) {
	    if (isFunction(plugin)) return plugin(sift);
	    for (var key in plugin) {
	      /* istanbul ignore else */
	      if (key.charCodeAt(0) === 36) {
	        operator[key] = plugin[key];
	      }
	    }
	  };

	  /**
	   */

	  sift.indexOf = function(query, array, getter) {
	    return search(array, createRootValidator(query, getter));
	  };

	  /**
	   */

	  sift.compare = function(a, b) {
	    if(a===b) return 0;
	    if(typeof a === typeof b) {
	      if (a > b) {
	        return 1;
	      }
	      if (a < b) {
	        return -1;
	      }
	    }
	  };

	  /* istanbul ignore next */
	  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	    Object.defineProperty(exports, "__esModule", {
	      value: true
	    });

	    module.exports = sift;
	    exports['default'] = module.exports.default = sift;
	  }

	  /* istanbul ignore next */
	  if (typeof window !== 'undefined') {
	    window.sift = sift;
	  }
	})();


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(86),
	    isObjectLike = __webpack_require__(118);

	/** `Object#toString` result references. */
	var numberTag = '[object Number]';

	/**
	 * Checks if `value` is classified as a `Number` primitive or object.
	 *
	 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
	 * classified as numbers, use the `_.isFinite` method.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
	 * @example
	 *
	 * _.isNumber(3);
	 * // => true
	 *
	 * _.isNumber(Number.MIN_VALUE);
	 * // => true
	 *
	 * _.isNumber(Infinity);
	 * // => true
	 *
	 * _.isNumber('3');
	 * // => false
	 */
	function isNumber(value) {
	  return typeof value == 'number' ||
	    (isObjectLike(value) && baseGetTag(value) == numberTag);
	}

	module.exports = isNumber;


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsRegExp = __webpack_require__(279),
	    baseUnary = __webpack_require__(124),
	    nodeUtil = __webpack_require__(125);

	/* Node.js helper references. */
	var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;

	/**
	 * Checks if `value` is classified as a `RegExp` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
	 * @example
	 *
	 * _.isRegExp(/abc/);
	 * // => true
	 *
	 * _.isRegExp('/abc/');
	 * // => false
	 */
	var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

	module.exports = isRegExp;


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(86),
	    isObjectLike = __webpack_require__(118);

	/** `Object#toString` result references. */
	var regexpTag = '[object RegExp]';

	/**
	 * The base implementation of `_.isRegExp` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
	 */
	function baseIsRegExp(value) {
	  return isObjectLike(value) && baseGetTag(value) == regexpTag;
	}

	module.exports = baseIsRegExp;


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(250),
	    baseEach = __webpack_require__(229),
	    castFunction = __webpack_require__(281),
	    isArray = __webpack_require__(119);

	/**
	 * Iterates over elements of `collection` and invokes `iteratee` for each element.
	 * The iteratee is invoked with three arguments: (value, index|key, collection).
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * **Note:** As with other "Collections" methods, objects with a "length"
	 * property are iterated like arrays. To avoid this behavior use `_.forIn`
	 * or `_.forOwn` for object iteration.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @alias each
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 * @see _.forEachRight
	 * @example
	 *
	 * _.forEach([1, 2], function(value) {
	 *   console.log(value);
	 * });
	 * // => Logs `1` then `2`.
	 *
	 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
	 *   console.log(key);
	 * });
	 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	 */
	function forEach(collection, iteratee) {
	  var func = isArray(collection) ? arrayEach : baseEach;
	  return func(collection, castFunction(iteratee));
	}

	module.exports = forEach;


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(101);

	/**
	 * Casts `value` to `identity` if it's not a function.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Function} Returns cast function.
	 */
	function castFunction(value) {
	  return typeof value == 'function' ? value : identity;
	}

	module.exports = castFunction;


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

	var baseFindKey = __webpack_require__(283),
	    baseForOwn = __webpack_require__(230),
	    baseIteratee = __webpack_require__(179);

	/**
	 * This method is like `_.find` except that it returns the key of the first
	 * element `predicate` returns truthy for instead of the element itself.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.1.0
	 * @category Object
	 * @param {Object} object The object to inspect.
	 * @param {Function} [predicate=_.identity] The function invoked per iteration.
	 * @returns {string|undefined} Returns the key of the matched element,
	 *  else `undefined`.
	 * @example
	 *
	 * var users = {
	 *   'barney':  { 'age': 36, 'active': true },
	 *   'fred':    { 'age': 40, 'active': false },
	 *   'pebbles': { 'age': 1,  'active': true }
	 * };
	 *
	 * _.findKey(users, function(o) { return o.age < 40; });
	 * // => 'barney' (iteration order is not guaranteed)
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.findKey(users, { 'age': 1, 'active': true });
	 * // => 'pebbles'
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.findKey(users, ['active', false]);
	 * // => 'fred'
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.findKey(users, 'active');
	 * // => 'barney'
	 */
	function findKey(object, predicate) {
	  return baseFindKey(object, baseIteratee(predicate, 3), baseForOwn);
	}

	module.exports = findKey;


/***/ }),
/* 283 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of methods like `_.findKey` and `_.findLastKey`,
	 * without support for iteratee shorthands, which iterates over `collection`
	 * using `eachFunc`.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {Function} eachFunc The function to iterate over `collection`.
	 * @returns {*} Returns the found element or its key, else `undefined`.
	 */
	function baseFindKey(collection, predicate, eachFunc) {
	  var result;
	  eachFunc(collection, function(value, key, collection) {
	    if (predicate(value, key, collection)) {
	      result = key;
	      return false;
	    }
	  });
	  return result;
	}

	module.exports = baseFindKey;


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(285),
	    hasPath = __webpack_require__(219);

	/**
	 * Checks if `path` is a direct property of `object`.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = { 'a': { 'b': 2 } };
	 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.has(object, 'a');
	 * // => true
	 *
	 * _.has(object, 'a.b');
	 * // => true
	 *
	 * _.has(object, ['a', 'b']);
	 * // => true
	 *
	 * _.has(other, 'a');
	 * // => false
	 */
	function has(object, path) {
	  return object != null && hasPath(object, path, baseHas);
	}

	module.exports = has;


/***/ }),
/* 285 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas(object, key) {
	  return object != null && hasOwnProperty.call(object, key);
	}

	module.exports = baseHas;


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _assign = __webpack_require__(79);

	var _assign2 = _interopRequireDefault(_assign);

	var _forEach = __webpack_require__(280);

	var _forEach2 = _interopRequireDefault(_forEach);

	var _isString = __webpack_require__(131);

	var _isString2 = _interopRequireDefault(_isString);

	var _isObject = __webpack_require__(92);

	var _isObject2 = _interopRequireDefault(_isObject);

	var _isFunction = __webpack_require__(85);

	var _isFunction2 = _interopRequireDefault(_isFunction);

	var _cloneDeep = __webpack_require__(248);

	var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

	var _errors = __webpack_require__(2);

	var _utils = __webpack_require__(40);

	var _query = __webpack_require__(275);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Aggregation = function () {
	  function Aggregation(options) {
	    _classCallCheck(this, Aggregation);

	    options = (0, _assign2.default)({
	      query: null,
	      initial: {},
	      key: {},
	      reduceFn: function () {}.toString()
	    }, options);

	    this.query = options.query;
	    this.initial = options.initial;
	    this.key = options.key;
	    this.reduceFn = options.reduceFn;
	  }

	  _createClass(Aggregation, [{
	    key: 'by',
	    value: function by(field) {
	      this.key[field] = true;
	      return this;
	    }
	  }, {
	    key: 'process',
	    value: function process() {
	      var entities = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	      var aggregation = this.toPlainObject();
	      var keys = Object.keys(aggregation.key);
	      var reduceFn = aggregation.reduceFn.replace(/function[\s\S]*?\([\s\S]*?\)/, '');
	      aggregation.reduce = new Function(['doc', 'out'], reduceFn);

	      if (this.query) {
	        entities = this.query.process(entities);
	      }

	      if (keys.length > 0) {
	        var results = [];

	        keys.forEach(function (key) {
	          var groups = {};

	          entities.forEach(function (entity) {
	            var keyVal = entity[key];
	            var result = (0, _utils.isDefined)(groups[keyVal]) ? groups[keyVal] : (0, _cloneDeep2.default)(aggregation.initial);
	            var newResult = aggregation.reduce(entity, result);

	            if ((0, _utils.isDefined)(newResult)) {
	              result = newResult;
	            }

	            groups[keyVal] = result;
	          });

	          Object.keys(groups).forEach(function (groupKey) {
	            var result = {};
	            result[key] = groupKey;
	            result = (0, _assign2.default)({}, result, groups[groupKey]);
	            results.push(result);
	          });
	        });

	        return results;
	      }

	      var result = (0, _cloneDeep2.default)(aggregation.initial);
	      (0, _forEach2.default)(entities, function (entity) {
	        var newResult = aggregation.reduce(entity, result);

	        if ((0, _utils.isDefined)(newResult)) {
	          result = newResult;
	        }
	      });
	      return [result];
	    }
	  }, {
	    key: 'toPlainObject',
	    value: function toPlainObject() {
	      return {
	        key: this.key,
	        initial: this.initial,
	        reduce: this.reduceFn,
	        reduceFn: this.reduceFn,
	        condition: this.query ? this.query.toPlainObject().filter : {},
	        query: this.query ? this.query.toPlainObject() : null
	      };
	    }
	  }, {
	    key: 'initial',
	    get: function get() {
	      return (0, _cloneDeep2.default)(this._initial);
	    },
	    set: function set(initial) {
	      if (!(0, _isObject2.default)(initial)) {
	        throw new _errors.KinveyError('initial must be an Object.');
	      }

	      this._initial = initial;
	    }
	  }, {
	    key: 'query',
	    get: function get() {
	      return this._query;
	    },
	    set: function set(query) {
	      if ((0, _utils.isDefined)(query) && !(query instanceof _query.Query)) {
	        throw new _errors.KinveyError('Invalid query. It must be an instance of the Query class.');
	      }

	      this._query = query;
	    }
	  }, {
	    key: 'reduceFn',
	    get: function get() {
	      return this._reduceFn;
	    },
	    set: function set(fn) {
	      if ((0, _isFunction2.default)(fn)) {
	        fn = fn.toString();
	      }

	      if (!(0, _isString2.default)(fn)) {
	        throw new _errors.KinveyError('fn argument must be of type function or string.');
	      }

	      this._reduceFn = fn;
	    }
	  }], [{
	    key: 'count',
	    value: function count() {
	      var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	      field = field.replace('\'', '\\\'');

	      var aggregation = new Aggregation();
	      aggregation.by(field);
	      aggregation.initial = { count: 0 };
	      aggregation.reduceFn = '' + 'function(doc, out) {' + '  out.count += 1;' + '  return out;' + '}';
	      return aggregation;
	    }
	  }, {
	    key: 'sum',
	    value: function sum() {
	      var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	      field = field.replace('\'', '\\\'');

	      var aggregation = new Aggregation();

	      aggregation.initial = { sum: 0 };
	      aggregation.reduceFn = '' + 'function(doc, out) {' + ('  out.sum += doc["' + field + '"];') + '  return out;' + '}';
	      return aggregation;
	    }
	  }, {
	    key: 'min',
	    value: function min() {
	      var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	      field = field.replace('\'', '\\\'');

	      var aggregation = new Aggregation();

	      aggregation.initial = { min: Infinity };
	      aggregation.reduceFn = '' + 'function(doc, out) {' + ('  out.min = Math.min(out.min, doc["' + field + '"]);') + '  return out;' + '}';
	      return aggregation;
	    }
	  }, {
	    key: 'max',
	    value: function max() {
	      var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	      field = field.replace('\'', '\\\'');

	      var aggregation = new Aggregation();

	      aggregation.initial = { max: -Infinity };
	      aggregation.reduceFn = '' + 'function(doc, out) {' + ('  out.max = Math.max(out.max, doc["' + field + '"]);') + '  return out;' + '}';
	      return aggregation;
	    }
	  }, {
	    key: 'average',
	    value: function average() {
	      var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	      field = field.replace('\'', '\\\'');

	      var aggregation = new Aggregation();

	      aggregation.initial = { count: 0, average: 0 };
	      aggregation.reduceFn = '' + 'function(doc, out) {' + ('  out.average = (out.average * out.count + doc["' + field + '"]) / (out.count + 1);') + '  out.count += 1;' + '  return out;' + '}';
	      return aggregation;
	    }
	  }]);

	  return Aggregation;
	}();

	exports.default = Aggregation;

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RequestMethod = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _es6Promise = __webpack_require__(47);

	var _es6Promise2 = _interopRequireDefault(_es6Promise);

	var _qs = __webpack_require__(74);

	var _qs2 = _interopRequireDefault(_qs);

	var _assign = __webpack_require__(79);

	var _assign2 = _interopRequireDefault(_assign);

	var _isString = __webpack_require__(131);

	var _isString2 = _interopRequireDefault(_isString);

	var _isNumber = __webpack_require__(277);

	var _isNumber2 = _interopRequireDefault(_isNumber);

	var _client = __webpack_require__(288);

	var _client2 = _interopRequireDefault(_client);

	var _errors = __webpack_require__(2);

	var _utils = __webpack_require__(40);

	var _response = __webpack_require__(290);

	var _response2 = _interopRequireDefault(_response);

	var _headers = __webpack_require__(291);

	var _headers2 = _interopRequireDefault(_headers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RequestMethod = {
	  GET: 'GET',
	  POST: 'POST',
	  PATCH: 'PATCH',
	  PUT: 'PUT',
	  DELETE: 'DELETE'
	};
	Object.freeze(RequestMethod);
	exports.RequestMethod = RequestMethod;

	var Request = function () {
	  function Request() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, Request);

	    options = (0, _assign2.default)({
	      followRedirect: true
	    }, options);

	    this.id = (0, _utils.randomString)();
	    this.client = options.client;
	    this.method = options.method || RequestMethod.GET;
	    this.headers = options.headers || new _headers2.default();
	    this.url = options.url || '';
	    this.body = options.body || options.data;
	    this.timeout = (0, _utils.isDefined)(options.timeout) ? options.timeout : this.client.defaultTimeout;
	    this.followRedirect = options.followRedirect === true;
	    this.cache = options.cache === true;
	  }

	  _createClass(Request, [{
	    key: 'execute',
	    value: function execute() {
	      if ((0, _utils.isDefined)(this.rack) === false) {
	        _utils.Log.error('Unable to execute the request. Please provide a rack to execute the request.');
	        return _es6Promise2.default.reject(new _errors.KinveyError('Unable to execute the request. Please provide a rack to execute the request.'));
	      }

	      return this.rack.execute(this.toPlainObject()).then(function (response) {
	        if ((0, _utils.isDefined)(response) === false) {
	          throw new _errors.NoResponseError();
	        }

	        if (response instanceof _response2.default === false) {
	          response = new _response2.default({
	            statusCode: response.statusCode,
	            headers: response.headers,
	            data: response.data
	          });
	        }

	        return response;
	      });
	    }
	  }, {
	    key: 'cancel',
	    value: function cancel() {
	      return this.rack.cancel();
	    }
	  }, {
	    key: 'toPlainObject',
	    value: function toPlainObject() {
	      return {
	        id: this.id,
	        method: this.method,
	        headers: this.headers.toPlainObject(),
	        url: this.url,
	        body: this.body,
	        timeout: this.timeout,
	        followRedirect: this.followRedirect
	      };
	    }
	  }, {
	    key: 'client',
	    get: function get() {
	      return this._client || _client2.default.sharedInstance();
	    },
	    set: function set(client) {
	      if (client) {
	        if (client instanceof _client2.default === false) {
	          throw new _errors.KinveyError('client must be an instance of the Client class.');
	        }
	      }

	      this._client = client;
	    }
	  }, {
	    key: 'method',
	    get: function get() {
	      return this._method;
	    },
	    set: function set(method) {
	      if (!(0, _isString2.default)(method)) {
	        method = String(method);
	      }

	      method = method.toUpperCase();
	      switch (method) {
	        case RequestMethod.GET:
	        case RequestMethod.POST:
	        case RequestMethod.PATCH:
	        case RequestMethod.PUT:
	        case RequestMethod.DELETE:
	          this._method = method;
	          break;
	        default:
	          throw new _errors.KinveyError('Invalid request method. Only GET, POST, PATCH, PUT, and DELETE are allowed.');
	      }
	    }
	  }, {
	    key: 'headers',
	    get: function get() {
	      return this._headers;
	    },
	    set: function set(headers) {
	      if (!(headers instanceof _headers2.default)) {
	        headers = new _headers2.default(headers);
	      }

	      this._headers = headers;
	    }
	  }, {
	    key: 'url',
	    get: function get() {
	      if (this.cache === true) {
	        return (0, _utils.appendQuery)(this._url, _qs2.default.stringify({
	          _: Math.random().toString(36).substr(2)
	        }));
	      }

	      return this._url;
	    },
	    set: function set(urlString) {
	      this._url = urlString;
	    }
	  }, {
	    key: 'data',
	    get: function get() {
	      return this.body;
	    },
	    set: function set(data) {
	      this.body = data;
	    }
	  }, {
	    key: 'timeout',
	    get: function get() {
	      return this._timeout;
	    },
	    set: function set(timeout) {
	      timeout = parseInt(timeout, 10);

	      if ((0, _isNumber2.default)(timeout) === false || isNaN(timeout)) {
	        throw new _errors.KinveyError('Invalid timeout. Timeout must be a number.');
	      }

	      this._timeout = timeout;
	    }
	  }, {
	    key: 'followRedirect',
	    get: function get() {
	      return this._followRedirect;
	    },
	    set: function set(followRedirect) {
	      this._followRedirect = !!followRedirect;
	    }
	  }, {
	    key: 'cache',
	    get: function get() {
	      return this._cache;
	    },
	    set: function set(cache) {
	      this._cache = !!cache;
	    }
	  }]);

	  return Request;
	}();

	exports.default = Request;

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _fastMemoryCache = __webpack_require__(289);

	var _fastMemoryCache2 = _interopRequireDefault(_fastMemoryCache);

	var _url = __webpack_require__(67);

	var _url2 = _interopRequireDefault(_url);

	var _assign = __webpack_require__(79);

	var _assign2 = _interopRequireDefault(_assign);

	var _isString = __webpack_require__(131);

	var _isString2 = _interopRequireDefault(_isString);

	var _isNumber = __webpack_require__(277);

	var _isNumber2 = _interopRequireDefault(_isNumber);

	var _errors = __webpack_require__(2);

	var _utils = __webpack_require__(40);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DEFAULT_TIMEOUT = 60000;
	var ACTIVE_USER_KEY = 'active_user';
	var _sharedInstance = null;

	var ActiveUserStorage = function () {
	  function ActiveUserStorage() {
	    _classCallCheck(this, ActiveUserStorage);

	    this.memory = new _fastMemoryCache2.default();
	  }

	  _createClass(ActiveUserStorage, [{
	    key: 'get',
	    value: function get(key) {
	      if (!(0, _isString2.default)(key)) {
	        throw new _errors.KinveyError('ActiveUserStorage key must be a string.');
	      }

	      try {
	        return JSON.parse(this.memory.get(key));
	      } catch (e) {
	        return null;
	      }
	    }
	  }, {
	    key: 'set',
	    value: function set(key, value) {
	      if (!(0, _isString2.default)(key)) {
	        throw new _errors.KinveyError('ActiveUserStorage key must be a string.');
	      }

	      if ((0, _utils.isDefined)(value)) {
	        this.memory.set(key, JSON.stringify(value));
	      } else {
	        this.memory.delete(key);
	      }

	      return value;
	    }
	  }]);

	  return ActiveUserStorage;
	}();

	var Client = function () {
	  function Client() {
	    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, Client);

	    var apiHostname = (0, _isString2.default)(config.apiHostname) ? config.apiHostname : 'https://baas.kinvey.com';
	    if (/^https?:\/\//i.test(apiHostname) === false) {
	      apiHostname = 'https://' + apiHostname;
	    }

	    var apiHostnameParsed = _url2.default.parse(apiHostname);

	    this.apiProtocol = apiHostnameParsed.protocol;

	    this.apiHost = apiHostnameParsed.host;

	    var micHostname = (0, _isString2.default)(config.micHostname) ? config.micHostname : 'https://auth.kinvey.com';
	    if (/^https?:\/\//i.test(micHostname) === false) {
	      micHostname = 'https://' + micHostname;
	    }

	    var micHostnameParsed = _url2.default.parse(micHostname);

	    this.micProtocol = micHostnameParsed.protocol;

	    this.micHost = micHostnameParsed.host;

	    var liveServiceHostname = (0, _isString2.default)(config.liveServiceHostname) ? config.liveServiceHostname : 'https://kls.kinvey.com';
	    if (/^https?:\/\//i.test(liveServiceHostname) === false) {
	      liveServiceHostname = 'https://' + liveServiceHostname;
	    }

	    var liveServiceHostnameParsed = _url2.default.parse(liveServiceHostname);

	    this.liveServiceProtocol = liveServiceHostnameParsed.protocol;

	    this.liveServiceHost = liveServiceHostnameParsed.host;

	    this.appKey = config.appKey;

	    this.appSecret = config.appSecret;

	    this.masterSecret = config.masterSecret;

	    this.encryptionKey = config.encryptionKey;

	    this.appVersion = config.appVersion;

	    this.defaultTimeout = (0, _isNumber2.default)(config.defaultTimeout) && config.defaultTimeout >= 0 ? config.defaultTimeout : DEFAULT_TIMEOUT;

	    this.activeUserStorage = new ActiveUserStorage();
	  }

	  _createClass(Client, [{
	    key: 'getActiveUser',
	    value: function getActiveUser() {
	      return this.activeUserStorage.get(this.appKey + '.' + ACTIVE_USER_KEY);
	    }
	  }, {
	    key: 'setActiveUser',
	    value: function setActiveUser(activeUser) {
	      return this.activeUserStorage.set(this.appKey + '.' + ACTIVE_USER_KEY, activeUser);
	    }
	  }, {
	    key: 'toPlainObject',
	    value: function toPlainObject() {
	      return {
	        apiHostname: this.apiHostname,
	        apiProtocol: this.apiProtocol,
	        apiHost: this.apiHost,
	        micHostname: this.micHostname,
	        micProtocol: this.micProtocol,
	        micHost: this.micHost,
	        liveServiceHostname: this.liveServiceHostname,
	        liveServiceHost: this.liveServiceHost,
	        liveServiceProtocol: this.liveServiceProtocol,
	        appKey: this.appKey,
	        appSecret: this.appSecret,
	        masterSecret: this.masterSecret,
	        encryptionKey: this.encryptionKey,
	        appVersion: this.appVersion
	      };
	    }
	  }, {
	    key: 'apiHostname',
	    get: function get() {
	      return _url2.default.format({
	        protocol: this.apiProtocol,
	        host: this.apiHost
	      });
	    }
	  }, {
	    key: 'micHostname',
	    get: function get() {
	      return _url2.default.format({
	        protocol: this.micProtocol,
	        host: this.micHost
	      });
	    }
	  }, {
	    key: 'liveServiceHostname',
	    get: function get() {
	      return _url2.default.format({
	        protocol: this.liveServiceProtocol,
	        host: this.liveServiceHost
	      });
	    }
	  }], [{
	    key: 'initialize',
	    value: function initialize() {
	      throw new _errors.KinveyError('Please use Client.init().');
	    }
	  }, {
	    key: 'init',
	    value: function init(config) {
	      _sharedInstance = new Client(config);
	      return _sharedInstance;
	    }
	  }, {
	    key: 'sharedInstance',
	    value: function sharedInstance() {
	      if ((0, _utils.isDefined)(_sharedInstance) === false) {
	        throw new _errors.KinveyError('You have not initialized the library. ' + 'Please call Kinvey.init() to initialize the library.');
	      }

	      return _sharedInstance;
	    }
	  }]);

	  return Client;
	}();

	exports.default = Client;

/***/ }),
/* 289 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Provides in-memory cache.
	 *
	 * @name MemoryCache
	 * @constructor
	 */
	function MemoryCache() {
	    this._cache = createMap();
	    this._timeouts = createMap();
	}

	/**
	 * Returns cache value for the specified key.
	 *
	 * @param {String} key
	 * @returns {*} Value or `undefined` if value does not exist.
	 */
	MemoryCache.prototype.get = function (key) {
	    return this._cache[key];
	};

	/**
	 * Assigns value for the specified key.
	 *
	 * @param {String} key
	 * @param {*} value
	 * @param {Number} [expireTime=0] The length of time in seconds. After this time has expired, the
	 *      value will be automatically deleted. 0 means that time never expire.
	 */
	MemoryCache.prototype.set = function (key, value, expireTime) {
	    this.delete(key);
	    this._cache[key] = value;
	    if (expireTime) {
	        this._timeouts[key] = setTimeout(this.delete.bind(this, key), expireTime * 1000);
	    }
	};

	/**
	 * Deletes value for the specified key.
	 *
	 * @param {String} key
	 */
	MemoryCache.prototype.delete = function (key) {
	    delete this._cache[key];
	    if (key in this._timeouts) {
	        clearTimeout(this._timeouts[key]);
	        delete this._timeouts[key];
	    }
	};

	/**
	 * Clears the whole cache storage.
	 */
	MemoryCache.prototype.clear = function () {
	    this._cache = createMap();
	    for (var key in this._timeouts) {
	        clearTimeout(this._timeouts[key]);
	    }
	    this._timeouts = createMap();
	};

	/**
	 * Creates a new object without a prototype. This object is useful for lookup without having to
	 * guard against prototypically inherited properties via hasOwnProperty.
	 *
	 * @returns {Object}
	 */
	function createMap() {
	    return Object.create(null);
	}

	module.exports = MemoryCache;


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.KinveyResponse = exports.StatusCode = undefined;

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _assign = __webpack_require__(79);

	var _assign2 = _interopRequireDefault(_assign);

	var _errors = __webpack_require__(2);

	var _headers = __webpack_require__(291);

	var _headers2 = _interopRequireDefault(_headers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var StatusCode = {
	  Ok: 200,
	  Created: 201,
	  Empty: 204,
	  MovedPermanently: 301,
	  Found: 302,
	  NotModified: 304,
	  TemporaryRedirect: 307,
	  PermanentRedirect: 308,
	  Unauthorized: 401,
	  NotFound: 404,
	  ServerError: 500
	};
	Object.freeze(StatusCode);
	exports.StatusCode = StatusCode;

	var Response = function () {
	  function Response() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, Response);

	    options = (0, _assign2.default)({
	      statusCode: StatusCode.Empty,
	      headers: new _headers2.default(),
	      data: null
	    }, options);

	    this.statusCode = options.statusCode;
	    this.headers = options.headers;
	    this.data = options.data;
	  }

	  _createClass(Response, [{
	    key: 'isSuccess',
	    value: function isSuccess() {
	      return this.statusCode >= 200 && this.statusCode < 300 || this.statusCode === StatusCode.MovedPermanently || this.statusCode === StatusCode.Found || this.statusCode === StatusCode.NotModified || this.statusCode === StatusCode.TemporaryRedirect || this.statusCode === StatusCode.PermanentRedirect;
	    }
	  }, {
	    key: 'isServerError',
	    value: function isServerError() {
	      return this.statusCode >= 500 && this.statusCode < 600;
	    }
	  }, {
	    key: 'isClientError',
	    value: function isClientError() {
	      return this.statusCode >= 400 && this.statusCode < 500;
	    }
	  }, {
	    key: 'toPlainObject',
	    value: function toPlainObject() {
	      return {
	        statusCode: this.statusCode,
	        headers: this.headers.toPlainObject(),
	        data: this.data
	      };
	    }
	  }, {
	    key: 'headers',
	    get: function get() {
	      return this._headers;
	    },
	    set: function set(headers) {
	      if (!(headers instanceof _headers2.default)) {
	        headers = new _headers2.default(headers);
	      }

	      this._headers = headers;
	    }
	  }, {
	    key: 'error',
	    get: function get() {
	      if (this.isSuccess()) {
	        return null;
	      }

	      var data = this.data || {};
	      var message = data.message || data.description;
	      var debug = data.debug;
	      var code = this.statusCode;
	      var kinveyRequestId = this.headers.get('X-Kinvey-Request-ID');
	      var error = void 0;

	      if (code === StatusCode.Unauthorized) {
	        error = new _errors.InsufficientCredentialsError(message, debug, code, kinveyRequestId);
	      } else if (code === StatusCode.NotFound) {
	        error = new _errors.NotFoundError(message, debug, code, kinveyRequestId);
	      } else if (code === StatusCode.ServerError) {
	        error = new _errors.ServerError(message, debug, code, kinveyRequestId);
	      } else {
	        error = new _errors.KinveyError(message, debug, code, kinveyRequestId);
	      }

	      return error;
	    }
	  }]);

	  return Response;
	}();

	exports.default = Response;

	var KinveyResponse = exports.KinveyResponse = function (_Response) {
	  _inherits(KinveyResponse, _Response);

	  function KinveyResponse() {
	    _classCallCheck(this, KinveyResponse);

	    return _possibleConstructorReturn(this, (KinveyResponse.__proto__ || Object.getPrototypeOf(KinveyResponse)).apply(this, arguments));
	  }

	  _createClass(KinveyResponse, [{
	    key: 'error',
	    get: function get() {
	      if (this.isSuccess()) {
	        return null;
	      }

	      var data = this.data || {};
	      var name = data.name || data.error;
	      var message = data.message || data.description;
	      var debug = data.debug;
	      var code = this.statusCode;
	      var kinveyRequestId = this.headers.get('X-Kinvey-Request-ID');
	      var error = void 0;

	      if (name === 'APIVersionNotAvailable') {
	        error = new _errors.APIVersionNotAvailableError(message, debug, code, kinveyRequestId);
	      } else if (name === 'APIVersionNotImplemented') {
	        error = new _errors.APIVersionNotImplementedError(message, debug, code, kinveyRequestId);
	      } else if (name === 'AppProblem') {
	        error = new _errors.AppProblemError(message, debug, code, kinveyRequestId);
	      } else if (name === 'AppProblem') {
	        error = new _errors.AppProblemError(message, debug, code, kinveyRequestId);
	      } else if (name === 'BadRequest') {
	        error = new _errors.BadRequestError(message, debug, code, kinveyRequestId);
	      } else if (name === 'BLInternalError' || name === 'BLRuntimeError' || name === 'BLSyntaxError' || name === 'BLTimeoutError' || name === 'BLViolationError') {
	        error = new _errors.BLError(message, debug, code, kinveyRequestId);
	      } else if (name === 'CORSDisabled') {
	        error = new _errors.CORSDisabledError(message, debug, code, kinveyRequestId);
	      } else if (name === 'DuplicateEndUsers') {
	        error = new _errors.DuplicateEndUsersError(message, debug, code, kinveyRequestId);
	      } else if (name === 'FeatureUnavailable') {
	        error = new _errors.FeatureUnavailableError(message, debug, code, kinveyRequestId);
	      } else if (name === 'IncompleteRequestBody') {
	        error = new _errors.IncompleteRequestBodyError(message, debug, code, kinveyRequestId);
	      } else if (name === 'IndirectCollectionAccessDisallowed') {
	        error = new _errors.IndirectCollectionAccessDisallowedError(message, debug, code, kinveyRequestId);
	      } else if (name === 'InsufficientCredentials') {
	        error = new _errors.InsufficientCredentialsError(message, debug, code, kinveyRequestId);
	      } else if (name === 'InvalidCredentials') {
	        error = new _errors.InvalidCredentialsError(message, debug, code, kinveyRequestId);
	      } else if (name === 'InvalidIdentifier') {
	        error = new _errors.InvalidIdentifierError(message, debug, code, kinveyRequestId);
	      } else if (name === 'InvalidQuerySyntax') {
	        error = new _errors.InvalidQuerySyntaxError(message, debug, code, kinveyRequestId);
	      } else if (name === 'JSONParseError') {
	        error = new _errors.JSONParseError(message, debug, code, kinveyRequestId);
	      } else if (name === 'KinveyInternalErrorRetry') {
	        error = new _errors.KinveyInternalErrorRetry(message, debug, code, kinveyRequestId);
	      } else if (name === 'KinveyInternalErrorStop') {
	        error = new _errors.KinveyInternalErrorStop(message, debug, code, kinveyRequestId);
	      } else if (name === 'MissingQuery') {
	        error = new _errors.MissingQueryError(message, debug, code, kinveyRequestId);
	      } else if (name === 'MissingRequestHeader') {
	        error = new _errors.MissingRequestHeaderError(message, debug, code, kinveyRequestId);
	      } else if (name === 'MissingRequestParameter') {
	        error = new _errors.MissingRequestParameterError(message, debug, code, kinveyRequestId);
	      } else if (name === 'EntityNotFound' || name === 'CollectionNotFound' || name === 'AppNotFound' || name === 'UserNotFound' || name === 'BlobNotFound' || name === 'DocumentNotFound') {
	        error = new _errors.NotFoundError(message, debug, code, kinveyRequestId);
	      } else if (name === 'ParameterValueOutOfRange') {
	        error = new _errors.ParameterValueOutOfRangeError(message, debug, code, kinveyRequestId);
	      } else if (name === 'ServerError') {
	        error = new _errors.ServerError(message, debug, code, kinveyRequestId);
	      } else if (name === 'StaleRequest') {
	        error = new _errors.StaleRequestError(message, debug, code, kinveyRequestId);
	      } else if (name === 'UserAlreadyExists') {
	        error = new _errors.UserAlreadyExistsError(message, debug, code, kinveyRequestId);
	      } else if (name === 'WritesToCollectionDisallowed') {
	        error = new _errors.WritesToCollectionDisallowedError(message, debug, code, kinveyRequestId);
	      } else {
	        return _get(KinveyResponse.prototype.__proto__ || Object.getPrototypeOf(KinveyResponse.prototype), 'error', this);
	      }

	      return error;
	    }
	  }]);

	  return KinveyResponse;
	}(Response);

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _forEach = __webpack_require__(280);

	var _forEach2 = _interopRequireDefault(_forEach);

	var _isString = __webpack_require__(131);

	var _isString2 = _interopRequireDefault(_isString);

	var _isPlainObject = __webpack_require__(129);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _utils = __webpack_require__(40);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Headers = function () {
	  function Headers() {
	    var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, Headers);

	    this.headers = {};
	    this.addAll(headers);
	  }

	  _createClass(Headers, [{
	    key: 'get',
	    value: function get(name) {
	      if (name) {
	        if ((0, _isString2.default)(name) === false) {
	          name = String(name);
	        }

	        var headers = this.headers;
	        return headers[name.toLowerCase()];
	      }

	      return undefined;
	    }
	  }, {
	    key: 'set',
	    value: function set(name, value) {
	      if ((0, _utils.isDefined)(name) === false || (0, _utils.isDefined)(value) === false) {
	        throw new Error('A name and value must be provided to set a header.');
	      }

	      if ((0, _isString2.default)(name) === false) {
	        name = String(name);
	      }

	      var headers = this.headers;
	      name = name.toLowerCase();

	      if ((0, _isString2.default)(value) === false) {
	        headers[name] = JSON.stringify(value);
	      } else {
	        headers[name] = value;
	      }

	      this.headers = headers;
	      return this;
	    }
	  }, {
	    key: 'has',
	    value: function has(name) {
	      return !!this.get(name);
	    }
	  }, {
	    key: 'add',
	    value: function add() {
	      var header = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	      return this.set(header.name, header.value);
	    }
	  }, {
	    key: 'addAll',
	    value: function addAll() {
	      var _this = this;

	      var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	      if (headers instanceof Headers) {
	        headers = headers.toPlainObject();
	      }

	      if ((0, _isPlainObject2.default)(headers) === false) {
	        throw new Error('Headers argument must be an object.');
	      }

	      var names = Object.keys(headers);
	      (0, _forEach2.default)(names, function (name) {
	        try {
	          _this.set(name, headers[name]);
	        } catch (error) {}
	      });
	      return this;
	    }
	  }, {
	    key: 'remove',
	    value: function remove(name) {
	      if (name) {
	        if ((0, _isString2.default)(name) === false) {
	          name = String(name);
	        }

	        var headers = this.headers;
	        delete headers[name.toLowerCase()];
	        this.headers = headers;
	      }

	      return this;
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      this.headers = {};
	      return this;
	    }
	  }, {
	    key: 'toPlainObject',
	    value: function toPlainObject() {
	      return this.headers;
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return JSON.stringify(this.toPlainObject());
	    }
	  }]);

	  return Headers;
	}();

	exports.default = Headers;

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NetworkRack = exports.CacheRack = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _es6Promise = __webpack_require__(47);

	var _es6Promise2 = _interopRequireDefault(_es6Promise);

	var _reduce = __webpack_require__(239);

	var _reduce2 = _interopRequireDefault(_reduce);

	var _isFunction = __webpack_require__(85);

	var _isFunction2 = _interopRequireDefault(_isFunction);

	var _utils = __webpack_require__(40);

	var _values = __webpack_require__(293);

	var _values2 = _interopRequireDefault(_values);

	var _middleware = __webpack_require__(295);

	var _middleware2 = _interopRequireDefault(_middleware);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Rack = function (_Middleware) {
	  _inherits(Rack, _Middleware);

	  function Rack() {
	    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Rack';

	    _classCallCheck(this, Rack);

	    var _this = _possibleConstructorReturn(this, (Rack.__proto__ || Object.getPrototypeOf(Rack)).call(this, name));

	    _this.middlewares = [];
	    _this.canceled = false;
	    _this.activeMiddleware = undefined;
	    return _this;
	  }

	  _createClass(Rack, [{
	    key: 'use',
	    value: function use(middleware) {
	      if ((0, _utils.isDefined)(middleware)) {
	        if (middleware instanceof _middleware2.default) {
	          this.middlewares.push(middleware);
	          return;
	        }

	        throw new Error('Unable to use the middleware. It must be an instance of Middleware.');
	      }
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.middlewares = [];
	    }
	  }, {
	    key: 'execute',
	    value: function execute(req) {
	      var _this2 = this;

	      if ((0, _utils.isDefined)(req) === false) {
	        return _es6Promise2.default.reject(new Error('Request is undefined. Please provide a valid request.'));
	      }

	      return (0, _reduce2.default)((0, _values2.default)(this.middlewares), function (promise, middleware) {
	        return promise.then(function (_ref) {
	          var request = _ref.request,
	              response = _ref.response;

	          if (_this2.canceled) {
	            return _es6Promise2.default.reject(new Error('Cancelled'));
	          }

	          _this2.activeMiddleware = middleware;
	          return middleware.handle(request || req, response);
	        });
	      }, _es6Promise2.default.resolve({ request: req })).then(function (_ref2) {
	        var response = _ref2.response;

	        if (_this2.canceled === true) {
	          return _es6Promise2.default.reject(new Error('Cancelled'));
	        }

	        _this2.canceled = false;
	        _this2.activeMiddleware = undefined;
	        return response;
	      }).catch(function (error) {
	        _this2.canceled = false;
	        _this2.activeMiddleware = undefined;
	        throw error;
	      });
	    }
	  }, {
	    key: 'cancel',
	    value: function cancel() {
	      this.canceled = true;

	      if ((0, _utils.isDefined)(this.activeMiddleware) && (0, _isFunction2.default)(this.activeMiddleware.cancel)) {
	        return this.activeMiddleware.cancel();
	      }

	      return _es6Promise2.default.resolve();
	    }
	  }, {
	    key: 'handle',
	    value: function handle(request) {
	      return this.execute(request);
	    }
	  }, {
	    key: 'generateTree',
	    value: function generateTree() {
	      var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	      var root = _get(Rack.prototype.__proto__ || Object.getPrototypeOf(Rack.prototype), 'generateTree', this).call(this, level);

	      (0, _values2.default)(this.middlewares).forEach(function (middleware) {
	        root.nodes.push(middleware.generateTree(level + 1));
	      });

	      return root;
	    }
	  }]);

	  return Rack;
	}(_middleware2.default);

	exports.default = Rack;

	var CacheRack = function (_Rack) {
	  _inherits(CacheRack, _Rack);

	  function CacheRack() {
	    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Cache Rack';

	    _classCallCheck(this, CacheRack);

	    var _this3 = _possibleConstructorReturn(this, (CacheRack.__proto__ || Object.getPrototypeOf(CacheRack)).call(this, name));

	    _this3.use(new _middleware.CacheMiddleware());
	    return _this3;
	  }

	  _createClass(CacheRack, [{
	    key: 'useCacheMiddleware',
	    value: function useCacheMiddleware(cacheMiddleware) {
	      this.reset();
	      this.use(cacheMiddleware);
	    }
	  }, {
	    key: 'execute',
	    value: function execute(request) {
	      _utils.Log.debug('Executing cache request', request);
	      return _get(CacheRack.prototype.__proto__ || Object.getPrototypeOf(CacheRack.prototype), 'execute', this).call(this, request).then(function (response) {
	        _utils.Log.debug('Received response for cache request id: ' + request.id, response);
	        return response;
	      }).catch(function (error) {
	        _utils.Log.error('Received error for cache request id: ' + request.id, error);
	        throw error;
	      });
	    }
	  }]);

	  return CacheRack;
	}(Rack);

	var cacheRack = new CacheRack();
	exports.CacheRack = cacheRack;

	var NetworkRack = function (_Rack2) {
	  _inherits(NetworkRack, _Rack2);

	  function NetworkRack() {
	    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Network Rack';

	    _classCallCheck(this, NetworkRack);

	    var _this4 = _possibleConstructorReturn(this, (NetworkRack.__proto__ || Object.getPrototypeOf(NetworkRack)).call(this, name));

	    _this4.use(new _middleware.SerializeMiddleware());
	    _this4.use(new _middleware.HttpMiddleware());
	    _this4.use(new _middleware.ParseMiddleware());
	    return _this4;
	  }

	  _createClass(NetworkRack, [{
	    key: 'useHttpMiddleware',
	    value: function useHttpMiddleware(httpMiddleware) {
	      this.reset();
	      this.use(new _middleware.SerializeMiddleware());
	      this.use(httpMiddleware);
	      this.use(new _middleware.ParseMiddleware());
	    }
	  }, {
	    key: 'execute',
	    value: function execute(request) {
	      _utils.Log.debug('Executing network request', request);
	      return _get(NetworkRack.prototype.__proto__ || Object.getPrototypeOf(NetworkRack.prototype), 'execute', this).call(this, request).then(function (response) {
	        _utils.Log.debug('Received response for network request: ' + request.id, response);
	        return response;
	      }).catch(function (error) {
	        _utils.Log.error('Received error for network request id: ' + request.id, error);
	        throw error;
	      });
	    }
	  }]);

	  return NetworkRack;
	}(Rack);

	var networkRack = new NetworkRack();
	exports.NetworkRack = networkRack;

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

	var baseValues = __webpack_require__(294),
	    keys = __webpack_require__(113);

	/**
	 * Creates an array of the own enumerable string keyed property values of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property values.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.values(new Foo);
	 * // => [1, 2] (iteration order is not guaranteed)
	 *
	 * _.values('hi');
	 * // => ['h', 'i']
	 */
	function values(object) {
	  return object == null ? [] : baseValues(object, keys(object));
	}

	module.exports = values;


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(174);

	/**
	 * The base implementation of `_.values` and `_.valuesIn` which creates an
	 * array of `object` property values corresponding to the property names
	 * of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the array of property values.
	 */
	function baseValues(object, props) {
	  return arrayMap(props, function(key) {
	    return object[key];
	  });
	}

	module.exports = baseValues;


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Storage = exports.SerializeMiddleware = exports.ParseMiddleware = exports.MemoryAdapter = exports.HttpMiddleware = exports.CacheMiddleware = undefined;

	var _cache = __webpack_require__(296);

	var _cache2 = _interopRequireDefault(_cache);

	var _http = __webpack_require__(307);

	var _http2 = _interopRequireDefault(_http);

	var _middleware = __webpack_require__(297);

	var _middleware2 = _interopRequireDefault(_middleware);

	var _parse = __webpack_require__(308);

	var _parse2 = _interopRequireDefault(_parse);

	var _serialize = __webpack_require__(309);

	var _serialize2 = _interopRequireDefault(_serialize);

	var _storage = __webpack_require__(299);

	var _storage2 = _interopRequireDefault(_storage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.CacheMiddleware = _cache2.default;
	exports.HttpMiddleware = _http2.default;
	exports.MemoryAdapter = _storage.MemoryAdapter;
	exports.ParseMiddleware = _parse2.default;
	exports.SerializeMiddleware = _serialize2.default;
	exports.Storage = _storage2.default;
	exports.default = _middleware2.default;

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _isEmpty = __webpack_require__(132);

	var _isEmpty2 = _interopRequireDefault(_isEmpty);

	var _utils = __webpack_require__(40);

	var _middleware = __webpack_require__(297);

	var _middleware2 = _interopRequireDefault(_middleware);

	var _storage = __webpack_require__(299);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CacheMiddleware = function (_Middleware) {
	  _inherits(CacheMiddleware, _Middleware);

	  function CacheMiddleware() {
	    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Cache Middleware';

	    _classCallCheck(this, CacheMiddleware);

	    return _possibleConstructorReturn(this, (CacheMiddleware.__proto__ || Object.getPrototypeOf(CacheMiddleware)).call(this, name));
	  }

	  _createClass(CacheMiddleware, [{
	    key: 'loadStorage',
	    value: function loadStorage(name) {
	      return new _storage.Storage(name);
	    }
	  }, {
	    key: 'handle',
	    value: function handle(request) {
	      var method = request.method,
	          body = request.body,
	          appKey = request.appKey,
	          collection = request.collection,
	          entityId = request.entityId;

	      var storage = this.loadStorage(appKey);
	      var promise = void 0;

	      if (method === 'GET') {
	        if ((0, _utils.isDefined)(entityId)) {
	          promise = storage.findById(collection, entityId);
	        } else {
	          promise = storage.find(collection);
	        }
	      } else if (method === 'POST' || method === 'PUT') {
	        if (entityId === '_group') {
	          promise = storage.find(collection);
	        } else {
	          promise = storage.save(collection, body);
	        }
	      } else if (method === 'DELETE') {
	        if ((0, _utils.isDefined)(collection) === false) {
	          promise = storage.clear();
	        } else {
	          promise = storage.removeById(collection, entityId);
	        }
	      }

	      return promise.then(function (data) {
	        var response = {
	          statusCode: method === 'POST' ? 201 : 200,
	          data: data
	        };

	        if (method === 'POST' && entityId === '_group') {
	          response.statusCode = 200;
	        }

	        if ((0, _utils.isDefined)(data) === false || (0, _isEmpty2.default)(data)) {
	          response.statusCode = 204;
	        }

	        return response;
	      }).catch(function (error) {
	        return { statusCode: error.code };
	      }).then(function (response) {
	        return { response: response };
	      });
	    }
	  }]);

	  return CacheMiddleware;
	}(_middleware2.default);

	exports.default = CacheMiddleware;

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _es6Promise = __webpack_require__(47);

	var _es6Promise2 = _interopRequireDefault(_es6Promise);

	var _asciitree = __webpack_require__(298);

	var _asciitree2 = _interopRequireDefault(_asciitree);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Middleware = function () {
	  function Middleware() {
	    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Middleware';

	    _classCallCheck(this, Middleware);

	    this.name = name;
	  }

	  _createClass(Middleware, [{
	    key: 'handle',
	    value: function handle() {
	      return _es6Promise2.default.reject(new Error('A subclass middleware must override the handle function.'));
	    }
	  }, {
	    key: 'cancel',
	    value: function cancel() {
	      return _es6Promise2.default.resolve();
	    }
	  }, {
	    key: 'generateTree',
	    value: function generateTree() {
	      var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	      var root = {
	        value: this.name,
	        level: level,
	        nodes: []
	      };
	      return root;
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      var root = this.generateTree();
	      return _asciitree2.default.generate(root);
	    }
	  }]);

	  return Middleware;
	}();

	exports.default = Middleware;

/***/ }),
/* 298 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var levels = [];
	var c0 = String.fromCharCode(9500);
	var c1 = String.fromCharCode(9472);
	var c2 = String.fromCharCode(9492);
	var c3 = String.fromCharCode(9474);

	function compose(node, end) {
	  if (node.level === 0) {
	    return node.value;
	  }

	  var ret = '\r\n';
	  var c = end ? c2 : c0;

	  for (var i = 1; i < node.level; i += 1) {
	    ret = '' + ret + (levels[i] ? ' ' : c3);
	    ret = ret + '  ';
	  }

	  return '' + ret + c + c1 + ' ' + node.value;
	}

	var AsciiTree = function () {
	  function AsciiTree() {
	    _classCallCheck(this, AsciiTree);
	  }

	  _createClass(AsciiTree, null, [{
	    key: 'generate',
	    value: function generate() {
	      var _this = this;

	      var tree = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      var end = arguments[1];

	      var result = compose(tree, end);

	      if (tree.nodes.length > 0) {
	        var last = tree.nodes.length - 1;
	        tree.nodes.forEach(function (subTree, index) {
	          levels[subTree.level] = index === last;
	          result += _this.generate(subTree, index === last);
	        });
	      }

	      return result;
	    }
	  }]);

	  return AsciiTree;
	}();

	exports.default = AsciiTree;

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Storage = exports.MemoryAdapter = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _es6Promise = __webpack_require__(47);

	var _es6Promise2 = _interopRequireDefault(_es6Promise);

	var _isString = __webpack_require__(131);

	var _isString2 = _interopRequireDefault(_isString);

	var _isArray = __webpack_require__(119);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _utils = __webpack_require__(40);

	var _errors = __webpack_require__(2);

	var _memory = __webpack_require__(300);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var queue = new _utils.Queue(1, Infinity);

	exports.MemoryAdapter = _memory.MemoryAdapter;

	var Storage = exports.Storage = function () {
	  function Storage(name) {
	    _classCallCheck(this, Storage);

	    if (!name) {
	      throw new _errors.KinveyError('Unable to create a Storage instance without a name.');
	    }

	    if (!(0, _isString2.default)(name)) {
	      throw new _errors.KinveyError('The name is not a string. A name must be a string to create a Storage instance.');
	    }

	    this.name = name;
	  }

	  _createClass(Storage, [{
	    key: 'loadAdapter',
	    value: function loadAdapter() {
	      var _this = this;

	      return _es6Promise2.default.resolve().then(function () {
	        return _memory.MemoryAdapter.load(_this.name);
	      }).then(function (adapter) {
	        if (!(0, _utils.isDefined)(adapter)) {
	          return _es6Promise2.default.reject(new _errors.KinveyError('Unable to load a storage adapter.'));
	        }

	        return adapter;
	      });
	    }
	  }, {
	    key: 'generateObjectId',
	    value: function generateObjectId() {
	      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 24;

	      var chars = 'abcdef0123456789';
	      var objectId = '';

	      for (var i = 0, j = chars.length; i < length; i += 1) {
	        var pos = Math.floor(Math.random() * j);
	        objectId += chars.substring(pos, pos + 1);
	      }

	      return objectId;
	    }
	  }, {
	    key: 'find',
	    value: function find(collection) {
	      return this.loadAdapter().then(function (adapter) {
	        _utils.Log.debug('Find all the entities stored in the ' + collection + ' collection.', adapter);
	        return adapter.find(collection);
	      }).catch(function (error) {
	        _utils.Log.error('Unable to find all the entities stored in the ' + collection + ' collection.', error);
	        if (error instanceof _errors.NotFoundError || error.code === 404) {
	          return [];
	        }

	        return _es6Promise2.default.reject(error);
	      }).then(function () {
	        var entities = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	        return entities;
	      });
	    }
	  }, {
	    key: 'findById',
	    value: function findById(collection, id) {
	      if (!(0, _isString2.default)(id)) {
	        var error = new _errors.KinveyError('id must be a string', id);
	        _utils.Log.error('Unable to find an entity with id ' + id + ' stored in the ' + collection + ' collection.', error.message);
	        return _es6Promise2.default.reject(error);
	      }

	      return this.loadAdapter().then(function (adapter) {
	        _utils.Log.debug('Find an entity with id ' + id + ' stored in the ' + collection + ' collection.', adapter);
	        return adapter.findById(collection, id);
	      });
	    }
	  }, {
	    key: 'save',
	    value: function save(collection) {
	      var _this2 = this;

	      var entities = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	      return queue.add(function () {
	        var singular = false;

	        if ((0, _utils.isDefined)(entities) === false) {
	          return _es6Promise2.default.resolve(null);
	        }

	        if (!(0, _isArray2.default)(entities)) {
	          singular = true;
	          entities = [entities];
	        }

	        entities = entities.map(function (entity) {
	          if (!(0, _utils.isDefined)(entity._id)) {
	            var kmd = entity._kmd || {};
	            kmd.local = true;
	            entity._kmd = kmd;
	            entity._id = _this2.generateObjectId();
	          }

	          return entity;
	        });

	        return _this2.loadAdapter().then(function (adapter) {
	          return adapter.save(collection, entities);
	        }).then(function (entities) {
	          if (singular && entities.length > 0) {
	            return entities[0];
	          }

	          return entities;
	        });
	      });
	    }
	  }, {
	    key: 'remove',
	    value: function remove(collection) {
	      var _this3 = this;

	      var entities = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	      return _es6Promise2.default.all(entities.map(function (entity) {
	        if (!(0, _utils.isDefined)(entity._id)) {
	          return _es6Promise2.default.reject(new _errors.KinveyError('Unable to remove this entity because it does not have _id.'));
	        }

	        return _this3.removeById(collection, entity._id);
	      })).then(function (results) {
	        return results.reduce(function (response, result) {
	          response.count += result.count;
	          return response;
	        }, { count: 0 });
	      });
	    }
	  }, {
	    key: 'removeById',
	    value: function removeById(collection, id) {
	      var _this4 = this;

	      return queue.add(function () {
	        if (!(0, _isString2.default)(id)) {
	          return _es6Promise2.default.reject(new _errors.KinveyError('id must be a string', id));
	        }

	        return _this4.loadAdapter().then(function (adapter) {
	          return adapter.removeById(collection, id);
	        });
	      });
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var _this5 = this;

	      return queue.add(function () {
	        return _this5.loadAdapter().then(function (adapter) {
	          return adapter.clear();
	        });
	      });
	    }
	  }]);

	  return Storage;
	}();

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MemoryAdapter = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _es6Promise = __webpack_require__(47);

	var _es6Promise2 = _interopRequireDefault(_es6Promise);

	var _fastMemoryCache = __webpack_require__(289);

	var _fastMemoryCache2 = _interopRequireDefault(_fastMemoryCache);

	var _keyBy = __webpack_require__(225);

	var _keyBy2 = _interopRequireDefault(_keyBy);

	var _forEach = __webpack_require__(280);

	var _forEach2 = _interopRequireDefault(_forEach);

	var _values = __webpack_require__(293);

	var _values2 = _interopRequireDefault(_values);

	var _find = __webpack_require__(301);

	var _find2 = _interopRequireDefault(_find);

	var _isString = __webpack_require__(131);

	var _isString2 = _interopRequireDefault(_isString);

	var _isArray = __webpack_require__(119);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _utils = __webpack_require__(40);

	var _errors = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var caches = {};

	var Memory = function () {
	  function Memory(name) {
	    _classCallCheck(this, Memory);

	    if (!(0, _utils.isDefined)(name)) {
	      throw new Error('A name for the collection is required to use the memory persistence adapter.', name);
	    }

	    if (!(0, _isString2.default)(name)) {
	      throw new Error('The name of the collection must be a string to use the memory persistence adapter', name);
	    }

	    this.name = name;
	    this.cache = caches[name];

	    if (!(0, _utils.isDefined)(this.cache)) {
	      this.cache = new _fastMemoryCache2.default();
	      caches[name] = this.cache;
	    }
	  }

	  _createClass(Memory, [{
	    key: 'find',
	    value: function find(collection) {
	      try {
	        var entities = this.cache.get(collection);

	        if (entities) {
	          return _es6Promise2.default.resolve(JSON.parse(entities));
	        }

	        return _es6Promise2.default.resolve([]);
	      } catch (error) {
	        return _es6Promise2.default.reject(error);
	      }
	    }
	  }, {
	    key: 'findById',
	    value: function findById(collection, id) {
	      var _this = this;

	      return this.find(collection).then(function (entities) {
	        var entity = (0, _find2.default)(entities, function (entity) {
	          return entity._id === id;
	        });

	        if (!entity) {
	          return _es6Promise2.default.reject(new _errors.NotFoundError('An entity with _id = ' + id + ' was not found in the ' + collection + (' collection on the ' + _this.name + ' memory database.')));
	        }

	        return entity;
	      });
	    }
	  }, {
	    key: 'save',
	    value: function save(collection, entities) {
	      var _this2 = this;

	      var singular = false;

	      if (!(0, _isArray2.default)(entities)) {
	        entities = [entities];
	        singular = true;
	      }

	      if (entities.length === 0) {
	        return _es6Promise2.default.resolve(entities);
	      }

	      return this.find(collection).then(function (existingEntities) {
	        existingEntities = (0, _keyBy2.default)(existingEntities, '_id');
	        entities = (0, _keyBy2.default)(entities, '_id');
	        var entityIds = Object.keys(entities);

	        (0, _forEach2.default)(entityIds, function (id) {
	          existingEntities[id] = entities[id];
	        });

	        _this2.cache.set(collection, JSON.stringify((0, _values2.default)(existingEntities)));

	        entities = (0, _values2.default)(entities);
	        return singular ? entities[0] : entities;
	      });
	    }
	  }, {
	    key: 'removeById',
	    value: function removeById(collection, id) {
	      var _this3 = this;

	      return this.find(collection).then(function (entities) {
	        entities = (0, _keyBy2.default)(entities, '_id');
	        var entity = entities[id];

	        if (!(0, _utils.isDefined)(entity)) {
	          return _es6Promise2.default.reject(new _errors.NotFoundError('An entity with _id = ' + id + ' was not found in the ' + collection + (' collection on the ' + _this3.name + ' memory database.')));
	        }

	        delete entities[id];
	        _this3.cache.set(collection, JSON.stringify((0, _values2.default)(entities)));
	        return { count: 1 };
	      });
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      this.cache.clear();
	      return _es6Promise2.default.resolve(null);
	    }
	  }]);

	  return Memory;
	}();

	var MemoryAdapter = {
	  load: function load(name) {
	    return new Memory(name);
	  }
	};
	exports.MemoryAdapter = MemoryAdapter;

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

	var createFind = __webpack_require__(302),
	    findIndex = __webpack_require__(303);

	/**
	 * Iterates over elements of `collection`, returning the first element
	 * `predicate` returns truthy for. The predicate is invoked with three
	 * arguments: (value, index|key, collection).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to inspect.
	 * @param {Function} [predicate=_.identity] The function invoked per iteration.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @returns {*} Returns the matched element, else `undefined`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'age': 36, 'active': true },
	 *   { 'user': 'fred',    'age': 40, 'active': false },
	 *   { 'user': 'pebbles', 'age': 1,  'active': true }
	 * ];
	 *
	 * _.find(users, function(o) { return o.age < 40; });
	 * // => object for 'barney'
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.find(users, { 'age': 1, 'active': true });
	 * // => object for 'pebbles'
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.find(users, ['active', false]);
	 * // => object for 'fred'
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.find(users, 'active');
	 * // => object for 'barney'
	 */
	var find = createFind(findIndex);

	module.exports = find;


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIteratee = __webpack_require__(179),
	    isArrayLike = __webpack_require__(109),
	    keys = __webpack_require__(113);

	/**
	 * Creates a `_.find` or `_.findLast` function.
	 *
	 * @private
	 * @param {Function} findIndexFunc The function to find the collection index.
	 * @returns {Function} Returns the new find function.
	 */
	function createFind(findIndexFunc) {
	  return function(collection, predicate, fromIndex) {
	    var iterable = Object(collection);
	    if (!isArrayLike(collection)) {
	      var iteratee = baseIteratee(predicate, 3);
	      collection = keys(collection);
	      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
	    }
	    var index = findIndexFunc(collection, predicate, fromIndex);
	    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
	  };
	}

	module.exports = createFind;


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

	var baseFindIndex = __webpack_require__(170),
	    baseIteratee = __webpack_require__(179),
	    toInteger = __webpack_require__(304);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * This method is like `_.find` except that it returns the index of the first
	 * element `predicate` returns truthy for instead of the element itself.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {Function} [predicate=_.identity] The function invoked per iteration.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @returns {number} Returns the index of the found element, else `-1`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'active': false },
	 *   { 'user': 'fred',    'active': false },
	 *   { 'user': 'pebbles', 'active': true }
	 * ];
	 *
	 * _.findIndex(users, function(o) { return o.user == 'barney'; });
	 * // => 0
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.findIndex(users, { 'user': 'fred', 'active': false });
	 * // => 1
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.findIndex(users, ['active', false]);
	 * // => 0
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.findIndex(users, 'active');
	 * // => 2
	 */
	function findIndex(array, predicate, fromIndex) {
	  var length = array == null ? 0 : array.length;
	  if (!length) {
	    return -1;
	  }
	  var index = fromIndex == null ? 0 : toInteger(fromIndex);
	  if (index < 0) {
	    index = nativeMax(length + index, 0);
	  }
	  return baseFindIndex(array, baseIteratee(predicate, 3), index);
	}

	module.exports = findIndex;


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

	var toFinite = __webpack_require__(305);

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;

	  return result === result ? (remainder ? result - remainder : result) : 0;
	}

	module.exports = toInteger;


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(306);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;

	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	module.exports = toFinite;


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(92),
	    isSymbol = __webpack_require__(210);

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = toNumber;


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _es6Promise = __webpack_require__(47);

	var _es6Promise2 = _interopRequireDefault(_es6Promise);

	var _errors = __webpack_require__(2);

	var _middleware = __webpack_require__(297);

	var _middleware2 = _interopRequireDefault(_middleware);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HttpMiddleware = function (_Middleware) {
	  _inherits(HttpMiddleware, _Middleware);

	  function HttpMiddleware() {
	    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Http Middleware';

	    _classCallCheck(this, HttpMiddleware);

	    return _possibleConstructorReturn(this, (HttpMiddleware.__proto__ || Object.getPrototypeOf(HttpMiddleware)).call(this, name));
	  }

	  _createClass(HttpMiddleware, [{
	    key: 'handle',
	    value: function handle() {
	      return _es6Promise2.default.reject(new _errors.KinveyError('Unable to send network request.', 'Please override the core HttpMiddleware.'));
	    }
	  }, {
	    key: 'cancel',
	    value: function cancel() {
	      return _es6Promise2.default.resolve();
	    }
	  }]);

	  return HttpMiddleware;
	}(_middleware2.default);

	exports.default = HttpMiddleware;

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _es6Promise = __webpack_require__(47);

	var _es6Promise2 = _interopRequireDefault(_es6Promise);

	var _utils = __webpack_require__(40);

	var _middleware = __webpack_require__(297);

	var _middleware2 = _interopRequireDefault(_middleware);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ParseMiddleware = function (_Middleware) {
	  _inherits(ParseMiddleware, _Middleware);

	  function ParseMiddleware() {
	    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Parse Middleware';

	    _classCallCheck(this, ParseMiddleware);

	    return _possibleConstructorReturn(this, (ParseMiddleware.__proto__ || Object.getPrototypeOf(ParseMiddleware)).call(this, name));
	  }

	  _createClass(ParseMiddleware, [{
	    key: 'handle',
	    value: function handle(request, response) {
	      if ((0, _utils.isDefined)(response) && (0, _utils.isDefined)(response.data)) {
	        var contentType = response.headers['content-type'] || response.headers['Content-Type'];

	        if (contentType) {
	          if (contentType.indexOf('application/json') === 0) {
	            try {
	              response.data = JSON.parse(response.data);
	            } catch (error) {}
	          }
	        }
	      }

	      return _es6Promise2.default.resolve({ response: response });
	    }
	  }]);

	  return ParseMiddleware;
	}(_middleware2.default);

	exports.default = ParseMiddleware;

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _es6Promise = __webpack_require__(47);

	var _es6Promise2 = _interopRequireDefault(_es6Promise);

	var _utils = __webpack_require__(40);

	var _middleware = __webpack_require__(297);

	var _middleware2 = _interopRequireDefault(_middleware);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SerializeMiddleware = function (_Middleware) {
	  _inherits(SerializeMiddleware, _Middleware);

	  function SerializeMiddleware() {
	    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Serialize Middleware';

	    _classCallCheck(this, SerializeMiddleware);

	    return _possibleConstructorReturn(this, (SerializeMiddleware.__proto__ || Object.getPrototypeOf(SerializeMiddleware)).call(this, name));
	  }

	  _createClass(SerializeMiddleware, [{
	    key: 'handle',
	    value: function handle(request) {
	      if ((0, _utils.isDefined)(request) && (0, _utils.isDefined)(request.body)) {
	        var contentType = request.headers['content-type'] || request.headers['Content-Type'];

	        if ((0, _utils.isDefined)(contentType)) {
	          if (contentType.indexOf('application/json') === 0) {
	            request.body = JSON.stringify(request.body);
	          } else if (contentType.indexOf('application/x-www-form-urlencoded') === 0) {
	            var body = request.body;
	            var str = [];

	            Object.keys(body).forEach(function (key) {
	              str.push(global.encodeURIComponent(key) + '=' + global.encodeURIComponent(body[key]));
	            });

	            request.body = str.join('&');
	          }
	        }
	      }

	      return _es6Promise2.default.resolve({ request: request });
	    }
	  }]);

	  return SerializeMiddleware;
	}(_middleware2.default);

	exports.default = SerializeMiddleware;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _es6Promise = __webpack_require__(47);

	var _es6Promise2 = _interopRequireDefault(_es6Promise);

	var _keyBy = __webpack_require__(225);

	var _keyBy2 = _interopRequireDefault(_keyBy);

	var _reduce = __webpack_require__(239);

	var _reduce2 = _interopRequireDefault(_reduce);

	var _result = __webpack_require__(311);

	var _result2 = _interopRequireDefault(_result);

	var _values = __webpack_require__(293);

	var _values2 = _interopRequireDefault(_values);

	var _forEach = __webpack_require__(280);

	var _forEach2 = _interopRequireDefault(_forEach);

	var _isArray = __webpack_require__(119);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _isString = __webpack_require__(131);

	var _isString2 = _interopRequireDefault(_isString);

	var _errors = __webpack_require__(2);

	var _utils = __webpack_require__(40);

	var _query3 = __webpack_require__(275);

	var _query4 = _interopRequireDefault(_query3);

	var _request3 = __webpack_require__(287);

	var _network = __webpack_require__(312);

	var _cache = __webpack_require__(245);

	var _cache2 = _interopRequireDefault(_cache);

	var _response = __webpack_require__(290);

	var _response2 = _interopRequireDefault(_response);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var maxIdsPerRequest = 200;

	var DeltaFetchRequest = function (_KinveyRequest) {
	  _inherits(DeltaFetchRequest, _KinveyRequest);

	  function DeltaFetchRequest() {
	    _classCallCheck(this, DeltaFetchRequest);

	    return _possibleConstructorReturn(this, (DeltaFetchRequest.__proto__ || Object.getPrototypeOf(DeltaFetchRequest)).apply(this, arguments));
	  }

	  _createClass(DeltaFetchRequest, [{
	    key: 'execute',
	    value: function execute() {
	      var _this2 = this;

	      var request = new _cache2.default({
	        method: _request3.RequestMethod.GET,
	        url: this.url,
	        headers: this.headers,
	        query: this.query,
	        timeout: this.timeout,
	        client: this.client
	      });
	      return request.execute().then(function (response) {
	        return response.data;
	      }).catch(function (error) {
	        if (!(error instanceof _errors.NotFoundError)) {
	          throw error;
	        }

	        return [];
	      }).then(function (cacheData) {
	        if ((0, _isArray2.default)(cacheData) && cacheData.length > 0) {
	          var cacheDocuments = (0, _keyBy2.default)(cacheData, '_id');
	          var query = new _query4.default((0, _result2.default)(_this2.query, 'toJSON', _this2.query));
	          query.fields = ['_id', '_kmd.lmt'];
	          var _request = new _network.KinveyRequest({
	            method: _request3.RequestMethod.GET,
	            url: _this2.url,
	            headers: _this2.headers,
	            authType: _this2.authType,
	            query: query,
	            timeout: _this2.timeout,
	            client: _this2.client,
	            properties: _this2.properties,
	            skipBL: _this2.skipBL,
	            trace: _this2.trace,
	            followRedirect: _this2.followRedirect,
	            cache: _this2.cache
	          });

	          return _request.execute().then(function (response) {
	            return response.data;
	          }).then(function (networkData) {
	            var networkDocuments = (0, _keyBy2.default)(networkData, '_id');
	            var deltaSet = networkDocuments;
	            var cacheDocumentIds = Object.keys(cacheDocuments);

	            (0, _forEach2.default)(cacheDocumentIds, function (id) {
	              var cacheDocument = cacheDocuments[id];
	              var networkDocument = networkDocuments[id];

	              if (networkDocument) {
	                if ((0, _utils.isDefined)(networkDocument._kmd) && (0, _utils.isDefined)(cacheDocument._kmd) && networkDocument._kmd.lmt === cacheDocument._kmd.lmt) {
	                  delete deltaSet[id];
	                } else {
	                  delete cacheDocuments[id];
	                }
	              } else {
	                delete cacheDocuments[id];
	              }
	            });

	            var deltaSetIds = Object.keys(deltaSet);
	            var promises = [];
	            var i = 0;

	            while (i < deltaSetIds.length) {
	              var _query = new _query4.default((0, _result2.default)(_this2.query, 'toJSON', _this2.query));
	              var ids = deltaSetIds.slice(i, deltaSetIds.length > maxIdsPerRequest + i ? maxIdsPerRequest : deltaSetIds.length);
	              _query.contains('_id', ids);

	              var _request2 = new _network.KinveyRequest({
	                method: _request3.RequestMethod.GET,
	                url: _this2.url,
	                headers: _this2.headers,
	                authType: _this2.authType,
	                query: _query,
	                timeout: _this2.timeout,
	                client: _this2.client,
	                properties: _this2.properties,
	                skipBL: _this2.skipBL,
	                trace: _this2.trace,
	                followRedirect: _this2.followRedirect,
	                cache: _this2.cache
	              });

	              var promise = _request2.execute();
	              promises.push(promise);
	              i += maxIdsPerRequest;
	            }

	            return _es6Promise2.default.all(promises);
	          }).then(function (responses) {
	            var response = (0, _reduce2.default)(responses, function (result, response) {
	              if (response.isSuccess()) {
	                var headers = result.headers;
	                headers.addAll(response.headers);
	                result.headers = headers;
	                result.data = result.data.concat(response.data);
	              }

	              return result;
	            }, new _response2.default({
	              statusCode: _response.StatusCode.Ok,
	              data: []
	            }));

	            response.data = response.data.concat((0, _values2.default)(cacheDocuments));

	            if (_this2.query) {
	              var _query2 = new _query4.default((0, _result2.default)(_this2.query, 'toJSON', _this2.query));
	              _query2.skip = 0;
	              _query2.limit = 0;
	              response.data = _query2.process(response.data);
	            }

	            return response;
	          });
	        }

	        var request = new _network.KinveyRequest({
	          method: _request3.RequestMethod.GET,
	          url: _this2.url,
	          headers: _this2.headers,
	          authType: _this2.authType,
	          query: _this2.query,
	          timeout: _this2.timeout,
	          client: _this2.client,
	          properties: _this2.properties,
	          skipBL: _this2.skipBL,
	          trace: _this2.trace,
	          followRedirect: _this2.followRedirect,
	          cache: _this2.cache
	        });
	        return request.execute();
	      });
	    }
	  }, {
	    key: 'method',
	    get: function get() {
	      return _get(DeltaFetchRequest.prototype.__proto__ || Object.getPrototypeOf(DeltaFetchRequest.prototype), 'method', this);
	    },
	    set: function set(method) {
	      if (!(0, _isString2.default)(method)) {
	        method = String(method);
	      }

	      method = method.toUpperCase();

	      switch (method) {
	        case _request3.RequestMethod.GET:
	          _set(DeltaFetchRequest.prototype.__proto__ || Object.getPrototypeOf(DeltaFetchRequest.prototype), 'method', method, this);
	          break;
	        case _request3.RequestMethod.POST:
	        case _request3.RequestMethod.PATCH:
	        case _request3.RequestMethod.PUT:
	        case _request3.RequestMethod.DELETE:
	        default:
	          throw new _errors.KinveyError('Invalid request Method. Only RequestMethod.GET is allowed.');
	      }
	    }
	  }]);

	  return DeltaFetchRequest;
	}(_network.KinveyRequest);

	exports.default = DeltaFetchRequest;

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(208),
	    isFunction = __webpack_require__(85),
	    toKey = __webpack_require__(216);

	/**
	 * This method is like `_.get` except that if the resolved value is a
	 * function it's invoked with the `this` binding of its parent object and
	 * its result is returned.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to resolve.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
	 *
	 * _.result(object, 'a[0].b.c1');
	 * // => 3
	 *
	 * _.result(object, 'a[0].b.c2');
	 * // => 4
	 *
	 * _.result(object, 'a[0].b.c3', 'default');
	 * // => 'default'
	 *
	 * _.result(object, 'a[0].b.c3', _.constant('default'));
	 * // => 'default'
	 */
	function result(object, path, defaultValue) {
	  path = castPath(path, object);

	  var index = -1,
	      length = path.length;

	  // Ensure the loop is entered when path is empty.
	  if (!length) {
	    length = 1;
	    object = undefined;
	  }
	  while (++index < length) {
	    var value = object == null ? undefined : object[toKey(path[index])];
	    if (value === undefined) {
	      index = length;
	      value = defaultValue;
	    }
	    object = isFunction(value) ? value.call(object) : value;
	  }
	  return object;
	}

	module.exports = result;


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.KinveyRequest = exports.Properties = exports.AuthType = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _es6Promise = __webpack_require__(47);

	var _es6Promise2 = _interopRequireDefault(_es6Promise);

	var _buffer = __webpack_require__(313);

	var _qs = __webpack_require__(74);

	var _qs2 = _interopRequireDefault(_qs);

	var _assign = __webpack_require__(79);

	var _assign2 = _interopRequireDefault(_assign);

	var _defaults = __webpack_require__(318);

	var _defaults2 = _interopRequireDefault(_defaults);

	var _isEmpty = __webpack_require__(132);

	var _isEmpty2 = _interopRequireDefault(_isEmpty);

	var _url = __webpack_require__(67);

	var _url2 = _interopRequireDefault(_url);

	var _query = __webpack_require__(275);

	var _query2 = _interopRequireDefault(_query);

	var _aggregation = __webpack_require__(286);

	var _aggregation2 = _interopRequireDefault(_aggregation);

	var _utils = __webpack_require__(40);

	var _errors = __webpack_require__(2);

	var _identity = __webpack_require__(321);

	var _request = __webpack_require__(287);

	var _request2 = _interopRequireDefault(_request);

	var _headers = __webpack_require__(291);

	var _headers2 = _interopRequireDefault(_headers);

	var _response = __webpack_require__(290);

	var _rack = __webpack_require__(292);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NetworkRequest = function (_Request) {
	  _inherits(NetworkRequest, _Request);

	  function NetworkRequest() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, NetworkRequest);

	    var _this = _possibleConstructorReturn(this, (NetworkRequest.__proto__ || Object.getPrototypeOf(NetworkRequest)).call(this, options));

	    _this.rack = _rack.NetworkRack;
	    return _this;
	  }

	  return NetworkRequest;
	}(_request2.default);

	exports.default = NetworkRequest;

	var AuthType = {
	  All: 'All',
	  App: 'App',
	  Basic: 'Basic',
	  Default: 'Default',
	  Master: 'Master',
	  None: 'None',
	  Session: 'Session'
	};
	Object.freeze(AuthType);
	exports.AuthType = AuthType;


	var Auth = {
	  all: function all(client) {
	    return Auth.session(client).catch(function () {
	      return Auth.basic(client);
	    });
	  },
	  app: function app(client) {
	    if (!client.appKey || !client.appSecret) {
	      return _es6Promise2.default.reject(new Error('Missing client appKey and/or appSecret.' + ' Use Kinvey.initialize() to set the appKey and appSecret for the client.'));
	    }

	    return _es6Promise2.default.resolve({
	      scheme: 'Basic',
	      username: client.appKey,
	      password: client.appSecret
	    });
	  },
	  basic: function basic(client) {
	    return Auth.master(client).catch(function () {
	      return Auth.app(client);
	    });
	  },
	  master: function master(client) {
	    if (!client.appKey || !client.masterSecret) {
	      return _es6Promise2.default.reject(new Error('Missing client appKey and/or masterSecret.' + ' Use Kinvey.initialize() to set the appKey and masterSecret for the client.'));
	    }

	    return _es6Promise2.default.resolve({
	      scheme: 'Basic',
	      username: client.appKey,
	      password: client.masterSecret
	    });
	  },
	  none: function none() {
	    return _es6Promise2.default.resolve(null);
	  },
	  session: function session(client) {
	    var activeUser = client.getActiveUser();

	    if (!(0, _utils.isDefined)(activeUser)) {
	      return _es6Promise2.default.reject(new _errors.NoActiveUserError('There is not an active user. Please login a user and retry the request.'));
	    }

	    return _es6Promise2.default.resolve({
	      scheme: 'Kinvey',
	      credentials: activeUser._kmd.authtoken
	    });
	  }
	};

	function byteCount(str) {
	  if (str) {
	    var count = 0;
	    var stringLength = str.length;
	    str = String(str || '');

	    for (var i = 0; i < stringLength; i += 1) {
	      var partCount = encodeURI(str[i]).split('%').length;
	      count += partCount === 1 ? 1 : partCount - 1;
	    }

	    return count;
	  }

	  return 0;
	}

	var Properties = exports.Properties = function (_Headers) {
	  _inherits(Properties, _Headers);

	  function Properties() {
	    _classCallCheck(this, Properties);

	    return _possibleConstructorReturn(this, (Properties.__proto__ || Object.getPrototypeOf(Properties)).apply(this, arguments));
	  }

	  return Properties;
	}(_headers2.default);

	var KinveyRequest = exports.KinveyRequest = function (_NetworkRequest) {
	  _inherits(KinveyRequest, _NetworkRequest);

	  function KinveyRequest() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, KinveyRequest);

	    var _this3 = _possibleConstructorReturn(this, (KinveyRequest.__proto__ || Object.getPrototypeOf(KinveyRequest)).call(this, options));

	    options = (0, _assign2.default)({
	      skipBL: false,
	      trace: false
	    }, options);

	    _this3.authType = options.authType || AuthType.None;
	    _this3.query = options.query;
	    _this3.aggregation = options.aggregation;
	    _this3.properties = options.properties || new Properties();
	    _this3.skipBL = options.skipBL === true;
	    _this3.trace = options.trace === true;
	    return _this3;
	  }

	  _createClass(KinveyRequest, [{
	    key: 'getAuthorizationHeader',
	    value: function getAuthorizationHeader() {
	      var _this4 = this;

	      var promise = _es6Promise2.default.resolve(undefined);

	      if (this.authType) {
	        switch (this.authType) {
	          case AuthType.All:
	            promise = Auth.all(this.client);
	            break;
	          case AuthType.App:
	            promise = Auth.app(this.client);
	            break;
	          case AuthType.Basic:
	            promise = Auth.basic(this.client);
	            break;
	          case AuthType.Master:
	            promise = Auth.master(this.client);
	            break;
	          case AuthType.None:
	            promise = Auth.none(this.client);
	            break;
	          case AuthType.Session:
	            promise = Auth.session(this.client);
	            break;
	          default:
	            promise = Auth.session(this.client).catch(function (error) {
	              return Auth.master(_this4.client).catch(function () {
	                throw error;
	              });
	            });
	        }
	      }

	      return promise.then(function (authInfo) {
	        if ((0, _utils.isDefined)(authInfo)) {
	          var credentials = authInfo.credentials;

	          if (authInfo.username) {
	            credentials = new _buffer.Buffer(authInfo.username + ':' + authInfo.password).toString('base64');
	          }

	          return authInfo.scheme + ' ' + credentials;
	        }

	        return undefined;
	      });
	    }
	  }, {
	    key: 'execute',
	    value: function execute() {
	      var _this5 = this;

	      var rawResponse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	      var retry = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	      return this.getAuthorizationHeader().then(function (authorizationHeader) {
	        if ((0, _utils.isDefined)(authorizationHeader)) {
	          _this5.headers.set('Authorization', authorizationHeader);
	        } else {
	          _this5.headers.remove('Authorization');
	        }
	      }).then(function () {
	        return _get(KinveyRequest.prototype.__proto__ || Object.getPrototypeOf(KinveyRequest.prototype), 'execute', _this5).call(_this5);
	      }).then(function (response) {
	        if (response instanceof _response.KinveyResponse === false) {
	          response = new _response.KinveyResponse({
	            statusCode: response.statusCode,
	            headers: response.headers,
	            data: response.data
	          });
	        }

	        if (rawResponse === false && response.isSuccess() === false) {
	          throw response.error;
	        }

	        return response;
	      }).catch(function (error) {
	        if (retry && error instanceof _errors.InvalidCredentialsError) {
	          var activeUser = _this5.client.getActiveUser();

	          if ((0, _utils.isDefined)(activeUser)) {
	            var socialIdentity = (0, _utils.isDefined)(activeUser._socialIdentity) ? activeUser._socialIdentity : {};
	            var sessionKey = Object.keys(socialIdentity).find(function (sessionKey) {
	              return socialIdentity[sessionKey].identity === 'kinveyAuth';
	            });
	            var oldSession = socialIdentity[sessionKey];

	            if ((0, _utils.isDefined)(oldSession)) {
	              var request = new KinveyRequest({
	                method: _request.RequestMethod.POST,
	                headers: {
	                  'Content-Type': 'application/x-www-form-urlencoded'
	                },
	                authType: AuthType.App,
	                url: _url2.default.format({
	                  protocol: _this5.client.micProtocol,
	                  host: _this5.client.micHost,
	                  pathname: '/oauth/token'
	                }),
	                body: {
	                  grant_type: 'refresh_token',
	                  client_id: oldSession.client_id,
	                  redirect_uri: oldSession.redirect_uri,
	                  refresh_token: oldSession.refresh_token
	                },
	                properties: _this5.properties,
	                timeout: _this5.timeout
	              });
	              return request.execute().then(function (response) {
	                return response.data;
	              }).then(function (session) {
	                session.identity = oldSession.identity;
	                session.client_id = oldSession.client_id;
	                session.redirect_uri = oldSession.redirect_uri;
	                session.protocol = _this5.client.micProtocol;
	                session.host = _this5.client.micHost;
	                return session;
	              }).then(function (session) {
	                var data = {};
	                socialIdentity[session.identity] = session;
	                data._socialIdentity = socialIdentity;

	                var request = new KinveyRequest({
	                  method: _request.RequestMethod.POST,
	                  authType: AuthType.App,
	                  url: _url2.default.format({
	                    protocol: _this5.client.apiProtocol,
	                    host: _this5.client.apiHost,
	                    pathname: '/user/' + _this5.client.appKey + '/login'
	                  }),
	                  properties: _this5.properties,
	                  body: data,
	                  timeout: _this5.timeout,
	                  client: _this5.client
	                });
	                return request.execute().then(function (response) {
	                  return response.data;
	                }).then(function (user) {
	                  user._socialIdentity[session.identity] = (0, _defaults2.default)(user._socialIdentity[session.identity], session);
	                  return _this5.client.setActiveUser(user);
	                });
	              }).then(function () {
	                return _this5.execute(rawResponse, false);
	              }).catch(function () {
	                return _es6Promise2.default.reject(error);
	              });
	            }
	          }
	        }

	        return _es6Promise2.default.reject(error);
	      });
	    }
	  }, {
	    key: 'appVersion',
	    get: function get() {
	      return this.client.appVersion;
	    }
	  }, {
	    key: 'query',
	    get: function get() {
	      return this._query;
	    },
	    set: function set(query) {
	      if ((0, _utils.isDefined)(query) && !(query instanceof _query2.default)) {
	        throw new _errors.KinveyError('Invalid query. It must be an instance of the Query class.');
	      }

	      this._query = query;
	    }
	  }, {
	    key: 'aggregation',
	    get: function get() {
	      return this._aggregation;
	    },
	    set: function set(aggregation) {
	      if ((0, _utils.isDefined)(aggregation) && !(aggregation instanceof _aggregation2.default)) {
	        throw new _errors.KinveyError('Invalid aggregation. It must be an instance of the Aggregation class.');
	      }

	      if ((0, _utils.isDefined)(aggregation)) {
	        this.body = aggregation.toPlainObject();
	      }

	      this._aggregation = aggregation;
	    }
	  }, {
	    key: 'headers',
	    get: function get() {
	      var headers = _get(KinveyRequest.prototype.__proto__ || Object.getPrototypeOf(KinveyRequest.prototype), 'headers', this);

	      if (!headers.has('Accept')) {
	        headers.set('Accept', 'application/json; charset=utf-8');
	      }

	      if (!headers.has('Content-Type')) {
	        headers.set('Content-Type', 'application/json; charset=utf-8');
	      }

	      if (!headers.has('X-Kinvey-Api-Version')) {
	        headers.set('X-Kinvey-Api-Version', 4);
	      }

	      if (this.skipBL === true) {
	        headers.set('X-Kinvey-Skip-Business-Logic', true);
	      } else {
	        headers.remove('X-Kinvey-Skip-Business-Logic');
	      }

	      if (this.trace === true) {
	        headers.set('X-Kinvey-Include-Headers-In-Response', 'X-Kinvey-Request-Id');
	        headers.set('X-Kinvey-ResponseWrapper', true);
	      } else {
	        headers.remove('X-Kinvey-Include-Headers-In-Response');
	        headers.remove('X-Kinvey-ResponseWrapper');
	      }

	      if (this.appVersion) {
	        headers.set('X-Kinvey-Client-App-Version', this.appVersion);
	      } else {
	        headers.remove('X-Kinvey-Client-App-Version');
	      }

	      if (this.properties) {
	        var customPropertiesHeader = this.properties.toString();

	        if (!(0, _isEmpty2.default)(customPropertiesHeader)) {
	          var customPropertiesByteCount = byteCount(customPropertiesHeader);

	          if (customPropertiesByteCount >= 2000) {
	            throw new Error('The custom properties are ' + customPropertiesByteCount + ' bytes.' + 'It must be less then 2000 bytes.', 'Please remove some custom properties.');
	          }

	          headers.set('X-Kinvey-Custom-Request-Properties', customPropertiesHeader);
	        } else {
	          headers.remove('X-Kinvey-Custom-Request-Properties');
	        }
	      } else {
	        headers.remove('X-Kinvey-Custom-Request-Properties');
	      }

	      return headers;
	    },
	    set: function set(headers) {
	      _set(KinveyRequest.prototype.__proto__ || Object.getPrototypeOf(KinveyRequest.prototype), 'headers', headers, this);
	    }
	  }, {
	    key: 'url',
	    get: function get() {
	      var urlString = _get(KinveyRequest.prototype.__proto__ || Object.getPrototypeOf(KinveyRequest.prototype), 'url', this);
	      var queryString = this.query ? this.query.toQueryString() : {};

	      if ((0, _isEmpty2.default)(queryString)) {
	        return urlString;
	      }

	      return (0, _utils.appendQuery)(urlString, _qs2.default.stringify(queryString));
	    },
	    set: function set(urlString) {
	      _set(KinveyRequest.prototype.__proto__ || Object.getPrototypeOf(KinveyRequest.prototype), 'url', urlString, this);
	    }
	  }, {
	    key: 'properties',
	    get: function get() {
	      return this._properties;
	    },
	    set: function set(properties) {
	      if (properties && properties instanceof Properties === false) {
	        properties = new Properties(properties);
	      }

	      this._properties = properties;
	    }
	  }]);

	  return KinveyRequest;
	}(NetworkRequest);

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict'

	var base64 = __webpack_require__(315)
	var ieee754 = __webpack_require__(316)

	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50

	var K_MAX_LENGTH = 0x7fffffff
	exports.kMaxLength = K_MAX_LENGTH

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
	 *               implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * We report that the browser does not support typed arrays if the are not subclassable
	 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
	 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
	 * for __proto__ and has a buggy typed array implementation.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

	if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
	    typeof console.error === 'function') {
	  console.error(
	    'This browser lacks typed array (Uint8Array) support which is required by ' +
	    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
	  )
	}

	function typedArraySupport () {
	  // Can typed array instances can be augmented?
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42
	  } catch (e) {
	    return false
	  }
	}

	function createBuffer (length) {
	  if (length > K_MAX_LENGTH) {
	    throw new RangeError('Invalid typed array length')
	  }
	  // Return an augmented `Uint8Array` instance
	  var buf = new Uint8Array(length)
	  buf.__proto__ = Buffer.prototype
	  return buf
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer (arg, encodingOrOffset, length) {
	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(arg)
	  }
	  return from(arg, encodingOrOffset, length)
	}

	// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	if (typeof Symbol !== 'undefined' && Symbol.species &&
	    Buffer[Symbol.species] === Buffer) {
	  Object.defineProperty(Buffer, Symbol.species, {
	    value: null,
	    configurable: true,
	    enumerable: false,
	    writable: false
	  })
	}

	Buffer.poolSize = 8192 // not used by this implementation

	function from (value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }

	  if (value instanceof ArrayBuffer) {
	    return fromArrayBuffer(value, encodingOrOffset, length)
	  }

	  if (typeof value === 'string') {
	    return fromString(value, encodingOrOffset)
	  }

	  return fromObject(value)
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(value, encodingOrOffset, length)
	}

	// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
	// https://github.com/feross/buffer/pull/148
	Buffer.prototype.__proto__ = Uint8Array.prototype
	Buffer.__proto__ = Uint8Array

	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}

	function alloc (size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(size).fill(fill, encoding)
	      : createBuffer(size).fill(fill)
	  }
	  return createBuffer(size)
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(size, fill, encoding)
	}

	function allocUnsafe (size) {
	  assertSize(size)
	  return createBuffer(size < 0 ? 0 : checked(size) | 0)
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(size)
	}

	function fromString (string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }

	  var length = byteLength(string, encoding) | 0
	  var buf = createBuffer(length)

	  var actual = buf.write(string, encoding)

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    buf = buf.slice(0, actual)
	  }

	  return buf
	}

	function fromArrayLike (array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  var buf = createBuffer(length)
	  for (var i = 0; i < length; i += 1) {
	    buf[i] = array[i] & 255
	  }
	  return buf
	}

	function fromArrayBuffer (array, byteOffset, length) {
	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }

	  var buf
	  if (byteOffset === undefined && length === undefined) {
	    buf = new Uint8Array(array)
	  } else if (length === undefined) {
	    buf = new Uint8Array(array, byteOffset)
	  } else {
	    buf = new Uint8Array(array, byteOffset, length)
	  }

	  // Return an augmented `Uint8Array` instance
	  buf.__proto__ = Buffer.prototype
	  return buf
	}

	function fromObject (obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    var buf = createBuffer(len)

	    if (buf.length === 0) {
	      return buf
	    }

	    obj.copy(buf, 0, 0, len)
	    return buf
	  }

	  if (obj) {
	    if (isArrayBufferView(obj) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
	        return createBuffer(0)
	      }
	      return fromArrayLike(obj)
	    }

	    if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
	      return fromArrayLike(obj.data)
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}

	function checked (length) {
	  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= K_MAX_LENGTH) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return b != null && b._isBuffer === true
	}

	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length
	  var y = b.length

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function concat (list, length) {
	  if (!Array.isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }

	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }

	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }

	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}

	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (isArrayBufferView(string) || string instanceof ArrayBuffer) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }

	  var len = string.length
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength

	function slowToString (encoding, start, end) {
	  var loweredCase = false

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length
	  }

	  if (end <= 0) {
	    return ''
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0

	  if (end <= start) {
	    return ''
	  }

	  if (!encoding) encoding = 'utf8'

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
	// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
	// reliably in a browserify context because there could be multiple different
	// copies of the 'buffer' package in use. This method works even for Buffer
	// instances that were created from another copy of the `buffer` package.
	// See: https://github.com/feross/buffer/issues/154
	Buffer.prototype._isBuffer = true

	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}

	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}

	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}

	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}

	Buffer.prototype.toString = function toString () {
	  var length = this.length
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }

	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }

	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0

	  if (this === target) return 0

	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)

	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (numberIsNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }

	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }

	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }

	  return -1
	}

	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}

	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}

	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (numberIsNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset >>> 0
	    if (isFinite(length)) {
	      length = length >>> 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }

	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8'

	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []

	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }

	    res.push(codePoint)
	    i += bytesPerSequence
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}

	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start) end = start

	  var newBuf = this.subarray(start, end)
	  // Return an augmented `Uint8Array` instance
	  newBuf.__proto__ = Buffer.prototype
	  return newBuf
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset >>> 0
	  byteLength = byteLength >>> 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }

	  return val
	}

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset >>> 0
	  byteLength = byteLength >>> 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }

	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }

	  return val
	}

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset >>> 0
	  byteLength = byteLength >>> 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset >>> 0
	  byteLength = byteLength >>> 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  byteLength = byteLength >>> 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  byteLength = byteLength >>> 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  this[offset] = (value & 0xff)
	  this[offset + 1] = (value >>> 8)
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  this[offset] = (value >>> 8)
	  this[offset + 1] = (value & 0xff)
	  return offset + 2
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  this[offset + 3] = (value >>> 24)
	  this[offset + 2] = (value >>> 16)
	  this[offset + 1] = (value >>> 8)
	  this[offset] = (value & 0xff)
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  this[offset] = (value >>> 24)
	  this[offset + 1] = (value >>> 16)
	  this[offset + 2] = (value >>> 8)
	  this[offset + 3] = (value & 0xff)
	  return offset + 4
	}

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) {
	    var limit = Math.pow(2, (8 * byteLength) - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) {
	    var limit = Math.pow(2, (8 * byteLength) - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  this[offset] = (value & 0xff)
	  this[offset + 1] = (value >>> 8)
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  this[offset] = (value >>> 8)
	  this[offset + 1] = (value & 0xff)
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  this[offset] = (value & 0xff)
	  this[offset + 1] = (value >>> 8)
	  this[offset + 2] = (value >>> 16)
	  this[offset + 3] = (value >>> 24)
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  this[offset] = (value >>> 24)
	  this[offset + 1] = (value >>> 16)
	  this[offset + 2] = (value >>> 8)
	  this[offset + 3] = (value & 0xff)
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }

	  var len = end - start
	  var i

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }

	  return len
	}

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }

	  if (end <= start) {
	    return this
	  }

	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0

	  if (!val) val = 0

	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : new Buffer(val, encoding)
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }

	  return this
	}

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = str.trim().replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }

	    leadSurrogate = null

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	// Node 0.10 supports `ArrayBuffer` but lacks `ArrayBuffer.isView`
	function isArrayBufferView (obj) {
	  return (typeof ArrayBuffer.isView === 'function') && ArrayBuffer.isView(obj)
	}

	function numberIsNaN (obj) {
	  return obj !== obj // eslint-disable-line no-self-compare
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(314).Buffer))

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict'

	var base64 = __webpack_require__(315)
	var ieee754 = __webpack_require__(316)
	var isArray = __webpack_require__(317)

	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()

	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()

	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}

	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }

	  return that
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}

	Buffer.poolSize = 8192 // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}

	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }

	  return fromObject(that, value)
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}

	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}

	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}

	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }

	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)

	  var actual = that.write(string, encoding)

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }

	  return that
	}

	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}

	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)

	    if (that.length === 0) {
	      return that
	    }

	    obj.copy(that, 0, 0, len)
	    return that
	  }

	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }

	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length
	  var y = b.length

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }

	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }

	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }

	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}

	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }

	  var len = string.length
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength

	function slowToString (encoding, start, end) {
	  var loweredCase = false

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length
	  }

	  if (end <= 0) {
	    return ''
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0

	  if (end <= start) {
	    return ''
	  }

	  if (!encoding) encoding = 'utf8'

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true

	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}

	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}

	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}

	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}

	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }

	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }

	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0

	  if (this === target) return 0

	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)

	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }

	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }

	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }

	  return -1
	}

	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}

	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}

	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }

	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8'

	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []

	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }

	    res.push(codePoint)
	    i += bytesPerSequence
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}

	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start) end = start

	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }

	  return newBuf
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }

	  return val
	}

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }

	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }

	  return val
	}

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }

	  var len = end - start
	  var i

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }

	  return len
	}

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }

	  if (end <= start) {
	    return this
	  }

	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0

	  if (!val) val = 0

	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }

	  return this
	}

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }

	    leadSurrogate = null

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 315 */
/***/ (function(module, exports) {

	'use strict'

	exports.byteLength = byteLength
	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray

	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i]
	  revLookup[code.charCodeAt(i)] = i
	}

	revLookup['-'.charCodeAt(0)] = 62
	revLookup['_'.charCodeAt(0)] = 63

	function placeHoldersCount (b64) {
	  var len = b64.length
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
	}

	function byteLength (b64) {
	  // base64 is 4/3 + up to two characters of the original data
	  return (b64.length * 3 / 4) - placeHoldersCount(b64)
	}

	function toByteArray (b64) {
	  var i, l, tmp, placeHolders, arr
	  var len = b64.length
	  placeHolders = placeHoldersCount(b64)

	  arr = new Arr((len * 3 / 4) - placeHolders)

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len

	  var L = 0

	  for (i = 0; i < l; i += 4) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
	    arr[L++] = (tmp >> 16) & 0xFF
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[L++] = tmp & 0xFF
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  return arr
	}

	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}

	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var output = ''
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    output += lookup[tmp >> 2]
	    output += lookup[(tmp << 4) & 0x3F]
	    output += '=='
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
	    output += lookup[tmp >> 10]
	    output += lookup[(tmp >> 4) & 0x3F]
	    output += lookup[(tmp << 2) & 0x3F]
	    output += '='
	  }

	  parts.push(output)

	  return parts.join('')
	}


/***/ }),
/* 316 */
/***/ (function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]

	  i += d

	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

	  value = Math.abs(value)

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }

	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128
	}


/***/ }),
/* 317 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(103),
	    assignInWith = __webpack_require__(319),
	    baseRest = __webpack_require__(100),
	    customDefaultsAssignIn = __webpack_require__(320);

	/**
	 * Assigns own and inherited enumerable string keyed properties of source
	 * objects to the destination object for all destination properties that
	 * resolve to `undefined`. Source objects are applied from left to right.
	 * Once a property is set, additional values of the same property are ignored.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.defaultsDeep
	 * @example
	 *
	 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	 * // => { 'a': 1, 'b': 2 }
	 */
	var defaults = baseRest(function(args) {
	  args.push(undefined, customDefaultsAssignIn);
	  return apply(assignInWith, undefined, args);
	});

	module.exports = defaults;


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(98),
	    createAssigner = __webpack_require__(99),
	    keysIn = __webpack_require__(253);

	/**
	 * This method is like `_.assignIn` except that it accepts `customizer`
	 * which is invoked to produce the assigned values. If `customizer` returns
	 * `undefined`, assignment is handled by the method instead. The `customizer`
	 * is invoked with five arguments: (objValue, srcValue, key, object, source).
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @alias extendWith
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} sources The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @returns {Object} Returns `object`.
	 * @see _.assignWith
	 * @example
	 *
	 * function customizer(objValue, srcValue) {
	 *   return _.isUndefined(objValue) ? srcValue : objValue;
	 * }
	 *
	 * var defaults = _.partialRight(_.assignInWith, customizer);
	 *
	 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	 * // => { 'a': 1, 'b': 2 }
	 */
	var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
	  copyObject(source, keysIn(source), object, customizer);
	});

	module.exports = assignInWith;


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(97);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
	 * of source objects to the destination object for all destination properties
	 * that resolve to `undefined`.
	 *
	 * @private
	 * @param {*} objValue The destination value.
	 * @param {*} srcValue The source value.
	 * @param {string} key The key of the property to assign.
	 * @param {Object} object The parent object of `objValue`.
	 * @returns {*} Returns the value to assign.
	 */
	function customDefaultsAssignIn(objValue, srcValue, key, object) {
	  if (objValue === undefined ||
	      (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
	    return srcValue;
	  }
	  return objValue;
	}

	module.exports = customDefaultsAssignIn;


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SocialIdentity = exports.MobileIdentityConnect = exports.AuthorizationGrant = undefined;

	var _enums = __webpack_require__(322);

	var _mic = __webpack_require__(323);

	exports.AuthorizationGrant = _mic.AuthorizationGrant;
	exports.MobileIdentityConnect = _mic.MobileIdentityConnect;
	exports.SocialIdentity = _enums.SocialIdentity;

/***/ }),
/* 322 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var SocialIdentity = {
	  Kinvey: 'kinvey',
	  MobileIdentityConnect: 'kinveyAuth'
	};
	Object.freeze(SocialIdentity);
	exports.SocialIdentity = SocialIdentity;

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MobileIdentityConnect = exports.AuthorizationGrant = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _es6Promise = __webpack_require__(47);

	var _es6Promise2 = _interopRequireDefault(_es6Promise);

	var _isString = __webpack_require__(131);

	var _isString2 = _interopRequireDefault(_isString);

	var _url = __webpack_require__(67);

	var _url2 = _interopRequireDefault(_url);

	var _urlJoin = __webpack_require__(324);

	var _urlJoin2 = _interopRequireDefault(_urlJoin);

	var _request = __webpack_require__(244);

	var _errors = __webpack_require__(2);

	var _utils = __webpack_require__(40);

	var _popup = __webpack_require__(325);

	var _popup2 = _interopRequireDefault(_popup);

	var _identity = __webpack_require__(327);

	var _identity2 = _interopRequireDefault(_identity);

	var _enums = __webpack_require__(322);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Popup = _popup2.default;

	var AuthorizationGrant = {
	  AuthorizationCodeLoginPage: 'AuthorizationCodeLoginPage',
	  AuthorizationCodeAPI: 'AuthorizationCodeAPI'
	};
	Object.freeze(AuthorizationGrant);
	exports.AuthorizationGrant = AuthorizationGrant;

	var MobileIdentityConnect = exports.MobileIdentityConnect = function (_Identity) {
	  _inherits(MobileIdentityConnect, _Identity);

	  function MobileIdentityConnect() {
	    _classCallCheck(this, MobileIdentityConnect);

	    return _possibleConstructorReturn(this, (MobileIdentityConnect.__proto__ || Object.getPrototypeOf(MobileIdentityConnect)).apply(this, arguments));
	  }

	  _createClass(MobileIdentityConnect, [{
	    key: 'isSupported',
	    value: function isSupported() {
	      return true;
	    }
	  }, {
	    key: 'login',
	    value: function login(redirectUri) {
	      var _this2 = this;

	      var authorizationGrant = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : AuthorizationGrant.AuthorizationCodeLoginPage;
	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      var clientId = this.client.appKey;

	      if ((0, _isString2.default)(options.micId)) {
	        clientId = clientId + ':' + options.micId;
	      }

	      var promise = _es6Promise2.default.resolve().then(function () {
	        if (authorizationGrant === AuthorizationGrant.AuthorizationCodeLoginPage) {
	          return _this2.requestCodeWithPopup(clientId, redirectUri, options);
	        } else if (authorizationGrant === AuthorizationGrant.AuthorizationCodeAPI) {
	          return _this2.requestTempLoginUrl(clientId, redirectUri, options).then(function (url) {
	            return _this2.requestCodeWithUrl(url, clientId, redirectUri, options);
	          });
	        }

	        throw new _errors.KinveyError('The authorization grant ' + authorizationGrant + ' is unsupported. ' + 'Please use a supported authorization grant.');
	      }).then(function (code) {
	        return _this2.requestToken(code, clientId, redirectUri, options);
	      }).then(function (session) {
	        session.identity = MobileIdentityConnect.identity;
	        session.client_id = clientId;
	        session.redirect_uri = redirectUri;
	        session.protocol = _this2.client.micProtocol;
	        session.host = _this2.client.micHost;
	        return session;
	      });

	      return promise;
	    }
	  }, {
	    key: 'refresh',
	    value: function refresh(token, clientId, redirectUri) {
	      var _this3 = this;

	      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	      return _es6Promise2.default.resolve().then(function () {
	        return _this3.refreshToken(token, clientId, redirectUri, options);
	      }).then(function (session) {
	        session.identity = MobileIdentityConnect.identity;
	        session.client_id = clientId;
	        session.redirect_uri = redirectUri;
	        session.protocol = _this3.client.micProtocol;
	        session.host = _this3.client.micHost;
	        return session;
	      });
	    }
	  }, {
	    key: 'requestTempLoginUrl',
	    value: function requestTempLoginUrl(clientId, redirectUri) {
	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      var pathname = '/oauth/auth';

	      if (options.version) {
	        var version = options.version;

	        if ((0, _isString2.default)(version) === false) {
	          version = String(version);
	        }

	        pathname = (0, _urlJoin2.default)(version.indexOf('v') === 0 ? version : 'v' + version, pathname);
	      }

	      var request = new _request.KinveyRequest({
	        method: _request.RequestMethod.POST,
	        headers: {
	          'Content-Type': 'application/x-www-form-urlencoded'
	        },
	        url: _url2.default.format({
	          protocol: this.client.micProtocol,
	          host: this.client.micHost,
	          pathname: pathname
	        }),
	        properties: options.properties,
	        body: {
	          client_id: clientId,
	          redirect_uri: redirectUri,
	          response_type: 'code'
	        }
	      });
	      return request.execute().then(function (response) {
	        return response.data.temp_login_uri;
	      });
	    }
	  }, {
	    key: 'requestCodeWithPopup',
	    value: function requestCodeWithPopup(clientId, redirectUri) {
	      var _this4 = this;

	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      var promise = _es6Promise2.default.resolve().then(function () {
	        var pathname = '/oauth/auth';
	        var popup = new Popup();

	        if (options.version) {
	          var version = options.version;

	          if (!(0, _isString2.default)(version)) {
	            version = String(version);
	          }

	          pathname = (0, _urlJoin2.default)(version.indexOf('v') === 0 ? version : 'v' + version, pathname);
	        }

	        return popup.open(_url2.default.format({
	          protocol: _this4.client.micProtocol,
	          host: _this4.client.micHost,
	          pathname: pathname,
	          query: {
	            client_id: clientId,
	            redirect_uri: redirectUri,
	            response_type: 'code'
	          }
	        }));
	      }).then(function (popup) {
	        var promise = new _es6Promise2.default(function (resolve, reject) {
	          var redirected = false;

	          function loadCallback(event) {
	            try {
	              if (event.url && event.url.indexOf(redirectUri) === 0 && redirected === false) {
	                redirected = true;
	                popup.removeAllListeners();
	                popup.close();
	                resolve(_url2.default.parse(event.url, true).query.code);
	              }
	            } catch (error) {}
	          }

	          function errorCallback(event) {
	            try {
	              if (event.url && event.url.indexOf(redirectUri) === 0 && redirected === false) {
	                redirected = true;
	                popup.removeAllListeners();
	                popup.close();
	                resolve(_url2.default.parse(event.url, true).query.code);
	              } else if (redirected === false) {
	                popup.removeAllListeners();
	                popup.close();
	                reject(new _errors.KinveyError(event.message, '', event.code));
	              }
	            } catch (error) {}
	          }

	          function exitCallback() {
	            if (redirected === false) {
	              popup.removeAllListeners();
	              reject(new _errors.KinveyError('Login has been cancelled.'));
	            }
	          }

	          popup.on('loadstart', loadCallback);
	          popup.on('loadstop', loadCallback);
	          popup.on('error', errorCallback);
	          popup.on('exit', exitCallback);
	        });
	        return promise;
	      });

	      return promise;
	    }
	  }, {
	    key: 'requestCodeWithUrl',
	    value: function requestCodeWithUrl(loginUrl, clientId, redirectUri) {
	      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	      var promise = _es6Promise2.default.resolve().then(function () {
	        var request = new _request.KinveyRequest({
	          method: _request.RequestMethod.POST,
	          headers: {
	            'Content-Type': 'application/x-www-form-urlencoded'
	          },
	          url: loginUrl,
	          properties: options.properties,
	          body: {
	            client_id: clientId,
	            redirect_uri: redirectUri,
	            response_type: 'code',
	            username: options.username,
	            password: options.password
	          },
	          followRedirect: false
	        });
	        return request.execute();
	      }).then(function (response) {
	        var location = response.headers.get('location');

	        if (location) {
	          return _url2.default.parse(location, true).query.code;
	        }

	        throw new _errors.MobileIdentityConnectError('Unable to authorize user with username ' + options.username + '.', 'A location header was not provided with a code to exchange for an auth token.');
	      });

	      return promise;
	    }
	  }, {
	    key: 'requestToken',
	    value: function requestToken(code, clientId, redirectUri) {
	      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	      var request = new _request.KinveyRequest({
	        method: _request.RequestMethod.POST,
	        headers: {
	          'Content-Type': 'application/x-www-form-urlencoded'
	        },
	        authType: _request.AuthType.App,
	        url: _url2.default.format({
	          protocol: this.client.micProtocol,
	          host: this.client.micHost,
	          pathname: '/oauth/token'
	        }),
	        properties: options.properties,
	        body: {
	          grant_type: 'authorization_code',
	          client_id: clientId,
	          redirect_uri: redirectUri,
	          code: code
	        }
	      });
	      return request.execute().then(function (response) {
	        return response.data;
	      });
	    }
	  }, {
	    key: 'refreshToken',
	    value: function refreshToken(token, clientId, redirectUri) {
	      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	      var request = new _request.KinveyRequest({
	        method: _request.RequestMethod.POST,
	        headers: {
	          'Content-Type': 'application/x-www-form-urlencoded'
	        },
	        authType: _request.AuthType.App,
	        url: _url2.default.format({
	          protocol: this.client.micProtocol,
	          host: this.client.micHost,
	          pathname: '/oauth/token'
	        }),
	        body: {
	          grant_type: 'refresh_token',
	          client_id: clientId,
	          redirect_uri: redirectUri,
	          refresh_token: token
	        },
	        properties: options.properties,
	        timeout: options.timeout
	      });
	      return request.execute().then(function (response) {
	        return response.data;
	      });
	    }
	  }, {
	    key: 'logout',
	    value: function logout(user) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var request = new _request.KinveyRequest({
	        method: _request.RequestMethod.GET,
	        headers: {
	          'Content-Type': 'application/x-www-form-urlencoded'
	        },
	        authType: _request.AuthType.App,
	        url: _url2.default.format({
	          protocol: this.client.micProtocol,
	          host: this.client.micHost,
	          pathname: '/oauth/invalidate',
	          query: {
	            user: user._id
	          }
	        }),
	        properties: options.properties
	      });
	      return request.execute().then(function (response) {
	        return response.data;
	      });
	    }
	  }, {
	    key: 'identity',
	    get: function get() {
	      return _enums.SocialIdentity.MobileIdentityConnect;
	    }
	  }], [{
	    key: 'isSupported',
	    value: function isSupported() {
	      return true;
	    }
	  }, {
	    key: 'usePopupClass',
	    value: function usePopupClass(PopupClass) {
	      if ((0, _utils.isDefined)(PopupClass)) {
	        Popup = PopupClass;
	      }
	    }
	  }, {
	    key: 'identity',
	    get: function get() {
	      return _enums.SocialIdentity.MobileIdentityConnect;
	    }
	  }]);

	  return MobileIdentityConnect;
	}(_identity2.default);

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (name, context, definition) {
	  if (typeof module !== 'undefined' && module.exports) module.exports = definition();
	  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  else context[name] = definition();
	})('urljoin', this, function () {

	  function startsWith(str, searchString) {
	    return str.substr(0, searchString.length) === searchString;
	  }

	  function normalize (str, options) {

	    if (startsWith(str, 'file://')) {

	      // make sure file protocol has max three slashes
	      str = str.replace(/(\/{0,3})\/*/g, '$1');
	    } else {

	      // make sure protocol is followed by two slashes
	      str = str.replace(/:\//g, '://');

	      // remove consecutive slashes
	      str = str.replace(/([^:\s\%\3\A])\/+/g, '$1/');
	    }

	    // remove trailing slash before parameters or hash
	    str = str.replace(/\/(\?|&|#[^!])/g, '$1');

	    // replace ? in parameters with &
	    str = str.replace(/(\?.+)\?/g, '$1&');

	    return str;
	  }

	  return function () {
	    var input = arguments;
	    var options = {};

	    if (typeof arguments[0] === 'object') {
	      // new syntax with array and options
	      input = arguments[0];
	      options = arguments[1] || {};
	    }

	    var joined = [].slice.call(input, 0).join('/');
	    return normalize(joined, options);
	  };

	});


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _events = __webpack_require__(326);

	var _errors = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Popup = function (_EventEmitter) {
	  _inherits(Popup, _EventEmitter);

	  function Popup() {
	    _classCallCheck(this, Popup);

	    return _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).apply(this, arguments));
	  }

	  _createClass(Popup, [{
	    key: 'open',
	    value: function open() {
	      throw new _errors.PopupError('Unable to open a popup on this platform.');
	    }
	  }, {
	    key: 'close',
	    value: function close() {
	      return this;
	    }
	  }], [{
	    key: 'isSupported',
	    value: function isSupported() {
	      return false;
	    }
	  }]);

	  return Popup;
	}(_events.EventEmitter);

	exports.default = Popup;

/***/ }),
/* 326 */
/***/ (function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _client = __webpack_require__(288);

	var _client2 = _interopRequireDefault(_client);

	var _errors = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Identity = function () {
	  function Identity() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, Identity);

	    this.client = options.client || _client2.default.sharedInstance();
	  }

	  _createClass(Identity, [{
	    key: 'isSupported',
	    value: function isSupported() {
	      return false;
	    }
	  }, {
	    key: 'isOnline',
	    value: function isOnline(session) {
	      var currentTime = new Date().getTime() / 1000;
	      return session && session.access_token && session.expires > currentTime;
	    }
	  }, {
	    key: 'identity',
	    get: function get() {
	      throw new _errors.KinveyError('A subclass must override this property.');
	    }
	  }], [{
	    key: 'isSupported',
	    value: function isSupported() {
	      return false;
	    }
	  }, {
	    key: 'identity',
	    get: function get() {
	      throw new _errors.KinveyError('A subclass must override this property.');
	    }
	  }]);

	  return Identity;
	}();

	exports.default = Identity;

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.User = exports.Metadata = exports.Acl = undefined;

	var _acl = __webpack_require__(329);

	var _acl2 = _interopRequireDefault(_acl);

	var _metadata = __webpack_require__(330);

	var _metadata2 = _interopRequireDefault(_metadata);

	var _user = __webpack_require__(331);

	var _user2 = _interopRequireDefault(_user);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Acl = _acl2.default;
	exports.Metadata = _metadata2.default;
	exports.User = _user2.default;

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _isPlainObject = __webpack_require__(129);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _isArray = __webpack_require__(119);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _assign = __webpack_require__(79);

	var _assign2 = _interopRequireDefault(_assign);

	var _errors = __webpack_require__(2);

	var _utils = __webpack_require__(40);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Acl = function () {
	  function Acl(entity) {
	    _classCallCheck(this, Acl);

	    if ((0, _isPlainObject2.default)(entity) === false) {
	      throw new _errors.KinveyError('entity argument must be an object');
	    }

	    entity._acl = entity._acl || {};
	    this.entity = entity;
	  }

	  _createClass(Acl, [{
	    key: 'addReader',
	    value: function addReader(user) {
	      var r = this.readers;

	      if (r.indexOf(user) === -1) {
	        r.push(user);
	      }

	      this.entity._acl.r = r;
	      return this;
	    }
	  }, {
	    key: 'addReaderGroup',
	    value: function addReaderGroup(group) {
	      var groups = this.readerGroups;

	      if (groups.indexOf(group) === -1) {
	        groups.push(group);
	      }

	      this.entity._acl.groups = (0, _assign2.default)({}, this.entity._acl.groups, { r: groups });
	      return this;
	    }
	  }, {
	    key: 'addWriter',
	    value: function addWriter(user) {
	      var w = this.writers;

	      if (w.indexOf(user) === -1) {
	        w.push(user);
	      }

	      this.entity._acl.w = w;
	      return this;
	    }
	  }, {
	    key: 'addWriterGroup',
	    value: function addWriterGroup(group) {
	      var groups = this.writerGroups;

	      if (groups.indexOf(group) === -1) {
	        groups.push(group);
	      }

	      this.entity._acl.groups = (0, _assign2.default)({}, this.entity._acl.groups, { w: groups });
	      return this;
	    }
	  }, {
	    key: 'isGloballyReadable',
	    value: function isGloballyReadable() {
	      if (this.entity._acl.gr === true) {
	        return this.entity._acl.gr;
	      }

	      return false;
	    }
	  }, {
	    key: 'isGloballyWritable',
	    value: function isGloballyWritable() {
	      if (this.entity._acl.gw === true) {
	        return this.entity._acl.gw;
	      }

	      return false;
	    }
	  }, {
	    key: 'removeReader',
	    value: function removeReader(user) {
	      var r = this.readers;
	      var index = r.indexOf(user);

	      if (index !== -1) {
	        r.splice(index, 1);
	      }

	      this.entity._acl.r = r;
	      return this;
	    }
	  }, {
	    key: 'removeReaderGroup',
	    value: function removeReaderGroup(group) {
	      var groups = this.readerGroups;
	      var index = groups.indexOf(group);

	      if (index !== -1) {
	        groups.splice(index, 1);
	      }

	      this.entity._acl.groups = (0, _assign2.default)({}, this.entity._acl.groups, { r: groups });
	      return this;
	    }
	  }, {
	    key: 'removeWriter',
	    value: function removeWriter(user) {
	      var w = this.writers;
	      var index = w.indexOf(user);

	      if (index !== -1) {
	        w.splice(index, 1);
	      }

	      this.entity._acl.w = w;
	      return this;
	    }
	  }, {
	    key: 'removeWriterGroup',
	    value: function removeWriterGroup(group) {
	      var groups = this.writerGroups;
	      var index = groups.indexOf(group);

	      if (index !== -1) {
	        groups.splice(index, 1);
	      }

	      this.entity._acl.groups = (0, _assign2.default)({}, this.entity._acl.groups, { w: groups });
	      return this;
	    }
	  }, {
	    key: 'toPlainObject',
	    value: function toPlainObject() {
	      return this.entity._acl;
	    }
	  }, {
	    key: 'creator',
	    get: function get() {
	      return this.entity._acl.creator;
	    }
	  }, {
	    key: 'readers',
	    get: function get() {
	      return (0, _isArray2.default)(this.entity._acl.r) ? this.entity._acl.r : [];
	    }
	  }, {
	    key: 'writers',
	    get: function get() {
	      return (0, _isArray2.default)(this.entity._acl.w) ? this.entity._acl.w : [];
	    }
	  }, {
	    key: 'readerGroups',
	    get: function get() {
	      return (0, _utils.isDefined)(this.entity._acl.groups) && (0, _isArray2.default)(this.entity._acl.groups.r) ? this.entity._acl.groups.r : [];
	    }
	  }, {
	    key: 'writerGroups',
	    get: function get() {
	      return (0, _utils.isDefined)(this.entity._acl.groups) && (0, _isArray2.default)(this.entity._acl.groups.w) ? this.entity._acl.groups.w : [];
	    }
	  }, {
	    key: 'globallyReadable',
	    set: function set(gr) {
	      if (gr === true) {
	        this.entity._acl.gr = gr;
	      } else {
	        this.entity._acl.gr = false;
	      }
	    }
	  }, {
	    key: 'globallyWritable',
	    set: function set(gw) {
	      if (gw === true) {
	        this.entity._acl.gw = gw;
	      } else {
	        this.entity._acl.gw = false;
	      }
	    }
	  }]);

	  return Acl;
	}();

	exports.default = Acl;

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _isPlainObject = __webpack_require__(129);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _errors = __webpack_require__(2);

	var _utils = __webpack_require__(40);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Metadata = function () {
	  function Metadata(entity) {
	    _classCallCheck(this, Metadata);

	    if ((0, _isPlainObject2.default)(entity) === false) {
	      throw new _errors.KinveyError('entity argument must be an object');
	    }

	    entity._kmd = entity._kmd || {};
	    this.entity = entity;
	  }

	  _createClass(Metadata, [{
	    key: 'isLocal',
	    value: function isLocal() {
	      return this.entity._kmd.local === true;
	    }
	  }, {
	    key: 'toPlainObject',
	    value: function toPlainObject() {
	      return this.entity._kmd;
	    }
	  }, {
	    key: 'createdAt',
	    get: function get() {
	      if ((0, _utils.isDefined)(this.entity._kmd.ect)) {
	        return new Date(this.entity._kmd.ect);
	      }

	      return undefined;
	    }
	  }, {
	    key: 'ect',
	    get: function get() {
	      return this.createdAt;
	    }
	  }, {
	    key: 'emailVerification',
	    get: function get() {
	      if ((0, _utils.isDefined)(this.entity._kmd.emailVerification)) {
	        return this.entity._kmd.emailVerification.status;
	      }

	      return undefined;
	    }
	  }, {
	    key: 'lastModified',
	    get: function get() {
	      if ((0, _utils.isDefined)(this.entity._kmd.lmt)) {
	        return new Date(this.entity._kmd.lmt);
	      }

	      return undefined;
	    }
	  }, {
	    key: 'lmt',
	    get: function get() {
	      return this.lastModified;
	    }
	  }, {
	    key: 'authtoken',
	    get: function get() {
	      return this.entity._kmd.authtoken;
	    }
	  }]);

	  return Metadata;
	}();

	exports.default = Metadata;

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _es6Promise = __webpack_require__(47);

	var _es6Promise2 = _interopRequireDefault(_es6Promise);

	var _assign = __webpack_require__(79);

	var _assign2 = _interopRequireDefault(_assign);

	var _isString = __webpack_require__(131);

	var _isString2 = _interopRequireDefault(_isString);

	var _isObject = __webpack_require__(92);

	var _isObject2 = _interopRequireDefault(_isObject);

	var _isEmpty = __webpack_require__(132);

	var _isEmpty2 = _interopRequireDefault(_isEmpty);

	var _url = __webpack_require__(67);

	var _url2 = _interopRequireDefault(_url);

	var _client = __webpack_require__(288);

	var _client2 = _interopRequireDefault(_client);

	var _request = __webpack_require__(244);

	var _errors = __webpack_require__(2);

	var _datastore = __webpack_require__(139);

	var _datastore2 = _interopRequireDefault(_datastore);

	var _identity = __webpack_require__(321);

	var _utils = __webpack_require__(40);

	var _acl = __webpack_require__(329);

	var _acl2 = _interopRequireDefault(_acl);

	var _metadata = __webpack_require__(330);

	var _metadata2 = _interopRequireDefault(_metadata);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var User = function () {
	  function User() {
	    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    _classCallCheck(this, User);

	    this.data = data;

	    this.client = options.client || _client2.default.sharedInstance();
	  }

	  _createClass(User, [{
	    key: 'isActive',
	    value: function isActive() {
	      var activeUser = User.getActiveUser(this.client);

	      if ((0, _utils.isDefined)(activeUser) && activeUser._id === this._id) {
	        return true;
	      }

	      return false;
	    }
	  }, {
	    key: 'isEmailVerified',
	    value: function isEmailVerified() {
	      var status = this.metadata.emailVerification;
	      return status === 'confirmed';
	    }
	  }, {
	    key: 'login',
	    value: function login(username, password) {
	      var _this = this;

	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      var credentials = username;
	      var isActive = this.isActive();
	      var activeUser = User.getActiveUser(this.client);

	      if (isActive === true) {
	        return _es6Promise2.default.reject(new _errors.ActiveUserError('This user is already the active user.'));
	      }

	      if ((0, _utils.isDefined)(activeUser)) {
	        return _es6Promise2.default.reject(new _errors.ActiveUserError('An active user already exists. Please logout the active user before you login.'));
	      }

	      if ((0, _isObject2.default)(credentials)) {
	        options = password || {};
	      } else {
	        credentials = {
	          username: username,
	          password: password
	        };
	      }

	      if ((0, _utils.isDefined)(credentials.username)) {
	        credentials.username = String(credentials.username).trim();
	      }

	      if ((0, _utils.isDefined)(credentials.password)) {
	        credentials.password = String(credentials.password).trim();
	      }

	      if ((!(0, _utils.isDefined)(credentials.username) || credentials.username === '' || !(0, _utils.isDefined)(credentials.password) || credentials.password === '') && !(0, _utils.isDefined)(credentials._socialIdentity)) {
	        return _es6Promise2.default.reject(new _errors.KinveyError('Username and/or password missing. Please provide both a username and password to login.'));
	      }

	      var request = new _request.KinveyRequest({
	        method: _request.RequestMethod.POST,
	        authType: _request.AuthType.App,
	        url: _url2.default.format({
	          protocol: this.client.apiProtocol,
	          host: this.client.apiHost,
	          pathname: this.pathname + '/login'
	        }),
	        body: credentials,
	        properties: options.properties,
	        timeout: options.timeout,
	        client: this.client
	      });

	      return request.execute().then(function (response) {
	        return response.data;
	      }).then(function (data) {
	        if ((0, _utils.isDefined)(credentials._socialIdentity) && (0, _utils.isDefined)(data._socialIdentity)) {
	          var identities = Object.keys(data._socialIdentity);
	          identities.forEach(function (identity) {
	            data._socialIdentity[identity] = (0, _assign2.default)({}, credentials._socialIdentity[identity], data._socialIdentity[identity]);
	          });
	          data._socialIdentity = (0, _assign2.default)({}, credentials._socialIdentity, data._socialIdentity);
	        }

	        delete data.password;

	        return _this.client.setActiveUser(data);
	      }).then(function (data) {
	        _this.data = data;
	        return _this;
	      });
	    }
	  }, {
	    key: 'loginWithMIC',
	    value: function loginWithMIC(redirectUri, authorizationGrant) {
	      var _this2 = this;

	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      var isActive = this.isActive();
	      var activeUser = User.getActiveUser(this.client);

	      if (isActive) {
	        return _es6Promise2.default.reject(new _errors.ActiveUserError('This user is already the active user.'));
	      }

	      if ((0, _utils.isDefined)(activeUser)) {
	        return _es6Promise2.default.reject(new _errors.ActiveUserError('An active user already exists. Please logout the active user before you login.'));
	      }

	      var mic = new _identity.MobileIdentityConnect({ client: this.client });
	      return mic.login(redirectUri, authorizationGrant, options).then(function (session) {
	        return _this2.connectIdentity(_identity.MobileIdentityConnect.identity, session, options);
	      });
	    }
	  }, {
	    key: 'connectIdentity',
	    value: function connectIdentity(identity, session) {
	      var _this3 = this;

	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      var isActive = this.isActive();
	      var data = {};
	      var socialIdentity = data._socialIdentity || {};
	      socialIdentity[identity] = session;
	      data._socialIdentity = socialIdentity;

	      if (isActive) {
	        return this.update(data, options);
	      }

	      return this.login(data, options).catch(function (error) {
	        if (error instanceof _errors.NotFoundError) {
	          return _this3.signup(data, options).then(function () {
	            return _this3.connectIdentity(identity, session, options);
	          });
	        }

	        throw error;
	      });
	    }
	  }, {
	    key: 'disconnectIdentity',
	    value: function disconnectIdentity(identity) {
	      var _this4 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var promise = _es6Promise2.default.resolve();

	      if (identity === _identity.MobileIdentityConnect.identity) {
	        promise = _identity.MobileIdentityConnect.logout(this, options);
	      }

	      return promise.catch(function (error) {
	        _utils.Log.error(error);
	      }).then(function () {
	        var data = _this4.data;
	        var socialIdentity = data._socialIdentity || {};
	        delete socialIdentity[identity];
	        data._socialIdentity = socialIdentity;
	        _this4.data = data;

	        if (!_this4._id) {
	          return _this4;
	        }

	        return _this4.update(data, options);
	      }).then(function () {
	        return _this4;
	      });
	    }
	  }, {
	    key: 'logout',
	    value: function logout() {
	      var _this5 = this;

	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	      var request = new _request.KinveyRequest({
	        method: _request.RequestMethod.POST,
	        authType: _request.AuthType.Session,
	        url: _url2.default.format({
	          protocol: this.client.apiProtocol,
	          host: this.client.apiHost,
	          pathname: this.pathname + '/_logout'
	        }),
	        properties: options.properties,
	        timeout: options.timeout,
	        client: this.client
	      });

	      return request.execute().catch(function (error) {
	        _utils.Log.error(error);
	        return null;
	      }).then(function () {
	        return _this5.client.setActiveUser(null);
	      }).catch(function (error) {
	        _utils.Log.error(error);
	        return null;
	      }).then(function () {
	        return _datastore2.default.clearCache({ client: _this5.client });
	      }).catch(function (error) {
	        _utils.Log.error(error);
	        return null;
	      }).then(function () {
	        return _this5;
	      });
	    }
	  }, {
	    key: 'signup',
	    value: function signup(data) {
	      var _this6 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var activeUser = User.getActiveUser(this.client);
	      options = (0, _assign2.default)({
	        state: true
	      }, options);

	      if (options.state === true && (0, _utils.isDefined)(activeUser)) {
	        throw new _errors.ActiveUserError('An active user already exists. Please logout the active user before you login.');
	      }

	      if (data instanceof User) {
	        data = data.data;
	      }

	      data = (0, _assign2.default)(this.data, data);

	      var request = new _request.KinveyRequest({
	        method: _request.RequestMethod.POST,
	        authType: _request.AuthType.App,
	        url: _url2.default.format({
	          protocol: this.client.apiProtocol,
	          host: this.client.apiHost,
	          pathname: this.pathname
	        }),
	        body: (0, _isEmpty2.default)(data) ? null : data,
	        properties: options.properties,
	        timeout: options.timeout,
	        client: this.client
	      });

	      return request.execute().then(function (response) {
	        return response.data;
	      }).then(function (data) {
	        if (options.state === true) {
	          return _this6.client.setActiveUser(data);
	        }

	        return data;
	      }).then(function (data) {
	        _this6.data = data;
	        return _this6;
	      });
	    }
	  }, {
	    key: 'signupWithIdentity',
	    value: function signupWithIdentity(identity, session) {
	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      var data = {};
	      data._socialIdentity = {};
	      data._socialIdentity[identity] = session;
	      return this.signup(data, options);
	    }
	  }, {
	    key: 'update',
	    value: function update(data) {
	      var _this7 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      data = (0, _assign2.default)(this.data, data);
	      var store = new _datastore.UserStore();
	      return store.update(data, options).then(function (data) {
	        if (_this7.isActive()) {
	          return _this7.client.setActiveUser(data);
	        }

	        return data;
	      }).then(function (data) {
	        _this7.data = data;
	        return _this7;
	      });
	    }
	  }, {
	    key: 'me',
	    value: function me() {
	      var _this8 = this;

	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	      var request = new _request.KinveyRequest({
	        method: _request.RequestMethod.GET,
	        authType: _request.AuthType.Session,
	        url: _url2.default.format({
	          protocol: this.client.apiProtocol,
	          host: this.client.apiHost,
	          pathname: this.pathname + '/_me'
	        }),
	        properties: options.properties,
	        timeout: options.timeout
	      });

	      return request.execute().then(function (response) {
	        return response.data;
	      }).then(function (data) {
	        data = (0, _assign2.default)(_this8.data, data);

	        delete data.password;

	        if (_this8.isActive()) {
	          return _this8.client.setActiveUser(data);
	        }

	        return data;
	      }).then(function (data) {
	        _this8.data = data;
	        return _this8;
	      });
	    }
	  }, {
	    key: '_id',
	    get: function get() {
	      return this.data._id;
	    }
	  }, {
	    key: '_acl',
	    get: function get() {
	      return new _acl2.default(this.data);
	    }
	  }, {
	    key: 'metadata',
	    get: function get() {
	      return new _metadata2.default(this.data);
	    }
	  }, {
	    key: '_kmd',
	    get: function get() {
	      return this.metadata;
	    }
	  }, {
	    key: '_socialIdentity',
	    get: function get() {
	      return this.data._socialIdentity;
	    }
	  }, {
	    key: 'authtoken',
	    get: function get() {
	      return this.metadata.authtoken;
	    }
	  }, {
	    key: 'username',
	    get: function get() {
	      return this.data.username;
	    }
	  }, {
	    key: 'email',
	    get: function get() {
	      return this.data.email;
	    }
	  }, {
	    key: 'pathname',
	    get: function get() {
	      return '/user/' + this.client.appKey;
	    }
	  }], [{
	    key: 'login',
	    value: function login(username, password) {
	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      var user = new this({}, options);
	      return user.login(username, password, options);
	    }
	  }, {
	    key: 'loginWithMIC',
	    value: function loginWithMIC(redirectUri, authorizationGrant) {
	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      var user = new this({}, options);
	      return user.loginWithMIC(redirectUri, authorizationGrant, options);
	    }
	  }, {
	    key: 'connectIdentity',
	    value: function connectIdentity(identity, session) {
	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      var user = new this({}, options);
	      return user.connectIdentity(identity, session, options);
	    }
	  }, {
	    key: 'logout',
	    value: function logout() {
	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	      var activeUser = User.getActiveUser(options.client);

	      if ((0, _utils.isDefined)(activeUser)) {
	        return activeUser.logout(options);
	      }

	      return _es6Promise2.default.resolve(null);
	    }
	  }, {
	    key: 'signup',
	    value: function signup(data) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var user = new this({}, options);
	      return user.signup(data, options);
	    }
	  }, {
	    key: 'signupWithIdentity',
	    value: function signupWithIdentity(identity, session) {
	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      var user = new this({}, options);
	      return user.signupWithIdentity(identity, session, options);
	    }
	  }, {
	    key: 'update',
	    value: function update(data) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var activeUser = User.getActiveUser(options.client);

	      if ((0, _utils.isDefined)(activeUser)) {
	        return activeUser.update(data, options);
	      }

	      return _es6Promise2.default.resolve(null);
	    }
	  }, {
	    key: 'me',
	    value: function me() {
	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	      var activeUser = User.getActiveUser(options.client);

	      if (activeUser) {
	        return activeUser.me(options);
	      }

	      return _es6Promise2.default.resolve(null);
	    }
	  }, {
	    key: 'getActiveUser',
	    value: function getActiveUser() {
	      var client = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _client2.default.sharedInstance();

	      var data = client.getActiveUser();

	      if ((0, _utils.isDefined)(data)) {
	        return new this(data, { client: client });
	      }

	      return null;
	    }
	  }, {
	    key: 'verifyEmail',
	    value: function verifyEmail(username) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      if (!username) {
	        return _es6Promise2.default.reject(new _errors.KinveyError('A username was not provided.', 'Please provide a username for the user that you would like to verify their email.'));
	      }

	      if (!(0, _isString2.default)(username)) {
	        return _es6Promise2.default.reject(new _errors.KinveyError('The provided username is not a string.'));
	      }

	      var client = options.client || _client2.default.sharedInstance();
	      var request = new _request.KinveyRequest({
	        method: _request.RequestMethod.POST,
	        authType: _request.AuthType.App,
	        url: _url2.default.format({
	          protocol: client.apiProtocol,
	          host: client.apiHost,
	          pathname: '/rpc/' + client.appKey + '/' + username + '/user-email-verification-initiate'
	        }),
	        properties: options.properties,
	        timeout: options.timeout,
	        client: client
	      });
	      return request.execute().then(function (response) {
	        return response.data;
	      });
	    }
	  }, {
	    key: 'forgotUsername',
	    value: function forgotUsername(email) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      if (!email) {
	        return _es6Promise2.default.reject(new _errors.KinveyError('An email was not provided.', 'Please provide an email for the user that you would like to retrieve their username.'));
	      }

	      if (!(0, _isString2.default)(email)) {
	        return _es6Promise2.default.reject(new _errors.KinveyError('The provided email is not a string.'));
	      }

	      var client = options.client || _client2.default.sharedInstance();
	      var request = new _request.KinveyRequest({
	        method: _request.RequestMethod.POST,
	        authType: _request.AuthType.App,
	        url: _url2.default.format({
	          protocol: client.apiProtocol,
	          host: client.apiHost,
	          pathname: '/rpc/' + client.appKey + '/user-forgot-username'
	        }),
	        properties: options.properties,
	        data: { email: email },
	        timeout: options.timeout,
	        client: client
	      });
	      return request.execute().then(function (response) {
	        return response.data;
	      });
	    }
	  }, {
	    key: 'resetPassword',
	    value: function resetPassword(username) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      if (!username) {
	        return _es6Promise2.default.reject(new _errors.KinveyError('A username was not provided.', 'Please provide a username for the user that you would like to verify their email.'));
	      }

	      if (!(0, _isString2.default)(username)) {
	        return _es6Promise2.default.reject(new _errors.KinveyError('The provided username is not a string.'));
	      }

	      var client = options.client || _client2.default.sharedInstance();
	      var request = new _request.KinveyRequest({
	        method: _request.RequestMethod.POST,
	        authType: _request.AuthType.App,
	        url: _url2.default.format({
	          protocol: client.apiProtocol,
	          host: client.apiHost,
	          pathname: '/rpc/' + client.appKey + '/' + username + '/user-password-reset-initiate'
	        }),
	        properties: options.properties,
	        timeout: options.timeout,
	        client: client
	      });
	      return request.execute().then(function (response) {
	        return response.data;
	      });
	    }
	  }, {
	    key: 'lookup',
	    value: function lookup(query) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var store = new _datastore.UserStore();
	      return store.lookup(query, options);
	    }
	  }, {
	    key: 'exists',
	    value: function exists(username) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var store = new _datastore.UserStore();
	      return store.exists(username, options);
	    }
	  }, {
	    key: 'remove',
	    value: function remove(id) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var store = new _datastore.UserStore();
	      return store.removeById(id, options);
	    }
	  }, {
	    key: 'restore',
	    value: function restore() {
	      return _es6Promise2.default.reject(new _errors.KinveyError('This function requires a master secret to be provided for your application.' + ' We strongly advise not to do this.'));
	    }
	  }]);

	  return User;
	}();

	exports.default = User;

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _isString = __webpack_require__(131);

	var _isString2 = _interopRequireDefault(_isString);

	var _isArray = __webpack_require__(119);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _url = __webpack_require__(67);

	var _url2 = _interopRequireDefault(_url);

	var _request = __webpack_require__(244);

	var _errors = __webpack_require__(2);

	var _query = __webpack_require__(275);

	var _query2 = _interopRequireDefault(_query);

	var _client = __webpack_require__(288);

	var _client2 = _interopRequireDefault(_client);

	var _utils = __webpack_require__(40);

	var _aggregation = __webpack_require__(286);

	var _aggregation2 = _interopRequireDefault(_aggregation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NetworkStore = function () {
	  function NetworkStore(collection) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    _classCallCheck(this, NetworkStore);

	    if (collection && !(0, _isString2.default)(collection)) {
	      throw new _errors.KinveyError('Collection must be a string.');
	    }

	    this.collection = collection;

	    this.client = options.client;

	    this.useDeltaFetch = options.useDeltaFetch === true;
	  }

	  _createClass(NetworkStore, [{
	    key: 'find',
	    value: function find(query) {
	      var _this = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var useDeltaFetch = options.useDeltaFetch === true || this.useDeltaFetch;
	      var stream = _utils.KinveyObservable.create(function (observer) {
	        if ((0, _utils.isDefined)(query) && !(query instanceof _query2.default)) {
	          return observer.error(new _errors.KinveyError('Invalid query. It must be an instance of the Query class.'));
	        }

	        var config = {
	          method: _request.RequestMethod.GET,
	          authType: _request.AuthType.Default,
	          url: _url2.default.format({
	            protocol: _this.client.apiProtocol,
	            host: _this.client.apiHost,
	            pathname: _this.pathname
	          }),
	          properties: options.properties,
	          query: query,
	          timeout: options.timeout,
	          client: _this.client
	        };
	        var request = new _request.KinveyRequest(config);

	        if (useDeltaFetch === true) {
	          request = new _request.DeltaFetchRequest(config);
	        }

	        return request.execute().then(function (response) {
	          return response.data;
	        }).then(function (data) {
	          return observer.next(data);
	        }).then(function () {
	          return observer.complete();
	        }).catch(function (error) {
	          return observer.error(error);
	        });
	      });
	      return stream;
	    }
	  }, {
	    key: 'findById',
	    value: function findById(id) {
	      var _this2 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var useDeltaFetch = options.useDeltaFetch || this.useDeltaFetch;
	      var stream = _utils.KinveyObservable.create(function (observer) {
	        if (!id) {
	          observer.next(undefined);
	          return observer.complete();
	        }

	        var config = {
	          method: _request.RequestMethod.GET,
	          authType: _request.AuthType.Default,
	          url: _url2.default.format({
	            protocol: _this2.client.apiProtocol,
	            host: _this2.client.apiHost,
	            pathname: _this2.pathname + '/' + id
	          }),
	          properties: options.properties,
	          timeout: options.timeout,
	          client: _this2.client
	        };
	        var request = new _request.KinveyRequest(config);

	        if (useDeltaFetch === true) {
	          request = new _request.DeltaFetchRequest(config);
	        }

	        return request.execute().then(function (response) {
	          return response.data;
	        }).then(function (data) {
	          return observer.next(data);
	        }).then(function () {
	          return observer.complete();
	        }).catch(function (error) {
	          return observer.error(error);
	        });
	      });

	      return stream;
	    }
	  }, {
	    key: 'group',
	    value: function group(aggregation) {
	      var _this3 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var stream = _utils.KinveyObservable.create(function (observer) {
	        if (!(aggregation instanceof _aggregation2.default)) {
	          return observer.error(new _errors.KinveyError('Invalid aggregation. It must be an instance of the Aggregation class.'));
	        }

	        var request = new _request.KinveyRequest({
	          method: _request.RequestMethod.POST,
	          authType: _request.AuthType.Default,
	          url: _url2.default.format({
	            protocol: _this3.client.apiProtocol,
	            host: _this3.client.apiHost,
	            pathname: _this3.pathname + '/_group'
	          }),
	          properties: options.properties,
	          aggregation: aggregation,
	          timeout: options.timeout,
	          client: _this3.client
	        });

	        return request.execute().then(function (response) {
	          return response.data;
	        }).then(function (data) {
	          return observer.next(data);
	        }).then(function () {
	          return observer.complete();
	        }).catch(function (error) {
	          return observer.error(error);
	        });
	      });
	      return stream;
	    }
	  }, {
	    key: 'count',
	    value: function count(query) {
	      var _this4 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var stream = _utils.KinveyObservable.create(function (observer) {
	        try {
	          if (query && !(query instanceof _query2.default)) {
	            throw new _errors.KinveyError('Invalid query. It must be an instance of the Query class.');
	          }

	          var request = new _request.KinveyRequest({
	            method: _request.RequestMethod.GET,
	            authType: _request.AuthType.Default,
	            url: _url2.default.format({
	              protocol: _this4.client.apiProtocol,
	              host: _this4.client.apiHost,
	              pathname: _this4.pathname + '/_count'
	            }),
	            properties: options.properties,
	            query: query,
	            timeout: options.timeout,
	            client: _this4.client
	          });

	          return request.execute().then(function (response) {
	            return response.data;
	          }).then(function (data) {
	            return observer.next(data ? data.count : 0);
	          }).then(function () {
	            return observer.complete();
	          }).catch(function (error) {
	            return observer.error(error);
	          });
	        } catch (error) {
	          return observer.error(error);
	        }
	      });

	      return stream;
	    }
	  }, {
	    key: 'create',
	    value: function create(entity) {
	      var _this5 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var stream = _utils.KinveyObservable.create(function (observer) {
	        if ((0, _utils.isDefined)(entity) === false) {
	          observer.next(null);
	          return observer.complete();
	        }

	        if ((0, _isArray2.default)(entity)) {
	          return observer.error(new _errors.KinveyError('Unable to create an array of entities.', 'Please create entities one by one.'));
	        }

	        var request = new _request.KinveyRequest({
	          method: _request.RequestMethod.POST,
	          authType: _request.AuthType.Default,
	          url: _url2.default.format({
	            protocol: _this5.client.apiProtocol,
	            host: _this5.client.apiHost,
	            pathname: _this5.pathname
	          }),
	          properties: options.properties,
	          data: entity,
	          timeout: options.timeout,
	          client: _this5.client
	        });
	        return request.execute().then(function (response) {
	          return response.data;
	        }).then(function (data) {
	          return observer.next(data);
	        }).then(function () {
	          return observer.complete();
	        }).catch(function (error) {
	          return observer.error(error);
	        });
	      });

	      return stream.toPromise();
	    }
	  }, {
	    key: 'update',
	    value: function update(entity) {
	      var _this6 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var stream = _utils.KinveyObservable.create(function (observer) {
	        if ((0, _utils.isDefined)(entity) === false) {
	          observer.next(null);
	          return observer.complete();
	        }

	        if ((0, _isArray2.default)(entity)) {
	          return observer.error(new _errors.KinveyError('Unable to update an array of entities.', 'Please update entities one by one.'));
	        }

	        if ((0, _utils.isDefined)(entity._id) === false) {
	          return observer.error(new _errors.KinveyError('Unable to update entity.', 'Entity must contain an _id to be updated.'));
	        }

	        var request = new _request.KinveyRequest({
	          method: _request.RequestMethod.PUT,
	          authType: _request.AuthType.Default,
	          url: _url2.default.format({
	            protocol: _this6.client.apiProtocol,
	            host: _this6.client.apiHost,
	            pathname: _this6.pathname + '/' + entity._id
	          }),
	          properties: options.properties,
	          data: entity,
	          timeout: options.timeout,
	          client: _this6.client
	        });
	        return request.execute().then(function (response) {
	          return response.data;
	        }).then(function (data) {
	          return observer.next(data);
	        }).then(function () {
	          return observer.complete();
	        }).catch(function (error) {
	          return observer.error(error);
	        });
	      });

	      return stream.toPromise();
	    }
	  }, {
	    key: 'save',
	    value: function save(entity, options) {
	      if (entity._id) {
	        return this.update(entity, options);
	      }

	      return this.create(entity, options);
	    }
	  }, {
	    key: 'remove',
	    value: function remove(query) {
	      var _this7 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var stream = _utils.KinveyObservable.create(function (observer) {
	        try {
	          if (query && !(query instanceof _query2.default)) {
	            throw new _errors.KinveyError('Invalid query. It must be an instance of the Query class.');
	          }

	          var request = new _request.KinveyRequest({
	            method: _request.RequestMethod.DELETE,
	            authType: _request.AuthType.Default,
	            url: _url2.default.format({
	              protocol: _this7.client.apiProtocol,
	              host: _this7.client.apiHost,
	              pathname: _this7.pathname
	            }),
	            properties: options.properties,
	            query: query,
	            timeout: options.timeout,
	            client: _this7.client
	          });
	          return request.execute().then(function (response) {
	            return response.data;
	          }).then(function (data) {
	            return observer.next(data);
	          }).then(function () {
	            return observer.complete();
	          }).catch(function (error) {
	            return observer.error(error);
	          });
	        } catch (error) {
	          return observer.error(error);
	        }
	      });

	      return stream.toPromise();
	    }
	  }, {
	    key: 'removeById',
	    value: function removeById(id) {
	      var _this8 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var stream = _utils.KinveyObservable.create(function (observer) {
	        try {
	          if ((0, _utils.isDefined)(id) === false) {
	            observer.next(undefined);
	            return observer.complete();
	          }

	          var request = new _request.KinveyRequest({
	            method: _request.RequestMethod.DELETE,
	            authType: _request.AuthType.Default,
	            url: _url2.default.format({
	              protocol: _this8.client.apiProtocol,
	              host: _this8.client.apiHost,
	              pathname: _this8.pathname + '/' + id
	            }),
	            properties: options.properties,
	            timeout: options.timeout
	          });
	          return request.execute().then(function (response) {
	            return response.data;
	          }).then(function (data) {
	            return observer.next(data);
	          }).then(function () {
	            return observer.complete();
	          }).catch(function (error) {
	            return observer.error(error);
	          });
	        } catch (error) {
	          return observer.error(error);
	        }
	      });

	      return stream.toPromise();
	    }
	  }, {
	    key: 'subscribe',
	    value: function subscribe(onNext, onError, onComplete) {
	      return this.liveStream.subscribe(onNext, onError, onComplete);
	    }
	  }, {
	    key: 'client',
	    get: function get() {
	      if ((0, _utils.isDefined)(this._client)) {
	        return this._client;
	      }

	      return _client2.default.sharedInstance();
	    },
	    set: function set(client) {
	      if (client instanceof _client2.default) {
	        this._client = client;
	      } else {
	        this._client = null;
	      }
	    }
	  }, {
	    key: 'pathname',
	    get: function get() {
	      var pathname = '/appdata/' + this.client.appKey;

	      if (this.collection) {
	        pathname = pathname + '/' + this.collection;
	      }

	      return pathname;
	    }
	  }, {
	    key: 'liveStream',
	    get: function get() {
	      var _this9 = this;

	      if (typeof EventSource === 'undefined') {
	        throw new _errors.KinveyError('Your environment does not support server-sent events.');
	      }

	      if (!this._liveStream) {
	        var source = new EventSource('' + this.client.liveServiceHostname + this.pathname);

	        this._liveStream = _utils.KinveyObservable.create(function (observer) {
	          source.onopen = function (event) {
	            _utils.Log.info('Subscription to Kinvey Live Service is now open at ' + source.url + '.');
	            _utils.Log.info(event);
	          };

	          source.onmessage = function (message) {
	            try {
	              observer.next(JSON.parse(message.data));
	            } catch (error) {
	              observer.error(error);
	            }
	          };

	          source.onerror = function (error) {
	            observer.error(error);
	          };

	          return function () {
	            observer.complete();
	          };
	        }).finally(function () {
	          source.close();
	          delete _this9._liveStream;
	        });
	      }

	      return this._liveStream;
	    }
	  }]);

	  return NetworkStore;
	}();

	exports.default = NetworkStore;

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SyncOperation = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _es6Promise = __webpack_require__(47);

	var _es6Promise2 = _interopRequireDefault(_es6Promise);

	var _map = __webpack_require__(242);

	var _map2 = _interopRequireDefault(_map);

	var _result = __webpack_require__(311);

	var _result2 = _interopRequireDefault(_result);

	var _isArray = __webpack_require__(119);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _isString = __webpack_require__(131);

	var _isString2 = _interopRequireDefault(_isString);

	var _url = __webpack_require__(67);

	var _url2 = _interopRequireDefault(_url);

	var _request3 = __webpack_require__(244);

	var _errors = __webpack_require__(2);

	var _utils = __webpack_require__(40);

	var _client = __webpack_require__(288);

	var _client2 = _interopRequireDefault(_client);

	var _query = __webpack_require__(275);

	var _query2 = _interopRequireDefault(_query);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var pushInProgress = new Map();

	var SyncOperation = {
	  Create: _request3.RequestMethod.POST,
	  Update: _request3.RequestMethod.PUT,
	  Delete: _request3.RequestMethod.DELETE
	};
	Object.freeze(SyncOperation);
	exports.SyncOperation = SyncOperation;

	var SyncManager = function () {
	  function SyncManager(collection) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    _classCallCheck(this, SyncManager);

	    if (!collection) {
	      throw new _errors.SyncError('A collection is required.');
	    }

	    if (!(0, _isString2.default)(collection)) {
	      throw new _errors.SyncError('Collection must be a string.');
	    }

	    this.collection = collection;

	    this.client = options.client || _client2.default.sharedInstance();
	  }

	  _createClass(SyncManager, [{
	    key: 'find',
	    value: function find(query) {
	      var _this = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      if ((0, _utils.isDefined)(query) && query instanceof _query2.default === false) {
	        query = new _query2.default((0, _result2.default)(query, 'toJSON', query));
	      }

	      var request = new _request3.CacheRequest({
	        method: _request3.RequestMethod.GET,
	        url: _url2.default.format({
	          protocol: this.client.apiProtocol,
	          host: this.client.apiHost,
	          pathname: this.backendPathname
	        }),
	        query: query,
	        properties: options.properties,
	        timeout: options.timeout,
	        client: this.client
	      });
	      return request.execute().then(function (response) {
	        return response.data;
	      }).then(function (entities) {
	        var syncQuery = new _query2.default();
	        syncQuery.equalTo('collection', _this.collection);

	        if ((0, _utils.isDefined)(query)) {
	          syncQuery.contains('entityId', (0, _map2.default)(entities, function (entity) {
	            return entity._id;
	          }));
	        }

	        var request = new _request3.CacheRequest({
	          method: _request3.RequestMethod.GET,
	          url: _url2.default.format({
	            protocol: _this.client.apiProtocol,
	            host: _this.client.apiHost,
	            pathname: _this.pathname
	          }),
	          properties: options.properties,
	          query: syncQuery,
	          timeout: options.timeout,
	          client: _this.client
	        });
	        return request.execute().then(function (response) {
	          return response.data;
	        });
	      });
	    }
	  }, {
	    key: 'count',
	    value: function count(query) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      return this.find(query, options).then(function (entities) {
	        return entities.length;
	      });
	    }
	  }, {
	    key: 'addCreateOperation',
	    value: function addCreateOperation(entities) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      return this.addOperation(SyncOperation.Create, entities, options);
	    }
	  }, {
	    key: 'addUpdateOperation',
	    value: function addUpdateOperation(entities) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      return this.addOperation(SyncOperation.Update, entities, options);
	    }
	  }, {
	    key: 'addDeleteOperation',
	    value: function addDeleteOperation(entities) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      return this.addOperation(SyncOperation.Delete, entities, options);
	    }
	  }, {
	    key: 'addOperation',
	    value: function addOperation() {
	      var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SyncOperation.Create;

	      var _this2 = this;

	      var entities = arguments[1];
	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      var singular = false;

	      if (!(0, _isArray2.default)(entities)) {
	        singular = true;
	        entities = [entities];
	      }

	      return _es6Promise2.default.all((0, _map2.default)(entities, function (entity) {
	        if (!entity) {
	          return _es6Promise2.default.resolve(null);
	        }

	        var id = entity._id;
	        if (!id) {
	          return _es6Promise2.default.reject(new _errors.SyncError('An entity is missing an _id. All entities must have an _id in order to be ' + 'added to the sync table.', entity));
	        }

	        var query = new _query2.default().equalTo('entityId', id);
	        var findRequest = new _request3.CacheRequest({
	          method: _request3.RequestMethod.GET,
	          url: _url2.default.format({
	            protocol: _this2.client.apiProtocol,
	            host: _this2.client.apiHost,
	            pathname: _this2.pathname
	          }),
	          properties: options.properties,
	          query: query,
	          timeout: options.timeout
	        });
	        return findRequest.execute().then(function (response) {
	          return response.data;
	        }).then(function (entities) {
	          var syncEntity = entities.length === 1 ? entities[0] : { collection: _this2.collection, state: {}, entityId: id };

	          syncEntity.state = syncEntity.state || {};
	          syncEntity.state.operation = operation;

	          var request = new _request3.CacheRequest({
	            method: _request3.RequestMethod.PUT,
	            url: _url2.default.format({
	              protocol: _this2.client.apiProtocol,
	              host: _this2.client.apiHost,
	              pathname: _this2.pathname
	            }),
	            properties: options.properties,
	            body: syncEntity,
	            timeout: options.timeout
	          });
	          return request.execute();
	        });
	      })).then(function () {
	        if (singular === true) {
	          return entities[0];
	        }

	        return entities;
	      });
	    }
	  }, {
	    key: 'pull',
	    value: function pull(query) {
	      var _this3 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      if (query && !(query instanceof _query2.default)) {
	        return _es6Promise2.default.reject(new _errors.SyncError('Invalid query. It must be an instance of the Query class.'));
	      }

	      return this.count(query).then(function (count) {
	        if (count > 0) {
	          return _this3.push(query).then(function () {
	            return _this3.count(query);
	          });
	        }

	        return count;
	      }).then(function (count) {
	        if (count > 0) {
	          throw new _errors.SyncError('Unable to pull data from the network.' + (' There are ' + count + ' entities that need') + ' to be synced before data is loaded from the network.');
	        }

	        var config = {
	          method: _request3.RequestMethod.GET,
	          authType: _request3.AuthType.Default,
	          url: _url2.default.format({
	            protocol: _this3.client.apiProtocol,
	            host: _this3.client.apiHost,
	            pathname: _this3.backendPathname
	          }),
	          properties: options.properties,
	          query: query,
	          timeout: options.timeout,
	          client: _this3.client
	        };
	        var request = new _request3.KinveyRequest(config);

	        if (options.useDeltaFetch === true) {
	          request = new _request3.DeltaFetchRequest(config);
	        }

	        return request.execute();
	      }).then(function (response) {
	        return response.data;
	      });
	    }
	  }, {
	    key: 'push',
	    value: function push(query) {
	      var _this4 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var batchSize = 100;
	      var i = 0;

	      if (pushInProgress.get(this.collection) === true) {
	        return _es6Promise2.default.reject(new _errors.SyncError('Data is already being pushed to the backend.' + ' Please wait for it to complete before pushing new data to the backend.'));
	      }

	      pushInProgress.set(this.collection, true);

	      return this.find(query).then(function (syncEntities) {
	        if (syncEntities.length > 0) {
	          var batchSync = function batchSync(syncResults) {
	            var promise = new _es6Promise2.default(function (resolve) {
	              var batch = syncEntities.slice(i, i + batchSize);
	              i += batchSize;

	              return _es6Promise2.default.all((0, _map2.default)(batch, function (syncEntity) {
	                var entityId = syncEntity.entityId,
	                    _syncEntity$state = syncEntity.state,
	                    state = _syncEntity$state === undefined ? {} : _syncEntity$state;

	                var operation = state.operation || state.method;

	                if (operation === SyncOperation.Delete) {
	                  var request = new _request3.KinveyRequest({
	                    method: _request3.RequestMethod.DELETE,
	                    authType: _request3.AuthType.Default,
	                    url: _url2.default.format({
	                      protocol: _this4.client.apiProtocol,
	                      host: _this4.client.apiHost,
	                      pathname: _this4.backendPathname + '/' + entityId
	                    }),
	                    properties: options.properties,
	                    timeout: options.timeout,
	                    client: _this4.client
	                  });
	                  return request.execute().then(function () {
	                    var request = new _request3.CacheRequest({
	                      method: _request3.RequestMethod.DELETE,
	                      url: _url2.default.format({
	                        protocol: _this4.client.apiProtocol,
	                        host: _this4.client.apiHost,
	                        pathname: _this4.pathname + '/' + syncEntity._id
	                      }),
	                      properties: options.properties,
	                      timeout: options.timeout
	                    });
	                    return request.execute();
	                  }).then(function () {
	                    var result = { _id: entityId, operation: operation };
	                    return result;
	                  }).catch(function (error) {
	                    var result = {
	                      _id: entityId,
	                      operation: operation,
	                      error: error
	                    };
	                    return result;
	                  });
	                } else if (operation === SyncOperation.Create || operation === SyncOperation.Update) {
	                  var local = false;

	                  var _request = new _request3.CacheRequest({
	                    method: _request3.RequestMethod.GET,
	                    url: _url2.default.format({
	                      protocol: _this4.client.apiProtocol,
	                      host: _this4.client.apiHost,
	                      pathname: _this4.backendPathname + '/' + entityId
	                    }),
	                    properties: options.properties,
	                    timeout: options.timeout
	                  });
	                  return _request.execute().then(function (response) {
	                    return response.data;
	                  }).then(function (entity) {
	                    var request = new _request3.KinveyRequest({
	                      method: _request3.RequestMethod.PUT,
	                      authType: _request3.AuthType.Default,
	                      url: _url2.default.format({
	                        protocol: _this4.client.apiProtocol,
	                        host: _this4.client.apiHost,
	                        pathname: _this4.backendPathname + '/' + entityId
	                      }),
	                      properties: options.properties,
	                      timeout: options.timeout,
	                      body: entity,
	                      client: _this4.client
	                    });

	                    if (operation === SyncOperation.Create) {
	                      if ((0, _utils.isDefined)(entity._kmd) && entity._kmd.local === true) {
	                        local = true;
	                        delete entity._id;
	                      }

	                      request.method = _request3.RequestMethod.POST;
	                      request.url = _url2.default.format({
	                        protocol: _this4.client.apiProtocol,
	                        host: _this4.client.apiHost,
	                        pathname: _this4.backendPathname
	                      });
	                    }

	                    return request.execute().then(function (response) {
	                      return response.data;
	                    }).then(function (entity) {
	                      var request = new _request3.CacheRequest({
	                        method: _request3.RequestMethod.DELETE,
	                        url: _url2.default.format({
	                          protocol: _this4.client.apiProtocol,
	                          host: _this4.client.apiHost,
	                          pathname: _this4.pathname + '/' + syncEntity._id
	                        }),
	                        properties: options.properties,
	                        timeout: options.timeout
	                      });
	                      return request.execute().then(function () {
	                        var request = new _request3.CacheRequest({
	                          method: _request3.RequestMethod.PUT,
	                          url: _url2.default.format({
	                            protocol: _this4.client.apiProtocol,
	                            host: _this4.client.apiHost,
	                            pathname: _this4.backendPathname + '/' + entity._id
	                          }),
	                          properties: options.properties,
	                          timeout: options.timeout,
	                          body: entity
	                        });
	                        return request.execute().then(function (response) {
	                          return response.data;
	                        });
	                      }).then(function (entity) {
	                        if (local) {
	                          var _request2 = new _request3.CacheRequest({
	                            method: _request3.RequestMethod.DELETE,
	                            url: _url2.default.format({
	                              protocol: _this4.client.apiProtocol,
	                              host: _this4.client.apiHost,
	                              pathname: _this4.backendPathname + '/' + entityId
	                            }),
	                            properties: options.properties,
	                            timeout: options.timeout
	                          });

	                          return _request2.execute().then(function () {
	                            return entity;
	                          });
	                        }

	                        return entity;
	                      }).then(function (entity) {
	                        var result = {
	                          _id: entityId,
	                          operation: operation,
	                          entity: entity
	                        };
	                        return result;
	                      });
	                    }).catch(function (error) {
	                      entity._id = entityId;

	                      var result = {
	                        _id: entityId,
	                        operation: operation,
	                        entity: entity,
	                        error: error
	                      };
	                      return result;
	                    });
	                  }).catch(function (error) {
	                    var result = {
	                      _id: entityId,
	                      operation: operation,
	                      entity: undefined,
	                      error: error
	                    };
	                    return result;
	                  });
	                }

	                return {
	                  _id: entityId,
	                  operation: operation,
	                  entity: undefined,
	                  error: new _errors.SyncError('Unable to sync the entity since the operation was not recognized.', syncEntity)
	                };
	              })).then(function (results) {
	                syncResults = syncResults.concat(results);

	                if (i < syncEntities.length) {
	                  return resolve(batchSync(syncResults));
	                }

	                return resolve(syncResults);
	              });
	            });
	            return promise;
	          };

	          return batchSync([]);
	        }

	        return [];
	      }).then(function (result) {
	        pushInProgress.set(_this4.collection, false);
	        return result;
	      }).catch(function (error) {
	        pushInProgress.set(_this4.collection, false);
	        throw error;
	      });
	    }
	  }, {
	    key: 'clear',
	    value: function clear(query) {
	      var _this5 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      return this.find(query, options).then(function (entities) {
	        return _es6Promise2.default.all((0, _map2.default)(entities, function (entity) {
	          var request = new _request3.CacheRequest({
	            method: _request3.RequestMethod.DELETE,
	            url: _url2.default.format({
	              protocol: _this5.client.apiProtocol,
	              host: _this5.client.apiHost,
	              pathname: _this5.pathname + '/' + entity._id
	            }),
	            properties: options.properties,
	            timeout: options.timeout
	          });
	          return request.execute().then(function (response) {
	            return response.data;
	          });
	        }));
	      });
	    }
	  }, {
	    key: 'pathname',
	    get: function get() {
	      return '/appdata/' + this.client.appKey + '/kinvey_sync';
	    }
	  }, {
	    key: 'backendPathname',
	    get: function get() {
	      return '/appdata/' + this.client.appKey + '/' + this.collection;
	    }
	  }]);

	  return SyncManager;
	}();

	exports.default = SyncManager;

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DataStoreType = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _isString = __webpack_require__(131);

	var _isString2 = _interopRequireDefault(_isString);

	var _url = __webpack_require__(67);

	var _url2 = _interopRequireDefault(_url);

	var _request = __webpack_require__(244);

	var _errors = __webpack_require__(2);

	var _utils = __webpack_require__(40);

	var _client = __webpack_require__(288);

	var _client2 = _interopRequireDefault(_client);

	var _networkstore = __webpack_require__(332);

	var _networkstore2 = _interopRequireDefault(_networkstore);

	var _cachestore = __webpack_require__(140);

	var _cachestore2 = _interopRequireDefault(_cachestore);

	var _syncstore = __webpack_require__(335);

	var _syncstore2 = _interopRequireDefault(_syncstore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DataStoreType = {
	  Cache: 'Cache',
	  Network: 'Network',
	  Sync: 'Sync'
	};
	Object.freeze(DataStoreType);
	exports.DataStoreType = DataStoreType;

	var DataStore = function () {
	  function DataStore() {
	    _classCallCheck(this, DataStore);

	    throw new _errors.KinveyError('Not allowed to construct a DataStore instance.' + ' Please use the collection() function to get an instance of a DataStore instance.');
	  }

	  _createClass(DataStore, null, [{
	    key: 'collection',
	    value: function collection(_collection) {
	      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DataStoreType.Cache;
	      var options = arguments[2];

	      var store = void 0;

	      if ((0, _utils.isDefined)(_collection) === false || (0, _isString2.default)(_collection) === false) {
	        throw new _errors.KinveyError('A collection is required and must be a string.');
	      }

	      switch (type) {
	        case DataStoreType.Network:
	          store = new _networkstore2.default(_collection, options);
	          break;
	        case DataStoreType.Sync:
	          store = new _syncstore2.default(_collection, options);
	          break;
	        case DataStoreType.Cache:
	        default:
	          store = new _cachestore2.default(_collection, options);

	      }

	      return store;
	    }
	  }, {
	    key: 'getInstance',
	    value: function getInstance(collection, type, options) {
	      return this.collection(collection, type, options);
	    }
	  }, {
	    key: 'clearCache',
	    value: function clearCache() {
	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	      var client = options.client || _client2.default.sharedInstance();
	      var pathname = '/appdata/' + client.appKey;
	      var request = new _request.CacheRequest({
	        method: _request.RequestMethod.DELETE,
	        url: _url2.default.format({
	          protocol: client.apiProtocol,
	          host: client.apiHost,
	          pathname: pathname
	        }),
	        properties: options.properties,
	        timeout: options.timeout
	      });
	      return request.execute().then(function (response) {
	        return response.data;
	      });
	    }
	  }]);

	  return DataStore;
	}();

	exports.default = DataStore;

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _url = __webpack_require__(67);

	var _url2 = _interopRequireDefault(_url);

	var _request = __webpack_require__(244);

	var _errors = __webpack_require__(2);

	var _query = __webpack_require__(275);

	var _query2 = _interopRequireDefault(_query);

	var _aggregation = __webpack_require__(286);

	var _aggregation2 = _interopRequireDefault(_aggregation);

	var _utils = __webpack_require__(40);

	var _cachestore = __webpack_require__(140);

	var _cachestore2 = _interopRequireDefault(_cachestore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SyncStore = function (_CacheStore) {
	  _inherits(SyncStore, _CacheStore);

	  function SyncStore() {
	    _classCallCheck(this, SyncStore);

	    return _possibleConstructorReturn(this, (SyncStore.__proto__ || Object.getPrototypeOf(SyncStore)).apply(this, arguments));
	  }

	  _createClass(SyncStore, [{
	    key: 'find',
	    value: function find(query) {
	      var _this2 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var stream = _utils.KinveyObservable.create(function (observer) {
	        if (query && !(query instanceof _query2.default)) {
	          return observer.error(new _errors.KinveyError('Invalid query. It must be an instance of the Query class.'));
	        }

	        var request = new _request.CacheRequest({
	          method: _request.RequestMethod.GET,
	          url: _url2.default.format({
	            protocol: _this2.client.apiProtocol,
	            host: _this2.client.apiHost,
	            pathname: _this2.pathname
	          }),
	          properties: options.properties,
	          query: query,
	          timeout: options.timeout
	        });

	        return request.execute().then(function (response) {
	          return response.data;
	        }).then(function (data) {
	          return observer.next(data);
	        }).then(function () {
	          return observer.complete();
	        }).catch(function (error) {
	          return observer.error(error);
	        });
	      });

	      return stream;
	    }
	  }, {
	    key: 'findById',
	    value: function findById(id) {
	      var _this3 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var stream = _utils.KinveyObservable.create(function (observer) {
	        try {
	          if ((0, _utils.isDefined)(id) === false) {
	            observer.next(undefined);
	            return observer.complete();
	          }

	          var request = new _request.CacheRequest({
	            method: _request.RequestMethod.GET,
	            url: _url2.default.format({
	              protocol: _this3.client.apiProtocol,
	              host: _this3.client.apiHost,
	              pathname: _this3.pathname + '/' + id
	            }),
	            properties: options.properties,
	            timeout: options.timeout
	          });

	          return request.execute().then(function (response) {
	            return response.data;
	          }).then(function (data) {
	            return observer.next(data);
	          }).then(function () {
	            return observer.complete();
	          }).catch(function (error) {
	            return observer.error(error);
	          });
	        } catch (error) {
	          return observer.error(error);
	        }
	      });

	      return stream;
	    }
	  }, {
	    key: 'group',
	    value: function group(aggregation) {
	      var _this4 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var stream = _utils.KinveyObservable.create(function (observer) {
	        if (!(aggregation instanceof _aggregation2.default)) {
	          return observer.error(new _errors.KinveyError('Invalid aggregation. It must be an instance of the Aggregation class.'));
	        }

	        var request = new _request.CacheRequest({
	          method: _request.RequestMethod.POST,
	          url: _url2.default.format({
	            protocol: _this4.client.apiProtocol,
	            host: _this4.client.apiHost,
	            pathname: _this4.pathname + '/_group'
	          }),
	          properties: options.properties,
	          aggregation: aggregation,
	          timeout: options.timeout
	        });

	        return request.execute().then(function (response) {
	          return response.data;
	        }).then(function (result) {
	          return observer.next(result);
	        }).then(function () {
	          return observer.complete();
	        }).catch(function (error) {
	          return observer.error(error);
	        });
	      });
	      return stream;
	    }
	  }, {
	    key: 'count',
	    value: function count(query) {
	      var _this5 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var stream = _utils.KinveyObservable.create(function (observer) {
	        try {
	          if (query && !(query instanceof _query2.default)) {
	            throw new _errors.KinveyError('Invalid query. It must be an instance of the Query class.');
	          }

	          var request = new _request.CacheRequest({
	            method: _request.RequestMethod.GET,
	            url: _url2.default.format({
	              protocol: _this5.client.apiProtocol,
	              host: _this5.client.apiHost,
	              pathname: _this5.pathname
	            }),
	            properties: options.properties,
	            query: query,
	            timeout: options.timeout
	          });

	          return request.execute().then(function (response) {
	            return response.data;
	          }).then(function (data) {
	            return observer.next(data ? data.length : 0);
	          }).then(function () {
	            return observer.complete();
	          }).catch(function (error) {
	            return observer.error(error);
	          });
	        } catch (error) {
	          return observer.error(error);
	        }
	      });

	      return stream;
	    }
	  }, {
	    key: 'syncAutomatically',
	    get: function get() {
	      return false;
	    }
	  }]);

	  return SyncStore;
	}(_cachestore2.default);

	exports.default = SyncStore;

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _es6Promise = __webpack_require__(47);

	var _es6Promise2 = _interopRequireDefault(_es6Promise);

	var _map = __webpack_require__(242);

	var _map2 = _interopRequireDefault(_map);

	var _assign = __webpack_require__(79);

	var _assign2 = _interopRequireDefault(_assign);

	var _isFunction = __webpack_require__(85);

	var _isFunction2 = _interopRequireDefault(_isFunction);

	var _isNumber = __webpack_require__(277);

	var _isNumber2 = _interopRequireDefault(_isNumber);

	var _url = __webpack_require__(67);

	var _url2 = _interopRequireDefault(_url);

	var _request = __webpack_require__(244);

	var _errors = __webpack_require__(2);

	var _utils = __webpack_require__(40);

	var _query = __webpack_require__(275);

	var _query2 = _interopRequireDefault(_query);

	var _networkstore = __webpack_require__(332);

	var _networkstore2 = _interopRequireDefault(_networkstore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function randomInt(min, max) {
	  return Math.floor(Math.random() * (max - min)) + min;
	}

	function getStartIndex(rangeHeader, max) {
	  var start = rangeHeader ? parseInt(rangeHeader.split('-')[1], 10) + 1 : 0;
	  return start >= max ? max - 1 : start;
	}

	var FileStore = function (_NetworkStore) {
	  _inherits(FileStore, _NetworkStore);

	  function FileStore() {
	    _classCallCheck(this, FileStore);

	    return _possibleConstructorReturn(this, (FileStore.__proto__ || Object.getPrototypeOf(FileStore)).apply(this, arguments));
	  }

	  _createClass(FileStore, [{
	    key: 'find',
	    value: function find(query) {
	      var _this2 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      options = (0, _assign2.default)({ tls: true }, options);
	      var queryStringObject = { tls: options.tls === true };

	      if ((0, _isNumber2.default)(options.ttl)) {
	        queryStringObject.ttl_in_seconds = parseInt(options.ttl, 10);
	      }

	      var stream = _utils.KinveyObservable.create(function (observer) {
	        if ((0, _utils.isDefined)(query) && !(query instanceof _query2.default)) {
	          return observer.error(new _errors.KinveyError('Invalid query. It must be an instance of the Query class.'));
	        }

	        var request = new _request.KinveyRequest({
	          method: _request.RequestMethod.GET,
	          authType: _request.AuthType.Default,
	          url: _url2.default.format({
	            protocol: _this2.client.apiProtocol,
	            host: _this2.client.apiHost,
	            pathname: _this2.pathname,
	            query: queryStringObject
	          }),
	          properties: options.properties,
	          query: query,
	          timeout: options.timeout,
	          client: _this2.client
	        });
	        return request.execute().then(function (response) {
	          return response.data;
	        }).then(function (data) {
	          return observer.next(data);
	        }).then(function () {
	          return observer.complete();
	        }).catch(function (error) {
	          return observer.error(error);
	        });
	      });
	      return stream.toPromise().then(function (files) {
	        if (options.download === true) {
	          return _es6Promise2.default.all((0, _map2.default)(files, function (file) {
	            return _this2.downloadByUrl(file._downloadURL, options);
	          }));
	        }

	        return files;
	      });
	    }
	  }, {
	    key: 'findById',
	    value: function findById(id, options) {
	      return this.download(id, options);
	    }
	  }, {
	    key: 'download',
	    value: function download(name) {
	      var _this3 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      options = (0, _assign2.default)({ tls: true }, options);
	      var queryStringObject = { tls: options.tls === true };

	      if ((0, _isNumber2.default)(options.ttl)) {
	        queryStringObject.ttl_in_seconds = parseInt(options.ttl, 10);
	      }

	      var stream = _utils.KinveyObservable.create(function (observer) {
	        if ((0, _utils.isDefined)(name) === false) {
	          observer.next(undefined);
	          return observer.complete();
	        }

	        var request = new _request.KinveyRequest({
	          method: _request.RequestMethod.GET,
	          authType: _request.AuthType.Default,
	          url: _url2.default.format({
	            protocol: _this3.client.apiProtocol,
	            host: _this3.client.apiHost,
	            pathname: _this3.pathname + '/' + name,
	            query: queryStringObject
	          }),
	          properties: options.properties,
	          timeout: options.timeout,
	          client: _this3.client
	        });
	        return request.execute().then(function (response) {
	          return response.data;
	        }).then(function (data) {
	          return observer.next(data);
	        }).then(function () {
	          return observer.complete();
	        }).catch(function (error) {
	          return observer.error(error);
	        });
	      });
	      return stream.toPromise().then(function (file) {
	        if (options.stream === true) {
	          return file;
	        }

	        options.mimeType = file.mimeType;
	        return _this3.downloadByUrl(file._downloadURL, options);
	      });
	    }
	  }, {
	    key: 'downloadByUrl',
	    value: function downloadByUrl(url) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var request = new _request.NetworkRequest({
	        method: _request.RequestMethod.GET,
	        url: url,
	        timeout: options.timeout
	      });
	      return request.execute().then(function (response) {
	        return response.data;
	      });
	    }
	  }, {
	    key: 'stream',
	    value: function stream(name) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      options.stream = true;
	      return this.download(name, options);
	    }
	  }, {
	    key: 'upload',
	    value: function upload(file) {
	      var _this4 = this;

	      var metadata = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      metadata = this.transformMetadata(file, metadata);
	      var kinveyFileData = null;

	      return this.saveFileMetadata(options, metadata).then(function (response) {
	        kinveyFileData = response.data;
	        return _this4.makeStatusCheckRequest(response.data._uploadURL, response.data._requiredHeaders, metadata, options.timeout);
	      }).then(function (response) {
	        _utils.Log.debug('File upload status check response', response);

	        if (!response.isSuccess()) {
	          return _es6Promise2.default.reject(response.error);
	        }

	        if (response.statusCode === 200 || response.statusCode === 201) {
	          return response;
	        }

	        if (response.statusCode !== 308) {
	          var error = new _errors.KinveyError('Unexpected response for upload file status check request.', false, response.statusCode, response.headers.get('X-Kinvey-Request-ID'));
	          return _es6Promise2.default.reject(error);
	        }

	        var uploadOptions = {
	          start: getStartIndex(response.headers.get('range'), metadata.size),
	          timeout: options.timeout,
	          maxBackoff: options.maxBackoff,
	          headers: kinveyFileData._requiredHeaders
	        };
	        return _this4.retriableUpload(kinveyFileData._uploadURL, file, metadata, uploadOptions);
	      }).then(function () {
	        delete kinveyFileData._expiresAt;
	        delete kinveyFileData._requiredHeaders;
	        delete kinveyFileData._uploadURL;
	        kinveyFileData._data = file;
	        return kinveyFileData;
	      });
	    }
	  }, {
	    key: 'transformMetadata',
	    value: function transformMetadata(file, metadata) {
	      var fileMetadata = (0, _assign2.default)({
	        filename: file._filename || file.name,
	        public: false,
	        size: file.size || file.length,
	        mimeType: file.mimeType || file.type || 'application/octet-stream'
	      }, metadata);
	      fileMetadata._filename = metadata.filename;
	      delete fileMetadata.filename;
	      fileMetadata._public = metadata.public;
	      delete fileMetadata.public;
	      return fileMetadata;
	    }
	  }, {
	    key: 'saveFileMetadata',
	    value: function saveFileMetadata(options, metadata) {
	      var isUpdate = (0, _utils.isDefined)(metadata._id);
	      var request = new _request.KinveyRequest({
	        method: isUpdate ? _request.RequestMethod.PUT : _request.RequestMethod.POST,
	        authType: _request.AuthType.Default,
	        headers: {
	          'X-Kinvey-Content-Type': metadata.mimeType
	        },
	        url: _url2.default.format({
	          protocol: this.client.apiProtocol,
	          host: this.client.apiHost,
	          pathname: isUpdate ? this.pathname + '/' + metadata._id : this.pathname
	        }),
	        properties: options.properties,
	        timeout: options.timeout,
	        body: metadata,
	        client: this.client
	      });
	      return request.execute();
	    }
	  }, {
	    key: 'makeStatusCheckRequest',
	    value: function makeStatusCheckRequest(uploadUrl, requiredHeaders, metadata, timeout) {
	      var headers = new _request.Headers(requiredHeaders);
	      headers.set('content-type', metadata.mimeType);
	      headers.set('content-range', 'bytes */' + metadata.size);
	      var request = new _request.NetworkRequest({
	        method: _request.RequestMethod.PUT,
	        url: uploadUrl,
	        timeout: timeout,
	        headers: headers
	      });
	      return request.execute();
	    }
	  }, {
	    key: 'retriableUpload',
	    value: function retriableUpload(uploadUrl, file, metadata, options) {
	      var _this5 = this;

	      options = (0, _assign2.default)({
	        count: 0,
	        start: 0,
	        maxBackoff: 32 * 1000
	      }, options);

	      _utils.Log.debug('Start file upload');
	      _utils.Log.debug('File upload headers', options.headers);
	      _utils.Log.debug('File upload upload url', _url2.default);
	      _utils.Log.debug('File upload file', file);
	      _utils.Log.debug('File upload metadata', metadata);
	      _utils.Log.debug('File upload options', options);

	      return this.makeUploadRequest(uploadUrl, file, metadata, options).then(function (response) {
	        _utils.Log.debug('File upload response', response);

	        if (response.isClientError()) {
	          return _es6Promise2.default.reject(response.error);
	        }
	        if (!response.isSuccess() && !response.isServerError() && response.statusCode !== 308) {
	          var error = new _errors.KinveyError('Unexpected response for upload file request.', false, response.statusCode, response.headers.get('X-Kinvey-Request-ID'));
	          return _es6Promise2.default.reject(error);
	        }

	        return response;
	      }).then(function (response) {
	        var backoff = 0;

	        if (response.isServerError()) {
	          _utils.Log.debug('File upload server error. Probably network congestion.', response.statusCode, response.data);
	          backoff = Math.pow(2, options.count) + randomInt(1, 1001);

	          if (backoff >= options.maxBackoff) {
	            return _es6Promise2.default.reject(response.error);
	          }

	          _utils.Log.debug('File upload will try again in ' + backoff + ' seconds.');

	          return new _es6Promise2.default(function (resolve) {
	            setTimeout(function () {
	              options.count += 1;
	              resolve(true);
	            }, backoff);
	          });
	        }

	        if (response.statusCode === 308) {
	          _utils.Log.debug('File upload was incomplete (statusCode 308). Trying to upload the remainder of file.');
	          options.start = getStartIndex(response.headers.get('range'), metadata.size);
	          return new _es6Promise2.default(function (resolve) {
	            setTimeout(function () {
	              options.count = 0;
	              resolve(true);
	            }, backoff);
	          });
	        }

	        return new _es6Promise2.default(function (resolve) {
	          setTimeout(function () {
	            resolve(false);
	          }, backoff);
	        });
	      }).then(function (shouldRetry) {
	        if (shouldRetry) {
	          return _this5.retriableUpload(uploadUrl, file, metadata, options);
	        }

	        return null;
	      });
	    }
	  }, {
	    key: 'makeUploadRequest',
	    value: function makeUploadRequest(uploadUrl, file, metadata, options) {
	      var headers = new _request.Headers(options.headers);
	      headers.set('content-type', metadata.mimeType);
	      headers.set('content-range', 'bytes ' + options.start + '-' + (metadata.size - 1) + '/' + metadata.size);
	      var request = new _request.NetworkRequest({
	        method: _request.RequestMethod.PUT,
	        url: uploadUrl,
	        headers: headers,
	        body: (0, _isFunction2.default)(file.slice) ? file.slice(options.start) : file,
	        timeout: options.timeout
	      });
	      return request.execute();
	    }
	  }, {
	    key: 'create',
	    value: function create(file, metadata, options) {
	      return this.upload(file, metadata, options);
	    }
	  }, {
	    key: 'update',
	    value: function update(file, metadata, options) {
	      return this.upload(file, metadata, options);
	    }
	  }, {
	    key: 'remove',
	    value: function remove() {
	      throw new _errors.KinveyError('Please use removeById() to remove files one by one.');
	    }
	  }, {
	    key: 'pathname',
	    get: function get() {
	      return '/blob/' + this.client.appKey;
	    }
	  }]);

	  return FileStore;
	}(_networkstore2.default);

	exports.default = FileStore;

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _es6Promise = __webpack_require__(47);

	var _es6Promise2 = _interopRequireDefault(_es6Promise);

	var _isArray = __webpack_require__(119);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _isString = __webpack_require__(131);

	var _isString2 = _interopRequireDefault(_isString);

	var _url = __webpack_require__(67);

	var _url2 = _interopRequireDefault(_url);

	var _request = __webpack_require__(244);

	var _errors = __webpack_require__(2);

	var _utils = __webpack_require__(40);

	var _query = __webpack_require__(275);

	var _query2 = _interopRequireDefault(_query);

	var _networkstore = __webpack_require__(332);

	var _networkstore2 = _interopRequireDefault(_networkstore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UserStore = function (_NetworkStore) {
	  _inherits(UserStore, _NetworkStore);

	  function UserStore(options) {
	    _classCallCheck(this, UserStore);

	    return _possibleConstructorReturn(this, (UserStore.__proto__ || Object.getPrototypeOf(UserStore)).call(this, null, options));
	  }

	  _createClass(UserStore, [{
	    key: 'lookup',
	    value: function lookup(query) {
	      var _this2 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var stream = _utils.KinveyObservable.create(function (observer) {
	        if ((0, _utils.isDefined)(query) && !(query instanceof _query2.default)) {
	          return observer.error(new _errors.KinveyError('Invalid query. It must be an instance of the Query class.'));
	        }

	        var request = new _request.KinveyRequest({
	          method: _request.RequestMethod.POST,
	          authType: _request.AuthType.Default,
	          url: _url2.default.format({
	            protocol: _this2.client.apiProtocol,
	            host: _this2.client.apiHost,
	            pathname: _this2.pathname + '/_lookup'
	          }),
	          properties: options.properties,
	          body: (0, _utils.isDefined)(query) ? query.toPlainObject().filter : null,
	          timeout: options.timeout,
	          client: _this2.client
	        });

	        return request.execute().then(function (response) {
	          return response.data;
	        }).then(function (data) {
	          return observer.next(data);
	        }).then(function () {
	          return observer.complete();
	        }).catch(function (error) {
	          return observer.error(error);
	        });
	      });
	      return stream;
	    }
	  }, {
	    key: 'create',
	    value: function create() {
	      return _es6Promise2.default.reject(new _errors.KinveyError('Please use `User.signup()` to create a user.'));
	    }
	  }, {
	    key: 'update',
	    value: function update(data) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      if (!data) {
	        return _es6Promise2.default.reject(new _errors.KinveyError('No user was provided to be updated.'));
	      }

	      if ((0, _isArray2.default)(data)) {
	        return _es6Promise2.default.reject(new _errors.KinveyError('Only one user can be updated at one time.', data));
	      }

	      if (!data._id) {
	        return _es6Promise2.default.reject(new _errors.KinveyError('User must have an _id.'));
	      }

	      return _get(UserStore.prototype.__proto__ || Object.getPrototypeOf(UserStore.prototype), 'update', this).call(this, data, options);
	    }
	  }, {
	    key: 'exists',
	    value: function exists(username) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var request = new _request.KinveyRequest({
	        method: _request.RequestMethod.POST,
	        authType: _request.AuthType.App,
	        url: _url2.default.format({
	          protocol: this.client.apiProtocol,
	          host: this.client.apiHost,
	          pathname: '/rpc/' + this.client.appKey + '/check-username-exists'
	        }),
	        properties: options.properties,
	        data: { username: username },
	        timeout: options.timeout,
	        client: this.client
	      });
	      return request.execute().then(function (response) {
	        return response.data;
	      }).then(function () {
	        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	        return data.usernameExists === true;
	      });
	    }
	  }, {
	    key: 'removeById',
	    value: function removeById(id) {
	      var _this3 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var stream = _utils.KinveyObservable.create(function (observer) {
	        if ((0, _utils.isDefined)(id) === false) {
	          return observer.error(new _errors.KinveyError('An id was not provided.', 'Please provide a valid id for a user that you would like to remove.'));
	        }

	        if ((0, _isString2.default)(id) === false) {
	          return observer.error(new _errors.KinveyError('The id provided is not a string.', 'Please provide a valid id for a user that you would like to remove.'));
	        }

	        var request = new _request.KinveyRequest({
	          method: _request.RequestMethod.DELETE,
	          authType: _request.AuthType.Default,
	          url: _url2.default.format({
	            protocol: _this3.client.apiProtocol,
	            host: _this3.client.apiHost,
	            pathname: _this3.pathname + '/' + id,
	            query: options.hard === true ? { hard: true } : undefined
	          }),
	          properties: options.properties,
	          timeout: options.timeout
	        });
	        return request.execute().then(function (response) {
	          return response.data;
	        }).then(function (data) {
	          return observer.next(data);
	        }).then(function () {
	          return observer.complete();
	        }).catch(function (error) {
	          return observer.error(error);
	        });
	      });

	      return stream.toPromise();
	    }
	  }, {
	    key: 'pathname',
	    get: function get() {
	      return '/user/' + this.client.appKey;
	    }
	  }]);

	  return UserStore;
	}(_networkstore2.default);

	exports.default = UserStore;

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _es6Promise = __webpack_require__(47);

	var _es6Promise2 = _interopRequireDefault(_es6Promise);

	var _isString = __webpack_require__(131);

	var _isString2 = _interopRequireDefault(_isString);

	var _url = __webpack_require__(67);

	var _url2 = _interopRequireDefault(_url);

	var _errors = __webpack_require__(2);

	var _client = __webpack_require__(288);

	var _client2 = _interopRequireDefault(_client);

	var _request = __webpack_require__(244);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CustomEndpoint = function () {
	  function CustomEndpoint() {
	    _classCallCheck(this, CustomEndpoint);

	    throw new _errors.KinveyError('Not allowed to create an instance of the `CustomEndpoint` class.', 'Please use `CustomEndpoint.execute()` function.');
	  }

	  _createClass(CustomEndpoint, null, [{
	    key: 'execute',
	    value: function execute(endpoint, args) {
	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      var client = options.client || _client2.default.sharedInstance();

	      if (!endpoint) {
	        return _es6Promise2.default.reject(new _errors.KinveyError('An endpoint argument is required.'));
	      }

	      if (!(0, _isString2.default)(endpoint)) {
	        return _es6Promise2.default.reject(new _errors.KinveyError('The endpoint argument must be a string.'));
	      }

	      var request = new _request.KinveyRequest({
	        method: _request.RequestMethod.POST,
	        authType: _request.AuthType.Default,
	        url: _url2.default.format({
	          protocol: client.apiProtocol,
	          host: client.apiHost,
	          pathname: '/rpc/' + client.appKey + '/custom/' + endpoint
	        }),
	        properties: options.properties,
	        body: args,
	        timeout: options.timeout,
	        client: client
	      });
	      return request.execute().then(function (response) {
	        return response.data;
	      });
	    }
	  }]);

	  return CustomEndpoint;
	}();

	exports.default = CustomEndpoint;

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Kinvey = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _es6Promise = __webpack_require__(47);

	var _es6Promise2 = _interopRequireDefault(_es6Promise);

	var _errors = __webpack_require__(2);

	var _utils = __webpack_require__(40);

	var _client = __webpack_require__(288);

	var _client2 = _interopRequireDefault(_client);

	var _endpoint = __webpack_require__(338);

	var _endpoint2 = _interopRequireDefault(_endpoint);

	var _query = __webpack_require__(275);

	var _query2 = _interopRequireDefault(_query);

	var _aggregation = __webpack_require__(286);

	var _aggregation2 = _interopRequireDefault(_aggregation);

	var _datastore = __webpack_require__(139);

	var _datastore2 = _interopRequireDefault(_datastore);

	var _entity = __webpack_require__(328);

	var _identity = __webpack_require__(321);

	var _request = __webpack_require__(244);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Kinvey = function () {
	  function Kinvey() {
	    _classCallCheck(this, Kinvey);
	  }

	  _createClass(Kinvey, null, [{
	    key: 'initialize',
	    value: function initialize(config) {
	      var client = Kinvey.init(config);
	      return _es6Promise2.default.resolve(_entity.User.getActiveUser(client));
	    }
	  }, {
	    key: 'init',
	    value: function init() {
	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	      if ((0, _utils.isDefined)(options.appKey) === false) {
	        throw new _errors.KinveyError('No App Key was provided.' + ' Unable to create a new Client without an App Key.');
	      }

	      if ((0, _utils.isDefined)(options.appSecret) === false && (0, _utils.isDefined)(options.masterSecret) === false) {
	        throw new _errors.KinveyError('No App Secret or Master Secret was provided.' + ' Unable to create a new Client without an App Secret.');
	      }

	      return _client2.default.init(options);
	    }
	  }, {
	    key: 'ping',
	    value: function ping() {
	      var client = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _client2.default.sharedInstance();

	      var request = new _request.KinveyRequest({
	        method: _request.RequestMethod.GET,
	        authType: _request.AuthType.All,
	        url: this.client.apiHostname + '/appdata/' + client.appKey
	      });

	      return request.execute().then(function (response) {
	        return response.data;
	      });
	    }
	  }, {
	    key: 'client',
	    get: function get() {
	      return _client2.default.sharedInstance();
	    }
	  }, {
	    key: 'appVersion',
	    get: function get() {
	      return this.client.appVersion;
	    },
	    set: function set(appVersion) {
	      this.client.appVersion = appVersion;
	    }
	  }]);

	  return Kinvey;
	}();

	Kinvey.Acl = _entity.Acl;
	Kinvey.Aggregation = _aggregation2.default;
	Kinvey.AuthorizationGrant = _identity.AuthorizationGrant;
	Kinvey.CustomEndpoint = _endpoint2.default;
	Kinvey.DataStore = _datastore2.default;
	Kinvey.DataStoreType = _datastore.DataStoreType;
	Kinvey.Files = new _datastore.FileStore();
	Kinvey.Group = _aggregation2.default;
	Kinvey.Log = _utils.Log;
	Kinvey.Metadata = _entity.Metadata;
	Kinvey.Query = _query2.default;
	Kinvey.SyncOperation = _datastore.SyncOperation;
	Kinvey.User = _entity.User;

	Kinvey.ActiveUserError = _errors.ActiveUserError;
	Kinvey.APIVersionNotAvailableError = _errors.APIVersionNotAvailableError;
	Kinvey.APIVersionNotImplementedError = _errors.APIVersionNotImplementedError;
	Kinvey.AppProblemError = _errors.AppProblemError;
	Kinvey.BadRequestError = _errors.BadRequestError;
	Kinvey.BLError = _errors.BLError;
	Kinvey.CORSDisabledError = _errors.CORSDisabledError;
	Kinvey.DuplicateEndUsersError = _errors.DuplicateEndUsersError;
	Kinvey.FeatureUnavailableError = _errors.FeatureUnavailableError;
	Kinvey.IncompleteRequestBodyError = _errors.IncompleteRequestBodyError;
	Kinvey.IndirectCollectionAccessDisallowedError = _errors.IndirectCollectionAccessDisallowedError;
	Kinvey.InsufficientCredentialsError = _errors.InsufficientCredentialsError;
	Kinvey.InvalidCredentialsError = _errors.InvalidCredentialsError;
	Kinvey.InvalidIdentifierError = _errors.InvalidIdentifierError;
	Kinvey.InvalidQuerySyntaxError = _errors.InvalidQuerySyntaxError;
	Kinvey.JSONParseError = _errors.JSONParseError;
	Kinvey.KinveyError = _errors.KinveyError;
	Kinvey.KinveyInternalErrorRetry = _errors.KinveyInternalErrorRetry;
	Kinvey.KinveyInternalErrorStop = _errors.KinveyInternalErrorStop;
	Kinvey.MissingQueryError = _errors.MissingQueryError;
	Kinvey.MissingRequestHeaderError = _errors.MissingRequestHeaderError;
	Kinvey.MissingRequestParameterError = _errors.MissingRequestParameterError;
	Kinvey.MobileIdentityConnectError = _errors.MobileIdentityConnectError;
	Kinvey.NoActiveUserError = _errors.NoActiveUserError;
	Kinvey.NetworkConnectionError = _errors.NetworkConnectionError;
	Kinvey.NoResponseError = _errors.NoResponseError;
	Kinvey.NotFoundError = _errors.NotFoundError;
	Kinvey.ParameterValueOutOfRangeError = _errors.ParameterValueOutOfRangeError;
	Kinvey.PopupError = _errors.PopupError;
	Kinvey.QueryError = _errors.QueryError;
	Kinvey.ServerError = _errors.ServerError;
	Kinvey.StaleRequestError = _errors.StaleRequestError;
	Kinvey.SyncError = _errors.SyncError;
	Kinvey.TimeoutError = _errors.TimeoutError;
	Kinvey.UserAlreadyExistsError = _errors.UserAlreadyExistsError;
	Kinvey.WritesToCollectionDisallowedError = _errors.WritesToCollectionDisallowedError;

	Kinvey.CacheRack = _request.CacheRack;
	Kinvey.NetworkRack = _request.NetworkRack;
	Kinvey.Rack = _request.Rack;

	exports.Kinvey = Kinvey;
	exports.default = Kinvey;

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Kinvey = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _es6Promise = __webpack_require__(47);

	var _url = __webpack_require__(67);

	var _url2 = _interopRequireDefault(_url);

	var _export = __webpack_require__(1);

	var _client = __webpack_require__(341);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var USERS_NAMESPACE = 'user';
	var ACTIVE_USER_COLLECTION_NAME = 'kinvey_active_user';

	var Kinvey = exports.Kinvey = function (_CoreKinvey) {
	  _inherits(Kinvey, _CoreKinvey);

	  function Kinvey() {
	    _classCallCheck(this, Kinvey);

	    return _possibleConstructorReturn(this, (Kinvey.__proto__ || Object.getPrototypeOf(Kinvey)).apply(this, arguments));
	  }

	  _createClass(Kinvey, null, [{
	    key: 'initialize',
	    value: function initialize(config) {
	      var client = Kinvey.init(config);
	      var activeUser = _export.User.getActiveUser(client);

	      if ((0, _export.isDefined)(activeUser)) {
	        return _es6Promise.Promise.resolve(activeUser);
	      }

	      var request = new _export.CacheRequest({
	        method: _export.RequestMethod.GET,
	        url: _url2.default.format({
	          protocol: client.apiProtocol,
	          host: client.apiHost,
	          pathname: '/' + USERS_NAMESPACE + '/' + client.appKey + '/' + ACTIVE_USER_COLLECTION_NAME
	        })
	      });
	      return request.execute().then(function (response) {
	        return response.data;
	      }).then(function (activeUsers) {
	        if (activeUsers.length > 0) {
	          return activeUsers[0];
	        }

	        return null;
	      }).then(function (activeUser) {
	        if ((0, _export.isDefined)(activeUser)) {
	          if ((0, _export.isDefined)(activeUser.data)) {
	            return client.setActiveUser(activeUser.data);
	          }

	          return client.setActiveUser(activeUser);
	        }

	        return activeUser;
	      }).then(function () {
	        return _export.User.getActiveUser(client);
	      });
	    }
	  }, {
	    key: 'init',
	    value: function init() {
	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	      if (!(0, _export.isDefined)(options.appKey)) {
	        throw new _export.KinveyError('No App Key was provided.' + ' Unable to create a new Client without an App Key.');
	      }

	      if (!(0, _export.isDefined)(options.appSecret) && !(0, _export.isDefined)(options.masterSecret)) {
	        throw new _export.KinveyError('No App Secret or Master Secret was provided.' + ' Unable to create a new Client without an App Secret.');
	      }

	      return _client.Client.init(options);
	    }
	  }]);

	  return Kinvey;
	}(_export.Kinvey);

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Client = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _isString = __webpack_require__(131);

	var _isString2 = _interopRequireDefault(_isString);

	var _export = __webpack_require__(1);

	var _utils = __webpack_require__(40);

	var _localStorageFallback = __webpack_require__(342);

	var _localStorageFallback2 = _interopRequireDefault(_localStorageFallback);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ActiveUserStorage = function () {
	  function ActiveUserStorage() {
	    _classCallCheck(this, ActiveUserStorage);
	  }

	  _createClass(ActiveUserStorage, [{
	    key: 'get',
	    value: function get(key) {
	      if (!(0, _isString2.default)(key)) {
	        throw new _export.KinveyError('ActiveUserStorage key must be a string.');
	      }

	      try {
	        return JSON.parse(_localStorageFallback2.default.getItem(key));
	      } catch (e) {
	        _utils.Log.debug('Unable to parse stored active user.', e);
	        return null;
	      }
	    }
	  }, {
	    key: 'set',
	    value: function set(key, value) {
	      if (!(0, _isString2.default)(key)) {
	        throw new _export.KinveyError('ActiveUserStorage key must be a string.');
	      }

	      if ((0, _export.isDefined)(value)) {
	        _localStorageFallback2.default.setItem(key, JSON.stringify(value));
	      } else {
	        _localStorageFallback2.default.removeItem(key);
	      }

	      return value;
	    }
	  }]);

	  return ActiveUserStorage;
	}();

	var Client = exports.Client = function (_CoreClient) {
	  _inherits(Client, _CoreClient);

	  function Client() {
	    _classCallCheck(this, Client);

	    return _possibleConstructorReturn(this, (Client.__proto__ || Object.getPrototypeOf(Client)).apply(this, arguments));
	  }

	  _createClass(Client, null, [{
	    key: 'init',
	    value: function init(config) {
	      var client = _export.Client.init(config);
	      client.activeUserStorage = new ActiveUserStorage();
	      return client;
	    }
	  }]);

	  return Client;
	}(_export.Client);

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MemoryStorage = exports.CookieStorage = exports.isSupported = exports.storage = undefined;

	var _isSupported = __webpack_require__(343);

	var _isSupported2 = _interopRequireDefault(_isSupported);

	var _CookieStorage = __webpack_require__(344);

	var _CookieStorage2 = _interopRequireDefault(_CookieStorage);

	var _MemoryStorage = __webpack_require__(346);

	var _MemoryStorage2 = _interopRequireDefault(_MemoryStorage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var storage = null;

	if ((0, _isSupported2.default)('localStorage')) {
	  // use localStorage
	  exports.storage = storage = window.localStorage;
	} else if ((0, _isSupported2.default)('sessionStorage')) {
	  // use sessionStorage
	  exports.storage = storage = window.sessionStorage;
	} else if ((0, _isSupported2.default)('cookieStorage')) {
	  // use cookies
	  exports.storage = storage = new _CookieStorage2.default();
	} else {
	  // use memory
	  exports.storage = storage = new _MemoryStorage2.default();
	}

	exports.default = storage;
	exports.storage = storage;
	exports.isSupported = _isSupported2.default;
	exports.CookieStorage = _CookieStorage2.default;
	exports.MemoryStorage = _MemoryStorage2.default;

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isSupported;

	var _CookieStorage = __webpack_require__(344);

	var TEST_KEY = '__test';

	function hasStorage(name) {
	  try {
	    var storage = window[name];
	    storage.setItem(TEST_KEY, '1');
	    storage.removeItem(TEST_KEY);
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	function isSupported() {
	  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'localStorage';

	  var storage = String(name).replace(/storage$/i, '').toLowerCase();

	  if (storage === 'local') {
	    return hasStorage('localStorage');
	  }

	  if (storage === 'session') {
	    return hasStorage('sessionStorage');
	  }

	  if (storage === 'cookie') {
	    return (0, _CookieStorage.hasCookies)();
	  }

	  if (storage === 'memory') {
	    return true;
	  }

	  throw new Error('Storage method `' + name + '` is not available.\n    Please use one of the following: localStorage, sessionStorage, cookieStorage, memoryStorage.');
	}

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.hasCookies = hasCookies;

	var _cookie = __webpack_require__(345);

	var _cookie2 = _interopRequireDefault(_cookie);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var prefix = 'lS_';

	var CookieStorage = function () {
	  function CookieStorage() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, CookieStorage);

	    this.cookieOptions = Object.assign({ path: '/' }, options);
	    prefix = options.prefix || prefix;
	  }

	  _createClass(CookieStorage, [{
	    key: 'getItem',
	    value: function getItem(key) {
	      var cookies = _cookie2.default.parse(document.cookie);
	      if (!cookies || !cookies.hasOwnProperty(prefix + key)) {
	        return null;
	      }
	      return cookies[prefix + key];
	    }
	  }, {
	    key: 'setItem',
	    value: function setItem(key, value) {
	      document.cookie = _cookie2.default.serialize(prefix + key, value, this.cookieOptions);
	      return value;
	    }
	  }, {
	    key: 'removeItem',
	    value: function removeItem(key) {
	      var options = Object.assign({}, this.cookieOptions, { maxAge: -1 });
	      document.cookie = _cookie2.default.serialize(prefix + key, '', options);
	      return null;
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var cookies = _cookie2.default.parse(document.cookie);
	      for (var key in cookies) {
	        if (key.indexOf(prefix) === 0) {
	          this.removeItem(key.substr(prefix.length));
	        }
	      }

	      return null;
	    }
	  }]);

	  return CookieStorage;
	}();

	exports.default = CookieStorage;
	function hasCookies() {
	  var storage = new CookieStorage();

	  try {
	    var TEST_KEY = '__test';
	    storage.setItem(TEST_KEY, '1');
	    var value = storage.getItem(TEST_KEY);
	    storage.removeItem(TEST_KEY);

	    return value === '1';
	  } catch (e) {
	    return false;
	  }
	}

/***/ }),
/* 345 */
/***/ (function(module, exports) {

	/*!
	 * cookie
	 * Copyright(c) 2012-2014 Roman Shtylman
	 * Copyright(c) 2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */

	'use strict';

	/**
	 * Module exports.
	 * @public
	 */

	exports.parse = parse;
	exports.serialize = serialize;

	/**
	 * Module variables.
	 * @private
	 */

	var decode = decodeURIComponent;
	var encode = encodeURIComponent;
	var pairSplitRegExp = /; */;

	/**
	 * RegExp to match field-content in RFC 7230 sec 3.2
	 *
	 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
	 * field-vchar   = VCHAR / obs-text
	 * obs-text      = %x80-FF
	 */

	var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

	/**
	 * Parse a cookie header.
	 *
	 * Parse the given cookie header string into an object
	 * The object has the various cookies as keys(names) => values
	 *
	 * @param {string} str
	 * @param {object} [options]
	 * @return {object}
	 * @public
	 */

	function parse(str, options) {
	  if (typeof str !== 'string') {
	    throw new TypeError('argument str must be a string');
	  }

	  var obj = {}
	  var opt = options || {};
	  var pairs = str.split(pairSplitRegExp);
	  var dec = opt.decode || decode;

	  for (var i = 0; i < pairs.length; i++) {
	    var pair = pairs[i];
	    var eq_idx = pair.indexOf('=');

	    // skip things that don't look like key=value
	    if (eq_idx < 0) {
	      continue;
	    }

	    var key = pair.substr(0, eq_idx).trim()
	    var val = pair.substr(++eq_idx, pair.length).trim();

	    // quoted values
	    if ('"' == val[0]) {
	      val = val.slice(1, -1);
	    }

	    // only assign once
	    if (undefined == obj[key]) {
	      obj[key] = tryDecode(val, dec);
	    }
	  }

	  return obj;
	}

	/**
	 * Serialize data into a cookie header.
	 *
	 * Serialize the a name value pair into a cookie string suitable for
	 * http headers. An optional options object specified cookie parameters.
	 *
	 * serialize('foo', 'bar', { httpOnly: true })
	 *   => "foo=bar; httpOnly"
	 *
	 * @param {string} name
	 * @param {string} val
	 * @param {object} [options]
	 * @return {string}
	 * @public
	 */

	function serialize(name, val, options) {
	  var opt = options || {};
	  var enc = opt.encode || encode;

	  if (typeof enc !== 'function') {
	    throw new TypeError('option encode is invalid');
	  }

	  if (!fieldContentRegExp.test(name)) {
	    throw new TypeError('argument name is invalid');
	  }

	  var value = enc(val);

	  if (value && !fieldContentRegExp.test(value)) {
	    throw new TypeError('argument val is invalid');
	  }

	  var str = name + '=' + value;

	  if (null != opt.maxAge) {
	    var maxAge = opt.maxAge - 0;
	    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
	    str += '; Max-Age=' + Math.floor(maxAge);
	  }

	  if (opt.domain) {
	    if (!fieldContentRegExp.test(opt.domain)) {
	      throw new TypeError('option domain is invalid');
	    }

	    str += '; Domain=' + opt.domain;
	  }

	  if (opt.path) {
	    if (!fieldContentRegExp.test(opt.path)) {
	      throw new TypeError('option path is invalid');
	    }

	    str += '; Path=' + opt.path;
	  }

	  if (opt.expires) {
	    if (typeof opt.expires.toUTCString !== 'function') {
	      throw new TypeError('option expires is invalid');
	    }

	    str += '; Expires=' + opt.expires.toUTCString();
	  }

	  if (opt.httpOnly) {
	    str += '; HttpOnly';
	  }

	  if (opt.secure) {
	    str += '; Secure';
	  }

	  if (opt.sameSite) {
	    var sameSite = typeof opt.sameSite === 'string'
	      ? opt.sameSite.toLowerCase() : opt.sameSite;

	    switch (sameSite) {
	      case true:
	        str += '; SameSite=Strict';
	        break;
	      case 'lax':
	        str += '; SameSite=Lax';
	        break;
	      case 'strict':
	        str += '; SameSite=Strict';
	        break;
	      default:
	        throw new TypeError('option sameSite is invalid');
	    }
	  }

	  return str;
	}

	/**
	 * Try decoding a string using a decoding function.
	 *
	 * @param {string} str
	 * @param {function} decode
	 * @private
	 */

	function tryDecode(str, decode) {
	  try {
	    return decode(str);
	  } catch (e) {
	    return str;
	  }
	}


/***/ }),
/* 346 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MemoryStorage = function () {
	  function MemoryStorage() {
	    _classCallCheck(this, MemoryStorage);

	    this._data = {};
	  }

	  _createClass(MemoryStorage, [{
	    key: "getItem",
	    value: function getItem(key) {
	      return this._data.hasOwnProperty(key) ? this._data[key] : undefined;
	    }
	  }, {
	    key: "setItem",
	    value: function setItem(key, value) {
	      return this._data[key] = String(value);
	    }
	  }, {
	    key: "removeItem",
	    value: function removeItem(key) {
	      return delete this._data[key];
	    }
	  }, {
	    key: "clear",
	    value: function clear() {
	      return this._data = {};
	    }
	  }]);

	  return MemoryStorage;
	}();

	exports.default = MemoryStorage;

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HttpMiddleware = exports.CacheMiddleware = undefined;

	var _cache = __webpack_require__(348);

	var _cache2 = _interopRequireDefault(_cache);

	var _http = __webpack_require__(358);

	var _http2 = _interopRequireDefault(_http);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.CacheMiddleware = _cache2.default;
	exports.HttpMiddleware = _http2.default;

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _export = __webpack_require__(1);

	var _storage = __webpack_require__(349);

	var _storage2 = _interopRequireDefault(_storage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HTML5CacheMiddleware = function (_CacheMiddleware) {
	  _inherits(HTML5CacheMiddleware, _CacheMiddleware);

	  function HTML5CacheMiddleware() {
	    _classCallCheck(this, HTML5CacheMiddleware);

	    return _possibleConstructorReturn(this, (HTML5CacheMiddleware.__proto__ || Object.getPrototypeOf(HTML5CacheMiddleware)).apply(this, arguments));
	  }

	  _createClass(HTML5CacheMiddleware, [{
	    key: 'loadStorage',
	    value: function loadStorage(name) {
	      return new _storage2.default(name);
	    }
	  }]);

	  return HTML5CacheMiddleware;
	}(_export.CacheMiddleware);

	exports.default = HTML5CacheMiddleware;

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _export = __webpack_require__(1);

	var _storage = __webpack_require__(299);

	var _indexeddb = __webpack_require__(350);

	var _websql = __webpack_require__(351);

	var _webstorage = __webpack_require__(352);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Storage = function (_CoreStorage) {
	  _inherits(Storage, _CoreStorage);

	  function Storage() {
	    _classCallCheck(this, Storage);

	    return _possibleConstructorReturn(this, (Storage.__proto__ || Object.getPrototypeOf(Storage)).apply(this, arguments));
	  }

	  _createClass(Storage, [{
	    key: 'loadAdapter',
	    value: function loadAdapter() {
	      var _this2 = this;

	      return _websql.WebSQLAdapter.load(this.name).then(function (adapter) {
	        if ((0, _export.isDefined)(adapter) === false) {
	          return _indexeddb.IndexedDBAdapter.load(_this2.name);
	        }

	        return adapter;
	      }).then(function (adapter) {
	        if ((0, _export.isDefined)(adapter) === false) {
	          return _webstorage.LocalStorageAdapter.load(_this2.name);
	        }

	        return adapter;
	      }).then(function (adapter) {
	        if ((0, _export.isDefined)(adapter) === false) {
	          return _get(Storage.prototype.__proto__ || Object.getPrototypeOf(Storage.prototype), 'loadAdapter', _this2).call(_this2);
	        }

	        return adapter;
	      });
	    }
	  }]);

	  return Storage;
	}(_storage.Storage);

	exports.default = Storage;

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.IndexedDBAdapter = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _es6Promise = __webpack_require__(47);

	var _es6Promise2 = _interopRequireDefault(_es6Promise);

	var _export = __webpack_require__(1);

	var _forEach = __webpack_require__(280);

	var _forEach2 = _interopRequireDefault(_forEach);

	var _isString = __webpack_require__(131);

	var _isString2 = _interopRequireDefault(_isString);

	var _isArray = __webpack_require__(119);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _isFunction = __webpack_require__(85);

	var _isFunction2 = _interopRequireDefault(_isFunction);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var dbCache = {};
	var isSupported = void 0;

	var TransactionMode = {
	  ReadWrite: 'readwrite',
	  ReadOnly: 'readonly'
	};
	Object.freeze(TransactionMode);

	var IndexedDBAdapter = exports.IndexedDBAdapter = function () {
	  function IndexedDBAdapter(name) {
	    _classCallCheck(this, IndexedDBAdapter);

	    if ((0, _export.isDefined)(name) === false) {
	      throw new Error('A name is required to use the IndexedDB adapter.', name);
	    }

	    if ((0, _isString2.default)(name) === false) {
	      throw new Error('The name must be a string to use the IndexedDB adapter', name);
	    }

	    this.name = name;
	    this.inTransaction = false;
	    this.queue = [];
	  }

	  _createClass(IndexedDBAdapter, [{
	    key: 'openTransaction',
	    value: function openTransaction(collection) {
	      var write = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	      var success = arguments[2];

	      var _this = this;

	      var error = arguments[3];
	      var force = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

	      var indexedDB = global.indexedDB || global.webkitIndexedDB || global.mozIndexedDB || global.msIndexedDB;
	      var db = dbCache[this.name];

	      if ((0, _export.isDefined)(db)) {
	        var containsCollection = (0, _isFunction2.default)(db.objectStoreNames.contains) ? db.objectStoreNames.contains(collection) : db.objectStoreNames.indexOf(collection) !== -1;

	        if (containsCollection) {
	          try {
	            var mode = write ? TransactionMode.ReadWrite : TransactionMode.ReadOnly;
	            var txn = db.transaction(collection, mode);

	            if ((0, _export.isDefined)(txn)) {
	              return success(txn);
	            }

	            throw new _export.KinveyError('Unable to open a transaction for ' + collection + (' collection on the ' + this.name + ' IndexedDB database.'));
	          } catch (e) {
	            return error(e);
	          }
	        } else if (write === false) {
	          return error(new _export.NotFoundError('The ' + collection + ' collection was not found on' + (' the ' + this.name + ' IndexedDB database.')));
	        }
	      }

	      if (force === false && this.inTransaction) {
	        return this.queue.push(function () {
	          _this.openTransaction(collection, write, success, error);
	        });
	      }

	      // Switch flag
	      this.inTransaction = true;
	      var request = void 0;

	      try {
	        if ((0, _export.isDefined)(db)) {
	          var version = db.version + 1;
	          db.close();
	          request = indexedDB.open(this.name, version);
	        } else {
	          request = indexedDB.open(this.name);
	        }
	      } catch (e) {
	        error(e);
	      }

	      // If the database is opened with an higher version than its current, the
	      // `upgradeneeded` event is fired. Save the handle to the database, and
	      // create the collection.
	      request.onupgradeneeded = function (e) {
	        db = e.target.result;
	        dbCache[_this.name] = db;

	        if (write === true) {
	          db.createObjectStore(collection, { keyPath: '_id' });
	        }
	      };

	      // The `success` event is fired after `upgradeneeded` terminates.
	      // Save the handle to the database.
	      request.onsuccess = function (e) {
	        db = e.target.result;
	        dbCache[_this.name] = db;

	        // If a second instance of the same IndexedDB database performs an
	        // upgrade operation, the `versionchange` event is fired. Then, close the
	        // database to allow the external upgrade to proceed.
	        db.onversionchange = function () {
	          if ((0, _export.isDefined)(db)) {
	            db.close();
	            db = null;
	            dbCache[_this.name] = null;
	          }
	        };

	        // Try to obtain the collection handle by recursing. Append the handlers
	        // to empty the queue upon success and failure. Set the `force` flag so
	        // all but the current transaction remain queued.
	        var wrap = function wrap(done) {
	          var callbackFn = function callbackFn(arg) {
	            done(arg);

	            // Switch flag
	            _this.inTransaction = false;

	            // The database handle has been established, we can now safely empty
	            // the queue. The queue must be emptied before invoking the concurrent
	            // operations to avoid infinite recursion.
	            if (_this.queue.length > 0) {
	              var pending = _this.queue;
	              _this.queue = [];
	              (0, _forEach2.default)(pending, function (fn) {
	                fn.call(_this);
	              });
	            }
	          };
	          return callbackFn;
	        };

	        return _this.openTransaction(collection, write, wrap(success), wrap(error), true);
	      };

	      // The `blocked` event is not handled. In case such an event occurs, it
	      // will resolve itself since the `versionchange` event handler will close
	      // the conflicting database and enable the `blocked` event to continue.
	      request.onblocked = function () {};

	      // Handle errors
	      request.onerror = function (e) {
	        error(new Error('Unable to open the ' + _this.name + ' IndexedDB database.' + (' ' + e.target.error.message + '.')));
	      };

	      return request;
	    }
	  }, {
	    key: 'close',
	    value: function close() {
	      var db = dbCache[this.name];
	      if ((0, _export.isDefined)(db)) {
	        db.close();
	      }
	    }
	  }, {
	    key: 'find',
	    value: function find(collection) {
	      var _this2 = this;

	      return new _es6Promise2.default(function (resolve, reject) {
	        _this2.openTransaction(collection, false, function (txn) {
	          var store = txn.objectStore(collection);
	          var request = store.openCursor();
	          var entities = [];

	          request.onsuccess = function (e) {
	            var cursor = e.target.result;

	            if ((0, _export.isDefined)(cursor)) {
	              entities.push(cursor.value);
	              return cursor.continue();
	            }

	            return resolve(entities);
	          };

	          request.onerror = function (e) {
	            reject(e);
	          };
	        }, reject);
	      });
	    }
	  }, {
	    key: 'findById',
	    value: function findById(collection, id) {
	      var _this3 = this;

	      return new _es6Promise2.default(function (resolve, reject) {
	        _this3.openTransaction(collection, false, function (txn) {
	          var store = txn.objectStore(collection);
	          var request = store.get(id);

	          request.onsuccess = function (e) {
	            var entity = e.target.result;

	            if ((0, _export.isDefined)(entity)) {
	              resolve(entity);
	            } else {
	              reject(new _export.NotFoundError('An entity with _id = ' + id + ' was not found in the ' + collection + (' collection on the ' + _this3.name + ' IndexedDB database.')));
	            }
	          };

	          request.onerror = function () {
	            reject(new _export.NotFoundError('An entity with _id = ' + id + ' was not found in the ' + collection + (' collection on the ' + _this3.name + ' IndexedDB database.')));
	          };
	        }, reject);
	      });
	    }
	  }, {
	    key: 'save',
	    value: function save(collection, entities) {
	      var _this4 = this;

	      var singular = false;

	      if (!(0, _isArray2.default)(entities)) {
	        singular = true;
	        entities = [entities];
	      }

	      if (entities.length === 0) {
	        return _es6Promise2.default.resolve(null);
	      }

	      return new _es6Promise2.default(function (resolve, reject) {
	        _this4.openTransaction(collection, true, function (txn) {
	          var store = txn.objectStore(collection);

	          (0, _forEach2.default)(entities, function (entity) {
	            store.put(entity);
	          });

	          txn.oncomplete = function () {
	            resolve(singular ? entities[0] : entities);
	          };

	          txn.onerror = function (e) {
	            reject(new _export.KinveyError('An error occurred while saving the entities to the ' + collection + (' collection on the ' + _this4.name + ' IndexedDB database. ' + e.target.error.message + '.')));
	          };
	        }, reject);
	      });
	    }
	  }, {
	    key: 'removeById',
	    value: function removeById(collection, id) {
	      var _this5 = this;

	      return new _es6Promise2.default(function (resolve, reject) {
	        _this5.openTransaction(collection, true, function (txn) {
	          var store = txn.objectStore(collection);
	          var request = store.get(id);
	          store.delete(id);

	          txn.oncomplete = function () {
	            var entity = request.result;

	            if ((0, _export.isDefined)(entity)) {
	              resolve({ count: 1 });
	            } else {
	              reject(new _export.NotFoundError('An entity with id = ' + id + ' was not found in the ' + collection + (' collection on the ' + _this5.name + ' IndexedDB database.')));
	            }
	          };

	          txn.onerror = function () {
	            reject(new _export.NotFoundError('An entity with id = ' + id + ' was not found in the ' + collection + (' collection on the ' + _this5.name + ' IndexedDB database.')));
	          };
	        }, reject);
	      });
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var _this6 = this;

	      // Close the open DB to prevent from blocking the deleteDatabase operation
	      this.close();

	      // Delete the database
	      return new _es6Promise2.default(function (resolve, reject) {
	        var indexedDB = global.indexedDB || global.webkitIndexedDB || global.mozIndexedDB || global.msIndexedDB;
	        var request = indexedDB.deleteDatabase(_this6.name);

	        request.onsuccess = function () {
	          dbCache = {};
	          resolve();
	        };

	        request.onerror = function (e) {
	          reject(new _export.KinveyError('An error occurred while clearing the ' + _this6.name + ' IndexedDB database.' + (' ' + e.target.error.message + '.')));
	        };

	        request.onblocked = function () {
	          reject(new _export.KinveyError('The ' + _this6.name + ' IndexedDB database could not be cleared' + ' due to the operation being blocked.'));
	        };
	      });
	    }
	  }], [{
	    key: 'load',
	    value: function load(name) {
	      var indexedDB = global.indexedDB || global.webkitIndexedDB || global.mozIndexedDB || global.msIndexedDB;
	      var adapter = new IndexedDBAdapter(name);

	      if ((0, _export.isDefined)(indexedDB) === false) {
	        return _es6Promise2.default.resolve(undefined);
	      }

	      if ((0, _export.isDefined)(isSupported)) {
	        if (isSupported) {
	          return _es6Promise2.default.resolve(adapter);
	        }

	        return _es6Promise2.default.resolve(undefined);
	      }

	      return adapter.save('__testSupport', { _id: '1' }).then(function () {
	        isSupported = true;
	        return adapter;
	      }).catch(function () {
	        isSupported = false;
	        return undefined;
	      });
	    }
	  }]);

	  return IndexedDBAdapter;
	}();
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.WebSQLAdapter = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _es6Promise = __webpack_require__(47);

	var _es6Promise2 = _interopRequireDefault(_es6Promise);

	var _export = __webpack_require__(1);

	var _map = __webpack_require__(242);

	var _map2 = _interopRequireDefault(_map);

	var _forEach = __webpack_require__(280);

	var _forEach2 = _interopRequireDefault(_forEach);

	var _isArray = __webpack_require__(119);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _isFunction = __webpack_require__(85);

	var _isFunction2 = _interopRequireDefault(_isFunction);

	var _isString = __webpack_require__(131);

	var _isString2 = _interopRequireDefault(_isString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var idAttribute = process && process.env && process.env.KINVEY_ID_ATTRIBUTE || '_id' || '_id';
	var masterCollectionName = 'sqlite_master';
	var size = 5 * 1000 * 1000; // Database size in bytes
	var dbCache = {};
	var isSupported = void 0;

	var WebSQLAdapter = exports.WebSQLAdapter = function () {
	  function WebSQLAdapter() {
	    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'kinvey';

	    _classCallCheck(this, WebSQLAdapter);

	    if ((0, _export.isDefined)(name) === false) {
	      throw new _export.KinveyError('A name is required to use the WebSQL adapter.', name);
	    }

	    if ((0, _isString2.default)(name) === false) {
	      throw new _export.KinveyError('The name must be a string to use the WebSQL adapter', name);
	    }

	    this.name = name;
	  }

	  _createClass(WebSQLAdapter, [{
	    key: 'openTransaction',
	    value: function openTransaction(collection, query, parameters) {
	      var _this = this;

	      var write = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	      var db = dbCache[this.name];
	      var escapedCollection = '"' + collection + '"';
	      var isMaster = collection === masterCollectionName;
	      var isMulti = (0, _isArray2.default)(query);
	      query = isMulti ? query : [[query, parameters]];

	      return new _es6Promise2.default(function (resolve, reject) {
	        try {
	          if ((0, _export.isDefined)(db) === false) {
	            db = global.openDatabase(_this.name, 1, 'Kinvey Cache', size);
	            dbCache[_this.name] = db;
	          }

	          var writeTxn = write || (0, _isFunction2.default)(db.readTransaction) === false;
	          db[writeTxn ? 'transaction' : 'readTransaction'](function (tx) {
	            if (write && isMaster === false) {
	              tx.executeSql('CREATE TABLE IF NOT EXISTS ' + escapedCollection + ' ' + '(key BLOB PRIMARY KEY NOT NULL, value BLOB NOT NULL)');
	            }

	            var pending = query.length;
	            var responses = [];

	            if (pending === 0) {
	              resolve(isMulti ? responses : responses.shift());
	            } else {
	              (0, _forEach2.default)(query, function (parts) {
	                var sql = parts[0].replace('#{collection}', escapedCollection);

	                tx.executeSql(sql, parts[1], function (_, resultSet) {
	                  var response = {
	                    rowCount: resultSet.rowsAffected,
	                    result: []
	                  };

	                  if (resultSet.rows.length > 0) {
	                    for (var i = 0, len = resultSet.rows.length; i < len; i += 1) {
	                      try {
	                        var value = resultSet.rows.item(i).value;
	                        var entity = isMaster ? value : JSON.parse(value);
	                        response.result.push(entity);
	                      } catch (error) {
	                        // Catch the error
	                      }
	                    }
	                  }

	                  responses.push(response);
	                  pending -= 1;

	                  if (pending === 0) {
	                    resolve(isMulti ? responses : responses.shift());
	                  }
	                });
	              });
	            }
	          }, function (error) {
	            error = (0, _isString2.default)(error) ? error : error.message;

	            if (error && error.indexOf('no such table') === -1) {
	              return reject(new _export.NotFoundError('The ' + collection + ' collection was not found on' + (' the ' + _this.name + ' WebSQL database.')));
	            }

	            var query = 'SELECT name AS value from #{collection} WHERE type = ? AND name = ?';
	            var parameters = ['table', collection];

	            return _this.openTransaction(masterCollectionName, query, parameters).then(function (response) {
	              if (response.result.length === 0) {
	                return reject(new _export.NotFoundError('The ' + collection + ' collection was not found on' + (' the ' + _this.name + ' WebSQL database.')));
	              }

	              return reject(new _export.KinveyError('Unable to open a transaction for the ' + collection + (' collection on the ' + _this.name + ' WebSQL database.')));
	            }).catch(function (error) {
	              reject(error);
	            });
	          });
	        } catch (error) {
	          reject(error);
	        }
	      });
	    }
	  }, {
	    key: 'find',
	    value: function find(collection) {
	      var sql = 'SELECT value FROM #{collection}';
	      return this.openTransaction(collection, sql, []).then(function (response) {
	        return response.result;
	      });
	    }
	  }, {
	    key: 'findById',
	    value: function findById(collection, id) {
	      var _this2 = this;

	      var sql = 'SELECT value FROM #{collection} WHERE key = ?';
	      return this.openTransaction(collection, sql, [id]).then(function (response) {
	        return response.result;
	      }).then(function (entities) {
	        if (entities.length === 0) {
	          throw new _export.NotFoundError('An entity with _id = ' + id + ' was not found in the ' + collection + (' collection on the ' + _this2.name + ' WebSQL database.'));
	        }

	        return entities[0];
	      });
	    }
	  }, {
	    key: 'save',
	    value: function save(collection, entities) {
	      var queries = [];
	      var singular = false;

	      if (!(0, _isArray2.default)(entities)) {
	        singular = true;
	        entities = [entities];
	      }

	      if (entities.length === 0) {
	        return _es6Promise2.default.resolve(null);
	      }

	      entities = (0, _map2.default)(entities, function (entity) {
	        queries.push(['REPLACE INTO #{collection} (key, value) VALUES (?, ?)', [entity[idAttribute], JSON.stringify(entity)]]);

	        return entity;
	      });

	      return this.openTransaction(collection, queries, null, true).then(function () {
	        return singular ? entities[0] : entities;
	      });
	    }
	  }, {
	    key: 'removeById',
	    value: function removeById(collection, id) {
	      var _this3 = this;

	      var queries = [['SELECT value FROM #{collection} WHERE key = ?', [id]], ['DELETE FROM #{collection} WHERE key = ?', [id]]];
	      return this.openTransaction(collection, queries, null, true).then(function (response) {
	        var entities = response[0].result;
	        var count = response[1].rowCount;
	        count = count || entities.length;

	        if (count === 0) {
	          throw new _export.NotFoundError('An entity with _id = ' + id + ' was not found in the ' + collection + (' collection on the ' + _this3.name + ' WebSQL database.'));
	        }

	        return { count: count };
	      });
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var _this4 = this;

	      return this.openTransaction(masterCollectionName, 'SELECT name AS value FROM #{collection} WHERE type = ?', ['table'], false).then(function (response) {
	        return response.result;
	      }).then(function (tables) {
	        // If there are no tables, return.
	        if (tables.length === 0) {
	          return null;
	        }

	        // Drop all tables. Filter tables first to avoid attempting to delete
	        // system tables (which will fail).
	        var queries = tables.filter(function (table) {
	          return (/^[a-zA-Z0-9-]{1,128}/.test(table)
	          );
	        }).map(function (table) {
	          return ['DROP TABLE IF EXISTS \'' + table + '\''];
	        });
	        return _this4.openTransaction(masterCollectionName, queries, null, true);
	      }).then(function () {
	        dbCache = {};
	        return null;
	      });
	    }
	  }], [{
	    key: 'load',
	    value: function load(name) {
	      var adapter = new WebSQLAdapter(name);

	      if ((0, _export.isDefined)(global.openDatabase) === false) {
	        return _es6Promise2.default.resolve(undefined);
	      }

	      if ((0, _export.isDefined)(isSupported)) {
	        if (isSupported === true) {
	          return _es6Promise2.default.resolve(adapter);
	        }

	        return _es6Promise2.default.resolve(undefined);
	      }

	      return adapter.save('__testSupport', { _id: '1' }).then(function () {
	        isSupported = true;
	        return adapter;
	      }).catch(function () {
	        isSupported = false;
	        return undefined;
	      });
	    }
	  }]);

	  return WebSQLAdapter;
	}();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(48), (function() { return this; }())))

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CookieStorageAdapter = exports.SessionStorageAdapter = exports.LocalStorageAdapter = exports.WebStorageAdapter = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _es6Promise = __webpack_require__(47);

	var _es6Promise2 = _interopRequireDefault(_es6Promise);

	var _export = __webpack_require__(1);

	var _keyBy = __webpack_require__(225);

	var _keyBy2 = _interopRequireDefault(_keyBy);

	var _merge = __webpack_require__(353);

	var _merge2 = _interopRequireDefault(_merge);

	var _values = __webpack_require__(293);

	var _values2 = _interopRequireDefault(_values);

	var _forEach = __webpack_require__(280);

	var _forEach2 = _interopRequireDefault(_forEach);

	var _findIndex = __webpack_require__(303);

	var _findIndex2 = _interopRequireDefault(_findIndex);

	var _find2 = __webpack_require__(301);

	var _find3 = _interopRequireDefault(_find2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var idAttribute = process && process.env && process.env.KINVEY_ID_ATTRIBUTE || '_id' || '_id';
	var masterCollectionName = 'master';

	var WebStorageAdapter = exports.WebStorageAdapter = function () {
	  function WebStorageAdapter() {
	    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'kinvey';

	    _classCallCheck(this, WebStorageAdapter);

	    this.name = name;
	  }

	  _createClass(WebStorageAdapter, [{
	    key: 'masterCollectionName',
	    get: function get() {
	      return '' + this.name + masterCollectionName;
	    }
	  }]);

	  return WebStorageAdapter;
	}();

	var LocalStorageAdapter = exports.LocalStorageAdapter = function (_WebStorageAdapter) {
	  _inherits(LocalStorageAdapter, _WebStorageAdapter);

	  function LocalStorageAdapter(name) {
	    _classCallCheck(this, LocalStorageAdapter);

	    var _this = _possibleConstructorReturn(this, (LocalStorageAdapter.__proto__ || Object.getPrototypeOf(LocalStorageAdapter)).call(this, name));

	    var masterCollection = global.localStorage.getItem(_this.masterCollectionName);
	    if ((0, _export.isDefined)(masterCollection) === false) {
	      global.localStorage.setItem(_this.masterCollectionName, JSON.stringify([]));
	    }
	    return _this;
	  }

	  _createClass(LocalStorageAdapter, [{
	    key: '_find',
	    value: function _find(collection) {
	      try {
	        var entities = global.localStorage.getItem(collection);

	        if ((0, _export.isDefined)(entities)) {
	          return _es6Promise2.default.resolve(JSON.parse(entities));
	        }

	        return _es6Promise2.default.resolve(entities || []);
	      } catch (error) {
	        return _es6Promise2.default.reject(error);
	      }
	    }
	  }, {
	    key: 'find',
	    value: function find(collection) {
	      return this._find('' + this.name + collection);
	    }
	  }, {
	    key: 'findById',
	    value: function findById(collection, id) {
	      var _this2 = this;

	      return this.find(collection).then(function (entities) {
	        var entity = (0, _find3.default)(entities, function (entity) {
	          return entity[idAttribute] === id;
	        });

	        if ((0, _export.isDefined)(entity) === false) {
	          throw new _export.NotFoundError('An entity with _id = ' + id + ' was not found in the ' + collection + (' collection on the ' + _this2.name + ' localstorage database.'));
	        }

	        return entity;
	      });
	    }
	  }, {
	    key: 'save',
	    value: function save(collection, entities) {
	      var _this3 = this;

	      return this._find(this.masterCollectionName).then(function (collections) {
	        if ((0, _findIndex2.default)(collections, collection) === -1) {
	          collections.push(collection);
	          global.localStorage.setItem(_this3.masterCollectionName, JSON.stringify(collections));
	        }

	        return _this3.find(collection);
	      }).then(function (existingEntities) {
	        var existingEntitiesById = (0, _keyBy2.default)(existingEntities, idAttribute);
	        var entitiesById = (0, _keyBy2.default)(entities, idAttribute);
	        var existingEntityIds = Object.keys(existingEntitiesById);

	        (0, _forEach2.default)(existingEntityIds, function (id) {
	          var existingEntity = existingEntitiesById[id];
	          var entity = entitiesById[id];

	          if ((0, _export.isDefined)(entity)) {
	            entitiesById[id] = (0, _merge2.default)(existingEntity, entity);
	          }
	        });

	        global.localStorage.setItem('' + _this3.name + collection, JSON.stringify((0, _values2.default)(entitiesById)));
	        return entities;
	      });
	    }
	  }, {
	    key: 'removeById',
	    value: function removeById(collection, id) {
	      var _this4 = this;

	      return this.find(collection).then(function (entities) {
	        var entitiesById = (0, _keyBy2.default)(entities, idAttribute);
	        var entity = entitiesById[id];

	        if ((0, _export.isDefined)(entity) === false) {
	          throw new _export.NotFoundError('An entity with _id = ' + id + ' was not found in the ' + collection + ' ' + ('collection on the ' + _this4.name + ' memory database.'));
	        }

	        delete entitiesById[id];
	        return _this4.save(collection, (0, _values2.default)(entitiesById)).then(function () {
	          return { count: 1 };
	        });
	      });
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var _this5 = this;

	      return this._find(this.masterCollectionName).then(function (collections) {
	        (0, _forEach2.default)(collections, function (collection) {
	          global.localStorage.removeItem('' + _this5.name + collection);
	        });

	        global.localStorage.removeItem(_this5.masterCollectionName);
	        return null;
	      });
	    }
	  }], [{
	    key: 'load',
	    value: function load(name) {
	      if ((0, _export.isDefined)(global.localStorage)) {
	        var item = '__testSupport';
	        try {
	          global.localStorage.setItem(item, item);
	          global.localStorage.getItem(item);
	          global.localStorage.removeItem(item);
	          return _es6Promise2.default.resolve(new LocalStorageAdapter(name));
	        } catch (e) {
	          return _es6Promise2.default.resolve(undefined);
	        }
	      }

	      return _es6Promise2.default.resolve(undefined);
	    }
	  }]);

	  return LocalStorageAdapter;
	}(WebStorageAdapter);

	var SessionStorageAdapter = exports.SessionStorageAdapter = function (_WebStorageAdapter2) {
	  _inherits(SessionStorageAdapter, _WebStorageAdapter2);

	  function SessionStorageAdapter(name) {
	    _classCallCheck(this, SessionStorageAdapter);

	    var _this6 = _possibleConstructorReturn(this, (SessionStorageAdapter.__proto__ || Object.getPrototypeOf(SessionStorageAdapter)).call(this, name));

	    var masterCollection = global.localStorage.getItem(_this6.masterCollectionName);
	    if ((0, _export.isDefined)(masterCollection) === false) {
	      global.localStorage.setItem(_this6.masterCollectionName, JSON.stringify([]));
	    }
	    return _this6;
	  }

	  _createClass(SessionStorageAdapter, [{
	    key: '_find',
	    value: function _find(collection) {
	      try {
	        var entities = global.localStorage.getItem(collection);

	        if ((0, _export.isDefined)(entities)) {
	          return _es6Promise2.default.resolve(JSON.parse(entities));
	        }

	        return _es6Promise2.default.resolve(entities || []);
	      } catch (error) {
	        return _es6Promise2.default.reject(error);
	      }
	    }
	  }, {
	    key: 'find',
	    value: function find(collection) {
	      return this._find('' + this.name + collection);
	    }
	  }, {
	    key: 'findById',
	    value: function findById(collection, id) {
	      var _this7 = this;

	      return this.find(collection).then(function (entities) {
	        var entity = (0, _find3.default)(entities, function (entity) {
	          return entity[idAttribute] === id;
	        });

	        if ((0, _export.isDefined)(entity) === false) {
	          throw new _export.NotFoundError('An entity with _id = ' + id + ' was not found in the ' + collection + (' collection on the ' + _this7.name + ' localstorage database.'));
	        }

	        return entity;
	      });
	    }
	  }, {
	    key: 'save',
	    value: function save(collection, entities) {
	      var _this8 = this;

	      return this._find(this.masterCollectionName).then(function (collections) {
	        if ((0, _findIndex2.default)(collections, collection) === -1) {
	          collections.push(collection);
	          global.sessionStorage.setItem(_this8.masterCollectionName, JSON.stringify(collections));
	        }

	        return _this8.find(collection);
	      }).then(function (existingEntities) {
	        var existingEntitiesById = (0, _keyBy2.default)(existingEntities, idAttribute);
	        var entitiesById = (0, _keyBy2.default)(entities, idAttribute);
	        var existingEntityIds = Object.keys(existingEntitiesById);

	        (0, _forEach2.default)(existingEntityIds, function (id) {
	          var existingEntity = existingEntitiesById[id];
	          var entity = entitiesById[id];

	          if ((0, _export.isDefined)(entity)) {
	            entitiesById[id] = (0, _merge2.default)(existingEntity, entity);
	          }
	        });

	        global.sessionStorage.setItem('' + _this8.name + collection, JSON.stringify((0, _values2.default)(entitiesById)));
	        return entities;
	      });
	    }
	  }, {
	    key: 'removeById',
	    value: function removeById(collection, id) {
	      var _this9 = this;

	      return this.find(collection).then(function (entities) {
	        var entitiesById = (0, _keyBy2.default)(entities, idAttribute);
	        var entity = entitiesById[id];

	        if ((0, _export.isDefined)(entity) === false) {
	          throw new _export.NotFoundError('An entity with _id = ' + id + ' was not found in the ' + collection + ' ' + ('collection on the ' + _this9.name + ' memory database.'));
	        }

	        delete entitiesById[id];
	        return _this9.save(collection, (0, _values2.default)(entitiesById)).then(function () {
	          return { count: 1 };
	        });
	      });
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var _this10 = this;

	      return this._find(this.masterCollectionName).then(function (collections) {
	        (0, _forEach2.default)(collections, function (collection) {
	          global.sessionStorage.removeItem('' + _this10.name + collection);
	        });

	        global.sessionStorage.removeItem(_this10.masterCollectionName);
	        return null;
	      });
	    }
	  }], [{
	    key: 'load',
	    value: function load(name) {
	      if (global.sessionStorage) {
	        var item = '__testSupport';
	        try {
	          global.sessionStorage.setItem(item, item);
	          global.sessionStorage.getItem(item);
	          global.sessionStorage.removeItem(item);
	          return _es6Promise2.default.resolve(new SessionStorageAdapter(name));
	        } catch (e) {
	          return _es6Promise2.default.resolve(undefined);
	        }
	      }

	      return _es6Promise2.default.resolve(undefined);
	    }
	  }]);

	  return SessionStorageAdapter;
	}(WebStorageAdapter);

	var CookieStorageAdapter = exports.CookieStorageAdapter = function (_WebStorageAdapter3) {
	  _inherits(CookieStorageAdapter, _WebStorageAdapter3);

	  function CookieStorageAdapter(name) {
	    _classCallCheck(this, CookieStorageAdapter);

	    var _this11 = _possibleConstructorReturn(this, (CookieStorageAdapter.__proto__ || Object.getPrototypeOf(CookieStorageAdapter)).call(this, name));

	    var values = document.cookie.split(';');
	    for (var i = 0, len = values.length; i < len; i += 1) {
	      var value = values[i];
	      while (value.charAt(0) === ' ') {
	        value = value.substring(1);
	      }
	      if (value.indexOf(_this11.masterCollectionName) === 0) {
	        var masterCollection = decodeURIComponent(value.substring(_this11.masterCollectionName.length, value.length));

	        if ((0, _export.isDefined)(masterCollection) === false) {
	          var expires = new Date();
	          expires.setTime(expires.getTime() + 100 * 365 * 24 * 60 * 60 * 1000); // Expire in 100 years
	          global.document.cookie = _this11.masterCollectionName + '=' + encodeURIComponent(JSON.stringify([])) + '; expires=' + expires.toUTCString() + '; path=/';
	        }
	      }
	    }
	    return _this11;
	  }

	  _createClass(CookieStorageAdapter, [{
	    key: '_find',
	    value: function _find(collection) {
	      var values = document.cookie.split(';');
	      for (var i = 0, len = values.length; i < len; i += 1) {
	        var value = values[i];
	        while (value.charAt(0) === ' ') {
	          value = value.substring(1);
	        }
	        if (value.indexOf(collection) === 0) {
	          return _es6Promise2.default.resolve(JSON.parse(decodeURIComponent(value.substring(collection.length, value.length))));
	        }
	      }
	      return _es6Promise2.default.resolve([]);
	    }
	  }, {
	    key: 'find',
	    value: function find(collection) {
	      return this._find('' + this.name + collection);
	    }
	  }, {
	    key: 'findById',
	    value: function findById(collection, id) {
	      var _this12 = this;

	      return this.find(collection).then(function (entities) {
	        var entity = (0, _find3.default)(entities, function (entity) {
	          return entity[idAttribute] === id;
	        });

	        if ((0, _export.isDefined)(entity) === false) {
	          throw new _export.NotFoundError('An entity with _id = ' + id + ' was not found in the ' + collection + (' collection on the ' + _this12.name + ' localstorage database.'));
	        }

	        return entity;
	      });
	    }
	  }, {
	    key: 'save',
	    value: function save(collection, entities) {
	      var _this13 = this;

	      return this._find(this.masterCollectionName).then(function (collections) {
	        if ((0, _findIndex2.default)(collections, collection) === -1) {
	          collections.push(collection);
	          var expires = new Date();
	          expires.setTime(expires.getTime() + 100 * 365 * 24 * 60 * 60 * 1000); // Expire in 100 years
	          global.document.cookie = _this13.masterCollectionName + '=' + encodeURIComponent(JSON.stringify(collections)) + '; expires=' + expires.toUTCString() + '; path=/';
	        }

	        return _this13.find(collection);
	      }).then(function (existingEntities) {
	        var existingEntitiesById = (0, _keyBy2.default)(existingEntities, idAttribute);
	        var entitiesById = (0, _keyBy2.default)(entities, idAttribute);
	        var existingEntityIds = Object.keys(existingEntitiesById);

	        (0, _forEach2.default)(existingEntityIds, function (id) {
	          var existingEntity = existingEntitiesById[id];
	          var entity = entitiesById[id];

	          if ((0, _export.isDefined)(entity)) {
	            entitiesById[id] = (0, _merge2.default)(existingEntity, entity);
	          }
	        });

	        var expires = new Date();
	        expires.setTime(expires.getTime() + 100 * 365 * 24 * 60 * 60 * 1000); // Expire in 100 years
	        global.document.cookie = '' + _this13.name + collection + '=' + encodeURIComponent(JSON.stringify((0, _values2.default)(entitiesById))) + '; expires=' + expires.toUTCString() + '; path=/';
	        return entities;
	      });
	    }
	  }, {
	    key: 'removeById',
	    value: function removeById(collection, id) {
	      var _this14 = this;

	      return this.find(collection).then(function (entities) {
	        var entitiesById = (0, _keyBy2.default)(entities, idAttribute);
	        var entity = entitiesById[id];

	        if ((0, _export.isDefined)(entity) === false) {
	          throw new _export.NotFoundError('An entity with _id = ' + id + ' was not found in the ' + collection + ' ' + ('collection on the ' + _this14.name + ' memory database.'));
	        }

	        delete entitiesById[id];
	        return _this14.save(collection, (0, _values2.default)(entitiesById)).then(function () {
	          return { count: 1 };
	        });
	      });
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var _this15 = this;

	      return this._find(this.masterCollectionName).then(function (collections) {
	        (0, _forEach2.default)(collections, function (collection) {
	          var expires = new Date();
	          expires.setTime(expires.getTime() + 100 * 365 * 24 * 60 * 60 * 1000); // Expire in 100 years
	          global.document.cookie = '' + _this15.name + collection + '=' + encodeURIComponent() + '; expires=' + expires.toUTCString() + '; path=/';
	        });

	        var expires = new Date();
	        expires.setTime(expires.getTime() + 100 * 365 * 24 * 60 * 60 * 1000); // Expire in 100 years
	        global.document.cookie = _this15.masterCollectionName + '=' + encodeURIComponent() + '; expires=' + expires.toUTCString() + '; path=/';
	        return null;
	      });
	    }
	  }], [{
	    key: 'load',
	    value: function load(name) {
	      if (typeof global.document.cookie === 'undefined') {
	        return _es6Promise2.default.resolve(undefined);
	      }

	      return _es6Promise2.default.resolve(new CookieStorageAdapter(name));
	    }
	  }]);

	  return CookieStorageAdapter;
	}(WebStorageAdapter);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(48), (function() { return this; }())))

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

	var baseMerge = __webpack_require__(354),
	    createAssigner = __webpack_require__(99);

	/**
	 * This method is like `_.assign` except that it recursively merges own and
	 * inherited enumerable string keyed properties of source objects into the
	 * destination object. Source properties that resolve to `undefined` are
	 * skipped if a destination value exists. Array and plain object properties
	 * are merged recursively. Other objects and value types are overridden by
	 * assignment. Source objects are applied from left to right. Subsequent
	 * sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.5.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = {
	 *   'a': [{ 'b': 2 }, { 'd': 4 }]
	 * };
	 *
	 * var other = {
	 *   'a': [{ 'c': 3 }, { 'e': 5 }]
	 * };
	 *
	 * _.merge(object, other);
	 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
	 */
	var merge = createAssigner(function(object, source, srcIndex) {
	  baseMerge(object, source, srcIndex);
	});

	module.exports = merge;


/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(182),
	    assignMergeValue = __webpack_require__(355),
	    baseFor = __webpack_require__(231),
	    baseMergeDeep = __webpack_require__(356),
	    isObject = __webpack_require__(92),
	    keysIn = __webpack_require__(253);

	/**
	 * The base implementation of `_.merge` without support for multiple sources.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMerge(object, source, srcIndex, customizer, stack) {
	  if (object === source) {
	    return;
	  }
	  baseFor(source, function(srcValue, key) {
	    if (isObject(srcValue)) {
	      stack || (stack = new Stack);
	      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	    }
	    else {
	      var newValue = customizer
	        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
	        : undefined;

	      if (newValue === undefined) {
	        newValue = srcValue;
	      }
	      assignMergeValue(object, key, newValue);
	    }
	  }, keysIn);
	}

	module.exports = baseMerge;


/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(81),
	    eq = __webpack_require__(97);

	/**
	 * This function is like `assignValue` except that it doesn't assign
	 * `undefined` values.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignMergeValue(object, key, value) {
	  if ((value !== undefined && !eq(object[key], value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	module.exports = assignMergeValue;


/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

	var assignMergeValue = __webpack_require__(355),
	    cloneBuffer = __webpack_require__(256),
	    cloneTypedArray = __webpack_require__(272),
	    copyArray = __webpack_require__(257),
	    initCloneObject = __webpack_require__(273),
	    isArguments = __webpack_require__(116),
	    isArray = __webpack_require__(119),
	    isArrayLikeObject = __webpack_require__(223),
	    isBuffer = __webpack_require__(120),
	    isFunction = __webpack_require__(85),
	    isObject = __webpack_require__(92),
	    isPlainObject = __webpack_require__(129),
	    isTypedArray = __webpack_require__(122),
	    toPlainObject = __webpack_require__(357);

	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	  var objValue = object[key],
	      srcValue = source[key],
	      stacked = stack.get(srcValue);

	  if (stacked) {
	    assignMergeValue(object, key, stacked);
	    return;
	  }
	  var newValue = customizer
	    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	    : undefined;

	  var isCommon = newValue === undefined;

	  if (isCommon) {
	    var isArr = isArray(srcValue),
	        isBuff = !isArr && isBuffer(srcValue),
	        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

	    newValue = srcValue;
	    if (isArr || isBuff || isTyped) {
	      if (isArray(objValue)) {
	        newValue = objValue;
	      }
	      else if (isArrayLikeObject(objValue)) {
	        newValue = copyArray(objValue);
	      }
	      else if (isBuff) {
	        isCommon = false;
	        newValue = cloneBuffer(srcValue, true);
	      }
	      else if (isTyped) {
	        isCommon = false;
	        newValue = cloneTypedArray(srcValue, true);
	      }
	      else {
	        newValue = [];
	      }
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      newValue = objValue;
	      if (isArguments(objValue)) {
	        newValue = toPlainObject(objValue);
	      }
	      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
	        newValue = initCloneObject(srcValue);
	      }
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    stack.set(srcValue, newValue);
	    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	    stack['delete'](srcValue);
	  }
	  assignMergeValue(object, key, newValue);
	}

	module.exports = baseMergeDeep;


/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(98),
	    keysIn = __webpack_require__(253);

	/**
	 * Converts `value` to a plain object flattening inherited enumerable string
	 * keyed properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return copyObject(value, keysIn(value));
	}

	module.exports = toPlainObject;


/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _export = __webpack_require__(1);

	var _xhr = __webpack_require__(359);

	var _xhr2 = _interopRequireDefault(_xhr);

	var _es6Promise = __webpack_require__(47);

	var _es6Promise2 = _interopRequireDefault(_es6Promise);

	var _isFunction = __webpack_require__(85);

	var _isFunction2 = _interopRequireDefault(_isFunction);

	var _package = __webpack_require__(366);

	var _package2 = _interopRequireDefault(_package);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Helper function to detect the browser name and version.
	function browserDetect(ua) {
	  // Cast arguments.
	  ua = ua.toLowerCase();

	  // User-Agent patterns.
	  var rChrome = /(chrome)\/([\w]+)/;
	  var rFirefox = /(firefox)\/([\w.]+)/;
	  var rIE = /(msie) ([\w.]+)/i;
	  var rOpera = /(opera)(?:.*version)?[ /]([\w.]+)/;
	  var rSafari = /(safari)\/([\w.]+)/;

	  return rChrome.exec(ua) || rFirefox.exec(ua) || rIE.exec(ua) || rOpera.exec(ua) || rSafari.exec(ua) || [];
	}

	function deviceInformation() {
	  var libraries = [];
	  var browser = void 0;
	  var platform = void 0;
	  var version = void 0;
	  var manufacturer = void 0;

	  // Default platform, most likely this is just a plain web app.
	  if ((platform === null || platform === undefined) && global.navigator) {
	    browser = browserDetect(global.navigator.userAgent);
	    platform = browser[1];
	    version = browser[2];
	    manufacturer = global.navigator.platform;
	  }

	  // Libraries.
	  if (global.angular !== undefined) {
	    // AngularJS.
	    libraries.push('angularjs/' + global.angular.version.full);
	  }
	  if (global.Backbone !== undefined) {
	    // Backbone.js.
	    libraries.push('backbonejs/' + global.Backbone.VERSION);
	  }
	  if (global.Ember !== undefined) {
	    // Ember.js.
	    libraries.push('emberjs/' + global.Ember.VERSION);
	  }
	  if (global.jQuery !== undefined) {
	    // jQuery.
	    libraries.push('jquery/' + global.jQuery.fn.jquery);
	  }
	  if (global.ko !== undefined) {
	    // Knockout.
	    libraries.push('knockout/' + global.ko.version);
	  }
	  if (global.Zepto !== undefined) {
	    // Zepto.js.
	    libraries.push('zeptojs');
	  }

	  // Return the device information string.
	  var parts = ['js-' + _package2.default.name + '/' + _package2.default.version];

	  if (libraries.length !== 0) {
	    // Add external library information.
	    parts.push('(' + libraries.sort().join(', ') + ')');
	  }

	  return parts.concat([platform, version, manufacturer]).map(function (part) {
	    if (part) {
	      return part.toString().replace(/\s/g, '_').toLowerCase();
	    }

	    return 'unknown';
	  }).join(' ');
	}

	var HttpMiddleware = function (_Middleware) {
	  _inherits(HttpMiddleware, _Middleware);

	  function HttpMiddleware() {
	    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Http Middleware';

	    _classCallCheck(this, HttpMiddleware);

	    return _possibleConstructorReturn(this, (HttpMiddleware.__proto__ || Object.getPrototypeOf(HttpMiddleware)).call(this, name));
	  }

	  _createClass(HttpMiddleware, [{
	    key: 'handle',
	    value: function handle(request) {
	      var _this2 = this;

	      var promise = new _es6Promise2.default(function (resolve, reject) {
	        var url = request.url,
	            method = request.method,
	            headers = request.headers,
	            body = request.body,
	            timeout = request.timeout,
	            followRedirect = request.followRedirect;

	        // Add the X-Kinvey-Device-Information header

	        headers['X-Kinvey-Device-Information'] = _this2.deviceInformation;

	        _this2.xhrRequest = (0, _xhr2.default)({
	          method: method,
	          url: url,
	          headers: headers,
	          body: body,
	          followRedirect: followRedirect,
	          timeout: timeout
	        }, function (error, response, body) {
	          if ((0, _export.isDefined)(error)) {
	            if (error.code === 'ESOCKETTIMEDOUT' || error.code === 'ETIMEDOUT') {
	              return reject(new _export.TimeoutError('The network request timed out.'));
	            }

	            return reject(new _export.NetworkConnectionError('There was an error connecting to the network.', error));
	          }

	          return resolve({
	            response: {
	              statusCode: response.statusCode,
	              headers: response.headers,
	              data: body
	            }
	          });
	        });
	      });
	      return promise;
	    }
	  }, {
	    key: 'cancel',
	    value: function cancel() {
	      if ((0, _export.isDefined)(this.xhrRequest) && (0, _isFunction2.default)(this.xhrRequest.abort)) {
	        this.xhrRequest.abort();
	      }

	      return _es6Promise2.default.resolve();
	    }
	  }, {
	    key: 'deviceInformation',
	    get: function get() {
	      return deviceInformation();
	    }
	  }]);

	  return HttpMiddleware;
	}(_export.Middleware);

	exports.default = HttpMiddleware;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var window = __webpack_require__(360)
	var isFunction = __webpack_require__(361)
	var parseHeaders = __webpack_require__(362)
	var xtend = __webpack_require__(365)

	module.exports = createXHR
	createXHR.XMLHttpRequest = window.XMLHttpRequest || noop
	createXHR.XDomainRequest = "withCredentials" in (new createXHR.XMLHttpRequest()) ? createXHR.XMLHttpRequest : window.XDomainRequest

	forEachArray(["get", "put", "post", "patch", "head", "delete"], function(method) {
	    createXHR[method === "delete" ? "del" : method] = function(uri, options, callback) {
	        options = initParams(uri, options, callback)
	        options.method = method.toUpperCase()
	        return _createXHR(options)
	    }
	})

	function forEachArray(array, iterator) {
	    for (var i = 0; i < array.length; i++) {
	        iterator(array[i])
	    }
	}

	function isEmpty(obj){
	    for(var i in obj){
	        if(obj.hasOwnProperty(i)) return false
	    }
	    return true
	}

	function initParams(uri, options, callback) {
	    var params = uri

	    if (isFunction(options)) {
	        callback = options
	        if (typeof uri === "string") {
	            params = {uri:uri}
	        }
	    } else {
	        params = xtend(options, {uri: uri})
	    }

	    params.callback = callback
	    return params
	}

	function createXHR(uri, options, callback) {
	    options = initParams(uri, options, callback)
	    return _createXHR(options)
	}

	function _createXHR(options) {
	    if(typeof options.callback === "undefined"){
	        throw new Error("callback argument missing")
	    }

	    var called = false
	    var callback = function cbOnce(err, response, body){
	        if(!called){
	            called = true
	            options.callback(err, response, body)
	        }
	    }

	    function readystatechange() {
	        if (xhr.readyState === 4) {
	            loadFunc()
	        }
	    }

	    function getBody() {
	        // Chrome with requestType=blob throws errors arround when even testing access to responseText
	        var body = undefined

	        if (xhr.response) {
	            body = xhr.response
	        } else {
	            body = xhr.responseText || getXml(xhr)
	        }

	        if (isJson) {
	            try {
	                body = JSON.parse(body)
	            } catch (e) {}
	        }

	        return body
	    }

	    function errorFunc(evt) {
	        clearTimeout(timeoutTimer)
	        if(!(evt instanceof Error)){
	            evt = new Error("" + (evt || "Unknown XMLHttpRequest Error") )
	        }
	        evt.statusCode = 0
	        return callback(evt, failureResponse)
	    }

	    // will load the data & process the response in a special response object
	    function loadFunc() {
	        if (aborted) return
	        var status
	        clearTimeout(timeoutTimer)
	        if(options.useXDR && xhr.status===undefined) {
	            //IE8 CORS GET successful response doesn't have a status field, but body is fine
	            status = 200
	        } else {
	            status = (xhr.status === 1223 ? 204 : xhr.status)
	        }
	        var response = failureResponse
	        var err = null

	        if (status !== 0){
	            response = {
	                body: getBody(),
	                statusCode: status,
	                method: method,
	                headers: {},
	                url: uri,
	                rawRequest: xhr
	            }
	            if(xhr.getAllResponseHeaders){ //remember xhr can in fact be XDR for CORS in IE
	                response.headers = parseHeaders(xhr.getAllResponseHeaders())
	            }
	        } else {
	            err = new Error("Internal XMLHttpRequest Error")
	        }
	        return callback(err, response, response.body)
	    }

	    var xhr = options.xhr || null

	    if (!xhr) {
	        if (options.cors || options.useXDR) {
	            xhr = new createXHR.XDomainRequest()
	        }else{
	            xhr = new createXHR.XMLHttpRequest()
	        }
	    }

	    var key
	    var aborted
	    var uri = xhr.url = options.uri || options.url
	    var method = xhr.method = options.method || "GET"
	    var body = options.body || options.data
	    var headers = xhr.headers = options.headers || {}
	    var sync = !!options.sync
	    var isJson = false
	    var timeoutTimer
	    var failureResponse = {
	        body: undefined,
	        headers: {},
	        statusCode: 0,
	        method: method,
	        url: uri,
	        rawRequest: xhr
	    }

	    if ("json" in options && options.json !== false) {
	        isJson = true
	        headers["accept"] || headers["Accept"] || (headers["Accept"] = "application/json") //Don't override existing accept header declared by user
	        if (method !== "GET" && method !== "HEAD") {
	            headers["content-type"] || headers["Content-Type"] || (headers["Content-Type"] = "application/json") //Don't override existing accept header declared by user
	            body = JSON.stringify(options.json === true ? body : options.json)
	        }
	    }

	    xhr.onreadystatechange = readystatechange
	    xhr.onload = loadFunc
	    xhr.onerror = errorFunc
	    // IE9 must have onprogress be set to a unique function.
	    xhr.onprogress = function () {
	        // IE must die
	    }
	    xhr.onabort = function(){
	        aborted = true;
	    }
	    xhr.ontimeout = errorFunc
	    xhr.open(method, uri, !sync, options.username, options.password)
	    //has to be after open
	    if(!sync) {
	        xhr.withCredentials = !!options.withCredentials
	    }
	    // Cannot set timeout with sync request
	    // not setting timeout on the xhr object, because of old webkits etc. not handling that correctly
	    // both npm's request and jquery 1.x use this kind of timeout, so this is being consistent
	    if (!sync && options.timeout > 0 ) {
	        timeoutTimer = setTimeout(function(){
	            if (aborted) return
	            aborted = true//IE9 may still call readystatechange
	            xhr.abort("timeout")
	            var e = new Error("XMLHttpRequest timeout")
	            e.code = "ETIMEDOUT"
	            errorFunc(e)
	        }, options.timeout )
	    }

	    if (xhr.setRequestHeader) {
	        for(key in headers){
	            if(headers.hasOwnProperty(key)){
	                xhr.setRequestHeader(key, headers[key])
	            }
	        }
	    } else if (options.headers && !isEmpty(options.headers)) {
	        throw new Error("Headers cannot be set on an XDomainRequest object")
	    }

	    if ("responseType" in options) {
	        xhr.responseType = options.responseType
	    }

	    if ("beforeSend" in options &&
	        typeof options.beforeSend === "function"
	    ) {
	        options.beforeSend(xhr)
	    }

	    // Microsoft Edge browser sends "undefined" when send is called with undefined value.
	    // XMLHttpRequest spec says to pass null as body to indicate no body
	    // See https://github.com/naugtur/xhr/issues/100.
	    xhr.send(body || null)

	    return xhr


	}

	function getXml(xhr) {
	    if (xhr.responseType === "document") {
	        return xhr.responseXML
	    }
	    var firefoxBugTakenEffect = xhr.status === 204 && xhr.responseXML && xhr.responseXML.documentElement.nodeName === "parsererror"
	    if (xhr.responseType === "" && !firefoxBugTakenEffect) {
	        return xhr.responseXML
	    }

	    return null
	}

	function noop() {}


/***/ }),
/* 360 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {var win;

	if (typeof window !== "undefined") {
	    win = window;
	} else if (typeof global !== "undefined") {
	    win = global;
	} else if (typeof self !== "undefined"){
	    win = self;
	} else {
	    win = {};
	}

	module.exports = win;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 361 */
/***/ (function(module, exports) {

	module.exports = isFunction

	var toString = Object.prototype.toString

	function isFunction (fn) {
	  var string = toString.call(fn)
	  return string === '[object Function]' ||
	    (typeof fn === 'function' && string !== '[object RegExp]') ||
	    (typeof window !== 'undefined' &&
	     // IE8 and below
	     (fn === window.setTimeout ||
	      fn === window.alert ||
	      fn === window.confirm ||
	      fn === window.prompt))
	};


/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

	var trim = __webpack_require__(363)
	  , forEach = __webpack_require__(364)
	  , isArray = function(arg) {
	      return Object.prototype.toString.call(arg) === '[object Array]';
	    }

	module.exports = function (headers) {
	  if (!headers)
	    return {}

	  var result = {}

	  forEach(
	      trim(headers).split('\n')
	    , function (row) {
	        var index = row.indexOf(':')
	          , key = trim(row.slice(0, index)).toLowerCase()
	          , value = trim(row.slice(index + 1))

	        if (typeof(result[key]) === 'undefined') {
	          result[key] = value
	        } else if (isArray(result[key])) {
	          result[key].push(value)
	        } else {
	          result[key] = [ result[key], value ]
	        }
	      }
	  )

	  return result
	}

/***/ }),
/* 363 */
/***/ (function(module, exports) {

	
	exports = module.exports = trim;

	function trim(str){
	  return str.replace(/^\s*|\s*$/g, '');
	}

	exports.left = function(str){
	  return str.replace(/^\s*/, '');
	};

	exports.right = function(str){
	  return str.replace(/\s*$/, '');
	};


/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(361)

	module.exports = forEach

	var toString = Object.prototype.toString
	var hasOwnProperty = Object.prototype.hasOwnProperty

	function forEach(list, iterator, context) {
	    if (!isFunction(iterator)) {
	        throw new TypeError('iterator must be a function')
	    }

	    if (arguments.length < 3) {
	        context = this
	    }
	    
	    if (toString.call(list) === '[object Array]')
	        forEachArray(list, iterator, context)
	    else if (typeof list === 'string')
	        forEachString(list, iterator, context)
	    else
	        forEachObject(list, iterator, context)
	}

	function forEachArray(array, iterator, context) {
	    for (var i = 0, len = array.length; i < len; i++) {
	        if (hasOwnProperty.call(array, i)) {
	            iterator.call(context, array[i], i, array)
	        }
	    }
	}

	function forEachString(string, iterator, context) {
	    for (var i = 0, len = string.length; i < len; i++) {
	        // no such thing as a sparse string.
	        iterator.call(context, string.charAt(i), i, string)
	    }
	}

	function forEachObject(object, iterator, context) {
	    for (var k in object) {
	        if (hasOwnProperty.call(object, k)) {
	            iterator.call(context, object[k], k, object)
	        }
	    }
	}


/***/ }),
/* 365 */
/***/ (function(module, exports) {

	module.exports = extend

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	function extend() {
	    var target = {}

	    for (var i = 0; i < arguments.length; i++) {
	        var source = arguments[i]

	        for (var key in source) {
	            if (hasOwnProperty.call(source, key)) {
	                target[key] = source[key]
	            }
	        }
	    }

	    return target
	}


/***/ }),
/* 366 */
/***/ (function(module, exports) {

	module.exports = {"name":"kinvey-html5-sdk","version":"3.8.1","description":"Kinvey JavaScript SDK for HTML5 applications.","homepage":"http://www.kinvey.com","bugs":{"url":"https://github.com/Kinvey/html5-sdk/issues"},"license":"Apache-2.0","author":"Kinvey","contributors":["Thomas Conner <thomas@kinvey.com>"],"main":"./dist/index.js","repository":{"type":"git","url":"git@github.com:Kinvey/html5-sdk"},"scripts":{"build":"npm run clean && npm run transpile && npm run bundle && npm run minify","bundle":"webpack --config webpack.config.js","clean":"rm -rf dist && rm -rf coverage && rm -rf s3","minify":"uglifyjs --screw-ie8 --compress warnings=false --mangle --comments --output ./dist/kinvey-html5-sdk.min.js -- ./dist/kinvey-html5-sdk.js ","cover":"istanbul cover _mocha -- --compilers js:babel-core/register -r babel-polyfill -s 100 --recursive test/unit/setup test/unit","docs":"esdoc -c esdoc.json","e2e:server":"selenium-standalone install --version=3.0.1 && selenium-standalone start","e2e:app":"npm run build && shjs ./scripts/e2e.js && node ./test/e2e/app","e2e:test":"wdio ./test/e2e/wdio.conf","e2e:test:browserstack":"wdio ./test/e2e/browserstack.conf","lint":"npm run lint:src","lint:src":"eslint src/**","lint:test":"eslint test/unit/**","preversion":"rm -rf node_modules && npm install && npm test","version":"npm run build && git add dist/kinvey-html5-sdk.js && git add dist/kinvey-html5-sdk.min.js && git commit -m 'Update dist bundle.'","postversion":"git push && git push --tags && rm -rf dist && rm -rf coverage && rm -rf s3","s3":"npm run build && shjs ./scripts/s3.js","test":"mocha --compilers js:babel-core/register -r babel-polyfill -s 100 --recursive test/unit/setup test/unit","test:watch":"mocha -w --compilers js:babel-core/register -r babel-polyfill -s 100 --recursive test/unit/setup test/unit","transpile":"babel src --out-dir dist"},"dependencies":{"core-js":"2.4.1","es6-promise":"4.1.0","kinvey-js-sdk":"3.8.1","local-storage-fallback":"4.0.0","lodash":"4.17.4","url":"0.11.0","xhr":"2.3.3"},"peerDependencies":{"kinvey-js-sdk":"3.8.1"},"devDependencies":{"babel-cli":"6.24.0","babel-core":"6.24.0","babel-eslint":"7.1.1","babel-plugin-inline-dotenv":"^1.1.1","babel-plugin-module-resolver":"2.5.0","babel-polyfill":"^6.9.0","babel-preset-es2015":"6.24.0","babel-preset-stage-2":"^6.0.15","babel-register":"6.24.0","browserstack-local":"^1.2.0","eslint":"3.17.1","eslint-config-airbnb-base":"11.1.1","eslint-import-resolver-babel-module":"3.0.0","eslint-plugin-import":"2.2.0","expect":"^1.20.2","fs-extra":"2.1.1","istanbul":"1.1.0-alpha.1","json-loader":"^0.5.4","mocha":"3.2.0","nock":"9.0.9","regenerator-runtime":"0.10.3","selenium-standalone":"6.0.1","shelljs":"0.7.7","uglify-js":"2.8.12","wdio-mocha-framework":"0.5.9","wdio-spec-reporter":"0.1.0","webdriverio":"^4.4.0","webpack":"^1.13.0"},"engines":{"node":">=4.0"},"keywords":["Kinvey","JavaScript","HTML5"]}

/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _events = __webpack_require__(326);

	var _bind = __webpack_require__(368);

	var _bind2 = _interopRequireDefault(_bind);

	var _isFunction = __webpack_require__(85);

	var _isFunction2 = _interopRequireDefault(_isFunction);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Popup = function (_EventEmitter) {
	  _inherits(Popup, _EventEmitter);

	  function Popup() {
	    _classCallCheck(this, Popup);

	    return _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).apply(this, arguments));
	  }

	  _createClass(Popup, [{
	    key: 'open',
	    value: function open() {
	      var _this2 = this;

	      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';

	      var interval = void 0;
	      var eventListeners = void 0;
	      var popupWindow = void 0;

	      // loadStartCallback
	      var loadStartCallback = function loadStartCallback(event) {
	        _this2.emit('loadstart', event);
	      };

	      // loadStopCallback
	      var loadStopCallback = function loadStopCallback(event) {
	        _this2.emit('loadstop', event);
	      };

	      // loadErrorCallback
	      var loadErrorCallback = function loadErrorCallback(event) {
	        _this2.emit('error', event);
	      };

	      // exitCallback
	      var exitCallback = function exitCallback() {
	        // Clear the interval
	        clearInterval(interval);

	        // Close the popup
	        popupWindow.close();
	        _this2.popupWindow = null;

	        // Remove event listeners
	        if (popupWindow && (0, _isFunction2.default)(popupWindow.removeEventListener)) {
	          popupWindow.removeEventListener('loadstart', eventListeners.loadStopCallback);
	          popupWindow.removeEventListener('loadstop', eventListeners.loadStopCallback);
	          popupWindow.removeEventListener('loaderror', eventListeners.loadErrorCallback);
	          popupWindow.removeEventListener('exit', eventListeners.exitCallback);
	        }

	        // Emit closed
	        _this2.emit('exit');
	      };

	      // Bind event listeners
	      eventListeners = {
	        loadStartCallback: (0, _bind2.default)(loadStartCallback, this),
	        loadStopCallback: (0, _bind2.default)(loadStopCallback, this),
	        loadErrorCallback: (0, _bind2.default)(loadErrorCallback, this),
	        exitCallback: (0, _bind2.default)(exitCallback, this)
	      };

	      // Open the popup
	      popupWindow = global.open(url, '_blank', 'toolbar=no,location=no');

	      if (popupWindow) {
	        if ((0, _isFunction2.default)(popupWindow.addEventListener)) {
	          popupWindow.addEventListener('loadstart', eventListeners.loadStartCallback);
	          popupWindow.addEventListener('loadstop', eventListeners.loadStopCallback);
	          popupWindow.addEventListener('loaderror', eventListeners.loadErrorCallback);
	          popupWindow.addEventListener('exit', eventListeners.exitCallback);
	        }

	        // Check if the popup is closed has closed every 100ms
	        interval = setInterval(function () {
	          if (popupWindow.closed) {
	            eventListeners.exitCallback();
	          } else {
	            try {
	              eventListeners.loadStopCallback({
	                url: popupWindow.location.href
	              });
	            } catch (error) {
	              // Just catch the error
	            }
	          }
	        }, 100);
	      } else {
	        throw new Error('The popup was blocked.');
	      }

	      // Set the popupWindow instance
	      this.popupWindow = popupWindow;

	      // Return this
	      return this;
	    }
	  }, {
	    key: 'close',
	    value: function close() {
	      if (this.popupWindow) {
	        this.popupWindow.close();
	      }

	      return this;
	    }
	  }]);

	  return Popup;
	}(_events.EventEmitter);

	exports.default = Popup;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(100),
	    createWrap = __webpack_require__(369),
	    getHolder = __webpack_require__(395),
	    replaceHolders = __webpack_require__(397);

	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1,
	    WRAP_PARTIAL_FLAG = 32;

	/**
	 * Creates a function that invokes `func` with the `this` binding of `thisArg`
	 * and `partials` prepended to the arguments it receives.
	 *
	 * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
	 * may be used as a placeholder for partially applied arguments.
	 *
	 * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
	 * property of bound functions.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {...*} [partials] The arguments to be partially applied.
	 * @returns {Function} Returns the new bound function.
	 * @example
	 *
	 * function greet(greeting, punctuation) {
	 *   return greeting + ' ' + this.user + punctuation;
	 * }
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * var bound = _.bind(greet, object, 'hi');
	 * bound('!');
	 * // => 'hi fred!'
	 *
	 * // Bound with placeholders.
	 * var bound = _.bind(greet, object, _, '!');
	 * bound('hi');
	 * // => 'hi fred!'
	 */
	var bind = baseRest(function(func, thisArg, partials) {
	  var bitmask = WRAP_BIND_FLAG;
	  if (partials.length) {
	    var holders = replaceHolders(partials, getHolder(bind));
	    bitmask |= WRAP_PARTIAL_FLAG;
	  }
	  return createWrap(func, bitmask, thisArg, partials, holders);
	});

	// Assign default placeholders.
	bind.placeholder = {};

	module.exports = bind;


/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

	var baseSetData = __webpack_require__(370),
	    createBind = __webpack_require__(372),
	    createCurry = __webpack_require__(374),
	    createHybrid = __webpack_require__(375),
	    createPartial = __webpack_require__(398),
	    getData = __webpack_require__(383),
	    mergeData = __webpack_require__(399),
	    setData = __webpack_require__(390),
	    setWrapToString = __webpack_require__(391),
	    toInteger = __webpack_require__(304);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1,
	    WRAP_BIND_KEY_FLAG = 2,
	    WRAP_CURRY_FLAG = 8,
	    WRAP_CURRY_RIGHT_FLAG = 16,
	    WRAP_PARTIAL_FLAG = 32,
	    WRAP_PARTIAL_RIGHT_FLAG = 64;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a function that either curries or invokes `func` with optional
	 * `this` binding and partially applied arguments.
	 *
	 * @private
	 * @param {Function|string} func The function or method name to wrap.
	 * @param {number} bitmask The bitmask flags.
	 *    1 - `_.bind`
	 *    2 - `_.bindKey`
	 *    4 - `_.curry` or `_.curryRight` of a bound function
	 *    8 - `_.curry`
	 *   16 - `_.curryRight`
	 *   32 - `_.partial`
	 *   64 - `_.partialRight`
	 *  128 - `_.rearg`
	 *  256 - `_.ary`
	 *  512 - `_.flip`
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {Array} [partials] The arguments to be partially applied.
	 * @param {Array} [holders] The `partials` placeholder indexes.
	 * @param {Array} [argPos] The argument positions of the new function.
	 * @param {number} [ary] The arity cap of `func`.
	 * @param {number} [arity] The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
	  var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
	  if (!isBindKey && typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var length = partials ? partials.length : 0;
	  if (!length) {
	    bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
	    partials = holders = undefined;
	  }
	  ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
	  arity = arity === undefined ? arity : toInteger(arity);
	  length -= holders ? holders.length : 0;

	  if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
	    var partialsRight = partials,
	        holdersRight = holders;

	    partials = holders = undefined;
	  }
	  var data = isBindKey ? undefined : getData(func);

	  var newData = [
	    func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
	    argPos, ary, arity
	  ];

	  if (data) {
	    mergeData(newData, data);
	  }
	  func = newData[0];
	  bitmask = newData[1];
	  thisArg = newData[2];
	  partials = newData[3];
	  holders = newData[4];
	  arity = newData[9] = newData[9] === undefined
	    ? (isBindKey ? 0 : func.length)
	    : nativeMax(newData[9] - length, 0);

	  if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
	    bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
	  }
	  if (!bitmask || bitmask == WRAP_BIND_FLAG) {
	    var result = createBind(func, bitmask, thisArg);
	  } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
	    result = createCurry(func, bitmask, arity);
	  } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
	    result = createPartial(func, bitmask, thisArg, partials);
	  } else {
	    result = createHybrid.apply(undefined, newData);
	  }
	  var setter = data ? baseSetData : setData;
	  return setWrapToString(setter(result, newData), func, bitmask);
	}

	module.exports = createWrap;


/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(101),
	    metaMap = __webpack_require__(371);

	/**
	 * The base implementation of `setData` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to associate metadata with.
	 * @param {*} data The metadata.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetData = !metaMap ? identity : function(func, data) {
	  metaMap.set(func, data);
	  return func;
	};

	module.exports = baseSetData;


/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

	var WeakMap = __webpack_require__(138);

	/** Used to store function metadata. */
	var metaMap = WeakMap && new WeakMap;

	module.exports = metaMap;


/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

	var createCtor = __webpack_require__(373),
	    root = __webpack_require__(88);

	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1;

	/**
	 * Creates a function that wraps `func` to invoke it with the optional `this`
	 * binding of `thisArg`.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createBind(func, bitmask, thisArg) {
	  var isBind = bitmask & WRAP_BIND_FLAG,
	      Ctor = createCtor(func);

	  function wrapper() {
	    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	    return fn.apply(isBind ? thisArg : this, arguments);
	  }
	  return wrapper;
	}

	module.exports = createBind;


/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(274),
	    isObject = __webpack_require__(92);

	/**
	 * Creates a function that produces an instance of `Ctor` regardless of
	 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
	 *
	 * @private
	 * @param {Function} Ctor The constructor to wrap.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createCtor(Ctor) {
	  return function() {
	    // Use a `switch` statement to work with class constructors. See
	    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
	    // for more details.
	    var args = arguments;
	    switch (args.length) {
	      case 0: return new Ctor;
	      case 1: return new Ctor(args[0]);
	      case 2: return new Ctor(args[0], args[1]);
	      case 3: return new Ctor(args[0], args[1], args[2]);
	      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
	      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
	      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
	      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
	    }
	    var thisBinding = baseCreate(Ctor.prototype),
	        result = Ctor.apply(thisBinding, args);

	    // Mimic the constructor's `return` behavior.
	    // See https://es5.github.io/#x13.2.2 for more details.
	    return isObject(result) ? result : thisBinding;
	  };
	}

	module.exports = createCtor;


/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(103),
	    createCtor = __webpack_require__(373),
	    createHybrid = __webpack_require__(375),
	    createRecurry = __webpack_require__(379),
	    getHolder = __webpack_require__(395),
	    replaceHolders = __webpack_require__(397),
	    root = __webpack_require__(88);

	/**
	 * Creates a function that wraps `func` to enable currying.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {number} arity The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createCurry(func, bitmask, arity) {
	  var Ctor = createCtor(func);

	  function wrapper() {
	    var length = arguments.length,
	        args = Array(length),
	        index = length,
	        placeholder = getHolder(wrapper);

	    while (index--) {
	      args[index] = arguments[index];
	    }
	    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
	      ? []
	      : replaceHolders(args, placeholder);

	    length -= holders.length;
	    if (length < arity) {
	      return createRecurry(
	        func, bitmask, createHybrid, wrapper.placeholder, undefined,
	        args, holders, undefined, undefined, arity - length);
	    }
	    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	    return apply(fn, this, args);
	  }
	  return wrapper;
	}

	module.exports = createCurry;


/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

	var composeArgs = __webpack_require__(376),
	    composeArgsRight = __webpack_require__(377),
	    countHolders = __webpack_require__(378),
	    createCtor = __webpack_require__(373),
	    createRecurry = __webpack_require__(379),
	    getHolder = __webpack_require__(395),
	    reorder = __webpack_require__(396),
	    replaceHolders = __webpack_require__(397),
	    root = __webpack_require__(88);

	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1,
	    WRAP_BIND_KEY_FLAG = 2,
	    WRAP_CURRY_FLAG = 8,
	    WRAP_CURRY_RIGHT_FLAG = 16,
	    WRAP_ARY_FLAG = 128,
	    WRAP_FLIP_FLAG = 512;

	/**
	 * Creates a function that wraps `func` to invoke it with optional `this`
	 * binding of `thisArg`, partial application, and currying.
	 *
	 * @private
	 * @param {Function|string} func The function or method name to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {Array} [partials] The arguments to prepend to those provided to
	 *  the new function.
	 * @param {Array} [holders] The `partials` placeholder indexes.
	 * @param {Array} [partialsRight] The arguments to append to those provided
	 *  to the new function.
	 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
	 * @param {Array} [argPos] The argument positions of the new function.
	 * @param {number} [ary] The arity cap of `func`.
	 * @param {number} [arity] The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
	  var isAry = bitmask & WRAP_ARY_FLAG,
	      isBind = bitmask & WRAP_BIND_FLAG,
	      isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
	      isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
	      isFlip = bitmask & WRAP_FLIP_FLAG,
	      Ctor = isBindKey ? undefined : createCtor(func);

	  function wrapper() {
	    var length = arguments.length,
	        args = Array(length),
	        index = length;

	    while (index--) {
	      args[index] = arguments[index];
	    }
	    if (isCurried) {
	      var placeholder = getHolder(wrapper),
	          holdersCount = countHolders(args, placeholder);
	    }
	    if (partials) {
	      args = composeArgs(args, partials, holders, isCurried);
	    }
	    if (partialsRight) {
	      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
	    }
	    length -= holdersCount;
	    if (isCurried && length < arity) {
	      var newHolders = replaceHolders(args, placeholder);
	      return createRecurry(
	        func, bitmask, createHybrid, wrapper.placeholder, thisArg,
	        args, newHolders, argPos, ary, arity - length
	      );
	    }
	    var thisBinding = isBind ? thisArg : this,
	        fn = isBindKey ? thisBinding[func] : func;

	    length = args.length;
	    if (argPos) {
	      args = reorder(args, argPos);
	    } else if (isFlip && length > 1) {
	      args.reverse();
	    }
	    if (isAry && ary < length) {
	      args.length = ary;
	    }
	    if (this && this !== root && this instanceof wrapper) {
	      fn = Ctor || createCtor(fn);
	    }
	    return fn.apply(thisBinding, args);
	  }
	  return wrapper;
	}

	module.exports = createHybrid;


/***/ }),
/* 376 */
/***/ (function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates an array that is the composition of partially applied arguments,
	 * placeholders, and provided arguments into a single array of arguments.
	 *
	 * @private
	 * @param {Array} args The provided arguments.
	 * @param {Array} partials The arguments to prepend to those provided.
	 * @param {Array} holders The `partials` placeholder indexes.
	 * @params {boolean} [isCurried] Specify composing for a curried function.
	 * @returns {Array} Returns the new array of composed arguments.
	 */
	function composeArgs(args, partials, holders, isCurried) {
	  var argsIndex = -1,
	      argsLength = args.length,
	      holdersLength = holders.length,
	      leftIndex = -1,
	      leftLength = partials.length,
	      rangeLength = nativeMax(argsLength - holdersLength, 0),
	      result = Array(leftLength + rangeLength),
	      isUncurried = !isCurried;

	  while (++leftIndex < leftLength) {
	    result[leftIndex] = partials[leftIndex];
	  }
	  while (++argsIndex < holdersLength) {
	    if (isUncurried || argsIndex < argsLength) {
	      result[holders[argsIndex]] = args[argsIndex];
	    }
	  }
	  while (rangeLength--) {
	    result[leftIndex++] = args[argsIndex++];
	  }
	  return result;
	}

	module.exports = composeArgs;


/***/ }),
/* 377 */
/***/ (function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * This function is like `composeArgs` except that the arguments composition
	 * is tailored for `_.partialRight`.
	 *
	 * @private
	 * @param {Array} args The provided arguments.
	 * @param {Array} partials The arguments to append to those provided.
	 * @param {Array} holders The `partials` placeholder indexes.
	 * @params {boolean} [isCurried] Specify composing for a curried function.
	 * @returns {Array} Returns the new array of composed arguments.
	 */
	function composeArgsRight(args, partials, holders, isCurried) {
	  var argsIndex = -1,
	      argsLength = args.length,
	      holdersIndex = -1,
	      holdersLength = holders.length,
	      rightIndex = -1,
	      rightLength = partials.length,
	      rangeLength = nativeMax(argsLength - holdersLength, 0),
	      result = Array(rangeLength + rightLength),
	      isUncurried = !isCurried;

	  while (++argsIndex < rangeLength) {
	    result[argsIndex] = args[argsIndex];
	  }
	  var offset = argsIndex;
	  while (++rightIndex < rightLength) {
	    result[offset + rightIndex] = partials[rightIndex];
	  }
	  while (++holdersIndex < holdersLength) {
	    if (isUncurried || argsIndex < argsLength) {
	      result[offset + holders[holdersIndex]] = args[argsIndex++];
	    }
	  }
	  return result;
	}

	module.exports = composeArgsRight;


/***/ }),
/* 378 */
/***/ (function(module, exports) {

	/**
	 * Gets the number of `placeholder` occurrences in `array`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} placeholder The placeholder to search for.
	 * @returns {number} Returns the placeholder count.
	 */
	function countHolders(array, placeholder) {
	  var length = array.length,
	      result = 0;

	  while (length--) {
	    if (array[length] === placeholder) {
	      ++result;
	    }
	  }
	  return result;
	}

	module.exports = countHolders;


/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

	var isLaziable = __webpack_require__(380),
	    setData = __webpack_require__(390),
	    setWrapToString = __webpack_require__(391);

	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1,
	    WRAP_BIND_KEY_FLAG = 2,
	    WRAP_CURRY_BOUND_FLAG = 4,
	    WRAP_CURRY_FLAG = 8,
	    WRAP_PARTIAL_FLAG = 32,
	    WRAP_PARTIAL_RIGHT_FLAG = 64;

	/**
	 * Creates a function that wraps `func` to continue currying.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {Function} wrapFunc The function to create the `func` wrapper.
	 * @param {*} placeholder The placeholder value.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {Array} [partials] The arguments to prepend to those provided to
	 *  the new function.
	 * @param {Array} [holders] The `partials` placeholder indexes.
	 * @param {Array} [argPos] The argument positions of the new function.
	 * @param {number} [ary] The arity cap of `func`.
	 * @param {number} [arity] The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
	  var isCurry = bitmask & WRAP_CURRY_FLAG,
	      newHolders = isCurry ? holders : undefined,
	      newHoldersRight = isCurry ? undefined : holders,
	      newPartials = isCurry ? partials : undefined,
	      newPartialsRight = isCurry ? undefined : partials;

	  bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
	  bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

	  if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
	    bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
	  }
	  var newData = [
	    func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
	    newHoldersRight, argPos, ary, arity
	  ];

	  var result = wrapFunc.apply(undefined, newData);
	  if (isLaziable(func)) {
	    setData(result, newData);
	  }
	  result.placeholder = placeholder;
	  return setWrapToString(result, func, bitmask);
	}

	module.exports = createRecurry;


/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

	var LazyWrapper = __webpack_require__(381),
	    getData = __webpack_require__(383),
	    getFuncName = __webpack_require__(385),
	    lodash = __webpack_require__(387);

	/**
	 * Checks if `func` has a lazy counterpart.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
	 *  else `false`.
	 */
	function isLaziable(func) {
	  var funcName = getFuncName(func),
	      other = lodash[funcName];

	  if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
	    return false;
	  }
	  if (func === other) {
	    return true;
	  }
	  var data = getData(other);
	  return !!data && func === data[0];
	}

	module.exports = isLaziable;


/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(274),
	    baseLodash = __webpack_require__(382);

	/** Used as references for the maximum length and index of an array. */
	var MAX_ARRAY_LENGTH = 4294967295;

	/**
	 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
	 *
	 * @private
	 * @constructor
	 * @param {*} value The value to wrap.
	 */
	function LazyWrapper(value) {
	  this.__wrapped__ = value;
	  this.__actions__ = [];
	  this.__dir__ = 1;
	  this.__filtered__ = false;
	  this.__iteratees__ = [];
	  this.__takeCount__ = MAX_ARRAY_LENGTH;
	  this.__views__ = [];
	}

	// Ensure `LazyWrapper` is an instance of `baseLodash`.
	LazyWrapper.prototype = baseCreate(baseLodash.prototype);
	LazyWrapper.prototype.constructor = LazyWrapper;

	module.exports = LazyWrapper;


/***/ }),
/* 382 */
/***/ (function(module, exports) {

	/**
	 * The function whose prototype chain sequence wrappers inherit from.
	 *
	 * @private
	 */
	function baseLodash() {
	  // No operation performed.
	}

	module.exports = baseLodash;


/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

	var metaMap = __webpack_require__(371),
	    noop = __webpack_require__(384);

	/**
	 * Gets metadata for `func`.
	 *
	 * @private
	 * @param {Function} func The function to query.
	 * @returns {*} Returns the metadata for `func`.
	 */
	var getData = !metaMap ? noop : function(func) {
	  return metaMap.get(func);
	};

	module.exports = getData;


/***/ }),
/* 384 */
/***/ (function(module, exports) {

	/**
	 * This method returns `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Util
	 * @example
	 *
	 * _.times(2, _.noop);
	 * // => [undefined, undefined]
	 */
	function noop() {
	  // No operation performed.
	}

	module.exports = noop;


/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

	var realNames = __webpack_require__(386);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the name of `func`.
	 *
	 * @private
	 * @param {Function} func The function to query.
	 * @returns {string} Returns the function name.
	 */
	function getFuncName(func) {
	  var result = (func.name + ''),
	      array = realNames[result],
	      length = hasOwnProperty.call(realNames, result) ? array.length : 0;

	  while (length--) {
	    var data = array[length],
	        otherFunc = data.func;
	    if (otherFunc == null || otherFunc == func) {
	      return data.name;
	    }
	  }
	  return result;
	}

	module.exports = getFuncName;


/***/ }),
/* 386 */
/***/ (function(module, exports) {

	/** Used to lookup unminified function names. */
	var realNames = {};

	module.exports = realNames;


/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

	var LazyWrapper = __webpack_require__(381),
	    LodashWrapper = __webpack_require__(388),
	    baseLodash = __webpack_require__(382),
	    isArray = __webpack_require__(119),
	    isObjectLike = __webpack_require__(118),
	    wrapperClone = __webpack_require__(389);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates a `lodash` object which wraps `value` to enable implicit method
	 * chain sequences. Methods that operate on and return arrays, collections,
	 * and functions can be chained together. Methods that retrieve a single value
	 * or may return a primitive value will automatically end the chain sequence
	 * and return the unwrapped value. Otherwise, the value must be unwrapped
	 * with `_#value`.
	 *
	 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
	 * enabled using `_.chain`.
	 *
	 * The execution of chained methods is lazy, that is, it's deferred until
	 * `_#value` is implicitly or explicitly called.
	 *
	 * Lazy evaluation allows several methods to support shortcut fusion.
	 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
	 * the creation of intermediate arrays and can greatly reduce the number of
	 * iteratee executions. Sections of a chain sequence qualify for shortcut
	 * fusion if the section is applied to an array and iteratees accept only
	 * one argument. The heuristic for whether a section qualifies for shortcut
	 * fusion is subject to change.
	 *
	 * Chaining is supported in custom builds as long as the `_#value` method is
	 * directly or indirectly included in the build.
	 *
	 * In addition to lodash methods, wrappers have `Array` and `String` methods.
	 *
	 * The wrapper `Array` methods are:
	 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
	 *
	 * The wrapper `String` methods are:
	 * `replace` and `split`
	 *
	 * The wrapper methods that support shortcut fusion are:
	 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
	 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
	 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
	 *
	 * The chainable wrapper methods are:
	 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
	 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
	 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
	 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
	 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
	 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
	 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
	 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
	 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
	 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
	 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
	 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
	 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
	 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
	 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
	 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
	 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
	 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
	 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
	 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
	 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
	 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
	 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
	 * `zipObject`, `zipObjectDeep`, and `zipWith`
	 *
	 * The wrapper methods that are **not** chainable by default are:
	 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
	 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
	 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
	 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
	 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
	 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
	 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
	 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
	 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
	 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
	 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
	 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
	 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
	 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
	 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
	 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
	 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
	 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
	 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
	 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
	 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
	 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
	 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
	 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
	 * `upperFirst`, `value`, and `words`
	 *
	 * @name _
	 * @constructor
	 * @category Seq
	 * @param {*} value The value to wrap in a `lodash` instance.
	 * @returns {Object} Returns the new `lodash` wrapper instance.
	 * @example
	 *
	 * function square(n) {
	 *   return n * n;
	 * }
	 *
	 * var wrapped = _([1, 2, 3]);
	 *
	 * // Returns an unwrapped value.
	 * wrapped.reduce(_.add);
	 * // => 6
	 *
	 * // Returns a wrapped value.
	 * var squares = wrapped.map(square);
	 *
	 * _.isArray(squares);
	 * // => false
	 *
	 * _.isArray(squares.value());
	 * // => true
	 */
	function lodash(value) {
	  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
	    if (value instanceof LodashWrapper) {
	      return value;
	    }
	    if (hasOwnProperty.call(value, '__wrapped__')) {
	      return wrapperClone(value);
	    }
	  }
	  return new LodashWrapper(value);
	}

	// Ensure wrappers are instances of `baseLodash`.
	lodash.prototype = baseLodash.prototype;
	lodash.prototype.constructor = lodash;

	module.exports = lodash;


/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(274),
	    baseLodash = __webpack_require__(382);

	/**
	 * The base constructor for creating `lodash` wrapper objects.
	 *
	 * @private
	 * @param {*} value The value to wrap.
	 * @param {boolean} [chainAll] Enable explicit method chain sequences.
	 */
	function LodashWrapper(value, chainAll) {
	  this.__wrapped__ = value;
	  this.__actions__ = [];
	  this.__chain__ = !!chainAll;
	  this.__index__ = 0;
	  this.__values__ = undefined;
	}

	LodashWrapper.prototype = baseCreate(baseLodash.prototype);
	LodashWrapper.prototype.constructor = LodashWrapper;

	module.exports = LodashWrapper;


/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

	var LazyWrapper = __webpack_require__(381),
	    LodashWrapper = __webpack_require__(388),
	    copyArray = __webpack_require__(257);

	/**
	 * Creates a clone of `wrapper`.
	 *
	 * @private
	 * @param {Object} wrapper The wrapper to clone.
	 * @returns {Object} Returns the cloned wrapper.
	 */
	function wrapperClone(wrapper) {
	  if (wrapper instanceof LazyWrapper) {
	    return wrapper.clone();
	  }
	  var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
	  result.__actions__ = copyArray(wrapper.__actions__);
	  result.__index__  = wrapper.__index__;
	  result.__values__ = wrapper.__values__;
	  return result;
	}

	module.exports = wrapperClone;


/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

	var baseSetData = __webpack_require__(370),
	    shortOut = __webpack_require__(107);

	/**
	 * Sets metadata for `func`.
	 *
	 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
	 * period of time, it will trip its breaker and transition to an identity
	 * function to avoid garbage collection pauses in V8. See
	 * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
	 * for more details.
	 *
	 * @private
	 * @param {Function} func The function to associate metadata with.
	 * @param {*} data The metadata.
	 * @returns {Function} Returns `func`.
	 */
	var setData = shortOut(baseSetData);

	module.exports = setData;


/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

	var getWrapDetails = __webpack_require__(392),
	    insertWrapDetails = __webpack_require__(393),
	    setToString = __webpack_require__(104),
	    updateWrapDetails = __webpack_require__(394);

	/**
	 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
	 * with wrapper details in a comment at the top of the source body.
	 *
	 * @private
	 * @param {Function} wrapper The function to modify.
	 * @param {Function} reference The reference function.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @returns {Function} Returns `wrapper`.
	 */
	function setWrapToString(wrapper, reference, bitmask) {
	  var source = (reference + '');
	  return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
	}

	module.exports = setWrapToString;


/***/ }),
/* 392 */
/***/ (function(module, exports) {

	/** Used to match wrap detail comments. */
	var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
	    reSplitDetails = /,? & /;

	/**
	 * Extracts wrapper details from the `source` body comment.
	 *
	 * @private
	 * @param {string} source The source to inspect.
	 * @returns {Array} Returns the wrapper details.
	 */
	function getWrapDetails(source) {
	  var match = source.match(reWrapDetails);
	  return match ? match[1].split(reSplitDetails) : [];
	}

	module.exports = getWrapDetails;


/***/ }),
/* 393 */
/***/ (function(module, exports) {

	/** Used to match wrap detail comments. */
	var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;

	/**
	 * Inserts wrapper `details` in a comment at the top of the `source` body.
	 *
	 * @private
	 * @param {string} source The source to modify.
	 * @returns {Array} details The details to insert.
	 * @returns {string} Returns the modified source.
	 */
	function insertWrapDetails(source, details) {
	  var length = details.length;
	  if (!length) {
	    return source;
	  }
	  var lastIndex = length - 1;
	  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
	  details = details.join(length > 2 ? ', ' : ' ');
	  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
	}

	module.exports = insertWrapDetails;


/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(250),
	    arrayIncludes = __webpack_require__(168);

	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1,
	    WRAP_BIND_KEY_FLAG = 2,
	    WRAP_CURRY_FLAG = 8,
	    WRAP_CURRY_RIGHT_FLAG = 16,
	    WRAP_PARTIAL_FLAG = 32,
	    WRAP_PARTIAL_RIGHT_FLAG = 64,
	    WRAP_ARY_FLAG = 128,
	    WRAP_REARG_FLAG = 256,
	    WRAP_FLIP_FLAG = 512;

	/** Used to associate wrap methods with their bit flags. */
	var wrapFlags = [
	  ['ary', WRAP_ARY_FLAG],
	  ['bind', WRAP_BIND_FLAG],
	  ['bindKey', WRAP_BIND_KEY_FLAG],
	  ['curry', WRAP_CURRY_FLAG],
	  ['curryRight', WRAP_CURRY_RIGHT_FLAG],
	  ['flip', WRAP_FLIP_FLAG],
	  ['partial', WRAP_PARTIAL_FLAG],
	  ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
	  ['rearg', WRAP_REARG_FLAG]
	];

	/**
	 * Updates wrapper `details` based on `bitmask` flags.
	 *
	 * @private
	 * @returns {Array} details The details to modify.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @returns {Array} Returns `details`.
	 */
	function updateWrapDetails(details, bitmask) {
	  arrayEach(wrapFlags, function(pair) {
	    var value = '_.' + pair[0];
	    if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
	      details.push(value);
	    }
	  });
	  return details.sort();
	}

	module.exports = updateWrapDetails;


/***/ }),
/* 395 */
/***/ (function(module, exports) {

	/**
	 * Gets the argument placeholder value for `func`.
	 *
	 * @private
	 * @param {Function} func The function to inspect.
	 * @returns {*} Returns the placeholder value.
	 */
	function getHolder(func) {
	  var object = func;
	  return object.placeholder;
	}

	module.exports = getHolder;


/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

	var copyArray = __webpack_require__(257),
	    isIndex = __webpack_require__(111);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMin = Math.min;

	/**
	 * Reorder `array` according to the specified indexes where the element at
	 * the first index is assigned as the first element, the element at
	 * the second index is assigned as the second element, and so on.
	 *
	 * @private
	 * @param {Array} array The array to reorder.
	 * @param {Array} indexes The arranged array indexes.
	 * @returns {Array} Returns `array`.
	 */
	function reorder(array, indexes) {
	  var arrLength = array.length,
	      length = nativeMin(indexes.length, arrLength),
	      oldArray = copyArray(array);

	  while (length--) {
	    var index = indexes[length];
	    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
	  }
	  return array;
	}

	module.exports = reorder;


/***/ }),
/* 397 */
/***/ (function(module, exports) {

	/** Used as the internal argument placeholder. */
	var PLACEHOLDER = '__lodash_placeholder__';

	/**
	 * Replaces all `placeholder` elements in `array` with an internal placeholder
	 * and returns an array of their indexes.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {*} placeholder The placeholder to replace.
	 * @returns {Array} Returns the new array of placeholder indexes.
	 */
	function replaceHolders(array, placeholder) {
	  var index = -1,
	      length = array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (value === placeholder || value === PLACEHOLDER) {
	      array[index] = PLACEHOLDER;
	      result[resIndex++] = index;
	    }
	  }
	  return result;
	}

	module.exports = replaceHolders;


/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(103),
	    createCtor = __webpack_require__(373),
	    root = __webpack_require__(88);

	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1;

	/**
	 * Creates a function that wraps `func` to invoke it with the `this` binding
	 * of `thisArg` and `partials` prepended to the arguments it receives.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} partials The arguments to prepend to those provided to
	 *  the new function.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createPartial(func, bitmask, thisArg, partials) {
	  var isBind = bitmask & WRAP_BIND_FLAG,
	      Ctor = createCtor(func);

	  function wrapper() {
	    var argsIndex = -1,
	        argsLength = arguments.length,
	        leftIndex = -1,
	        leftLength = partials.length,
	        args = Array(leftLength + argsLength),
	        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

	    while (++leftIndex < leftLength) {
	      args[leftIndex] = partials[leftIndex];
	    }
	    while (argsLength--) {
	      args[leftIndex++] = arguments[++argsIndex];
	    }
	    return apply(fn, isBind ? thisArg : this, args);
	  }
	  return wrapper;
	}

	module.exports = createPartial;


/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

	var composeArgs = __webpack_require__(376),
	    composeArgsRight = __webpack_require__(377),
	    replaceHolders = __webpack_require__(397);

	/** Used as the internal argument placeholder. */
	var PLACEHOLDER = '__lodash_placeholder__';

	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1,
	    WRAP_BIND_KEY_FLAG = 2,
	    WRAP_CURRY_BOUND_FLAG = 4,
	    WRAP_CURRY_FLAG = 8,
	    WRAP_ARY_FLAG = 128,
	    WRAP_REARG_FLAG = 256;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMin = Math.min;

	/**
	 * Merges the function metadata of `source` into `data`.
	 *
	 * Merging metadata reduces the number of wrappers used to invoke a function.
	 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
	 * may be applied regardless of execution order. Methods like `_.ary` and
	 * `_.rearg` modify function arguments, making the order in which they are
	 * executed important, preventing the merging of metadata. However, we make
	 * an exception for a safe combined case where curried functions have `_.ary`
	 * and or `_.rearg` applied.
	 *
	 * @private
	 * @param {Array} data The destination metadata.
	 * @param {Array} source The source metadata.
	 * @returns {Array} Returns `data`.
	 */
	function mergeData(data, source) {
	  var bitmask = data[1],
	      srcBitmask = source[1],
	      newBitmask = bitmask | srcBitmask,
	      isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

	  var isCombo =
	    ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
	    ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
	    ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

	  // Exit early if metadata can't be merged.
	  if (!(isCommon || isCombo)) {
	    return data;
	  }
	  // Use source `thisArg` if available.
	  if (srcBitmask & WRAP_BIND_FLAG) {
	    data[2] = source[2];
	    // Set when currying a bound function.
	    newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
	  }
	  // Compose partial arguments.
	  var value = source[3];
	  if (value) {
	    var partials = data[3];
	    data[3] = partials ? composeArgs(partials, value, source[4]) : value;
	    data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
	  }
	  // Compose partial right arguments.
	  value = source[5];
	  if (value) {
	    partials = data[5];
	    data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
	    data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
	  }
	  // Use source `argPos` if available.
	  value = source[7];
	  if (value) {
	    data[7] = value;
	  }
	  // Use source `ary` if it's smaller.
	  if (srcBitmask & WRAP_ARY_FLAG) {
	    data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
	  }
	  // Use source `arity` if one is not provided.
	  if (data[9] == null) {
	    data[9] = source[9];
	  }
	  // Use source `func` and merge bitmasks.
	  data[0] = source[0];
	  data[1] = newBitmask;

	  return data;
	}

	module.exports = mergeData;


/***/ })
/******/ ])
});
;