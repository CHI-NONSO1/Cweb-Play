const  { Sequelize } = require( "sequelize")
const db = require( "../config/db.js")
const { DataTypes } = Sequelize;
 

const Purchase = db.define('purchase',{
  purchaseid:{
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
purchase:{
  type: DataTypes.DECIMAL(12,2),
},
songtitle:{
  type: DataTypes.STRING,
 
},
phoneno:{
  type: DataTypes.STRING,
  unique:true
},
email:{
  type: DataTypes.STRING,
  unique:true
},
songid:{
  type: DataTypes.STRING
},
lyricsname:{
  type: DataTypes.STRING,
 
},
buylyricsid:{
  type: DataTypes.STRING,
 
},
transaction_ref:{
  type: DataTypes.STRING
},

},{
    freezeTableName: true,
   
})
 

// (async () => {
//   await db.sync();
// })();
 
module.exports = Purchase;
