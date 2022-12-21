
const { createConnection } = require('mysql2');
var con = createConnection({
  host: "localhost",
  user: "root",
  password: "-------",
  database: "------"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
  
  // var sql = `CREATE TABLE tempoxladmin (
  //   tempoxladminid VARCHAR(500)  PRIMARY KEY, 
  //   firstname VARCHAR(255) NOT NULL, 
  //   lastname VARCHAR(255) NOT NULL, 
  //   password VARCHAR(255) NOT NULL, 
  //   refresh_token VARCHAR(255) NULL, 
  //   email VARCHAR(255) NOT NULL,
  //   image VARCHAR(255) NULL,
  //   phoneno VARCHAR(255) NOT NULL, 
  //   purchase DECIMAL(12,2) NULL, 
  //   city VARCHAR(255) NULL,
  //   address VARCHAR(255) NULL, 
  //   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
  //   )`;
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table Tempoxladmin created");
  // });

  // var sql = `CREATE TABLE tempoxlusers (
  //   tempoxluserid VARCHAR(500)  PRIMARY KEY, 
  //   firstname VARCHAR(255) NOT NULL, 
  //   lastname VARCHAR(255) NOT NULL, 
  //   password VARCHAR(255) NOT NULL, 
  //   user_token VARCHAR(255) NULL, 
  //   email VARCHAR(255) NOT NULL,
  //   image VARCHAR(255) NULL,
  //   phoneno VARCHAR(255) NOT NULL, 
  //   purchase DECIMAL(12,2) NULL, 
  //   city VARCHAR(255) NULL,
  //   address VARCHAR(255) NULL, 
  //   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
  //   )`;
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table Tempoxlusers created");
  // });

  var sql = `CREATE TABLE playlist (
    playlistid VARCHAR(500)  PRIMARY KEY,
    songid VARCHAR(255) NOT NULL, 
    tempoxluserid VARCHAR(255) NOT NULL, 
    songtitle VARCHAR(255) NOT NULL, 
    artistname VARCHAR(255) NOT NULL, 
    song VARCHAR(255) NOT NULL, 
    feature VARCHAR(255) NULL, 
    album VARCHAR(255) NULL, 
    releasedAt VARCHAR(255)  NULL,
    coverart VARCHAR(255) NULL, 
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
    )`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table Playlist created");
  });

  // var sql = `CREATE TABLE songs (
  //   songid VARCHAR(500)  PRIMARY KEY, 
  //   songtitle VARCHAR(255) NOT NULL, 
  //   artistname VARCHAR(255) NOT NULL, 
  //   price DECIMAL(12,2) NOT NULL,
  //   song VARCHAR(255) NOT NULL,  
  //   feature VARCHAR(255)  NULL,
  //   album VARCHAR(255) NULL,
  //   releasedAt VARCHAR(255) NOT NULL, 
  //   coverart VARCHAR(255) NULL, 
  //   sliderimage VARCHAR(255) NULL, 
  //   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
  //   )`;
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table Songs created");


    
  // });

  // var sql = `CREATE TABLE purchase (
  //   purchaseid VARCHAR(500)  PRIMARY KEY, 
  //   firstname VARCHAR(255) NOT NULL,
  //   lastname VARCHAR(255) NOT NULL,
  //   purchase DECIMAL(12,2) NOT NULL,  
  //   phoneno VARCHAR(255) NOT NULL, 
  //   transaction_ref VARCHAR(255) NOT NULL,
  //   email VARCHAR(255) NOT NULL,
  //   songtitle VARCHAR(255)  NULL, 
  //   songid VARCHAR(255)  NULL, 
  //   lyricsname VARCHAR(255)  NULL, 
  //   buylyricsid VARCHAR(255)  NULL,   
  //   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
  //   )`;
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table Purchase created");
  // });

  // var sql = `CREATE TABLE lyrics (
  //   lyricsid VARCHAR(500)  PRIMARY KEY, 
  //   songid VARCHAR(500) NOT NULL,
  //   songtitle VARCHAR(500) NOT NULL,
  //   line1 TEXT(255) NULL, 
  //   line2 TEXT(255) NULL, 
  //   line3 TEXT(255) NULL, 
  //   line4 TEXT(255) NULL, 
  //   line5 TEXT(255) NULL, 
  //   line6 TEXT(255) NULL, 
  //   line7 TEXT(255) NULL, 
  //   line8 TEXT(255) NULL, 
  //   line9 TEXT(255) NULL, 
  //   line10 TEXT(255) NULL, 
  //   line11 TEXT(255) NULL, 
  //   line12 TEXT(255) NULL, 
  //   line13 TEXT(255) NULL, 
  //   line14 TEXT(255) NULL, 
  //   line15 TEXT(255) NULL, 
  //   line16 TEXT(255) NULL, 
  //   line17 TEXT(255) NULL, 
  //   line18 TEXT(255) NULL, 
  //   line19 TEXT(255) NULL, 
  //   line20 TEXT(255) NULL,  
  //   line21 TEXT(255) NULL, 
  //   line22 TEXT(255) NULL, 
  //   line23 TEXT(255) NULL, 
  //   line24 TEXT(255) NULL, 
  //   line25 TEXT(255) NULL, 
  //   line26 TEXT(255) NULL, 
  //   line27 TEXT(255) NULL, 
  //   line28 TEXT(255) NULL,
  //   line29 TEXT(255) NULL, 
  //   line30 TEXT(255) NULL, 
  //   line31 TEXT(255) NULL, 
  //   line32 TEXT(255) NULL, 
  //   line33 TEXT(255) NULL, 
  //   line34 TEXT(255) NULL, 
  //   line35 TEXT(255) NULL, 
  //   line36 TEXT(255) NULL, 
  //   line37 TEXT(255) NULL, 
  //   line38 TEXT(255) NULL, 
  //   line39 TEXT(255) NULL, 
  //   line40 TEXT(255) NULL, 
  //   line41 TEXT(255) NULL, 
  //   line42 TEXT(255) NULL, 
  //   line43 TEXT(255) NULL, 
  //   line44 TEXT(255) NULL, 
  //   line45 TEXT(255) NULL, 
  //   line46 TEXT(255) NULL, 
  //   line47 TEXT(255) NULL, 
  //   line48 TEXT(255) NULL, 
  //   line49 TEXT(255) NULL, 
  //   line50 TEXT(255) NULL, 
  //   line51 TEXT(255) NULL, 
  //   line52 TEXT(255) NULL, 
  //   line53 TEXT(255) NULL, 
  //   line54 TEXT(255) NULL, 
  //   line55 TEXT(255) NULL, 
  //   line56 TEXT(255) NULL, 
  //   line57 TEXT(255) NULL, 
  //   line58 TEXT(255) NULL, 
  //   line59 TEXT(255) NULL, 
  //   line60 TEXT(255) NULL, 
  //   line61 TEXT(255) NULL, 
  //   line62 TEXT(255) NULL, 
  //   line63 TEXT(255) NULL, 
  //   line64 TEXT(255) NULL, 
  //   line65 TEXT(255) NULL, 
  //   line66 TEXT(255) NULL, 
  //   line67 TEXT(255) NULL, 
  //   line68 TEXT(255) NULL,
  //   line69 TEXT(255) NULL, 
  //   line70 TEXT(255) NULL, 
  //   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
  //   )`;
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table Lyrics created");
  // });


  // var sql = `CREATE TABLE buylyrics (
  //   buylyricsid VARCHAR(500)  PRIMARY KEY, 
  //   lyricsname VARCHAR(500) NOT NULL,
  //   purchase DECIMAL(12,2) NOT NULL,
  //   line1 TEXT(255) NULL, 
  //   line2 TEXT(255) NULL, 
  //   line3 TEXT(255) NULL, 
  //   line4 TEXT(255) NULL, 
  //   line5 TEXT(255) NULL, 
  //   line6 TEXT(255) NULL, 
  //   line7 TEXT(255) NULL, 
  //   line8 TEXT(255) NULL, 
  //   line9 TEXT(255) NULL, 
  //   line10 TEXT(255) NULL, 
  //   line11 TEXT(255) NULL, 
  //   line12 TEXT(255) NULL, 
  //   line13 TEXT(255) NULL, 
  //   line14 TEXT(255) NULL, 
  //   line15 TEXT(255) NULL, 
  //   line16 TEXT(255) NULL, 
  //   line17 TEXT(255) NULL, 
  //   line18 TEXT(255) NULL, 
  //   line19 TEXT(255) NULL, 
  //   line20 TEXT(255) NULL,  
  //   line21 TEXT(255) NULL, 
  //   line22 TEXT(255) NULL, 
  //   line23 TEXT(255) NULL, 
  //   line24 TEXT(255) NULL, 
  //   line25 TEXT(255) NULL, 
  //   line26 TEXT(255) NULL, 
  //   line27 TEXT(255) NULL, 
  //   line28 TEXT(255) NULL,
  //   line29 TEXT(255) NULL, 
  //   line30 TEXT(255) NULL, 
  //   line31 TEXT(255) NULL, 
  //   line32 TEXT(255) NULL, 
  //   line33 TEXT(255) NULL, 
  //   line34 TEXT(255) NULL, 
  //   line35 TEXT(255) NULL, 
  //   line36 TEXT(255) NULL, 
  //   line37 TEXT(255) NULL, 
  //   line38 TEXT(255) NULL, 
  //   line39 TEXT(255) NULL, 
  //   line40 TEXT(255) NULL, 
  //   line41 TEXT(255) NULL, 
  //   line42 TEXT(255) NULL, 
  //   line43 TEXT(255) NULL, 
  //   line44 TEXT(255) NULL, 
  //   line45 TEXT(255) NULL, 
  //   line46 TEXT(255) NULL, 
  //   line47 TEXT(255) NULL, 
  //   line48 TEXT(255) NULL, 
  //   line49 TEXT(255) NULL, 
  //   line50 TEXT(255) NULL, 
  //   line51 TEXT(255) NULL, 
  //   line52 TEXT(255) NULL, 
  //   line53 TEXT(255) NULL, 
  //   line54 TEXT(255) NULL, 
  //   line55 TEXT(255) NULL, 
  //   line56 TEXT(255) NULL, 
  //   line57 TEXT(255) NULL, 
  //   line58 TEXT(255) NULL, 
  //   line59 TEXT(255) NULL, 
  //   line60 TEXT(255) NULL, 
  //   line61 TEXT(255) NULL, 
  //   line62 TEXT(255) NULL, 
  //   line63 TEXT(255) NULL, 
  //   line64 TEXT(255) NULL, 
  //   line65 TEXT(255) NULL, 
  //   line66 TEXT(255) NULL, 
  //   line67 TEXT(255) NULL, 
  //   line68 TEXT(255) NULL,
  //   line69 TEXT(255) NULL, 
  //   line70 TEXT(255) NULL, 
  //   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
  //   )`;
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table BuyLyrics created");
  // });

  // var sql = `CREATE TABLE request (
  //   requestid VARCHAR(500)  PRIMARY KEY, 
  //   fullname VARCHAR(255) NOT NULL,  
  //   email VARCHAR(255) NOT NULL, 
  //   phoneno VARCHAR(14) NOT NULL, 
  //   message VARCHAR(1000) NOT NULL,   
  //   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
  //   )`;
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table Request created");
  // });

//
});
