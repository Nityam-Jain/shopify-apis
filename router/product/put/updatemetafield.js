const express = require('express')
const router = express.Router()
const shopify = require('shopify-api-node')
router.put('/updatemetafield',async(req,res)=>{
    try{
        const shopifyStore = new shopify({
            shopName: process.env.Shopename,
            accessToken: process.env.Acesstoken,
            apiVersion: process.env.Apiversion
        
        });
    }
    catch(error){

    }
})
module.exports = router;