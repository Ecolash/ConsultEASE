"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.patRouter = void 0;
const express_1 = __importDefault(require("express"));
const details_1 = require("./Patient/details");
const finddoc_1 = require("./Patient/finddoc");
const appointment_1 = require("./Patient/appointment");
exports.patRouter = express_1.default.Router();
exports.patRouter.use('/details', details_1.detailsRouter);
exports.patRouter.use('/doctors', finddoc_1.findDocRouter);
exports.patRouter.use('/book', appointment_1.bookRouter);
