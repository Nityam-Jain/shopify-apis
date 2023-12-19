const express = require("express")
const router = express.Router()
const shopify = require('shopify-api-node')
router.get('/getCountofProd',async(req,res)=>{
   try{
    const shopifyStore = new shopify({
        shopName: process.env.Shopename,
        accessToken: process.env.Acesstoken,
        apiVersion: process.env.Apiversion
    
    });
    const prodCount = await shopifyStore.product.count()
    return res.status(200).send({status: 'Success',"Count":prodCount})
   }
   catch(error){
    console.error('Error in fethching the count of product', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
   }
})
module.exports=router;