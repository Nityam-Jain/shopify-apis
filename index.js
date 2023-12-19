const express = require('express')
//product create apis
const createDraftPro = require('./router/product/post/createDraftPro')
const creProdVar = require('./router/product/post/creProdVar')
const creVarOpt = require('./router/product/post/creVarOpt')
const defprodvar = require('./router/product/post/defprodvar')
const prodwithimg = require('./router/product/post/prodwithimg')
const defvarprod = require('./router/product/post/defvarprod')
const unpublishedprod = require('./router/product/post/unpublishprod')
const productwithmeta = require('./router/product/post/productwithmeta')
const productwithseoanddes = require('./router/product/post/prodwithseoanddesc')
const prodWithoutTitle = require('./router/product/post/prodWithoutTitle')
//product get Apis
const getSpecificProd = require('./router/product/get/getlistspecificprod')
const getAllProd = require('./router/product/get/getAllProd')
const getProdAfterId = require('./router/product/get/getProdAfterId')
const getProdofCollec = require('./router/product/get/getProdofCollec')
const getCurrency = require('./router/product/get/getCurrency')
const getSingleProduct = require('./router/product/get/getSingleProduct')
const getDatawithSpecfield = require('./router/product/get/getDatawithSpecfield')
const getCountofProd = require('./router/product/get/getCountofProd')
const getCountofProdinCollec = require('./router/product/get/getCountofProdinCollec')
//product put(update) Apis
const updatemetafield = require('./router/product/put/updatemetafield')
require('dotenv').config();

const app = express() 
app.use(express.json())

//calling Apis
//product create apis
app.use('/api',createDraftPro)
app.use('/api',creProdVar)
app.use('/api',creVarOpt)
app.use('/api',defprodvar)
app.use('/api',prodwithimg)
app.use('/api',defvarprod)
app.use('/api',unpublishedprod)
app.use('/api',productwithmeta)
app.use('/api',productwithseoanddes)
app.use('/api',prodWithoutTitle)
//product get apis
app.use('/api',getSpecificProd)
app.use('/api',getAllProd)
app.use('/api',getProdAfterId)
app.use('/api',getProdofCollec)
app.use('/api',getCurrency)
app.use('/api',getSingleProduct)
app.use('/api',getDatawithSpecfield)
app.use('/api',getCountofProd)
app.use('/api',getCountofProdinCollec)

//product data update Api calling
app.use('/api',updatemetafield)
//PORT
PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`PORT running sucessfully on ${PORT}`)
})
