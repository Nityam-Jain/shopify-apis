const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');
const shopify = require('shopify-api-node')
router.use(bodyParser.json());
router.post('/prodwithseoanddes',async(req,res)=>{
    const{title, body_html, vendor, product_type, metafields_global_title_tag ,metafields_global_description_tag } = req.body;
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
        metafields_global_title_tag,
        metafields_global_description_tag
  }
  const productwithseoanddes = await shopifyStore.product.create(newproduct)
  return res.status(200).send({status: 'Success', message: 'Products Added successfully', product:  productwithseoanddes});
}catch(error){
    return res.status(500).send({ message: 'Internal Server Error',"error":error.message});
}
})
module.exports=router;
