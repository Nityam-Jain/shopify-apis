const express = require('express')
const router = express.Router()
const shopify = require('shopify-api-node')
router.get('/getProdAttribute',async(req,res)=>{
    const{id,images,title}=req.body
    try{
        const shopifyStore = new shopify({
            shopName: process.env.Shopename,
            accessToken: process.env.Acesstoken,
            apiVersion: process.env.Apiversion  
        
        });
        const product = await shopifyStore.product.list({since_id:since_id})

    }catch(error){

    }
})
module.exports=router