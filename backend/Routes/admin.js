const express = require("express");


const  verifyToken  = require("../MiddleWare/VerifyToken.js");
const refreshToken = require("../Controllers/RefreshToken.js");


const {
  getTempoxlAdminLogin, 
  getTempoxlAdminById,
  createTempoxlAdmin,
  updateTempoxlAdmin,
  deleteTempoxlAdmin,
  TempoxlAdminLogout,

}  = require("../Controllers/Admin.js");

 
const tempoxlAdminRouter = express.Router();

tempoxlAdminRouter.post('/login', getTempoxlAdminLogin);
tempoxlAdminRouter.get('/user/:tempoxladminid', getTempoxlAdminById);
tempoxlAdminRouter.post('/', createTempoxlAdmin);
tempoxlAdminRouter.patch('/:tempoxladminid', updateTempoxlAdmin);
tempoxlAdminRouter.delete('/user/:tempoxladminid', deleteTempoxlAdmin);
tempoxlAdminRouter.delete('/logout', TempoxlAdminLogout);
tempoxlAdminRouter.get('/users', verifyToken);
tempoxlAdminRouter.get('/token', refreshToken);


module.exports = tempoxlAdminRouter
