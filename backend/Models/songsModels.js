const  { Sequelize } = require( "sequelize")
const db = require( "../config/db.js")
const { DataTypes } = Sequelize;
 

const Songs = db.define('songs',{
  songid:{
  autoIncrement:true,
  primaryKey:true,
  type: DataTypes.UUID,
  defaultValue:Sequelize.UUIDV4
},
songtitle:{
  type: DataTypes.STRING
},
price:{
  type: DataTypes.DECIMAL(12,2),
},
artistname:{
  type: DataTypes.STRING,
 
},
feature:{
  type: DataTypes.STRING,
  unique:true
},
song:{
  type: DataTypes.STRING
},
album:{
  type: DataTypes.STRING
},
sliderimage:{
  type: DataTypes.STRING
},
releasedAt:{
  type: DataTypes.STRING
},
coverart:{
  type: DataTypes.STRING
},


},{
    freezeTableName: true,
   
})
 

// (async () => {
//   await db.sync();
// })();
 
module.exports = Songs;
