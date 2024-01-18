require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubData={
    "id": 12,
    "title": "Brown Perfume",
    "description": "Royal_Mirage Sport Brown Perfu...",
    "price": 40,
    "discountPercentage": 15.66,
    "rating": 4,
    "stock": 52,
    "brand": "Royal_Mirage",
    "category": "fragrances",
    "thumbnail": "https://cdn.dummyjson.com/product-images/12/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/12/1.jpg",
      "https://cdn.dummyjson.com/product-images/12/2.jpg",
      "https://cdn.dummyjson.com/product-images/12/3.png",
      "https://cdn.dummyjson.com/product-images/12/4.jpg",
      "https://cdn.dummyjson.com/product-images/12/thumbnail.jpg"
    ]
  }
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
res.send("siddahmad")
})
app.get('/github',(req,res)=>{
res.json(githubData)
})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})