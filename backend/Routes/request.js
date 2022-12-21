const express = require("express");
 
const  { 
    createRequest,
    getAllRequest,
    deleteRequest
} = require("../Controllers/RequestControllers.js");
 
const requestRouter = express.Router();
 
requestRouter.get('/requests', getAllRequest);
requestRouter.post('/', createRequest);
requestRouter.delete('/:requestid', deleteRequest);
 
module.exports =  requestRouter;