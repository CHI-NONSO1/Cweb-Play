const Lyrics = require( "../Models/lyricsModels.js");

async function getAllLyrics(req, res){
  try {
      const lyrics = await  Lyrics.findAll({
          attributes:
          [
            'lyricsid',
            'songtitle',
            'songid',
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
      res.json(lyrics);
  } catch (error) {
      res.json({ message: error.message });
  }  
}

module.exports.getAllLyrics = getAllLyrics;

async function getLyricsById(req, res){
  try {
      const lyrics = await  Lyrics.findAll({
          where: {
            lyricsid: req.params.lyricsid
          }
      });
      res.json(lyrics[0]);
  } catch (error) {
      res.json({ message: error.message });
  }  
}

module.exports.getLyricsById = getLyricsById;


async function getLyricsBySongId(req, res){
  try {
      const lyrics = await  Lyrics.findAll({
          where: {
          songid: req.params.songid
          
          }
      });
      res.json(lyrics);
  } catch (error) {
      res.json({ message: error.message });
  }  
}

module.exports.getLyricsBySongId = getLyricsBySongId;


async function createLyrics(req, res){
    const { 
      songtitle, 
      songid,
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
    const duplicate = await Lyrics.findOne({where:{songid:req.body.songid}})
    if(duplicate !== null) return res.status(400).json({msg: "Already Added!"});
   
    try {
  const [user,createdAt] =     await Lyrics.findOrCreate({
    where:{songid:req.body.songid},
      defaults:{
        songtitle: songtitle, 
        songid: songid,
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

module.exports.createLyrics = createLyrics;

async function updateLyrics(req, res){
  try {
     await  Lyrics.update(req.body, {
          where: {
            lyricsid: req.body.lyricsid
          }
      });
      res.json({
          "message": "Lyrics Updated"
      });
  } catch (error) {
      res.json({ message: error.message });
  }  
}
module.exports.updateLyrics = updateLyrics;


async function deleteLyrics(req, res){
    try {
        await  Lyrics.destroy({
            where: {
              lyricsid: req.params.lyricsid
            }
        });
        res.json({
            "message":  "Lyrics Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

module.exports.deleteLyrics = deleteLyrics;