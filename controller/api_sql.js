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
            SELECT ID, DESCRICAO_PAGAMENTO, OPCAO, DESCONTO, DATA_CRIACAO, DATA_ATUALIZACAO 
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
                (?, ?, ?, ?, ?)
        `
        return sql
    },

    updateTableCadastroPagto(ID, campos) {
        const sql =
            `
            UPDATE CADASTRO_PAGAMENTO 
                SET 
            WHERE id = ${ID}
        `
        return sql
    },

    deleteTableCadastroPagto(ID) {
        const sql =
            `
            DELETE CADASTRO_PAGAMENTO 
            WHERE id = ${ID}
        `
        return sql
    }

}

export { sql }