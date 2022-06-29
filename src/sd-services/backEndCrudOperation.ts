let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
//append_imports_end
export class backEndCrudOperation {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;
  private swaggerDocument: Object;
  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    swaggerDocument,
    globalTimers
  ) {
    this.serviceName = 'backEndCrudOperation';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.swaggerDocument = swaggerDocument;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    swaggerDocument?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new backEndCrudOperation(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        swaggerDocument,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_backEndCrudOperation_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: backEndCrudOperation');

    //appendnew_flow_backEndCrudOperation_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: backEndCrudOperation');

    if (!this.swaggerDocument['paths']['/getTravelRequests']) {
      this.swaggerDocument['paths']['/getTravelRequests'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/getTravelRequests']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/getTravelRequests`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_yRvXdDW1ce4L5sGW(bh);
          //appendnew_next_sd_omNsKFfs1sghZncJ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_omNsKFfs1sghZncJ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/addTravelRequest']) {
      this.swaggerDocument['paths']['/addTravelRequest'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/addTravelRequest']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/addTravelRequest`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_ksJJ3xRmsJ9bSuBB(bh);
          //appendnew_next_sd_dAm01xSYCtnp9vGl
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_dAm01xSYCtnp9vGl');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/editTravelRequest/{id}']) {
      this.swaggerDocument['paths']['/editTravelRequest/{id}'] = {
        put: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/editTravelRequest/{id}']['put'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['put'](
      `${this.serviceBasePath}/editTravelRequest/:id`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_kfm934BvFLdWmYOz(bh);
          //appendnew_next_sd_ooYagSW8LqDs0aFL
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ooYagSW8LqDs0aFL');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/deleteTravelRequest/{id}']) {
      this.swaggerDocument['paths']['/deleteTravelRequest/{id}'] = {
        delete: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/deleteTravelRequest/{id}']['delete'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['delete'](
      `${this.serviceBasePath}/deleteTravelRequest/:id`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_CaOb9t77WNQGLfaa(bh);
          //appendnew_next_sd_poBKROG9SlJT9rUz
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_poBKROG9SlJT9rUz');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/getAllTravelRequests']) {
      this.swaggerDocument['paths']['/getAllTravelRequests'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/getAllTravelRequests']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/getAllTravelRequests`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_2xwgTrI09OrhGcOd(bh);
          //appendnew_next_sd_wtsZAUWyHaIvFOm7
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_wtsZAUWyHaIvFOm7');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_backEndCrudOperation_HttpIn
  }
  //   service flows_backEndCrudOperation

  //appendnew_flow_backEndCrudOperation_start

  async sd_yRvXdDW1ce4L5sGW(bh) {
    try {
      console.log(bh.input.body);
      bh.input.filter = bh.input.body;
      bh = await this.sd_IjJ1jVzVwMi0IdeG(bh);
      //appendnew_next_sd_yRvXdDW1ce4L5sGW
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yRvXdDW1ce4L5sGW');
    }
  }

  async sd_IjJ1jVzVwMi0IdeG(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_pM9zgNj1gvs7u0xN',
        'travelRequests',
        bh.input.filter,
        {}
      );
      await this.sd_vkXGu1ns7ipDB16f(bh);
      //appendnew_next_sd_IjJ1jVzVwMi0IdeG
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IjJ1jVzVwMi0IdeG');
    }
  }

  async sd_vkXGu1ns7ipDB16f(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vkXGu1ns7ipDB16f');
    }
  }

  async sd_ksJJ3xRmsJ9bSuBB(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().insertOne(
        'sd_pM9zgNj1gvs7u0xN',
        'travelRequests',
        bh.input.body,
        {}
      );
      await this.sd_3alkD1hNZYe7OgiD(bh);
      //appendnew_next_sd_ksJJ3xRmsJ9bSuBB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ksJJ3xRmsJ9bSuBB');
    }
  }

  async sd_3alkD1hNZYe7OgiD(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3alkD1hNZYe7OgiD');
    }
  }

  async sd_kfm934BvFLdWmYOz(bh) {
    try {
      let objId = require('mongodb').ObjectId;
      bh.input.filter = {
        _id: new objId(bh.input.params.id),
      };
      delete bh.input.body._id;
      bh.document = { $set: bh.input.body };
      bh = await this.sd_CM6k5K86stI7Qzk8(bh);
      //appendnew_next_sd_kfm934BvFLdWmYOz
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kfm934BvFLdWmYOz');
    }
  }

  async sd_CM6k5K86stI7Qzk8(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().updateOne(
        'sd_pM9zgNj1gvs7u0xN',
        'travelRequests',
        bh.input.filter,
        bh.document,
        {}
      );
      await this.sd_Qa6hPAWzccBLcZAy(bh);
      //appendnew_next_sd_CM6k5K86stI7Qzk8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CM6k5K86stI7Qzk8');
    }
  }

  async sd_Qa6hPAWzccBLcZAy(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Qa6hPAWzccBLcZAy');
    }
  }

  async sd_CaOb9t77WNQGLfaa(bh) {
    try {
      bh.input.filter = {
        id: bh.input.id,
      };
      bh = await this.sd_jR6vB4Tsvf8SHcmu(bh);
      //appendnew_next_sd_CaOb9t77WNQGLfaa
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CaOb9t77WNQGLfaa');
    }
  }

  async sd_jR6vB4Tsvf8SHcmu(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().findOneAndDelete(
        'sd_pM9zgNj1gvs7u0xN',
        'travelRequests',
        bh.input.filter,
        {}
      );
      await this.sd_PoGsIw7qwvL6kZRy(bh);
      //appendnew_next_sd_jR6vB4Tsvf8SHcmu
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jR6vB4Tsvf8SHcmu');
    }
  }

  async sd_PoGsIw7qwvL6kZRy(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PoGsIw7qwvL6kZRy');
    }
  }

  async sd_2xwgTrI09OrhGcOd(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_pM9zgNj1gvs7u0xN',
        'travelRequests',
        bh.input.filter,
        {}
      );
      await this.sd_HOCWWkyz9U1XynhN(bh);
      //appendnew_next_sd_2xwgTrI09OrhGcOd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2xwgTrI09OrhGcOd');
    }
  }

  async sd_HOCWWkyz9U1XynhN(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HOCWWkyz9U1XynhN');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_backEndCrudOperation_Catch
}
