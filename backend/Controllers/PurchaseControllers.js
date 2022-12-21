const TempoxlAdmin = require("../Models/adminModels.js");
const PlayList = require("../Models/playListModels.js");
const Purchase = require( "../Models/purchaseModels.js");
const TempoxlUsers = require("../Models/tempoxlUsersModels.js");

async function getAllPurchase(req, res){
    try {
        const paid = await  Purchase.findAll({
            attributes:['purchaseid','songtitle','email','lyricsname','firstname','lastname','purchase','phoneno','songid','transaction_ref','createdAt']
        });
        res.json(paid);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

module.exports.getAllPurchase = getAllPurchase;
 

async function getPurchaseById(req, res){
  try {
      const pay = await  Purchase.findAll({
          where: {
            purchaseid: req.params.purchaseid
          }
      });
      res.json(pay[0]);
  } catch (error) {
      res.json({ message: error.message });
  }  
}

module.exports.getPurchaseById = getPurchaseById;


async function createPurchase(req, res){
    const {songtitle,firstname,lastname,email,buylyricid,lyricsname, purchase,songid,phoneno,transaction_ref} = req.body;
    const duplicate = await Purchase.findOne({where:{transaction_ref:req.body.transaction_ref}})
    if(duplicate !== null) return res.status(400).json({msg: "Already Added!"});
   
    try {
  const [user,createdAt] =     await Purchase.findOrCreate({
    where:{transaction_ref:req.body.transaction_ref},
      defaults:{
            songtitle: songtitle,
            firstname: firstname,
            lastname: lastname,
            purchase: purchase,
            songid: songid,
            phoneno: phoneno,
            email: email,
            buylyricsid: buylyricid,
            lyricsname: lyricsname,
            transaction_ref: transaction_ref,
           
      }
        });
        
        if(user){
     if(req.body.songid){
            const masterAdmin = await TempoxlAdmin.findOne({where:{lastname:"Egwuaka"}})
            //const tempoxladminId = masterAdmin.tempoxladminid;
            const oldBalance = Number(masterAdmin.purchase);
            const valueCharged = Number(req.body.purchase);
            const newBalance = Number(oldBalance) + Number(valueCharged);
          await TempoxlAdmin.update({purchase: newBalance},{
            where:{
                lastname:"Egwuaka"
                //tempoxladminid: tempoxladminId
            }
        });
       

      const user = await TempoxlUsers.findAll({where:{phoneno:req.body.phoneno}})
      const userPhoneno = user[0].phoneno;
      const oldPurchase = Number(user[0].purchase);
      const amountPaid = Number(req.body.purchase);
      const newPurchase = Number(oldPurchase) + Number(amountPaid);
    await TempoxlUsers.update({purchase: newPurchase},{
      where:{
          phoneno: userPhoneno
      }
  });


  const [playlist,createdAt] =     await PlayList.findOrCreate({
    where:{song:req.body.song},
    defaults:{
        songid:req.body.songid,
        tempoxluserid:req.body.tempoxluserid,
        songtitle: req.body.songtitle,
        artistname: req.body.artistname,
        feature:req.body.feature,
        album: req.body.album,
        releasedAt: req.body.releasedAt,
        coverart: req.body.coverart,
        song:req.body.song
    }
});
res.json({msg: playlist});
        }

        if(req.body.buylyricsid){
            const masterAdmin = await TempoxlAdmin.findOne({where:{lastname:"Egwuaka"}})
            //const tempoxladminId = masterAdmin.tempoxladminid;
            const oldBalance = Number(masterAdmin.purchase);
            const valueCharged = Number(req.body.purchase);
            const newBalance = Number(oldBalance) + Number(valueCharged);
          await TempoxlAdmin.update({purchase: newBalance},{
            where:{
                lastname:"Egwuaka"
                //tempoxladminid: tempoxladminId
            }
        });
        res.json({
            "message": "TempoxlAdmin Updated"
        });
  
        }
     

    
}
        //res.json({msg: user});
    } catch (error) {
        console.log(error);
    }
}

module.exports.createPurchase = createPurchase;


async function deletePurchase(req, res){
    try {
        await  Purchase.destroy({
            where: {
              purchaseid: req.params.purchaseid
            }
        });
        res.json({
            "message":  "Purchase Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

module.exports.deletePurchase = deletePurchase;