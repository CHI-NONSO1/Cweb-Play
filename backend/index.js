
const express  = require("express");
const db = require("./config/db.js");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");


      dotenv.config();

const multer =  require('multer');
const  diskStorage  =  require('multer');
const path  = require('path');
const playListRouter  = require("./Routes/playList.js");
const  helmet = require("helmet");
const bodyParser = require('body-parser');
const tempoxlAdminRouter = require("./Routes/admin.js");
const usersRouter = require("./Routes/users.js");
const songRouter = require("./Routes/songs.js");
const lyricsRouter = require("./Routes/lyrics.js");
const buyLyricsRouter = require("./Routes/buyLyrics.js");
const purchaseRouter = require("./Routes/purchase.js");
const requestRouter = require("./Routes/request.js");



const port = process.env.PORT || 8000;



const app = express();
try {
     db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({
    extended: true, 
     limit: "50mb",
}));
app.use(bodyParser.json())
app.use(cors({ 
  credentials:true,
  origin:'http://localhost:3000'
// "Access-Control-Allow-Headers": " x-requested-with, content-type",
// "Access-Control-Allow-Methods": "PUT, GET, POST, DELETE, OPTIONS",

}));





app.use('/tempoxladmin', tempoxlAdminRouter);
app.use('/playlist', playListRouter);
app.use('/user', usersRouter);
app.use('/song', songRouter);
app.use('/lyrics', lyricsRouter);
app.use('/buylyrics', buyLyricsRouter);
app.use('/purchase', purchaseRouter);
app.use('/request', requestRouter);

app.use(express.static(__dirname + '/fontend/src/components'));
app.use('/uploads', express.static('uploads'));
var upload = multer({dest:"uploads/"});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    
    cb(null, '../frontend/public/images');
    
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

var songUpload = multer({dest:"uploads/"});

var SongStorage = multer.diskStorage({
  destination: function (req, file, cb) {
   
    cb(null, '../frontend/public/audio');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});



var upload = multer({ storage: storage });
var songUpload  = multer({ storage: SongStorage });

app.post('/profile', upload.single('file'), function (req, res,next) {

  if (!req.file) {
    throw Error("FILE_MISSING");
  } else {
   return res.send(req.file);
  }
});

app.post('/coverimg', songUpload.single('file'), function (req, res,next) {

  if (!req.file) {
    throw Error("FILE_MISSING");
  } else {
   return res.send(req.file);
  }
});
app.post('/sliderimg', songUpload.single('file'), function (req, res,next) {

  if (!req.file) {
    throw Error("FILE_MISSING");
  } else {
   return res.send(req.file);
  }
});

app.post('/audio', songUpload.single('file'), function (req, res,next) {

  if (!req.file) {
    throw Error("FILE_MISSING");
  } else {
   return res.send(req.file);
  }
});



app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
