const BuyLyrics = require( "../Models/buyLyricsModels.js");

async function getAllBuyLyrics(req, res){
  try {
      const buylyrics = await  BuyLyrics.findAll({
          attributes:
          [
            'buylyricsid',
            'lyricsname',
            'price',
            'line1',
            'line2',
            'line3',
            'line4',
            'line5',
            'line6',
            'line7',
            'line8',
            'line9',
            'line10',
            'line11',
            'line12',
            'line13',
            'line14',
            'line15',
            'line16',
            'line17',
            'line18',
            'line19',
            'line20',
            'line21',
            'line22',
            'line23',
            'line24',
            'line25',
            'line26',
            'line27',
            'line28',
            'line29',
            'line30',
            'line31',
            'line32',
            'line33',
            'line34',
            'line35',
            'line36',
            'line37',
            'line38',
            'line39',
            'line40',
            'line41',
            'line42',
            'line43',
            'line44',
            'line45',
            'line46',
            'line47',
            'line48',
            'line49',
            'line50',
            'line51',
            'line52',
            'line53',
            'line54',
            'line55',
            'line56',
            'line57',
            'line58',
            'line59',
            'line60',
            'line61',
            'line62',
            'line63',
            'line64',
            'line65',
            'line66',
            'line67',
            'line68',
            'line69',
            'line70',
          ]
      });
      res.json(buylyrics);
  } catch (error) {
      res.json({ message: error.message });
  }  
}

module.exports.getAllBuyLyrics = getAllBuyLyrics;

async function getBuyLyricsById(req, res){
  try {
      const buylyrics = await  BuyLyrics.findAll({
          where: {
            buylyricsid: req.params.buylyricsid
          }
      });
      res.json(buylyrics[0]);
  } catch (error) {
      res.json({ message: error.message });
  }  
}

module.exports.getBuyLyricsById = getBuyLyricsById;


async function createBuyLyrics(req, res){
    const { 
      lyricsname, 
      purchase,
      line1,
      line2,
      line3,
      line4,
      line5,
      line6,
      line7,
      line8,
      line9,
      line10,
      line11,
      line12,
      line13,
      line14,
      line15,
      line16,
      line17,
      line18,
      line19,
      line20,
      line21,
      line22,
      line23,
      line24,
      line25,
      line26,
      line27,
      line28,
      line29,
      line30,
      line31,
      line32,
      line33,
      line34,
      line35,
      line36,
      line37,
      line38,
      line39,
      line40,
      line41,
      line42,
      line43,
      line44,
      line45,
      line46,
      line47,
      line48,
      line49,
      line50,
      line51,
      line52,
      line53,
      line54,
      line55,
      line56,
      line57,
      line58,
      line59,
      line60,
      line61,
      line62,
      line63,
      line64,
      line65,
      line66,
      line67,
      line68,
      line69,
      line70,
    } = req.body;
    const duplicate = await BuyLyrics.findOne({where:{lyricsname:req.body.lyricsname}})
    if(duplicate !== null) return res.status(400).json({msg: "Already Added!"});
   
    try {
  const [user,createdAt] =     await BuyLyrics.findOrCreate({
    where:{lyricsname:req.body.lyricsname},
      defaults:{
        lyricsname: lyricsname, 
        purchase: purchase,
        line1: line1,
        line2: line2,
        line3: line3,
        line4: line4,
        line5: line5,
        line6: line6,
        line7: line7,
        line8: line8,
        line9: line9,
        line10:line10,
        line11:line11,
        line12:line12,
        line13:line13,
        line14:line14,
        line15:line15,
        line16:line16,
        line17:line17,
        line18:line18,
        line19:line19,
        line20:line20,
        line21:line21,
        line22:line22,
        line23:line23,
        line24:line24,
        line25:line25,
        line26:line26,
        line27:line27,
        line28:line28,
        line29:line29,
        line30:line30,
        line31:line31,
        line32:line32,
        line33:line33,
        line34:line34,
        line35:line35,
        line36:line36,
        line37:line37,
        line38:line38,
        line39:line39,
        line40:line40,
        line41:line41,
        line42:line42,
        line43:line43,
        line44:line44,
        line45:line45,
        line46:line46,
        line47:line47,
        line48:line48,
        line49:line49,
        line50:line50,
        line51:line51,
        line52:line52,
        line53:line53,
        line54:line54,
        line55:line55,
        line56:line56,
        line57:line57,
        line58:line58,
        line59:line59,
        line60:line60,
        line61:line61,
        line62:line62,
        line63:line63,
        line64:line64,
        line65:line65,
        line66:line66,
        line67:line67,
        line68:line68,
        line69:line69,
        line70:line70
      }
        });
        res.json({msg: user});
    } catch (error) {
        console.log(error);
    }
}

module.exports.createBuyLyrics = createBuyLyrics;

async function updateBuyLyrics(req, res){
  try {
     await  BuyLyrics.update(req.body, {
          where: {
            buylyricsid: req.body.buylyricsid
          }
      });
      res.json({
          "message": "BuyLyrics Updated"
      });
  } catch (error) {
      res.json({ message: error.message });
  }  
}
module.exports.updateBuyLyrics = updateBuyLyrics;


async function deleteBuyLyrics(req, res){
    try {
        await  BuyLyrics.destroy({
            where: {
              buylyricsid: req.params.buylyricsid
            }
        });
        res.json({
            "message":  "BuyLyrics Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

module.exports.deleteBuyLyrics = deleteBuyLyrics;