const express = require("express");
const router = express.Router();

const db = require("./db");

// LISTAR
router.get("/abrigos", (req, res) => {
    db.all("SELECT * FROM abrigos", [], (erro, rows) => {
        if (erro) {
            return res.status(500).json({ erro: erro.message });
        }
        res.json(rows);
    });
});

// CADASTRAR
router.post("/abrigos", (req, res) => {
    const { nome, cidade, endereco, vagas } = req.body;

    // validação
    if (!nome || !cidade || !endereco || vagas == null) {
        return res.status(400).json({ erro: "Preencha todos os campos" });
    }

    db.run(
        "INSERT INTO abrigos (nome, cidade, endereco, vagas) VALUES (?, ?, ?, ?)",
        [nome, cidade, endereco, vagas],
        function (erro) {
            if (erro) {
                return res.status(500).json({ erro: erro.message });
            }

            res.status(201).json({
                mensagem: "Abrigo cadastrado!",
                id: this.lastID
            });
        }
    );
});

// ATUALIZAR
router.put("/abrigos/:id", (req, res) => {
    const id = req.params.id;
    const { nome, cidade, endereco, vagas } = req.body;

    if (!nome || !cidade || !endereco || vagas == null) {
        return res.status(400).json({ erro: "Preencha todos os campos" });
    }

    db.run(
        `UPDATE abrigos 
         SET nome = ?, cidade = ?, endereco = ?, vagas = ?
         WHERE id = ?`,
        [nome, cidade, endereco, vagas, id],
        function (erro) {
            if (erro) {
                return res.status(500).json({ erro: erro.message });
            }

            if (this.changes === 0) {
                return res.status(404).json({ mensagem: "Abrigo não encontrado" });
            }

            res.json({ mensagem: "Abrigo atualizado!" });
        }
    );
});

// DELETE
router.delete("/abrigos/:id", (req, res) => {
    const id = req.params.id;

    db.run("DELETE FROM abrigos WHERE id = ?", [id], function (erro) {
        if (erro) {
            return res.status(500).json({ erro: erro.message });
        }

        if (this.changes === 0) {
            return res.status(404).json({ mensagem: "Abrigo não encontrado" });
        }

        res.json({ mensagem: "Abrigo removido com sucesso!" });
    });
});

module.exports = router;