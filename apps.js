const http=require('http')
const express=require('express')

const app=express();

app.use((req,res,next)=>{
    console.log('first express')
    if(req.url=='/data')
    {
        res.send('hey')
    }
    next()
})
app.use((req,res,ne)=>{
    console.log('second express')
    res.send('<h2>hello world</h2>')
    ne()
})
app.use((req,res,next)=>{
    console.log('third express')
})
const server=http.createServer(app);

server.listen(8000);