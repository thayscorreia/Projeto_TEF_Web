import { db } from './api_config.js'
import { sql } from './api_sql.js'

const createTableCadastroPagto = async function () {
    try {
        let sqlQuery = sql.createTableCadastroPagto()

        let exec = await db.exec(sqlQuery)
        console.log(exec)
        return exec

    } catch (err) {
        console.error(err)
    }
}

const createTablePagto = async function () {
    try {
        let sqlQuery = sql.createTablePagto()

        let exec = await db.exec(sqlQuery)
        console.log(exec)
        return exec

    } catch (err) {
        console.error(err)
    }
}

const selectTableCadastroPagto = async function () {
    try {
        let sqlQuery = sql.selectTableCadastroPagto()

        let retorno = new Promise((resolve, reject) => {
            db.all(sqlQuery,
                (err, rows) => {
                    if (err)
                        reject(err)
                    else {
                        resolve(rows)
                    }
                });
        })
        return retorno

    } catch (err) {
        console.error(err)
    }
}

const insertTableCadastroPagto = async function (descricao, opcao, desconto) {
    try {
        let sqlQuery = sql.insertTableCadastroPagto()

        let result = new Promise((resolve, reject) => {
            db.run(sqlQuery, [descricao, opcao, desconto, new Date().getTime(), null], (err) => {
                if (err)
                    (err)
                else {
                resolve()
                }
            })
        })
        return result

    } catch (err) {
        console.error(err)
    }
}

const updateTableCadastroPagto = async function (id, campos) {
    try {
        let sqlQuery = sql.updateTableCadastroPagto()

        let result = await db.run(sqlQuery, [descricao, opcao, desconto, new Date().getTime(), null], (err) => {
            if (err)
                return console.error(err.message)
        })
        return result

    } catch (err) {
        console.error(err)
    }
}

const deleteTableCadastroPagto = async function (id) {
    try {
        let sqlQuery = sql.deleteTableCadastroPagto(id)

        let result = await db.exec(sqlQuery)
        console.log(result)

        return result

    } catch (err) {
        console.error(err)
    }
}

export {
    createTableCadastroPagto
    , createTablePagto
    , selectTableCadastroPagto
    , insertTableCadastroPagto
    , updateTableCadastroPagto
    , deleteTableCadastroPagto
}