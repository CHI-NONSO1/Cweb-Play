const TempoxlAdmin = require("../Models/adminModels.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function getAllTempoxlAdmin(req, res){
    try {
        const tempoxladmin = await  TempoxlAdmin.findAll({
            attributes:['tempoxladminid','firstname','lastname','email','image']
        });
        res.json(tempoxladmin);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

module.exports.getAllTempoxlAdmin = getAllTempoxlAdmin

async function  getTempoxlAdminLogin(req, res){
    try {
        const login = await  TempoxlAdmin.findAll({
            
            where: {
              email: req.body.email
              
            }
        });
        const match = await bcrypt.compare(req.body.password, login[0].password);
        if(!match) return res.status(400).json({msg: "Wrong Password"});
        const tempoxladminId = login[0].tempoxladminid;
        const firstname = login[0].firstname;
        const email = login[0].email;
       
        const accessToken = jwt.sign({firstname, email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '15s'
        });
        
        const refreshToken = jwt.sign({firstname, email}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
            
        });

        await TempoxlAdmin.update({refresh_token: refreshToken},{
            where:{
                tempoxladminid: tempoxladminId
            }
        });
        
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
            
        });
       
        res.json({ refreshToken, accessToken });
    } catch (error) {
        res.status(404).json({msg:"There is an error in your code!"});
    }  
}

module.exports.getTempoxlAdminLogin = getTempoxlAdminLogin;



async function getTempoxlDetail(req, res){
    try {
        const home = await  TempoxlAdmin.findAll({
            where: {
              tempoxladminid: req.params.tempoxladminid
              
            }
        });
        res.json(home);
      
        
    } catch (error) {
        
        res.status(404).json({msg:"No User Found!"});
        
    }  
}

module.exports.getTempoxlDetail = getTempoxlDetail
 
async function getTempoxlAdminById(req, res){
    try {
        const tempoxladmin = await  TempoxlAdmin.findAll({
            where: {
              tempoxladminid: req.params.tempoxladminid
            }
        });
        res.json(tempoxladmin[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getTempoxlAdminById = getTempoxlAdminById;

    async function  createTempoxlAdmin(req, res){
    const { firstname, lastname, password, confirmpassword,email,image,phoneno} = req.body;
    if(password !== confirmpassword) return res.status(400).json({msg: "Password and Confirm Password do not match"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash( password, salt);
    try {
        
  const [user,createdAt] =     await TempoxlAdmin.findOrCreate({
    where:{email:req.body.email},
      defaults:{
            firstname: firstname,
            lastname: lastname,
            password: hashPassword,
            email: email,
            image:image,
            phoneno:phoneno
            
      }
        });
        res.json({msg: user});
    } catch (error) {
        console.log(error);
    }
}
module.exports.createTempoxlAdmin = createTempoxlAdmin;


async function updateTempoxlAdmin(req, res){
    try {
        await  TempoxlAdmin.update(req.body, {
            where: {
         tempoxladminid: req.body.tempoxladminid
            
            }
        });
        res.json({
            "message": "TempoxlAdmin Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
module.exports.updateTempoxlAdmin = updateTempoxlAdmin;


async function deleteTempoxlAdmin(req, res){
    try {
        await  TempoxlAdmin.destroy({
            where: {
              tempoxladminid: req.params.tempoxladminid
            }
        });
        res.json({
            "message": "TempoxlAdmin Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.deleteTempoxlAdmin = deleteTempoxlAdmin;

async function TempoxlAdminLogout(req, res){
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const user = await TempoxlAdmin.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!user[0]) return res.sendStatus(204);
    const tempoxladminId = user[0].tempoxladminid;
    await TempoxlAdmin.update({refresh_token: null},{
        where:{
            tempoxladminid: tempoxladminId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}

module.exports.TempoxlAdminLogout = TempoxlAdminLogout;
