const express = require('express')
const router = express.Router()
const shopify = require('shopify-api-node')
router.get('/getProdofCollec/:collection_id',async(req,res)=>{
    const{collection_id}=req.query
   try{
    const shopifyStore = new shopify({
        shopName: process.env.Shopename,  
        accessToken: process.env.Acesstoken, 
        apiVersion: process.env.Apiversion
    
    });
    const collecProduct = await shopifyStore.product.list({collection_id})
    // console.log(collecProduct)
    return res.status(200).send({status: 'Success', message: 'Products get successfully', products: collecProduct})

   }catch(error){
     console.error('Error fetching specific products:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
   }
})
module.exports=router;