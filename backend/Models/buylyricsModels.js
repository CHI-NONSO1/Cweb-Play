const  { Sequelize } = require( "sequelize")
const db = require( "../config/db.js")
const { DataTypes } = Sequelize;
 

const BuyLyrics = db.define('buylyrics',{
  buylyricsid:{
  autoIncrement:true,
  primaryKey:true,
  type: DataTypes.UUID,
  defaultValue:Sequelize.UUIDV4
},
lyricsname:{
  type: DataTypes.STRING
},
purchase:{
  type: DataTypes.DECIMAL(12,2),
},
line1:{
  type: DataTypes.STRING,
 
},
line2:{
  type: DataTypes.STRING,
  
},
line3:{
  type: DataTypes.STRING
},
line4:{
  type: DataTypes.STRING
},
line5:{
  type: DataTypes.STRING
},
line6:{
  type: DataTypes.STRING
},
line7:{
  type: DataTypes.STRING
},
line8:{
  type: DataTypes.STRING,
 
},
line9:{
  type: DataTypes.STRING,
  
},
line10:{
  type: DataTypes.STRING
},
line11:{
  type: DataTypes.STRING
},
line12:{
  type: DataTypes.STRING
},
line13:{
  type: DataTypes.STRING
},
line14:{
  type: DataTypes.STRING
},
line15:{
  type: DataTypes.STRING,
 
},
line16:{
  type: DataTypes.STRING,
  
},
line17:{
  type: DataTypes.STRING
},
line18:{
  type: DataTypes.STRING
},
line19:{
  type: DataTypes.STRING
},
line20:{
  type: DataTypes.STRING
},
line21:{
  type: DataTypes.STRING
},
line22:{
  type: DataTypes.STRING,
 
},
line23:{
  type: DataTypes.STRING,
  
},
line24:{
  type: DataTypes.STRING
},
line25:{
  type: DataTypes.STRING
},
line26:{
  type: DataTypes.STRING
},
line27:{
  type: DataTypes.STRING
},
line28:{
  type: DataTypes.STRING
},
line29:{
  type: DataTypes.STRING,
 
},
line30:{
  type: DataTypes.STRING,
  
},
line31:{
  type: DataTypes.STRING
},
line32:{
  type: DataTypes.STRING
},
line33:{
  type: DataTypes.STRING
},
line34:{
  type: DataTypes.STRING
},
line35:{
  type: DataTypes.STRING
},
line36:{
  type: DataTypes.STRING,
 
},
line37:{
  type: DataTypes.STRING,
  
},
line38:{
  type: DataTypes.STRING
},
line39:{
  type: DataTypes.STRING
},
line40:{
  type: DataTypes.STRING
},
line41:{
  type: DataTypes.STRING
},
line42:{
  type: DataTypes.STRING
},
line43:{
  type: DataTypes.STRING,
 
},
line44:{
  type: DataTypes.STRING,
  
},
line45:{
  type: DataTypes.STRING
},
line46:{
  type: DataTypes.STRING
},
line47:{
  type: DataTypes.STRING
},
line48:{
  type: DataTypes.STRING
},
line49:{
  type: DataTypes.STRING
},
line50:{
  type: DataTypes.STRING,
 
},
line51:{
  type: DataTypes.STRING,
  
},
line52:{
  type: DataTypes.STRING
},
line53:{
  type: DataTypes.STRING
},
line54:{
  type: DataTypes.STRING
},
line55:{
  type: DataTypes.STRING
},
line56:{
  type: DataTypes.STRING
},
line57:{
  type: DataTypes.STRING,
 
},
line58:{
  type: DataTypes.STRING,
  
},
line59:{
  type: DataTypes.STRING
},
line60:{
  type: DataTypes.STRING
},
line61:{
  type: DataTypes.STRING
},
line62:{
  type: DataTypes.STRING
},
line63:{
  type: DataTypes.STRING
},
line64:{
  type: DataTypes.STRING,
 
},
line65:{
  type: DataTypes.STRING,
  
},
line66:{
  type: DataTypes.STRING
},
line67:{
  type: DataTypes.STRING
},
line68:{
  type: DataTypes.STRING
},
line69:{
  type: DataTypes.STRING
},
line70:{
  type: DataTypes.STRING
},

},{
    freezeTableName: true,
   
})
 

// (async () => {
//   await db.sync();
// })();
 
module.exports = BuyLyrics;
