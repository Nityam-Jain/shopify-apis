const express = require('express')
const router = express.Router();
const shopify = require('shopify-api-node')
router.get('/getSingleProdu',async(req,res)=>{
    console.log("hello")
    const{id}=req.body
     try{
        const shopifyStore = new shopify({
            shopName: process.env.Shopename,
            accessToken: process.env.Acesstoken,
            apiVersion: process.env.Apiversion
        
        });
        const product = await shopifyStore.product.get(id)
        return res.status(200).send({status: 'Success',SingleProduct: product })
     }
     catch(error){
        console.error('Error fetching specific products:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
module.exports=router;