const Songs = require( "../Models/songsModels.js");


async function getAllSongs(req, res){
    try {
        const song = await  Songs.findAll({
            attributes:['songid','songtitle','song','sliderimage','artistname','feature','album','releasedAt','coverart','song','price']
        });
        res.json(song);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

module.exports.getAllSongs = getAllSongs;
 

async function getSongById(req, res){
  try {
      const sonG = await  Songs.findAll({
          where: {
            songid: req.params.songid
          }
      });
      res.json(sonG[0]);
  } catch (error) {
      res.json({ message: error.message });
  }  
}

module.exports.getSongById = getSongById;

async function getSongByName(req, res){
    try {
        const song = await  Songs.findAll({
            where: {
                songtitle: req.params.songtitle
            }
        });
        res.json(song[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
  }
  
  module.exports.getSongByName = getSongByName;


async function createSongs(req, res){
    const { songtitle,sliderimage, artistname,feature,album,releasedAt,coverart,song,price} = req.body;
    const duplicate = await Songs.findOne({where:{song:req.body.song}})
    if(duplicate !== null) return res.status(400).json({msg: "Already Added!"});
   
    try {
  const [user,createdAt] =     await Songs.findOrCreate({
    where:{song:req.body.song},
      defaults:{
            songtitle: songtitle,
            artistname: artistname,
            feature:feature,
            album: album,
            releasedAt: releasedAt,
            coverart: coverart,
            song:song,
            sliderimage:sliderimage,
            price:price
      }
        });
        res.json({msg: user});
    } catch (error) {
        console.log(error);
    }
}

module.exports.createSongs = createSongs;

async function updateSong(req, res){
  try {
     await  Songs.update(req.body, {
          where: {
            songid: req.body.songid
          }
      });
      res.json({
          "message": "Song Updated"
      });
  } catch (error) {
      res.json({ message: error.message });
  }  
}
module.exports.updateSong = updateSong;


async function deleteSong(req, res){
    try {
        await  Songs.destroy({
            where: {
              songid: req.params.songid
            }
        });
        res.json({
            "message":  "Songs Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

module.exports.deleteSong = deleteSong;