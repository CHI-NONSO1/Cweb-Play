
const jwt = require("jsonwebtoken");
const TempoxlUsers = require("../Models/tempoxlUsersModels.js");
 
module.exports = async function userToken(req, res){
    try {
        
        const userToken = req.cookies.userToken;
        if(!userToken) return res.sendStatus(401);
        const user = await TempoxlUsers.findAll({
            where:{
                user_token: userToken
            }
        });
        if(!user[0]) return res.sendStatus(403);
        jwt.verify(userToken, process.env.USERREFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) return res.sendStatus(403);
            const tempoxluserId = user[0].tempoxluserid;
            const name = user[0].firstname;
            const image = user[0].image;
            const email = user[0].email;
            const purchase = user[0].purchase;
            const accToken = jwt.sign({tempoxluserId, name,image,email,purchase}, process.env.USERACCESS_TOKEN_SECRET,{
                expiresIn: '15s'
            });
            res.json({ accToken });
        });
    } catch (error) {
        console.log(error);
    }
}

