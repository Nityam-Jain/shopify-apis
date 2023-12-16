const express = require('express')
const router = express.Router()
const shopify = require('shopify-api-node')
router.get('/getDatawithSpecfield',async(req,res)=>{
    // const{id,feilds}=req.body
     try{
        const shopifyStore = new shopify({
            shopName: process.env.Shopename,
            accessToken: process.env.Acesstoken,
            apiVersion: process.env.Apiversion
        
        });
        let  productId =7323151270072
        const product = await shopifyStore.product.get(productId,{
            fields: "id,title"})
    return res.status(200).send({status: 'Success',Data: product })
    }catch(error){
        console.error('Error fetching specific products:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
     }
})
module.exports=router