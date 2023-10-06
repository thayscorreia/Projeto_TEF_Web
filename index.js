// import { openDb } from './controller/api_config'
// openDb()

import express from 'express'
const app = express()
import bodyParser from 'body-parser'



app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/",(req, res, next) => {
    res.render("index")
})

app.get("/cadastroFormaPagamento", (req,res,next) =>{
    res.render('cadastroFormaPagamento')
})

app.post("/salvarFormaPagamento", (req,res,next) =>{
    const opcaoParcela = req.body.opcaoParcela
    const descricao = req.body.descricao
    const desconto = req.body.desconto
    res.send(`A forma de pagamento foi salvo!
                opçãoParcela: ${opcaoParcela}
                descricao: ${descricao}
                desconto: ${desconto}
            `)
})

app.post("/salvarPagamento", (req,res,next) =>{
    const preco = req.body.preco
    const formaPagamento = req.body.formaPagamento
    const desconto = req.body.desconto
    const valorTotalCompra = req.body.valorTotalCompra
    res.send(`Pagamento Realizado! 
                Preço: ${preco} - 
                formaPagamento: ${formaPagamento} -
                desconto: ${desconto} -
                valorTotalCompra: ${valorTotalCompra}`)
})

app.listen(8082, () =>{
    console.log('app rodando na porta 8182')
})