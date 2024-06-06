const express=require("express");
const app=express();
const {v4 : uuidv4} = require('uuid')

app.use(express.json());
app.get("/",async (req,res)=>{
    const transactioncode = uuidv4();
   const response= await fetch("https://devp-reqsendmoney-230622-api.hubtel.com/request-money/0248091292",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic ' + Buffer.from('tkcrgisk:wnvmwvad').toString('base64')
        },
        body: JSON.stringify({
          amount: 100,
          title: 'Vamos',
          description: 'Delivery orders',
          clientReference: transactioncode,

          callbackUrl: 'http://example.com',
          cancellationUrl: 'http://example.com',
          returnUrl: 'http://example.com',
          
    
        })
    })
    const result = await response.json();
    res.send(result);
    console.log("Success:", result);
})

app.listen("3000",()=>{
    console.log("listing 3000")
})