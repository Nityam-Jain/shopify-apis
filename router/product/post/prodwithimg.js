const express = require('express')
const router = express.Router();
const shopify = require('shopify-api-node')
router.post('/prodwithimg',async(req,res) => {
    const{title,body_html,vendor,product_type,images} = req.body;
    if(!title || !body_html || !vendor || !product_type || !images){
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
            images
          }
          const prodwithimg = await shopifyStore.product.create(newproduct)
          return res.status(200).send({status: 'Success', message: 'Products Added successfully', product: prodwithimg });
      } catch(error) {
       return res.status(500).send({ message: 'Internal Server Error',"error":error.message});
        }
    })  
module.exports = router;