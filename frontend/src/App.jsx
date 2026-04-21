import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [abrigos, setAbrigos] = useState([]);

  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");
  const [endereco, setEndereco] = useState("");
  const [vagas, setVagas] = useState("");

  const [editandoId, setEditandoId] = useState(null);

  useEffect(() => {
    buscarAbrigos();
  }, []);

  async function buscarAbrigos() {
    const resposta = await fetch("https://sos-abrigos.onrender.com/api/abrigos");
    const dados = await resposta.json();
    setAbrigos(dados);
  }

  async function cadastrarAbrigo(e) {
    e.preventDefault();

    await fetch("https://sos-abrigos.onrender.com/api/abrigos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ nome, cidade, endereco, vagas })
    });

    limparCampos();
    buscarAbrigos();
  }

  async function excluirAbrigo(id) {
    await fetch(`https://sos-abrigos.onrender.com/api/abrigos/${id}`, {
      method: "DELETE"
    });

    buscarAbrigos();
  }

  function iniciarEdicao(abrigo) {
    setEditandoId(abrigo.id);
    setNome(abrigo.nome);
    setCidade(abrigo.cidade);
    setEndereco(abrigo.endereco);
    setVagas(abrigo.vagas);
  }

  async function atualizarAbrigo(e) {
    e.preventDefault();

    await fetch(`https://sos-abrigos.onrender.com/abrigos${editandoId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ nome, cidade, endereco, vagas })
    });

    setEditandoId(null);
    limparCampos();
    buscarAbrigos();
  }

  function limparCampos() {
    setNome("");
    setCidade("");
    setEndereco("");
    setVagas("");
  }

  return (
    <div className="container">
      <h1>SOS Abrigos</h1>
      <p>Cadastro e consulta de abrigos</p>

      <form
        onSubmit={editandoId ? atualizarAbrigo : cadastrarAbrigo}
        className="formulario"
      >
        <input
          type="text"
          placeholder="Nome do abrigo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="text"
          placeholder="Cidade"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />

        <input
          type="text"
          placeholder="Endereço"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />

        <input
          type="number"
          placeholder="Vagas"
          value={vagas}
          onChange={(e) => setVagas(e.target.value)}
        />

        <button type="submit">
          {editandoId ? "Atualizar" : "Cadastrar"}
        </button>

        {editandoId && (
          <button
            type="button"
            onClick={() => {
              setEditandoId(null);
              limparCampos();
            }}
          >
            Cancelar
          </button>
        )}
      </form>

      {abrigos.map((abrigo) => (
        <div className="card" key={abrigo.id}>
          <h2>{abrigo.nome}</h2>
          <p>Cidade: {abrigo.cidade}</p>
          <p>Endereço: {abrigo.endereco}</p>
          <p>Vagas: {abrigo.vagas}</p>

          <div className="acoes">
            <button onClick={() => iniciarEdicao(abrigo)}>
              Editar
            </button>

            <button onClick={() => excluirAbrigo(abrigo.id)}>
              Excluir
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;