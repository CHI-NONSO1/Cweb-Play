const  {Sequelize}  = require ("sequelize");
const db = require ("../config/db.js");
const { DataTypes } = Sequelize;
 

const TempoxlUsers = db.define('tempoxlusers',{
  tempoxluserid:{
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
user_token:{
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
purchase:{
  type: DataTypes.DECIMAL(12,2),
  
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

// (async () => {
//   await db.sync();
// })();
 
module.exports = TempoxlUsers;
