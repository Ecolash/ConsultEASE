import express, {Express, IRouter, Request, Response} from 'express'
import { detailsRouter } from './Patient/details';
import { findDocRouter } from './Patient/finddoc';
import { bookRouter } from './Patient/appointment';
export const patRouter:IRouter=express.Router();
patRouter.use('/details',detailsRouter);
patRouter.use('/doctors',findDocRouter);
patRouter.use('/book',bookRouter);