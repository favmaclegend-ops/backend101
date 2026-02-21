const express = require('express')
const app = express()
const port = 5000

app.get('/',(req,res) => {
    res.send('ramadan na for we all')   
});

app.listen(port,()=>{
    console.log('we all the keep the fast nor matter if u na christian or not')
})
