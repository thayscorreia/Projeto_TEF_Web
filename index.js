const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get("/",(req, res, next) => {
    res.render("index")
})

app.get("/cadastroFormaPagamento", (req,res,next) =>{
    res.render('cadastroFormaPagamento')
})

app.listen(8082, () =>{
    console.log('app rodando na porta 8182')
})