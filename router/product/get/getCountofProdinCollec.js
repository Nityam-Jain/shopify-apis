const express = require('express')
const router = express.Router()
const shopify = require('shopify-api-node')
router.get('/getCountofProdinCollec',async(req,res)=>{
   try{
    const{collection_id}=req.body
    const shopifyStore = new shopify({
        shopName: process.env.Shopename,
        accessToken: process.env.Acesstoken,
        apiVersion: process.env.Apiversion
    
    });
    const ProdcountinCollec = await shopifyStore.product.count({collection_id:collection_id})
    return res.status(200).send({status: 'Success',"Count":ProdcountinCollec})

   }
   catch(error){
    console.error('Error in fethching the count of product', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
   }
})
module.exports=router;