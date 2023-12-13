const express = require('express')
const router = express.Router();
const shopify = require("shopify-api-node");

router.post('/createProdVar',async(req,res)=>{
    const {title,body_html,vendor,product_type,variants} =req.body;
    if(!title || !body_html || !vendor || !product_type ||!variants){
     return res.status(400).send({message: "please fill all required fields"})
}
   try{
    const shopifyStore = new shopify({
        shopName: process.env.Shopename,
        accessToken: process.env.Acesstoken,
        apiVersion: process.env.Apiversion
    });
    const newproVar = {
        title,
        body_html,
        vendor,
        product_type,
        variants  
    }
    const addProdVar = await shopifyStore.product.create(newproVar)
    return res.status(200).send({status: 'Success', message: 'Products Added successfully', product: addProdVar })
   }catch(error){
    console.log(error)
    return res.status(500).send({ message: 'Internal Server Error'});
   }
})
module.exports = router;


