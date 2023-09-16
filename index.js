const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get("/",(req, res, next) => {
    res.render("index")
})

app.listen(8082, () =>{
    console.log('app rodando na porta 8182')
})