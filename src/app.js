const express = require('express')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname,"statics")))
const accountRouter = require(path.join(__dirname,'./routers/accountRouter.js'))
app.use('/account',accountRouter)
app.listen(3000,'127.0.0.1',err=>{
    if(err){
        console.log(err)
    }else{
        console.log('success');
        
    }
})
