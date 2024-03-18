"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.docRouter = void 0;
const express_1 = __importDefault(require("express"));
const details_1 = require("./Doctor/details");
const dashboard_1 = require("./Doctor/dashboard");
exports.docRouter = express_1.default.Router();
exports.docRouter.use('/details', details_1.detailsRouter);
exports.docRouter.use('/dashboard', dashboard_1.dashRouter);
