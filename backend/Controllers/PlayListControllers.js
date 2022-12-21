const PlayList = require( "../Models/playListModels.js");


async function getAllPlayList(req, res){
    try {
        const playlist = await  PlayList.findAll({
            attributes:['playlistid','songid','songtitle','song','artistname','feature','album','releasedAt','coverart','song','tempoxluserid']
        });
        res.json(playlist);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

module.exports.getAllPlayList = getAllPlayList;
 

async function getPlayListById(req, res){
  try {
      const playList = await  PlayList.findAll({
          where: {
            playlistid: req.params.playlistid
          }
      });
      res.json(playList[0]);
  } catch (error) {
      res.json({ message: error.message });
  }  
}

module.exports.getPlayListById = getPlayListById;


async function getPlayListByUserId(req, res){
    try {
        const playList = await  PlayList.findAll({
            where: {
              tempoxluserid: req.params.tempoxluserid
            }
        });
        res.json(playList);
    } catch (error) {
        res.json({ message: error.message });
    }  
  }
  
  module.exports.getPlayListByUserId = getPlayListByUserId;



async function getPlayListByName(req, res){
    try {
        const playlist = await  PlayList.findAll({
            where: {
                songtitle: req.params.songtitle
            }
        });
        res.json(playlist[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
  }
  
  module.exports.getPlayListByName = getPlayListByName;


async function createPlayList(req, res){
    const { songtitle, artistname,feature,album,releasedAt,coverart,song,songid,tempoxluserid} = req.body;
    const duplicate = await PlayList.findOne({where:{song:req.body.song}})
    if(duplicate !== null) return res.status(400).json({msg: "Already Added!"});
   
    try {
  const [user,createdAt] =     await PlayList.findOrCreate({
    where:{song:req.body.song},
      defaults:{
            songid:songid,
            tempoxluserid:tempoxluserid,
            songtitle: songtitle,
            artistname: artistname,
            feature:feature,
            album: album,
            releasedAt: releasedAt,
            coverart: coverart,
            song:song
      }
        });
        res.json({msg: user});
    } catch (error) {
        console.log(error);
    }
}

module.exports.createPlayList = createPlayList;


async function deletePlayList(req, res){
    try {
        await  PlayList.destroy({
            where: {
              playlistid: req.params.playlistid
            }
        });
        res.json({
            "message":  "PlayList Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

module.exports.deletePlayList = deletePlayList;