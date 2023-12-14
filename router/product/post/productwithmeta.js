const express = require('express')
const router = express.Router();
const shopify = require('shopify-api-node')
router.post('/productwithmeta',async(req,res)=>{
    // const
    // {
    //    title:"cosmetic",
    //     body_html:"<h1> product with metafields</h1>",
    //     vendor,
    //     product_type,
    //     metafields
    // } 
    // if(!title || !body_html || !vendor || !product_type || !metafields){
    //     return res.status(400).send({message: "please fill all required fields"})
    // }
    try{
        const shopifyStore = new shopify({
            shopName: process.env.Shopename,
            accessToken: process.env.Acesstoken,
            apiVersion: process.env.Apiversion
        
        });
        const newproduct = {
            title : "cosmetic",
            body_html: "<h1> product with metafields</h1>",
            vendor:"sara",
            product_type:"cosmeticProducts",
            metafields:
            [
                {
                   "key": "new",
                  "value": "newvalue",
                  "type": "single_line_text_field",
                  "namespace": "global"
                }
              ]
          }
          const productwithmeta = await shopifyStore.product.create(newproduct)
          return res.status(200).send({status: 'Success', message: 'Products Added successfully', product: productwithmeta});
        }catch(error){
        return res.status(500).send({ message: 'Internal Server Error',"error":error.message});
  }
})
module.exports = router;