import express from 'express';
import routes from './routes';

class App{
  constructor(){
    this.server = express();
    this._middlewares();
    this._routes();
  }

  _middlewares(){
    this.server.use(express.json());
  }

  _routes(){
    this.server.use(routes);
  }
}

export default new App().server;