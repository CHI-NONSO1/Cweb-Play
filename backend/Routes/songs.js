const express = require("express")

const {
   updateSong, 
   getAllSongs, 
   getSongByName,
   getSongById,
   createSongs,
   deleteSong

  } = require("../Controllers/SongsControllers.js");



 
const  songRouter = express.Router();

songRouter.get('/songs', getAllSongs);
songRouter.get('/name/:songtitle', getSongByName);
songRouter.patch('/:songid', updateSong);
songRouter.get('/playlist/:songid', getSongById);
songRouter.post('/',  createSongs);
songRouter.delete('/:songid', deleteSong);



 
module.exports  = songRouter;
