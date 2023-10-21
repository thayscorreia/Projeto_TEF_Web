
import express from 'express'
const app = express()
import bodyParser from 'body-parser'

import {  createTableCadastroPagto
    , createTablePagto
    , selectTableCadastroPagto
    , insertTableCadastroPagto
    , updateTableCadastroPagto
    , deleteTableCadastroPagto
    , insertPagto
    , selectTablePagto
}  from './controller/controller.js'

createTableCadastroPagto()
createTablePagto()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/",(req, res, next) => {
    async function obterFormasPagto(){
        const formaPagamento = await selectTableCadastroPagto()
        const pagamentos = await selectTablePagto()
        res.render("index", {
            formasPagamento: formaPagamento,
            pagamentos: pagamentos
        })
    }
    obterFormasPagto()
})

app.get("/cadastroFormaPagamento", (req, res , next) => {
    try {
        async function obterFormasPagto(){
            const formaPagamento = await selectTableCadastroPagto()
            res.render("cadastroFormaPagamento", {
                formasPagamento: formaPagamento
            })
        }
        obterFormasPagto()

    } catch (error) {
        res.send(500, error)
    }
})

app.post("/salvarFormaPagamento", (req,res,next) =>{

    const id = parseInt(req.body.id)
    const opcaoParcela = req.body.opcaoParcela
    const descricao = req.body.descricao
    const desconto = req.body.desconto
    
    async function inserirFormaPagamento(){
        const formaPagamento = await insertTableCadastroPagto( descricao, opcaoParcela, desconto)
        
        res.redirect("/cadastroFormaPagamento")
    }
    
    async function atualizarFormaPagamento(){
        const formaPagamento = await updateTableCadastroPagto( id, descricao, opcaoParcela, desconto)
        
        res.redirect("/cadastroFormaPagamento")
    }
    if(id){
        atualizarFormaPagamento()
    }else{
        inserirFormaPagamento()
    }
    
})

app.get("/excluirFormaPagto/:id", (req,res,next) =>{
    const id = parseInt(req.params.id)
    async function deletarFormaPagamento(){
        const formaPagamento = await deleteTableCadastroPagto( id )
        
        res.redirect("/cadastroFormaPagamento")
    }
    if(id)
        deletarFormaPagamento()
    
})

app.post("/salvarPagamento", (req,res,next) =>{
    const preco = req.body.preco
    const formaPagamento = req.body.idFormaPagamento
    const desconto = req.body.desconto
    const valorTotalCompra = req.body.valorTotalCompra

    async function inserirPagamento(){
        const pagamento = await insertPagto( preco, desconto, valorTotalCompra,formaPagamento)
        
        res.redirect("/")
    }

    inserirPagamento()
})

app.listen(8082, () =>{
    console.log('app rodando na porta 8182')
})