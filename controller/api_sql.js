const sql = {

    createTableCadastroPagto() {
        const sql =
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
        return sql
    },

    createTablePagto() {
        const sql =
            `
            CREATE TABLE IF NOT EXISTS PAGAMENTO
            (   id INTEGER PRIMARY KEY,
                VALOR_PRODUTO NUMERIC,
                VALOR_DESCONTO NUMERIC,
                VALOR_COMPRA NUMERIC,
                DATA_CRIACAO NUMERIC,
                FORMA_PAGAMENTO INTEGER NOT NULL,
                FOREIGN KEY (FORMA_PAGAMENTO)
                REFERENCES CADASTRO_PAGAMENTO (id)            
            )
        `
        return sql
    },

    selectTableCadastroPagto() {
        const sql =
            `
            SELECT id, DESCRICAO_PAGAMENTO, OPCAO, DESCONTO, DATA_CRIACAO, DATA_ATUALIZACAO 
            FROM CADASTRO_PAGAMENTO
        `
        return sql
    },

    insertTableCadastroPagto() {
        const sql =
            `
            INSERT INTO CADASTRO_PAGAMENTO 
                ( DESCRICAO_PAGAMENTO, OPCAO, DESCONTO, DATA_CRIACAO, DATA_ATUALIZACAO )
            VALUES 
                (?, ?, ?, DATETIME(), ?)
        `
        return sql
    },

    updateTableCadastroPagto(ID) {
        const sql =
            `
            UPDATE CADASTRO_PAGAMENTO 
                SET DESCRICAO_PAGAMENTO = ?, OPCAO = ? , DESCONTO = ? , DATA_ATUALIZACAO = DATETIME()
            WHERE id = ${ID}
        `
        return sql
    },

    deleteTableCadastroPagto(ID) {
        const sql =
            `
            DELETE FROM CADASTRO_PAGAMENTO 
            WHERE id = ${ID}
        `
        return sql
    }

}

export { sql }