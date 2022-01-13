const express=require('express');
const app=express();
const fast2sms=require('fast-two-sms')
require('dotenv').config()
const PORT=3000
app.use(express.json())

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}))   

app.post('/sendMessage',async(req,res)=>{
    const response=await fast2sms.sendMessage({authorization:process.env.API_KEY,message:"hello this nodejs messanger",numbers:[9009120899]})
    console.log("message send successfully")
    res.send(response)
})

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.listen(PORT,()=>{
    console.log("server connected on port",PORT)
})