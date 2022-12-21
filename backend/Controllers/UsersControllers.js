const TempoxlUsers = require("../Models/tempoxlUsersModels.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const TempoxlAdmin = require("../Models/adminModels.js");
const Purchase = require("../Models/purchaseModels.js");
const PlayList = require("../Models/playListModels.js");
 
async function getAllTempoxlUsers(req, res) {
    try {
        const tempoxlUsers = await  TempoxlUsers.findAll({
            attributes:['tempoxluserid','firstname','lastname','email','image','phoneno']
        });
        res.json(tempoxlUsers);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

module.exports.getAllTempoxlUsers = getAllTempoxlUsers;

async function getTempoxlUserLogin(req, res){
    try {
        const login = await  TempoxlUsers.findAll({
            
            where: {
              email: req.body.email
              
            }
        });
        const match = await bcrypt.compare(req.body.password, login[0].password);
        if(!match) return res.status(400).json({msg: "Wrong Password"});
        const tempoxluserId = login[0].tempoxluserid;
        const firstname = login[0].firstname;
        const email = login[0].email;
       
        const accToken = jwt.sign({firstname, email}, process.env.USERACCESS_TOKEN_SECRET,{
            expiresIn: '15s'
        });
        
        const userToken = jwt.sign({firstname, email}, process.env.USERREFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
            
        });

        await TempoxlUsers.update({user_token: userToken},{
            where:{
                tempoxluserid: tempoxluserId
            }
        });
        
        res.cookie('userToken', userToken,{
           
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
            
        });
       
        res.json({ accToken });
    } catch (error) {
        res.status(404).json({msg:"You are Not Allowed!"});
    }  
}

module.exports.getTempoxlUserLogin = getTempoxlUserLogin;

async function getTempoxlUserByPhoneno(req, res){
    try {
        const home = await  TempoxlUsers.findOne({
            where: {
              phoneno: req.params.phoneno
              
            }
        });
        res.json(home);
      
        
    } catch (error) {
        
        res.status(404).json({msg:"No User Found!"});
        
    }  
}
module.exports.getTempoxlUserByPhoneno = getTempoxlUserByPhoneno;


async function getTempoxlUserById(req, res){
    try {
        const users = await  TempoxlUsers.findAll({
            where: {
              tempoxluserid: req.params.tempoxluserid
            }
        });
        res.json(users[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

module.exports.getTempoxlUserById = getTempoxlUserById;

async function createTempoxlUser(req, res){
    const { firstname, lastname, password, confirmpassword,email,image,phoneno,purchase} = req.body;
    if(password !== confirmpassword) return res.status(400).json({msg: "Password and Confirm Password do not match"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash( password, salt);
    try {
        
  const [user,createdAt] =     await TempoxlUsers.findOrCreate({
    where:{email:req.body.email},
      defaults:{
            firstname: firstname,
            lastname: lastname,
            password: hashPassword,
            email: email,
            image:image,
            phoneno:phoneno,
            purchase:Number(purchase)
      }
        });
        ////If Buy Song
        //Egwuaka 
        if(user){
            
            if(req.body.purchase){
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


            const [purchase,createdAt] =     await Purchase.findOrCreate({
                where:{phoneno:req.body.phoneno},
                defaults:{
                        firstname: req.body.firstname,
                        lastname:  req.body.lastname,
                        phoneno: req.body.phoneno,
                        purchase: Number(req.body.purchase),
                        songtitle: req.body.songtitle,
                        songid: req.body.songid,
                        transaction_ref: req.body.transaction_ref,
                        email:req.body.email
                }
            });
            res.json({msg: purchase});
            
            const [playlist,createdAT] =     await PlayList.findOrCreate({
                where:{song:req.body.song},
                defaults:{
                    songid:req.body.songid,
                    tempoxluserid:user.dataValues.tempoxluserid,
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
            
        }
        ////////////
        res.json({msg: user});
    } catch (error) {
        console.log(error);
    }
}
module.exports.createTempoxlUser = createTempoxlUser;


async function updateTempoxlUser(req, res){
    try {
       await  TempoxlUsers.update(req.body, {
            where: {
              tempoxluserid: req.body.tempoxluserid
            }
        });
        res.json({
            "message": "TempoxlUsers Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.updateTempoxlUser = updateTempoxlUser;


async function deleteTempoxlUser(req, res){
    try {
        await  TempoxlUsers.destroy({
            where: {
              tempoxluserid: req.params.tempoxluserid
            }
        });
        res.json({
            "message": "TempoxlUsers Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.deleteTempoxlUser = deleteTempoxlUser;

async function TempoxlUserLogout(req, res){
    const userToken = req.cookies.userToken;
    if(!userToken) return res.sendStatus(204);
    const user = await TempoxlUsers.findAll({
        where:{
            user_token: userToken
        }
    });
    if(!user[0]) return res.sendStatus(204);
    const tempoxluserId = user[0].tempoxluserid;
    await TempoxlUsers.update({user_token: null},{
        where:{
            tempoxluserid: tempoxluserId
        }
    });
    res.clearCookie('userToken');
    return res.sendStatus(200);
}

module.exports.TempoxlUserLogout = TempoxlUserLogout;