const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const rotas = require("./router");

app.use("/api", rotas); // 👈 boa prática usar prefixo

app.get("/", (req, res) => {
    res.send("API SOS Abrigos funcionando!");
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});