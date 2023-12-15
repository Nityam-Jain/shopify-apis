const express = require('express')
const router = express.Router()
const shopify = require('shopify-api-node')
router.get('/getSpecificProd',async(req,res)=>{
    const {ids}=req.body
  try{
    const shopifyStore = new shopify({
        shopName: process.env.Shopename,
        accessToken: process.env.Acesstoken,
        apiVersion: process.env.Apiversion
    
    });
    const products = await shopifyStore.product.list({ids:ids})
    return res.status(200).send({status: 'Success', message: 'Products Added successfully', product: products })
  }catch(error){
    console.error('Error fetching specific products:', error.message);
    // Handle the error and send an appropriate response
    res.status(500).json({ error: 'Internal Server Error' });
  }
}) 
module.exports= router