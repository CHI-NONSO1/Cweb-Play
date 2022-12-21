const express = require("express")

const {
getLyricsById, 
createLyrics,
deleteLyrics,
updateLyrics,
getAllLyrics,
getLyricsBySongId

} = require("../Controllers/LyricsControllers.js");



 
const  lyricsRouter = express.Router();

lyricsRouter.get('/lyric', getAllLyrics);
lyricsRouter.patch('/:lyricsid', updateLyrics);
lyricsRouter.get('/one/:lyricsid', getLyricsById);
lyricsRouter.get('/playone/:songid', getLyricsBySongId);
lyricsRouter.post('/', createLyrics);
lyricsRouter.delete('/:lyricsid', deleteLyrics);



 
module.exports  = lyricsRouter;
