const  {Sequelize}  = require("sequelize");
const db = require("../config/db.js");
const { DataTypes } = Sequelize;
 

const TempoxlAdmin = db.define('tempoxladmin',{
  tempoxladminid:{
  autoIncrement:true,
  primaryKey:true,
  type: DataTypes.UUID,
  defaultValue:Sequelize.UUIDV4
},
firstname:{
  type: DataTypes.STRING
},
lastname:{
  type: DataTypes.STRING
},
password:{
  type: DataTypes.STRING,
  unique:true,
  
},
purchase:{
  type: DataTypes.DECIMAL(12,2),
},
refresh_token:{
  type: DataTypes.TEXT
},
email:{
  type: DataTypes.STRING,
  unique:true
},
image:{
  type: DataTypes.STRING
},
phoneno:{
  type: DataTypes.STRING,
  unique:true
},
city:{
  type: DataTypes.STRING
},
address:{
  type: DataTypes.STRING
}
},{
    freezeTableName: true,
   
})


 
module.exports = TempoxlAdmin;
