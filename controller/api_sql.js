import { openDb } from "./api_config.js";

export async function createTable() {
    const tabelaCadastroPagto = 
    `
        CREATE TABLE IF NOT EXISTS CADASTRO_PAGAMENTO
        (   id INTEGER PRIMARY KEY,
            DESCRICAO_PAGAMENTO TEXT,
            OPCAO INTEGER,
            DESCONTO NUMERIC,
            DATA_CRIACAO NUMERIC,
            DATA_ATUALIZACAO NUMERIC
        )
    `
    openDb().then(db => {
        db.exec(tabelaCadastroPagto)
    })
}