const sqlite3 = require("sqlite3").verbose();

// cria ou abre banco
const db = new sqlite3.Database("banco.db");

// cria tabela
db.run(`
CREATE TABLE IF NOT EXISTS abrigos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    cidade TEXT NOT NULL,
    endereco TEXT NOT NULL,
    vagas INTEGER NOT NULL
)
`);

module.exports = db;