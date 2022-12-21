const  { Sequelize } = require("sequelize");
const db = require("../config/db.js");
 
const { DataTypes } = Sequelize;
 

const Request = db.define('request',{
    requestid:{
      autoIncrement:true,
      primaryKey:true,
      type: DataTypes.UUID,
      defaultValue:Sequelize.UUIDV4
    },
    fullname:{
      type: DataTypes.STRING
  },
    email:{
        type: DataTypes.STRING
    },
    phoneno:{
      type: DataTypes.STRING
  },
    message:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
module.exports = Request;