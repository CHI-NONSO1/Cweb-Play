const  { Sequelize } = require( "sequelize")
const db = require( "../config/db.js")
const { DataTypes } = Sequelize;
 

const PlayList = db.define('playlist',{
  playlistid:{
  autoIncrement:true,
  primaryKey:true,
  type: DataTypes.UUID,
  defaultValue:Sequelize.UUIDV4
},
songid:{
  type: DataTypes.STRING
},
tempoxluserid:{
  type: DataTypes.STRING
},

songtitle:{
  type: DataTypes.STRING
},
artistname:{
  type: DataTypes.STRING,
 
},
feature:{
  type: DataTypes.STRING,
  
},
album:{
  type: DataTypes.STRING
},
releasedAt:{
  type: DataTypes.STRING
},
coverart:{
  type: DataTypes.STRING
},
song:{
  type: DataTypes.STRING
},

},{
    freezeTableName: true,
   
})
 

// (async () => {
//   await db.sync();
// })();
 
module.exports = PlayList;
