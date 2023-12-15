const express = require('express')
const router = express.Router()
const shopify = require('shopify-api-node')
router.get('/getAllProd',async(req,res)=>{
    try{
        const shopifyStore = new shopify({
            shopName: process.env.Shopename,
            accessToken: process.env.Acesstoken,
            apiVersion: process.env.Apiversion
        
        });
        const products = await shopifyStore.product.list()
        return res.status(200).send({status: 'Success', message: 'Products Added successfully', Allproducts: products})
    }catch(error){
        console.error('Error fetching specific products:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
   }
})
module.exports=router;