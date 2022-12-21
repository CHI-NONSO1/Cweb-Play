const express = require("express")

const {
getAllPurchase, 
getPurchaseById, 
createPurchase,
deletePurchase,

  } = require("../Controllers/PurchaseControllers.js");



 
const  purchaseRouter = express.Router();

purchaseRouter.get('/paid', getAllPurchase);
purchaseRouter.get('/purchase/:purchaseid', getPurchaseById);
purchaseRouter.post('/',  createPurchase);
purchaseRouter.delete('/:purchaseid', deletePurchase);



 
module.exports  = purchaseRouter;
