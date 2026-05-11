const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = new sqlite3.Database("banco.db");

// cria tabela
db.run(`
CREATE TABLE IF NOT EXISTS vendedores (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT,
  cpf TEXT,
  loja TEXT,
  telefone TEXT,
  email TEXT
)
`);

// cadastro
app.post("/vendedor", (req, res) => {
  const { nome, cpf, loja, telefone, email } = req.body;

  db.run(
    "INSERT INTO vendedores (nome, cpf, loja, telefone, email) VALUES (?, ?, ?, ?, ?)",
    [nome, cpf, loja, telefone, email],
    function (err) {
      if (err) return res.status(500).send("erro");
      res.send("ok");
    }
  );
});

// listar (teste)
app.get("/vendedores", (req, res) => {
  db.all("SELECT * FROM vendedores", [], (err, rows) => {
    res.json(rows);
  });
});

app.listen(3000, () => console.log("Rodando na 3000"));