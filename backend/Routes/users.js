const express = require("express");
const UserVerifyToken = require("../MiddleWare/UserVerifyToken.js");
const UserToken = require("../Controllers/UserToken.js");

const {
 getTempoxlUserLogin, 
 getAllTempoxlUsers,
 getTempoxlUserByPhoneno,
 getTempoxlUserById,
 createTempoxlUser,
 updateTempoxlUser,
 deleteTempoxlUser,
 TempoxlUserLogout,
  
  } = require("../Controllers/UsersControllers.js");




 
const  usersRouter = express.Router();

usersRouter.post('/login',getTempoxlUserLogin);
usersRouter.get('/tempoxlusers',getAllTempoxlUsers);
usersRouter.get('/account/:phoneno',getTempoxlUserByPhoneno);
usersRouter.get('/user/:tempoxluserid',getTempoxlUserById);
usersRouter.post('/', createTempoxlUser);
usersRouter.patch('/:tempoxluserid',updateTempoxlUser);
usersRouter.delete('/userone/:tempoxluserid',deleteTempoxlUser);
usersRouter.delete('/logout',TempoxlUserLogout);
usersRouter.get('/users',UserVerifyToken);
usersRouter.get('/usertoken',UserToken);

 
module.exports  = usersRouter;
