const express = require("express")

const {
getBuyLyricsById, 
createBuyLyrics,
deleteBuyLyrics,
updateBuyLyrics,
getAllBuyLyrics

} = require("../Controllers/BuyLyricsControllers.js");



 
const  buyLyricsRouter = express.Router();

buyLyricsRouter.get('/buylyricall', getAllBuyLyrics);
buyLyricsRouter.patch('/:buylyricsid', updateBuyLyrics);
buyLyricsRouter.get('/one/:buylyricsid', getBuyLyricsById);
buyLyricsRouter.post('/', createBuyLyrics);
buyLyricsRouter.delete('/:buylyricsid', deleteBuyLyrics);



 
module.exports  = buyLyricsRouter;
