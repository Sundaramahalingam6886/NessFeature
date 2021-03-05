"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
//middleware
//http-get request url : http://localhost:4000/static/index.html
app.use('/static', express_1.default.static(__dirname + '/public'));
app.get("/", function (req, res, next) {
    console.log("Http logging middleware");
    next();
}, function (req, res, next) {
    console.log("Http validating");
    next();
}, function (req, res, next) {
    console.log("Http request handler");
    res.end();
});
//api
app.listen(4000, function () {
    console.log("Server is listening on port 3000");
});
