const express = require('express')
const router = express.Router();
const shopify = require('shopify-api-node')
router.post('/unpublishedprod',async(req,res)=>{
    const{title,body_html,vendor,product_type,published} = req.body;
   try{
        const shopifyStore = new shopify({
            shopName: process.env.Shopename,
            accessToken: process.env.Acesstoken,
            apiVersion: process.env.Apiversion
        
        });
        const newproduct = {
            title ,
            body_html ,
            vendor,
            product_type,
            published 
        }
       
      const unpublishedprod = await shopifyStore.product.create(newproduct)
            return res.status(200).send({status: 'Success', message: 'Products Added successfully', product: unpublishedprod });
     }catch(error) {
        console.log(error)
        return res.status(500).send({ message: 'Internal Server Error',"error":error.message});
         }
})
module.exports=router
