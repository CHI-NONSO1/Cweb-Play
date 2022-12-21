const express = require("express")
const {
 getPlayListByName, 
 getPlayListById,
 createPlayList,
 deletePlayList,
 getAllPlayList,
 getPlayListByUserId
  
  } = require( "../Controllers/PlayListControllers.js");



 
const  playListRouter = express.Router();

playListRouter.get('/playlists', getAllPlayList);
playListRouter.get('/name/:title', getPlayListByName);
playListRouter.get('/id?/:playlistid', getPlayListById);
playListRouter.get('/tempoxluser/:tempoxluserid', getPlayListByUserId);
playListRouter.post('/',  createPlayList);
playListRouter.delete('/:playlistid', deletePlayList);



 
module.exports  = playListRouter;
