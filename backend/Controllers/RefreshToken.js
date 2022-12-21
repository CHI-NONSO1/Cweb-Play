
const jwt = require("jsonwebtoken");
const TempoxlAdmin =  require("../Models/adminModels.js");
 
    module.exports = async function refreshToken(req, res){
    try {
        
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(401);
        const user = await TempoxlAdmin.findAll({
            where:{
                refresh_token: refreshToken
            }
        });
        if(!user[0]) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) return res.sendStatus(403);
            const tempoxlAdminId = user[0].tempoxladminid;
            const name = user[0].firstname;
            const image = user[0].image;
            const email = user[0].email;
            const purchase = user[0].purchase;
            const accessToken = jwt.sign({tempoxlAdminId,purchase, name,image,email}, process.env.ACCESS_TOKEN_SECRET,{
                expiresIn: '15s'
            });
            res.json({ accessToken });
        });
    } catch (error) {
        console.log(error);
    }
}

