const express = require('express')
const router = express.Router()
const shopify = require('shopify-api-node')
router.post('/defprodvar',async(req,res) => {
    const{title,body_html,vendor,product_type,product_tags} = req.body;
    if(!title || !body_html || !vendor || !product_type || !product_tags){
        return res.status(400).send({message: "please fill all required fields"})
    }
    try{
    const shopifyStore = new shopify({
        shopName: process.env.Shopename,
        accessToken: process.env.Acesstoken,
        apiVersion: process.env.Apiversion
    
    });
    const newproduct = {
        title,
        body_html,
        vendor,
        product_type,
        product_tags
      }
      const defprodvar = await shopifyStore.product.create(newproduct)
      return res.status(200).send({status: 'Success', message: 'Products Added successfully', product: defprodvar });
  } catch(error) {
   return res.status(500).send({ message: 'Internal Server Error',"error":error.message});
    }
})
module.exports= router;