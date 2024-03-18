import express, {Express, IRouter, Request, Response} from 'express'
import { detailsRouter } from './Doctor/details';
import { dashRouter } from './Doctor/dashboard';
export const docRouter:IRouter=express.Router();

docRouter.use('/details',detailsRouter);
docRouter.use('/dashboard',dashRouter);
