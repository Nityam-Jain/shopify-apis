const express = require('express')
const router = express.Router()
const shopify = require('shopify-api-node')
router.get('/getCurrency',async(req,res)=>{
    const{presentment_currencies}=req.body
  try{
    const shopifyStore = new shopify({
        shopName: process.env.Shopename,
        accessToken: process.env.Acesstoken,
        apiVersion: process.env.Apiversion 
    
    });
    const getcurrency = await shopifyStore.product.list({presentment_currencies:presentment_currencies})
    return res.status(200).send({status: 'Success', message: 'Products Added successfully', getCurrency: getcurrency })

  }
  catch(error){
   console.error('Error fetching specific products:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})
module.exports=router;