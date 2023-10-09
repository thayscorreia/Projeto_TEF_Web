
import express from 'express'
const app = express()
import bodyParser from 'body-parser'

import {  createTableCadastroPagto
    , createTablePagto
    , selectTableCadastroPagto
    , insertTableCadastroPagto
    , updateTableCadastroPagto
    , deleteTableCadastroPagto
}  from './controller/controller.js'

createTableCadastroPagto()
createTablePagto()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/",(req, res, next) => {
    res.render("index")
})

app.get("/obterFormasPagamentos", (req, res , next) => {
    try {
        async function obterFormasPagto(){
            const formaPagamento = await selectTableCadastroPagto()
            res.redirect("/cadastroFormaPagamento")
        }
        obterFormasPagto()

    } catch (error) {
        res.send(500, error)
    }
})

app.get("/cadastroFormaPagamento", (req,res,next) =>{
    res.render('cadastroFormaPagamento')
})

app.post("/salvarFormaPagamento", (req,res,next) =>{
    const opcaoParcela = req.body.opcaoParcela
    const descricao = req.body.descricao
    const desconto = req.body.desconto
    async function inserirFormaPagamento(){
        const formaPagamento = await insertTableCadastroPagto( descricao, opcaoParcela, desconto)
        
        res.redirect("/obterFormasPagamentos")
    }
    inserirFormaPagamento()
    
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