const  Request = require("../Models/requestModels.js");

async  function getAllRequest (req, res){
    try {
        const request = await Request.findAll({
          attributes:['requestid','fullname','email','phoneno','message','createdAt']
      });
        res.json(request);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getAllRequest = getAllRequest;


async function createRequest(req, res){
  const { fullname,email, phoneno,message} = req.body;
  const duplicate = await Request.findOne({where:{message:req.body.message}})
  if(duplicate !== null) return res.status(400).json({msg: "Already Added!"});
 
  try {
const [user,createdAt] =     await Request.findOrCreate({
  where:{message:req.body.message},
    defaults:{
          fullname:fullname,
          email:email,
          phoneno:phoneno,
          message: message
          
    }
      });
      res.json({msg: user});
  } catch (error) {
      console.log(error);
  }
}

 module.exports.createRequest = createRequest;

async  function deleteRequest(req, res){
    try {
        await Request.destroy({
            where: {
                requestid: req.params.requestid
            }
        });
        res.json({
            "message": "Request Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

module.exports.deleteRequest = deleteRequest;